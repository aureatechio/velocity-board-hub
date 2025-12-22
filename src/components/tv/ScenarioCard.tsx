import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScenarioCardProps {
  type: "conservative" | "realistic" | "optimistic";
  value: string;
  label?: string;
  delay?: number;
}

export const ScenarioCard = ({
  type,
  value,
  label,
  delay = 0,
}: ScenarioCardProps) => {
  const typeStyles = {
    conservative: {
      bg: "bg-muted/50",
      text: "text-muted-foreground",
      border: "border-muted",
      label: "Conservador",
    },
    realistic: {
      bg: "bg-primary/20",
      text: "text-primary",
      border: "border-primary/50",
      label: "Realista",
    },
    optimistic: {
      bg: "bg-success/20",
      text: "text-success",
      border: "border-success/50",
      label: "Otimista",
    },
  };

  const styles = typeStyles[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className={cn(
        "p-4 rounded-xl border text-center",
        styles.bg,
        styles.border
      )}
    >
      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
        {label || styles.label}
      </p>
      <span className={cn("text-3xl font-bold font-display", styles.text)}>
        {value}
      </span>
    </motion.div>
  );
};
