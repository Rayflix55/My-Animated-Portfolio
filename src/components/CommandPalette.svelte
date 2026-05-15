<script>
  import { onMount, tick } from 'svelte';
  import { fade, fly, scale } from 'svelte/transition';
  import { Command, Search, Hash, Laptop, Mail, Zap, Terminal } from "lucide-svelte";

  let isOpen = $state(false);
  let query = $state("");
  let inputRef = $state();

  const commands = [
    { id: "hero", label: "Home / Core", icon: Laptop, shortcut: "H" },
    { id: "about", label: "About / Identity", icon: Hash, shortcut: "A" },
    { id: "portfolio", label: "Work / Projects", icon: Zap, shortcut: "W" },
    { id: "experience", label: "Tech / Experience", icon: Terminal, shortcut: "T" },
    { id: "contact", label: "Connect / Contact", icon: Mail, shortcut: "C" },
  ];

  let filteredCommands = $derived(commands.filter(cmd => 
    cmd.label.toLowerCase().includes(query.toLowerCase())
  ));

  onMount(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        isOpen = !isOpen;
      }
      if (e.key === "Escape") isOpen = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  $effect(() => {
    if (isOpen) {
      tick().then(() => inputRef?.focus());
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  });

  const handleExecute = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    isOpen = false;
    query = "";
  };
</script>

{#if isOpen}
  <div class="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6">
    <div 
      transition:fade={{ duration: 200 }}
      role="button"
      tabindex="0"
      onclick={() => isOpen = false}
      onkeydown={(e) => e.key === 'Escape' && (isOpen = false)}
      class="absolute inset-0 bg-black/80 backdrop-blur-md"
    ></div>
    
    <div
      transition:fly={{ y: 20, duration: 400, opacity: 0 }}
      class="w-full max-w-2xl glass rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border-white/10 relative"
    >
      <div class="p-6 border-b border-white/5 flex items-center gap-4">
        <Search class="w-5 h-5 text-primary" />
        <input
          bind:this={inputRef}
          bind:value={query}
          placeholder="Search commands or navigate Rayflix.OS..."
          class="flex-1 bg-transparent border-none outline-none text-lg font-mono placeholder:text-white/20 text-white"
        />
        <div class="flex items-center gap-1.5 px-2 py-1 rounded bg-white/5 border border-white/10">
          <span class="text-[10px] font-mono text-white/40">ESC to close</span>
        </div>
      </div>

      <div class="p-4 max-h-[60vh] overflow-y-auto">
        <div class="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] mb-4 px-2">
          Navigation_Modules
        </div>
        
        <div class="space-y-1">
                {#each filteredCommands as cmd}
                  {@const Icon = cmd.icon}
                  <button
                    onclick={() => handleExecute(cmd.id)}
                    class="w-full flex items-center justify-between p-4 rounded-xl hover:bg-primary/10 transition-all group border border-transparent hover:border-primary/20 text-left"
                  >
                    <div class="flex items-center gap-4">
                      <div class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon class="w-5 h-5 text-white/40 group-hover:text-primary transition-colors" />
                      </div>
                <div>
                  <div class="text-sm font-bold uppercase tracking-tight text-white/80 group-hover:text-white">
                    {cmd.label}
                  </div>
                  <div class="text-[10px] font-mono text-white/20 group-hover:text-primary/40 uppercase">
                    jump://rayflix.os/{cmd.id}
                  </div>
                </div>
              </div>
              
              <div class="hidden sm:flex items-center gap-1">
                <span class="text-[10px] font-mono text-white/10 uppercase group-hover:text-primary/20">Shortcut:</span>
                <kbd class="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-white/40 group-hover:text-primary transition-colors">
                  {cmd.id.charAt(0).toUpperCase()}
                </kbd>
              </div>
            </button>
          {/each}

          {#if filteredCommands.length === 0}
            <div class="py-20 text-center">
              <div class="text-white/20 font-mono text-sm tracking-tighter italic">No modules found matching "{query}"</div>
              <div class="text-primary/40 font-mono text-[10px] mt-2 uppercase">Error Code: MODULE_NOT_FOUND</div>
            </div>
          {/if}
        </div>
      </div>

      <div class="p-4 bg-black/40 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/20">
        <div class="flex gap-4">
          <span>↑↓ to navigate</span>
          <span>⏎ to select</span>
        </div>
        <div class="flex items-center gap-2">
          <Command class="w-3 h-3" />
          <span>Rayflix.OS v2.4.0</span>
        </div>
      </div>
    </div>
  </div>
{/if}
