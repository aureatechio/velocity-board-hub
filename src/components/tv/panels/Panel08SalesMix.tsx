import { PanelHeader } from "@/components/tv/PanelHeader";
import { MetricCard } from "@/components/tv/MetricCard";
import { ShoppingBag, DollarSign, Tag, Percent } from "lucide-react";
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
        icon={<ShoppingBag className="w-6 h-6" />}
      />

      <div className="flex-1 space-y-4">
        <div className="grid grid-cols-2 gap-4">
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
            label="Ticket Médio Semana"
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
          <div className="flex items-center gap-2 mb-4">
            <Tag className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground uppercase">Produtos Mais Vendidos</span>
          </div>
          <div className="space-y-3">
            {topProducts.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {i + 1}
                  </span>
                  <span className="font-bold text-foreground">{product.name}</span>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-foreground">{product.sales} vendas</p>
                  <p className="text-sm text-muted-foreground">{product.revenue}</p>
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
          <div className="flex items-center gap-2 mb-4">
            <DollarSign className="w-5 h-5 text-success" />
            <span className="text-sm text-muted-foreground uppercase">Receita por Canal</span>
          </div>
          <div className="flex h-8 rounded-lg overflow-hidden mb-3">
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
          <div className="flex justify-between">
            {channels.map((channel) => (
              <div key={channel.name} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${channel.color}`} />
                <span className="text-sm text-muted-foreground">{channel.name}</span>
                <span className="text-sm font-bold text-foreground">{channel.value}%</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="metric-card"
        >
          <div className="flex items-center gap-2 mb-2">
            <Percent className="w-5 h-5 text-warning" />
            <span className="text-sm text-muted-foreground uppercase">Descontos Hoje</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-muted-foreground text-sm">Média</span>
              <p className="text-3xl font-bold text-warning">8.5%</p>
            </div>
            <div>
              <span className="text-muted-foreground text-sm">Total</span>
              <p className="text-3xl font-bold text-foreground">R$ 4.230</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
