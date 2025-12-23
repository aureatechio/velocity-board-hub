import { PanelHeader } from "@/components/tv/PanelHeader";
import { MetricCard } from "@/components/tv/MetricCard";
import { Gauge, Clock, TrendingDown, TrendingUp } from "lucide-react";
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

      {/* Main content - horizontal layout */}
      <div className="flex-1 flex gap-6">
        {/* Left - Time metrics */}
        <div className="flex-1 grid grid-cols-2 gap-4 content-start">
          <MetricCard
            label="Tempo Lead → Proposta"
            value="4.2"
            suffix="dias"
            variant="primary"
            size="lg"
            delay={0.1}
          />
          <MetricCard
            label="Tempo Proposta → Fechamento"
            value="6.8"
            suffix="dias"
            variant="success"
            size="lg"
            delay={0.2}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="metric-card col-span-2"
          >
            <div className="flex items-center gap-3 mb-3">
              <Clock className="w-6 h-6 text-primary" />
              <span className="text-lg font-bold text-foreground">Ciclo Médio de Venda</span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-5xl font-bold font-display text-primary">11</span>
              <span className="text-2xl text-muted-foreground">dias</span>
            </div>
            <p className="text-muted-foreground mt-2">Do lead até o fechamento</p>
          </motion.div>
        </div>

        {/* Center - Time per stage chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-64 metric-card flex flex-col"
        >
          <span className="text-sm text-muted-foreground uppercase mb-4">Tempo por Etapa</span>
          <div className="flex gap-3 flex-1 items-end pb-6">
            <div className="flex-1 flex flex-col items-center">
              <div className="w-full bg-primary/80 rounded-t-lg" style={{ height: '40%' }}></div>
              <span className="text-sm text-muted-foreground mt-2">Qualif.</span>
              <span className="text-sm font-bold">2d</span>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div className="w-full bg-primary rounded-t-lg" style={{ height: '60%' }}></div>
              <span className="text-sm text-muted-foreground mt-2">Proposta</span>
              <span className="text-sm font-bold">3d</span>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div className="w-full bg-success/80 rounded-t-lg" style={{ height: '80%' }}></div>
              <span className="text-sm text-muted-foreground mt-2">Negoc.</span>
              <span className="text-sm font-bold">4d</span>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div className="w-full bg-success rounded-t-lg" style={{ height: '50%' }}></div>
              <span className="text-sm text-muted-foreground mt-2">Fech.</span>
              <span className="text-sm font-bold">2d</span>
            </div>
          </div>
        </motion.div>

        {/* Right - Rankings */}
        <div className="w-72 flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="metric-card flex-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-5 h-5 text-success" />
              <span className="text-sm text-muted-foreground uppercase">Mais Rápidos</span>
            </div>
            <div className="space-y-3">
              {fastestPipeline.map((agent, i) => (
                <div key={agent.name} className="flex justify-between items-center">
                  <span className="text-foreground">{agent.name}</span>
                  <span className="text-success font-bold text-lg">{agent.days}d</span>
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
              <TrendingDown className="w-5 h-5 text-destructive" />
              <span className="text-sm text-muted-foreground uppercase">Mais Lentos</span>
            </div>
            <div className="space-y-3">
              {slowestPipeline.map((agent, i) => (
                <div key={agent.name} className="flex justify-between items-center">
                  <span className="text-foreground">{agent.name}</span>
                  <span className="text-destructive font-bold text-lg">{agent.days}d</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};