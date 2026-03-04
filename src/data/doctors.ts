export type SpecialtyId = "dentaria" | "endocrinologia";
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
  bio: string;
  photo: string;
};

export const DOCTORS: Doctor[] = [
  {
    id: "ana-giao",
    name: "Ana Gião",
    title: "Dra.",
    role: "Medicina Dentária",
    specialties: ["dentaria"],
    bio: "Licenciada em Medicina Dentária pela Universidade Fernando Pessoa. Possui formação avançada em Ortodontia, incluindo mestrado pelo ISCS-N (CESPU) e especialização pela Faculdade de Medicina Dentária da Universidade do Porto. Dedica-se ao diagnóstico, prevenção e tratamento ortodôntico, bem como à reabilitação dentária, conciliando prática clínica com formação contínua na área da medicina dentária.",
    photo: anaPhoto,
  },
  {
    id: "joao-giao",
    name: "João Gião",
    title: "Dr.",
    role: "Medicina Dentária",
    specialties: ["dentaria"],
    bio: "Médico dentista com atividade clínica focada no diagnóstico, prevenção e tratamento das principais patologias da saúde oral. Integra a equipa clínica da Medicyn na área da Medicina Dentária, acompanhando os pacientes em consultas de avaliação, cuidados preventivos e tratamentos dentários.",
    photo: joaoPhoto,
  },
  {
    id: "marisa-meneses",
    name: "Marisa Meneses",
    title: "Dra.",
    role: "Medicina Dentária",
    specialties: ["dentaria"],
    bio: "Médica dentista dedicada à prestação de cuidados de saúde oral, com foco na prevenção, diagnóstico e tratamento das patologias dentárias mais comuns. Participa no acompanhamento clínico dos pacientes da Clínica Medicyn, contribuindo para abordagens terapêuticas personalizadas.",
    photo: marisaPhoto,
  },
  {
    id: "davide-carvalho",
    name: "Davide Carvalho",
    title: "Prof. Doutor",
    role: "Endocrinologia, Diabetes e Metabolismo",
    specialties: ["endocrinologia"],
    bio: "Especialista em Endocrinologia, Diabetes e Metabolismo. Licenciado em Medicina pela Faculdade de Medicina da Universidade do Porto. Foi diretor do Serviço de Endocrinologia, Diabetes e Metabolismo do Centro Hospitalar Universitário de São João e professor da Faculdade de Medicina da Universidade do Porto. Possui uma carreira de destaque no diagnóstico e tratamento de doenças hormonais e metabólicas, incluindo diabetes e patologias da tiroide.",
    photo: davidePhoto,
  },
];
