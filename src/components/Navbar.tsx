import { NavLink } from "react-router-dom";

function navClass(isActive: boolean) {
  return [
    "px-3 py-2 rounded-lg text-sm font-medium",
    isActive ? "bg-emerald-100 text-emerald-900" : "text-slate-700 hover:bg-slate-100",
  ].join(" ");
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 ring-1 ring-emerald-100">
            <span className="text-sm font-semibold text-emerald-900">M</span>
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-slate-900">Clínica Medicyn</div>
            <div className="text-xs text-slate-500">Saúde de confiança</div>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-2 md:flex">
          <NavLink to="/" className={({ isActive }) => navClass(isActive)}>
            Início
          </NavLink>
          <NavLink to="/clinicas" className={({ isActive }) => navClass(isActive)}>
            Clínicas
          </NavLink>
          <NavLink to="/medicos" className={({ isActive }) => navClass(isActive)}>
            Médicos
          </NavLink>
          <NavLink to="/especialidades" className={({ isActive }) => navClass(isActive)}>
            Especialidades
          </NavLink>
          <NavLink to="/acordos" className={({ isActive }) => navClass(isActive)}>
            Acordos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}