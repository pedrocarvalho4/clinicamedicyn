import { AGREEMENTS } from "../data/agreements";

export default function Agreements() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold text-slate-900">
        Acordos e Seguradoras
      </h1>

      <p className="mt-3 text-slate-600">
        A Clínica Medicyn possui acordos com algumas seguradoras para
        determinadas especialidades.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {AGREEMENTS.map((agreement) => (
          <div key={agreement.id} className="rounded-xl border bg-white p-6">
            <h2 className="text-xl font-semibold">{agreement.name}</h2>

            <div className="mt-3 text-sm text-slate-600">
              Especialidades abrangidas:
            </div>

            <ul className="mt-2 list-disc list-inside text-sm text-slate-700">
              {agreement.specialties.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>

            {agreement.subPlans && (
              <div className="mt-4">
                <div className="text-sm font-semibold text-slate-900">
                  Planos incluídos:
                </div>

                <ul className="mt-2 list-disc list-inside text-sm text-slate-600">
                  {agreement.subPlans.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
