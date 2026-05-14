import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Cpu, Zap, Globe, Layers, Github, Twitter, Linkedin } from "lucide-react";
import { SectionHeader, TiltCard, PerspectiveSection } from "./UI";
import { About3D } from "./SectionBackgrounds";

export function AboutMe() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const leftY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const rightY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const stats = [
    { label: "Years Experience", value: "3+", sub: "Professional focus" },
    { label: "Successful Projects", value: "50+", sub: "Delivered solutions" },
  ];

  const skillStacks = [
    { icon: <Cpu size={18} />, title: "React / Frontend", tech: "Next.js, Tailwind, Motion" },
    { icon: <Layers size={18} />, title: "Svelte / Modern Web", tech: "SvelteKit, Reactive UI" },
    { icon: <Zap size={18} />, title: "Node.js / Backend", tech: "Express, PostgreSQL, Firebase" },
    { icon: <Globe size={18} />, title: "UI Architecture", tech: "Design Systems, Animations" },
  ];

  return (
    <section ref={sectionRef} className="py-40 container mx-auto px-6 lg:px-20 relative" id="about">
      <About3D />
      <SectionHeader 
        subtitle="01 // Profile" 
        title="About Me" 
      />

      <PerspectiveSection className="grid lg:grid-cols-2 gap-12 items-start mt-12">
        <motion.div style={{ y: leftY }} className="space-y-6">
          <TiltCard className="engineered-border bg-white/[0.02] p-10 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 text-[10px] font-mono text-white/5 uppercase tracking-widest">Stack_Catalog</div>
            <h3 className="text-xl font-display font-bold uppercase tracking-wider mb-8">Technical Proficiency</h3>
            <div className="space-y-4">
              {skillStacks.map((stack, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 10 }}
                  className="p-4 border border-white/5 bg-white/[0.01] flex items-center gap-4 group hover:border-primary/30 transition-colors"
                >
                  <div className="text-primary group-hover:scale-110 transition-transform">{stack.icon}</div>
                  <div>
                    <div className="text-sm font-bold text-white/80">{stack.title}</div>
                    <div className="text-[10px] font-mono text-white/20 uppercase tracking-tighter">{stack.tech}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TiltCard>

          <div className="grid sm:grid-cols-2 gap-6">
            {stats.map((s, i) => (
              <div key={i}>
                <TiltCard className="engineered-border bg-white/[0.02] p-8 group hover:border-primary/40 transition-colors">
                  <div className="text-4xl font-display font-black text-primary mb-2 group-hover:scale-110 transition-transform origin-left">{s.value}</div>
                  <div className="text-sm font-bold uppercase tracking-wider text-white/80">{s.label}</div>
                  <div className="text-[10px] font-mono text-white/20 uppercase mt-1">{s.sub}</div>
                </TiltCard>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div style={{ y: rightY }} className="relative">
          <div className="relative z-10 space-y-6">
            <p className="text-xl sm:text-2xl font-light text-white/60 leading-relaxed italic">
              "I am Akpe Samuel, popularly known as Rayflix. I build frontend applications that combine robust engineering with engaging user experiences."
            </p>
            <p className="text-white/40 leading-relaxed">
              Based on a passion for technology and creative problem-solving, I collaborate with clients and teams to bring innovative digital ideas to life. I specialize in the modern web ecosystem, focusing on scalability and performance.
            </p>
            
            <TiltCard className="pt-8">
               <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=500&h=300" 
                alt="Profile" 
                className="w-full h-64 object-cover grayscale opacity-50 hover:grayscale-0 transition-all duration-700 engineered-border"
              />
            </TiltCard>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl -z-10" />
        </motion.div>
      </PerspectiveSection>
    </section>
  );
}
