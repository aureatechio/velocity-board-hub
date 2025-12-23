import { PanelHeader } from "@/components/tv/PanelHeader";
import { ProgressBar } from "@/components/tv/ProgressBar";
import { ScenarioCard } from "@/components/tv/ScenarioCard";
import { TrendingUp, Calendar, Target } from "lucide-react";
import { motion } from "framer-motion";

export const Panel10Forecast = () => {
  return (
    <div className="tv-panel">
      <PanelHeader title="Previsão: Semana/Mês" subtitle="Vamos bater a meta?" icon={<TrendingUp className="w-6 h-6" />} />
      <div className="flex-1 flex gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex-1 metric-card">
          <div className="flex items-center gap-3 mb-4"><Target className="w-6 h-6 text-primary" /><span className="text-lg font-bold text-foreground">Meta do Mês</span><span className="ml-auto text-base text-muted-foreground">R$ 500.000</span></div>
          <ProgressBar value={287500} max={500000} variant="primary" size="lg" />
          <div className="flex justify-between mt-4"><span className="text-muted-foreground text-lg">Realizado</span><span className="text-primary font-bold text-3xl">R$ 287.500</span></div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="w-96 metric-card">
          <span className="text-base text-muted-foreground uppercase mb-4 block">Projeção de Fechamento</span>
          <div className="grid grid-cols-3 gap-3">
            <ScenarioCard type="conservative" value="R$ 420k" delay={0.3} />
            <ScenarioCard type="realistic" value="R$ 485k" delay={0.4} />
            <ScenarioCard type="optimistic" value="R$ 545k" delay={0.5} />
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="w-80 metric-card bg-gradient-to-br from-warning/20 to-warning/5 border-warning/30">
          <div className="flex items-center gap-3 mb-4"><Calendar className="w-6 h-6 text-warning" /><span className="text-lg font-bold text-foreground">O Que Falta</span></div>
          <div className="grid grid-cols-3 gap-4 text-center mb-4">
            <div><span className="text-3xl font-bold font-display text-warning">8</span><p className="text-muted-foreground">dias úteis</p></div>
            <div><span className="text-3xl font-bold font-display text-foreground">102</span><p className="text-muted-foreground">vendas</p></div>
            <div><span className="text-2xl font-bold font-display text-foreground">R$ 212k</span><p className="text-muted-foreground">receita</p></div>
          </div>
          <div className="p-3 rounded-lg border border-primary/30 bg-primary/10 text-center">
            <p className="text-primary font-bold text-lg">📈 Mantendo ritmo atual: <span className="text-2xl">97%</span> da meta</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};