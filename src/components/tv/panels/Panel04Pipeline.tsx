import { PanelHeader } from "@/components/tv/PanelHeader";
import { MetricCard } from "@/components/tv/MetricCard";
import { Briefcase, AlertTriangle, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Panel04Pipeline = () => {
  const stages = [
    { label: "Qualificação", value: 12, amount: "R$ 45k", color: "bg-primary/80" },
    { label: "Proposta", value: 18, amount: "R$ 89k", color: "bg-primary" },
    { label: "Negociação", value: 8, amount: "R$ 156k", color: "bg-success/80" },
    { label: "Fechamento", value: 5, amount: "R$ 78k", color: "bg-success" },
  ];

  const urgentDeals = [
    { name: "Empresa Alpha", value: "R$ 45.000", days: 3 },
    { name: "Tech Solutions", value: "R$ 32.000", days: 1 },
    { name: "Grupo Beta", value: "R$ 28.500", days: 2 },
  ];

  return (
    <div className="tv-panel">
      <PanelHeader 
        title="Pipeline"
        subtitle="Minha carteira está saudável?"
        icon={<Briefcase className="w-10 h-10" />}
      />

      <div className="flex-1">
        <MetricCard
          label="Total em Negociação"
          value="R$ 368.000"
          variant="primary"
          size="lg"
          delay={0.1}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 grid grid-cols-4 gap-4"
        >
          {stages.map((stage, i) => (
            <motion.div
              key={stage.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="text-center"
            >
              <div className={cn("rounded-2xl p-6", stage.color)}>
                <span className="text-5xl font-bold font-display text-foreground">{stage.value}</span>
              </div>
              <p className="text-lg text-muted-foreground mt-3 uppercase">{stage.label}</p>
              <p className="text-xl font-bold text-foreground">{stage.amount}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-destructive" />
            <span className="text-xl text-muted-foreground uppercase">Risco Alto (parados +5 dias)</span>
          </div>
          <div className="space-y-3">
            {urgentDeals.map((deal, i) => (
              <motion.div
                key={deal.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="flex items-center justify-between p-5 bg-destructive/10 rounded-xl border border-destructive/30"
              >
                <span className="font-bold text-foreground text-xl">{deal.name}</span>
                <div className="flex items-center gap-6">
                  <span className="text-2xl font-bold text-foreground">{deal.value}</span>
                  <span className="text-sm text-destructive bg-destructive/20 px-3 py-1 rounded-lg">
                    {deal.days}d parado
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 p-6 bg-warning/10 rounded-2xl border border-warning/30"
        >
          <div className="flex items-center gap-3 mb-3">
            <Clock className="w-6 h-6 text-warning" />
            <span className="text-xl text-warning font-bold">Próximas 24h</span>
          </div>
          <p className="text-foreground text-xl">
            <span className="text-4xl font-bold">8</span> negócios com prazo/urgência
          </p>
        </motion.div>
      </div>
    </div>
  );
};
