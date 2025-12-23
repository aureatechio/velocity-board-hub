import { PanelHeader } from "@/components/tv/PanelHeader";
import { ProgressBar } from "@/components/tv/ProgressBar";
import { ScenarioCard } from "@/components/tv/ScenarioCard";
import { TrendingUp, Calendar, Target } from "lucide-react";
import { motion } from "framer-motion";

export const Panel10Forecast = () => {
  return (
    <div className="tv-panel">
      <PanelHeader 
        title="Previsão: Semana/Mês"
        subtitle="Vamos bater a meta?"
        icon={<TrendingUp className="w-4 h-4" />}
      />

      <div className="flex-1 grid grid-cols-3 gap-3 mt-3">
        {/* Goal Progress */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="metric-card"
        >
          <div className="flex items-center gap-1 mb-2">
            <Target className="w-3 h-3 text-primary" />
            <span className="text-xs font-bold text-foreground">Meta Mês</span>
            <span className="ml-auto text-xs text-muted-foreground">R$ 500k</span>
          </div>
          <ProgressBar value={287500} max={500000} variant="primary" size="md" />
          <div className="flex justify-between mt-2 text-xs">
            <span className="text-muted-foreground">Realizado</span>
            <span className="text-primary font-bold text-base">R$ 287.5k</span>
          </div>
        </motion.div>

        {/* Scenarios */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="metric-card"
        >
          <span className="text-xs text-muted-foreground uppercase mb-2 block">Projeção</span>
          <div className="grid grid-cols-3 gap-1">
            <ScenarioCard type="conservative" value="R$ 420k" delay={0.3} />
            <ScenarioCard type="realistic" value="R$ 485k" delay={0.4} />
            <ScenarioCard type="optimistic" value="R$ 545k" delay={0.5} />
          </div>
        </motion.div>

        {/* What's Left */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="metric-card bg-gradient-to-br from-warning/20 to-warning/5 border-warning/30"
        >
          <div className="flex items-center gap-1 mb-2">
            <Calendar className="w-3 h-3 text-warning" />
            <span className="text-xs font-bold text-foreground">O Que Falta</span>
          </div>
          <div className="grid grid-cols-3 gap-1 text-center">
            <div>
              <span className="text-lg font-bold font-display text-warning">8</span>
              <p className="text-xs text-muted-foreground">dias</p>
            </div>
            <div>
              <span className="text-lg font-bold font-display text-foreground">102</span>
              <p className="text-xs text-muted-foreground">vendas</p>
            </div>
            <div>
              <span className="text-sm font-bold font-display text-foreground">R$ 212k</span>
              <p className="text-xs text-muted-foreground">receita</p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-2 p-1.5 rounded border border-primary/30 bg-primary/10 text-center"
          >
            <p className="text-primary font-bold text-xs">
              📈 Ritmo atual: <span className="text-sm">97%</span> da meta
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
