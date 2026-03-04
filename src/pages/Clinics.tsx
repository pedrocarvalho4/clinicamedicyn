import { CLINICS } from "../data/clinics";

export default function Clinics() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold text-slate-900">Clínicas Medicyn</h1>

      <p className="mt-3 text-slate-600">
        A Clínica Medicyn dispõe de duas unidades: Porto e Póvoa de Varzim.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {CLINICS.map((c) => (
          <div key={c.id} className="rounded-xl border bg-white p-6">
            <h2 className="text-xl font-semibold">{c.city}</h2>

            <p className="mt-3 text-sm text-slate-600">{c.name}</p>

            <div className="mt-4 space-y-1 text-sm text-slate-700">
              <p>
                <strong>Morada:</strong> {c.address}
              </p>
              <p>
                <strong>Telefone:</strong> {c.phone}
              </p>
              <p>
                <strong>Email:</strong> {c.email}
              </p>
            </div>

            <div className="mt-5">
              <a
                href={c.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-lg bg-emerald-600 px-4 py-2 font-semibold text-white hover:bg-emerald-700"
              >
                Ver no Google Maps
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}