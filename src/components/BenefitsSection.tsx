import { motion } from "framer-motion";
import { Compass, Heart, TrendingUp, Clover, Gem, Sparkles } from "lucide-react";
import MysticalDivider from "./MysticalDivider";

const benefits = [
  { icon: Compass, title: "Life Path Number", desc: "Discover the blueprint of your destiny and life purpose" },
  { icon: TrendingUp, title: "Career Direction", desc: "Uncover the professional path aligned with your numbers" },
  { icon: Heart, title: "Love & Relationships", desc: "Understand your romantic compatibility and patterns" },
  { icon: Clover, title: "Lucky Numbers", desc: "Know the numbers that bring fortune and opportunity" },
  { icon: Gem, title: "Hidden Strengths", desc: "Reveal talents and abilities you didn't know you had" },
  { icon: Sparkles, title: "Instant Insights", desc: "Get actionable guidance you can use right away" },
];

const BenefitsSection = () => (
  <section className="py-20 px-4">
    <div className="max-w-5xl mx-auto">
      <MysticalDivider />
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-display text-3xl sm:text-4xl font-bold text-center mb-4"
      >
        What You'll <span className="text-gradient-gold">Discover</span>
      </motion.h2>
      <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
        Your numbers hold the key to understanding every area of your life
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-mystical p-6 hover:glow-gold transition-all duration-300 group"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <b.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{b.title}</h3>
            <p className="text-muted-foreground text-sm">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
