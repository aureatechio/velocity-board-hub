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
        "relative p-6 rounded-2xl border transition-all",
        isBottleneck 
          ? "bg-destructive/20 border-destructive/50" 
          : "bg-card border-border/50"
      )}
    >
      {isBottleneck && (
        <div className="absolute -top-3 -right-3 px-4 py-1 bg-destructive rounded-full text-lg font-bold text-destructive-foreground">
          GARGALO
        </div>
      )}
      <div className="flex justify-between items-center mb-3">
        <span className="text-xl text-muted-foreground uppercase tracking-wider">{label}</span>
        <span className={cn(
          "text-xl font-bold",
          isBottleneck ? "text-destructive" : "text-success"
        )}>
          {percentage}%
        </span>
      </div>
      <span className="text-6xl font-bold font-display text-foreground">{value}</span>
    </motion.div>
  );
};
