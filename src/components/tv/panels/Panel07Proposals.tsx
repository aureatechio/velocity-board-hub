import { PanelHeader } from "@/components/tv/PanelHeader";
import { MetricCard } from "@/components/tv/MetricCard";
import { FileText, TrendingUp, Clock, XCircle } from "lucide-react";
import { motion } from "framer-motion";

export const Panel07Proposals = () => {
  const lossReasons = [
    { reason: "Preço alto", count: 12, percentage: 35 },
    { reason: "Concorrência", count: 8, percentage: 24 },
    { reason: "Sem resposta", count: 7, percentage: 21 },
    { reason: "Timing errado", count: 5, percentage: 15 },
  ];

  return (
    <div className="tv-panel">
      <PanelHeader 
        title="Qualidade das Propostas"
        subtitle="Estamos mandando proposta que fecha?"
        icon={<FileText className="w-6 h-6" />}
      />

      {/* Main content - horizontal layout */}
      <div className="flex-1 flex gap-6">
        {/* Left - Proposal counts */}
        <div className="flex-1 grid grid-cols-2 gap-4 content-start">
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

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="metric-card bg-gradient-to-br from-success/20 to-success/5 border-success/30"
          >
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="w-6 h-6 text-success" />
              <span className="text-base text-muted-foreground uppercase">Taxa de Aceitação (Semana)</span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-5xl font-bold font-display text-success">42%</span>
              <span className="text-success text-lg">+5% vs semana passada</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="metric-card"
          >
            <div className="flex items-center gap-3 mb-3">
              <Clock className="w-5 h-5 text-muted-foreground" />
              <span className="text-base text-muted-foreground uppercase">Tempo até Decisão</span>
            </div>
            <span className="text-4xl font-bold font-display text-foreground">3.2 dias</span>
            <p className="text-muted-foreground mt-2">Meta: até 5 dias</p>
          </motion.div>
        </div>

        {/* Right - Loss reasons */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="w-96 metric-card"
        >
          <div className="flex items-center gap-3 mb-6">
            <XCircle className="w-6 h-6 text-destructive" />
            <span className="text-lg font-bold text-foreground">Motivos de Perda</span>
          </div>
          <div className="space-y-4">
            {lossReasons.map((item, i) => (
              <div key={item.reason}>
                <div className="flex justify-between mb-2">
                  <span className="text-foreground font-medium">{item.reason}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-muted-foreground">{item.count} propostas</span>
                    <span className="text-foreground font-bold">{item.percentage}%</span>
                  </div>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
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