import { PanelHeader } from "@/components/tv/PanelHeader";
import { AlertCard } from "@/components/tv/AlertCard";
import { AlertTriangle, Target, Flame } from "lucide-react";
import { motion } from "framer-motion";

export const Panel11Alerts = () => {
  const riskyDeals = [
    { name: "Empresa Alpha", value: "R$ 45.000", status: "7d parado" },
    { name: "Tech Solutions", value: "R$ 32.000", status: "5d parado" },
    { name: "Grupo Beta", value: "R$ 28.500", status: "Vence hoje" },
  ];

  const priorities = [
    { icon: "🎯", text: "Bater 20 propostas hoje" },
    { icon: "🔄", text: "Reativar 15 leads parados" },
    { icon: "✅", text: "Fechar 5 renovações" },
  ];

  return (
    <div className="tv-panel">
      <PanelHeader 
        title="Alertas e Foco"
        subtitle="O que exige ação AGORA?"
        icon={<AlertTriangle className="w-6 h-6" />}
      />

      <div className="flex-1 grid grid-cols-3 gap-4">
        {/* Coluna 1 - Prioridades */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="metric-card bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30 flex flex-col"
        >
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Prioridades do Dia</span>
          </div>
          <div className="flex-1 space-y-4">
            {priorities.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-4 p-5 bg-background/50 rounded-xl"
              >
                <span className="text-4xl">{p.icon}</span>
                <span className="text-xl font-medium text-foreground">{p.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Coluna 2 - Negócios em risco */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="metric-card flex flex-col"
        >
          <div className="flex items-center gap-3 mb-6">
            <Flame className="w-8 h-8 text-destructive" />
            <span className="text-xl font-bold text-foreground">Negócios em Risco</span>
          </div>
          <div className="flex-1 space-y-4">
            {riskyDeals.map((deal, i) => (
              <motion.div
                key={deal.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center justify-between p-5 bg-destructive/10 rounded-xl border-l-4 border-destructive"
              >
                <span className="font-bold text-foreground text-xl">{deal.name}</span>
                <div className="flex items-center gap-4">
                  <span className="font-bold text-foreground text-xl">{deal.value}</span>
                  <span className="text-destructive bg-destructive/20 px-4 py-2 rounded-lg font-bold text-lg">
                    {deal.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Coluna 3 - Alertas */}
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="flex-1"
          >
            <AlertCard 
              type="warning" 
              title="Propostas Aguardando" 
              description="Enviadas há +3 dias" 
              value="14" 
              delay={0} 
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="flex-1"
          >
            <AlertCard 
              type="urgent" 
              title="Ações Vencidas" 
              description="Próxima ação atrasada" 
              value="8" 
              delay={0} 
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            className="flex-1"
          >
            <AlertCard 
              type="danger" 
              title="Pipeline Frio" 
              description="Sem movimento +7d" 
              value="23" 
              delay={0} 
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};