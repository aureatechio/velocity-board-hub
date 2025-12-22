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
        icon={<Filter className="w-5 h-5" />}
      />

      <div className="flex-1 flex flex-col justify-center">
        <div className="relative space-y-2">
          {funnelStages.map((stage, i) => (
            <div key={stage.label} className="relative">
              <FunnelStage {...stage} delay={0.1 + i * 0.1} />
              {i < funnelStages.length - 1 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 z-10"
                >
                  <ArrowRight className="w-4 h-4 text-muted-foreground rotate-90" />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-4 grid grid-cols-2 gap-3"
        >
          <div className="metric-card">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Lead → Proposta</span>
            </div>
            <span className="text-2xl font-bold font-display text-foreground">3.2 dias</span>
          </div>

          <div className="metric-card bg-destructive/10 border-destructive/30">
            <span className="text-xs text-muted-foreground block mb-1">Gargalo do Dia</span>
            <span className="text-base font-bold text-destructive">Qualif. → Proposta</span>
            <p className="text-xs text-muted-foreground">45% (meta: 60%)</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
