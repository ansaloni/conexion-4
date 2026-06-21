import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-azul-deep py-16 text-white/80">
      <div className="mx-auto max-w-wrap px-6">
        <div className="mb-12 grid grid-cols-2 gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#main" className="inline-block rounded-2xl bg-white p-4">
              <Image
                src="/logo-full.png"
                alt="Conexión Pro — Karolaine Oliveira"
                width={189}
                height={218}
                className="h-16 w-auto"
              />
            </a>
            <p className="mt-3.5 max-w-[280px] text-sm text-white/60">
              Espanhol profissional para quem atende clientes todos os dias. Método
              C.O.N.E.X. — criado por Karolaine Oliveira.
            </p>
            <div className="mt-3 flex gap-3">
              <SocialIcon label="Instagram">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </SocialIcon>
              <SocialIcon label="LinkedIn">
                <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2" />
                <path d="M7 10v7M7 7v.01M11 17v-4.5a2.5 2.5 0 015 0V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </SocialIcon>
              <SocialIcon label="YouTube">
                <rect x="3" y="6" width="18" height="12" rx="4" stroke="currentColor" strokeWidth="2" />
                <path d="M10 10l5 2.2-5 2.2z" fill="currentColor" />
              </SocialIcon>
            </div>
          </div>

          <FooterCol
            title="Institucional"
            links={[
              { href: "#sobre", label: "Sobre nós" },
              { href: "#metodo", label: "Método C.O.N.E.X." },
              { href: "#resultados", label: "Resultados" },
            ]}
          />
          <FooterCol
            title="Suporte"
            links={[
              { href: "#contato", label: "Fale conosco" },
              { href: "#", label: "Perguntas frequentes" },
              { href: "#", label: "Política de privacidade" },
            ]}
          />
          <FooterCol
            title="Contato"
            links={[
              { href: "mailto:contato@conexionpro.com.br", label: "contato@conexionpro.com.br" },
              { href: "#", label: "Belo Horizonte, MG" },
            ]}
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/50">
          <span>© 2026 Conexión Pro. Todos os direitos reservados.</span>
          <span>Idealizado por Karolaine Oliveira</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h4 className="mb-4.5 font-display text-[13px] uppercase tracking-wide text-white" style={{ marginBottom: 18 }}>
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="text-sm text-white/65 transition hover:text-amarelo">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <a
      href="#"
      aria-label={`Conexión Pro no ${label}`}
      className="flex h-[38px] w-[38px] items-center justify-center rounded-full border-[1.5px] border-white/25 text-white transition hover:border-amarelo hover:bg-amarelo hover:text-azul-deep"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        {children}
      </svg>
    </a>
  );
}
