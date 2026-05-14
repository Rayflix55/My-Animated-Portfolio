import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { SectionHeader } from "./UI";
import { Experience3D } from "./SectionBackgrounds";

const experience = [
  { year: "2024", role: "Frontend Developer", company: "CyberNexus", desc: "Building high-performance user interfaces and contributing to scalable modular frontend architectures." },
  { year: "2023", role: "Junior Developer", company: "MetaVerse Lab", desc: "Assisting in building virtual interface components and optimizing frontend performance." },
  { year: "2022", role: "Frontend Developer", company: "Luma Creative", desc: "Developing interactive web modules and ensuring seamless cross-platform experiences." },
  { year: "2021", role: "Developer Intern", company: "Quantico", desc: "Assisting the core team in interface design and frontend dashboard development." },
];

function ExperienceItem({ item, index }: { item: typeof experience[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [-20, 0, 20]);
  const blur = useTransform(scrollYProgress, [0, 0.5, 1], [4, 0, 4]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, x, filter: `blur(${blur}px)` }}
      className="group p-6 md:p-10 engineered-border bg-white/[0.01] hover:bg-white/[0.03] transition-colors cursor-default relative mb-12"
    >
      {/* Engineered UI Elements */}
      <div className="absolute top-0 right-0 p-4 text-[10px] font-mono text-white/5 uppercase tracking-[0.2em] group-hover:text-primary/20 transition-colors">
        LOG_ENTRY_{index + 1}
      </div>
      
      <div className="grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-3">
          <div className="font-mono text-primary/60 text-xs tracking-[0.4em] mb-2 uppercase italic">Status: Success</div>
          <div className="text-4xl md:text-5xl font-mono font-black text-white/10 group-hover:text-primary/20 transition-colors">{item.year}</div>
        </div>

        <div className="lg:col-span-6">
          <h3 className="text-2xl md:text-4xl font-display font-black tracking-tighter uppercase group-hover:text-white transition-colors text-white/60 mb-4">
            {item.role}
          </h3>
          <p className="text-white/30 text-sm font-light leading-relaxed max-w-md group-hover:text-white/50 transition-colors">
            {item.desc}
          </p>
        </div>

        <div className="lg:col-span-3 flex justify-end items-center gap-4">
          <span className="text-white/20 uppercase tracking-[0.3em] font-mono text-[10px]">{item.company}</span>
          <div className="w-16 h-[1px] bg-white/10 group-hover:w-24 group-hover:bg-primary/40 transition-all duration-500" />
        </div>
      </div>
      
      <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-white/10 group-hover:border-primary transition-colors"></div>
    </motion.div>
  );
}

export function Experience() {
  return (
    <section className="py-40 container mx-auto px-6 md:px-10 lg:px-20 relative" id="experience">
      <Experience3D />
      {/* Narrative Progress Line */}
      <div className="absolute left-10 lg:left-20 top-80 bottom-40 w-[1px] bg-white/5 hidden md:block">
        <motion.div 
          className="absolute top-0 left-0 w-full bg-primary"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>

      <div className="relative">
        <SectionHeader 
          subtitle="03 // History" 
          title="Awards & Experiences" 
          className="mb-24"
        />

        <div className="md:pl-12 lg:pl-16">
          {experience.map((item, i) => (
            <div key={i}>
              <ExperienceItem item={item} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
