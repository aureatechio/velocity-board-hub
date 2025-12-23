import { PanelHeader } from "@/components/tv/PanelHeader";
import { MetricCard } from "@/components/tv/MetricCard";
import { ProgressBar } from "@/components/tv/ProgressBar";
import { Trophy, Target, TrendingUp, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

export const Panel01Scoreboard = () => {
  return (
    <div className="tv-panel">
      <PanelHeader 
        title="Placar do Dia"
        subtitle="Como está HOJE?"
        icon={<Trophy className="w-6 h-6" />}
      />

      {/* Grid que preenche toda a tela */}
      <div className="flex-1 grid grid-cols-3 grid-rows-2 gap-4">
        {/* Vendas Hoje - Grande destaque */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="metric-card bg-gradient-to-br from-success/20 to-success/5 border-success/30 flex flex-col justify-center"
        >
          <div className="flex items-center gap-3 mb-2">
            <DollarSign className="w-6 h-6 text-success" />
            <span className="text-lg text-muted-foreground uppercase tracking-wider">Vendas Hoje</span>
          </div>
          <span className="text-6xl font-bold font-display text-success">R$ 47.850</span>
          <div className="flex items-center gap-2 mt-3 text-success text-xl">
            <TrendingUp className="w-5 h-5" />
            <span>+12% vs ontem</span>
          </div>
        </motion.div>

        {/* Nº de Vendas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="metric-card bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30 flex flex-col justify-center items-center text-center"
        >
          <span className="text-lg text-muted-foreground uppercase tracking-wider mb-2">Nº de Vendas</span>
          <span className="text-8xl font-bold font-display text-primary">23</span>
          <span className="text-muted-foreground text-xl mt-2">vendas fechadas</span>
        </motion.div>

        {/* Meta do Dia - Ocupa a coluna da direita inteira */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="metric-card row-span-2 flex flex-col"
        >
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-8 h-8 text-primary" />
            <div>
              <span className="text-xl font-bold text-foreground">Meta do Dia</span>
              <p className="text-muted-foreground">R$ 60.000</p>
            </div>
          </div>
          
          <div className="flex-1 flex flex-col justify-center">
            <div className="text-center mb-8">
              <span className="text-9xl font-bold font-display text-primary">80%</span>
            </div>
            
            <ProgressBar value={47850} max={60000} variant="primary" size="lg" showPercentage={false} />
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 p-6 bg-warning/20 rounded-xl border border-warning/30 text-center"
            >
              <p className="text-warning font-bold text-xl">
                Faltam <span className="text-4xl">7 vendas</span>
              </p>
              <p className="text-warning font-bold text-xl mt-2">
                ou <span className="text-4xl">R$ 12.150</span>
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Propostas Enviadas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="metric-card flex flex-col justify-center items-center text-center"
        >
          <span className="text-lg text-muted-foreground uppercase tracking-wider mb-2">Propostas Enviadas</span>
          <span className="text-7xl font-bold font-display text-foreground">45</span>
          <div className="flex items-center gap-2 mt-3 text-success text-lg">
            <TrendingUp className="w-5 h-5" />
            <span>+8 hoje</span>
          </div>
        </motion.div>

        {/* Leads Novos */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="metric-card flex flex-col justify-center items-center text-center"
        >
          <span className="text-lg text-muted-foreground uppercase tracking-wider mb-2">Leads Novos</span>
          <span className="text-7xl font-bold font-display text-foreground">67</span>
          <div className="flex items-center gap-2 mt-3 text-success text-lg">
            <TrendingUp className="w-5 h-5" />
            <span>12 de Ads</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};