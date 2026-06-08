<script>
  import "../index.css";
  import { prefersReducedMotion } from '$lib/motion';
  let { children } = $props();
</script>

<div class="fixed inset-0 pointer-events-none z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
{@render children()}