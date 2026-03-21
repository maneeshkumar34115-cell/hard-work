import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Priya S.", text: "The life path number reading was scarily accurate. It gave me so much clarity about my career switch!", rating: 5 },
  { name: "Rahul M.", text: "I was skeptical at first, but the relationship insights helped me understand my patterns. Highly recommend!", rating: 5 },
  { name: "Ananya K.", text: "The free report itself was so detailed. The paid consultation changed my life completely.", rating: 5 },
  { name: "Vikram T.", text: "Finally understood why certain numbers kept showing up in my life. This is powerful stuff.", rating: 5 },
];

const TestimonialsSection = () => (
  <section className="py-20 px-4 bg-secondary/20">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-display text-3xl sm:text-4xl font-bold text-center mb-12"
      >
        What Our <span className="text-gradient-gold">Seekers</span> Say
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-mystical p-6"
          >
            <div className="flex gap-0.5 mb-3">
              {[...Array(t.rating)].map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-secondary-foreground text-sm mb-4 italic">"{t.text}"</p>
            <p className="text-foreground font-semibold text-sm">— {t.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
