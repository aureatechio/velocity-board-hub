import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SpeedMeterProps {
  level: "baixo" | "ok" | "alto";
  label?: string;
}

export const SpeedMeter = ({ level, label }: SpeedMeterProps) => {
  const levels = {
    baixo: { color: "bg-destructive", position: "left-[10%]", text: "BAIXO" },
    ok: { color: "bg-warning", position: "left-[50%]", text: "OK" },
    alto: { color: "bg-success", position: "left-[90%]", text: "ALTO" },
  };

  const current = levels[level];

  return (
    <div className="w-full">
      {label && <p className="text-muted-foreground text-sm mb-2">{label}</p>}
      <div className="relative h-6 rounded-full bg-gradient-to-r from-destructive via-warning to-success overflow-hidden">
        <motion.div
          initial={{ left: "50%" }}
          animate={{ left: current.position === "left-[10%]" ? "10%" : current.position === "left-[50%]" ? "50%" : "90%" }}
          transition={{ duration: 0.5, type: "spring" }}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 bg-foreground rounded-full border-2 border-background shadow-lg"
        />
      </div>
      <div className="flex justify-between mt-1 text-xs text-muted-foreground">
        <span>Baixo</span>
        <span className={cn(
          "font-bold",
          level === "baixo" && "text-destructive",
          level === "ok" && "text-warning",
          level === "alto" && "text-success"
        )}>
          {current.text}
        </span>
        <span>Alto</span>
      </div>
    </div>
  );
};
