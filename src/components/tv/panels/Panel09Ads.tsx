import { PanelHeader } from "@/components/tv/PanelHeader";
import { MetricCard } from "@/components/tv/MetricCard";
import { Megaphone, DollarSign, Users, ShoppingCart, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export const Panel09Ads = () => {
  return (
    <div className="tv-panel">
      <PanelHeader 
        title="Ads do Dia"
        subtitle="O anúncio está virando venda?"
        icon={<Megaphone className="w-5 h-5" />}
      />

      <div className="flex-1 space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <MetricCard
            label="Gasto Hoje"
            value="R$ 1.850"
            variant="default"
            size="lg"
            delay={0.1}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="metric-card bg-success/10 border-success/30"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="metric-label">CPL Hoje</span>
              <CheckCircle className="w-5 h-5 text-success" />
            </div>
            <span className="text-3xl font-bold font-display text-success">R$ 27,60</span>
            <p className="text-xs text-muted-foreground">Meta: até R$ 35</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <MetricCard
            label="Leads de Ads"
            value={67}
            variant="primary"
            size="md"
            trend="up"
            trendValue="+15% vs ontem"
            delay={0.3}
          />
          <MetricCard
            label="Vendas de Ads"
            value={8}
            variant="success"
            size="md"
            delay={0.4}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="metric-card"
        >
          <span className="text-sm text-muted-foreground uppercase mb-3 block">Funil de Ads</span>
          <div className="flex items-center justify-between gap-2">
            <div className="text-center flex-1">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-1">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <span className="text-lg font-bold text-foreground">R$ 1.850</span>
              <p className="text-xs text-muted-foreground">Investido</p>
            </div>
            <div className="text-muted-foreground text-xl">→</div>
            <div className="text-center flex-1">
              <div className="w-12 h-12 rounded-full bg-warning/20 flex items-center justify-center mx-auto mb-1">
                <Users className="w-6 h-6 text-warning" />
              </div>
              <span className="text-lg font-bold text-foreground">67</span>
              <p className="text-xs text-muted-foreground">Leads</p>
            </div>
            <div className="text-muted-foreground text-xl">→</div>
            <div className="text-center flex-1">
              <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-1">
                <ShoppingCart className="w-6 h-6 text-success" />
              </div>
              <span className="text-lg font-bold text-foreground">8</span>
              <p className="text-xs text-muted-foreground">Vendas</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="metric-card bg-success/10 border-success/30"
        >
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm text-muted-foreground uppercase">ROAS</span>
              <p className="text-3xl font-bold font-display text-success">4.2x</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground uppercase">Receita Ads</span>
              <p className="text-3xl font-bold font-display text-foreground">R$ 7.770</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
