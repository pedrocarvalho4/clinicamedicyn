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
    id: "alexandra-queiros-praca-da-alegria-2026",
    title: "Alexandra Queirós aborda saúde oral na RTP",
    date: "2026-04-06",
    excerpt:
      "A higienista oral Alexandra Queirós participou no programa Praça da Alegria, da RTP, numa conversa dedicada à importância da saúde oral e da prevenção.",
    content:
      "Em abril de 2026, Alexandra Queirós, higienista oral da Clínica Medicyn, esteve no programa Praça da Alegria, da RTP, onde partilhou a importância de manter bons hábitos de higiene oral ao longo do dia a dia. Durante a sua participação, destacou temas como a prevenção, a escovagem adequada e a relevância do acompanhamento regular para preservar a saúde oral. Esta presença reflete o compromisso da Clínica Medicyn com a promoção de informação clara, útil e acessível junto da população.",
    category: "clinic",
    mediaType: "image",
    image: "/images/news/alexandra-queiros-praca-alegria.jpg",
    isPublished: true,
    featured: true,
  },
  {
    id: "davide-carvalho-consultorio-porto-canal-2026",
    title: "Prof. Dr. Davide Carvalho fala sobre a Doença de Cushing no Porto Canal",
    date: "2026-04-08",
    excerpt:
      "O Prof. Dr. Davide Carvalho participou no programa Consultório, do Porto Canal, onde esclareceu vários aspetos relacionados com a Doença de Cushing.",
    content:
      "Em abril de 2026, o Prof. Dr. Davide Carvalho, da Clínica Medicyn, participou no programa Consultório, do Porto Canal, para abordar a Doença de Cushing. Ao longo da sua intervenção, explicou alguns dos principais sinais associados a esta patologia, a importância do diagnóstico atempado e a necessidade de acompanhamento clínico especializado. Esta participação reforça o contributo da Clínica Medicyn na divulgação de informação médica credível e relevante para a comunidade.",
    category: "clinic",
    mediaType: "image",
    image: "/images/news/davide-carvalho-porto-canal.png",
    isPublished: true,
    featured: true,
  },
];
