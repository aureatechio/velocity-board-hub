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
        icon={<Activity className="w-5 h-5" />}
      />

      <div className="flex-1 space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="metric-card"
          >
            <div className="flex items-center gap-2 mb-1">
              <FileText className="w-4 h-4 text-primary" />
              <span className="metric-label">Propostas</span>
            </div>
            <span className="text-3xl font-bold font-display text-foreground">42</span>
            <p className="text-xs text-success">+18% vs média</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="metric-card"
          >
            <div className="flex items-center gap-2 mb-1">
              <ArrowRightLeft className="w-4 h-4 text-success" />
              <span className="metric-label">Leads Movidos</span>
            </div>
            <span className="text-3xl font-bold font-display text-foreground">87</span>
            <p className="text-xs text-success">+32% vs média</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="metric-card"
        >
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-4 h-4 text-warning" />
            <span className="text-sm text-muted-foreground uppercase">Ações no CRM Hoje</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-center flex-1">
              <span className="text-xs text-muted-foreground">Qualific.</span>
              <p className="text-2xl font-bold text-foreground">24</p>
            </div>
            <div className="text-center px-3 border-x border-border flex-1">
              <span className="text-xs text-muted-foreground">Negoc.</span>
              <p className="text-2xl font-bold text-success">18</p>
            </div>
            <div className="text-center flex-1">
              <span className="text-xs text-muted-foreground">Fecham.</span>
              <p className="text-2xl font-bold text-primary">7</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="metric-card bg-warning/10 border-warning/30"
        >
          <div className="flex items-center gap-2 mb-1">
            <Users className="w-4 h-4 text-warning" />
            <span className="text-sm text-muted-foreground uppercase">Leads Parados +5d</span>
          </div>
          <span className="text-3xl font-bold font-display text-warning">27</span>
          <p className="text-xs text-muted-foreground">Sem movimentação</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="metric-card"
        >
          <SpeedMeter level="alto" label="Ritmo do Time" />
        </motion.div>
      </div>
    </div>
  );
};
