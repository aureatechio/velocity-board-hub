import { PanelHeader } from "@/components/tv/PanelHeader";
import { AlertCard } from "@/components/tv/AlertCard";
import { AlertTriangle, Target, Clock } from "lucide-react";
import { motion } from "framer-motion";

export const Panel11Alerts = () => {
  const riskyDeals = [
    { name: "Empresa Alpha", value: "R$ 45.000", status: "7d parado" },
    { name: "Tech Solutions", value: "R$ 32.000", status: "5d parado" },
    { name: "Grupo Beta", value: "R$ 28.500", status: "Prazo vence hoje" },
    { name: "Corp Industries", value: "R$ 25.000", status: "6d parado" },
    { name: "Mega Systems", value: "R$ 22.000", status: "Sem movimento" },
  ];

  const priorities = [
    { icon: "🎯", text: "Bater 20 propostas hoje" },
    { icon: "🔄", text: "Reativar 15 leads parados" },
    { icon: "✅", text: "Fechar 5 renovações pendentes" },
  ];

  return (
    <div className="tv-panel">
      <PanelHeader 
        title="Alertas e Foco do Dia"
        subtitle="O que exige ação AGORA?"
        icon={<AlertTriangle className="w-10 h-10" />}
      />

      <div className="flex-1 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="metric-card bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30"
        >
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">Prioridade do Dia</span>
          </div>
          <div className="space-y-4">
            {priorities.map((priority, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-4 p-5 bg-background/50 rounded-xl"
              >
                <span className="text-4xl">{priority.icon}</span>
                <span className="text-2xl font-medium text-foreground">{priority.text}</span>
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
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-destructive" />
              <span className="text-2xl font-bold text-foreground">Negócios em Risco</span>
            </div>
            <span className="text-lg text-muted-foreground">Top 5 por valor</span>
          </div>
          <div className="space-y-3">
            {riskyDeals.map((deal, i) => (
              <motion.div
                key={deal.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.08 }}
                className="flex items-center justify-between p-4 bg-destructive/10 rounded-xl border-l-4 border-destructive"
              >
                <span className="font-medium text-foreground text-xl">{deal.name}</span>
                <div className="flex items-center gap-4">
                  <span className="font-bold text-foreground text-xl">{deal.value}</span>
                  <span className="text-sm text-destructive bg-destructive/20 px-3 py-1 rounded-lg">
                    {deal.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="space-y-3">
          <AlertCard
            type="warning"
            title="Propostas Aguardando Resposta"
            description="Enviadas há mais de 3 dias"
            value="14"
            delay={0.8}
          />
          <AlertCard
            type="urgent"
            title="Ações Vencidas no CRM"
            description="Negócios com próxima ação atrasada"
            value="8"
            delay={0.9}
          />
          <AlertCard
            type="danger"
            title="Pipeline Frio"
            description="Sem movimentação há 7+ dias"
            value="23"
            delay={1}
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="p-6 bg-card rounded-2xl border border-border/50 text-center"
        >
          <p className="text-lg text-muted-foreground">
            Última atualização: <span className="text-foreground font-bold">agora</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};
