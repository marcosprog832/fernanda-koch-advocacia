export default function Footer() {
  return (
    <footer className="border-t border-hairline py-10">
      <div className="mx-auto max-w-content px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col leading-none items-center md:items-start">
          <p className="font-display text-base">Fernanda Koch</p>
          <p className="text-[10px] uppercase tracking-widest2 text-bronze mt-1">
            Advocacia &amp; Consultoria
          </p>
        </div>

        <p className="text-slate text-[13px] text-center md:text-left">
          Av. Brigadeiro Faria Lima, 3477 — 14º andar, São Paulo, SP
        </p>

        <p className="text-slate text-[13px]">
          © {new Date().getFullYear()} Fernanda Koch Advocacia. OAB/SP 123.456.
        </p>
      </div>
    </footer>
  );
}
