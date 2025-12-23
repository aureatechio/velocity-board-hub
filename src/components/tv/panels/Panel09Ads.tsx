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
        icon={<Megaphone className="w-4 h-4" />}
      />

      <div className="flex-1 grid grid-cols-4 gap-3 mt-3">
        {/* Spend and CPL */}
        <div className="space-y-2">
          <MetricCard
            label="Gasto Hoje"
            value="R$ 1.850"
            variant="default"
            size="md"
            delay={0.1}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="metric-card bg-success/10 border-success/30"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="metric-label">CPL</span>
              <CheckCircle className="w-3 h-3 text-success" />
            </div>
            <span className="text-xl font-bold font-display text-success">R$ 27,60</span>
            <p className="text-xs text-muted-foreground">Meta: R$ 35</p>
          </motion.div>
        </div>

        {/* Leads and Sales */}
        <div className="space-y-2">
          <MetricCard
            label="Leads de Ads"
            value={67}
            variant="primary"
            size="sm"
            trend="up"
            trendValue="+15%"
            delay={0.3}
          />
          <MetricCard
            label="Vendas de Ads"
            value={8}
            variant="success"
            size="sm"
            delay={0.4}
          />
        </div>

        {/* Funnel */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="metric-card"
        >
          <span className="text-xs text-muted-foreground uppercase mb-2 block">Funil Ads</span>
          <div className="flex items-center justify-between gap-1">
            <div className="text-center flex-1">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-1">
                <DollarSign className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm font-bold text-foreground">R$ 1.8k</span>
              <p className="text-xs text-muted-foreground">Invest.</p>
            </div>
            <span className="text-muted-foreground">→</span>
            <div className="text-center flex-1">
              <div className="w-8 h-8 rounded-full bg-warning/20 flex items-center justify-center mx-auto mb-1">
                <Users className="w-4 h-4 text-warning" />
              </div>
              <span className="text-sm font-bold text-foreground">67</span>
              <p className="text-xs text-muted-foreground">Leads</p>
            </div>
            <span className="text-muted-foreground">→</span>
            <div className="text-center flex-1">
              <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-1">
                <ShoppingCart className="w-4 h-4 text-success" />
              </div>
              <span className="text-sm font-bold text-foreground">8</span>
              <p className="text-xs text-muted-foreground">Vendas</p>
            </div>
          </div>
        </motion.div>

        {/* ROAS */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="metric-card bg-success/10 border-success/30"
        >
          <div className="space-y-2">
            <div>
              <span className="text-xs text-muted-foreground uppercase">ROAS</span>
              <p className="text-2xl font-bold font-display text-success">4.2x</p>
            </div>
            <div>
              <span className="text-xs text-muted-foreground uppercase">Receita Ads</span>
              <p className="text-xl font-bold font-display text-foreground">R$ 7.770</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
