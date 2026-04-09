export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">

        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="/cm-logo-completo.png"
            alt="Clínica Medicyn"
            className="h-10 md:h-12 w-auto object-contain opacity-80"
          />
        </div>

        {/* Info */}
        <div className="text-center md:text-right flex flex-col gap-1 text-sm text-slate-600">
          <div>Porto • Póvoa de Varzim</div>

          <span className="text-xs text-slate-400">
            Contacto geral (Porto)
          </span>

          <a href="tel:225511932" className="hover:underline">
            225 511 932
          </a>

          <a href="mailto:porto@clinicamedicyn.pt" className="hover:underline">
            porto@clinicamedicyn.pt
          </a>

          <div className="text-xs text-slate-500 mt-2">
            © {new Date().getFullYear()} Clínica Medicyn. Todos os direitos reservados.
          </div>
        </div>

      </div>
    </footer>
  );
}