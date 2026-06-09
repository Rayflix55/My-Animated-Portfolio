<script lang="ts">
  import { onMount } from 'svelte';
  import Lenis from "@studio-freight/lenis";

  let { children } = $props();

  onMount(() => {
    const lenis = new Lenis({
      duration: 1.4,
      lerp: 0.06,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.0,
      smoothWheel: true,
      syncTouch: true,
      infinite: false,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
    });

    let rafId: number = 0;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  });
</script>

{@render children()}