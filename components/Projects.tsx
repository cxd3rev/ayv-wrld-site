"use client";

import { useLocale } from "@/components/Locale";
import { Reveal } from "@/components/Reveal";
import { Texture } from "@/components/Texture";
import { siteHref } from "@/lib/paths";
import { links } from "@/lib/site";

const targets = {
  dili: { href: links.diliPaints, external: true },
  automation: { href: "/automation", external: false },
  course: { href: "/course", external: false },
} as const;

export function Projects() {
  const { copy } = useLocale();
  const showcase = copy.showcase;

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-white/10 py-16 sm:py-24 md:py-32 lg:py-40"
    >
      <Texture />
      <div className="shell relative z-10">
        <Reveal>
          <p className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-paper/55">
            <span>02</span>
            <span className="h-px w-8 bg-white/20" />
            <span>{showcase.label}</span>
          </p>
          <h2 className="max-w-3xl font-display text-[2.25rem] font-bold leading-[0.95] tracking-display sm:text-6xl sm:leading-[0.92]">
            {showcase.title}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/75 md:text-lg">
            {showcase.intro}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:mt-14">
          {showcase.items.map((item, index) => {
            const target = targets[item.id as keyof typeof targets];
            return (
              <Reveal key={item.id} delay={index * 0.05}>
                <a
                  href={target.external ? target.href : siteHref(target.href)}
                  {...(target.external
                    ? { target: "_blank", rel: "noreferrer noopener" }
                    : {})}
                  className="group block rounded-2xl border border-white/10 bg-card p-5 transition duration-300 hover:border-white/25 sm:p-8"
                >
                  <p className="text-[11px] uppercase tracking-[0.2em] text-paper/45">
                    {item.kind}
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-semibold tracking-display sm:text-4xl">
                    {item.name}
                  </h3>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-paper/70">
                    {item.body}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-paper">
                    {item.cta}
                    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
