<script lang="ts">
  import { cn } from "$lib/utils";
  import type { Snippet } from 'svelte';
  
  interface Props {
    children: Snippet;
    onclick?: (e: MouseEvent) => void;
    class?: string;
    variant?: "primary" | "outline" | "ghost";
  }

  let { children, onclick = () => {}, class: className = "", variant = "primary" }: Props = $props();

  const variants = {
    primary: "bg-white text-black hover:bg-primary transition-all font-mono font-bold uppercase tracking-widest",
    outline: "border border-white/10 hover:border-primary hover:text-primary transition-all backdrop-blur-md bg-white/[0.02] font-mono",
    ghost: "text-white/40 hover:text-white transition-colors font-mono",
  };
</script>

<button
  class={cn(
    "px-8 py-4 text-xs flex items-center justify-center gap-2 transition-all relative group overflow-hidden active:scale-95 hover:scale-105",
    variants[variant],
    className
  )}
  {onclick}
>
  {#if variant === "outline"}
    <div class="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-primary transition-colors"></div>
    <div class="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-primary transition-colors"></div>
  {/if}
  {@render children()}
</button>
