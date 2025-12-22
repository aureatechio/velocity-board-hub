import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  label: string;
  value: string | number;
  prefix?: string;
  suffix?: string;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  variant?: "default" | "primary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  delay?: number;
}

export const MetricCard = ({
  label,
  value,
  prefix,
  suffix,
  trend,
  trendValue,
  variant = "default",
  size = "md",
  delay = 0,
}: MetricCardProps) => {
  const variantStyles = {
    default: "text-foreground",
    primary: "text-primary",
    success: "text-success",
    warning: "text-warning",
    danger: "text-destructive",
  };

  const sizeStyles = {
    sm: "text-3xl md:text-4xl",
    md: "text-5xl md:text-6xl",
    lg: "text-6xl md:text-8xl",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4 }}
      className="metric-card"
    >
      <p className="metric-label mb-2">{label}</p>
      <div className="flex items-baseline gap-2">
        {prefix && <span className="text-2xl text-muted-foreground">{prefix}</span>}
        <span className={cn("font-bold font-display tracking-tight", variantStyles[variant], sizeStyles[size])}>
          {value}
        </span>
        {suffix && <span className="text-2xl text-muted-foreground">{suffix}</span>}
      </div>
      {trend && trendValue && (
        <div className={cn(
          "mt-2 flex items-center gap-1 text-sm",
          trend === "up" && "text-success",
          trend === "down" && "text-destructive",
          trend === "neutral" && "text-muted-foreground"
        )}>
          {trend === "up" && "↑"}
          {trend === "down" && "↓"}
          {trend === "neutral" && "→"}
          <span>{trendValue}</span>
        </div>
      )}
    </motion.div>
  );
};
