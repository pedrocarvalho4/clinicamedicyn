export type Agreement = {
  id: string;
  name: string;
  specialties: string[];
  subPlans?: string[];
};

export const AGREEMENTS: Agreement[] = [
  {
    id: "medis",
    name: "Médis",
    specialties: ["Medicina Dentária"],
    subPlans: ["Médis", "Médis CTT", "Médis MEO"],
  },
  {
    id: "cgd",
    name: "CGD",
    specialties: ["Medicina Dentária"],
  },
  {
    id: "edp",
    name: "EDP",
    specialties: ["Medicina Dentária"],
  },
];
