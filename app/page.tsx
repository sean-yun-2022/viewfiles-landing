import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PainPoint from "@/components/PainPoint";
import Compare from "@/components/Compare";
import HowToUse from "@/components/HowToUse";
import Pricing from "@/components/Pricing";
import Download from "@/components/Download";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <PainPoint />
        <Compare />
        <HowToUse />
        <Pricing />
        <Download />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
