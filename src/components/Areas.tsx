const AREAS = [
  {
    art: "Art. 1",
    title: "Planejamento Tributário",
    desc: "Estruturação fiscal preventiva para empresas e pessoas físicas, com foco em segurança jurídica e eficiência tributária.",
  },
  {
    art: "Art. 2",
    title: "Contencioso Tributário",
    desc: "Defesas administrativas e judiciais em autuações fiscais, execuções fiscais e disputas com o Fisco.",
  },
  {
    art: "Art. 3",
    title: "Recuperação de Créditos",
    desc: "Identificação e recuperação de tributos pagos indevidamente ou a maior, via compensação ou restituição.",
  },
  {
    art: "Art. 4",
    title: "Consultoria Empresarial",
    desc: "Análise tributária de operações societárias, reorganizações e decisões estratégicas do negócio.",
  },
  {
    art: "Art. 5",
    title: "Compliance Fiscal",
    desc: "Revisão e adequação de rotinas contábeis e fiscais às exigências legais, reduzindo riscos de autuação.",
  },
  {
    art: "Art. 6",
    title: "Sucessão Patrimonial",
    desc: "Planejamento tributário de sucessão e holdings familiares, unindo visão jurídica e contábil.",
  },
];

export default function Areas() {
  return (
    <section id="areas" className="py-28 md:py-40 border-t border-hairline">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div>
            <p className="text-[13px] uppercase tracking-widest2 text-bronze mb-6">
              Áreas de atuação
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light leading-tight max-w-xl text-balance text-bronze">
              Seis frentes, um único padrão de exigência.
            </h2>
          </div>
          <p className="text-slate max-w-sm text-[15px] leading-relaxed">
            Cada caso é conduzido pessoalmente, unindo visão jurídica e
            contábil do início ao desfecho.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-hairline">
          {AREAS.map((area) => (
            <div
              key={area.art}
              className="group relative border-r border-b border-hairline p-8 md:p-10 min-h-[280px] flex flex-col justify-between transition-colors hover:bg-charcoal/60"
            >
              <span className="font-display text-sm text-slate group-hover:text-bronze transition-colors">
                {area.art}
              </span>
              <div>
                <h3 className="font-display text-2xl font-light mb-4">
                  {area.title}
                </h3>
                <p className="text-slate text-[15px] leading-relaxed">
                  {area.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
