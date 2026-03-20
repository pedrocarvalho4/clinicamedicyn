export type SpecialtyId =
  | "dentaria"
  | "endocrinologia"
  | "psiquiatria"
  | "podologia";
import anaPhoto from "../assets/doctors/ana-giao.jpg";
import joaoPhoto from "../assets/doctors/joao-giao.jpg";
import marisaPhoto from "../assets/doctors/marisa-meneses.jpg";
import davidePhoto from "../assets/doctors/davide-carvalho.jpg";

export type Doctor = {
  id: "ana-giao" | "joao-giao" | "marisa-meneses" | "davide-carvalho";
  name: string;
  title: string;
  role: string;
  specialties: SpecialtyId[];
  clinics: ("porto" | "povoa")[];
  bio: string;
  photo: string;
};

export const DOCTORS: Doctor[] = [
  {
    id: "ana-giao-carvalho",
    name: "Ana Gião Carvalho",
    title: "Dra.",
    role: "Medicina Dentária",
    specialties: ["dentaria"],
    clinics: ["porto", "povoa"],
    bio: "Licenciada em Medicina Dentária pela Universidade Fernando Pessoa. Possui formação avançada em Ortodontia, incluindo mestrado pelo ISCS-N (CESPU) e especialização pela Faculdade de Medicina Dentária da Universidade do Porto. Dedica-se ao diagnóstico, prevenção e tratamento ortodôntico, bem como à reabilitação dentária, conciliando prática clínica com formação contínua na área da medicina dentária.",
    photo: anaPhoto,
  },
  {
    id: "joao-giao-carvalho",
    name: "João Gião Carvalho",
    title: "Dr.",
    role: "Medicina Dentária",
    specialties: ["dentaria"],
    clinics: ["porto", "povoa"],
    bio: "Médico dentista com atividade clínica focada no diagnóstico, prevenção e tratamento das principais patologias da saúde oral. Integra a equipa clínica da Medicyn na área da Medicina Dentária, acompanhando os pacientes em consultas de avaliação, cuidados preventivos e tratamentos dentários.",
    photo: joaoPhoto,
  },
  {
    id: "marisa-meneses",
    name: "Marisa Meneses",
    title: "Dra.",
    role: "Medicina Dentária",
    specialties: ["dentaria"],
    clinics: ["porto", "povoa"],
    bio: "Médica dentista dedicada à prestação de cuidados de saúde oral, com foco na prevenção, diagnóstico e tratamento das patologias dentárias mais comuns. Participa no acompanhamento clínico dos pacientes da Clínica Medicyn, contribuindo para abordagens terapêuticas personalizadas.",
    photo: marisaPhoto,
  },
  {
    id: "natalia-vasconcelos",
    name: "Natália Vasconcelos",
    title: "Dra.",
    role: "Medicina Dentária",
    specialties: ["dentaria"],
    clinics: ["porto", "povoa"],
    bio: "Médica dentista da Clínica Medicyn, integrada na equipa de Medicina Dentária.",
    photo: "",
  },
  {
    id: "alexandra-queiros",
    name: "Alexandra Queirós",
    title: "Dra.",
    role: "Higienista Oral",
    specialties: ["dentaria"],
    clinics: ["porto", "povoa"],
    bio: "Profissional de Higiene Oral da Clínica Medicyn, integrada no acompanhamento de saúde oral e prevenção.",
    photo: "",
  },
  {
    id: "davide-carvalho",
    name: "Davide Carvalho",
    title: "Prof. Dr.",
    role: "Endocrinologia, Diabetes e Metabolismo",
    specialties: ["endocrinologia"],
    clinics: ["porto"],
    bio: "Especialista em Endocrinologia, Diabetes e Metabolismo. Licenciado em Medicina pela Faculdade de Medicina da Universidade do Porto. Foi diretor do Serviço de Endocrinologia, Diabetes e Metabolismo do Centro Hospitalar Universitário de São João e professor da Faculdade de Medicina da Universidade do Porto. Possui uma carreira de destaque no diagnóstico e tratamento de doenças hormonais e metabólicas, incluindo diabetes e patologias da tiroide.",
    photo: davidePhoto,
  },
  {
    id: "jorge-pedro",
    name: "Jorge Pedro",
    title: "Dr.",
    role: "Endocrinologia, Diabetes e Metabolismo",
    specialties: ["endocrinologia"],
    clinics: ["porto"],
    bio: "Médico da área de Endocrinologia da Clínica Medicyn.",
    photo: "",
  },
  {
    id: "isabel-brandao",
    name: "Isabel Brandão",
    title: "Prof. Dra.",
    role: "Psiquiatria",
    specialties: ["psiquiatria"],
    clinics: ["porto"],
    bio: "Médica especialista em Psiquiatria, integrada nas outras especialidades da Clínica Medicyn.",
    photo: "",
  },
  {
    id: "catia-dias",
    name: "Cátia Dias",
    title: "Dra.",
    role: "Podologia",
    specialties: ["podologia"],
    clinics: ["porto"],
    bio: "Especialista em Podologia da Clínica Medicyn.",
    photo: "",
  },
];
