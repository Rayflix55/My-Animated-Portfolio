import { writable, readable } from 'svelte/store';

// Keep your standard reduced motion check
export const prefersReducedMotion = readable(false, (set) => {
  if (typeof window === 'undefined') return;
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  set(mediaQuery.matches);

  const handler = (e: MediaQueryListEvent) => set(e.matches);
  mediaQuery.addEventListener('change', handler);
  return () => mediaQuery.removeEventListener('change', handler);
});

// New performance check store
export const isCapableDevice = writable(true);

export function checkHardwareCapability() {
  if (typeof window === 'undefined') return;

  // 1. Hard check: Mobile/Tablet processors struggle with combined Lenis + multi-layer WebGL
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  // 2. GPU Profiler Check
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (gl) {
      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      if (debugInfo) {
        const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL).toLowerCase();
        
        // If the system is running on software rendering or ultra-low-power chips, flag it
        if (renderer.includes('swiftshader') || renderer.includes('software') || renderer.includes('llvmpipe')) {
          isCapableDevice.set(false);
          return;
        }
      }
    }
  } catch (e) {
    // If WebGL fails entirely, it's definitely not a capable 3D device
    isCapableDevice.set(false);
    return;
  }

  // If it's a mobile device, downgrade complexity to save scroll thread processing
  if (isMobile) {
    isCapableDevice.set(false);
  }
}