import { Link } from "react-router-dom";

const heroImages = [
  "/clinicas/porto.jpg",
  "/clinicas/povoa.jpg",
  "/clinicas/hero1.jpg",
  "/clinicas/hero2.jpg",
  "/clinicas/hero3.jpg",
  "/clinicas/hero4.jpg",
  "/clinicas/hero5.jpg",
];

const randomHeroImage =
  heroImages[Math.floor(Math.random() * heroImages.length)];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <div className="relative h-[320px] md:h-[420px] w-full overflow-hidden">
        {/* <img
          src={randomHeroImage}
          alt="Clínica Medicyn"
          className="h-full w-full object-cover"
        />*/}
        <img
          src="/hero.jpg"
          alt="Clínica Medicyn"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-6xl px-4 text-white">
            <h1 className="text-4xl font-semibold md:text-5xl">
              Clínica Medicyn
            </h1>

            <p className="mt-4 max-w-xl text-lg text-white/90">
              Saúde de confiança com uma equipa dedicada em Medicina Dentária e
              especialidades médicas.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                to="/clinicas"
                className="rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700"
              >
                Marcar Consulta
              </Link>

              <Link
                to="/medicos"
                className="rounded-lg border border-white/40 px-6 py-3 font-semibold text-white hover:bg-white/10"
              >
                Ver Equipa
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ESPECIALIDADES */}
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold text-slate-900">
          Especialidades
        </h2>

        <p className="mt-2 text-slate-600">
          Áreas clínicas disponíveis na Clínica Medicyn.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Link
            to="/especialidades?area=medicina-dentaria"
            className="rounded-xl border bg-white p-6 hover:bg-slate-50 transition"
          >
            <div className="text-lg font-semibold text-slate-900">
              Medicina Dentária
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Consultas, diagnóstico e tratamentos de saúde oral.
            </p>
          </Link>

          <Link
            to="/especialidades?area=endocrinologia"
            className="rounded-xl border bg-white p-6 hover:bg-slate-50 transition"
          >
            <div className="text-lg font-semibold text-slate-900">
              Endocrinologia
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Avaliação de alterações hormonais e metabólicas.
            </p>
          </Link>

          <Link
            to="/especialidades?area=psiquiatria"
            className="rounded-xl border bg-white p-6 hover:bg-slate-50 transition"
          >
            <div className="text-lg font-semibold text-slate-900">
              Psiquiatria
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Acompanhamento especializado em saúde mental.
            </p>
          </Link>

          <Link
            to="/especialidades?area=podologia"
            className="rounded-xl border bg-white p-6 hover:bg-slate-50 transition"
          >
            <div className="text-lg font-semibold text-slate-900">
              Podologia
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Cuidados especializados do pé.
            </p>
          </Link>
        </div>
      </div>

      {/* CLÍNICAS */}
      <div className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-semibold text-slate-900">
          As nossas clínicas
        </h2>

        <p className="mt-2 text-slate-600">
          A Clínica Medicyn está presente no Porto e na Póvoa de Varzim.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Link
            to="/clinicas"
            className="rounded-xl border bg-white p-6 hover:bg-slate-50 transition"
          >
            <div className="text-lg font-semibold text-slate-900">Porto</div>
            <p className="mt-2 text-sm text-slate-600">
              Unidade com Medicina Dentária e outras especialidades médicas.
            </p>
            <div className="mt-4 text-sm font-semibold text-emerald-700">
              Ver clínica →
            </div>
          </Link>

          <Link
            to="/clinicas"
            className="rounded-xl border bg-white p-6 hover:bg-slate-50 transition"
          >
            <div className="text-lg font-semibold text-slate-900">
              Póvoa de Varzim
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Unidade dedicada à área de Medicina Dentária.
            </p>
            <div className="mt-4 text-sm font-semibold text-emerald-700">
              Ver clínica →
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
