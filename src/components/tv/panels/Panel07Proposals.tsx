import { PanelHeader } from "@/components/tv/PanelHeader";
import { MetricCard } from "@/components/tv/MetricCard";
import { FileText, TrendingUp, Clock, XCircle } from "lucide-react";
import { motion } from "framer-motion";

export const Panel07Proposals = () => {
  const lossReasons = [
    { reason: "Preço alto", count: 12, percentage: 35 },
    { reason: "Concorrência", count: 8, percentage: 24 },
    { reason: "Sem resposta", count: 7, percentage: 21 },
  ];

  return (
    <div className="tv-panel">
      <PanelHeader 
        title="Qualidade das Propostas"
        subtitle="Estamos mandando proposta que fecha?"
        icon={<FileText className="w-4 h-4" />}
      />

      <div className="flex-1 grid grid-cols-4 gap-3 mt-3">
        {/* Proposals counts */}
        <div className="space-y-2">
          <MetricCard
            label="Propostas Hoje"
            value={45}
            variant="primary"
            size="md"
            delay={0.1}
          />
          <MetricCard
            label="Propostas Semana"
            value={187}
            variant="default"
            size="md"
            delay={0.2}
          />
        </div>

        {/* Acceptance Rate */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="metric-card bg-gradient-to-br from-success/20 to-success/5 border-success/30 flex flex-col justify-center"
        >
          <div className="flex items-center gap-1 mb-1">
            <TrendingUp className="w-3 h-3 text-success" />
            <span className="text-xs text-muted-foreground uppercase">Taxa Aceitação</span>
          </div>
          <span className="text-2xl font-bold font-display text-success">42%</span>
          <span className="text-success text-xs">+5% vs semana passada</span>
        </motion.div>

        {/* Decision Time */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="metric-card flex flex-col justify-center"
        >
          <div className="flex items-center gap-1 mb-1">
            <Clock className="w-3 h-3 text-muted-foreground" />
            <span className="text-xs text-muted-foreground uppercase">Tempo Decisão</span>
          </div>
          <span className="text-2xl font-bold font-display text-foreground">3.2d</span>
          <p className="text-xs text-muted-foreground">Meta: até 5 dias</p>
        </motion.div>

        {/* Loss Reasons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="metric-card"
        >
          <div className="flex items-center gap-1 mb-2">
            <XCircle className="w-3 h-3 text-destructive" />
            <span className="text-xs text-muted-foreground uppercase">Motivos Perda</span>
          </div>
          <div className="space-y-1">
            {lossReasons.map((item, i) => (
              <div key={item.reason}>
                <div className="flex justify-between text-xs mb-0.5">
                  <span className="text-foreground">{item.reason}</span>
                  <span className="text-muted-foreground">{item.percentage}%</span>
                </div>
                <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.percentage}%` }}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                    className="h-full bg-destructive/70 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
