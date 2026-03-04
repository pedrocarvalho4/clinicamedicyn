import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* HERO */}
      <section className="grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">
            Clínica Medicyn
          </h1>

          <p className="mt-4 text-lg text-slate-600">
            Cuidados de saúde com foco em proximidade, confiança e qualidade
            clínica.
          </p>

          <p className="mt-3 text-slate-600">
            A Clínica Medicyn oferece consultas de Medicina Dentária e
            Endocrinologia nas unidades do Porto e da Póvoa de Varzim.
          </p>

          <div className="mt-6 flex gap-3">
            <Link
              to="/clinicas"
              className="rounded-lg bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700"
            >
              Ver Clínicas
            </Link>

            <Link
              to="/especialidades"
              className="rounded-lg border border-emerald-200 bg-emerald-50 px-5 py-3 font-semibold text-emerald-900 hover:bg-emerald-100"
            >
              Especialidades
            </Link>
          </div>
        </div>

        {/* bloco visual */}
        <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-8">
          <h3 className="text-lg font-semibold text-slate-900">
            Especialidades
          </h3>

          <div className="mt-4 space-y-3">
            <Link
              to="/especialidades"
              className="block rounded-xl border bg-white p-4 hover:bg-emerald-50"
            >
              <div className="font-semibold">Medicina Dentária</div>
              <div className="text-sm text-slate-600">
                Consultas e tratamentos dentários.
              </div>
            </Link>

            <Link
              to="/especialidades"
              className="block rounded-xl border bg-white p-4 hover:bg-emerald-50"
            >
              <div className="font-semibold">Endocrinologia</div>
              <div className="text-sm text-slate-600">
                Avaliação de doenças hormonais e metabólicas.
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SEÇÃO CLÍNICAS */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-slate-900">
          As nossas clínicas
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border bg-white p-6">
            <h3 className="font-semibold text-lg">Porto</h3>
            <p className="text-slate-600 text-sm mt-2">
              Unidade clínica na cidade do Porto.
            </p>
          </div>

          <div className="rounded-xl border bg-white p-6">
            <h3 className="font-semibold text-lg">Póvoa de Varzim</h3>
            <p className="text-slate-600 text-sm mt-2">
              Unidade clínica na Póvoa de Varzim.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
