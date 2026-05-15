<script>
  import { onMount } from 'svelte';
  import { fly, fade, scale } from 'svelte/transition';
  import { ArrowUpRight } from "lucide-svelte";
  import { Canvas } from '@threlte/core';
  import Button from "./UI/Button.svelte";
  import ThreeBackground from "./ThreeBackground.svelte";
  // For now, I'll omit the complex WebGL background or use a placeholder
  // HeroBackground will be ported later
  
  let scrollY = $state(0);
  
  onMount(() => {
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  
  // Parallax calculations
  let yHero = $derived(scrollY * 0.4);
  let ySub = $derived(scrollY * 0.2);
  let yTop = $derived(scrollY * 0.1);
  let yGrid = $derived(scrollY * 0.25);
  let textOpacity = $derived(Math.max(0, 1 - scrollY / 600));
  let textScale = $derived(1 + (scrollY / 2000));
  let orbY = $derived(-scrollY * 0.15);
  let orbScale = $derived(1 + (scrollY / 1000));
</script>

<section 
  id="hero"
  class="relative min-h-[140vh] flex flex-col items-center justify-center pt-32 pb-40 overflow-hidden text-center"
>
  <!-- Placeholder for HeroBackground -->
  <div class="absolute inset-0 -z-30 pointer-events-none opacity-80 bg-gradient-to-b from-primary/5 to-transparent">
    <div class="absolute inset-0">
      <Canvas>
        <ThreeBackground type="hero" />
      </Canvas>
    </div>
  </div>
  
  <div class="container mx-auto px-6 lg:px-20 z-10 relative">
    <div
      style:transform="translateY({yTop}px)"
      style:opacity={textOpacity}
      in:fly={{ y: 20, duration: 800, opacity: 0 }}
      class="text-primary font-mono text-sm mb-6 flex items-center justify-center gap-4"
    >
      <span class="w-12 h-[1px] bg-primary/40"></span>
      JUNIOR FRONTEND DEVELOPER
      <span class="w-12 h-[1px] bg-primary/40"></span>
    </div>

    <h1
      style:transform="translateY({yHero}px) scale({textScale})"
      style:opacity={textOpacity}
      in:fly={{ y: 20, duration: 1200, opacity: 0 }}
      class="text-6xl sm:text-7xl md:text-8xl lg:text-[12rem] font-display font-bold leading-[0.85] tracking-tight text-gradient mb-8 md:mb-12 drop-shadow-[0_0_30px_rgba(6,182,212,0.1)]"
    >
      Rayflix
    </h1>

    <div
      style:transform="translateY({ySub}px)"
      style:opacity={textOpacity}
      in:fly={{ y: 20, duration: 800, delay: 400, opacity: 0 }}
      class="flex flex-col items-center gap-10"
    >
      <p class="max-w-2xl text-white/40 leading-relaxed font-light text-lg md:text-xl px-4 md:px-0">
        Building modern web solutions with a focus on high-end frontend experiences and intuitive UI. Known as Akpe Samuel.
      </p>

      <div class="flex flex-wrap items-center justify-center gap-6">
        <Button variant="primary" class="px-10 h-16 text-sm">
          Hire Me <ArrowUpRight size={18} />
        </Button>
        <Button variant="outline" class="px-10 h-16 text-sm">
          View Work
        </Button>
      </div>
      
      <div class="flex items-center gap-3 text-[10px] font-mono text-white/30 tracking-widest uppercase">
        <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        Available for Hire
      </div>
    </div>
  </div>

  <div
    style:transform="translate(-50%, {orbY}px) scale({orbScale})"
    class="absolute bottom-[20%] left-1/2 w-[60vw] aspect-video bg-primary/10 blur-[120px] rounded-full -z-10"
  ></div>

  <div 
    style:transform="rotateX(60deg) translateY({yGrid}px)"
    class="absolute bottom-[-30%] left-[-10%] w-[120%] h-[80%] grid-background opacity-10 -z-20 pointer-events-none"
  ></div>
</section>
