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
        icon={<Users className="w-10 h-10" />}
      />

      <div className="flex-1 space-y-6">
        <div className="space-y-4">
          <h3 className="text-xl uppercase tracking-widest text-muted-foreground flex items-center gap-3">
            <span className="w-3 h-3 bg-primary rounded-full"></span>
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
          className="grid grid-cols-2 gap-6 mt-8"
        >
          <div className="metric-card bg-gradient-to-br from-success/20 to-success/5 border-success/30">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-8 h-8 text-success" />
              <span className="text-xl text-muted-foreground uppercase">Maior Evolução</span>
            </div>
            <p className="text-4xl font-bold">João Pedro</p>
            <p className="text-success text-xl mt-2">+150% vs ontem</p>
          </div>

          <div className="metric-card bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30">
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="w-8 h-8 text-primary" />
              <span className="text-xl text-muted-foreground uppercase">Mais Propostas</span>
            </div>
            <p className="text-4xl font-bold">Fernanda Lima</p>
            <p className="text-primary text-xl mt-2">18 propostas hoje</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 p-6 bg-card rounded-2xl border border-border/50"
        >
          <p className="text-xl text-muted-foreground text-center">
            <span className="text-foreground font-bold text-2xl">Carlos</span> precisa de{" "}
            <span className="text-primary font-bold text-2xl">2 vendas</span> para passar{" "}
            <span className="text-foreground font-bold text-2xl">Ana</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};
