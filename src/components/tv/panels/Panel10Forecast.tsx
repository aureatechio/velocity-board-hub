import { PanelHeader } from "@/components/tv/PanelHeader";
import { ProgressBar } from "@/components/tv/ProgressBar";
import { ScenarioCard } from "@/components/tv/ScenarioCard";
import { TrendingUp, Calendar, Target, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

export const Panel10Forecast = () => {
  return (
    <div className="tv-panel">
      <PanelHeader 
        title="Previsão: Semana/Mês"
        subtitle="Vamos bater a meta?"
        icon={<TrendingUp className="w-6 h-6" />}
      />

      <div className="flex-1 grid grid-cols-3 gap-4">
        {/* Coluna 1 - Meta e progresso */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="metric-card flex flex-col"
        >
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-8 h-8 text-primary" />
            <div>
              <span className="text-xl font-bold text-foreground">Meta do Mês</span>
              <p className="text-muted-foreground">R$ 500.000</p>
            </div>
          </div>
          
          <div className="flex-1 flex flex-col justify-center">
            <div className="text-center mb-6">
              <span className="text-8xl font-bold font-display text-primary">58%</span>
            </div>
            
            <ProgressBar value={287500} max={500000} variant="primary" size="lg" showPercentage={false} />
            
            <div className="flex justify-between mt-6 text-xl">
              <span className="text-muted-foreground">Realizado</span>
              <span className="text-primary font-bold">R$ 287.500</span>
            </div>
          </div>
        </motion.div>

        {/* Coluna 2 - Cenários */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="metric-card flex flex-col"
        >
          <span className="text-xl text-muted-foreground uppercase mb-6">Projeção de Fechamento</span>
          <div className="flex-1 grid grid-rows-3 gap-4">
            <ScenarioCard type="conservative" value="R$ 420k" delay={0.3} />
            <ScenarioCard type="realistic" value="R$ 485k" delay={0.4} />
            <ScenarioCard type="optimistic" value="R$ 545k" delay={0.5} />
          </div>
        </motion.div>

        {/* Coluna 3 - O que falta */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="metric-card bg-gradient-to-br from-warning/20 to-warning/5 border-warning/30 flex flex-col"
        >
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-8 h-8 text-warning" />
            <span className="text-xl font-bold text-foreground">O Que Falta</span>
          </div>
          
          <div className="flex-1 grid grid-rows-3 gap-4">
            <div className="bg-background/50 rounded-xl p-4 flex items-center justify-between">
              <span className="text-xl text-muted-foreground">Dias Úteis</span>
              <span className="text-5xl font-bold font-display text-warning">8</span>
            </div>
            <div className="bg-background/50 rounded-xl p-4 flex items-center justify-between">
              <span className="text-xl text-muted-foreground">Vendas</span>
              <span className="text-5xl font-bold font-display text-foreground">102</span>
            </div>
            <div className="bg-background/50 rounded-xl p-4 flex items-center justify-between">
              <span className="text-xl text-muted-foreground">Receita</span>
              <span className="text-4xl font-bold font-display text-foreground">R$ 212k</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-4 p-4 rounded-xl border border-primary/30 bg-primary/10 text-center"
          >
            <p className="text-primary font-bold text-xl">
              📈 Mantendo ritmo atual: <span className="text-3xl">97%</span> da meta
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};