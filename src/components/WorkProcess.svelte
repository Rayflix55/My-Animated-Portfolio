<script>
  import { onMount } from 'svelte';
  import { Canvas } from '@threlte/core';
  import SectionHeader from "./UI/SectionHeader.svelte";
  import ThreeBackground from "./ThreeBackground.svelte";

  const steps = [
    { num: "01", title: "Discovery", desc: "Analyzing visual systems and mapping core user flows for mission-critical software." },
    { num: "02", title: "Design", desc: "Crafting cinematic UI architectures that prioritize both aesthetics and raw performance." },
    { num: "03", title: "Development", desc: "Engineering pixel-perfect components with smooth-motion curves and clean code." },
    { num: "04", title: "Deployment", desc: "Optimizing assets for 60fps performance and deploying to global cloud networks." }
  ];

  let scrollYProgress = $state(0);
  let sectionRef;

  onMount(() => {
    const handleScroll = () => {
      if (!sectionRef) return;
      const rect = sectionRef.getBoundingClientRect();
      const top = rect.top;
      const height = rect.height;
      const windowHeight = window.innerHeight;
      let progress = 1 - (top + height) / (height + windowHeight);
      scrollYProgress = Math.max(0, Math.min(1, progress));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function getY(index, progress) {
    const offset = (progress - 0.5) * 200;
    return index % 2 === 0 ? -offset : offset;
  }
</script>

<section bind:this={sectionRef} class="py-40 container mx-auto px-6 lg:px-20 relative" id="tech">
  <!-- WorkProcess3D Background Placeholder -->
  <div class="absolute inset-0 -z-10 pointer-events-none overflow-hidden opacity-80">
    <div class="absolute inset-0">
      <Canvas>
        <ThreeBackground type="process" />
      </Canvas>
    </div>
  </div>
  
  <SectionHeader 
    subtitle="05 // Pipeline" 
    title="Work Process" 
  />

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 min-h-[600px] perspective-2000">
    {#each steps as step, i}
      <div style:transform="translateY({getY(i, scrollYProgress)}px)" class="h-full transition-transform">
        <div class="engineered-border bg-white/[0.01] hover:bg-white/[0.03] p-10 h-full transition-all group relative overflow-hidden text-left hover:scale-[1.01] active:scale-95">
          <div class="text-primary font-mono text-xs mb-8 tracking-widest italic group-hover:text-white transition-colors">INIT_STEP_{step.num}</div>
          <h3 class="text-3xl font-display font-black uppercase tracking-tighter mb-4">{step.title}</h3>
          <p class="text-white/40 text-sm font-light leading-relaxed mb-8">{step.desc}</p>
          
          <div class="absolute bottom-[-10%] right-[-5%] text-white/5 text-[10rem] font-display font-black italic tracking-tighter transition-all group-hover:text-primary/5">
            {step.num}
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>
