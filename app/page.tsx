
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import ProgrammesSection from "@/components/home/ProgrammesSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <AboutPreview />
        <ProgrammesSection />
      </main>
    </>
  );
}
