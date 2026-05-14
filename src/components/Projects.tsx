import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader, TiltCard, PerspectiveSection } from "./UI";
import { Projects3D } from "./SectionBackgrounds";

const projects = [
  {
    title: "Quantum Flux",
    category: "AI / Web Design",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1964",
    link: "#",
  },
  {
    title: "Nova Dashboard",
    category: "Fintech Interface",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=2070",
    link: "#",
  },
  {
    title: "Cortex OS",
    category: "System Design",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072",
    link: "#",
  },
  {
    title: "Luma Creative",
    category: "Brand Portal",
    image: "https://images.unsplash.com/photo-1541462608141-ad4d156ec6b4?auto=format&fit=crop&q=80&w=2070",
    link: "#",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [index % 2 === 0 ? 10 : -10, 0, index % 2 === 0 ? -10 : 10]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div 
      ref={ref}
      style={{ y, rotateX, rotateY, scale, opacity }} 
      className="h-full preserve-3d"
    >
      <TiltCard className="group relative overflow-hidden aspect-[4/5] md:aspect-[3/4] engineered-border bg-black">
        <motion.img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
        
        <div className="absolute top-0 right-0 p-4 text-[10px] font-mono text-white/20 tracking-tighter uppercase translate-z-20">{project.category}</div>

        <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end translate-z-40">
          <div>
            <h3 className="text-4xl font-display font-black uppercase tracking-tighter mb-2 group-hover:text-primary transition-colors leading-none translate-z-20">{project.title}</h3>
            <div className="flex gap-3 translate-z-10">
               <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">Archived_V1</span>
               <span className="text-[10px] font-mono text-primary/40 uppercase tracking-[0.2em] animate-pulse">Running</span>
            </div>
          </div>
          <motion.div 
            whileHover={{ rotate: 45, scale: 1.1, translateZ: 50 }}
            className="w-14 h-14 border border-white/20 flex items-center justify-center text-white group-hover:border-primary group-hover:text-primary transition-all bg-black/40 backdrop-blur-md"
          >
            <ArrowUpRight size={28} />
          </motion.div>
        </div>
        
        <a href={project.link} className="absolute inset-0 z-10" aria-label={`View ${project.title} project`} />
        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-white/10 group-hover:border-primary transition-colors"></div>
      </TiltCard>
    </motion.div>
  );
}

export function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="py-40 md:py-60 container mx-auto px-6 lg:px-20 relative" id="portfolio">
      <Projects3D />
      <SectionHeader 
        subtitle="02 // Showcase" 
        title="Featured Work" 
      />

      <PerspectiveSection className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32 mt-20">
        {projects.map((p, i) => (
          <div key={i}>
            <ProjectCard project={p} index={i} />
          </div>
        ))}
      </PerspectiveSection>
    </section>
  );
}
