import Image from "next/image";

export default function Sobre() {
  return (
    <section id="sobre" className="relative py-28 md:py-40 overflow-hidden border-t border-hairline">
      {/* selo/monograma em watermark — assinatura visual da marca */}
      <span
        aria-hidden
        className="seal-watermark select-none pointer-events-none absolute -right-10 md:right-0 top-1/2 -translate-y-1/2 text-[40vw] md:text-[26vw] leading-none"
      >
        FK
      </span>

      <div className="relative z-10 mx-auto max-w-content px-6 md:px-10">
        <p className="text-[13px] uppercase tracking-widest2 text-bronze mb-6">
          Quem sou eu
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-light leading-tight text-balance max-w-2xl mb-16 md:mb-20">
          Formação técnica, olhar estratégico.
        </h2>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-4">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/imagem/sobre.jpeg"
                alt="Fernanda Koch"
                fill
                className="object-cover grayscale"
              />
            </div>
          </div>

          <div className="md:col-span-7 md:col-start-6 flex flex-col gap-8">
            <p className="text-lg md:text-xl text-paper/90 leading-relaxed font-light">
              Sou formada em Direito e em Ciências Contábeis — uma combinação
              que me permite olhar para cada caso tributário com profundidade
              jurídica e domínio técnico das demonstrações financeiras por
              trás dele. Há mais de quatro anos, dedico-me inteiramente ao
              direito tributário, buscando soluções que unam segurança
              jurídica e eficiência fiscal real para empresas e pessoas
              físicas.
            </p>
            <p className="text-slate leading-relaxed">
              Acredito que advocacia tributária não se faz só com teses — se
              faz entendendo o negócio do cliente a fundo. É essa visão dupla,
              de advogada e contadora, que guia cada estratégia que construo.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-hairline mt-4">
              <div>
                <p className="font-display text-3xl md:text-4xl font-light text-bronze">4+</p>
                <p className="text-[13px] text-slate mt-2 uppercase tracking-wider">
                  anos de atuação
                </p>
              </div>
              <div>
                <p className="font-display text-3xl md:text-4xl font-light text-bronze">2</p>
                <p className="text-[13px] text-slate mt-2 uppercase tracking-wider">
                  formações técnicas
                </p>
              </div>
              <div>
                <p className="font-display text-3xl md:text-4xl font-light text-bronze">100%</p>
                <p className="text-[13px] text-slate mt-2 uppercase tracking-wider">
                  foco em tributário
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
