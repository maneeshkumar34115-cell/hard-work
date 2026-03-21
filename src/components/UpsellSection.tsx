import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Crown, Sparkles, User } from "lucide-react";

const plans = [
  {
    icon: Sparkles,
    name: "Basic Detailed Report",
    price: "₹299",
    features: ["Full life path analysis", "Career insights", "Lucky numbers & dates"],
    popular: false,
  },
  {
    icon: Crown,
    name: "Advanced Life Analysis",
    price: "₹599",
    features: ["Everything in Basic", "Relationship compatibility", "Year-ahead forecast", "Hidden talent analysis"],
    popular: true,
  },
  {
    icon: User,
    name: "1-on-1 Consultation",
    price: "₹999",
    features: ["Everything in Advanced", "Live video session", "Personal Q&A", "Remedies & guidance"],
    popular: false,
  },
];

interface UpsellSectionProps {
  visible: boolean;
}

const UpsellSection = ({ visible }: UpsellSectionProps) => {
  if (!visible) return null;

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">
            Your Basic Report is <span className="text-gradient-gold">Ready</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Unlock deeper insights with a premium analysis tailored to your unique numbers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className={`card-mystical p-6 relative ${plan.popular ? "glow-gold border-primary/50" : ""}`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <plan.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display text-xl font-bold mb-1">{plan.name}</h3>
              <p className="text-3xl font-bold text-foreground mb-4">{plan.price}</p>
              <ul className="space-y-2 mb-6">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-secondary-foreground">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.popular ? "cta" : "ctaOutline"}
                size="lg"
                className="w-full"
              >
                Unlock Full Report
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpsellSection;
