import { PanelHeader } from "@/components/tv/PanelHeader";
import { MetricCard } from "@/components/tv/MetricCard";
import { Gauge, Clock, TrendingDown, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export const Panel06SLA = () => {
  const fastestPipeline = [
    { name: "Fernanda L.", days: "2.3" },
    { name: "Carlos S.", days: "2.8" },
    { name: "Ana M.", days: "3.1" },
  ];

  const slowestPipeline = [
    { name: "Pedro A.", days: "8.5" },
    { name: "João P.", days: "7.2" },
    { name: "Maria C.", days: "6.8" },
  ];

  return (
    <div className="tv-panel">
      <PanelHeader 
        title="Velocidade do Pipeline"
        subtitle="Quão rápido estamos fechando?"
        icon={<Gauge className="w-10 h-10" />}
      />

      <div className="flex-1 space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <MetricCard
            label="Tempo Médio Lead → Proposta"
            value="4.2"
            suffix="dias"
            variant="primary"
            size="md"
            delay={0.1}
          />
          <MetricCard
            label="Tempo Médio Proposta → Fechamento"
            value="6.8"
            suffix="dias"
            variant="success"
            size="md"
            delay={0.2}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="metric-card"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">Ciclo Médio de Venda</span>
            </div>
            <span className="text-7xl font-bold font-display text-primary">11</span>
          </div>
          <p className="text-xl text-muted-foreground">dias do lead até o fechamento</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="metric-card"
          >
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-success" />
              <span className="text-xl text-muted-foreground uppercase">Pipeline Mais Rápido</span>
            </div>
            <div className="space-y-4">
              {fastestPipeline.map((agent, i) => (
                <div key={agent.name} className="flex justify-between items-center">
                  <span className="text-xl text-foreground">{agent.name}</span>
                  <span className="text-2xl text-success font-bold">{agent.days}d</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="metric-card"
          >
            <div className="flex items-center gap-3 mb-4">
              <TrendingDown className="w-6 h-6 text-destructive" />
              <span className="text-xl text-muted-foreground uppercase">Pipeline Mais Lento</span>
            </div>
            <div className="space-y-4">
              {slowestPipeline.map((agent, i) => (
                <div key={agent.name} className="flex justify-between items-center">
                  <span className="text-xl text-foreground">{agent.name}</span>
                  <span className="text-2xl text-destructive font-bold">{agent.days}d</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="metric-card"
        >
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-6 h-6 text-muted-foreground" />
            <span className="text-xl text-muted-foreground uppercase">Tempo por Etapa</span>
          </div>
          <div className="flex gap-3 h-32">
            <div className="flex-1 flex flex-col justify-end">
              <div className="bg-primary/80 rounded-t" style={{ height: '40%' }}></div>
              <span className="text-lg text-center mt-2 text-muted-foreground">Qualificação</span>
              <span className="text-xl text-center font-bold text-foreground">1.5d</span>
            </div>
            <div className="flex-1 flex flex-col justify-end">
              <div className="bg-primary rounded-t" style={{ height: '60%' }}></div>
              <span className="text-lg text-center mt-2 text-muted-foreground">Proposta</span>
              <span className="text-xl text-center font-bold text-foreground">2.7d</span>
            </div>
            <div className="flex-1 flex flex-col justify-end">
              <div className="bg-success/80 rounded-t" style={{ height: '80%' }}></div>
              <span className="text-lg text-center mt-2 text-muted-foreground">Negociação</span>
              <span className="text-xl text-center font-bold text-foreground">4.1d</span>
            </div>
            <div className="flex-1 flex flex-col justify-end">
              <div className="bg-success rounded-t" style={{ height: '50%' }}></div>
              <span className="text-lg text-center mt-2 text-muted-foreground">Fechamento</span>
              <span className="text-xl text-center font-bold text-foreground">2.7d</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
