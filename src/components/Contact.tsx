import { motion } from "motion/react";
import { Mail, Github, Twitter, Linkedin, MessageSquare, ArrowUpRight } from "lucide-react";
import { Button, SectionHeader } from "./UI";
import { Contact3D } from "./SectionBackgrounds";

export function Contact() {
  return (
    <section className="py-40 container mx-auto px-6 lg:px-20 relative" id="contact">
      <Contact3D />
      <div className="engineered-border p-8 md:p-24 bg-white/[0.01] relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-6 text-[10px] font-mono text-white/5 uppercase tracking-[0.2em]">Contact_Channel_Encrypted</div>
        
        <div className="grid md:grid-cols-2 gap-20 relative z-10">
          <div>
            <SectionHeader 
              subtitle="04 // Terminal" 
              title="Get In Touch" 
              className="mb-10"
            />
            <p className="text-white/40 text-xl font-light mb-16 max-w-sm leading-relaxed">
              Interested in working together or just want to say hi? I'm always open to new opportunities and collaborations.
            </p>

            <div className="flex gap-4">
              {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 border border-white/5 bg-white/[0.02] flex items-center justify-center text-white/20 hover:text-primary hover:border-primary transition-all transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-6">
              <input 
                type="text" 
                placeholder="Full Name"
                className="w-full bg-white/[0.02] border border-white/10 p-5 focus:border-primary outline-none transition-colors font-mono text-sm text-primary placeholder:text-white/20"
              />
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full bg-white/[0.02] border border-white/10 p-5 focus:border-primary outline-none transition-colors font-mono text-sm text-primary placeholder:text-white/20"
              />
            </div>
            <textarea 
              placeholder="Your Message" 
              rows={5}
              className="w-full bg-white/[0.02] border border-white/10 p-5 focus:border-primary outline-none transition-colors font-mono text-sm text-primary placeholder:text-white/20"
            />
            <Button variant="primary" className="w-full py-6 text-sm">
              Send Message <MessageSquare size={18} />
            </Button>
          </form>
        </div>
        <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b border-r border-primary"></div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative pt-40 pb-20 overflow-hidden bg-background">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden h-[50%] top-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 0.02, y: 0 }}
          className="text-[25vw] md:text-[30vw] font-display font-black leading-none tracking-tighter text-white whitespace-nowrap opacity-[0.02]"
        >
          AKPE SAMUEL
        </motion.div>
      </div>

      <div className="container mx-auto px-10 lg:px-20 relative z-10 border-t border-white/5 pt-20">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12">
          <div className="flex flex-wrap gap-12 font-mono">
        <div>
          <div className="text-[10px] text-white/20 mb-2 uppercase tracking-[0.2em]">Coordinates</div>
          <div className="text-xs text-white/60 tracking-tighter">40.7128° N, 74.0060° W</div>
        </div>
        <div>
          <div className="text-[10px] text-white/20 mb-2 uppercase tracking-[0.2em]">Tech_Stack</div>
          <div className="text-xs text-white/60 tracking-tighter">REACT_MOT_GSAP</div>
        </div>
        <div>
          <div className="text-[10px] text-white/20 mb-2 uppercase tracking-[0.2em]">Signal</div>
          <div className="text-xs text-primary font-bold tracking-tighter animate-pulse">ENCRYPTED [60 FPS]</div>
        </div>
      </div>
      
      <div className="flex items-center gap-6 mt-12 md:mt-0">
        <div className="text-right">
          <div className="text-[10px] text-white/20 uppercase tracking-[0.2em] mb-2 font-mono">Scroll Status</div>
          <div className="h-[2px] w-48 bg-white/5 relative overflow-hidden">
            <motion.div 
              style={{ width: "33%" }}
              className="absolute top-0 left-0 h-full bg-primary"
            />
          </div>
        </div>
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/20 hover:text-white hover:border-primary cursor-pointer transition-all"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUpRight className="-rotate-45" size={20} />
        </motion.div>
      </div>
    </div>
  </div>
</footer>
  );
}
