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
        icon={<Activity className="w-6 h-6" />}
      />

      {/* Main content - horizontal layout */}
      <div className="flex-1 flex gap-6">
        {/* Left - Main activity metrics */}
        <div className="flex-1 grid grid-cols-2 gap-4 content-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="metric-card"
          >
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-5 h-5 text-primary" />
              <span className="metric-label">Propostas Enviadas</span>
            </div>
            <span className="text-4xl font-bold font-display text-foreground">42</span>
            <p className="text-success text-base mt-2">+18% vs média</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="metric-card"
          >
            <div className="flex items-center gap-3 mb-3">
              <ArrowRightLeft className="w-5 h-5 text-success" />
              <span className="metric-label">Leads Movidos</span>
            </div>
            <span className="text-4xl font-bold font-display text-foreground">87</span>
            <p className="text-success text-base mt-2">+32% vs média</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="metric-card col-span-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-5 h-5 text-warning" />
              <span className="text-base text-muted-foreground uppercase">Ações no CRM Hoje</span>
            </div>
            <div className="flex items-center justify-around">
              <div className="text-center">
                <span className="text-sm text-muted-foreground">Qualificações</span>
                <p className="text-3xl font-bold text-foreground">24</p>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div className="text-center">
                <span className="text-sm text-muted-foreground">Negociações</span>
                <p className="text-3xl font-bold text-success">18</p>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div className="text-center">
                <span className="text-sm text-muted-foreground">Fechamentos</span>
                <p className="text-3xl font-bold text-primary">7</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right - Alerts and Speed */}
        <div className="w-80 flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="metric-card bg-warning/10 border-warning/30"
          >
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-5 h-5 text-warning" />
              <span className="text-base text-muted-foreground uppercase">Leads Parados +5 dias</span>
            </div>
            <span className="text-4xl font-bold font-display text-warning">27</span>
            <p className="text-muted-foreground mt-2">Sem movimentação</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="metric-card flex-1 flex flex-col justify-center"
          >
            <SpeedMeter level="alto" label="Ritmo do Time" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};