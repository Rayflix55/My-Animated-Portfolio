<script lang="ts">
  import { onMount } from 'svelte';
  import { canUseMotion } from '../lib/motion';
  import { fly } from 'svelte/transition';
  import { Cpu, Zap, Globe, Layers } from "lucide-svelte";
  import SectionHeader from "./UI/SectionHeader.svelte";
  import Button from "./UI/Button.svelte";

  let scrollYProgress = $state(0);
  let sectionRef = $state<HTMLElement | null>(null);

  onMount(() => {
    if (!canUseMotion) return;

    const handleScroll = () => {
      if (!sectionRef) return;
      const rect = sectionRef.getBoundingClientRect();
      const top = rect.top;
      const height = rect.height;
      const windowHeight = window.innerHeight;
      
      let progress = 1 - (top + height) / (height + windowHeight);
      scrollYProgress = Math.max(0, Math.min(1, progress));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  });

  let leftY = $derived((scrollYProgress - 0.5) * 100);
  let rightY = $derived(-(scrollYProgress - 0.5) * 100);

  const stats = [
    { label: "Years Experience", value: "2+", sub: "Professional focus" },
    { label: "Successful Projects", value: "10+", sub: "Delivered solutions" },
  ];

  const skillStacks = [
    { icon: Cpu, title: "React / Frontend", tech: "Next.js, Tailwind, Motion" },
    { icon: Layers, title: "Svelte / Modern Web", tech: "SvelteKit, Reactive UI" },
    { icon: Zap, title: "Node.js / Backend", tech: "Express, PostgreSQL, Firebase" },
    { icon: Globe, title: "UI Architecture", tech: "Design Systems, Animations" },
  ];
</script>

<section 
  bind:this={sectionRef} 
  class="py-40 container mx-auto px-6 lg:px-20 relative" 
  id="about"
>
  <div class="absolute inset-0 -z-10 pointer-events-none overflow-hidden opacity-70"></div>
  
  <SectionHeader 
    subtitle="01 // Profile" 
    title="About Me" 
  />

  <div class="grid lg:grid-cols-2 gap-12 items-start mt-12 perspective-2000">
    <div style:transform="translateY({leftY}px)" class="space-y-6">
      <div class="engineered-border bg-white/[0.02] p-10 relative overflow-hidden transition-all hover:scale-[1.02] active:scale-95">
        <div class="absolute top-0 right-0 p-4 text-[10px] font-mono text-white/5 uppercase tracking-widest">Stack_Catalog</div>
        <h3 class="text-xl font-display font-bold uppercase tracking-wider mb-8">Technical Proficiency</h3>
        <div class="space-y-4">
          {#each skillStacks as stack, i}
            {@const Icon = stack.icon}
            <div class="p-4 border border-white/5 bg-white/[0.01] flex items-center gap-4 group hover:border-primary/30 transition-all hover:translate-x-2">
              <div class="text-primary group-hover:scale-110 transition-transform">
                <Icon size={18} />
              </div>
              <div>
                <div class="text-sm font-bold text-white/80">{stack.title}</div>
                <div class="text-[10px] font-mono text-white/20 uppercase tracking-tighter">{stack.tech}</div>
              </div>
            </div>
          {/each}
        </div>
      </div>

      <div class="grid sm:grid-cols-2 gap-6">
        {#each stats as s}
          <div class="engineered-border bg-white/[0.02] p-8 group hover:border-primary/40 transition-all hover:scale-[1.02]">
            <div class="text-4xl font-display font-black text-primary mb-2 group-hover:scale-110 transition-transform origin-left">{s.value}</div>
            <div class="text-sm font-bold uppercase tracking-wider text-white/80">{s.label}</div>
            <div class="text-[10px] font-mono text-white/20 uppercase mt-1">{s.sub}</div>
          </div>
        {/each}
      </div>
    </div>

    <div style:transform="translateY({rightY}px)" class="relative">
      <div class="relative z-10 space-y-6">
        <p class="text-xl sm:text-2xl font-light text-white/60 leading-relaxed italic">
          "I am Akpe Samuel, popularly known as Rayflix. I build frontend applications that combine robust engineering with engaging user experiences."
        </p>
        <p class="text-white/40 leading-relaxed">
          Based on a passion for technology and creative problem-solving, I collaborate with clients and teams to bring innovative digital ideas to life. I specialize in the modern web ecosystem, focusing on scalability and performance.
        </p>
        
       <div class="pt-8 transition-transform duration-500 hover:scale-[1.1] ">
          <div class="relative w-full max-w-[420px] mx-auto aspect-square overflow-hidden rounded-2xl engineered-border">
            <picture>
              <source type="image/webp" srcset="/rayflix-640.webp 640w, /rayflix.webp 1024w" sizes="(max-width: 640px) 100vw, 420px" />
              <img 
                src="/rayflix.png" 
                alt="Akpe Samuel (Rayflix)"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
                class="w-full h-full object-cover object-top grayscale opacity-80 hover:grayscale-0 transition-all duration-700"
              />
            </picture>
          </div>
        </div>
      
      <div class="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl -z-10"></div>
    </div>
  </div>
</div>
</section>