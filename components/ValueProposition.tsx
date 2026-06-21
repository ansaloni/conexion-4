const items = [
  {
    title: "Foco 100% prático",
    desc: "Cada aula treina situações reais de atendimento: saudação, suporte, tratamento de reclamações e vendas — não regras soltas de gramática.",
    icon: (
      <path d="M4 12h16M4 6h10M4 18h7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    ),
  },
  {
    title: "Professora com vivência real",
    desc: "Conduzido por quem atuou em atendimento bilíngue em empresas multinacionais — ensino objetivo e conectado com o mercado de trabalho.",
    icon: (
      <>
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2.2" />
        <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Progresso mensurável",
    desc: "Metodologia estruturada em 5 fases, com acompanhamento de evolução para gerar confiança e fluência profissional em até 90 dias.",
    icon: (
      <>
        <path d="M3 17l5-5 4 4 8-8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 8h6v6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
];

export default function ValueProposition() {
  return (
    <section id="sobre" className="py-16 md:py-[120px]" aria-labelledby="value-title">
      <div className="mx-auto max-w-wrap px-6">
        <div className="mx-auto mb-14 max-w-xl text-center" data-reveal>
          <span className="mb-3 block font-display text-xs font-bold uppercase tracking-wider text-vermelho">
            Por que a Conexión Pro
          </span>
          <h2 id="value-title" className="font-display text-[28px] font-extrabold text-azul md:text-[38px]">
            Treinamento pensado para quem atende, não para quem decora gramática
          </h2>
          <p className="mt-4 max-w-[65ch] mx-auto text-[16.5px] text-[#555]">
            Três diferenciais que separam a Conexión Pro de um curso de espanhol comum.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {items.map((it, i) => (
            <div
              key={it.title}
              data-reveal
              data-reveal-delay={String(i + 1) as "1" | "2" | "3"}
              className="rounded-2xl border-t-4 border-azul bg-cinza p-9 transition duration-200 hover:-translate-y-1.5 hover:shadow-card"
            >
              <div
                className="mb-5 flex items-center justify-center rounded-xl bg-azul text-amarelo"
                style={{ width: 52, height: 52 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  {it.icon}
                </svg>
              </div>
              <h3 className="mb-2.5 font-display text-[18.5px] font-bold text-azul">{it.title}</h3>
              <p className="max-w-[52ch] text-[14.5px] text-[#555]">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
