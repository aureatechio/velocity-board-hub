import { PanelHeader } from "@/components/tv/PanelHeader";
import { MetricCard } from "@/components/tv/MetricCard";
import { ProgressBar } from "@/components/tv/ProgressBar";
import { Trophy, Target } from "lucide-react";
import { motion } from "framer-motion";

export const Panel01Scoreboard = () => {
  return (
    <div className="tv-panel">
      <PanelHeader 
        title="Placar do Dia"
        subtitle="Como está HOJE?"
        icon={<Trophy className="w-6 h-6" />}
      />

      {/* Main content - horizontal layout for 16:9 */}
      <div className="flex-1 flex gap-6">
        {/* Left side - Main metrics */}
        <div className="flex-1 grid grid-cols-2 gap-4 content-start">
          <MetricCard
            label="Vendas Hoje"
            value="R$ 47.850"
            variant="success"
            size="lg"
            trend="up"
            trendValue="+12% vs ontem"
            delay={0.1}
          />
          
          <MetricCard
            label="Nº de Vendas"
            value={23}
            variant="primary"
            size="lg"
            delay={0.2}
          />
          
          <MetricCard
            label="Propostas Enviadas"
            value={45}
            variant="default"
            size="md"
            trend="up"
            trendValue="+8 hoje"
            delay={0.3}
          />
          
          <MetricCard
            label="Leads Novos"
            value={67}
            variant="default"
            size="md"
            trend="up"
            trendValue="12 de Ads"
            delay={0.4}
          />
        </div>

        {/* Right side - Goal progress */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="w-96 metric-card flex flex-col"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Target className="w-6 h-6 text-primary" />
              <span className="text-lg font-bold">Meta do Dia</span>
            </div>
            <span className="text-base text-muted-foreground">R$ 60.000</span>
          </div>
          
          <ProgressBar value={47850} max={60000} variant="primary" size="lg" />
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-6 p-4 bg-warning/20 rounded-xl border border-warning/30 text-center"
          >
            <p className="text-warning font-bold text-lg">
              Faltam <span className="text-2xl">7 vendas</span> ou <span className="text-2xl">R$ 12.150</span> para bater!
            </p>
          </motion.div>

          <div className="mt-auto pt-4 text-center">
            <span className="text-muted-foreground text-sm">Progresso atual</span>
            <p className="text-4xl font-bold font-display text-primary">80%</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};