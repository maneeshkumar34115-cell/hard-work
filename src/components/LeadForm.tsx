import { useState, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, CheckCircle2, ChevronDown } from "lucide-react";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(10, "Enter a valid phone number").max(15).regex(/^[0-9+\-\s]+$/, "Invalid phone number"),
  email: z.string().trim().email("Enter a valid email").max(255),
  reason: z.string().min(1, "Please select a reason"),
});

type FormData = z.infer<typeof formSchema>;
type FormState = "empty" | "filling" | "loading" | "success";

interface LeadFormProps {
  onSuccess: (data: FormData) => void;
}

const reasons = [
  "Looking for life clarity",
  "Career confusion",
  "Relationship issues",
  "Financial growth",
  "General guidance",
];

const LeadForm = forwardRef<HTMLDivElement, LeadFormProps>(({ onSuccess }, ref) => {
  const [formState, setFormState] = useState<FormState>("empty");
  const [data, setData] = useState<FormData>({ name: "", phone: "", email: "", reason: "Looking for life clarity" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [showReasons, setShowReasons] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: undefined }));
    if (formState === "empty") setFormState("filling");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.errors.forEach(err => {
        const field = err.path[0] as keyof FormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setFormState("loading");
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 2500));
    setFormState("success");
    onSuccess(result.data);
  };

  return (
    <section ref={ref} id="lead-form" className="relative py-20 px-4">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-mystical p-6 sm:p-8 glow-gold"
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-center mb-2">
            Unlock Your <span className="text-gradient-gold">Numerology</span>
          </h2>
          <p className="text-muted-foreground text-center text-sm mb-6">
            Enter your details for a free personalized report
          </p>

          <AnimatePresence mode="wait">
            {formState === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="font-display text-xl font-bold mb-2">Your Report is Ready!</h3>
                <p className="text-muted-foreground text-sm">Scroll down to see your insights</p>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-sm text-secondary-foreground">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    value={data.name}
                    onChange={e => handleChange("name", e.target.value)}
                    className="mt-1 bg-muted border-border focus:border-primary"
                  />
                  {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Label htmlFor="phone" className="text-sm text-secondary-foreground">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={data.phone}
                    onChange={e => handleChange("phone", e.target.value)}
                    className="mt-1 bg-muted border-border focus:border-primary"
                  />
                  {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm text-secondary-foreground">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={data.email}
                    onChange={e => handleChange("email", e.target.value)}
                    className="mt-1 bg-muted border-border focus:border-primary"
                  />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Label className="text-sm text-secondary-foreground">Why are you here?</Label>
                  <div className="relative mt-1">
                    <button
                      type="button"
                      onClick={() => setShowReasons(!showReasons)}
                      className="w-full flex items-center justify-between rounded-lg border border-border bg-muted px-3 py-2 text-sm text-foreground"
                    >
                      {data.reason}
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    </button>
                    {showReasons && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute z-20 mt-1 w-full rounded-lg border border-border bg-card shadow-xl"
                      >
                        {reasons.map(r => (
                          <button
                            key={r}
                            type="button"
                            onClick={() => { handleChange("reason", r); setShowReasons(false); }}
                            className="w-full px-3 py-2 text-left text-sm hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg"
                          >
                            {r}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </div>
                  {errors.reason && <p className="text-destructive text-xs mt-1">{errors.reason}</p>}
                </div>

                <Button
                  type="submit"
                  variant="cta"
                  size="lg"
                  className="w-full mt-2"
                  disabled={formState === "loading"}
                >
                  {formState === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Generating your report…
                    </>
                  ) : (
                    "✨ Generate My Free Report"
                  )}
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
});

LeadForm.displayName = "LeadForm";
export default LeadForm;
