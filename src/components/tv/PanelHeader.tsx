import { motion } from "framer-motion";

interface PanelHeaderProps {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
}

export const PanelHeader = ({ title, subtitle, icon }: PanelHeaderProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-6 mb-10"
    >
      {icon && (
        <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
          {icon}
        </div>
      )}
      <div>
        <h1 className="text-5xl md:text-6xl font-bold font-display text-foreground">{title}</h1>
        <p className="text-muted-foreground text-2xl mt-1">{subtitle}</p>
      </div>
    </motion.div>
  );
};
