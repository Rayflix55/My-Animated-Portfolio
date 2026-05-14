import { motion } from "motion/react";
import { Star } from "lucide-react";
import { SectionHeader } from "./UI";
import { Testimonials3D } from "./SectionBackgrounds";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "CEO at TechFlow",
    text: "Samuel transformed our product from a standard SaaS into a cinematic experience. The attention to detail is unmatched.",
    rating: 5
  },
  {
    name: "Sarah Chen",
    role: "Design Lead at Luma",
    text: "Working with Samuel was a breeze. He understands motion and user flow on a level very few developers do.",
    rating: 5
  },
  {
    name: "Marcus Thorne",
    role: "Founder of Nova",
    text: "The technical performance matched with the high-end visuals was exactly what our brand needed to stand out.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-40 container mx-auto px-6 lg:px-20 overflow-hidden relative">
      <Testimonials3D />
      <SectionHeader 
        subtitle="03.5 // Feedback" 
        title="Signal Feedback" 
      />

      <div className="flex flex-nowrap gap-1 overflow-x-auto pb-12 snap-x hide-scrollbar">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-full md:w-[500px] engineered-border bg-white/[0.01] p-12 snap-center relative"
          >
             <div className="absolute top-0 right-0 p-4 text-[10px] font-mono text-white/10 uppercase tracking-widest">Feed_Source_{i+1}</div>
             
            <div className="flex gap-1 mb-8">
              {[...Array(t.rating)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-primary" />
              ))}
            </div>
            
            <p className="text-2xl font-light text-white/60 mb-12 leading-relaxed">
              "{t.text}"
            </p>

            <div className="flex items-center gap-6">
              <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-[10px] font-mono text-white/40">
                USR
              </div>
              <div>
                <h4 className="font-display font-bold uppercase tracking-wider text-sm">{t.name}</h4>
                <p className="text-primary/40 text-[10px] font-mono uppercase tracking-widest">{t.role}</p>
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-white/20 group-hover:border-primary transition-colors"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
