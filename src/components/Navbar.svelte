<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly, slide } from 'svelte/transition';
  import { spring } from 'svelte/motion';
  import { Menu, X } from "lucide-svelte";
  import Button from "./UI/Button.svelte";

  let isOpen = $state(false);
  let scrolled = $state(false);

  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 20;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const navLinks = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Work", id: "portfolio" },
    { name: "Tech", id: "experience" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ];

  // Explicitly added MouseEvent type for 'e' and string type for 'id'
// Allow either MouseEvent or KeyboardEvent to pass through cleanly
const handleNavClick = (e: MouseEvent | KeyboardEvent, id: string) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
  isOpen = false;
};
</script>

<nav 
  class="fixed top-0 left-0 w-full z-50 transition-all duration-300 {scrolled ? 'p-4 md:p-6' : 'p-6 md:p-10'}"
>
  <div class="container mx-auto flex items-center justify-between transition-all duration-500 {scrolled ? 'glass border border-white/10 p-3 md:px-8 shadow-2xl rounded-2xl' : 'bg-transparent'}">
    <div class="flex items-center gap-4">
      <div 
        role="button"
        tabindex="0"
        onclick={(e) => handleNavClick(e, 'hero')}
        onkeydown={(e) => e.key === 'Enter' && handleNavClick(e, 'hero')}
        class="w-10 h-10 border border-primary/30 flex items-center justify-center relative bg-white/[0.02] backdrop-blur-md group cursor-pointer overflow-hidden rounded-sm"
      >
        <span class="text-primary font-mono text-xs font-bold relative z-10 transition-transform group-hover:scale-125">RF</span>
        <div class="absolute inset-0 bg-primary/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
        <div class="absolute -top-1 -left-1 w-1.5 h-1.5 bg-primary"></div>
      </div>
      <div class="hidden sm:block text-left">
        <div class="text-[10px] font-mono text-primary/60 tracking-[0.2em] uppercase">Rayflix.OS</div>
        <div class="text-sm font-bold tracking-tighter uppercase whitespace-nowrap">Frontend Developer</div>
      </div>
    </div>

    <div class="flex items-center gap-4 md:gap-8 text-[11px] font-mono tracking-[0.2em] uppercase">
      <div class="hidden xl:flex items-center gap-6">
        <div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-[9px] font-mono text-white/30 mr-4 lowercase">
          <span class="text-primary">⌘+K</span> Quick_Search
        </div>
        {#each navLinks as link, i}
          <a 
            href="#{link.id}"
            onclick={(e) => handleNavClick(e, link.id)}
            class="hover:text-primary transition-colors text-white/50 hover:text-white"
          >
            <span class="text-primary/40 mr-1">0{i+1}_</span>{link.name}
          </a>
        {/each}
      </div>
      
      <div class="flex items-center gap-3">
        <Button 
          variant="primary" 
          class="px-4 md:px-6 py-2 h-9 md:h-10 flex items-center text-[10px] md:text-[11px]"
          onclick={(e) => handleNavClick(e, 'contact')}
        >
          Hire Me
        </Button>
        
        <button 
          onclick={() => isOpen = !isOpen}
          class="xl:hidden w-9 h-9 border border-white/10 flex items-center justify-center hover:border-primary/50 transition-colors bg-white/[0.05] backdrop-blur-md rounded-sm"
        >
          {#if isOpen}
            <X size={18} />
          {:else}
            <Menu size={18} />
          {/if}
        </button>
      </div>
    </div>
  </div>
</nav>

{#if isOpen}
  <div 
    transition:fade={{ duration: 200 }}
    role="button"
    tabindex="0"
    onclick={() => isOpen = false}
    onkeydown={(e) => e.key === 'Escape' && (isOpen = false)}
    class="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] xl:hidden"
  ></div>
  <div 
    transition:fly={{ x: '100%', duration: 400, opacity: 1 }}
    class="fixed top-0 right-0 w-[80%] max-w-sm h-full bg-background border-l border-white/10 z-[70] xl:hidden p-10 flex flex-col justify-center"
  >
    <div class="absolute top-10 right-10">
      <button onclick={() => isOpen = false} class="text-white/40 hover:text-primary transition-colors">
        <X size={32} strokeWidth={1} />
      </button>
    </div>

    <div class="space-y-6">
      {#each navLinks as link, i}
        <div in:fly={{ x: 20, delay: 100 * i, duration: 400 }}>
          <a 
            href="#{link.id}"
            onclick={(e) => handleNavClick(e, link.id)}
            class="block text-3xl font-display font-bold uppercase tracking-tighter hover:text-primary transition-colors text-white/80"
          >
            <span class="text-primary text-[10px] font-mono block mb-1">0{i+1}_//</span>
            {link.name}
          </a>
        </div>
      {/each}
    </div>

    <div class="mt-20 pt-10 border-t border-white/5">
      <div class="text-[10px] font-mono text-white/20 uppercase tracking-widest mb-4">Connection_Terminal</div>
      <div class="flex gap-6">
        {#each ["IN", "TW", "GH"] as social}
          <a href="/" class="text-xs font-mono text-white/40 hover:text-primary transition-colors">
            {social}
          </a>
        {/each}
      </div>
    </div>
  </div>
{/if}
