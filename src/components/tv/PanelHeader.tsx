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
      className="flex items-center gap-3 mb-4"
    >
      {icon && (
        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary shrink-0">
          {icon}
        </div>
      )}
      <div className="min-w-0">
        <h1 className="text-xl md:text-2xl font-bold font-display text-foreground truncate">{title}</h1>
        <p className="text-muted-foreground text-sm truncate">{subtitle}</p>
      </div>
    </motion.div>
  );
};
