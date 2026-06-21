import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import Method from "@/components/Method";
import TrustIndicators from "@/components/TrustIndicators";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-[-48px] z-[100] rounded-b-lg bg-azul px-[18px] py-3 font-display text-sm font-bold text-white transition-all focus:top-0"
      >
        Pular para o conteúdo
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <ValueProposition />
        <Method />
        <TrustIndicators />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
