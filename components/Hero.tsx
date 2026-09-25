import { Logo } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { Texture } from "@/components/Texture";
import { hero } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <Texture strong />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[18%] top-[16%] h-[78vw] w-[78vw] opacity-[0.07] md:right-[-6%] md:top-1/2 md:h-[680px] md:w-[680px] md:-translate-y-1/2"
      >
        <Logo brand="ayvwrld" decorative fill className="h-full w-full" />
      </div>

      <div className="shell relative z-10 flex flex-1 flex-col justify-between pb-8 pt-28 md:pb-12 md:pt-32">
        <Reveal>
          <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-paper/60">
            <span aria-hidden className="inline-block h-2 w-2 bg-navy" />
            {hero.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="max-w-[11ch] font-display text-5xl font-bold leading-[0.88] tracking-display sm:text-7xl lg:text-8xl">
            {hero.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-xl text-base leading-relaxed text-paper/75 md:text-lg">
              {hero.subtext}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#products"
                className="inline-flex h-12 items-center justify-center rounded-full bg-paper px-6 text-sm font-medium text-ink transition duration-300 hover:scale-[1.03]"
              >
                See my products
              </a>
              <a
                href="#work"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-medium text-paper transition duration-300 hover:scale-[1.03] hover:border-navy"
              >
                Read my work
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="shell relative z-10 flex items-center gap-4 pb-6 text-[11px] uppercase tracking-[0.22em] text-paper/40">
        <span>Scroll</span>
        <span className="h-px flex-1 bg-white/10" />
      </div>
    </section>
  );
}
