import { Logo } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { SafeLink } from "@/components/SafeLink";
import { Texture } from "@/components/Texture";
import { course } from "@/lib/site";

export function Course() {
  return (
    <section
      id="course"
      className="relative overflow-hidden border-t border-white/10 py-16 sm:py-24 md:py-32 lg:py-40"
    >
      <Texture />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-8 hidden h-[28rem] w-[28rem] opacity-[0.06] lg:block"
      >
        <Logo brand="oma" decorative fill />
      </div>

      <div className="shell relative z-10 grid items-start gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="min-w-0 lg:col-span-5">
          <p className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-paper/55 sm:mb-8">
            <span>03</span>
            <span className="h-px w-8 bg-white/20" />
            <span>Course</span>
          </p>
          <Logo brand="oma" className="h-20 w-20 sm:h-28 sm:w-28" />
          <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-paper/50 sm:mt-8">
            {course.name}
          </p>
        </Reveal>

        <Reveal delay={0.08} className="min-w-0 lg:col-span-7">
          <h2 className="font-display text-[2.25rem] font-bold leading-[0.95] tracking-display sm:text-5xl sm:leading-[0.92] lg:text-6xl">
            {course.title}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/70 md:text-lg">
            {course.description}
          </p>
          <ol className="mt-10 max-w-xl">
            {course.steps.map((step) => (
              <li
                key={step.n}
                className="flex gap-5 border-t border-white/10 py-4 text-sm text-paper/80 sm:text-base"
              >
                <span className="w-8 shrink-0 font-display text-sm tracking-display text-paper/40">
                  {step.n}
                </span>
                <span>{step.title}</span>
              </li>
            ))}
          </ol>
          {course.href.startsWith("http") ? (
            <SafeLink
              href={course.href}
              external
              className="mt-10 inline-flex h-12 w-full items-center justify-center rounded-full border border-white/20 px-6 text-sm font-medium text-paper transition duration-300 hover:scale-[1.03] hover:border-navy sm:w-auto"
            >
              {course.cta}
            </SafeLink>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
