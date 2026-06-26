"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#areas", label: "Áreas de atuação" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/90 backdrop-blur-md border-b border-hairline" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="flex items-center justify-between h-20">
          <a href="#topo" className="flex flex-col leading-none">
            <span className="font-display text-lg md:text-xl tracking-tight">
              Fernanda Koch
            </span>
            <span className="text-[10px] uppercase tracking-widest2 text-bronze mt-1">
              Advocacia &amp; Consultoria
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] uppercase tracking-widest2 text-bronze transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contato"
            className="hidden md:inline-flex items-center text-[13px] uppercase tracking-widest2 border border-hairline px-5 py-2.5 hover:border-bronze hover:text-bronze transition-colors"
          >
            Agendar consulta
          </a>

          <button
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block h-px w-6 bg-paper transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span className={`block h-px w-6 bg-paper transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-px w-6 bg-paper transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-ink border-t border-hairline">
          <nav className="flex flex-col px-6 py-6 gap-5">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-widest2 text-slate hover:text-paper transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-2 text-sm uppercase tracking-widest2 border border-hairline px-5 py-3 text-center hover:border-bronze hover:text-bronze transition-colors"
            >
              Agendar consulta
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
