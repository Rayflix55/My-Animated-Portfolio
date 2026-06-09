<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { Canvas } from '@threlte/core';
  import SectionHeader from "./UI/SectionHeader.svelte";
  import ThreeBackground from "./ThreeBackground.svelte";

  // Data structure updated with an explicit "current" state flag
  const experience = [
    { year: "2025-2026", role: "Frontend Intern", company: "HNG", desc: "Building high-performance user interfaces and contributing to scalable modular frontend architectures.", current: false },
    { year: "2026", role: "Lead Developer", company: "Yagazie Weng Foundation", desc: "Assisting in building virtual interface components and optimizing frontend performance.", current: true },
    { year: "2023", role: "Frontend Developer (Freelance)", company: "Self-Employed", desc: "Providing freelance frontend development services for various clients.", current: true },
    { year: "2026", role: "Frontend Intern", company: "Teyzix Core", desc: "Assisting the core team in interface design and frontend dashboard development.", current: true },
  ];

  let scrollY = $state(0);
  onMount(() => {
    const handleScroll = () => scrollY = window.scrollY;
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<section class="py-40 container mx-auto px-6 md:px-10 lg:px-20 relative" id="experience">
  <div class="absolute inset-0 -z-10 pointer-events-none overflow-hidden opacity-70">
    <div class="absolute inset-0">
      <Canvas>
        <ThreeBackground type="experience" />
      </Canvas>
    </div>
  </div>
  
  <div class="absolute left-10 lg:left-20 top-80 bottom-40 w-[1px] bg-white/5 hidden md:block">
    <div class="w-full bg-primary transition-all duration-500 h-full origin-top scale-y-0" style:transform="scaleY({Math.min(1, scrollY / 3000)})"></div>
  </div>

  <div class="relative">
    <SectionHeader 
      subtitle="03 // History" 
      title="Awards & Experiences" 
      class="mb-24"
    />

    <div class="md:pl-12 lg:pl-16">
      {#each experience as item, i}
        <div class="group p-6 md:p-10 engineered-border bg-white/[0.01] hover:bg-white/[0.03] transition-all cursor-default relative mb-12 hover:scale-[1.01] active:scale-95">
          <div class="absolute top-0 right-0 p-4 text-[10px] font-mono text-white/5 uppercase tracking-[0.2em] group-hover:text-primary/20 transition-colors">
            LOG_ENTRY_{i + 1}
          </div>
          
          <div class="grid lg:grid-cols-12 gap-8 items-center text-left">
            <div class="lg:col-span-3">
              {#if item.current}
                <div class="font-mono text-emerald-400 text-xs tracking-[0.2em] mb-2 uppercase italic flex items-center gap-2">
                  <span class="relative flex h-2 w-2">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Status: Active // Live
                </div>
              {:else}
                <div class="font-mono text-primary/60 text-xs tracking-[0.4em] mb-2 uppercase italic">
                  Status: Success
                </div>
              {/if}
              <div class="text-4xl md:text-5xl font-mono font-black text-white/10 group-hover:text-primary/20 transition-colors">{item.year}</div>
            </div>

            <div class="lg:col-span-6">
              <h3 class="text-2xl md:text-2xl font-display font-black tracking-tighter uppercase group-hover:text-white transition-colors text-white/60 mb-4">
                {item.role}
              </h3>
              <p class="text-white/30 text-sm font-light leading-relaxed max-w-md group-hover:text-white/50 transition-colors">
                {item.desc}
              </p>
            </div>

            <div class="lg:col-span-3 flex justify-end items-center gap-4">
              <span class="text-white/20 uppercase tracking-[0.3em] font-mono text-[15px]">{item.company}</span>
              <div class="w-16 h-[1px] bg-white/10 group-hover:w-24 group-hover:bg-primary/40 transition-all duration-500"></div>
            </div>
          </div>
          
          <div class="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-white/10 group-hover:border-primary transition-colors"></div>
        </div>
      {/each} 
    </div>
  </div>
</section>