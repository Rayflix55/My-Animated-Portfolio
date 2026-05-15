<script>
  import { onMount, setContext } from 'svelte';
  import Lenis from "@studio-freight/lenis";

  let { children } = $props();

  onMount(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1.2,
      touchMultiplier: 1.5,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  });
</script>

{@render children()}
