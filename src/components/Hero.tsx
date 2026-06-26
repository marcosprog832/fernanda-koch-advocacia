import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[75vh] md:min-h-[100vh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/imagem/hero.jpeg"
          alt="Fachada de arquitetura clássica em preto e branco"
          fill
          priority
          className="object-cover object-[52%_20%] md:object-center grayscale contrast-125"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
        <div className="absolute inset-0 bg-ink/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-content w-full px-6 md:px-10 pb-8 md:pb-28 pt-40 md:pt-40">
        <p className="text-[13px] uppercase tracking-widest2 text-bronze mb-6">
       
        </p>

        <h1 className="font-display text-balance text-[13vw] leading-[0.95] md:text-[7vw] md:leading-[0.95] lg:text-[6.4rem] font-light tracking-tightest max-w-4xl">
          <span className="italic text-slate"> </span>
        </h1>

        <div className="mt-48 md:mt-5 flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-hairline pt-8">
          <p className="text-slate max-w-md text-[15px] leading-relaxed">
            Há mais de quatro anos unindo direito e contabilidade para
            encontrar a solução tributária certa para empresas e pessoas
            físicas. Rigor técnico e atendimento próximo, do início ao fim.
          </p>

          <a
            href="https://wa.me/5566996422181"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center
              px-6 py-4 w-full md:w-auto
              bg-zinc-800/80
              border border-bronze
              text-bronze
              uppercase tracking-[0.18em]
              text-xs font-medium
              rounded-sm
              backdrop-blur-sm
              transition-all duration-300
              hover:bg-bronze hover:text-black hover:scale-105
              shrink-0
            "
          >
            Fale com uma especialista
          </a>
        </div>
      </div>
    </section>
  );
}