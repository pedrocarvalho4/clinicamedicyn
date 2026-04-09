export type NewsCategory =
  | "health"
  | "campaign"
  | "holiday"
  | "event"
  | "clinic";

export type NewsMediaType = "image" | "youtube";

export interface NewsItem {
  id: string;
  title: string;
  date: string; // Format: YYYY-MM-DD
  excerpt: string;
  content?: string;
  category: NewsCategory;
  mediaType: NewsMediaType;
  image?: string;
  videoUrl?: string;
  isPublished: boolean;
  featured?: boolean;
}

export const newsItems: NewsItem[] = [
  {
    id: "dia-mundial-da-saude-2026",
    title: "Dia Mundial da Saúde",
    date: "2026-04-07",
    excerpt:
      "No Dia Mundial da Saúde, reforçamos a importância da prevenção, do acompanhamento regular e de uma abordagem integrada ao bem-estar.",
    content:
      "Hoje assinala-se o Dia Mundial da Saúde, uma data dedicada à promoção da literacia em saúde, da prevenção e do acesso a cuidados de qualidade. Na Clínica Medicyn, acreditamos numa abordagem próxima, rigorosa e centrada em cada pessoa.",
    category: "health",
    mediaType: "image",
    image: "/images/news/dia-mundial-da-saude.png",
    isPublished: true,
    featured: true,
  },
  {
    id: "pascoa-2026",
    title: "Boa Páscoa",
    date: "2026-04-05",
    excerpt:
      "Desejamos uma Santa e Feliz Páscoa a todos os nossos pacientes, famílias e equipa clínica.",
    content:
      "Nesta época especial, a Clínica Medicyn deseja uma Páscoa serena e feliz a todos os pacientes, famílias e colaboradores.",
    category: "holiday",
    mediaType: "image",
    image: "/images/news/pascoa-2026.png",
    isPublished: true,
  },
  {
    id: "medico-evento-exemplo",
    title: "Participação em evento científico",
    date: "2026-04-15",
    excerpt:
      "Um dos nossos profissionais marcou presença num evento científico dedicado à atualização clínica e partilha de conhecimento.",
    content:
      "A participação em congressos, formações e encontros científicos faz parte do compromisso da Clínica Medicyn com a atualização contínua e a excelência clínica.",
    category: "event",
    mediaType: "youtube",
    videoUrl: "https://www.youtube.com/watch?v=SEU_VIDEO_ID",
    isPublished: false,
  },
];
