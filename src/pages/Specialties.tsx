import { SPECIALTIES } from "../data/specialties";
import { DOCTORS } from "../data/doctors";
import { Link } from "react-router-dom";

export default function Specialties() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold text-slate-900">Especialidades</h1>

      <p className="mt-3 text-slate-600">
        Conheça as áreas clínicas disponíveis na Clínica Medicyn.
      </p>

      <div className="mt-8 space-y-8">
        {SPECIALTIES.map((specialty) => {
          const doctors = DOCTORS.filter((d) =>
            specialty.doctorIds.includes(d.id),
          );

          return (
            <div key={specialty.id} className="rounded-xl border bg-white p-6">
              <h2 className="text-xl font-semibold">{specialty.name}</h2>

              <p className="mt-2 text-sm text-slate-600">
                {specialty.description}
              </p>

              <div className="mt-6">
                <h3 className="text-sm font-semibold text-slate-900">
                  Médicos desta especialidade
                </h3>

                <div className="mt-3 grid gap-3 md:grid-cols-2">
                  {doctors.map((doctor) => (
                    <Link
                      key={doctor.id}
                      to={`/medicos/${doctor.id}`}
                      className="rounded-lg border bg-slate-50 p-4 hover:bg-emerald-50 transition"
                    >
                      <div className="font-semibold">
                        {doctor.title} {doctor.name}
                      </div>

                      <div className="text-sm text-slate-600">
                        {doctor.role}
                      </div>

                      <div className="mt-2 text-sm font-semibold text-emerald-700">
                        Ver perfil →
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
