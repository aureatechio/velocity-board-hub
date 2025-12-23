import { PanelHeader } from "@/components/tv/PanelHeader";
import { LeaderboardCard } from "@/components/tv/LeaderboardCard";
import { Users, TrendingUp, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export const Panel02Leaderboard = () => {
  const topSellers = [
    { rank: 1 as const, name: "Ana Silva", value: 12, subtitle: "R$ 18.500" },
    { rank: 2 as const, name: "Carlos Santos", value: 8, subtitle: "R$ 12.200" },
    { rank: 3 as const, name: "Maria Oliveira", value: 6, subtitle: "R$ 9.800" },
  ];

  return (
    <div className="tv-panel">
      <PanelHeader 
        title="Top Vendedores"
        subtitle="Quem está puxando a fila?"
        icon={<Users className="w-6 h-6" />}
      />

      {/* Main content - horizontal layout */}
      <div className="flex-1 flex gap-6">
        {/* Left - Top 3 ranking */}
        <div className="flex-1 space-y-4">
          <h3 className="text-sm uppercase tracking-wider text-muted-foreground flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            Top 3 do Dia
          </h3>
          {topSellers.map((seller, i) => (
            <LeaderboardCard
              key={seller.name}
              {...seller}
              delay={0.1 + i * 0.15}
            />
          ))}
        </div>

        {/* Center - Stats cards */}
        <div className="flex-1 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="metric-card bg-gradient-to-br from-success/20 to-success/5 border-success/30"
          >
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="w-5 h-5 text-success" />
              <span className="text-sm text-muted-foreground uppercase">Maior Evolução</span>
            </div>
            <p className="text-xl font-bold">João Pedro</p>
            <p className="text-success text-lg">+150% vs ontem</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="metric-card bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30"
          >
            <div className="flex items-center gap-3 mb-3">
              <Rocket className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground uppercase">Mais Propostas</span>
            </div>
            <p className="text-xl font-bold">Fernanda Lima</p>
            <p className="text-primary text-lg">18 propostas hoje</p>
          </motion.div>
        </div>

        {/* Right - Insight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="w-80 metric-card flex flex-col justify-center text-center"
        >
          <p className="text-muted-foreground text-sm mb-2">Disputa pelo 1º lugar</p>
          <p className="text-lg">
            <span className="text-foreground font-bold text-xl">Carlos</span> precisa de
          </p>
          <p className="text-primary font-bold text-3xl my-2">2 vendas</p>
          <p className="text-lg">
            para passar <span className="text-foreground font-bold text-xl">Ana</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};