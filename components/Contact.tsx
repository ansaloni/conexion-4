"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    // TODO: wire up to your backend / email service / CRM.
    setSubmitted(true);
    form.reset();
  }

  return (
    <section id="contato" className="bg-cinza py-24" aria-labelledby="contact-title">
      <div className="mx-auto grid max-w-wrap grid-cols-1 gap-14 px-6 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="mb-3 block font-display text-xs font-bold uppercase tracking-wider text-vermelho">
            Vamos conversar
          </span>
          <h2 id="contact-title" className="font-display text-[26px] font-bold text-azul md:text-[34px]">
            Pronto para atender em espanhol com confiança?
          </h2>
          <p className="mb-7 mt-4 text-base text-[#555]">
            Conte um pouco sobre seu momento profissional. Nossa equipe responde com
            as melhores opções para o seu caso.
          </p>

          <div className="space-y-4">
            <ContactLine label="E-mail" value="contato@conexionpro.com.br">
              <path d="M3 7l9 6 9-6M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z" stroke="currentColor" strokeWidth="2" />
            </ContactLine>
            <ContactLine label="WhatsApp" value="+55 (31) 90000-0000">
              <path
                d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 2 .7 2.9a2 2 0 01-.5 2.1L8 10a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.5c.9.3 1.9.6 2.9.7a2 2 0 011.7 2z"
                stroke="currentColor"
                strokeWidth="2"
              />
            </ContactLine>
            <ContactLine label="Atendimento" value="Belo Horizonte, MG — turmas online">
              <path d="M12 21s-7-5.2-7-11a7 7 0 0114 0c0 5.8-7 11-7 11z" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
            </ContactLine>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-2xl bg-white p-9 shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
        >
          <h3 className="sr-only">Formulário de contato</h3>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field id="nome" label="Nome completo" type="text" autoComplete="name" required />
            <Field id="email" label="E-mail" type="email" autoComplete="email" required />
          </div>
          <Field id="telefone" label="Telefone / WhatsApp" type="tel" autoComplete="tel" />
          <div className="mb-5">
            <label htmlFor="mensagem" className="mb-2 block font-display text-[13px] font-bold text-azul">
              Como podemos ajudar?
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              required
              rows={4}
              className="w-full rounded-lg border-[1.5px] border-[#ddd] bg-[#fafafa] p-3.5 text-[14.5px] text-grafite outline-none transition focus:border-azul focus:bg-white"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-vermelho px-7 py-4 font-display text-[15px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-vermelho-hover"
          >
            Enviar mensagem
          </button>
          <p className="mt-3.5 text-xs text-[#888]">
            Ao enviar, você concorda em ser contatado pela equipe Conexión Pro. Não enviamos spam.
          </p>

          {submitted && (
            <div
              role="status"
              aria-live="polite"
              className="mt-4 flex items-center gap-2 rounded-lg border border-[#bfe3c6] bg-[#eaf6ec] px-4 py-3.5 font-display text-sm font-bold text-[#1f7a32]"
            >
              Mensagem enviada! Nossa equipe responde em até 1 dia útil.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function ContactLine({
  label,
  value,
  children,
}: {
  label: string;
  value: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3.5">
      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-[10px] bg-azul text-amarelo">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          {children}
        </svg>
      </div>
      <div>
        <strong className="block font-display text-[13.5px] text-azul">{label}</strong>
        <span className="text-sm text-[#555]">{value}</span>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  type,
  autoComplete,
  required,
}: {
  id: string;
  label: string;
  type: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div className="mb-5">
      <label htmlFor={id} className="mb-2 block font-display text-[13px] font-bold text-azul">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="w-full rounded-lg border-[1.5px] border-[#ddd] bg-[#fafafa] p-3.5 text-[14.5px] text-grafite outline-none transition focus:border-azul focus:bg-white"
      />
    </div>
  );
}
