import { motion } from "framer-motion";
import { Crown, Medal, Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface LeaderboardCardProps {
  rank: 1 | 2 | 3;
  name: string;
  avatar?: string;
  value: string | number;
  subtitle?: string;
  delay?: number;
}

export const LeaderboardCard = ({
  rank,
  name,
  avatar,
  value,
  subtitle,
  delay = 0,
}: LeaderboardCardProps) => {
  const getRankStyles = () => {
    switch (rank) {
      case 1:
        return {
          bg: "bg-gradient-to-br from-yellow-500/20 to-amber-600/20 border-yellow-500/50",
          badge: "badge-gold",
          icon: <Crown className="w-6 h-6 text-yellow-400" />,
          size: "scale-105",
        };
      case 2:
        return {
          bg: "bg-gradient-to-br from-gray-400/20 to-gray-500/20 border-gray-400/50",
          badge: "badge-silver",
          icon: <Medal className="w-5 h-5 text-gray-400" />,
          size: "scale-100",
        };
      case 3:
        return {
          bg: "bg-gradient-to-br from-orange-500/20 to-orange-700/20 border-orange-500/50",
          badge: "badge-bronze",
          icon: <Award className="w-5 h-5 text-orange-400" />,
          size: "scale-95",
        };
    }
  };

  const styles = getRankStyles();

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      className={cn(
        "flex items-center gap-4 p-5 rounded-2xl border backdrop-blur-sm",
        styles.bg,
        styles.size
      )}
    >
      <div className="relative">
        <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center overflow-hidden">
          {avatar ? (
            <img src={avatar} alt={name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-2xl font-bold text-muted-foreground">
              {name.charAt(0)}
            </span>
          )}
        </div>
        <div className="absolute -top-1 -right-1">
          {styles.icon}
        </div>
      </div>
      
      <div className="flex-1">
        <h3 className="text-xl font-bold text-foreground">{name}</h3>
        {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      
      <div className="text-right">
        <span className="text-3xl font-bold font-display text-foreground">{value}</span>
        <p className="text-xs text-muted-foreground uppercase">vendas</p>
      </div>
    </motion.div>
  );
};
