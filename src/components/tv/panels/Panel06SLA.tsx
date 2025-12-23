import { PanelHeader } from "@/components/tv/PanelHeader";
import { MetricCard } from "@/components/tv/MetricCard";
import { Gauge, Clock, TrendingDown, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export const Panel06SLA = () => {
  const fastestPipeline = [
    { name: "Fernanda L.", days: "2.3" },
    { name: "Carlos S.", days: "2.8" },
  ];

  const slowestPipeline = [
    { name: "Pedro A.", days: "8.5" },
    { name: "João P.", days: "7.2" },
  ];

  return (
    <div className="tv-panel">
      <PanelHeader 
        title="Velocidade do Pipeline"
        subtitle="Quão rápido estamos fechando?"
        icon={<Gauge className="w-4 h-4" />}
      />

      <div className="flex-1 grid grid-cols-4 gap-3 mt-3">
        {/* Metrics */}
        <div className="space-y-2">
          <MetricCard
            label="Lead → Proposta"
            value="4.2"
            suffix="dias"
            variant="primary"
            size="sm"
            delay={0.1}
          />
          <MetricCard
            label="Proposta → Fech."
            value="6.8"
            suffix="dias"
            variant="success"
            size="sm"
            delay={0.2}
          />
        </div>

        {/* Cycle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="metric-card flex flex-col justify-center"
        >
          <div className="flex items-center gap-1 mb-1">
            <Clock className="w-3 h-3 text-primary" />
            <span className="text-xs font-bold text-foreground">Ciclo Médio</span>
          </div>
          <span className="text-2xl font-bold font-display text-primary">11d</span>
          <p className="text-xs text-muted-foreground">lead até fechamento</p>
        </motion.div>

        {/* Rankings */}
        <div className="grid grid-cols-2 gap-2">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="metric-card"
          >
            <div className="flex items-center gap-1 mb-1">
              <TrendingUp className="w-3 h-3 text-success" />
              <span className="text-xs text-muted-foreground">Rápidos</span>
            </div>
            <div className="space-y-1">
              {fastestPipeline.map((agent) => (
                <div key={agent.name} className="flex justify-between items-center text-xs">
                  <span className="text-foreground truncate">{agent.name}</span>
                  <span className="text-success font-bold">{agent.days}d</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="metric-card"
          >
            <div className="flex items-center gap-1 mb-1">
              <TrendingDown className="w-3 h-3 text-destructive" />
              <span className="text-xs text-muted-foreground">Lentos</span>
            </div>
            <div className="space-y-1">
              {slowestPipeline.map((agent) => (
                <div key={agent.name} className="flex justify-between items-center text-xs">
                  <span className="text-foreground truncate">{agent.name}</span>
                  <span className="text-destructive font-bold">{agent.days}d</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Time Chart */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="metric-card"
        >
          <span className="text-xs text-muted-foreground uppercase mb-1 block">Tempo/Etapa</span>
          <div className="flex gap-1 h-12">
            <div className="flex-1 flex flex-col justify-end">
              <div className="bg-primary/80 rounded-t" style={{ height: '40%' }}></div>
              <span className="text-xs text-center text-muted-foreground">Q</span>
            </div>
            <div className="flex-1 flex flex-col justify-end">
              <div className="bg-primary rounded-t" style={{ height: '60%' }}></div>
              <span className="text-xs text-center text-muted-foreground">P</span>
            </div>
            <div className="flex-1 flex flex-col justify-end">
              <div className="bg-success/80 rounded-t" style={{ height: '80%' }}></div>
              <span className="text-xs text-center text-muted-foreground">N</span>
            </div>
            <div className="flex-1 flex flex-col justify-end">
              <div className="bg-success rounded-t" style={{ height: '50%' }}></div>
              <span className="text-xs text-center text-muted-foreground">F</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
