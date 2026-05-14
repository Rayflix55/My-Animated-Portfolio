import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./UI";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Work", id: "portfolio" },
    { name: "Tech", id: "experience" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
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
  };

  return (
    <>
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "p-4 md:p-6" 
            : "p-6 md:p-10"
        }`}
      >
        <div className={`container mx-auto flex items-center justify-between transition-all duration-500 ${
          scrolled 
            ? "glass border border-white/10 p-3 md:px-8 shadow-2xl rounded-2xl" 
            : "bg-transparent"
        }`}>
          <div className="flex items-center gap-4">
            <div 
              onClick={(e) => handleNavClick(e, 'hero')}
              className="w-10 h-10 border border-primary/30 flex items-center justify-center relative bg-white/[0.02] backdrop-blur-md group cursor-pointer overflow-hidden rounded-sm"
            >
              <span className="text-primary font-mono text-xs font-bold relative z-10 transition-transform group-hover:scale-125">RF</span>
              <div className="absolute inset-0 bg-primary/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <div className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-primary"></div>
            </div>
            <div className="hidden sm:block">
              <div className="text-[10px] font-mono text-primary/60 tracking-[0.2em] uppercase">Rayflix.OS</div>
              <div className="text-sm font-bold tracking-tighter uppercase whitespace-nowrap">Frontend Developer</div>
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-8 text-[11px] font-mono tracking-[0.2em] uppercase">
            <div className="hidden xl:flex items-center gap-6">
              {navLinks.map((link, i) => (
                <a 
                  key={link.name} 
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className="hover:text-primary transition-colors text-white/50 hover:text-white"
                >
                  <span className="text-primary/40 mr-1">0{i+1}_</span>{link.name}
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-3">
              <Button 
                variant="primary" 
                className="px-4 md:px-6 py-2 h-9 md:h-10 flex items-center text-[10px] md:text-[11px]"
                onClick={(e) => handleNavClick(e as any, 'contact')}
              >
                Hire Me
              </Button>
              
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden w-9 h-9 border border-white/10 flex items-center justify-center hover:border-primary/50 transition-colors bg-white/[0.05] backdrop-blur-md rounded-sm"
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] lg:hidden"
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-[80%] max-w-sm h-full bg-background border-l border-white/10 z-[70] lg:hidden p-10 flex flex-col justify-center"
            >
              <div className="absolute top-10 right-10">
                <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-primary transition-colors">
                  <X size={32} strokeWidth={1} />
                </button>
              </div>

              <div className="space-y-6">
                {navLinks.map((link, i) => (
                  <motion.div 
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <a 
                      href={`#${link.id}`}
                      onClick={(e) => handleNavClick(e, link.id)}
                      className="block text-3xl font-display font-bold uppercase tracking-tighter hover:text-primary transition-colors text-white/80"
                    >
                      <span className="text-primary text-[10px] font-mono block mb-1">0{i+1}_//</span>
                      {link.name}
                    </a>
                  </motion.div>
                ))}
              </div>

              <div className="mt-20 pt-10 border-t border-white/5">
                <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest mb-4">Connection_Terminal</div>
                <div className="flex gap-6">
                  {["IN", "TW", "GH"].map((social) => (
                    <a key={social} href="#" className="text-xs font-mono text-white/40 hover:text-primary transition-colors">
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
