<script>
  import { Mail, LucideBook, X, LucideLink, MessageSquare } from "lucide-svelte";
  import { Canvas } from '@threlte/core';
  import Button from "./UI/Button.svelte";
  import SectionHeader from "./UI/SectionHeader.svelte";
  import ThreeBackground from "./ThreeBackground.svelte";

  const socialLinks = [
    { icon: LucideBook, href: "#" },
    { icon: X, href: "#" },
    { icon: LucideLink, href: "#" },
    { icon: Mail, href: "#" }
  ];
</script>

<section class="py-40 container mx-auto px-6 lg:px-20 relative" id="contact">
  <!-- Contact3D Background Placeholder -->
  <div class="absolute inset-0 -z-10 pointer-events-none overflow-hidden opacity-80">
    <div class="absolute inset-0">
      <Canvas>
        <ThreeBackground type="contact" />
      </Canvas>
    </div>
  </div>
  
  <div class="engineered-border p-8 md:p-24 bg-white/[0.01] relative overflow-hidden group">
    <div class="absolute top-0 right-0 p-6 text-[10px] font-mono text-white/5 uppercase tracking-[0.2em]">Contact_Channel_Encrypted</div>
    
    <div class="grid md:grid-cols-2 gap-20 relative z-10">
      <div class="text-left">
        <SectionHeader 
          subtitle="04 // Terminal" 
          title="Get In Touch" 
          class="mb-10"
        />
        <p class="text-white/40 text-xl font-light mb-16 max-w-sm leading-relaxed">
          Interested in working together or just want to say hi? I'm always open to new opportunities and collaborations.
        </p>

        <div class="flex gap-4">
          {#each socialLinks as link}
            <a
              href={link.href}
              class="w-12 h-12 border border-white/5 bg-white/[0.02] flex items-center justify-center text-white/20 hover:text-primary hover:border-primary transition-all hover:-translate-y-1"
            >
              <svelte:component this={link.icon} size={18} />
            </a>
          {/each}
        </div>
      </div>

      <form class="space-y-6" onsubmit={(e) => e.preventDefault()}>
        <div class="space-y-6">
          <input 
            type="text" 
            placeholder="Full Name"
            class="w-full bg-white/[0.02] border border-white/10 p-5 focus:border-primary outline-none transition-colors font-mono text-sm text-primary placeholder:text-white/20"
          />
          <input 
            type="email" 
            placeholder="Email Address"
            class="w-full bg-white/[0.02] border border-white/10 p-5 focus:border-primary outline-none transition-colors font-mono text-sm text-primary placeholder:text-white/20"
          />
        </div>
        <textarea 
          placeholder="Your Message" 
          rows={5}
          class="w-full bg-white/[0.02] border border-white/10 p-5 focus:border-primary outline-none transition-colors font-mono text-sm text-primary placeholder:text-white/20"
        ></textarea>
        <Button variant="primary" class="w-full py-6 text-sm">
          Send Message <MessageSquare size={18} />
        </Button>
      </form>
    </div>
    <div class="absolute -bottom-1 -right-1 w-8 h-8 border-b border-r border-primary"></div>
  </div>
</section>
