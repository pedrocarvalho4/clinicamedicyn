import { useState } from "react";
import { NavLink } from "react-router-dom";

function navClass(isActive: boolean) {
  return [
    "px-3 py-2 rounded-lg text-sm font-medium transition",
    isActive
      ? "bg-emerald-100 text-emerald-900"
      : "text-slate-700 hover:bg-slate-100",
  ].join(" ");
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="h-10 w-10 overflow-hidden rounded-xl ring-1 ring-emerald-100">
            <img
              src="/favicon.png"
              alt="Medicyn logo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-slate-900">
              Clínica Medicyn
            </div>
            <div className="text-xs text-slate-500">Saúde de confiança</div>
          </div>
        </NavLink>

        {/* Menu desktop */}
        <nav className="hidden items-center gap-2 md:flex">
          <NavLink to="/" className={({ isActive }) => navClass(isActive)}>
            Início
          </NavLink>
          <NavLink
            to="/clinicas"
            className={({ isActive }) => navClass(isActive)}
          >
            Clínicas
          </NavLink>
          <NavLink
            to="/medicos"
            className={({ isActive }) => navClass(isActive)}
          >
            Médicos
          </NavLink>
          <NavLink
            to="/especialidades"
            className={({ isActive }) => navClass(isActive)}
          >
            Especialidades
          </NavLink>
          <NavLink
            to="/acordos"
            className={({ isActive }) => navClass(isActive)}
          >
            Acordos
          </NavLink>
        </nav>

        {/* Botão mobile */}
        <button
          type="button"
          className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <nav className="border-t border-slate-200 bg-white px-4 py-3 md:hidden">
          <div className="flex flex-col gap-2">
            <NavLink
              to="/"
              className={({ isActive }) => navClass(isActive)}
              onClick={() => setIsOpen(false)}
            >
              Início
            </NavLink>
            <NavLink
              to="/clinicas"
              className={({ isActive }) => navClass(isActive)}
              onClick={() => setIsOpen(false)}
            >
              Clínicas
            </NavLink>
            <NavLink
              to="/medicos"
              className={({ isActive }) => navClass(isActive)}
              onClick={() => setIsOpen(false)}
            >
              Médicos
            </NavLink>
            <NavLink
              to="/especialidades"
              className={({ isActive }) => navClass(isActive)}
              onClick={() => setIsOpen(false)}
            >
              Especialidades
            </NavLink>
            <NavLink
              to="/acordos"
              className={({ isActive }) => navClass(isActive)}
              onClick={() => setIsOpen(false)}
            >
              Acordos
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
}
