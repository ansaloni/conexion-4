import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import "./globals.css";
import ScrollRevealInit from "@/components/ScrollRevealInit";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Conexión Pro — Espanhol profissional para atendimento ao cliente",
  description:
    "Conexión Pro forma atendentes bilíngues através do Método C.O.N.E.X. Aulas práticas de espanhol focadas em atendimento, suporte e vendas.",
  metadataBase: new URL("https://conexionpro.com.br"),
  icons: {
    icon: "/icon-mark.png",
  },
  openGraph: {
    title: "Conexión Pro — Espanhol profissional para atendimento ao cliente",
    description:
      "Dobre suas oportunidades no mercado de trabalho com um espanhol profissional de verdade.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${lato.variable}`}>
      <body className="font-body antialiased">
        <ScrollRevealInit />
        {children}
      </body>
    </html>
  );
}
