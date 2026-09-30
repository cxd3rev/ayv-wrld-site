import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { Texture } from "@/components/Texture";
import { journey } from "@/lib/journey";
import { homeHref } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Journey — AYV WRLD",
  description: "A timeline. Future years are not written yet.",
};

export default function JourneyPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="pt-16 md:pt-[4.5rem]">
        <section className="relative overflow-hidden py-16 sm:py-24 md:py-32">
          <Texture />
          <div className="shell relative z-10">
            <Reveal>
              <p className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-paper/55">
                <span className="h-px w-8 bg-white/20" />
                <span>{journey.label}</span>
              </p>
              <h1 className="max-w-3xl font-display text-[2.25rem] font-bold leading-[0.95] tracking-display sm:text-6xl sm:leading-[0.92]">
                {journey.title}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/75 md:text-lg">
                {journey.intro}
              </p>
            </Reveal>

            <ol className="mt-10 max-w-3xl sm:mt-14">
              {journey.chapters.map((chapter, index) => (
                <li key={chapter.year}>
                  <Reveal delay={index * 0.05}>
                    <article className="relative border-l border-white/10 pb-8 pl-6 last:pb-0">
                      <span className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-paper/70" />
                      <p className="text-[11px] uppercase tracking-[0.2em] text-paper/50">
                        {chapter.year}
                      </p>
                      <h2 className="mt-3 font-display text-2xl font-semibold tracking-display">
                        {chapter.title}
                      </h2>
                      <p className="mt-3 max-w-xl text-base leading-relaxed text-paper/75">
                        {chapter.body}
                      </p>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ol>

            <div className="mt-14 max-w-3xl">
              <Reveal>
                <h2 className="font-display text-2xl font-semibold tracking-display">
                  {journey.milestonesLabel}
                </h2>
                {journey.milestones.length === 0 ? (
                  <p className="mt-4 text-base leading-relaxed text-paper/55">
                    {journey.milestonesEmpty}
                  </p>
                ) : (
                  <ul className="mt-4 flex flex-col gap-3">
                    {journey.milestones.map((item) => (
                      <li
                        key={`${item.year}-${item.title}`}
                        className="rounded-2xl border border-white/10 bg-card p-5"
                      >
                        <p className="text-[11px] uppercase tracking-[0.2em] text-paper/50">
                          {item.year}
                        </p>
                        <p className="mt-2 text-base text-paper/75">{item.title}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            </div>

            <Reveal>
              <a
                href={homeHref("main")}
                className="mt-10 inline-flex text-sm text-paper/80 underline decoration-white/20 underline-offset-4 transition hover:decoration-navy"
              >
                Back to the studio
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
