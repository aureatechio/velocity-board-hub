import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Monitor, Maximize2 } from "lucide-react";
import { Panel01Scoreboard } from "@/components/tv/panels/Panel01Scoreboard";
import { Panel02Leaderboard } from "@/components/tv/panels/Panel02Leaderboard";
import { Panel03Funnel } from "@/components/tv/panels/Panel03Funnel";
import { Panel04Pipeline } from "@/components/tv/panels/Panel04Pipeline";
import { Panel05Activity } from "@/components/tv/panels/Panel05Activity";
import { Panel06SLA } from "@/components/tv/panels/Panel06SLA";
import { Panel07Proposals } from "@/components/tv/panels/Panel07Proposals";
import { Panel08SalesMix } from "@/components/tv/panels/Panel08SalesMix";
import { Panel09Ads } from "@/components/tv/panels/Panel09Ads";
import { Panel10Forecast } from "@/components/tv/panels/Panel10Forecast";
import { Panel11Alerts } from "@/components/tv/panels/Panel11Alerts";
import { cn } from "@/lib/utils";

const panels = [
  { id: 1, name: "Placar do Dia", component: Panel01Scoreboard },
  { id: 2, name: "Top Vendedores", component: Panel02Leaderboard },
  { id: 3, name: "Funil do Dia", component: Panel03Funnel },
  { id: 4, name: "Pipeline", component: Panel04Pipeline },
  { id: 5, name: "Atividade", component: Panel05Activity },
  { id: 6, name: "Velocidade SLA", component: Panel06SLA },
  { id: 7, name: "Propostas", component: Panel07Proposals },
  { id: 8, name: "Mix & Ticket", component: Panel08SalesMix },
  { id: 9, name: "Ads", component: Panel09Ads },
  { id: 10, name: "Previsão", component: Panel10Forecast },
  { id: 11, name: "Alertas", component: Panel11Alerts },
];

const Index = () => {
  const [currentPanel, setCurrentPanel] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [autoRotate, setAutoRotate] = useState(false);

  const CurrentPanelComponent = panels[currentPanel].component;

  const nextPanel = () => {
    setCurrentPanel((prev) => (prev + 1) % panels.length);
  };

  const prevPanel = () => {
    setCurrentPanel((prev) => (prev - 1 + panels.length) % panels.length);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    if (autoRotate) {
      const interval = setInterval(nextPanel, 15000);
      return () => clearInterval(interval);
    }
  }, [autoRotate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextPanel();
      if (e.key === "ArrowLeft") prevPanel();
      if (e.key === "f") toggleFullscreen();
      if (e.key === " ") setAutoRotate((prev) => !prev);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-card border-b border-border px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Monitor className="w-5 h-5 text-primary" />
            <h1 className="text-lg font-bold font-display text-foreground">Sales TV Panel</h1>
          </div>
          <div className="h-5 w-px bg-border" />
          <span className="text-xs text-muted-foreground">
            Painel {currentPanel + 1} de {panels.length}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs font-medium transition-colors",
              autoRotate
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            )}
          >
            {autoRotate ? "⏸ Pausar" : "▶ Auto Rotação"}
          </button>
          <button
            onClick={toggleFullscreen}
            className="p-1.5 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Panel Navigation */}
      <nav className="bg-card/50 border-b border-border px-2 py-1 flex gap-1 overflow-x-auto">
        {panels.map((panel, i) => (
          <button
            key={panel.id}
            onClick={() => setCurrentPanel(i)}
            className={cn(
              "px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all",
              currentPanel === i
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            )}
          >
            {panel.id}. {panel.name}
          </button>
        ))}
      </nav>

      {/* Main Panel Area - Full Screen */}
      <main className="flex-1 relative overflow-hidden">
        <button
          onClick={prevPanel}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/80 border border-border hover:bg-secondary transition-colors z-10"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentPanel}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="h-full overflow-y-auto"
          >
            <CurrentPanelComponent />
          </motion.div>
        </AnimatePresence>

        <button
          onClick={nextPanel}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/80 border border-border hover:bg-secondary transition-colors z-10"
        >
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>
      </main>
    </div>
  );
};

export default Index;
