<script lang="ts">
  import SectionHeader from "./UI/SectionHeader.svelte";

  const socialLinks = [
    {
      label: "X (Twitter)",
      href: "https://x.com/web3rayflix",
      handle: "@web3rayflix",
      svg: `<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/akpe-samuel-993971329",
      handle: "Akpe Samuel",
      svg: `<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 1 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    },
    {
      label: "Email",
      href: "mailto:rayflix55@gmail.com",
      handle: "rayflix55@gmail.com",
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/></svg>`,
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/2349071167496",
      handle: "+234 90 7116 7496",
      svg: `<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>`,
    },
  ];

  let name = $state('');
  let email = $state('');
  let subject = $state('');
  let message = $state('');

  function handleSend(e: SubmitEvent) {
    e.preventDefault();
    const body = encodeURIComponent(
      `Hi Samuel,\n\n${message}\n\n---\nFrom: ${name}\nEmail: ${email}`
    );
    const sub = encodeURIComponent(subject || `Portfolio Enquiry from ${name}`);
    window.location.href = `mailto:rayflix55@gmail.com?subject=${sub}&body=${body}`;
  }
</script>

<section class="py-40 container mx-auto px-6 lg:px-20 relative bg-transparent" id="contact">

 <div class="absolute inset-0 -z-30 pointer-events-none opacity-80 bg-gradient-to-b from-primary/5 to-transparent"></div>

  <div class="engineered-border p-8 md:p-24 bg-white/[0.01] backdrop-blur-md relative overflow-hidden">
    <div class="absolute top-0 right-0 p-6 text-[10px] font-mono text-white/5 uppercase tracking-[0.2em] select-none pointer-events-none">
      Contact_Channel_Open
    </div>

    <div class="grid md:grid-cols-2 gap-20 relative z-10">

      <div class="flex flex-col justify-between gap-12 text-left">
        <div>
          <SectionHeader subtitle="04 // Terminal" title="Get In Touch" />
          <p class="text-white/40 text-xl font-light mt-8 max-w-sm leading-relaxed">
            Interested in working together or just want to say hi? I'm always open to new opportunities and collaborations.
          </p>
        </div>

        <div class="space-y-3">
          {#each socialLinks as link}
            <a
              href={link.href}
              target={link.label === 'Email' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              class="group flex items-center gap-4 border border-white/5 bg-white/[0.02] backdrop-blur-sm
                     px-5 py-4 hover:border-primary/40 hover:bg-white/[0.04]
                     transition-all duration-300 hover:-translate-x-1"
            >
              <span class="text-white/20 group-hover:text-primary transition-colors duration-300 shrink-0">
                {@html link.svg}
              </span>

              <div class="flex flex-col min-w-0">
                <span class="text-[9px] font-mono uppercase tracking-[0.2em] text-white/20 group-hover:text-white/40 transition-colors">
                  {link.label}
                </span>
                <span class="text-sm font-mono text-white/50 group-hover:text-white/80 transition-colors truncate">
                  {link.handle}
                </span>
              </div>

              <span class="ml-auto text-white/10 group-hover:text-primary transition-colors shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </span>
            </a>
          {/each}
        </div>
      </div>

      <form onsubmit={handleSend} class="space-y-5 flex flex-col">
        <input
          type="text"
          bind:value={name}
          placeholder="Full Name"
          required
          class="w-full bg-white/[0.02] border border-white/10 p-5
                 focus:border-primary outline-none transition-colors
                 font-mono text-sm text-primary placeholder:text-white/20"
        />
        <input
          type="email"
          bind:value={email}
          placeholder="Email Address"
          required
          class="w-full bg-white/[0.02] border border-white/10 p-5
                 focus:border-primary outline-none transition-colors
                 font-mono text-sm text-primary placeholder:text-white/20"
        />
        <input
          type="text"
          bind:value={subject}
          placeholder="Subject"
          class="w-full bg-white/[0.02] border border-white/10 p-5
                 focus:border-primary outline-none transition-colors
                 font-mono text-sm text-primary placeholder:text-white/20"
        />
        <textarea
          bind:value={message}
          placeholder="Your Message"
          rows={5}
          required
          class="w-full bg-white/[0.02] border border-white/10 p-5
                 focus:border-primary outline-none transition-colors
                 font-mono text-sm text-primary placeholder:text-white/20 resize-none"
        ></textarea>

        <button
          type="submit"
          class="group w-full py-5 flex items-center justify-center gap-3
                 font-mono text-sm uppercase tracking-widest
                 border border-primary text-primary
                 hover:bg-primary hover:text-black
                 active:scale-[0.98] transition-all duration-300"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="16" height="16"
               class="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12zm0 0h7.5"/>
          </svg>
          <span>Send Message</span>
        </button>

        <p class="text-[10px] font-mono text-white/15 text-center uppercase tracking-widest select-none">
          Opens your default email app
        </p>
      </form>
    </div>

    <div class="absolute -bottom-1 -right-1 w-8 h-8 border-b border-r border-primary select-none pointer-events-none"></div>
  </div>
</section>