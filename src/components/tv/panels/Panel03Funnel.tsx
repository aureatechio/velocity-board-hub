import { PanelHeader } from "@/components/tv/PanelHeader";
import { FunnelStage } from "@/components/tv/FunnelStage";
import { Filter, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const Panel03Funnel = () => {
  const funnelStages = [
    { label: "Leads", value: 245, percentage: 100 },
    { label: "Qualificação", value: 198, percentage: 81 },
    { label: "Proposta", value: 89, percentage: 45, isBottleneck: true },
    { label: "Negociação", value: 52, percentage: 58 },
    { label: "Venda", value: 23, percentage: 44 },
  ];

  return (
    <div className="tv-panel">
      <PanelHeader 
        title="Funil do Dia"
        subtitle="Onde estamos perdendo?"
        icon={<Filter className="w-4 h-4" />}
      />

      <div className="flex-1 grid grid-cols-2 gap-4 mt-3">
        {/* Funnel */}
        <div className="flex flex-col justify-center space-y-1">
          {funnelStages.map((stage, i) => (
            <div key={stage.label} className="relative">
              <FunnelStage {...stage} delay={0.1 + i * 0.08} />
              {i < funnelStages.length - 1 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 z-10"
                >
                  <ArrowRight className="w-3 h-3 text-muted-foreground rotate-90" />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="flex flex-col justify-center gap-2">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="metric-card"
          >
            <div className="flex items-center gap-1 mb-1">
              <Clock className="w-3 h-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Lead → Proposta</span>
            </div>
            <span className="text-xl font-bold font-display text-foreground">3.2 dias</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="metric-card bg-destructive/10 border-destructive/30"
          >
            <span className="text-xs text-muted-foreground block mb-1">Gargalo do Dia</span>
            <span className="text-sm font-bold text-destructive">Qualif. → Proposta</span>
            <p className="text-xs text-muted-foreground">45% (meta: 60%)</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
