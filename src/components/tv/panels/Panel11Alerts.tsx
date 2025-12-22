import { PanelHeader } from "@/components/tv/PanelHeader";
import { AlertCard } from "@/components/tv/AlertCard";
import { AlertTriangle, Target } from "lucide-react";
import { motion } from "framer-motion";

export const Panel11Alerts = () => {
  const riskyDeals = [
    { name: "Empresa Alpha", value: "R$ 45.000", status: "7d parado" },
    { name: "Tech Solutions", value: "R$ 32.000", status: "5d parado" },
    { name: "Grupo Beta", value: "R$ 28.500", status: "Vence hoje" },
    { name: "Corp Industries", value: "R$ 25.000", status: "6d parado" },
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
        icon={<AlertTriangle className="w-5 h-5" />}
      />

      <div className="flex-1 space-y-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="metric-card bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30"
        >
          <div className="flex items-center gap-2 mb-3">
            <Target className="w-5 h-5 text-primary" />
            <span className="text-base font-bold text-foreground">Prioridade do Dia</span>
          </div>
          <div className="space-y-2">
            {priorities.map((priority, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-2 p-2 bg-background/50 rounded-lg"
              >
                <span className="text-xl">{priority.icon}</span>
                <span className="text-sm font-medium text-foreground">{priority.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="metric-card"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-destructive" />
              <span className="text-base font-bold text-foreground">Negócios em Risco</span>
            </div>
            <span className="text-xs text-muted-foreground">Top 4</span>
          </div>
          <div className="space-y-2">
            {riskyDeals.map((deal, i) => (
              <motion.div
                key={deal.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.08 }}
                className="flex items-center justify-between p-2 bg-destructive/10 rounded-lg border-l-2 border-destructive"
              >
                <span className="font-medium text-foreground text-sm truncate">{deal.name}</span>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="font-bold text-foreground text-sm">{deal.value}</span>
                  <span className="text-xs text-destructive bg-destructive/20 px-1.5 py-0.5 rounded">
                    {deal.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="space-y-2">
          <AlertCard
            type="warning"
            title="Propostas Aguardando"
            description="Enviadas há +3 dias"
            value="14"
            delay={0.8}
          />
          <AlertCard
            type="urgent"
            title="Ações Vencidas"
            description="Próxima ação atrasada"
            value="8"
            delay={0.9}
          />
          <AlertCard
            type="danger"
            title="Pipeline Frio"
            description="Sem movimento +7d"
            value="23"
            delay={1}
          />
        </div>
      </div>
    </div>
  );
};
