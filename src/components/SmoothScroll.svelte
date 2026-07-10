<script lang="ts">
  import { onMount } from 'svelte';
  import { prefersReducedMotion, isCapableDevice } from '../lib/motion';

  let lenis: any;
  let rafId = 0;
  let active = true;

  onMount(() => {
    if ($prefersReducedMotion || !$isCapableDevice) return;

    const initSmoothScroll = async () => {
      const module = await import('@studio-freight/lenis');
      if (!active || $prefersReducedMotion || !$isCapableDevice) return;

      const Lenis = module.default;
      lenis = new Lenis({
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

      const raf = (time: number) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };

      rafId = requestAnimationFrame(raf);
    };

    initSmoothScroll();

    return () => {
      active = false;
      cancelAnimationFrame(rafId);
      if (lenis?.destroy) lenis.destroy();
    };
  });
</script>

<slot />