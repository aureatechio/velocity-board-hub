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
        icon={<Users className="w-4 h-4" />}
      />

      <div className="flex-1 grid grid-cols-3 gap-3 mt-3">
        {/* Top 3 */}
        <div className="space-y-2">
          <h3 className="text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
            Top 3 do Dia
          </h3>
          {topSellers.map((seller, i) => (
            <LeaderboardCard
              key={seller.name}
              {...seller}
              delay={0.1 + i * 0.1}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="space-y-2">
          <div className="metric-card bg-gradient-to-br from-success/20 to-success/5 border-success/30">
            <div className="flex items-center gap-1 mb-1">
              <TrendingUp className="w-3 h-3 text-success" />
              <span className="text-xs text-muted-foreground uppercase">Maior Evolução</span>
            </div>
            <p className="text-sm font-bold truncate">João Pedro</p>
            <p className="text-success text-xs">+150% vs ontem</p>
          </div>

          <div className="metric-card bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30">
            <div className="flex items-center gap-1 mb-1">
              <Rocket className="w-3 h-3 text-primary" />
              <span className="text-xs text-muted-foreground uppercase">Mais Propostas</span>
            </div>
            <p className="text-sm font-bold truncate">Fernanda Lima</p>
            <p className="text-primary text-xs">18 propostas hoje</p>
          </div>
        </div>

        {/* Insight */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center"
        >
          <div className="p-3 bg-card rounded-lg border border-border/50 w-full">
            <p className="text-xs text-muted-foreground text-center">
              <span className="text-foreground font-bold">Carlos</span> precisa de{" "}
              <span className="text-primary font-bold">2 vendas</span> para passar{" "}
              <span className="text-foreground font-bold">Ana</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
