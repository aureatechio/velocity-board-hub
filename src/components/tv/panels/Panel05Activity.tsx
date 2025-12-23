import { PanelHeader } from "@/components/tv/PanelHeader";
import { SpeedMeter } from "@/components/tv/SpeedMeter";
import { Activity, FileText, ArrowRightLeft, Clock, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

export const Panel05Activity = () => {
  return (
    <div className="tv-panel">
      <PanelHeader 
        title="Atividade do Time"
        subtitle="O time está em movimento?"
        icon={<Activity className="w-6 h-6" />}
      />

      <div className="flex-1 grid grid-cols-3 gap-4">
        {/* Coluna 1 - Métricas principais */}
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="metric-card flex-1 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30 flex flex-col justify-center items-center text-center"
          >
            <FileText className="w-10 h-10 text-primary mb-3" />
            <span className="text-lg text-muted-foreground uppercase">Propostas Enviadas</span>
            <span className="text-7xl font-bold font-display text-primary">42</span>
            <p className="text-success text-xl mt-2">+18% vs média</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="metric-card flex-1 bg-gradient-to-br from-success/20 to-success/5 border-success/30 flex flex-col justify-center items-center text-center"
          >
            <ArrowRightLeft className="w-10 h-10 text-success mb-3" />
            <span className="text-lg text-muted-foreground uppercase">Leads Movidos</span>
            <span className="text-7xl font-bold font-display text-success">87</span>
            <p className="text-success text-xl mt-2">+32% vs média</p>
          </motion.div>
        </div>

        {/* Coluna 2 - Ações CRM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="metric-card flex flex-col"
        >
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-8 h-8 text-warning" />
            <span className="text-xl text-muted-foreground uppercase">Ações no CRM Hoje</span>
          </div>
          <div className="flex-1 grid grid-rows-3 gap-4">
            <div className="bg-secondary/50 rounded-xl p-4 flex items-center justify-between">
              <span className="text-xl text-muted-foreground">Qualificações</span>
              <span className="text-5xl font-bold text-foreground">24</span>
            </div>
            <div className="bg-success/10 rounded-xl p-4 flex items-center justify-between">
              <span className="text-xl text-muted-foreground">Negociações</span>
              <span className="text-5xl font-bold text-success">18</span>
            </div>
            <div className="bg-primary/10 rounded-xl p-4 flex items-center justify-between">
              <span className="text-xl text-muted-foreground">Fechamentos</span>
              <span className="text-5xl font-bold text-primary">7</span>
            </div>
          </div>
        </motion.div>

        {/* Coluna 3 - Alertas e Ritmo */}
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="metric-card flex-1 bg-warning/10 border-warning/30 flex flex-col justify-center items-center text-center"
          >
            <Users className="w-10 h-10 text-warning mb-3" />
            <span className="text-lg text-muted-foreground uppercase">Leads Parados +5 dias</span>
            <span className="text-7xl font-bold font-display text-warning">27</span>
            <p className="text-muted-foreground text-lg mt-2">Sem movimentação</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="metric-card flex-1 flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-success" />
              <span className="text-xl text-muted-foreground uppercase">Ritmo do Time</span>
            </div>
            <SpeedMeter level="alto" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};