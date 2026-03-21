import { useRef, useState } from "react";
import HeroSection from "@/components/HeroSection";
import LeadForm from "@/components/LeadForm";
import BenefitsSection from "@/components/BenefitsSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrustSection from "@/components/TrustSection";
import UpsellSection from "@/components/UpsellSection";
import FinalCtaSection from "@/components/FinalCtaSection";

const Index = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [showUpsell, setShowUpsell] = useState(false);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFormSuccess = () => {
    setShowUpsell(true);
    // Scroll to upsell after a brief delay
    setTimeout(() => {
      document.getElementById("upsell")?.scrollIntoView({ behavior: "smooth" });
    }, 500);
  };

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection onCtaClick={scrollToForm} />
      <LeadForm ref={formRef} onSuccess={handleFormSuccess} />
      <BenefitsSection />
      <ProblemSection onCtaClick={scrollToForm} />
      <HowItWorksSection />
      <TestimonialsSection />
      <TrustSection />
      <div id="upsell">
        <UpsellSection visible={showUpsell} />
      </div>
      <FinalCtaSection onCtaClick={scrollToForm} />

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border text-center">
        <p className="text-muted-foreground text-sm">
          © 2026 Daily Fortune · Numerology Insights · All rights reserved
        </p>
      </footer>
    </main>
  );
};

export default Index;
