import { CLINICS, clinicImages } from "../data/clinics";

export default function Clinics() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold text-slate-900">
        Clínicas Medicyn
      </h1>

      <p className="mt-3 text-slate-600">
        Consulte os contactos e as especialidades disponíveis em cada unidade.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {CLINICS.map((c) => (
          <div
            key={c.id}
            className="overflow-hidden rounded-xl border bg-white"
          >
            <img
              src={clinicImages[c.id]}
              alt={c.name}
              className="h-56 w-full object-cover"
            />

            <div className="p-6">
              <h2 className="text-xl font-semibold">{c.city}</h2>

              <p className="mt-3 text-sm text-slate-600">{c.name}</p>

              <div className="mt-4 space-y-2 text-sm text-slate-700">
                <p>
                  <strong>Morada:</strong> {c.address}
                </p>
                <p>
                  <strong>Telefone:</strong>{" "}
                  <a
                    href={`tel:${c.phone}`}
                    className="text-emerald-700 hover:underline"
                  >
                    {c.phone}
                  </a>
                </p>
                <p>
                  <strong>WhatsApp:</strong>{" "}
                  <a
                    href={`https://wa.me/351${c.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-700 hover:underline"
                  >
                    {c.whatsapp}
                  </a>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href={`mailto:${c.email}`}
                    className="text-emerald-700 hover:underline"
                  >
                    {c.email}
                  </a>
                </p>
              </div>

              <div className="mt-5">
                <div className="text-sm font-semibold text-slate-900">
                  Especialidades nesta clínica
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {c.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800 ring-1 ring-emerald-200"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`tel:${c.phone}`}
                  className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 font-semibold text-white hover:bg-emerald-700"
                >
                  Ligar
                </a>

                <a
                  href={`https://wa.me/351${c.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-2 font-semibold text-emerald-900 hover:bg-emerald-100"
                >
                  WhatsApp
                </a>

                <a
                  href={c.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 font-semibold text-slate-900 hover:bg-slate-50"
                >
                  Ver no Google Maps
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
