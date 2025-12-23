import { PanelHeader } from "@/components/tv/PanelHeader";
import { Briefcase, AlertTriangle, Clock, DollarSign } from "lucide-react";
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

      <div className="flex-1 grid grid-cols-3 gap-4">
        {/* Coluna 1 - Total */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="metric-card bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30 flex flex-col justify-center items-center text-center"
        >
          <DollarSign className="w-12 h-12 text-primary mb-4" />
          <span className="text-xl text-muted-foreground uppercase mb-2">Total em Negociação</span>
          <span className="text-6xl font-bold font-display text-primary">R$ 368k</span>
          <span className="text-muted-foreground text-lg mt-2">43 negócios ativos</span>
        </motion.div>

        {/* Coluna 2 - Estágios */}
        <div className="grid grid-cols-2 gap-3">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="metric-card flex flex-col justify-center items-center text-center"
            >
              <div className={cn("w-full rounded-xl p-4 mb-3", stage.color)}>
                <span className="text-5xl font-bold font-display text-foreground">{stage.value}</span>
              </div>
              <p className="text-lg text-muted-foreground">{stage.label}</p>
              <p className="text-2xl font-bold text-foreground">{stage.amount}</p>
            </motion.div>
          ))}
        </div>

        {/* Coluna 3 - Alertas */}
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="metric-card flex-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-destructive" />
              <span className="text-lg text-muted-foreground uppercase">Risco Alto (+5 dias)</span>
            </div>
            <div className="space-y-3">
              {urgentDeals.map((deal, i) => (
                <motion.div
                  key={deal.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="flex items-center justify-between p-4 bg-destructive/10 rounded-xl border border-destructive/30"
                >
                  <span className="font-bold text-foreground text-lg">{deal.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-foreground text-lg">{deal.value}</span>
                    <span className="text-destructive bg-destructive/20 px-3 py-1 rounded-lg font-bold">
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
            className="metric-card bg-warning/10 border-warning/30 flex items-center gap-4"
          >
            <Clock className="w-10 h-10 text-warning" />
            <div>
              <span className="text-lg text-warning font-bold">Próximas 24h</span>
              <p className="text-foreground">
                <span className="text-4xl font-bold">8</span>
                <span className="text-xl ml-2">negócios com prazo</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};