"use client";

import { useState, FormEvent, ChangeEvent, FocusEvent } from "react";

/* ── helpers ─────────────────────────────────────────────────── */

function formatPhone(raw: string): string {
  const d = raw.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

function validateEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

type Status = "idle" | "valid" | "error";

interface FS {
  value: string;
  status: Status;
  error: string;
}

const blank = (): FS => ({ value: "", status: "idle", error: "" });

interface FormState {
  nome: FS;
  email: FS;
  telefone: FS;
  mensagem: FS;
}

function validateField(name: keyof FormState, value: string): string {
  if (name === "nome") {
    if (!value.trim()) return "Nome obrigatório.";
    if (value.trim().length < 2) return "Informe seu nome completo.";
  }
  if (name === "email") {
    if (!value.trim()) return "E-mail obrigatório.";
    if (!validateEmail(value)) return "Informe um e-mail válido.";
  }
  if (name === "mensagem") {
    if (!value.trim()) return "Escreva sua mensagem.";
    if (value.trim().length < 10) return "Mensagem muito curta.";
  }
  return "";
}

/* ── component ───────────────────────────────────────────────── */

export default function Contact() {
  const [fields, setFields] = useState<FormState>({
    nome: blank(),
    email: blank(),
    telefone: blank(),
    mensagem: blank(),
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    const key = name as keyof FormState;
    const cooked = key === "telefone" ? formatPhone(value) : value;
    setFields((prev) => ({
      ...prev,
      [key]: { ...prev[key], value: cooked },
    }));
  }

  function handleBlur(e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    const key = name as keyof FormState;
    const error = validateField(key, value);
    setFields((prev) => ({
      ...prev,
      [key]: { ...prev[key], status: error ? "error" : "valid", error },
    }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const next = { ...fields };
    let hasError = false;
    for (const k of ["nome", "email", "mensagem"] as const) {
      const error = validateField(k, fields[k].value);
      next[k] = { ...fields[k], status: error ? "error" : "valid", error };
      if (error) hasError = true;
    }
    setFields(next);
    if (hasError) return;

    setSubmitting(true);
    // TODO: replace with real API call
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFields({ nome: blank(), email: blank(), telefone: blank(), mensagem: blank() });
    }, 1200);
  }

  return (
    <section id="contato" className="bg-cinza py-16 md:py-[120px]" aria-labelledby="contact-title">
      <div className="mx-auto grid max-w-wrap grid-cols-1 gap-14 px-6 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="mb-3 block font-display text-xs font-bold uppercase tracking-wider text-vermelho">
            Vamos conversar
          </span>
          <h2 id="contact-title" className="font-display text-[26px] font-bold text-azul md:text-[34px]">
            Pronto para atender em espanhol com confiança?
          </h2>
          <p className="mb-7 mt-4 max-w-[52ch] text-base text-[#555]">
            Conte um pouco sobre seu momento profissional. Nossa equipe responde com
            as melhores opções para o seu caso.
          </p>

          <div className="space-y-4">
            <ContactLine label="E-mail" value="contato@conexionpro.com.br">
              <path
                d="M3 7l9 6 9-6M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z"
                stroke="currentColor"
                strokeWidth="2"
              />
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
            <Field
              id="nome"
              label="Nome completo"
              type="text"
              autoComplete="name"
              required
              fs={fields.nome}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Field
              id="email"
              label="E-mail"
              type="email"
              autoComplete="email"
              required
              fs={fields.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          <Field
            id="telefone"
            label="Telefone / WhatsApp"
            type="tel"
            autoComplete="tel"
            placeholder="(XX) XXXXX-XXXX"
            fs={fields.telefone}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <div className="mb-5">
            <label htmlFor="mensagem" className="mb-2 block font-display text-[13px] font-bold text-azul">
              Como podemos ajudar? <span className="text-vermelho" aria-hidden="true">*</span>
            </label>
            <div className="relative">
              <textarea
                id="mensagem"
                name="mensagem"
                required
                rows={4}
                value={fields.mensagem.value}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-describedby={fields.mensagem.status === "error" ? "mensagem-error" : undefined}
                className={`w-full rounded-lg border-[1.5px] bg-[#fafafa] p-3.5 text-[14.5px] text-grafite outline-none transition focus:bg-white ${
                  fields.mensagem.status === "error"
                    ? "border-vermelho focus:border-vermelho"
                    : fields.mensagem.status === "valid"
                    ? "border-[#22c55e] focus:border-[#22c55e]"
                    : "border-[#ddd] focus:border-azul"
                }`}
              />
              {fields.mensagem.status === "valid" && (
                <CheckIcon className="absolute right-3 top-3" />
              )}
            </div>
            {fields.mensagem.status === "error" && (
              <p id="mensagem-error" role="alert" className="mt-1.5 text-[12px] font-semibold text-vermelho">
                {fields.mensagem.error}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="flex w-full items-center justify-center gap-2.5 rounded-md bg-vermelho px-7 py-4 font-display text-[15px] font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-vermelho-hover hover:shadow-[0_8px_20px_rgba(212,33,61,0.30)] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting ? (
              <>
                <Spinner />
                Enviando…
              </>
            ) : (
              "Enviar mensagem"
            )}
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
              <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Mensagem enviada! Nossa equipe responde em até 1 dia útil.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

/* ── sub-components ──────────────────────────────────────────── */

function Field({
  id,
  label,
  type,
  autoComplete,
  required,
  placeholder,
  fs,
  onChange,
  onBlur,
}: {
  id: string;
  label: string;
  type: string;
  autoComplete?: string;
  required?: boolean;
  placeholder?: string;
  fs: FS;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="mb-5">
      <label htmlFor={id} className="mb-2 block font-display text-[13px] font-bold text-azul">
        {label}{" "}
        {required && (
          <span className="text-vermelho" aria-hidden="true">
            *
          </span>
        )}
      </label>
      <div className="relative">
        <input
          id={id}
          name={id}
          type={type}
          autoComplete={autoComplete}
          required={required}
          placeholder={placeholder}
          value={fs.value}
          onChange={onChange}
          onBlur={onBlur}
          aria-describedby={fs.status === "error" ? `${id}-error` : undefined}
          aria-invalid={fs.status === "error" ? "true" : undefined}
          className={`w-full rounded-lg border-[1.5px] bg-[#fafafa] p-3.5 pr-10 text-[14.5px] text-grafite outline-none transition focus:bg-white ${
            fs.status === "error"
              ? "border-vermelho focus:border-vermelho"
              : fs.status === "valid"
              ? "border-[#22c55e] focus:border-[#22c55e]"
              : "border-[#ddd] focus:border-azul"
          }`}
        />
        {fs.status === "valid" && <CheckIcon className="absolute right-3 top-1/2 -translate-y-1/2" />}
      </div>
      {fs.status === "error" && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-[12px] font-semibold text-vermelho">
          {fs.error}
        </p>
      )}
    </div>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`text-[#22c55e] ${className ?? ""}`}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function Spinner() {
  return (
    <svg
      className="h-4 w-4 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
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
