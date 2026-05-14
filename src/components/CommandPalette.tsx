import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { Command, Search, Hash, Laptop, Mail, Zap, Terminal } from "lucide-react";

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = [
    { id: "hero", label: "Home / Core", icon: Laptop, shortcut: "H" },
    { id: "about", label: "About / Identity", icon: Hash, shortcut: "A" },
    { id: "portfolio", label: "Work / Projects", icon: Zap, shortcut: "W" },
    { id: "experience", label: "Tech / Experience", icon: Terminal, shortcut: "T" },
    { id: "contact", label: "Connect / Contact", icon: Mail, shortcut: "C" },
  ];

  const filteredCommands = commands.filter(cmd => 
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const handleExecute = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
    setQuery("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="w-full max-w-2xl glass rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border-white/10 relative"
          >
            <div className="p-6 border-b border-white/5 flex items-center gap-4">
              <Search className="w-5 h-5 text-primary" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search commands or navigate Rayflix.OS..."
                className="flex-1 bg-transparent border-none outline-none text-lg font-mono placeholder:text-white/20"
              />
              <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-white/5 border border-white/10">
                <span className="text-[10px] font-mono text-white/40">ESC to close</span>
              </div>
            </div>

            <div className="p-4 max-h-[60vh] overflow-y-auto">
              <div className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] mb-4 px-2">
                Navigation_Modules
              </div>
              
              <div className="space-y-1">
                {filteredCommands.map((cmd) => (
                  <button
                    key={cmd.id}
                    onClick={() => handleExecute(cmd.id)}
                    className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-primary/10 transition-all group border border-transparent hover:border-primary/20 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <cmd.icon className="w-5 h-5 text-white/40 group-hover:text-primary transition-colors" />
                      </div>
                      <div>
                        <div className="text-sm font-bold uppercase tracking-tight text-white/80 group-hover:text-white">
                          {cmd.label}
                        </div>
                        <div className="text-[10px] font-mono text-white/20 group-hover:text-primary/40 uppercase">
                          jump://rayflix.os/{cmd.id}
                        </div>
                      </div>
                    </div>
                    
                    <div className="hidden sm:flex items-center gap-1">
                      <span className="text-[10px] font-mono text-white/10 uppercase group-hover:text-primary/20">Shortcut:</span>
                      <kbd className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-white/40 group-hover:text-primary transition-colors">
                        {cmd.id.charAt(0).toUpperCase()}
                      </kbd>
                    </div>
                  </button>
                ))}

                {filteredCommands.length === 0 && (
                  <div className="py-20 text-center">
                    <div className="text-white/20 font-mono text-sm tracking-tighter italic">No modules found matching "{query}"</div>
                    <div className="text-primary/40 font-mono text-[10px] mt-2 uppercase">Error Code: MODULE_NOT_FOUND</div>
                  </div>
                )}
              </div>
            </div>

            <div className="p-4 bg-black/40 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/20">
              <div className="flex gap-4">
                <span>↑↓ to navigate</span>
                <span>⏎ to select</span>
              </div>
              <div className="flex items-center gap-2">
                <Command className="w-3 h-3" />
                <span>Rayflix.OS v2.4.0</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
