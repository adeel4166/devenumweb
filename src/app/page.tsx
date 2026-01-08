import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeroStats from "@/components/HeroStats";
import Services from "@/components/Services";
import PortfolioPreview from "@/components/PortfolioPreview";
import TeamSection from "@/components/TeamSection";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen pt-24 overflow-hidden">
      <Navbar />
      <Hero />
      <Services />

      {/* ✅ PORTFOLIO PREVIEW */}
      <PortfolioPreview />

      <TeamSection />
      <Pricing />
      <About />
      <HeroStats />
      <Contact />
      <Footer />
    </main>
  );
}
