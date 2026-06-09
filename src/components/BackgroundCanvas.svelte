<script lang="ts">
  import { Canvas } from '@threlte/core';
  import ThreeBackground from './ThreeBackground.svelte';
  import { prefersReducedMotion, isCapableDevice } from '../lib/motion';
</script>

{#if $isCapableDevice && !$prefersReducedMotion}
  <div class="fixed inset-0 -z-20 pointer-events-none">
    <div class="absolute inset-0 w-full h-full">
      <Canvas>
        <ThreeBackground type="hero" />
      </Canvas>
    </div>
  </div>
{/if}
