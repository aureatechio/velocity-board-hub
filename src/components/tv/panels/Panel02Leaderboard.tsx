import { PanelHeader } from "@/components/tv/PanelHeader";
import { LeaderboardCard } from "@/components/tv/LeaderboardCard";
import { Users, TrendingUp, Zap } from "lucide-react";
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

      <div className="flex-1 space-y-4">
        <div className="space-y-3">
          <h3 className="text-sm uppercase tracking-widest text-muted-foreground flex items-center gap-2">
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

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 gap-4 mt-6"
        >
          <div className="metric-card bg-gradient-to-br from-success/20 to-success/5 border-success/30">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-success" />
              <span className="text-sm text-muted-foreground uppercase">Maior Evolução</span>
            </div>
            <p className="text-2xl font-bold">João Pedro</p>
            <p className="text-success text-sm">+150% vs ontem</p>
          </div>

          <div className="metric-card bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground uppercase">MVP Atendimento</span>
            </div>
            <p className="text-2xl font-bold">Fernanda Lima</p>
            <p className="text-primary text-sm">Tempo médio: 2min</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-4 p-4 bg-card rounded-xl border border-border/50"
        >
          <p className="text-sm text-muted-foreground text-center">
            <span className="text-foreground font-bold">Carlos</span> precisa de{" "}
            <span className="text-primary font-bold">2 vendas</span> para passar{" "}
            <span className="text-foreground font-bold">Ana</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};
