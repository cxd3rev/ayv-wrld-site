import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { Texture } from "@/components/Texture";
import { homeHref } from "@/lib/paths";
import { thoughts } from "@/lib/thoughts";

export const metadata: Metadata = {
  title: "Think — AYV WRLD",
  description: "Ideas, lessons, and observations. Not a blog.",
};

export default function ThinkPage() {
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
                <span>{thoughts.label}</span>
              </p>
              <h1 className="max-w-3xl font-display text-[2.25rem] font-bold leading-[0.95] tracking-display sm:text-6xl sm:leading-[0.92]">
                {thoughts.title}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/75 md:text-lg">
                {thoughts.intro}
              </p>
            </Reveal>

            <div className="mt-10 flex max-w-3xl flex-col gap-4 sm:mt-14">
              {thoughts.notes.map((note, index) => (
                <Reveal key={note.title} delay={index * 0.05}>
                  <article className="rounded-2xl border border-white/10 bg-card p-5 sm:p-8">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-paper/50">
                      {note.kind}
                    </p>
                    <h2 className="mt-4 font-display text-2xl font-semibold tracking-display">
                      {note.title}
                    </h2>
                    <p className="mt-3 max-w-xl text-base leading-relaxed text-paper/75">
                      {note.body}
                    </p>
                  </article>
                </Reveal>
              ))}
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
