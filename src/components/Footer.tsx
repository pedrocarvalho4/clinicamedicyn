export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="text-xs text-slate-500">
          © {new Date().getFullYear()} Clínica Medicyn. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}