import { PanelHeader } from "@/components/tv/PanelHeader";
import { SpeedMeter } from "@/components/tv/SpeedMeter";
import { Activity, FileText, ArrowRightLeft, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";

export const Panel05Activity = () => {
  return (
    <div className="tv-panel">
      <PanelHeader 
        title="Atividade do Time"
        subtitle="O time está em movimento?"
        icon={<Activity className="w-4 h-4" />}
      />

      <div className="flex-1 grid grid-cols-4 gap-3 mt-3">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="metric-card"
        >
          <div className="flex items-center gap-1 mb-1">
            <FileText className="w-3 h-3 text-primary" />
            <span className="metric-label">Propostas</span>
          </div>
          <span className="text-xl font-bold font-display text-foreground">42</span>
          <p className="text-xs text-success">+18% vs média</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="metric-card"
        >
          <div className="flex items-center gap-1 mb-1">
            <ArrowRightLeft className="w-3 h-3 text-success" />
            <span className="metric-label">Leads Movidos</span>
          </div>
          <span className="text-xl font-bold font-display text-foreground">87</span>
          <p className="text-xs text-success">+32% vs média</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="metric-card"
        >
          <div className="flex items-center gap-1 mb-2">
            <Clock className="w-3 h-3 text-warning" />
            <span className="text-xs text-muted-foreground uppercase">Ações CRM</span>
          </div>
          <div className="flex items-center justify-between text-center">
            <div className="flex-1">
              <span className="text-xs text-muted-foreground">Qual.</span>
              <p className="text-lg font-bold text-foreground">24</p>
            </div>
            <div className="flex-1 border-x border-border">
              <span className="text-xs text-muted-foreground">Neg.</span>
              <p className="text-lg font-bold text-success">18</p>
            </div>
            <div className="flex-1">
              <span className="text-xs text-muted-foreground">Fech.</span>
              <p className="text-lg font-bold text-primary">7</p>
            </div>
          </div>
        </motion.div>

        <div className="space-y-2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="metric-card bg-warning/10 border-warning/30"
          >
            <div className="flex items-center gap-1 mb-1">
              <Users className="w-3 h-3 text-warning" />
              <span className="text-xs text-muted-foreground uppercase">Parados +5d</span>
            </div>
            <span className="text-xl font-bold font-display text-warning">27</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="metric-card"
          >
            <SpeedMeter level="alto" label="Ritmo" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
