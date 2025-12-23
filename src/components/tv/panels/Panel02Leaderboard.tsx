import { PanelHeader } from "@/components/tv/PanelHeader";
import { LeaderboardCard } from "@/components/tv/LeaderboardCard";
import { Users, TrendingUp, Rocket, Award } from "lucide-react";
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

      {/* Grid que preenche toda a tela */}
      <div className="flex-1 grid grid-cols-3 gap-4">
        {/* Coluna 1 - Top 3 ranking */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-lg uppercase tracking-wider text-muted-foreground">Top 3 do Dia</span>
          </div>
          {topSellers.map((seller, i) => (
            <div key={seller.name} className="flex-1">
              <LeaderboardCard
                {...seller}
                delay={0.1 + i * 0.15}
              />
            </div>
          ))}
        </div>

        {/* Coluna 2 - Stats */}
        <div className="flex flex-col gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="metric-card flex-1 bg-gradient-to-br from-success/20 to-success/5 border-success/30 flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-8 h-8 text-success" />
              <span className="text-lg text-muted-foreground uppercase">Maior Evolução</span>
            </div>
            <p className="text-4xl font-bold text-foreground">João Pedro</p>
            <p className="text-success text-3xl font-bold mt-2">+150%</p>
            <p className="text-muted-foreground text-lg">vs ontem</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="metric-card flex-1 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30 flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="w-8 h-8 text-primary" />
              <span className="text-lg text-muted-foreground uppercase">Mais Propostas</span>
            </div>
            <p className="text-4xl font-bold text-foreground">Fernanda Lima</p>
            <p className="text-primary text-3xl font-bold mt-2">18</p>
            <p className="text-muted-foreground text-lg">propostas hoje</p>
          </motion.div>
        </div>

        {/* Coluna 3 - Disputa e resumo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="metric-card flex flex-col justify-center items-center text-center"
        >
          <p className="text-muted-foreground text-xl mb-4">🏆 Disputa pelo 1º lugar</p>
          
          <div className="space-y-6">
            <div>
              <p className="text-foreground font-bold text-4xl">Carlos Santos</p>
              <p className="text-muted-foreground text-lg">precisa de</p>
            </div>
            
            <div className="py-6 px-8 bg-primary/20 rounded-2xl border border-primary/30">
              <span className="text-primary font-bold text-7xl">2</span>
              <p className="text-primary text-2xl font-bold">vendas</p>
            </div>
            
            <div>
              <p className="text-muted-foreground text-lg">para ultrapassar</p>
              <p className="text-foreground font-bold text-4xl">Ana Silva</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};