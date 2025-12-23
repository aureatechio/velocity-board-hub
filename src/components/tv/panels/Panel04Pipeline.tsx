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
        icon={<Briefcase className="w-6 h-6" />}
      />

      {/* Main content - horizontal layout */}
      <div className="flex-1 flex gap-6">
        {/* Left - Total and stages */}
        <div className="flex-1 flex flex-col gap-4">
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
            className="grid grid-cols-4 gap-3 flex-1"
          >
            {stages.map((stage, i) => (
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="metric-card text-center flex flex-col justify-center"
              >
                <div className={cn("rounded-xl p-4 mb-3", stage.color)}>
                  <span className="text-3xl font-bold font-display text-foreground">{stage.value}</span>
                </div>
                <p className="text-sm text-muted-foreground">{stage.label}</p>
                <p className="text-lg font-bold text-foreground">{stage.amount}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right - Alerts */}
        <div className="w-96 flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="metric-card flex-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-5 h-5 text-destructive" />
              <span className="text-sm text-muted-foreground uppercase">Risco Alto (+5 dias)</span>
            </div>
            <div className="space-y-3">
              {urgentDeals.map((deal, i) => (
                <motion.div
                  key={deal.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="flex items-center justify-between p-3 bg-destructive/10 rounded-lg border border-destructive/30"
                >
                  <span className="font-bold text-foreground">{deal.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-foreground">{deal.value}</span>
                    <span className="text-sm text-destructive bg-destructive/20 px-2 py-1 rounded">
                      {deal.days}d
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="metric-card bg-warning/10 border-warning/30"
          >
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-5 h-5 text-warning" />
              <span className="text-base text-warning font-bold">Próximas 24h</span>
            </div>
            <p className="text-foreground">
              <span className="text-3xl font-bold">8</span>
              <span className="text-lg ml-2">negócios com prazo</span>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};