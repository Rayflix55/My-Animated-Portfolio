<script lang="ts">
  import { ChevronRight } from "lucide-svelte";
  import SectionHeader from "./UI/SectionHeader.svelte";
  import ProjectCard from "./ProjectCard.svelte";
  import { projects } from "../lib/data/projects";
  import { navigate } from "../lib/router";

  const featured = projects.slice(0, 4);
</script>

<section class="py-40 md:py-60 container mx-auto px-6 lg:px-20 relative bg-transparent" id="portfolio">
  <div class="absolute inset-0 -z-30 pointer-events-none opacity-80 bg-gradient-to-b from-primary/5 to-transparent"></div>

  <SectionHeader subtitle="02 // Showcase" title="Featured Work" />

  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-20">
    {#each featured as project}
      <ProjectCard {project} />
    {/each}
  </div>

  <div class="flex justify-center mt-14">
    <a
      href="/projects"
      onclick={(e) => { e.preventDefault(); navigate('/projects'); }}
      class="group flex items-center gap-3 border border-white/15 hover:border-primary/60
             px-8 py-4 text-[11px] font-mono uppercase tracking-[0.3em]
             text-white/40 hover:text-primary bg-black/20 hover:bg-primary/5
             backdrop-blur-sm transition-all duration-300"
    >
      <span>View All Projects</span>
      <ChevronRight size={14} class="transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  </div>
</section>