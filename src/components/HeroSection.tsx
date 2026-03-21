import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star, Users } from "lucide-react";
import heroMandala from "@/assets/hero-mandala.png";

interface HeroSectionProps {
  onCtaClick: () => void;
}

const HeroSection = ({ onCtaClick }: HeroSectionProps) => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
    {/* Background effects */}
    <div className="absolute inset-0 bg-gradient-dark" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
    
    {/* Mandala */}
    <motion.img
      src={heroMandala}
      alt=""
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-15 animate-spin-slow pointer-events-none"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.15, scale: 1 }}
      transition={{ duration: 2 }}
    />

    <div className="relative z-10 text-center max-w-2xl mx-auto">
      {/* Trust badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-secondary/50 px-4 py-2 mb-8"
      >
        <Users className="h-4 w-4 text-primary" />
        <span className="text-sm text-secondary-foreground">Trusted by 1,000+ seekers</span>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-3 w-3 fill-primary text-primary" />
          ))}
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
      >
        Discover Your{" "}
        <span className="text-gradient-gold">Life Path</span>
        <br />& Hidden Potential
        <br />
        <span className="text-primary text-3xl sm:text-4xl">in 60 Seconds</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-muted-foreground text-lg sm:text-xl mb-10 max-w-lg mx-auto"
      >
        Get your <span className="text-primary font-semibold">FREE</span> personalized numerology report with insights on career, love, and success
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Button variant="cta" size="xl" onClick={onCtaClick} className="animate-float">
          ✨ Get My Free Report
        </Button>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
