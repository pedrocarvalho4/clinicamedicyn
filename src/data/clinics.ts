export type Clinic = {
  id: "porto" | "povoa";
  name: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  mapsUrl: string;
};

export const CLINICS: Clinic[] = [
  {
    id: "porto",
    name: "Clínica Medicyn — Porto",
    city: "Porto",
    address: "Rua do Salgueiral 80, 4200-476 Porto",
    phone: "(confirmar)",
    email: "(confirmar)",
    mapsUrl: "https://maps.google.com/?q=Rua+do+Salgueiral+80+Porto",
  },
  {
    id: "povoa",
    name: "Clínica Medicyn — Póvoa de Varzim",
    city: "Póvoa de Varzim",
    address: "(a definir)",
    phone: "(a definir)",
    email: "(a definir)",
    mapsUrl: "https://maps.google.com",
  },
];
