import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  max: number;
  label?: string;
  showPercentage?: boolean;
  variant?: "primary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
}

export const ProgressBar = ({
  value,
  max,
  label,
  showPercentage = true,
  variant = "primary",
  size = "md",
}: ProgressBarProps) => {
  const percentage = Math.min((value / max) * 100, 100);
  
  const variantStyles = {
    primary: "bg-primary",
    success: "bg-success",
    warning: "bg-warning",
    danger: "bg-destructive",
  };

  const sizeStyles = {
    sm: "h-3",
    md: "h-6",
    lg: "h-8",
  };

  return (
    <div className="w-full">
      {(label || showPercentage) && (
        <div className="flex justify-between items-center mb-3">
          {label && <span className="text-muted-foreground text-lg">{label}</span>}
          {showPercentage && (
            <span className="text-foreground font-bold text-2xl">{Math.round(percentage)}%</span>
          )}
        </div>
      )}
      <div className={cn("bg-secondary rounded-full overflow-hidden", sizeStyles[size])}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={cn("h-full rounded-full", variantStyles[variant])}
        />
      </div>
    </div>
  );
};
