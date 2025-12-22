import { motion } from "framer-motion";
import { AlertTriangle, Clock, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface AlertCardProps {
  type: "warning" | "danger" | "urgent";
  title: string;
  description: string;
  value?: string;
  delay?: number;
}

export const AlertCard = ({
  type,
  title,
  description,
  value,
  delay = 0,
}: AlertCardProps) => {
  const typeStyles = {
    warning: {
      border: "border-l-warning",
      icon: <Clock className="w-8 h-8 text-warning" />,
      bg: "bg-warning/10",
    },
    danger: {
      border: "border-l-destructive",
      icon: <AlertTriangle className="w-8 h-8 text-destructive" />,
      bg: "bg-destructive/10",
    },
    urgent: {
      border: "border-l-destructive",
      icon: <XCircle className="w-8 h-8 text-destructive animate-pulse" />,
      bg: "bg-destructive/20",
    },
  };

  const styles = typeStyles[type];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.3 }}
      className={cn(
        "alert-card flex items-center gap-4",
        styles.border,
        styles.bg
      )}
    >
      {styles.icon}
      <div className="flex-1">
        <h4 className="font-bold text-foreground text-xl">{title}</h4>
        <p className="text-lg text-muted-foreground">{description}</p>
      </div>
      {value && (
        <span className="text-3xl font-bold text-foreground">{value}</span>
      )}
    </motion.div>
  );
};
