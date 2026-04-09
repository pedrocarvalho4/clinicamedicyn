import { newsItems } from '../data/news';

function formatDate(date: string) {
  return new Intl.DateTimeFormat('pt-PT', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));
}

function getYouTubeEmbedUrl(url: string) {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes('youtube.com')) {
      const videoId = parsedUrl.searchParams.get('v');
      return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
    }

    if (parsedUrl.hostname.includes('youtu.be')) {
      const videoId = parsedUrl.pathname.replace('/', '');
      return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
    }

    return url;
  } catch {
    return url;
  }
}

export default function NewsPage() {
  const publishedNews = [...newsItems]
    .filter((item) => item.isPublished)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
          Notícias
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Histórico de notícias
        </h1>
        <p className="mt-3 max-w-2xl text-base text-slate-600">
          Consulte as notícias, campanhas e destaques publicados pela Clínica Medicyn.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {publishedNews.map((item) => (
          <article
            key={item.id}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            <div className="aspect-[16/10] w-full bg-slate-100">
              {item.mediaType === 'image' && item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              ) : item.mediaType === 'youtube' && item.videoUrl ? (
                <iframe
                  src={getYouTubeEmbedUrl(item.videoUrl)}
                  title={item.title}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-slate-500">
                  Sem media disponível
                </div>
              )}
            </div>

            <div className="p-6">
              <div className="mb-3 flex items-center gap-3 text-sm text-slate-500">
                <span>{formatDate(item.date)}</span>
                <span className="h-1 w-1 rounded-full bg-slate-300" />
                <span className="capitalize">{item.category}</span>
              </div>

              <h2 className="text-xl font-semibold text-slate-900">
                {item.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.excerpt}
              </p>

              {item.content ? (
                <p className="mt-4 text-sm leading-6 text-slate-500">
                  {item.content}
                </p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}