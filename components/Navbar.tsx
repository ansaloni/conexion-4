"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#metodo", label: "Método" },
  { href: "#resultados", label: "Resultados" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-azul/10 bg-white/90 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "shadow-[0_2px_16px_rgba(0,32,63,0.10)]" : ""
      }`}
    >
      <nav
        aria-label="Navegação principal"
        className={`mx-auto flex max-w-wrap items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "h-[60px]" : "h-[76px]"
        }`}
      >
        <a
          href="#main"
          className="flex items-center gap-2 font-display text-xl font-extrabold text-azul"
        >
          <Image
            src="/icon-mark.png"
            alt=""
            width={34}
            height={34}
            className="h-[34px] w-[34px] object-contain"
          />
          Conexión<span className="text-vermelho">Pro</span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`font-display text-sm transition-colors duration-200 ${
                  active === l.href
                    ? "font-bold text-azul underline decoration-vermelho decoration-2 underline-offset-4"
                    : "font-semibold text-grafite hover:text-azul"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contato"
          className="hidden rounded-md border-2 border-azul px-6 py-2.5 font-display text-sm font-bold text-azul transition duration-200 hover:bg-azul hover:text-white md:inline-flex"
        >
          Fale Conosco
        </a>

        {/* Hamburger — 44×44 touch target */}
        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-panel"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-md md:hidden"
        >
          <span
            className={`block h-[2.5px] w-6 bg-azul transition-transform duration-300 ${
              open ? "translate-y-[7.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2.5px] w-6 bg-azul transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2.5px] w-6 bg-azul transition-transform duration-300 ${
              open ? "-translate-y-[7.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Full-screen mobile overlay */}
      <div
        id="mobile-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        className={`fixed inset-0 z-40 flex flex-col bg-white transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-[76px] flex-none items-center justify-between border-b border-cinza px-6">
          <a
            href="#main"
            className="flex items-center gap-2 font-display text-xl font-extrabold text-azul"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/icon-mark.png"
              alt=""
              width={34}
              height={34}
              className="h-[34px] w-[34px] object-contain"
            />
            Conexión<span className="text-vermelho">Pro</span>
          </a>
          <button
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
            className="flex h-11 w-11 items-center justify-center rounded-md text-azul"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <nav className="flex flex-1 flex-col overflow-y-auto px-6 pt-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex min-h-[56px] items-center border-b border-cinza font-display text-xl font-bold text-azul"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-8 flex min-h-[56px] items-center justify-center rounded-md bg-vermelho font-display text-lg font-bold text-white transition hover:bg-vermelho-hover"
          >
            Fale Conosco
          </a>
        </nav>
      </div>
    </header>
  );
}
