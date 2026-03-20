import { Link, useParams } from "react-router-dom";
import { DOCTORS } from "../data/doctors";
import { CLINICS } from "../data/clinics";

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  const a = parts[0]?.[0] ?? "";
  const b = parts.length > 1 ? (parts[parts.length - 1]?.[0] ?? "") : "";
  return `${a}${b}`.toUpperCase();
}

export default function DoctorProfile() {
  const { id } = useParams<{ id: string }>();
  const doctor = DOCTORS.find((d) => d.id === id);
  const clinics = doctor
    ? CLINICS.filter((c) => doctor.clinics.includes(c.id))
    : [];

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
          <div className="shrink-0">
            {doctor.photo ? (
              <img
                src={doctor.photo}
                alt={`${doctor.title} ${doctor.name}`}
                className="h-32 w-32 rounded-2xl object-cover ring-1 ring-slate-200"
              />
            ) : (
              <div className="grid h-32 w-32 place-items-center rounded-2xl bg-emerald-50 text-2xl font-semibold text-emerald-900 ring-1 ring-emerald-100">
                {initials(doctor.name)}
              </div>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <h1 className="text-3xl font-semibold text-slate-900">
              {doctor.title} {doctor.name}
            </h1>

            <p className="mt-2 text-sm font-medium text-emerald-700">
              {doctor.role}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {doctor.clinics.includes("porto") && (
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800 ring-1 ring-emerald-200">
                  Atendimento no Porto
                </span>
              )}

              {doctor.clinics.includes("povoa") && (
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800 ring-1 ring-emerald-200">
                  Atendimento na Póvoa de Varzim
                </span>
              )}
            </div>

            <p className="mt-5 max-w-3xl text-slate-600">{doctor.bio}</p>
          </div>
        </div>

        <div className="mt-6">
          <div className="text-sm font-semibold text-slate-900">
            Marcação / Contacto
          </div>

          <div className="mt-3 grid gap-3 md:grid-cols-2">
            {clinics.map((c) => (
              <div key={c.id} className="rounded-xl border bg-slate-50 p-4">
                <div className="text-sm font-semibold text-slate-900">
                  {c.city}
                </div>

                <div className="mt-1 text-xs text-slate-600">
                  {c.phone} · {c.email}
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href={`tel:${c.phone}`}
                    className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
                  >
                    Ligar
                  </a>

                  <a
                    href={`https://wa.me/351${c.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-lg border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-900 hover:bg-emerald-50"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Link
              to="/especialidades"
              className="text-sm font-semibold text-emerald-700 hover:text-emerald-800"
            >
              Ver especialidades →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
