<script lang="ts">
  import { onMount } from 'svelte';
  import SmoothScroll from "./components/SmoothScroll.svelte";
  import Navbar from "./components/Navbar.svelte";
  import ThemeToggle from "./components/ThemeToggle.svelte";
  import CommandPalette from "./components/CommandPalette.svelte";
  import { checkHardwareCapability, canUseMotion } from "./lib/motion";
  import Hero from "./components/Hero.svelte";
  import AboutMe from "./components/AboutMe.svelte";
  import Experience from "./components/Experience.svelte";
  import Services from "./components/Services.svelte";
  import WorkProcess from "./components/WorkProcess.svelte";
  import Projects from "./components/Projects.svelte";
  import Testimonials from "./components/Testimonials.svelte";
  import Contact from "./components/Contact.svelte";
  import Footer from "./components/Footer.svelte";
  import ProjectsPage from "./pages/ProjectsPage.svelte";
  import { route, initRouter } from "./lib/router";

  let BackgroundCanvasComponent: any = null;
  let CustomCursorComponent: any = null;

  onMount(() => {
    checkHardwareCapability();
    initRouter();

    const unsubscribe = canUseMotion.subscribe(async (value) => {
      if (!value) return;
      if (!BackgroundCanvasComponent) {
        const mod = await import("./components/BackgroundCanvas.svelte");
        BackgroundCanvasComponent = mod.default;
      }
      if (!CustomCursorComponent) {
        const mod = await import("./components/CustomCursor.svelte");
        CustomCursorComponent = mod.default;
      }
    });

    return () => {
      unsubscribe();
    };
  });
</script>

<SmoothScroll>
  {#if CustomCursorComponent}
    <svelte:component this={CustomCursorComponent} />
  {/if}
  <CommandPalette />
  <ThemeToggle />
  <div class="noise-overlay"></div>
  {#if BackgroundCanvasComponent}
    <svelte:component this={BackgroundCanvasComponent} />
  {/if}

  <div class="relative min-h-screen selection:bg-primary selection:text-black overflow-x-hidden">
    <div class="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <div class="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/5 blur-[120px]"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent/5 blur-[120px]"></div>
      <div class="absolute inset-0 grid-background opacity-20"></div>
    </div>

    <Navbar />

    <div class="fixed top-1/2 -right-4 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-8 py-8 px-4 border-l border-white/10 bg-black/40 backdrop-blur-md">
      <div class="rotate-90 text-[10px] font-mono tracking-[0.3em] text-white/20 whitespace-nowrap mb-12 uppercase">Social_Protocol</div>
      <div class="w-[1px] h-20 bg-white/10"></div>
      <div class="flex flex-col gap-6 text-white/20">
        <div class="w-3 h-3 border border-current hover:text-primary transition-colors cursor-pointer"></div>
        <div class="w-3 h-3 border border-current hover:text-primary transition-colors cursor-pointer"></div>
        <div class="w-3 h-3 border border-current hover:text-primary transition-colors cursor-pointer"></div>
      </div>
    </div>

    <main class="preserve-3d perspective-2000">
      {#if $route === 'projects'}
        <ProjectsPage />
      {:else}
        <Hero />
        <AboutMe />
        <Experience />
        <Services />
        <WorkProcess />
        <Projects />
        <Testimonials />
        <Contact />
      {/if}
    </main>

    <Footer />
  </div>
</SmoothScroll>