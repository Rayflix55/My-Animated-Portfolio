import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { useRef } from "react";
import { SectionHeader, TiltCard, PerspectiveSection } from "./UI";
import { WorkProcess3D } from "./SectionBackgrounds";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "Analyzing visual systems and mapping core user flows for mission-critical software."
  },
  {
    num: "02",
    title: "Design",
    desc: "Crafting cinematic UI architectures that prioritize both aesthetics and raw performance."
  },
  {
    num: "03",
    title: "Development",
    desc: "Engineering pixel-perfect components with smooth-motion curves and clean code."
  },
  {
    num: "04",
    title: "Deployment",
    desc: "Optimizing assets for 60fps performance and deploying to global cloud networks."
  }
];

function ProcessStep({ step, index, scrollYProgress }: { step: typeof steps[0], index: number, scrollYProgress: MotionValue<number> }) {
  const y = useTransform(scrollYProgress, [0, 1], [0, index % 2 === 0 ? -100 : 100]);
  
  return (
    <motion.div style={{ y }} className="h-full">
      <TiltCard className="engineered-border bg-white/[0.01] hover:bg-white/[0.03] p-10 h-full transition-colors group relative overflow-hidden">
        <div className="text-primary font-mono text-xs mb-8 tracking-widest italic group-hover:text-white transition-colors translate-z-10">INIT_STEP_{step.num}</div>
        <h3 className="text-3xl font-display font-black uppercase tracking-tighter mb-4 translate-z-20">{step.title}</h3>
        <p className="text-white/40 text-sm font-light leading-relaxed mb-8 translate-z-10">{step.desc}</p>
        
        <div className="absolute bottom-[-10%] right-[-5%] text-white/5 text-[10rem] font-display font-black italic tracking-tighter transition-all group-hover:text-primary/5">
          {step.num}
        </div>
      </TiltCard>
    </motion.div>
  );
}

export function WorkProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={sectionRef} className="py-40 container mx-auto px-6 lg:px-20 relative" id="tech">
      <WorkProcess3D />
      <SectionHeader 
        subtitle="05 // Pipeline" 
        title="Work Process" 
      />

      <PerspectiveSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 min-h-[600px]">
        {steps.map((s, i) => (
          <div key={i} className="h-full">
            <ProcessStep step={s} index={i} scrollYProgress={scrollYProgress} />
          </div>
        ))}
      </PerspectiveSection>
    </section>
  );
}
