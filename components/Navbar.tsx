"use client";

import { useState } from "react";
import Image from "next/image";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#metodo", label: "Método" },
  { href: "#resultados", label: "Resultados" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-azul/10 bg-white/90 backdrop-blur-md">
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex h-[76px] max-w-wrap items-center justify-between px-6"
      >
        <a href="#main" className="flex items-center gap-2 font-display text-xl font-extrabold text-azul">
          <Image src="/icon-mark.png" alt="" width={34} height={34} className="h-[34px] w-[34px] object-contain" />
          Conexión<span className="text-vermelho">Pro</span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-display text-sm font-semibold text-grafite transition-colors hover:text-azul"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contato"
          className="hidden rounded-md border-2 border-azul px-7 py-3.5 font-display text-sm font-bold text-azul transition hover:bg-azul hover:text-white md:inline-flex"
        >
          Fale Conosco
        </a>

        <button
          aria-label="Abrir menu"
          aria-expanded={open}
          aria-controls="mobile-panel"
          onClick={() => setOpen((v) => !v)}
          className="p-2 md:hidden"
        >
          <span className="block h-[2.5px] w-6 bg-azul" />
          <span className="my-[5px] block h-[2.5px] w-6 bg-azul" />
          <span className="block h-[2.5px] w-6 bg-azul" />
        </button>
      </nav>

      <div
        id="mobile-panel"
        className={`fixed inset-x-0 top-[76px] bottom-0 z-40 overflow-y-auto bg-white transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 pt-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-cinza py-4 font-display text-lg font-bold text-azul"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-5 rounded-md bg-vermelho px-7 py-4 text-center font-display font-bold text-white"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </header>
  );
}
