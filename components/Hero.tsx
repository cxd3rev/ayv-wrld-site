import { LogoMass } from "@/components/LogoMass";
import { Logo } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { siteHref } from "@/lib/paths";
import { hero } from "@/lib/site";

export function Hero() {
  return (
    <>
      <LogoMass />
      <section aria-labelledby="studio-title" className="relative py-16 sm:py-20 md:py-28 lg:py-32">
        <div className="shell">
          <div className="flex items-end justify-between gap-4 sm:gap-8 lg:items-center lg:gap-16">
            <Reveal className="min-w-0 flex-1">
              <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-paper/60">
                <span aria-hidden className="inline-block h-2 w-2 shrink-0 bg-navy" />
                {hero.eyebrow}
              </p>
              <h1
                id="studio-title"
                className="mt-5 max-w-[11ch] font-display text-[2.5rem] font-bold leading-[0.9] tracking-display sm:mt-8 sm:text-7xl sm:leading-[0.88] lg:text-8xl"
              >
                {hero.title.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>
            </Reveal>
            <div className="mb-1 h-16 w-16 shrink-0 sm:mb-2 sm:h-28 sm:w-28 lg:mb-0 lg:h-48 lg:w-48">
              <Logo brand="ayvwrld" className="h-full w-full" />
            </div>
          </div>

          <Reveal delay={0.08}>
            <div className="mt-8 flex flex-col gap-6 sm:mt-10 sm:gap-8 lg:flex-row lg:items-end lg:justify-between">
              <p className="max-w-xl text-base leading-relaxed text-paper/75 md:text-lg">
                {hero.subtext}
              </p>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <a
                  href={siteHref(hero.primaryCta.href)}
                  className="inline-flex h-12 w-full items-center justify-center rounded-full bg-paper px-6 text-sm font-medium text-ink transition duration-300 hover:scale-[1.03] sm:w-auto"
                >
                  {hero.primaryCta.label}
                </a>
                <a
                  href={siteHref(hero.secondaryCta.href)}
                  className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/20 px-6 text-sm font-medium text-paper transition duration-300 hover:scale-[1.03] hover:border-navy sm:w-auto"
                >
                  {hero.secondaryCta.label}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
