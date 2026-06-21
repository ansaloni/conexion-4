const steps = [
  { letter: "C", title: "Comunicação Estratégica", desc: "Clareza, intenção e valor" },
  { letter: "O", title: "Observação Cultural", desc: "Tom e contexto LATAM" },
  { letter: "N", title: "Naturalidade Linguística", desc: "Frases curtas e corretas" },
  { letter: "E", title: "Empatia e Encantamento", desc: "Vínculo e confiança" },
  { letter: "X", title: "Experiência Bilíngue", desc: "Prática real e evolução" },
];

import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-cinza py-16 md:py-[88px]" aria-labelledby="hero-title">
      <div className="mx-auto grid max-w-wrap grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1.1fr_0.9fr] md:gap-14">
        <div>
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-azul/[0.07] px-3.5 py-2 font-display text-xs font-bold uppercase tracking-wider text-azul">
            <span className="h-1.5 w-1.5 rounded-full bg-vermelho" />
            Espanhol para atendimento ao cliente
          </span>

          <h1
            id="hero-title"
            className="font-display text-[34px] font-bold leading-[1.15] text-azul md:text-[52px]"
          >
            Dobre suas oportunidades no mercado de trabalho com um espanhol{" "}
            <span className="text-vermelho">profissional</span> de verdade.
          </h1>

          <p className="mt-5 max-w-[520px] text-lg text-[#4a4a4a]">
            A Conexión Pro forma atendentes bilíngues através do Método C.O.N.E.X. —
            uma metodologia criada para quem atende clientes em espanhol todos os
            dias, não para quem só quer aprender o idioma.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contato"
              aria-label="Falar com a equipe Conexión Pro"
              className="rounded-md bg-vermelho px-7 py-4 font-display text-[15px] font-bold text-white shadow-[0_6px_16px_rgba(212,33,61,0.28)] transition hover:-translate-y-0.5 hover:bg-vermelho-hover"
            >
              Fale Conosco
            </a>
            <a
              href="#metodo"
              className="rounded-md border-2 border-azul px-7 py-4 font-display text-[15px] font-bold text-azul transition hover:-translate-y-0.5 hover:bg-azul hover:text-white"
            >
              Saiba Mais
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-7 font-display">
            <div>
              <strong className="block text-2xl font-extrabold text-azul">90 dias</strong>
              <span className="font-body text-xs text-[#666]">para resultados mensuráveis</span>
            </div>
            <div>
              <strong className="block text-2xl font-extrabold text-azul">5 fases</strong>
              <span className="font-body text-xs text-[#666]">do Método C.O.N.E.X.</span>
            </div>
            <div>
              <strong className="block text-2xl font-extrabold text-azul">100%</strong>
              <span className="font-body text-xs text-[#666]">focado em situações reais</span>
            </div>
          </div>
        </div>

        <div
          role="img"
          aria-label="As cinco etapas do Método C.O.N.E.X. conectadas em sequência"
          className="rounded-2xl bg-azul p-8 shadow-panel md:p-10"
        >
          <h3 className="mb-7 flex items-center gap-2.5 font-display text-sm uppercase tracking-wide text-white/85">
            <Image
              src="/icon-mark.png"
              alt=""
              width={22}
              height={22}
              className="h-[22px] w-[22px] object-contain brightness-0 invert opacity-90"
            />
            O Método C.O.N.E.X.
          </h3>
          <div className="pl-2">
            {steps.map((s, i) => (
              <div key={s.letter} className="relative flex gap-4 pb-7 last:pb-0">
                {i < steps.length - 1 && (
                  <span className="absolute left-[17px] top-[38px] bottom-[-6px] w-0.5 bg-gradient-to-b from-amarelo to-amarelo/20" />
                )}
                <div className="z-10 flex h-9 w-9 flex-none items-center justify-center rounded-full bg-amarelo font-display text-base font-extrabold text-azul-deep">
                  {s.letter}
                </div>
                <div>
                  <strong className="block font-display text-[14.5px] text-white">{s.title}</strong>
                  <span className="text-[13px] text-white/65">{s.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
