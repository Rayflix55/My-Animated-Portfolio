<script>
  import { onMount } from 'svelte';
  import { spring } from 'svelte/motion';

  let isHovering = $state(false);
  
  const cursor = spring({ x: -100, y: -100 }, {
    stiffness: 0.1,
    damping: 0.25
  });

  onMount(() => {
    const moveCursor = (e) => {
      cursor.set({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
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

<div
  class="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary pointer-events-none z-[9999] transition-all mix-blend-difference"
  style:transform="translate({$cursor.x}px, {$cursor.y}px) translate(-50%, -50%) scale({isHovering ? 2.5 : 1})"
  style:background-color={isHovering ? "rgba(6, 182, 212, 0.2)" : "transparent"}
></div>
