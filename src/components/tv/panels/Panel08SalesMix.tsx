import { PanelHeader } from "@/components/tv/PanelHeader";
import { MetricCard } from "@/components/tv/MetricCard";
import { ShoppingBag, DollarSign, Tag } from "lucide-react";
import { motion } from "framer-motion";

export const Panel08SalesMix = () => {
  const topProducts = [
    { name: "Plano Premium", sales: 45, revenue: "R$ 89.5k" },
    { name: "Plano Business", sales: 32, revenue: "R$ 48k" },
    { name: "Plano Starter", sales: 28, revenue: "R$ 28k" },
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
        icon={<ShoppingBag className="w-4 h-4" />}
      />

      <div className="flex-1 grid grid-cols-3 gap-3 mt-3">
        {/* Tickets */}
        <div className="space-y-2">
          <MetricCard
            label="Ticket Médio Hoje"
            value="R$ 2.080"
            variant="primary"
            size="sm"
            trend="up"
            trendValue="+8%"
            delay={0.1}
          />
          <MetricCard
            label="Ticket Semana"
            value="R$ 1.950"
            variant="default"
            size="sm"
            delay={0.2}
          />
        </div>

        {/* Top Products */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="metric-card"
        >
          <div className="flex items-center gap-1 mb-2">
            <Tag className="w-3 h-3 text-primary" />
            <span className="text-xs text-muted-foreground uppercase">Mais Vendidos</span>
          </div>
          <div className="space-y-1">
            {topProducts.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex items-center justify-between p-1.5 bg-secondary/50 rounded"
              >
                <div className="flex items-center gap-1 min-w-0">
                  <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs shrink-0">
                    {i + 1}
                  </span>
                  <span className="font-bold text-foreground text-xs truncate">{product.name}</span>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xs font-bold text-foreground">{product.sales}</p>
                  <p className="text-xs text-muted-foreground">{product.revenue}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Revenue by Channel */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="metric-card"
        >
          <div className="flex items-center gap-1 mb-2">
            <DollarSign className="w-3 h-3 text-success" />
            <span className="text-xs text-muted-foreground uppercase">Receita/Canal</span>
          </div>
          <div className="flex h-4 rounded overflow-hidden mb-2">
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
          <div className="space-y-1">
            {channels.map((channel) => (
              <div key={channel.name} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1">
                  <div className={`w-2 h-2 rounded-full ${channel.color}`} />
                  <span className="text-muted-foreground">{channel.name}</span>
                </div>
                <span className="font-bold text-foreground">{channel.value}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
