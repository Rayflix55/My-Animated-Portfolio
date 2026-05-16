<script>
import { cn } from "../../lib/utils";
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  let { title, subtitle, class: className = "", titleSize = "text-3xl sm:text-xl md:text-4xl lg:text-6xl" } = $props();
  let visible = $state(false);

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) visible = true;
    }, { threshold: 0.1 });
    
    let el = document.getElementById(`header-${title.replace(/\s+/g, '-').toLowerCase()}`);
    if (el) observer.observe(el);
    return () => observer.disconnect();
  });
</script>

<div id="header-{title.replace(/\s+/g, '-').toLowerCase()}" class={cn("mb-16", className)}>
  {#if subtitle && visible}
    <div
      in:fly={{ x: -10, duration: 600, opacity: 0 }}
      class="text-primary font-mono text-xs uppercase tracking-[0.3em] flex items-center gap-4 mb-6"
    >
      <span class="h-[1px] w-12 bg-primary/30"></span>
      {subtitle}
    </div>
  {/if}
  
  {#if visible}
    <h2
      in:fly={{ y: 20, duration: 800, delay: 100, opacity: 0 }}
      class={cn(titleSize, "font-display font-black tracking-tighter text-gradient")}
    >
      {title}
    </h2>
  {/if}
</div>