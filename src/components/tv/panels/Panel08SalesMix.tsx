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
      <PanelHeader 
        title="Vendas: Mix e Ticket"
        subtitle="O que estamos vendendo e por quanto?"
        icon={<ShoppingBag className="w-5 h-5" />}
      />

      <div className="flex-1 space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <MetricCard
            label="Ticket Médio Hoje"
            value="R$ 2.080"
            variant="primary"
            size="md"
            trend="up"
            trendValue="+8% vs média"
            delay={0.1}
          />
          <MetricCard
            label="Ticket Semana"
            value="R$ 1.950"
            variant="default"
            size="md"
            delay={0.2}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="metric-card"
        >
          <div className="flex items-center gap-2 mb-3">
            <Tag className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground uppercase">Mais Vendidos</span>
          </div>
          <div className="space-y-2">
            {topProducts.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex items-center justify-between p-2 bg-secondary/50 rounded-lg"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                    {i + 1}
                  </span>
                  <span className="font-bold text-foreground text-sm truncate">{product.name}</span>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm font-bold text-foreground">{product.sales} vendas</p>
                  <p className="text-xs text-muted-foreground">{product.revenue}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="metric-card"
        >
          <div className="flex items-center gap-2 mb-3">
            <DollarSign className="w-5 h-5 text-success" />
            <span className="text-sm text-muted-foreground uppercase">Receita por Canal</span>
          </div>
          <div className="flex h-6 rounded-lg overflow-hidden mb-2">
            {channels.map((channel) => (
              <motion.div
                key={channel.name}
                initial={{ width: 0 }}
                animate={{ width: `${channel.value}%` }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className={channel.color}
              />
            ))}
          </div>
          <div className="flex justify-between text-xs">
            {channels.map((channel) => (
              <div key={channel.name} className="flex items-center gap-1">
                <div className={`w-2 h-2 rounded-full ${channel.color}`} />
                <span className="text-muted-foreground">{channel.name}</span>
                <span className="font-bold text-foreground">{channel.value}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
