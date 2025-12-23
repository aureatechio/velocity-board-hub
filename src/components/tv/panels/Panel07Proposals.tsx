import { PanelHeader } from "@/components/tv/PanelHeader";
import { FileText, TrendingUp, Clock, XCircle, CheckCircle } from "lucide-react";
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

      <div className="flex-1 grid grid-cols-3 gap-4">
        {/* Coluna 1 - Contadores */}
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="metric-card flex-1 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30 flex flex-col justify-center items-center text-center"
          >
            <span className="text-lg text-muted-foreground uppercase mb-2">Propostas Hoje</span>
            <span className="text-8xl font-bold font-display text-primary">45</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="metric-card flex-1 flex flex-col justify-center items-center text-center"
          >
            <span className="text-lg text-muted-foreground uppercase mb-2">Propostas Semana</span>
            <span className="text-8xl font-bold font-display text-foreground">187</span>
          </motion.div>
        </div>

        {/* Coluna 2 - Taxa de aceitação e tempo */}
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="metric-card flex-1 bg-gradient-to-br from-success/20 to-success/5 border-success/30 flex flex-col justify-center items-center text-center"
          >
            <CheckCircle className="w-12 h-12 text-success mb-4" />
            <span className="text-xl text-muted-foreground uppercase">Taxa de Aceitação</span>
            <span className="text-9xl font-bold font-display text-success">42%</span>
            <div className="flex items-center gap-2 mt-2 text-success text-xl">
              <TrendingUp className="w-6 h-6" />
              <span>+5% vs semana passada</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="metric-card flex-1 flex flex-col justify-center items-center text-center"
          >
            <Clock className="w-10 h-10 text-muted-foreground mb-3" />
            <span className="text-xl text-muted-foreground uppercase">Tempo até Decisão</span>
            <span className="text-6xl font-bold font-display text-foreground">3.2</span>
            <span className="text-2xl text-muted-foreground">dias</span>
            <p className="text-muted-foreground mt-2">Meta: até 5 dias ✓</p>
          </motion.div>
        </div>

        {/* Coluna 3 - Motivos de perda */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="metric-card flex flex-col"
        >
          <div className="flex items-center gap-3 mb-6">
            <XCircle className="w-8 h-8 text-destructive" />
            <span className="text-xl font-bold text-foreground">Motivos de Perda</span>
          </div>
          <div className="flex-1 space-y-4">
            {lossReasons.map((item, i) => (
              <div key={item.reason} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-foreground text-lg font-medium">{item.reason}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-muted-foreground">{item.count}</span>
                    <span className="text-foreground font-bold text-xl">{item.percentage}%</span>
                  </div>
                </div>
                <div className="h-4 bg-secondary rounded-full overflow-hidden">
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