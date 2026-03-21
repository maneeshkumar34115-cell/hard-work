import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ProblemSectionProps {
  onCtaClick: () => void;
}

const ProblemSection = ({ onCtaClick }: ProblemSectionProps) => (
  <section className="py-20 px-4 bg-secondary/30">
    <div className="max-w-2xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-display text-3xl sm:text-4xl font-bold mb-6"
      >
        Feeling <span className="text-gradient-gold">Stuck or Confused</span> in Life?
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4 text-muted-foreground mb-8"
      >
        <p>
          You wake up every day wondering if you're on the right path. Career feels uncertain,
          relationships feel complicated, and decisions feel overwhelming.
        </p>
        <p>
          What if there was a <span className="text-primary font-semibold">hidden code</span> in your birthdate
          that reveals exactly who you are, what you're meant to do, and when your best opportunities will come?
        </p>
        <p className="text-foreground font-medium">
          That's the power of numerology — and your free report is the first step.
        </p>
      </motion.div>
      <Button variant="cta" size="lg" onClick={onCtaClick}>
        Discover My Numbers
      </Button>
    </div>
  </section>
);

export default ProblemSection;
