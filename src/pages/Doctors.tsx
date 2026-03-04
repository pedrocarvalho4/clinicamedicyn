import { Link } from "react-router-dom";
import { DOCTORS } from "../data/doctors";

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  const a = parts[0]?.[0] ?? "";
  const b = parts.length > 1 ? (parts[parts.length - 1]?.[0] ?? "") : "";
  return `${a}${b}`.toUpperCase();
}

export default function Doctors() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold text-slate-900">Equipa Médica</h1>
      <p className="mt-3 text-slate-600">
        Conheça os profissionais da Clínica Medicyn.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {DOCTORS.map((doctor) => (
          <Link
            key={doctor.id}
            to={`/medicos/${doctor.id}`}
            className="rounded-xl border bg-white p-6 hover:bg-slate-50 transition"
          >
            <div className="flex items-start gap-4">
              {doctor.photo ? (
                <img
                  src={doctor.photo}
                  alt={`${doctor.title} ${doctor.name}`}
                  className="h-16 w-16 rounded-xl object-cover ring-1 ring-slate-200"
                />
              ) : (
                <div className="grid h-16 w-16 place-items-center rounded-xl bg-emerald-50 text-emerald-900 font-semibold ring-1 ring-emerald-100">
                  {initials(doctor.name)}
                </div>
              )}

              <div className="min-w-0">
                <div className="text-xl font-semibold text-slate-900">
                  {doctor.title} {doctor.name}
                </div>

                <div className="mt-1 text-sm font-medium text-emerald-700">
                  {doctor.role}
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm text-slate-600 line-clamp-4">
              {doctor.bio}
            </p>

            <div className="mt-4 text-sm font-semibold text-emerald-700">
              Ver perfil →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
