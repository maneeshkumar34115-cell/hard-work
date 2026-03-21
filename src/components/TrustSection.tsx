import { motion } from "framer-motion";
import { ShieldCheck, Brain, BookOpen, Zap } from "lucide-react";

const trustItems = [
  { icon: ShieldCheck, title: "Personalized Insights", desc: "Tailored specifically to your birth numbers" },
  { icon: Brain, title: "Proven Numerology Logic", desc: "Based on centuries-old Pythagorean system" },
  { icon: BookOpen, title: "Easy to Understand", desc: "No jargon — clear, actionable guidance" },
  { icon: Zap, title: "Instant Results", desc: "Get your report in under 60 seconds" },
];

const TrustSection = () => (
  <section className="py-20 px-4">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-display text-3xl sm:text-4xl font-bold text-center mb-12"
      >
        Why <span className="text-gradient-gold">Trust Us</span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {trustItems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <item.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
