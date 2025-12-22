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
          icon: <Crown className="w-5 h-5 text-yellow-400" />,
        };
      case 2:
        return {
          bg: "bg-gradient-to-br from-gray-400/20 to-gray-500/20 border-gray-400/50",
          badge: "badge-silver",
          icon: <Medal className="w-4 h-4 text-gray-400" />,
        };
      case 3:
        return {
          bg: "bg-gradient-to-br from-orange-500/20 to-orange-700/20 border-orange-500/50",
          badge: "badge-bronze",
          icon: <Award className="w-4 h-4 text-orange-400" />,
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
        "flex items-center gap-3 p-3 rounded-xl border backdrop-blur-sm",
        styles.bg
      )}
    >
      <div className="relative shrink-0">
        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center overflow-hidden">
          {avatar ? (
            <img src={avatar} alt={name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-lg font-bold text-muted-foreground">
              {name.charAt(0)}
            </span>
          )}
        </div>
        <div className="absolute -top-1 -right-1">
          {styles.icon}
        </div>
      </div>
      
      <div className="flex-1 min-w-0">
        <h3 className="text-base font-bold text-foreground truncate">{name}</h3>
        {subtitle && <p className="text-xs text-muted-foreground truncate">{subtitle}</p>}
      </div>
      
      <div className="text-right shrink-0">
        <span className="text-xl font-bold font-display text-foreground">{value}</span>
        <p className="text-xs text-muted-foreground">vendas</p>
      </div>
    </motion.div>
  );
};
