/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SmoothScroll } from "./components/SmoothScroll";
import { Navbar } from "./components/Navbar";
import { CustomCursor } from "./components/CustomCursor";
import { ThemeToggle } from "./components/ThemeToggle";
import { CommandPalette } from "./components/CommandPalette";
import { Hero } from "./components/Hero";
import { AboutMe } from "./components/AboutMe";
import { Experience } from "./components/Experience";
import { Services } from "./components/Services";
import { WorkProcess } from "./components/WorkProcess";
import { Projects } from "./components/Projects";
import { Testimonials } from "./components/Testimonials";
import { Contact, Footer } from "./components/Contact";

export default function App() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <CommandPalette />
      <ThemeToggle />
      <div className="noise-overlay" />
      <div className="relative min-h-screen bg-background selection:bg-primary selection:text-black overflow-x-hidden">
        {/* Background Grid & Blurs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/5 blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent/5 blur-[120px]"></div>
          <div className="absolute inset-0 grid-background opacity-20"></div>
        </div>

        <Navbar />
        
        {/* Floating Sidebar (Design Requirement) */}
        <div className="fixed top-1/2 -right-4 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-8 py-8 px-4 border-l border-white/10 bg-black/40 backdrop-blur-md">
          <div className="rotate-90 text-[10px] font-mono tracking-[0.3em] text-white/20 whitespace-nowrap mb-12 uppercase">Social_Protocol</div>
          <div className="w-[1px] h-20 bg-white/10"></div>
          <div className="flex flex-col gap-6 text-white/20">
            <div className="w-3 h-3 border border-current hover:text-primary transition-colors cursor-pointer"></div>
            <div className="w-3 h-3 border border-current hover:text-primary transition-colors cursor-pointer"></div>
            <div className="w-3 h-3 border border-current hover:text-primary transition-colors cursor-pointer"></div>
          </div>
        </div>

        <main className="preserve-3d perspective-2000">
          <Hero />
          <AboutMe />
          <Experience />
          <Services />
          <WorkProcess />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </SmoothScroll>
  );
}
