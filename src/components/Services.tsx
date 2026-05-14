import { motion } from "motion/react";
import { Code, Palette, Zap, Globe, Cpu, Smartphone } from "lucide-react";
import { SectionHeader, TiltCard, PerspectiveSection } from "./UI";
import { Services3D } from "./SectionBackgrounds";

const services = [
  {
    icon: <Code className="text-primary" size={32} />,
    title: "Web App Development",
    desc: "Build clean, performant code with modern frameworks.",
    size: "md:col-span-2",
  },
  {
    icon: <Palette className="text-primary" size={32} />,
    title: "UI Design",
    desc: "Cinematic, user-centric interfaces designed in Figma.",
    size: "col-span-1",
  },
  {
    icon: <Zap className="text-primary" size={32} />,
    title: "Performance",
    desc: "Optimization for 60fps animations and rapid load times.",
    size: "col-span-1",
  },
  {
    icon: <Cpu className="text-primary" size={32} />,
    title: "AI Integration",
    desc: "Seamlessly integrate AI into your products for smarter user flows.",
    size: "md:col-span-2",
  },
];

export function Services() {
  return (
    <section className="py-40 container mx-auto px-6 lg:px-20 relative" id="services">
      <Services3D />
      <SectionHeader 
        subtitle="04 // Capabilities" 
        title="Services I Offer" 
      />
      
      <PerspectiveSection className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {services.map((s, i) => (
          <div key={i} className={s.size}>
            <TiltCard
              className={`engineered-border p-10 bg-white/[0.01] hover:bg-white/[0.03] transition-colors group relative overflow-hidden h-full`}
            >
              <div className="mb-8 opacity-40 group-hover:opacity-100 transition-opacity translate-z-20">{s.icon}</div>
              <h3 className="text-3xl font-display font-black mb-4 uppercase tracking-tighter translate-z-10">{s.title}</h3>
              <p className="text-white/40 leading-relaxed font-light text-sm max-w-xs">{s.desc}</p>
              
              <div className="mt-8 flex items-center gap-2 group/btn cursor-pointer">
                <span className="text-[10px] font-mono text-primary/40 group-hover/btn:text-primary transition-colors tracking-widest uppercase italic">Explore Module</span>
                <div className="h-[1px] w-0 group-hover/btn:w-8 bg-primary/40 transition-all duration-300" />
              </div>
              
              <div className="absolute top-0 right-0 p-4 font-mono text-white/5 text-6xl font-black italic tracking-tighter">
                {i + 1}
              </div>
            </TiltCard>
          </div>
        ))}
      </PerspectiveSection>
    </section>
  );
}
