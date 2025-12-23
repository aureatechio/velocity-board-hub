import { PanelHeader } from "@/components/tv/PanelHeader";
import { MetricCard } from "@/components/tv/MetricCard";
import { ShoppingBag, DollarSign, Tag } from "lucide-react";
import { motion } from "framer-motion";

export const Panel08SalesMix = () => {
  const topProducts = [
    { name: "Plano Premium", sales: 45, revenue: "R$ 89.500" },
    { name: "Plano Business", sales: 32, revenue: "R$ 48.000" },
    { name: "Plano Starter", sales: 28, revenue: "R$ 28.000" },
  ];

  const channels = [
    { name: "Orgânico", value: 45, color: "bg-success" },
    { name: "Ads", value: 35, color: "bg-primary" },
    { name: "Indicação", value: 20, color: "bg-warning" },
  ];

  return (
    <div className="tv-panel">
      <PanelHeader title="Vendas: Mix e Ticket" subtitle="O que estamos vendendo?" icon={<ShoppingBag className="w-6 h-6" />} />
      <div className="flex-1 flex gap-6">
        <div className="flex-1 grid grid-cols-2 gap-4 content-start">
          <MetricCard label="Ticket Médio Hoje" value="R$ 2.080" variant="primary" size="lg" trend="up" trendValue="+8% vs média" delay={0.1} />
          <MetricCard label="Ticket Semana" value="R$ 1.950" variant="default" size="lg" delay={0.2} />
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="w-80 metric-card">
          <div className="flex items-center gap-3 mb-4"><Tag className="w-5 h-5 text-primary" /><span className="text-base text-muted-foreground uppercase">Mais Vendidos</span></div>
          <div className="space-y-3">
            {topProducts.map((product, i) => (
              <div key={product.name} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                <div className="flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">{i + 1}</span><span className="font-bold text-foreground">{product.name}</span></div>
                <div className="text-right"><p className="font-bold text-foreground">{product.sales} vendas</p><p className="text-muted-foreground">{product.revenue}</p></div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="w-72 metric-card">
          <div className="flex items-center gap-3 mb-4"><DollarSign className="w-5 h-5 text-success" /><span className="text-base text-muted-foreground uppercase">Receita por Canal</span></div>
          <div className="flex h-8 rounded-lg overflow-hidden mb-4">{channels.map((c) => (<motion.div key={c.name} initial={{ width: 0 }} animate={{ width: `${c.value}%` }} transition={{ duration: 0.8 }} className={c.color} />))}</div>
          <div className="space-y-3">{channels.map((c) => (<div key={c.name} className="flex items-center justify-between"><div className="flex items-center gap-2"><div className={`w-4 h-4 rounded-full ${c.color}`} /><span className="text-foreground">{c.name}</span></div><span className="font-bold text-foreground text-lg">{c.value}%</span></div>))}</div>
        </motion.div>
      </div>
    </div>
  );
};