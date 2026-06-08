<script lang="ts">
  import { onMount, setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import Lenis from "@studio-freight/lenis";
  import { prefersReducedMotion, isCapableDevice } from '../lib/motion';

  let { children } = $props();

  const lenisInstance = writable<Lenis | null>(null);
  setContext('lenis', lenisInstance);

  onMount(() => {
    if ($prefersReducedMotion || !$isCapableDevice) return;

    const isWindows = typeof navigator !== 'undefined' && /Win/i.test(navigator.platform);

    const lenis = new Lenis({
      duration: 1.2,
      lerp: 0.1,
      wheelMultiplier: 1.0,
      touchMultiplier: 0.8,
      smoothWheel: true,
      syncTouch: !isWindows,
      infinite: false,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      autoRaf: false // Handing over RAF execution priority to Threlte useTask
    });

    lenisInstance.set(lenis);

    return () => {
      lenis.destroy();
      lenisInstance.set(null);
    };
  });
</script>

{@render children()}