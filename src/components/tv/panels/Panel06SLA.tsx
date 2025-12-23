import { PanelHeader } from "@/components/tv/PanelHeader";
import { Gauge, Clock, TrendingDown, TrendingUp, Timer } from "lucide-react";
import { motion } from "framer-motion";

export const Panel06SLA = () => {
  const fastestPipeline = [
    { name: "Fernanda Lima", days: "2.3" },
    { name: "Carlos Santos", days: "2.8" },
    { name: "Ana Maria", days: "3.1" },
  ];

  const slowestPipeline = [
    { name: "Pedro Alves", days: "8.5" },
    { name: "João Pedro", days: "7.2" },
    { name: "Maria Costa", days: "6.8" },
  ];

  return (
    <div className="tv-panel">
      <PanelHeader 
        title="Velocidade do Pipeline"
        subtitle="Quão rápido estamos fechando?"
        icon={<Gauge className="w-6 h-6" />}
      />

      <div className="flex-1 grid grid-cols-3 gap-4">
        {/* Coluna 1 - Tempos */}
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="metric-card flex-1 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30 flex flex-col justify-center items-center text-center"
          >
            <span className="text-lg text-muted-foreground uppercase mb-2">Lead → Proposta</span>
            <span className="text-7xl font-bold font-display text-primary">4.2</span>
            <span className="text-2xl text-muted-foreground">dias</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="metric-card flex-1 bg-gradient-to-br from-success/20 to-success/5 border-success/30 flex flex-col justify-center items-center text-center"
          >
            <span className="text-lg text-muted-foreground uppercase mb-2">Proposta → Fechamento</span>
            <span className="text-7xl font-bold font-display text-success">6.8</span>
            <span className="text-2xl text-muted-foreground">dias</span>
          </motion.div>
        </div>

        {/* Coluna 2 - Ciclo médio e gráfico */}
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="metric-card flex-1 flex flex-col justify-center items-center text-center"
          >
            <Timer className="w-12 h-12 text-primary mb-4" />
            <span className="text-xl text-muted-foreground uppercase">Ciclo Médio de Venda</span>
            <span className="text-9xl font-bold font-display text-primary">11</span>
            <span className="text-2xl text-muted-foreground">dias do lead ao fechamento</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="metric-card"
          >
            <span className="text-lg text-muted-foreground uppercase mb-4 block">Tempo por Etapa</span>
            <div className="flex gap-4 h-32 items-end">
              <div className="flex-1 flex flex-col items-center">
                <div className="w-full bg-primary/80 rounded-t-lg" style={{ height: '40%' }}></div>
                <span className="text-base text-muted-foreground mt-2">Qualif.</span>
                <span className="text-lg font-bold">2d</span>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div className="w-full bg-primary rounded-t-lg" style={{ height: '60%' }}></div>
                <span className="text-base text-muted-foreground mt-2">Proposta</span>
                <span className="text-lg font-bold">3d</span>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div className="w-full bg-success/80 rounded-t-lg" style={{ height: '80%' }}></div>
                <span className="text-base text-muted-foreground mt-2">Negoc.</span>
                <span className="text-lg font-bold">4d</span>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div className="w-full bg-success rounded-t-lg" style={{ height: '50%' }}></div>
                <span className="text-base text-muted-foreground mt-2">Fech.</span>
                <span className="text-lg font-bold">2d</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Coluna 3 - Rankings */}
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="metric-card flex-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-success" />
              <span className="text-lg text-muted-foreground uppercase">Mais Rápidos</span>
            </div>
            <div className="space-y-4">
              {fastestPipeline.map((agent, i) => (
                <div key={agent.name} className="flex justify-between items-center p-3 bg-success/10 rounded-xl">
                  <span className="text-foreground text-lg">{agent.name}</span>
                  <span className="text-success font-bold text-2xl">{agent.days}d</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="metric-card flex-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <TrendingDown className="w-6 h-6 text-destructive" />
              <span className="text-lg text-muted-foreground uppercase">Mais Lentos</span>
            </div>
            <div className="space-y-4">
              {slowestPipeline.map((agent, i) => (
                <div key={agent.name} className="flex justify-between items-center p-3 bg-destructive/10 rounded-xl">
                  <span className="text-foreground text-lg">{agent.name}</span>
                  <span className="text-destructive font-bold text-2xl">{agent.days}d</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};