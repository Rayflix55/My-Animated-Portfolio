<script lang="ts">
  import { onMount, setContext } from 'svelte';
  import { writable } from 'svelte/store';
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
  
  const lenisStore = writable(null);
  setContext('lenis', lenisStore);
  
  let mounted = $state(false);
  onMount(() => { mounted = true; });
</script>

<div class="relative w-full bg-transparent text-white font-sans">
  {#if mounted}
    <CustomCursor />
    <CommandPalette />
    
    <SmoothScroll>
      <Navbar />
      <main class="relative z-10 w-full bg-transparent">
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
    {/if}
</div>