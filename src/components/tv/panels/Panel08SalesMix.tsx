import { PanelHeader } from "@/components/tv/PanelHeader";
import { ShoppingBag, DollarSign, Tag, TrendingUp } from "lucide-react";
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

      <div className="flex-1 grid grid-cols-3 gap-4">
        {/* Coluna 1 - Tickets */}
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="metric-card flex-1 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30 flex flex-col justify-center items-center text-center"
          >
            <span className="text-lg text-muted-foreground uppercase mb-2">Ticket Médio Hoje</span>
            <span className="text-6xl font-bold font-display text-primary">R$ 2.080</span>
            <div className="flex items-center gap-2 mt-3 text-success text-xl">
              <TrendingUp className="w-6 h-6" />
              <span>+8% vs média</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="metric-card flex-1 flex flex-col justify-center items-center text-center"
          >
            <span className="text-lg text-muted-foreground uppercase mb-2">Ticket Semana</span>
            <span className="text-6xl font-bold font-display text-foreground">R$ 1.950</span>
            <span className="text-muted-foreground text-lg mt-2">média por venda</span>
          </motion.div>
        </div>

        {/* Coluna 2 - Top produtos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="metric-card flex flex-col"
        >
          <div className="flex items-center gap-3 mb-6">
            <Tag className="w-8 h-8 text-primary" />
            <span className="text-xl text-muted-foreground uppercase">Produtos Mais Vendidos</span>
          </div>
          <div className="flex-1 space-y-4">
            {topProducts.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex items-center justify-between p-4 bg-secondary/50 rounded-xl"
              >
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-2xl">
                    {i + 1}
                  </span>
                  <span className="font-bold text-foreground text-xl">{product.name}</span>
                </div>
                <div className="text-right">
                  <p className="font-bold text-foreground text-2xl">{product.sales}</p>
                  <p className="text-muted-foreground text-lg">{product.revenue}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Coluna 3 - Receita por canal */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="metric-card flex flex-col"
        >
          <div className="flex items-center gap-3 mb-6">
            <DollarSign className="w-8 h-8 text-success" />
            <span className="text-xl text-muted-foreground uppercase">Receita por Canal</span>
          </div>
          
          {/* Barra visual */}
          <div className="flex h-12 rounded-xl overflow-hidden mb-6">
            {channels.map((c) => (
              <motion.div
                key={c.name}
                initial={{ width: 0 }}
                animate={{ width: `${c.value}%` }}
                transition={{ duration: 0.8 }}
                className={c.color}
              />
            ))}
          </div>
          
          {/* Lista de canais */}
          <div className="flex-1 space-y-6">
            {channels.map((c) => (
              <div key={c.name} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full ${c.color}`} />
                  <span className="text-foreground text-xl">{c.name}</span>
                </div>
                <span className="font-bold text-foreground text-4xl">{c.value}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};