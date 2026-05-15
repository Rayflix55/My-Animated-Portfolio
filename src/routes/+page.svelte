<script>
  import { onMount } from 'svelte';
  import Navbar from "../components/Navbar.svelte";
  import Hero from "../components/Hero.svelte";
  import AboutMe from "../components/AboutMe.svelte";
  import Experience from "../components/Experience.svelte";
  import Services from "../components/Services.svelte";
  import WorkProcess from "../components/WorkProcess.svelte";
  import Projects from "../components/Projects.svelte";
  import Testimonials from "../components/Testimonials.svelte";
  import Contact from "../components/Contact.svelte";
  import Footer from "../components/Footer.svelte";
  import ThemeToggle from "../components/ThemeToggle.svelte";
  import CustomCursor from "../components/CustomCursor.svelte";
  import SmoothScroll from "../components/SmoothScroll.svelte";
  import CommandPalette from "../components/CommandPalette.svelte";

  let mounted = $state(false);
  onMount(() => {
    mounted = true;
  });
</script>

<svelte:head>
  <title>Rayflix | Creative Frontend Developer Portfolio</title>
  <meta name="description" content="Portfolio of Akpe Samuel (Rayflix), a Junior Frontend Developer specializing in high-end web experiences." />
</svelte:head>

<div class="relative min-h-screen bg-background text-white selection:bg-primary selection:text-black font-sans overflow-x-hidden">
  <!-- Scanline / Grid Overlay -->
  <div class="fixed inset-0 grid-background opacity-20 -z-10 pointer-events-none"></div>
  
  {#if mounted}
    <CustomCursor />
    <CommandPalette />
    <SmoothScroll>
      <Navbar />
      <main class="preserve-3d perspective-2000">
        <Hero />
        <AboutMe />
        <Projects />
        <Experience />
        <Services />
        <WorkProcess />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  {:else}
    <!-- SSR Fallback -->
    <Navbar />
    <main>
      <Hero />
      <AboutMe />
      <Projects />
      <Experience />
      <Services />
      <WorkProcess />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
  {/if}
  
  <div class="fixed bottom-10 right-10 z-[100]">
    <ThemeToggle />
  </div>
</div>

<style>
  :global(body) {
    background-color: #020617; /* bg-background */
    cursor: none; /* Crucial for CustomCursor to shine */
  }

  @media (max-width: 1024px) {
    :global(body) {
      cursor: auto;
    }
  }

  .perspective-2000 {
    perspective: 2000px;
  }

  .preserve-3d {
    transform-style: preserve-3d;
  }
</style>
