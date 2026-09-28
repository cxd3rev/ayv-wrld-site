import { LogoMass } from "@/components/LogoMass";
import { Logo } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { hero } from "@/lib/site";

export function Hero() {
  return (
    <>
      <LogoMass />
      <section aria-labelledby="studio-title" className="relative py-20 md:py-28 lg:py-32">
        <div className="shell">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
            <Reveal>
              <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-paper/60">
                <span aria-hidden className="inline-block h-2 w-2 bg-navy" />
                {hero.eyebrow}
              </p>
              <h1
                id="studio-title"
                className="mt-8 max-w-[11ch] font-display text-5xl font-bold leading-[0.88] tracking-display sm:text-7xl lg:text-8xl"
              >
                {hero.title.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>
            </Reveal>
            <div className="h-28 w-28 shrink-0 self-end sm:h-32 sm:w-32 lg:h-48 lg:w-48 lg:self-center">
              <Logo brand="ayvwrld" className="h-full w-full" />
            </div>
          </div>

          <Reveal delay={0.08}>
            <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
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
      </section>
    </>
  );
}
