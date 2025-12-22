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
    sm: "text-5xl md:text-6xl",
    md: "text-7xl md:text-8xl",
    lg: "text-8xl md:text-9xl",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4 }}
      className="metric-card"
    >
      <p className="metric-label mb-4">{label}</p>
      <div className="flex items-baseline gap-3">
        {prefix && <span className="text-3xl text-muted-foreground">{prefix}</span>}
        <span className={cn("font-bold font-display tracking-tight", variantStyles[variant], sizeStyles[size])}>
          {value}
        </span>
        {suffix && <span className="text-3xl text-muted-foreground">{suffix}</span>}
      </div>
      {trend && trendValue && (
        <div className={cn(
          "mt-4 flex items-center gap-2 text-xl",
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
