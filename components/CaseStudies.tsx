import { Reveal } from "@/components/Reveal";
import { Texture } from "@/components/Texture";
import { work } from "@/lib/site";

export function CaseStudies() {
  const study = work.dili;

  return (
    <section
      id="work"
      className="relative overflow-hidden border-t border-white/10 py-24 md:py-32 lg:py-40"
    >
      <Texture />
      <div className="shell relative z-10">
        <Reveal>
          <p className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-paper/55">
            <span>04</span>
            <span className="h-px w-8 bg-white/20" />
            <span>Work</span>
          </p>
          <h2 className="font-display text-4xl font-bold leading-[0.92] tracking-display sm:text-6xl">
            {work.title}
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <article
            id="dili-paints"
            className="mt-14 grid items-end gap-10 border-t border-white/10 pt-10 md:mt-16 lg:grid-cols-12 lg:gap-14"
          >
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#111111]">
                <div className="flex items-center gap-2 border-b border-white/[0.08] px-4 py-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                  <span className="ml-2 text-[11px] text-paper/40">dilipaints.be</span>
                </div>
                {/* PLACEHOLDER: swap this block for a real screenshot of https://dilipaints.be/
                    Example:
                    <Image src="/work/dili-paints.png" alt="Dili Paints homepage" width={1440} height={900} className="h-auto w-full" />
                */}
                <div className="flex aspect-[16/10] items-end bg-[linear-gradient(165deg,#1a1a1a_0%,#101010_70%)] p-6 sm:p-8">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-paper/40">
                      Screenshot
                    </p>
                    <p className="mt-3 font-display text-3xl font-semibold tracking-display sm:text-4xl">
                      Dili Paints
                    </p>
                    <p className="mt-2 text-sm text-paper/50">Kleur met klasse</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 lg:pb-2">
              <p className="text-[10px] uppercase tracking-[0.18em] text-paper/45">
                Client work
              </p>
              <h3 className="mt-4 font-display text-3xl font-semibold tracking-display sm:text-4xl">
                {study.name}
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-paper/65">
                {study.description}
              </p>
              <p className="mt-3 text-sm text-paper/45">{study.meta}</p>
              <a
                href={study.href}
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
