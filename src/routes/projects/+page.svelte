<script lang="ts">
  import { onMount, setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import Navbar from "../../components/Navbar.svelte";
  import Footer from "../../components/Footer.svelte";
  import CustomCursor from "../../components/CustomCursor.svelte";
  import SmoothScroll from "../../components/SmoothScroll.svelte";
  import CommandPalette from "../../components/CommandPalette.svelte";
  import SectionHeader from "../../components/UI/SectionHeader.svelte";
  import ProjectCard from "../../components/ProjectCard.svelte";
  import { projects } from "../../lib/data/projects";

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
        <section class="py-40 md:py-60 container mx-auto px-6 lg:px-20 relative bg-transparent">
          <SectionHeader subtitle="02 // Showcase" title="All Projects" />

          <p class="max-w-3xl text-white/60 leading-7 mt-6">
            Explore the complete collection of projects with the same polished presentation as the featured work section.
          </p>

          <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-16">
            {#each projects as project}
              <ProjectCard {project} />
            {/each}
          </div>
        </section>
      </main>

      <Footer />
    </SmoothScroll>
  {/if}
</div>
