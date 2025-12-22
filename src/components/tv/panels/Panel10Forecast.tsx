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
        icon={<TrendingUp className="w-5 h-5" />}
      />

      <div className="flex-1 space-y-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="metric-card"
        >
          <div className="flex items-center gap-2 mb-3">
            <Target className="w-5 h-5 text-primary" />
            <span className="text-base font-bold text-foreground">Meta do Mês</span>
            <span className="ml-auto text-sm text-muted-foreground">R$ 500.000</span>
          </div>
          <ProgressBar value={287500} max={500000} variant="primary" size="lg" />
          <div className="flex justify-between mt-2 text-sm">
            <span className="text-muted-foreground">Realizado</span>
            <span className="text-primary font-bold text-xl">R$ 287.500</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="metric-card"
        >
          <span className="text-sm text-muted-foreground uppercase mb-3 block">Projeção de Fechamento</span>
          <div className="grid grid-cols-3 gap-2">
            <ScenarioCard type="conservative" value="R$ 420k" delay={0.3} />
            <ScenarioCard type="realistic" value="R$ 485k" delay={0.4} />
            <ScenarioCard type="optimistic" value="R$ 545k" delay={0.5} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="metric-card bg-gradient-to-br from-warning/20 to-warning/5 border-warning/30"
        >
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="w-5 h-5 text-warning" />
            <span className="text-base font-bold text-foreground">O Que Falta</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div>
              <span className="text-2xl font-bold font-display text-warning">8</span>
              <p className="text-xs text-muted-foreground">dias úteis</p>
            </div>
            <div>
              <span className="text-2xl font-bold font-display text-foreground">102</span>
              <p className="text-xs text-muted-foreground">vendas</p>
            </div>
            <div>
              <span className="text-xl font-bold font-display text-foreground">R$ 212k</span>
              <p className="text-xs text-muted-foreground">receita</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="p-3 rounded-lg border border-primary/30 bg-primary/10 text-center"
        >
          <p className="text-primary font-bold text-sm">
            📈 Mantendo ritmo atual: <span className="text-xl">97%</span> da meta
          </p>
        </motion.div>
      </div>
    </div>
  );
};
