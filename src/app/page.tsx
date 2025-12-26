import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeroStats from "@/components/HeroStats";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import TeamSection from "@/components/TeamSection";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen pt-24 overflow-hidden">
      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= HERO ================= */}
      <Hero />


      {/* ================= SERVICES ================= */}
      <Services />

      {/* ================= PORTFOLIO ================= */}
      {/* <Portfolio /> */}

      {/* ================= TEAM ================= */}
      <TeamSection />

      {/* ================= PRICING ================= */}
      <Pricing />

      {/* ================= ABOUT ================= */}
      <About />
       {/* ================= TRUST / STATS ================= */}
      <HeroStats />

      {/* ================= CONTACT ================= */}
      <Contact />
      

      {/* ================= FOOTER ================= */}
      <Footer />
    </main>
  );
}
