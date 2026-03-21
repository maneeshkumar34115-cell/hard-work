import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface FinalCtaSectionProps {
  onCtaClick: () => void;
}

const FinalCtaSection = ({ onCtaClick }: FinalCtaSectionProps) => (
  <section className="py-24 px-4 text-center">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-lg mx-auto"
    >
      <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
        Your Future Is <span className="text-gradient-gold">Waiting</span>
      </h2>
      <p className="text-muted-foreground mb-8">
        Don't leave your destiny to chance. Discover what your numbers reveal about your life path, love, and career.
      </p>
      <Button variant="cta" size="xl" onClick={onCtaClick}>
        ✨ Get My Free Report Now
      </Button>
    </motion.div>
  </section>
);

export default FinalCtaSection;
