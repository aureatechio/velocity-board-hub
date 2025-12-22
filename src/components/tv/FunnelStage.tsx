import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FunnelStageProps {
  label: string;
  value: number;
  percentage: number;
  isBottleneck?: boolean;
  delay?: number;
}

export const FunnelStage = ({
  label,
  value,
  percentage,
  isBottleneck = false,
  delay = 0,
}: FunnelStageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ delay, duration: 0.5 }}
      className={cn(
        "relative p-3 rounded-xl border transition-all",
        isBottleneck 
          ? "bg-destructive/20 border-destructive/50" 
          : "bg-card border-border/50"
      )}
    >
      {isBottleneck && (
        <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-destructive rounded-full text-xs font-bold text-destructive-foreground">
          GARGALO
        </div>
      )}
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-muted-foreground uppercase tracking-wider">{label}</span>
        <span className={cn(
          "text-sm font-bold",
          isBottleneck ? "text-destructive" : "text-success"
        )}>
          {percentage}%
        </span>
      </div>
      <span className="text-3xl font-bold font-display text-foreground">{value}</span>
    </motion.div>
  );
};
