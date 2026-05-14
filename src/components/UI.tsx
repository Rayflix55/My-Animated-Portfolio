import { ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";

interface ButtonProps {
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  variant?: "primary" | "outline" | "ghost";
}

export function Button({ children, onClick, className, variant = "primary" }: ButtonProps) {
  const variants = {
    primary: "bg-white text-black hover:bg-primary transition-all font-mono font-bold uppercase tracking-widest",
    outline: "border border-white/10 hover:border-primary hover:text-primary transition-all backdrop-blur-md bg-white/[0.02] font-mono",
    ghost: "text-white/40 hover:text-white transition-colors font-mono",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "px-8 py-4 text-xs flex items-center justify-center gap-2 transition-all relative group overflow-hidden",
        variants[variant],
        className
      )}
      onClick={onClick}
    >
      {variant === "outline" && (
        <>
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-primary transition-colors" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-primary transition-colors" />
        </>
      )}
      {children}
    </motion.button>
  );
}

export function SectionHeader({ title, subtitle, className }: { title: string; subtitle?: string; className?: string }) {
  return (
    <div className={cn("mb-16", className)}>
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-primary font-mono text-xs uppercase tracking-[0.3em] flex items-center gap-4 mb-6"
        >
          <span className="h-[1px] w-12 bg-primary/30" />
          {subtitle}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tighter text-gradient"
      >
        {title}
      </motion.h2>
    </div>
  );
}

export function PerspectiveSection({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("perspective-2000", className)}>
      {children}
    </div>
  );
}

export function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ 
        rotateX: 5, 
        rotateY: -5,
        translateZ: 20,
        scale: 1.02
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ transformStyle: "preserve-3d" }}
      className={cn("relative", className)}
    >
      {children}
    </motion.div>
  );
}
