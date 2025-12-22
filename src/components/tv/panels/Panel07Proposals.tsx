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
        icon={<FileText className="w-6 h-6" />}
      />

      <div className="flex-1 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <MetricCard
            label="Propostas Hoje"
            value={45}
            variant="primary"
            size="lg"
            delay={0.1}
          />
          <MetricCard
            label="Propostas Semana"
            value={187}
            variant="default"
            size="lg"
            delay={0.2}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="metric-card bg-gradient-to-br from-success/20 to-success/5 border-success/30"
        >
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-success" />
            <span className="text-sm text-muted-foreground uppercase">Taxa de Aceitação (Semana)</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-6xl font-bold font-display text-success">42%</span>
            <span className="text-success text-sm">+5% vs semana passada</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="metric-card"
        >
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground uppercase">Tempo Médio até Decisão</span>
          </div>
          <span className="text-4xl font-bold font-display text-foreground">3.2 dias</span>
          <p className="text-sm text-muted-foreground mt-1">Meta: até 5 dias</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="metric-card"
        >
          <div className="flex items-center gap-2 mb-4">
            <XCircle className="w-5 h-5 text-destructive" />
            <span className="text-sm text-muted-foreground uppercase">Motivos de Perda (Top 3)</span>
          </div>
          <div className="space-y-3">
            {lossReasons.map((item, i) => (
              <div key={item.reason} className="flex items-center gap-3">
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-foreground font-medium">{item.reason}</span>
                    <span className="text-muted-foreground">{item.count}</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.percentage}%` }}
                      transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                      className="h-full bg-destructive/70 rounded-full"
                    />
                  </div>
                </div>
                <span className="text-sm text-muted-foreground w-10 text-right">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
