import { Link } from "react-router-dom";
import { newsItems } from "../data/news";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("pt-PT", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

function getYouTubeEmbedUrl(url: string) {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes("youtube.com")) {
      const videoId = parsedUrl.searchParams.get("v");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
    }

    if (parsedUrl.hostname.includes("youtu.be")) {
      const videoId = parsedUrl.pathname.replace("/", "");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
    }

    return url;
  } catch {
    return url;
  }
}

export default function NewsSection() {
  const latestNews = [...newsItems]
    .filter((item) => item.isPublished)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];

  if (!latestNews) {
    return null;
  }

  return (
    <section className="mx-auto mt-16 max-w-6xl px-4">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Notícias
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Última notícia
          </h2>
          <p className="mt-3 max-w-2xl text-base text-slate-600">
            Acompanhe os destaques mais recentes da Clínica Medicyn.
          </p>
        </div>

        <Link
          to="/noticias"
          className="inline-flex shrink-0 items-center rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
        >
          Ver todas
        </Link>
      </div>

      <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="aspect-[16/10] w-full bg-slate-100 lg:aspect-auto lg:h-full">
            {latestNews.mediaType === "image" && latestNews.image ? (
              <img
                src={latestNews.image}
                alt={latestNews.title}
                className="h-full w-full object-cover"
              />
            ) : latestNews.mediaType === "youtube" && latestNews.videoUrl ? (
              <iframe
                src={getYouTubeEmbedUrl(latestNews.videoUrl)}
                title={latestNews.title}
                className="h-full w-full min-h-[280px]"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="flex h-full min-h-[280px] items-center justify-center text-sm text-slate-500">
                Sem media disponível
              </div>
            )}
          </div>

          <div className="flex flex-col justify-center p-6 md:p-8">
            <div className="mb-3 flex items-center gap-3 text-sm text-slate-500">
              <span>{formatDate(latestNews.date)}</span>
              <span className="h-1 w-1 rounded-full bg-slate-300" />
              <span className="capitalize">{latestNews.category}</span>
            </div>

            <h3 className="text-2xl font-semibold text-slate-900">
              {latestNews.title}
            </h3>

            <p className="mt-4 text-base leading-7 text-slate-600">
              {latestNews.excerpt}
            </p>

            {latestNews.content ? (
              <p className="mt-4 text-sm leading-7 text-slate-500">
                {latestNews.content}
              </p>
            ) : null}

            <div className="mt-6">
              <Link
                to="/noticias"
                className="inline-flex items-center text-sm font-semibold text-emerald-700 transition hover:text-emerald-800"
              >
                Ver histórico de notícias
              </Link>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
