import { PanelHeader } from "@/components/tv/PanelHeader";
import { MetricCard } from "@/components/tv/MetricCard";
import { SpeedMeter } from "@/components/tv/SpeedMeter";
import { Activity, Phone, MessageCircle, Calendar, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";

export const Panel05Activity = () => {
  return (
    <div className="tv-panel">
      <PanelHeader 
        title="Atividade do Time"
        subtitle="O time está em movimento?"
        icon={<Activity className="w-6 h-6" />}
      />

      <div className="flex-1 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="metric-card"
          >
            <div className="flex items-center gap-2 mb-2">
              <Phone className="w-5 h-5 text-primary" />
              <span className="metric-label">Ligações Hoje</span>
            </div>
            <span className="text-5xl font-bold font-display text-foreground">156</span>
            <p className="text-sm text-success mt-1">+23% vs média</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="metric-card"
          >
            <div className="flex items-center gap-2 mb-2">
              <MessageCircle className="w-5 h-5 text-success" />
              <span className="metric-label">WhatsApp Hoje</span>
            </div>
            <span className="text-5xl font-bold font-display text-foreground">342</span>
            <p className="text-sm text-success mt-1">+45% vs média</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="metric-card"
        >
          <div className="flex items-center gap-2 mb-3">
            <RotateCcw className="w-5 h-5 text-warning" />
            <span className="text-sm text-muted-foreground uppercase">Follow-ups</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-muted-foreground text-sm">Previstos</span>
              <p className="text-4xl font-bold text-foreground">48</p>
            </div>
            <div className="text-center px-6 border-x border-border">
              <span className="text-muted-foreground text-sm">Feitos</span>
              <p className="text-4xl font-bold text-success">32</p>
            </div>
            <div>
              <span className="text-muted-foreground text-sm">Pendentes</span>
              <p className="text-4xl font-bold text-warning">16</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="metric-card"
        >
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground uppercase">Reuniões Agendadas Hoje</span>
          </div>
          <span className="text-5xl font-bold font-display text-primary">12</span>
          <p className="text-sm text-muted-foreground mt-2">3 realizadas • 9 restantes</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="metric-card bg-warning/10 border-warning/30"
        >
          <span className="text-sm text-muted-foreground uppercase">Contatos Sem Retorno</span>
          <span className="text-4xl font-bold font-display text-warning block mt-2">27</span>
          <p className="text-xs text-muted-foreground mt-1">Aguardando há mais de 24h</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="metric-card"
        >
          <SpeedMeter level="alto" label="Ritmo do Time" />
        </motion.div>
      </div>
    </div>
  );
};
