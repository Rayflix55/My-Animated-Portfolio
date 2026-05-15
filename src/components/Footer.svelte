<script>
  import { onMount } from 'svelte';
  import { ArrowUpRight } from "lucide-svelte";
  import { fly } from 'svelte/transition';

  let scrollPercentage = $state(0);

  onMount(() => {
    const handleScroll = () => {
      const h = document.documentElement;
      const b = document.body;
      const st = 'scrollTop';
      const sh = 'scrollHeight';
      scrollPercentage = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<footer class="relative pt-40 pb-20 overflow-hidden bg-background">
  <div class="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden h-[50%] top-0">
    <div
      class="text-[25vw] md:text-[30vw] font-display font-black leading-none tracking-tighter text-white whitespace-nowrap opacity-[0.02]"
    >
      AKPE SAMUEL
    </div>
  </div>

  <div class="container mx-auto px-10 lg:px-20 relative z-10 border-t border-white/5 pt-20">
    <div class="flex flex-col md:flex-row items-end justify-between gap-12">
      <div class="flex flex-wrap gap-12 font-mono">
        <div class="text-left">
          <div class="text-[10px] text-white/20 mb-2 uppercase tracking-[0.2em]">Coordinates</div>
          <div class="text-xs text-white/60 tracking-tighter">40.7128° N, 74.0060° W</div>
        </div>
        <div class="text-left">
          <div class="text-[10px] text-white/20 mb-2 uppercase tracking-[0.2em]">Tech_Stack</div>
          <div class="text-xs text-white/60 tracking-tighter">SVELTE_THRELTE_GSAP</div>
        </div>
        <div class="text-left">
          <div class="text-[10px] text-white/20 mb-2 uppercase tracking-[0.2em]">Signal</div>
          <div class="text-xs text-primary font-bold tracking-tighter animate-pulse">ENCRYPTED [60 FPS]</div>
        </div>
      </div>
      
      <div class="flex items-center gap-6 mt-12 md:mt-0">
        <div class="text-right">
          <div class="text-[10px] text-white/20 uppercase tracking-[0.2em] mb-2 font-mono">Scroll Status</div>
          <div class="h-[2px] w-48 bg-white/5 relative overflow-hidden">
            <div 
              style:width="{scrollPercentage}%"
              class="absolute top-0 left-0 h-full bg-primary transition-all duration-300"
            ></div>
          </div>
        </div>
        <button 
          class="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/20 hover:text-white hover:border-primary cursor-pointer transition-all hover:scale-110"
          onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUpRight class="-rotate-45" size={20} />
        </button>
      </div>
    </div>
  </div>
</footer>
