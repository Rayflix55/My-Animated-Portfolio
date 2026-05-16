<script>
  import { onMount } from 'svelte';
  import { ArrowUpRight } from "lucide-svelte";
  import { Canvas } from '@threlte/core';
  import SectionHeader from "./UI/SectionHeader.svelte";
  import ThreeBackground from "./ThreeBackground.svelte";

  const projects = [
    { title: "Quantum Flux", category: "AI / Web Design", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1964", link: "#" },
    { title: "Nova Dashboard", category: "Fintech Interface", image: "https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=2070", link: "#" },
    { title: "Cortex OS", category: "System Design", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072", link: "#" },
    { title: "Luma Creative", category: "Brand Portal", image: "https://images.unsplash.com/photo-1541462608141-ad4d156ec6b4?auto=format&fit=crop&q=80&w=2070", link: "#" },
  ];

  let scrollY = $state(0);
  onMount(() => {
    const handleScroll = () => scrollY = window.scrollY;
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<section class="py-40 md:py-60 container mx-auto px-6 lg:px-20 relative" id="portfolio">
  <!-- Projects3D Background Placeholder -->
  <div class="absolute inset-0 -z-10 pointer-events-none overflow-hidden opacity-80">
    <div class="absolute inset-0">
      <Canvas>
        <ThreeBackground type="projects" />
      </Canvas>
    </div>
  </div>
  
  <SectionHeader 
    subtitle="02 // Showcase" 
    title="Featured Work" 
  />

  <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32 mt-20 perspective-2000">
    {#each projects as project, i}
      <div class="h-full preserve-3d transition-all duration-700 hover:scale-[1.02] active:scale-95">
        <div class="group relative overflow-hidden aspect-[4/5] md:aspect-[3/4] engineered-border bg-black perspective-1000 transform-style-3d">
          <img
            src={project.image}
            alt={project.title}
            class="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
          
          <div class="absolute top-0 right-0 p-4 text-[10px] font-mono text-white/20 tracking-tighter uppercase">{project.category}</div>

          <div class="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
            <div class="text-left">
              <h3 class="text-[25px] font-display font-black uppercase tracking-tighter mb-2 group-hover:text-primary transition-colors leading-none">{project.title}</h3>
              <div class="flex gap-3">
                 <span class="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">Archived_V1</span>
                 <span class="text-[10px] font-mono text-primary/40 uppercase tracking-[0.2em] animate-pulse">Running</span>
              </div>
            </div>
            <div 
              class="w-14 h-14 border border-white/20 flex items-center justify-center text-white group-hover:border-primary group-hover:text-primary transition-all bg-black/40 backdrop-blur-md hover:rotate-45"
            >
              <ArrowUpRight size={28} />
            </div>
          </div>
          
          <a href={project.link} class="absolute inset-0 z-10" aria-label={`View ${project.title} project`}></a>
          <div class="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-white/10 group-hover:border-primary transition-colors"></div>
        </div>
      </div>
    {/each}
  </div>
</section>
