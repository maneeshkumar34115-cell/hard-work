import { motion } from "framer-motion";
import { FileEdit, Cpu, Zap } from "lucide-react";

const steps = [
  { icon: FileEdit, step: "01", title: "Enter Your Details", desc: "Share your name and birth info in 30 seconds" },
  { icon: Cpu, step: "02", title: "We Analyze Your Numbers", desc: "Our system calculates your core numerology profile" },
  { icon: Zap, step: "03", title: "Get Instant Insights", desc: "Receive a personalized report with actionable guidance" },
];

const HowItWorksSection = () => (
  <section className="py-20 px-4">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-display text-3xl sm:text-4xl font-bold text-center mb-12"
      >
        How It <span className="text-gradient-gold">Works</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center"
          >
            <div className="relative mx-auto w-16 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center mb-4">
              <s.icon className="h-7 w-7 text-primary" />
              <span className="absolute -top-2 -right-2 text-xs font-bold text-primary bg-background border border-primary/30 rounded-full w-6 h-6 flex items-center justify-center">
                {s.step}
              </span>
            </div>
            <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
