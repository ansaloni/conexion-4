const stats = [
  { value: "+500", label: "profissionais formados" },
  { value: "90 dias", label: "até resultados mensuráveis em atendimento" },
  { value: "2x", label: "aumento médio em oportunidades, segundo alunos" },
];

const sectors = ["Turismo & Hospitalidade", "Call Center", "E-commerce", "Fintech", "Logística"];

const testimonials = [
  {
    quote:
      "Em dois meses já estava atendendo clientes do Chile sem travar. O Método C.O.N.E.X. me deu um roteiro pra cada situação.",
    name: "Mariana F.",
    role: "Atendimento ao cliente, e-commerce",
    initials: "MF",
  },
  {
    quote: "Parei de traduzir mentalmente. As frases prontas do curso viraram automáticas no meu dia a dia.",
    name: "Rodrigo T.",
    role: "Suporte técnico bilíngue",
    initials: "RT",
  },
  {
    quote:
      "Consegui a promoção pro time LATAM três meses depois de começar. O diferencial foi falar com segurança, não só corretamente.",
    name: "Camila S.",
    role: "Customer success",
    initials: "CS",
  },
];

export default function TrustIndicators() {
  return (
    <section id="resultados" className="py-16 md:py-[120px]" aria-labelledby="trust-title">
      <div className="mx-auto max-w-wrap px-6">
        <div className="mx-auto mb-14 max-w-xl text-center" data-reveal>
          <span className="mb-3 block font-display text-xs font-bold uppercase tracking-wider text-vermelho">
            Resultados
          </span>
          <h2 id="trust-title" className="font-display text-[28px] font-extrabold text-azul md:text-[38px]">
            Confiança que se constrói com prática, não promessa
          </h2>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((s, i) => (
            <div
              key={s.label}
              data-reveal
              data-reveal-delay={String(i + 1) as "1" | "2" | "3"}
              className="rounded-2xl border border-[#e6e6e6] p-8 text-center"
            >
              <strong className="block font-display text-[38px] font-extrabold text-vermelho">{s.value}</strong>
              <span className="mt-1.5 block max-w-[28ch] mx-auto text-[13.5px] text-[#666]">{s.label}</span>
            </div>
          ))}
        </div>

        <p className="mb-6 text-center font-display text-xs font-bold uppercase tracking-wider text-[#999]">
          Setores onde nossos alunos atuam
        </p>
        <div className="mb-18 flex flex-wrap items-center justify-center gap-7" style={{ marginBottom: 72 }}>
          {sectors.map((s) => (
            <span
              key={s}
              className="rounded-lg border-[1.5px] border-dashed border-[#ccc] px-6 py-3.5 font-display text-sm font-bold text-[#999]"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              data-reveal
              data-reveal-delay={String(i + 1) as "1" | "2" | "3"}
              className="rounded-2xl bg-cinza p-8"
            >
              <p className="mb-6 max-w-[52ch] text-[15px] italic text-grafite">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-azul font-display text-sm font-bold text-white">
                  {t.initials}
                </div>
                <div>
                  <strong className="block font-display text-[13.5px] text-azul">{t.name}</strong>
                  <span className="text-xs text-[#777]">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
