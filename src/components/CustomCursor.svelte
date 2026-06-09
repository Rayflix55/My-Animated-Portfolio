<script lang="ts">
  import { onMount } from 'svelte';
  import { spring } from 'svelte/motion';
  import { prefersReducedMotion, isCapableDevice } from '../lib/motion';

  let isHovering = $state(false);
  
  const cursor = spring({ x: -100, y: -100 }, {
    stiffness: 0.15,
    damping: 0.1
  });

  onMount(() => {
    if ($prefersReducedMotion || !$isCapableDevice) return;

    // Explicitly typed as MouseEvent
    const moveCursor = (e: MouseEvent) => {
      cursor.set({ x: e.clientX, y: e.clientY });
    };

    // Explicitly typed as MouseEvent
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      
      if (
        target.tagName === "BUTTON" || 
        target.tagName === "A" || 
        target.closest("button") || 
        target.closest("a")
      ) {
        isHovering = true;
      } else {
        isHovering = false;
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  });
</script>

{#if $isCapableDevice && !$prefersReducedMotion}
  <div
    class="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary pointer-events-none z-[9999] transition-all mix-blend-difference"
    style:transform="translate({$cursor.x}px, {$cursor.y}px) translate(-50%, -50%) scale({isHovering ? 2.5 : 1})"
    style:background-color={isHovering ? "rgba(6, 182, 212, 0.2)" : "transparent"}
  ></div>
{/if}

