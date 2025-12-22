import { PanelHeader } from "@/components/tv/PanelHeader";
import { MetricCard } from "@/components/tv/MetricCard";
import { Zap, Clock, Users, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

export const Panel06SLA = () => {
  const fastestAgents = [
    { name: "Fernanda L.", time: "1:45" },
    { name: "Carlos S.", time: "2:12" },
    { name: "Ana M.", time: "2:38" },
  ];

  const slowestAgents = [
    { name: "Pedro A.", time: "8:45" },
    { name: "João P.", time: "7:23" },
    { name: "Maria C.", time: "6:12" },
  ];

  return (
    <div className="tv-panel">
      <PanelHeader 
        title="Velocidade de Atendimento"
        subtitle="Estamos respondendo rápido?"
        icon={<Zap className="w-6 h-6" />}
      />

      <div className="flex-1 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <MetricCard
            label="Tempo Médio 1ª Resposta"
            value="3:42"
            suffix="min"
            variant="primary"
            size="md"
            delay={0.1}
          />
          <MetricCard
            label="Respondidos em até 5min"
            value="78%"
            variant="success"
            size="md"
            delay={0.2}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="metric-card bg-warning/10 border-warning/30"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-warning" />
              <span className="text-lg font-bold text-foreground">Fila Atual</span>
            </div>
            <span className="text-5xl font-bold font-display text-warning">14</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">leads aguardando resposta</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="metric-card"
          >
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-4 h-4 text-success" />
              <span className="text-sm text-muted-foreground uppercase">Top 3 Mais Rápidos</span>
            </div>
            <div className="space-y-2">
              {fastestAgents.map((agent, i) => (
                <div key={agent.name} className="flex justify-between items-center">
                  <span className="text-foreground">{agent.name}</span>
                  <span className="text-success font-bold">{agent.time}</span>
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
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-4 h-4 text-destructive" />
              <span className="text-sm text-muted-foreground uppercase">Top 3 Mais Lentos</span>
            </div>
            <div className="space-y-2">
              {slowestAgents.map((agent, i) => (
                <div key={agent.name} className="flex justify-between items-center">
                  <span className="text-foreground">{agent.name}</span>
                  <span className="text-destructive font-bold">{agent.time}</span>
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
          <div className="flex items-center gap-2 mb-3">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground uppercase">Distribuição por Tempo</span>
          </div>
          <div className="flex gap-2 h-24">
            <div className="flex-1 flex flex-col justify-end">
              <div className="bg-success rounded-t h-[80%]"></div>
              <span className="text-xs text-center mt-1 text-muted-foreground">&lt;2min</span>
            </div>
            <div className="flex-1 flex flex-col justify-end">
              <div className="bg-success/70 rounded-t h-[60%]"></div>
              <span className="text-xs text-center mt-1 text-muted-foreground">2-5min</span>
            </div>
            <div className="flex-1 flex flex-col justify-end">
              <div className="bg-warning rounded-t h-[30%]"></div>
              <span className="text-xs text-center mt-1 text-muted-foreground">5-10min</span>
            </div>
            <div className="flex-1 flex flex-col justify-end">
              <div className="bg-destructive rounded-t h-[15%]"></div>
              <span className="text-xs text-center mt-1 text-muted-foreground">&gt;10min</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
