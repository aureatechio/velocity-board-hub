import { PanelHeader } from "@/components/tv/PanelHeader";
import { Megaphone, DollarSign, Users, ShoppingCart, CheckCircle, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export const Panel09Ads = () => {
  return (
    <div className="tv-panel">
      <PanelHeader 
        title="Ads do Dia"
        subtitle="O anúncio está virando venda?"
        icon={<Megaphone className="w-6 h-6" />}
      />

      <div className="flex-1 grid grid-cols-3 gap-4">
        {/* Coluna 1 - Gasto e CPL */}
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="metric-card flex-1 flex flex-col justify-center items-center text-center"
          >
            <DollarSign className="w-10 h-10 text-muted-foreground mb-3" />
            <span className="text-lg text-muted-foreground uppercase mb-2">Gasto Hoje</span>
            <span className="text-6xl font-bold font-display text-foreground">R$ 1.850</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="metric-card flex-1 bg-success/10 border-success/30 flex flex-col justify-center items-center text-center"
          >
            <CheckCircle className="w-10 h-10 text-success mb-3" />
            <span className="text-lg text-muted-foreground uppercase mb-2">CPL Hoje</span>
            <span className="text-6xl font-bold font-display text-success">R$ 27,60</span>
            <p className="text-muted-foreground mt-2">Meta: até R$ 35 ✓</p>
          </motion.div>
        </div>

        {/* Coluna 2 - Leads e Vendas */}
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="metric-card flex-1 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30 flex flex-col justify-center items-center text-center"
          >
            <Users className="w-10 h-10 text-primary mb-3" />
            <span className="text-lg text-muted-foreground uppercase mb-2">Leads de Ads</span>
            <span className="text-8xl font-bold font-display text-primary">67</span>
            <div className="flex items-center gap-2 mt-2 text-success text-lg">
              <TrendingUp className="w-5 h-5" />
              <span>+15% vs ontem</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="metric-card flex-1 bg-gradient-to-br from-success/20 to-success/5 border-success/30 flex flex-col justify-center items-center text-center"
          >
            <ShoppingCart className="w-10 h-10 text-success mb-3" />
            <span className="text-lg text-muted-foreground uppercase mb-2">Vendas de Ads</span>
            <span className="text-8xl font-bold font-display text-success">8</span>
          </motion.div>
        </div>

        {/* Coluna 3 - ROAS e Funil */}
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="metric-card flex-1 bg-gradient-to-br from-success/30 to-success/10 border-success/50 flex flex-col justify-center items-center text-center"
          >
            <span className="text-xl text-muted-foreground uppercase mb-4">ROAS</span>
            <span className="text-9xl font-bold font-display text-success">4.2x</span>
            <p className="text-success text-xl mt-2">Retorno sobre investimento</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="metric-card flex-1 flex flex-col justify-center items-center text-center"
          >
            <span className="text-lg text-muted-foreground uppercase mb-2">Receita de Ads</span>
            <span className="text-5xl font-bold font-display text-foreground">R$ 7.770</span>
            <div className="mt-4 flex items-center gap-4 text-muted-foreground">
              <span>Investido: R$ 1.850</span>
              <span>→</span>
              <span className="text-success font-bold">Lucro: R$ 5.920</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};