import { PanelHeader } from "@/components/tv/PanelHeader";
import { FunnelStage } from "@/components/tv/FunnelStage";
import { Filter, Clock, AlertTriangle, ArrowDown } from "lucide-react";
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

      {/* Grid que preenche toda a tela */}
      <div className="flex-1 grid grid-cols-2 gap-6">
        {/* Coluna 1 - Funil visual */}
        <div className="flex flex-col justify-center gap-2">
          {funnelStages.map((stage, i) => (
            <FunnelStage 
              key={stage.label} 
              {...stage} 
              delay={0.1 + i * 0.1} 
            />
          ))}
        </div>

        {/* Coluna 2 - Stats */}
        <div className="flex flex-col gap-4">
          {/* Tempo médio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="metric-card flex-1 flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-8 h-8 text-primary" />
              <span className="text-xl text-muted-foreground uppercase">Tempo Médio</span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-8xl font-bold font-display text-foreground">3.2</span>
              <span className="text-3xl text-muted-foreground">dias</span>
            </div>
            <p className="text-muted-foreground text-xl mt-2">Lead até Proposta</p>
          </motion.div>

          {/* Gargalo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="metric-card flex-1 bg-destructive/10 border-destructive/30 flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-8 h-8 text-destructive" />
              <span className="text-xl text-muted-foreground uppercase">Gargalo do Dia</span>
            </div>
            <p className="text-3xl font-bold text-destructive">Qualificação → Proposta</p>
            <div className="mt-6 flex items-center gap-8">
              <div>
                <span className="text-6xl font-bold text-destructive">45%</span>
                <p className="text-muted-foreground text-lg">conversão atual</p>
              </div>
              <div className="h-16 w-px bg-border"></div>
              <div>
                <span className="text-4xl font-bold text-foreground">60%</span>
                <p className="text-muted-foreground text-lg">meta</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};