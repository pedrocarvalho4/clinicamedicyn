export type Clinic = {
  id: "porto" | "povoa";
  name: string;
  city: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  mapsUrl: string;
  specialties: string[];
};

export const CLINICS: Clinic[] = [
  {
    id: "porto",
    name: "Clínica Medicyn — Porto",
    city: "Porto",
    address: "Rua do Salgueiral 80, 4200-476 Porto",
    phone: "225511932",
    whatsapp: "968429809",
    email: "porto@clinicamedicyn.pt",
    mapsUrl: "https://maps.google.com/?q=Rua+do+Salgueiral+80+Porto",
    specialties: [
      "Medicina Dentária",
      "Endocrinologia",
      "Psiquiatria",
      "Podologia",
    ],
  },
  {
    id: "povoa",
    name: "Clínica Medicyn — Póvoa de Varzim",
    city: "Póvoa de Varzim",
    address: "Rua da Junqueira, 77 2º esq, 4490-519 Póvoa de Varzim",
    phone: "252613045",
    whatsapp: "964316551",
    email: "povoadevarzim@clinicamedicyn.pt",
    mapsUrl: "https://maps.google.com/?q=Rua+da+Junqueira+77+Povoa+de+Varzim",
    specialties: ["Medicina Dentária"],
  },
];
export const clinicImages = {
  porto: "/clinicas/porto.jpg",
  povoa: "/clinicas/povoa.jpg",
} as const;
