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
        icon={<Trophy className="w-4 h-4" />}
      />

      <div className="flex-1 grid grid-cols-4 gap-3 mt-3">
        <MetricCard
          label="Vendas Hoje"
          value="R$ 47.850"
          variant="success"
          size="md"
          trend="up"
          trendValue="+12% vs ontem"
          delay={0.1}
        />
        
        <MetricCard
          label="Nº de Vendas"
          value={23}
          variant="primary"
          size="md"
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

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-3 metric-card"
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold">Meta do Dia</span>
          </div>
          <span className="text-xs text-muted-foreground">R$ 60.000</span>
        </div>
        <ProgressBar value={47850} max={60000} variant="primary" size="md" />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-2 p-2 bg-warning/20 rounded-lg border border-warning/30 text-center"
        >
          <p className="text-warning font-bold text-xs">
            Faltam <span className="text-base">7 vendas</span> ou <span className="text-base">R$ 12.150</span> para bater!
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};
