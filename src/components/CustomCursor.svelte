<script lang="ts">
  import { onMount } from 'svelte';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import { prefersReducedMotion, isCapableDevice } from '../lib/motion';

  let isHovering = $state(false);
  
  const cursor = tweened({ x: -100, y: -100 }, {
    duration: 120,
    easing: cubicOut
  });

  onMount(() => {
    if ($prefersReducedMotion || !$isCapableDevice) return;

    const moveCursor = (e: PointerEvent) => {
      cursor.set({ x: e.clientX, y: e.clientY });
    };

    const updateHoverState = (target: EventTarget | null) => {
      const element = target instanceof HTMLElement ? target : null;
      if (!element) {
        isHovering = false;
        return;
      }

      if (
        element.tagName === "BUTTON" ||
        element.tagName === "A" ||
        element.closest("button") ||
        element.closest("a")
      ) {
        isHovering = true;
      } else {
        isHovering = false;
      }
    };

    const handlePointerOver = (e: PointerEvent) => updateHoverState(e.target);
    const handlePointerDown = (e: PointerEvent) => updateHoverState(e.target);
    const handlePointerUp = () => {
      isHovering = false;
    };

    window.addEventListener("pointermove", moveCursor, { passive: true });
    window.addEventListener("pointerover", handlePointerOver, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });

    return () => {
      window.removeEventListener("pointermove", moveCursor);
      window.removeEventListener("pointerover", handlePointerOver);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
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

