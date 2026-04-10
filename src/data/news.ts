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
    title: "Alexandra Queirós na Praça da Alegria",
    date: "2026-04-06",
    excerpt:
      "No passado dia 6 de abril de 2026, Alexandra Queirós, higienista oral, participou no programa Praça da Alegria, da RTP, onde falou sobre saúde oral.",
    content:
      "No passado dia 6 de abril de 2026, Alexandra Queirós, higienista oral da Clínica Medicyn, participou no programa Praça da Alegria, da RTP, onde falou sobre a importância da saúde oral. Durante a sua intervenção, destacou a relevância da prevenção, dos cuidados de higiene oral e da adoção de hábitos adequados no dia a dia. Se procura acompanhamento profissional em saúde oral, a Clínica Medicyn no Porto dispõe de uma equipa especializada pronta para o ajudar.",
    category: "clinic",
    mediaType: "image",
    image: "/images/news/alexandra-queiros-praca-alegria.jpg",
    isPublished: true,
    featured: true,
  },
  {
    id: "davide-carvalho-consultorio-porto-canal-2026",
    title: "Prof. Dr. Davide Carvalho no Consultório",
    date: "2026-04-08",
    excerpt:
      "No passado dia 8 de abril de 2026, o Prof. Dr. Davide Carvalho participou no programa Consultório, do Porto Canal, onde falou sobre a Doença de Cushing.",
    content:
      "No passado dia 8 de abril de 2026, o Prof. Dr. Davide Carvalho participou no programa Consultório, do Porto Canal, onde abordou a Doença de Cushing. Durante a sua participação, esclareceu aspetos importantes sobre esta patologia, incluindo sintomas, sinais de alerta, diagnóstico e acompanhamento clínico. Esta presença reforça o compromisso da Clínica Medicyn com a partilha de informação médica credível e acessível. Para acompanhamento especializado em endocrinologia, a Clínica Medicyn no Porto dispõe de profissionais diferenciados.",
    category: "clinic",
    mediaType: "image",
    image: "/images/news/davide-carvalho-porto-canal.png",
    isPublished: true,
    featured: true,
  },
];
