import type { SpecialtyId } from "./doctors";

export type Specialty = {
  id: SpecialtyId;
  name: string;
  description: string;
  doctorIds: string[];
};

export const SPECIALTIES: Specialty[] = [
  {
    id: "dentaria",
    name: "Medicina Dentária",
    description:
      "Consultas, diagnóstico, prevenção e tratamentos de saúde oral com acompanhamento personalizado.",
    doctorIds: [
      "joao-giao-carvalho",
      "ana-giao-carvalho",
      "marisa-meneses",
      "natalia-vasconcelos",
      "alexandra-queiros",
    ],
  },
  {
    id: "endocrinologia",
    name: "Endocrinologia",
    description:
      "Avaliação e acompanhamento de alterações hormonais, metabólicas e doenças endócrinas.",
    doctorIds: ["davide-carvalho", "jorge-pedro"],
  },
  {
    id: "psiquiatria",
    name: "Psiquiatria",
    description:
      "Acompanhamento especializado na área da saúde mental e avaliação psiquiátrica.",
    doctorIds: ["isabel-brandao"],
  },
  {
    id: "podologia",
    name: "Podologia",
    description:
      "Cuidados especializados na prevenção, avaliação e tratamento do pé.",
    doctorIds: ["catia-dias"],
  },
];
