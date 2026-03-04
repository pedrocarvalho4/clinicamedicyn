import { Link, useParams } from "react-router-dom";
import { DOCTORS } from "../data/doctors";

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  const a = parts[0]?.[0] ?? "";
  const b = parts.length > 1 ? (parts[parts.length - 1]?.[0] ?? "") : "";
  return `${a}${b}`.toUpperCase();
}

export default function DoctorProfile() {
  const { id } = useParams<{ id: string }>();
  const doctor = DOCTORS.find((d) => d.id === id);

  if (!doctor) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-3xl font-semibold text-slate-900">
          Médico não encontrado
        </h1>
        <p className="mt-3 text-slate-600">
          O perfil que tentou abrir não existe.
        </p>
        <div className="mt-6">
          <Link
            to="/medicos"
            className="inline-block rounded-lg bg-emerald-600 px-4 py-2 font-semibold text-white hover:bg-emerald-700"
          >
            Voltar à lista de médicos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-6">
        <Link
          to="/medicos"
          className="text-sm font-semibold text-emerald-700 hover:text-emerald-800"
        >
          ← Voltar à equipa médica
        </Link>
      </div>

      <div className="rounded-2xl border bg-white p-6 md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start">
          {doctor.photo ? (
            <img
              src={doctor.photo}
              alt={`${doctor.title} ${doctor.name}`}
              className="h-28 w-28 rounded-2xl object-cover ring-1 ring-slate-200"
            />
          ) : (
            <div className="grid h-28 w-28 place-items-center rounded-2xl bg-emerald-50 text-emerald-900 text-2xl font-semibold ring-1 ring-emerald-100">
              {initials(doctor.name)}
            </div>
          )}

          <div className="min-w-0">
            <h1 className="text-3xl font-semibold text-slate-900">
              {doctor.title} {doctor.name}
            </h1>

            <p className="mt-2 text-sm font-medium text-emerald-700">
              {doctor.role}
            </p>

            <p className="mt-4 text-slate-600">{doctor.bio}</p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/clinicas"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700"
              >
                Contactar clínicas
              </Link>

              <Link
                to="/especialidades"
                className="inline-flex items-center justify-center rounded-lg border border-emerald-200 bg-emerald-50 px-5 py-3 font-semibold text-emerald-900 hover:bg-emerald-100"
              >
                Ver especialidades
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
