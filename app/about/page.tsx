
import AboutHero from "@/components/about/AboutHero";
import AboutIntroduction from "@/components/about/AboutIntroduction";
import OurStory from "@/components/about/OurStory";
import MissionVisionValues from "@/components/about/MissionVisionValues";
import SwimmingPhilosophy from "@/components/about/SwimmingPhilosophy";
import WhyChooseChamps from "@/components/about/WhyChooseChamps";
import CoachingTeam from "@/components/about/CoachingTeam";
import SafetyCommitment from "@/components/about/SafetyCommitment";
import AboutImpact from "@/components/about/AboutImpact";
import AboutCTA from "@/components/about/AboutCTA";
import StatsCounter from "@/components/home/StatsCounter";
import FinalCTA from "@/components/home/FinalCTA";
import AcademyCredibilityStrip from "@/components/about/AcademyCredibilityStrip";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AcademyCredibilityStrip />
      <AboutIntroduction />
      <StatsCounter />
      <MissionVisionValues />
      <OurStory />
      <FinalCTA />
      <SwimmingPhilosophy />
      <WhyChooseChamps />
      <CoachingTeam />
      <SafetyCommitment />
    </main>
  );
}
