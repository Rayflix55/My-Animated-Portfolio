<script lang="ts">
  import SectionHeader from "./UI/SectionHeader.svelte";

  const testimonials = [
    {
      name: "Yagazie Weng",
      role: "Executive Director",
      company: "Weng Foundation for the Deaf",
      companyShort: "WENG FOUNDATION",
      project: "Disability Support Platform",
      text: "Samuel built something we genuinely couldn't find anywhere else — a platform that speaks the language of the deaf community, not just for it. The accessibility-first approach and clean UI made onboarding effortless for our beneficiaries.",
      rating: 5,
      avatar: "YW",
      accent: "#4ade80",
    },
    {
      name: "David Okafor",
      role: "Head of Product",
      company: "Jupiter Analytics",
      companyShort: "JUPITER",
      project: "Real-Time Analytics Dashboard",
      text: "Real-time data at this visual fidelity is genuinely hard to pull off. Samuel delivered a dashboard that our engineers said would take a team of three. The performance under live data load impressed everyone at our demo.",
      rating: 5,
      avatar: "DO",
      accent: "#60a5fa",
    },
    {
      name: "Bisi Daniels",
      role: "Chief Technology Officer",
      company: "BDI Foundation",
      companyShort: "BDI FOUNDATION",
      project: "UI Architecture",
      text: "We came with a scattered design system and left with a coherent, scalable UI architecture. Samuel's component thinking is precise — every interaction is intentional, nothing is filler.",
      rating: 5,
      avatar: "BD",
      accent: "#e879f9",
    },
  ];
</script>

<section class="py-40 container mx-auto px-6 lg:px-20 overflow-hidden relative bg-transparent">

 <div class="absolute inset-0 -z-30 pointer-events-none opacity-80 bg-gradient-to-b from-primary/5 to-transparent"></div>

  <SectionHeader subtitle="03.5 // Feedback" title="Signal Feedback" />

  <div
    class="flex flex-nowrap gap-4 overflow-x-auto pb-6 snap-x snap-mandatory mt-20
           [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
  >
    {#each testimonials as t, i}
      <div
        class="group flex-shrink-0 w-[88vw] md:w-[520px] engineered-border bg-white/[0.02] backdrop-blur-md
               snap-center relative hover:bg-white/[0.04] transition-all duration-500
               hover:scale-[1.015] active:scale-[0.99] text-left flex flex-col"
      >
        <div class="flex items-center justify-between px-8 pt-6 pb-0">
          <span
            class="text-[9px] font-mono uppercase tracking-[0.25em] text-white/20"
          >
            {t.project}
          </span>
          <span class="text-[9px] font-mono text-white/10 tracking-widest">
            Feed_Source_{i + 1}
          </span>
        </div>

        <div class="flex flex-col flex-1 p-8 gap-7">
          <div class="flex gap-1.5">
            {#each Array(t.rating) as _}
              <div
                class="w-1.5 h-1.5 rounded-full"
                style="background-color: {t.accent}"
              ></div>
            {/each}
          </div>

          <blockquote
            class="text-[17px] font-light text-white/60 leading-relaxed flex-1"
          >
            "{t.text}"
          </blockquote>

          <div class="border-t border-white/5"></div>

          <div class="flex items-center gap-5">
            <div
              class="w-12 h-12 flex items-center justify-center text-[11px] font-mono font-bold
                     border shrink-0 transition-colors duration-300 select-none"
              style="border-color: {t.accent}22; color: {t.accent}; background-color: {t.accent}0d;"
            >
              {t.avatar}
            </div>

            <div class="flex flex-col gap-1 flex-1 min-w-0">
              <h4
                class="font-display font-black uppercase tracking-wider text-sm text-white leading-none"
              >
                {t.name}
              </h4>
              <p
                class="text-white/40 text-[10px] font-mono uppercase tracking-[0.18em] truncate"
              >
                {t.role}
              </p>
            </div>

            <div
              class="shrink-0 border px-3 py-1.5 text-[8px] font-mono uppercase tracking-[0.2em]
                     transition-all duration-300 group-hover:opacity-80 select-none"
              style="border-color: {t.accent}33; color: {t.accent}99;"
            >
              {t.companyShort}
            </div>
          </div>
        </div>

        <div
          class="absolute -bottom-px -right-px w-4 h-4 border-b border-r border-white/10
                 group-hover:border-primary transition-colors duration-300"
        ></div>
      </div>
    {/each}
  </div>

  <div class="flex items-center gap-3 mt-6 justify-center md:justify-start">
    {#each testimonials as _, i}
      <div
        class="w-6 h-px bg-white/10 first:bg-primary/60 transition-all"
      ></div>
    {/each}
    <span
      class="text-[9px] font-mono text-white/20 uppercase tracking-widest ml-2"
      >scroll</span
    >
  </div>
</section>