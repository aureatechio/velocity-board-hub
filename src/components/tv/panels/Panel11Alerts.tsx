import { PanelHeader } from "@/components/tv/PanelHeader";
import { AlertCard } from "@/components/tv/AlertCard";
import { AlertTriangle, Target } from "lucide-react";
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
      <PanelHeader title="Alertas e Foco" subtitle="O que exige ação AGORA?" icon={<AlertTriangle className="w-6 h-6" />} />
      <div className="flex-1 flex gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex-1 metric-card bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30">
          <div className="flex items-center gap-3 mb-4"><Target className="w-6 h-6 text-primary" /><span className="text-lg font-bold text-foreground">Prioridades do Dia</span></div>
          <div className="space-y-3">
            {priorities.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.1 }} className="flex items-center gap-4 p-4 bg-background/50 rounded-xl">
                <span className="text-2xl">{p.icon}</span><span className="text-lg font-medium text-foreground">{p.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex-1 metric-card">
          <div className="flex items-center gap-3 mb-4"><AlertTriangle className="w-6 h-6 text-destructive" /><span className="text-lg font-bold text-foreground">Negócios em Risco</span></div>
          <div className="space-y-3">
            {riskyDeals.map((deal, i) => (
              <motion.div key={deal.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.1 }} className="flex items-center justify-between p-4 bg-destructive/10 rounded-xl border-l-4 border-destructive">
                <span className="font-bold text-foreground text-lg">{deal.name}</span>
                <div className="flex items-center gap-4"><span className="font-bold text-foreground text-lg">{deal.value}</span><span className="text-destructive bg-destructive/20 px-3 py-1 rounded-lg font-medium">{deal.status}</span></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <div className="w-80 space-y-3">
          <AlertCard type="warning" title="Propostas Aguardando" description="Enviadas há +3 dias" value="14" delay={0.7} />
          <AlertCard type="urgent" title="Ações Vencidas" description="Próxima ação atrasada" value="8" delay={0.8} />
          <AlertCard type="danger" title="Pipeline Frio" description="Sem movimento +7d" value="23" delay={0.9} />
        </div>
      </div>
    </div>
  );
};