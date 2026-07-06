<script lang="ts">
  import SectionHeader from "../components/UI/SectionHeader.svelte";
  import ProjectCard from "../components/ProjectCard.svelte";
  import { projects } from "../lib/data/projects";
</script>

<main class="relative z-10 w-full bg-transparent">
  <section class="py-40 md:py-60 container mx-auto px-6 lg:px-20 relative bg-transparent">
    <SectionHeader subtitle="02 // Showcase" title="All Projects" />

    <p class="max-w-3xl text-white/60 leading-7 mt-6">
      Explore the complete collection of projects with the same polished presentation as the featured work section.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16">
      {#each projects as project}
        <ProjectCard {project} />
      {/each}
    </div>
  </section>
</main>
