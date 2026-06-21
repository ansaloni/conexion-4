const steps = [
  { letter: "C", title: "Comunicação Estratégica", desc: "Define a intenção e o valor de cada resposta antes de falar." },
  { letter: "O", title: "Observação Cultural", desc: "Ajusta tom e formalidade ao contexto de cada país LATAM." },
  { letter: "N", title: "Naturalidade Linguística", desc: "Substitui o portunhol por frases curtas, corretas e fluentes." },
  { letter: "E", title: "Empatia e Encantamento", desc: "Constrói vínculo e confiança em momentos de conflito." },
  { letter: "X", title: "Experiência Bilíngue", desc: "Transforma cada interação real em prática e evolução." },
];

export default function Method() {
  return (
    <section id="metodo" className="bg-azul-deep py-16 text-white md:py-[120px]" aria-labelledby="method-title">
      <div className="mx-auto max-w-wrap px-6">
        <div className="mx-auto mb-16 max-w-xl text-center" data-reveal>
          <span className="mb-3 block font-display text-xs font-bold uppercase tracking-wider text-amarelo">
            Nossa metodologia
          </span>
          <h2 id="method-title" className="font-display text-[28px] font-extrabold md:text-[38px]">
            Um sistema de comunicação, não um curso genérico
          </h2>
          <p className="mt-4 max-w-[60ch] mx-auto text-[16.5px] text-white/70">
            O Método C.O.N.E.X. transforma qualquer interação em espanhol — mensagem,
            e-mail, ligação ou reunião — em cinco etapas conectadas.
          </p>
        </div>

        <div className="relative">
          <div
            className="absolute left-0 right-0 top-[34px] hidden h-0.5 md:block"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, #FFC72C 0 10px, transparent 10px 18px)",
            }}
            aria-hidden="true"
          />
          <div className="relative grid grid-cols-1 gap-9 sm:grid-cols-2 md:grid-cols-5 md:gap-5">
            {steps.map((s, i) => (
              <div
                key={s.letter}
                data-reveal
                data-reveal-delay={String(i + 1) as "1" | "2" | "3" | "4" | "5"}
                className="flex flex-col items-start"
              >
                <div className="mb-4 flex h-[68px] w-[68px] items-center justify-center rounded-full border-[5px] border-azul-deep bg-amarelo font-display text-[28px] font-extrabold text-azul-deep shadow-[0_0_0_2px_rgba(255,199,44,0.4)]">
                  {s.letter}
                </div>
                <h3 className="mb-2 font-display text-base font-bold text-white">{s.title}</h3>
                <p className="max-w-[28ch] text-[13.5px] text-white/65">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
