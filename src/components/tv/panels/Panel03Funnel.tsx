import { PanelHeader } from "@/components/tv/PanelHeader";
import { FunnelStage } from "@/components/tv/FunnelStage";
import { Filter, Clock, AlertTriangle } from "lucide-react";
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
        icon={<Filter className="w-6 h-6" />}
      />

      {/* Main content - horizontal layout */}
      <div className="flex-1 flex gap-8">
        {/* Left - Funnel visualization */}
        <div className="flex-1 flex flex-col justify-center space-y-3">
          {funnelStages.map((stage, i) => (
            <FunnelStage 
              key={stage.label} 
              {...stage} 
              delay={0.1 + i * 0.1} 
            />
          ))}
        </div>

        {/* Right - Stats */}
        <div className="w-96 flex flex-col justify-center gap-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="metric-card"
          >
            <div className="flex items-center gap-3 mb-3">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground uppercase">Tempo Médio</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold font-display text-foreground">3.2</span>
              <span className="text-xl text-muted-foreground">dias</span>
            </div>
            <p className="text-muted-foreground mt-1">Lead até Proposta</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="metric-card bg-destructive/10 border-destructive/30"
          >
            <div className="flex items-center gap-3 mb-3">
              <AlertTriangle className="w-5 h-5 text-destructive" />
              <span className="text-sm text-muted-foreground uppercase">Gargalo do Dia</span>
            </div>
            <p className="text-xl font-bold text-destructive">Qualificação → Proposta</p>
            <div className="mt-3 flex items-center gap-4">
              <div>
                <span className="text-2xl font-bold text-destructive">45%</span>
                <span className="text-muted-foreground ml-2">conversão</span>
              </div>
              <div className="h-8 w-px bg-border"></div>
              <div>
                <span className="text-muted-foreground">Meta:</span>
                <span className="text-foreground font-bold ml-2">60%</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};