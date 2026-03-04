export type Agreement = {
  id: string;
  name: string;
  specialties: string[];
  notes?: string;
};

export const AGREEMENTS: Agreement[] = [
  {
    id: "medis",
    name: "Médis",
    specialties: ["Medicina Dentária"],
    notes: "Acordo disponível para consultas de medicina dentária.",
  },
];
