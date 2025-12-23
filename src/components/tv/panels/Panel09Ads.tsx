import { PanelHeader } from "@/components/tv/PanelHeader";
import { MetricCard } from "@/components/tv/MetricCard";
import { Megaphone, DollarSign, Users, ShoppingCart, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export const Panel09Ads = () => {
  return (
    <div className="tv-panel">
      <PanelHeader title="Ads do Dia" subtitle="O anúncio está virando venda?" icon={<Megaphone className="w-6 h-6" />} />
      <div className="flex-1 flex gap-6">
        <div className="flex-1 grid grid-cols-2 gap-4 content-start">
          <MetricCard label="Gasto Hoje" value="R$ 1.850" variant="default" size="lg" delay={0.1} />
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="metric-card bg-success/10 border-success/30">
            <div className="flex items-center justify-between mb-2"><span className="metric-label">CPL Hoje</span><CheckCircle className="w-5 h-5 text-success" /></div>
            <span className="text-4xl font-bold font-display text-success">R$ 27,60</span>
            <p className="text-muted-foreground mt-2">Meta: até R$ 35</p>
          </motion.div>
          <MetricCard label="Leads de Ads" value={67} variant="primary" size="lg" trend="up" trendValue="+15% vs ontem" delay={0.3} />
          <MetricCard label="Vendas de Ads" value={8} variant="success" size="lg" delay={0.4} />
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="w-80 metric-card">
          <span className="text-base text-muted-foreground uppercase mb-6 block">Funil de Ads</span>
          <div className="flex items-center justify-between gap-4">
            <div className="text-center flex-1"><div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2"><DollarSign className="w-8 h-8 text-primary" /></div><span className="text-xl font-bold text-foreground">R$ 1.850</span><p className="text-muted-foreground">Investido</p></div>
            <span className="text-2xl text-muted-foreground">→</span>
            <div className="text-center flex-1"><div className="w-16 h-16 rounded-full bg-warning/20 flex items-center justify-center mx-auto mb-2"><Users className="w-8 h-8 text-warning" /></div><span className="text-xl font-bold text-foreground">67</span><p className="text-muted-foreground">Leads</p></div>
            <span className="text-2xl text-muted-foreground">→</span>
            <div className="text-center flex-1"><div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-2"><ShoppingCart className="w-8 h-8 text-success" /></div><span className="text-xl font-bold text-foreground">8</span><p className="text-muted-foreground">Vendas</p></div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="w-64 metric-card bg-success/10 border-success/30 flex flex-col justify-center">
          <div className="text-center mb-4"><span className="text-base text-muted-foreground uppercase">ROAS</span><p className="text-5xl font-bold font-display text-success">4.2x</p></div>
          <div className="text-center"><span className="text-base text-muted-foreground uppercase">Receita de Ads</span><p className="text-3xl font-bold font-display text-foreground">R$ 7.770</p></div>
        </motion.div>
      </div>
    </div>
  );
};