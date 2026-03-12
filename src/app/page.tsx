import HeroParallax from "@/components/HeroParallax";
import TrustStrip from "@/components/TrustStrip";
import SpecialSection from "@/components/SpecialSection";
import ChilliJourney from "@/components/ChilliJourney";
import UsesGrid from "@/components/UsesGrid";
import AboutWins from "@/components/AboutWins";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main>
      {/* 1 — Scroll-driven hero with WebM video scrubbing */}
      <HeroParallax />

      {/* 2 — Trust proof strip */}
      <TrustStrip />

      {/* 3 — What makes WINS special (3 quality pillars) */}
      <SpecialSection />

      {/* 4 — Chilli history timeline */}
      <ChilliJourney />

      {/* 5 — 6-use grid */}
      <UsesGrid />

      {/* 6 — About the brand */}
      <AboutWins />

      {/* 7 — FAQ accordion */}
      <FAQ />

      {/* 8 — Final CTA + footer */}
      <FinalCTA />
    </main>
  );
}
