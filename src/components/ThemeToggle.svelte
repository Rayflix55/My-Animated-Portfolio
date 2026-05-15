<script>
  import { onMount } from 'svelte';
  import { fade, fly, scale } from 'svelte/transition';
  import { Settings, Check } from "lucide-svelte";

  const ACCENTS = [
    { name: "Cyan", primary: "#06b6d4", accent: "#3b82f6" },
    { name: "Emerald", primary: "#10b981", accent: "#059669" },
    { name: "Purple", primary: "#a855f7", accent: "#7c3aed" },
    { name: "Rose", primary: "#f43f5e", accent: "#e11d48" },
    { name: "Amber", primary: "#f59e0b", accent: "#d97706" },
  ];

  let isOpen = $state(false);
  let activeAccent = $state(ACCENTS[0]);

  $effect(() => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      root.style.setProperty("--primary", activeAccent.primary);
      root.style.setProperty("--accent", activeAccent.accent);
    }
  });
</script>

<div class="fixed bottom-10 left-10 z-[100] hidden md:block">
  <button
    onclick={() => isOpen = !isOpen}
    class="w-12 h-12 glass flex items-center justify-center hover:border-primary/50 transition-colors group rounded-full"
  >
    <Settings class="w-5 h-5 transition-transform duration-700 {isOpen ? 'rotate-180' : 'group-hover:rotate-90'}" />
  </button>

  {#if isOpen}
    <div
      transition:fly={{ x: -20, duration: 300, opacity: 0 }}
      class="absolute bottom-16 left-0 glass p-4 rounded-2xl min-w-[200px]"
    >
      <div class="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-4 border-b border-white/5 pb-2">
        System_Accents
      </div>
      <div class="space-y-2">
        {#each ACCENTS as accent}
          <button
            onclick={() => activeAccent = accent}
            class={`w-full flex items-center justify-between p-2 rounded-lg transition-colors group ${
              activeAccent.name === accent.name ? 'bg-primary/10' : 'hover:bg-white/5'
            }`}
          >
            <div class="flex items-center gap-3">
              <div 
                class="w-3 h-3 rounded-full" 
                style:background-color={accent.primary}
              ></div>
              <span class={`text-xs font-mono transition-colors ${
                activeAccent.name === accent.name ? 'text-primary' : 'text-white/60'
              }`}>
                {accent.name.toUpperCase()}
              </span>
            </div>
            {#if activeAccent.name === accent.name}
              <Check class="w-3 h-3 text-primary" />
            {/if}
          </button>
        {/each}
      </div>
    </div>
  {/if}
</div>
