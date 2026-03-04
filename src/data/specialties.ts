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
      "Consultas e tratamentos de saúde oral com abordagem personalizada.",
    doctorIds: ["ana-giao", "joao-giao", "marisa-meneses"],
  },
  {
    id: "endocrinologia",
    name: "Endocrinologia",
    description:
      "Avaliação e acompanhamento de alterações hormonais e metabólicas.",
    doctorIds: ["davide-carvalho"],
  },
];
