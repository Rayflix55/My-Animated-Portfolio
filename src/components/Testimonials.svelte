<script>
  import { Canvas } from '@threlte/core';
  import SectionHeader from "./UI/SectionHeader.svelte";
  import ThreeBackground from "./ThreeBackground.svelte";

  const testimonials = [
    { name: "Alex Rivera", role: "CEO at TechFlow", text: "Samuel transformed our product from a standard SaaS into a cinematic experience. The attention to detail is unmatched.", rating: 5 },
    { name: "Sarah Chen", role: "Design Lead at Luma", text: "Working with Samuel was a breeze. He understands motion and user flow on a level very few developers do.", rating: 5 },
    { name: "Marcus Thorne", role: "Founder of Nova", text: "The technical performance matched with the high-end visuals was exactly what our brand needed to stand out.", rating: 5 }
  ];
</script>

<section class="py-40 container mx-auto px-6 lg:px-20 overflow-hidden relative">
  <!-- Testimonials3D Background Placeholder -->
  <div class="absolute inset-0 -z-10 pointer-events-none overflow-hidden opacity-70">
    <div class="absolute inset-0">
      <Canvas>
        <ThreeBackground type="testimonials" />
      </Canvas>
    </div>
  </div>
  <SectionHeader 
    subtitle="03.5 // Feedback" 
    title="Signal Feedback" 
  />

  <div class="flex flex-nowrap gap-1 overflow-x-auto pb-12 snap-x hide-scrollbar">
    {#each testimonials as t, i}
      <div
        class="flex-shrink-0 w-full md:w-[500px] engineered-border bg-white/[0.01] p-12 snap-center relative hover:bg-white/[0.03] transition-all hover:scale-[1.01] active:scale-95 text-left"
      >
         <div class="absolute top-0 right-0 p-4 text-[10px] font-mono text-white/10 uppercase tracking-widest">Feed_Source_{i+1}</div>
         
        <div class="flex gap-1 mb-8">
          {#each Array(t.rating) as _}
            <div class="w-1 h-1 bg-primary"></div>
          {/each}
        </div>
        
        <p class="text-2xl font-light text-white/60 mb-12 leading-relaxed">
          "{t.text}"
        </p>

        <div class="flex items-center gap-6">
          <div class="w-10 h-10 border border-white/10 flex items-center justify-center text-[10px] font-mono text-white/40">
            USR
          </div>
          <div>
            <h4 class="font-display font-bold uppercase tracking-wider text-sm">{t.name}</h4>
            <p class="text-primary/40 text-[10px] font-mono uppercase tracking-widest">{t.role}</p>
          </div>
        </div>
        <div class="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-white/20 group-hover:border-primary transition-colors"></div>
      </div>
    {/each}
  </div>
</section>
