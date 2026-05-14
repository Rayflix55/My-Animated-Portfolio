import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Settings, Check } from "lucide-react";

const ACCENTS = [
  { name: "Cyan", primary: "#06b6d4", accent: "#3b82f6" },
  { name: "Emerald", primary: "#10b981", accent: "#059669" },
  { name: "Purple", primary: "#a855f7", accent: "#7c3aed" },
  { name: "Rose", primary: "#f43f5e", accent: "#e11d48" },
  { name: "Amber", primary: "#f59e0b", accent: "#d97706" },
];

export function ThemeToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeAccent, setActiveAccent] = useState(ACCENTS[0]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--primary", activeAccent.primary);
    root.style.setProperty("--accent", activeAccent.accent);
  }, [activeAccent]);

  return (
    <div className="fixed bottom-10 left-10 z-[100] hidden md:block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 glass flex items-center justify-center hover:border-primary/50 transition-colors group rounded-full"
      >
        <Settings className={`w-5 h-5 transition-transform duration-700 ${isOpen ? 'rotate-180' : 'group-hover:rotate-90'}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.9 }}
            className="absolute bottom-16 left-0 glass p-4 rounded-2xl min-w-[200px]"
          >
            <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-4 border-b border-white/5 pb-2">
              System_Accents
            </div>
            <div className="space-y-2">
              {ACCENTS.map((accent) => (
                <button
                  key={accent.name}
                  onClick={() => setActiveAccent(accent)}
                  className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors group ${
                    activeAccent.name === accent.name ? 'bg-primary/10' : 'hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: accent.primary }}
                    />
                    <span className={`text-xs font-mono transition-colors ${
                      activeAccent.name === accent.name ? 'text-primary' : 'text-white/60'
                    }`}>
                      {accent.name.toUpperCase()}
                    </span>
                  </div>
                  {activeAccent.name === accent.name && (
                    <Check className="w-3 h-3 text-primary" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
