"use client";

import Image from "next/image";
import { useLocale } from "@/components/Locale";
import { Reveal } from "@/components/Reveal";
import { Texture } from "@/components/Texture";
import { links } from "@/lib/site";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function CaseStudies() {
  const { copy } = useLocale();
  const study = copy.work;

  return (
    <section
      id="work"
      className="relative overflow-hidden border-t border-white/10 py-16 sm:py-24 md:py-32 lg:py-40"
    >
      <Texture />
      <div className="shell relative z-10">
        <Reveal>
          <p className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-paper/55">
            <span>03</span>
            <span className="h-px w-8 bg-white/20" />
            <span>{study.label}</span>
          </p>
          <h2 className="font-display text-[2.25rem] font-bold leading-[0.95] tracking-display sm:text-6xl sm:leading-[0.92]">
            {study.title}
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <article
            id="dili-paints"
            className="mt-10 grid items-end gap-8 border-t border-white/10 pt-8 sm:mt-14 sm:gap-10 sm:pt-10 md:mt-16 lg:grid-cols-12 lg:gap-14"
          >
            <div className="min-w-0 lg:col-span-7">
              <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#111111]">
                <div className="flex items-center gap-2 border-b border-white/[0.08] px-3 py-3 sm:px-4">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/20" />
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/20" />
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/20" />
                  <span className="ml-2 truncate text-[11px] text-paper/40">dilipaints.be</span>
                </div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#111111]">
                  <Image
                    src={`${basePath}/previews/dili-home.jpg`}
                    alt={study.alt}
                    fill
                    unoptimized
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              </div>
            </div>

            <div className="min-w-0 lg:col-span-5 lg:pb-2">
              <p className="text-[10px] uppercase tracking-[0.18em] text-paper/45">
                {study.client}
              </p>
              <h3 className="mt-4 font-display text-[1.75rem] font-semibold tracking-display sm:text-4xl">
                Dili Paints
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-paper/65">
                {study.description}
              </p>
              <p className="mt-3 text-sm text-paper/45">{study.meta}</p>
              <a
                href={links.diliPaints}
                target="_blank"
                rel="noreferrer noopener"
                className="group relative mt-8 inline-flex items-center gap-2 text-sm font-medium text-paper"
              >
                <span>{study.cta}</span>
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
                <span
                  aria-hidden
                  className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-navy transition-transform duration-300 group-hover:scale-x-100"
                />
              </a>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
