import { derived, readable, writable } from 'svelte/store';

export const prefersReducedMotion = readable(false, (set) => {
  if (typeof window === 'undefined') return;
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  set(mediaQuery.matches);

  const handler = (e: MediaQueryListEvent) => set(e.matches);
  mediaQuery.addEventListener('change', handler);
  return () => mediaQuery.removeEventListener('change', handler);
});

export const isCapableDevice = writable(true);

export const canUseMotion = derived(
  [prefersReducedMotion, isCapableDevice],
  ([$prefersReducedMotion, $isCapableDevice]) => $isCapableDevice && !$prefersReducedMotion
);

export function checkHardwareCapability() {
  if (typeof window === 'undefined') return;

  // 1. Hardware archetype matching
  const isMobileOrTablet = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const isTouchDevice = navigator.maxTouchPoints > 0 || 'ontouchstart' in window;
  const prefersCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
  const prefersNoHover = window.matchMedia('(hover: none)').matches;
  const deviceMemory = (navigator as any).deviceMemory || 8;
  const hardwareConcurrency = navigator.hardwareConcurrency || 4;
  const isLowEndMemory = deviceMemory > 0 && deviceMemory < 4;
  const isLowEndCpu = hardwareConcurrency > 0 && hardwareConcurrency <= 2;

  if (
    isMobileOrTablet ||
    (isTouchDevice && (prefersCoarsePointer || prefersNoHover)) ||
    isLowEndMemory ||
    isLowEndCpu
  ) {
    isCapableDevice.set(false);
    return;
  }

  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (gl && gl instanceof WebGLRenderingContext) {
      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      if (debugInfo) {
        const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL).toLowerCase();
        
        if (renderer.includes('swiftshader') || renderer.includes('software') || renderer.includes('llvmpipe')) {
          isCapableDevice.set(false);
          return;
        }
      }
    }
  } catch (e) {
    isCapableDevice.set(false);
    return;
  }

  isCapableDevice.set(true);
}