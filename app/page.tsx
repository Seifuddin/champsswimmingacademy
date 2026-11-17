
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import ProgrammesSection from "@/components/home/ProgrammesSection";
import LearningJourney from "@/components/home/LearningJourney";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CoachesSection from "@/components/home/CoachesSection";
import GallerySection from "@/components/home/GallerySection";
import Testimonials from "@/components/home/Testimonials";
import FAQSection from "@/components/home/FAQSection";
import FinalCTA from "@/components/home/FinalCTA";
import EnrolmentCTA from "@/components/home/EnrolmentCTA";
import StatsCounter from "@/components/home/StatsCounter";
import HomeBlogSection from "@/components/blog/HomeBlogSection";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <EnrolmentCTA />
        <StatsCounter />
        <ProgrammesSection />
        <WhyChooseUs />
        <GallerySection />

        <div id="faqs">
          <FAQSection />
        </div>
        <FinalCTA />
        <CoachesSection />
        <HomeBlogSection />

      </main>
    </>
  );
}
