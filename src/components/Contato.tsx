"use client";

import { useState } from "react";

export default function Contato() {
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: integrar com Supabase ou serviço de e-mail aqui
    setEnviado(true);
  }

  return (
    <section id="contato" className="py-28 md:py-40 border-t border-hairline">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-[13px] uppercase tracking-widest2 text-bronze mb-6">
              Contato
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-8 text-balance text-bronze">
              Vamos conversar sobre o seu caso.
            </h2>
            <p className="text-slate leading-relaxed max-w-md mb-12">
              Preencha o formulário ao lado ou entre em contato direto pelos
              canais abaixo. Respondo toda solicitação em até um dia útil.
            </p>

            <div className="space-y-6 text-[15px]">
              <div className="flex gap-4 border-t border-hairline pt-6">
                <span className="text-slate w-24 shrink-0 uppercase text-[13px] tracking-wider pt-0.5">
                  Telefone
                </span>
                <a href="tel:+551130000000" className="text-paper/90 hover:text-bronze transition-colors">
                  (11) 3000-0000
                </a>
              </div>
              <div className="flex gap-4 border-t border-hairline pt-6">
                <span className="text-slate w-24 shrink-0 uppercase text-[13px] tracking-wider pt-0.5">
                  E-mail
                </span>
                <a
                  href="mailto:contato@fernandakoch.com.br"
                  className="text-paper/90 hover:text-bronze transition-colors"
                >
                  contato@fernandakoch.com.br
                </a>
              </div>
            </div>
          </div>

          {enviado ? (
            <div className="flex flex-col items-start justify-center gap-4 border border-hairline p-10">
              <span className="text-bronze text-3xl">✓</span>
              <p className="font-display text-2xl font-light">
                Mensagem enviada.
              </p>
              <p className="text-slate text-[15px] leading-relaxed">
                Obrigada pelo contato. Você receberá uma resposta em até um
                dia útil no e-mail informado.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <label className="flex flex-col gap-2">
                <span className="text-[13px] uppercase tracking-wider text-slate">
                  Nome completo
                </span>
                <input
                  type="text"
                  name="nome"
                  required
                  className="bg-transparent border-b border-hairline focus:border-bronze outline-none py-3 text-paper placeholder:text-slate/60 transition-colors"
                  placeholder="Como você se chama?"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-[13px] uppercase tracking-wider text-slate">
                  E-mail ou WhatsApp
                </span>
                <input
                  type="text"
                  name="contato"
                  required
                  className="bg-transparent border-b border-hairline focus:border-bronze outline-none py-3 text-paper placeholder:text-slate/60 transition-colors"
                  placeholder="seu@email.com ou (11) 99999-9999"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-[13px] uppercase tracking-wider text-slate">
                  Como posso ajudar?
                </span>
                <textarea
                  name="mensagem"
                  rows={4}
                  required
                  className="bg-transparent border-b border-hairline focus:border-bronze outline-none py-3 text-paper placeholder:text-slate/60 transition-colors resize-none"
                  placeholder="Conte rapidamente o que está acontecendo"
                />
              </label>

              <button
                type="submit"
                className="mt-2 self-start inline-flex items-center gap-3 text-sm uppercase tracking-widest2 border border-hairline px-8 py-4 hover:border-bronze hover:text-bronze transition-colors"
              >
                Enviar mensagem
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
