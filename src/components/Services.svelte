<script>
  import { Code, Palette, Zap, Cpu } from "lucide-svelte";
  import { Canvas } from '@threlte/core';
  import SectionHeader from "./UI/SectionHeader.svelte";
  import ThreeBackground from "./ThreeBackground.svelte";

 const services = [
    { icon: Code, title: "Web App Development", desc: "Build clean, performant code with modern frameworks.", size: "md:col-span-2", titleSize: "md:text-2xl text-md" },
    { icon: Palette, title: "UI Design", desc: "Cinematic, user-centric interfaces designed in Figma.", size: "col-span-1", titleSize: "text-md md:text-2xl" },
    { icon: Zap, title: "Performance", desc: "Optimization for 60fps animations and rapid load times.", size: "col-span-1", titleSize: "text-md md:text-2xl" },
    { icon: Cpu, title: "AI Integration", desc: "Seamlessly integrate AI into your products for smarter user flows.", size: "md:col-span-2", titleSize: "text-md md:text-2xl" },
  ];
</script>

<section class="py-40 container mx-auto px-6 lg:px-20 relative" id="services">
  <!-- Services3D Background Placeholder -->
  <div class="absolute inset-0 -z-10 pointer-events-none overflow-hidden opacity-90">
    <div class="absolute inset-0">
      <Canvas>
        <ThreeBackground type="services" />
      </Canvas>
    </div>
  </div>
  
  <SectionHeader 
    subtitle="04 // Capabilities" 
    title="Services I Offer" 
  />
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-1 perspective-2000">
    {#each services as s, i}
      <div class={s.size}>
        <div
          class="engineered-border p-10 bg-white/[0.01] hover:bg-white/[0.03] transition-all group relative overflow-hidden h-full hover:scale-[1.01] active:scale-95 text-left"
        >
          <div class="mb-8 opacity-40 group-hover:opacity-100 transition-opacity">
            <svelte:component this={s.icon} class="text-primary" size={32} />
          </div>
          <h3 class={s.titleSize + " font-display font-black mb-4 uppercase tracking-tighter"}>{s.title}</h3>
          <p class="text-white/40 leading-relaxed font-light text-sm max-w-xs">{s.desc}</p>
          
          <div class="mt-8 flex items-center gap-2 group/btn cursor-pointer">
            <span class="text-[10px] font-mono text-primary/40 group-hover/btn:text-primary transition-colors tracking-widest uppercase italic">Explore Module</span>
            <div class="h-[1px] w-0 group-hover/btn:w-8 bg-primary/40 transition-all duration-300"></div>
          </div>
          
          <div class="absolute top-0 right-0 p-4 font-mono text-white/5 text-6xl font-black italic tracking-tighter">
            {i + 1}
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>
