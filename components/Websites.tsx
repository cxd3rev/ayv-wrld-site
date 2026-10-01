import { Reveal } from "@/components/Reveal";
import { Texture } from "@/components/Texture";
import { siteHref } from "@/lib/paths";
import { websites } from "@/lib/site";

export function Websites() {
  return (
    <section
      id="websites"
      className="relative overflow-hidden border-t border-white/10 py-16 sm:py-24 md:py-32 lg:py-40"
    >
      <Texture />
      <div className="shell relative z-10">
        <Reveal>
          <p className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-paper/55">
            <span>02</span>
            <span className="h-px w-8 bg-white/20" />
            <span>{websites.label}</span>
          </p>
          <h2 className="max-w-3xl font-display text-[2.25rem] font-bold leading-[0.95] tracking-display sm:text-6xl sm:leading-[0.92]">
            {websites.title}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/75 md:text-lg">
            {websites.intro}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-3">
          {websites.points.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05} className="h-full">
              <article className="h-full rounded-2xl border border-white/10 bg-card p-5 sm:p-8">
                <span aria-hidden className="inline-block h-2 w-2 bg-navy" />
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-display">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/65">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="mt-16 border-t border-white/10 pt-8 font-display text-2xl font-semibold tracking-display sm:mt-20 sm:text-3xl">
            {websites.stepsTitle}
          </h3>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {websites.steps.map((step, index) => (
            <Reveal key={step.n} delay={index * 0.05} className="h-full">
              <article className="h-full border-t border-white/15 pt-6">
                <span className="font-display text-sm tracking-display text-paper/40">
                  {step.n}
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-display">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/65">{step.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 max-w-xl text-sm leading-relaxed text-paper/55">{websites.note}</p>
          <a
            href={siteHref(websites.href)}
            className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-paper px-6 text-sm font-medium text-ink transition duration-300 hover:scale-[1.03] sm:w-auto"
          >
            {websites.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
