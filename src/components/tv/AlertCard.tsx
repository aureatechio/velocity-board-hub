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
      icon: <Clock className="w-5 h-5 text-warning shrink-0" />,
      bg: "bg-warning/10",
    },
    danger: {
      border: "border-l-destructive",
      icon: <AlertTriangle className="w-5 h-5 text-destructive shrink-0" />,
      bg: "bg-destructive/10",
    },
    urgent: {
      border: "border-l-destructive",
      icon: <XCircle className="w-5 h-5 text-destructive animate-pulse shrink-0" />,
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
        "alert-card flex items-center gap-3",
        styles.border,
        styles.bg
      )}
    >
      {styles.icon}
      <div className="flex-1 min-w-0">
        <h4 className="font-bold text-foreground text-sm truncate">{title}</h4>
        <p className="text-xs text-muted-foreground truncate">{description}</p>
      </div>
      {value && (
        <span className="text-xl font-bold text-foreground shrink-0">{value}</span>
      )}
    </motion.div>
  );
};
