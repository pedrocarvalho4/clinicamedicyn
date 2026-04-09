import fs from 'node:fs/promises'

const SOURCES_FILE = './src/data/editorial-sources.json'
const OUTPUT_FILE = './tmp/editorial-result.json'

function getTodayParts() {
  const now = new Date()

  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Lisbon',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })

  const parts = formatter.formatToParts(now)

  const year = Number(parts.find((p) => p.type === 'year')?.value)
  const month = Number(parts.find((p) => p.type === 'month')?.value)
  const day = Number(parts.find((p) => p.type === 'day')?.value)

  return { year, month, day }
}

function normalizeText(text) {
  return text
    .replace(/\s+/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .trim()
}

function extractTextFromHtml(html) {
  return normalizeText(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
  )
}

function monthNameVariants(month) {
  const map = {
    1: ['january', 'jan'],
    2: ['february', 'feb'],
    3: ['march', 'mar'],
    4: ['april', 'apr'],
    5: ['may'],
    6: ['june', 'jun'],
    7: ['july', 'jul'],
    8: ['august', 'aug'],
    9: ['september', 'sep', 'sept'],
    10: ['october', 'oct'],
    11: ['november', 'nov'],
    12: ['december', 'dec'],
  }

  return map[month] ?? []
}

function buildDatePatterns(month, day) {
  const months = monthNameVariants(month)

  const patterns = []

  for (const monthName of months) {
    patterns.push(`${day} ${monthName}`)
    patterns.push(`${monthName} ${day}`)
    patterns.push(`${day}${getOrdinalSuffix(day)} ${monthName}`)
    patterns.push(`${monthName} ${day}${getOrdinalSuffix(day)}`)
  }

  return patterns
}

function getOrdinalSuffix(day) {
  if (day >= 11 && day <= 13) {
    return 'th'
  }

  const lastDigit = day % 10

  if (lastDigit === 1) return 'st'
  if (lastDigit === 2) return 'nd'
  if (lastDigit === 3) return 'rd'

  return 'th'
}

function scoreSourceMatch(text, source, month, day) {
  const lowerText = text.toLowerCase()

  let keywordHits = 0

  for (const keyword of source.keywords ?? []) {
    if (lowerText.includes(keyword.toLowerCase())) {
      keywordHits += 1
    }
  }

  const monthHits = monthNameVariants(month).some((m) => lowerText.includes(m))
  const dateHits = buildDatePatterns(month, day).some((p) =>
    lowerText.includes(p.toLowerCase())
  )

  const monthlySignal =
    source.keywords?.some((k) => lowerText.includes(k.toLowerCase())) &&
    monthHits

  const score =
    (keywordHits * 10) +
    (dateHits ? 25 : 0) +
    (monthlySignal ? 10 : 0)

  return {
    score,
    keywordHits,
    dateHits,
    monthHits,
    monthlySignal,
  }
}

async function fetchSource(source) {
  const response = await fetch(source.url, {
    headers: {
      'User-Agent': 'MedicynEditorialBot/1.0',
      'Accept-Language': 'en-US,en;q=0.9,pt-PT;q=0.8',
    },
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch ${source.url}: ${response.status}`)
  }

  const html = await response.text()

  return html
}

async function main() {
  const { month, day } = getTodayParts()

  const rawSources = await fs.readFile(SOURCES_FILE, 'utf8')
  const sources = JSON.parse(rawSources).filter((s) => s.enabled)

  const results = []

  for (const source of sources) {
    try {
      const html = await fetchSource(source)
      const text = extractTextFromHtml(html)
      const match = scoreSourceMatch(text, source, month, day)

      results.push({
        sourceId: source.id,
        sourceName: source.name,
        url: source.url,
        specialties: source.specialties ?? [],
        priority: source.priority ?? 'medium',
        score: match.score,
        keywordHits: match.keywordHits,
        dateHits: match.dateHits,
        monthHits: match.monthHits,
        monthlySignal: match.monthlySignal,
        matched: match.score >= 20,
      })
    } catch (error) {
      results.push({
        sourceId: source.id,
        sourceName: source.name,
        url: source.url,
        specialties: source.specialties ?? [],
        priority: source.priority ?? 'medium',
        matched: false,
        error: error.message,
      })
    }
  }

  const matchedResults = results
    .filter((r) => r.matched)
    .sort((a, b) => b.score - a.score)

  const output = {
    checkedAt: new Date().toISOString(),
    timezone: 'Europe/Lisbon',
    today: { month, day },
    hasMatch: matchedResults.length > 0,
    topMatch: matchedResults[0] ?? null,
    matches: matchedResults,
    allResults: results,
  }

  await fs.mkdir('./tmp', { recursive: true })
  await fs.writeFile(OUTPUT_FILE, JSON.stringify(output, null, 2), 'utf8')

  console.log(JSON.stringify(output, null, 2))
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
