<script lang="ts">
  import { onMount } from 'svelte';
  import { ArrowUpRight, Globe, ChevronRight } from "lucide-svelte";
  import SectionHeader from "./UI/SectionHeader.svelte";

  const projects = [
    { 
      title: "Weng Foundation", 
      category: "Disability Support Platform",
      index: "01",
      image: "/projects/1.png", 
      liveLink: "https://yagaziewengfoundationforthedeaf.org/",
      githubLink: "https://github.com/Rayflix55/Yagazie-Weng-Umezurike-Foundation-",
      tech: ["Vanilla JS", "TailwindCSS", "HTML5"],
      status: "Live",
      year: "2026",
    },
    { 
      title: "Jupiter", 
      category: "Analytics Dashboard",
      index: "02",
      image: "/projects/4.png", 
      liveLink: "https://jupiter-real-time-analytics-dashboa.vercel.app/",
      githubLink: "https://github.com/Rayflix55/Jupiter-Real-Time-Analytics-Dashboard",
      tech: ["Vue 3", "TypeScript", "Pinia", "ECharts"],
      status: "Live",
      year: "2026",
    },
    { 
      title: "House of Enna", 
      category: "Female Clothing Brand",
      index: "03",
      image: "/projects/3.png", 
      liveLink: "https://house-of-enna.vercel.app/",
      githubLink: "https://github.com/Rayflix55/House-Of-Enna",
      tech: ["React 19", "TypeScript", "Framer-Motion", "Tailwind CSS"],
      status: "Live",
      year: "2026",
    },
    { 
      title: "BDI Foundation", 
      category: "Nonprofit Website",
      index: "04",
      image: "/projects/2.png", 
      liveLink: "https://techbdi.com.ng/",
      githubLink: "https://github.com/Chamberezigbo/Abaglobal",
      tech: ["HTML", "CSS", "SCSS", "JavaScript","PHP"],
      status: "Live",
      year: "2025",
    },
  ];

  const featured = projects.slice(0, 4);

  let scrollY = $state(0);
  onMount(() => {
    const handleScroll = () => scrollY = window.scrollY;
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function statusColor(status: string) {
    if (status === 'Live') return 'text-emerald-400 border-emerald-400/30 bg-emerald-400/5';
    if (status === 'In Progress') return 'text-amber-400 border-amber-400/30 bg-amber-400/5';
    return 'text-white/30 border-white/10 bg-white/5';
  }
</script>

<section class="py-40 md:py-60 container mx-auto px-6 lg:px-20 relative bg-transparent" id="portfolio">

 <div class="absolute inset-0 -z-30 pointer-events-none opacity-80 bg-gradient-to-b from-primary/5 to-transparent"></div>

  <SectionHeader subtitle="02 // Showcase" title="Featured Work" />

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
    {#each featured as project}
      <div class="group engineered-border bg-slate-950/40 backdrop-blur-md overflow-hidden
                  transition-all duration-500 hover:scale-[1.015] active:scale-[0.99]">

        <div class="relative w-full aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            class="w-full h-full object-cover object-top
                   grayscale opacity-25
                   group-hover:opacity-95 group-hover:grayscale-0 group-hover:scale-105
                   transition-all duration-1000 ease-out"
          />

          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none"></div>

          <span class="absolute top-3 right-3 text-[9px] font-mono uppercase tracking-[0.2em]
                       px-2.5 py-1 border rounded-full backdrop-blur-sm {statusColor(project.status)}">
            {project.status}
          </span>

          <div class="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/15 group-hover:border-primary/60 transition-colors"></div>
          <div class="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/15 group-hover:border-primary/60 transition-colors"></div>
        </div>

        <div class="flex flex-col gap-4 p-6">
          <span class="text-[10px] font-mono text-white/20 tracking-[0.25em] uppercase">
            {project.index} // {project.category}
          </span>

          <h3 class="text-[24px] md:text-[28px] font-display font-black uppercase tracking-tighter leading-none
                     group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>

      <div class="flex flex-wrap gap-2">
            {#each project.tech as t}
              <span class="text-[9px] font-mono uppercase tracking-[0.15em] px-2.5 py-1
                           border border-white/10 text-white/40
                           group-hover:border-primary/20 group-hover:text-white/60
                           transition-all duration-300">
                {t}
              </span>
            {/each} </div>

          <div class="border-t border-white/8 pt-4 flex items-center justify-between">
            <span class="text-[10px] font-mono text-white/20 tracking-widest">{project.year}</span>

            <div class="flex items-center gap-2">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.15em]
                       text-white/30 hover:text-white border border-white/10 hover:border-white/40
                       px-3 py-2 transition-all duration-200 hover:bg-white/5"
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>Source</span>
              </a>

              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.15em]
                       text-primary/60 hover:text-primary border border-primary/20 hover:border-primary/60
                       px-3 py-2 transition-all duration-200 hover:bg-primary/5
                       {project.liveLink === '#' ? 'opacity-30 pointer-events-none' : ''}"
              >
                <Globe size={11} />
                <span>Live</span>
              </a>

              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                class="w-9 h-9 border border-white/15 flex items-center justify-center
                       text-white/40 group-hover:border-primary group-hover:text-primary
                       transition-all duration-300 bg-black/40 backdrop-blur-md hover:rotate-45
                       {project.liveLink === '#' ? 'opacity-30 pointer-events-none' : ''}"
                aria-label={`View ${project.title}`}
              >
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>

      </div>
    {/each}
  </div>

  <div class="flex justify-center mt-14">
    <a
      href="#"
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