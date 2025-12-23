import { PanelHeader } from "@/components/tv/PanelHeader";
import { MetricCard } from "@/components/tv/MetricCard";
import { Briefcase, AlertTriangle, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Panel04Pipeline = () => {
  const stages = [
    { label: "Qualif.", value: 12, amount: "R$ 45k", color: "bg-primary/80" },
    { label: "Proposta", value: 18, amount: "R$ 89k", color: "bg-primary" },
    { label: "Negoc.", value: 8, amount: "R$ 156k", color: "bg-success/80" },
    { label: "Fecham.", value: 5, amount: "R$ 78k", color: "bg-success" },
  ];

  const urgentDeals = [
    { name: "Empresa Alpha", value: "R$ 45.000", days: 3 },
    { name: "Tech Solutions", value: "R$ 32.000", days: 1 },
  ];

  return (
    <div className="tv-panel">
      <PanelHeader 
        title="Pipeline"
        subtitle="Minha carteira está saudável?"
        icon={<Briefcase className="w-4 h-4" />}
      />

      <div className="flex-1 grid grid-cols-3 gap-3 mt-3">
        {/* Left - Total and Stages */}
        <div className="space-y-2">
          <MetricCard
            label="Total em Negociação"
            value="R$ 368.000"
            variant="primary"
            size="md"
            delay={0.1}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-4 gap-1"
          >
            {stages.map((stage, i) => (
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="text-center"
              >
                <div className={cn("rounded p-2", stage.color)}>
                  <span className="text-lg font-bold font-display text-foreground">{stage.value}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{stage.label}</p>
                <p className="text-xs font-bold text-foreground">{stage.amount}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Center - Urgent Deals */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="metric-card"
        >
          <div className="flex items-center gap-1 mb-2">
            <AlertTriangle className="w-3 h-3 text-destructive" />
            <span className="text-xs text-muted-foreground uppercase">Risco Alto</span>
          </div>
          <div className="space-y-1">
            {urgentDeals.map((deal, i) => (
              <motion.div
                key={deal.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="flex items-center justify-between p-1.5 bg-destructive/10 rounded border border-destructive/30"
              >
                <span className="font-bold text-foreground text-xs truncate">{deal.name}</span>
                <div className="flex items-center gap-1 shrink-0">
                  <span className="text-xs font-bold text-foreground">{deal.value}</span>
                  <span className="text-xs text-destructive bg-destructive/20 px-1 py-0.5 rounded">
                    {deal.days}d
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right - 24h Alert */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="metric-card bg-warning/10 border-warning/30 flex flex-col justify-center"
        >
          <div className="flex items-center gap-1 mb-1">
            <Clock className="w-3 h-3 text-warning" />
            <span className="text-xs text-warning font-bold">Próximas 24h</span>
          </div>
          <p className="text-foreground text-sm">
            <span className="text-xl font-bold">8</span> negócios com prazo
          </p>
        </motion.div>
      </div>
    </div>
  );
};
