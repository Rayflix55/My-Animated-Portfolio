import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./UI";
import { HeroBackground } from "./HeroBackground";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yHero = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const ySub = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yTop = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const yGrid = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const orbY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const orbScale = useTransform(scrollYProgress, [0, 1], [1, 1.8]);

  return (
    <section 
      id="hero"
      ref={containerRef}
      className="relative min-h-[140vh] flex flex-col items-center justify-center pt-32 pb-40 overflow-hidden text-center"
    >
      <HeroBackground />
      <div className="container mx-auto px-6 lg:px-20 z-10 relative">
        <motion.div
          style={{ y: yTop, opacity: textOpacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-primary font-mono text-sm mb-6 flex items-center justify-center gap-4"
        >
          <span className="w-12 h-[1px] bg-primary/40"></span>
          JUNIOR FRONTEND DEVELOPER
          <span className="w-12 h-[1px] bg-primary/40"></span>
        </motion.div>

        <motion.h1
          style={{ y: yHero, scale: textScale, opacity: textOpacity }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-[12rem] font-display font-bold leading-[0.85] tracking-tight text-gradient mb-8 md:mb-12 drop-shadow-[0_0_30px_rgba(6,182,212,0.1)]"
        >
          Rayflix
        </motion.h1>

        <motion.div
          style={{ y: ySub, opacity: textOpacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center gap-10"
        >
          <p className="max-w-2xl text-white/40 leading-relaxed font-light text-lg md:text-xl px-4 md:px-0">
            Building modern web solutions with a focus on high-end frontend experiences and intuitive UI. Known as Akpe Samuel.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Button variant="primary" className="px-10 h-16 text-sm">
              Hire Me <ArrowUpRight size={18} />
            </Button>
            <Button variant="outline" className="px-10 h-16 text-sm">
              View Work
            </Button>
          </div>
          
          <div className="flex items-center gap-3 text-[10px] font-mono text-white/30 tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Available for Hire
          </div>
        </motion.div>
      </div>

      {/* Floating Orb Element from Video */}
      <motion.div
        style={{ y: orbY, scale: orbScale }}
        className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[60vw] aspect-video bg-primary/10 blur-[120px] rounded-full -z-10"
      />

      {/* Background 3D Grid from Video */}
      <motion.div 
        style={{ rotateX: 60, y: yGrid }}
        className="absolute bottom-[-30%] left-[-10%] w-[120%] h-[80%] grid-background opacity-10 -z-20 pointer-events-none"
      />
    </section>
  );
}
