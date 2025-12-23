import { PanelHeader } from "@/components/tv/PanelHeader";
import { AlertCard } from "@/components/tv/AlertCard";
import { AlertTriangle, Target } from "lucide-react";
import { motion } from "framer-motion";

export const Panel11Alerts = () => {
  const riskyDeals = [
    { name: "Empresa Alpha", value: "R$ 45k", status: "7d parado" },
    { name: "Tech Solutions", value: "R$ 32k", status: "5d parado" },
    { name: "Grupo Beta", value: "R$ 28.5k", status: "Vence hoje" },
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
        icon={<AlertTriangle className="w-4 h-4" />}
      />

      <div className="flex-1 grid grid-cols-3 gap-3 mt-3">
        {/* Priorities */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="metric-card bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30"
        >
          <div className="flex items-center gap-1 mb-2">
            <Target className="w-3 h-3 text-primary" />
            <span className="text-xs font-bold text-foreground">Prioridade do Dia</span>
          </div>
          <div className="space-y-1">
            {priorities.map((priority, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-1.5 p-1.5 bg-background/50 rounded"
              >
                <span className="text-sm">{priority.icon}</span>
                <span className="text-xs font-medium text-foreground">{priority.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Risky Deals */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="metric-card"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1">
              <AlertTriangle className="w-3 h-3 text-destructive" />
              <span className="text-xs font-bold text-foreground">Em Risco</span>
            </div>
          </div>
          <div className="space-y-1">
            {riskyDeals.map((deal, i) => (
              <motion.div
                key={deal.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.08 }}
                className="flex items-center justify-between p-1.5 bg-destructive/10 rounded border-l-2 border-destructive"
              >
                <span className="font-medium text-foreground text-xs truncate">{deal.name}</span>
                <div className="flex items-center gap-1 shrink-0">
                  <span className="font-bold text-foreground text-xs">{deal.value}</span>
                  <span className="text-xs text-destructive bg-destructive/20 px-1 py-0.5 rounded">
                    {deal.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Alerts */}
        <div className="space-y-1.5">
          <AlertCard
            type="warning"
            title="Propostas Aguardando"
            description="+3 dias"
            value="14"
            delay={0.7}
          />
          <AlertCard
            type="urgent"
            title="Ações Vencidas"
            description="Atrasadas"
            value="8"
            delay={0.8}
          />
          <AlertCard
            type="danger"
            title="Pipeline Frio"
            description="+7d parado"
            value="23"
            delay={0.9}
          />
        </div>
      </div>
    </div>
  );
};
