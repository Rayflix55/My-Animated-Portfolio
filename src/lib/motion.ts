import { writable, readable } from 'svelte/store';

export const prefersReducedMotion = readable(false, (set) => {
  if (typeof window === 'undefined') return;
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  set(mediaQuery.matches);

  const handler = (e: MediaQueryListEvent) => set(e.matches);
  mediaQuery.addEventListener('change', handler);
  return () => mediaQuery.removeEventListener('change', handler);
});

export const isCapableDevice = writable(true);

export function checkHardwareCapability() {
  if (typeof window === 'undefined') return;

  // 1. Structural Viewport Guard (Tailwind lg breakpoint)
  const isSmallScreen = window.innerWidth < 1024;

  // 2. Hardware Archetype Matching
  const isMobileOrTablet = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const hasHeavyTouch = navigator.maxTouchPoints > 1 && window.innerWidth < 1024;

  if (isSmallScreen || isMobileOrTablet || hasHeavyTouch) {
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