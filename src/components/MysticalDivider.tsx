import { Sparkles } from "lucide-react";

const MysticalDivider = () => (
  <div className="flex items-center justify-center gap-3 py-8">
    <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
    <Sparkles className="h-4 w-4 text-primary animate-pulse-glow" />
    <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
  </div>
);

export default MysticalDivider;
