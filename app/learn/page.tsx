import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { Texture } from "@/components/Texture";
import { learning } from "@/lib/learning";
import { homeHref } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Learn — AYV WRLD",
  description: "What is being learned. Not a claim of expertise.",
};

export default function LearnPage() {
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
                <span>{learning.label}</span>
              </p>
              <h1 className="max-w-3xl font-display text-[2.25rem] font-bold leading-[0.95] tracking-display sm:text-6xl sm:leading-[0.92]">
                {learning.title}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/75 md:text-lg">
                {learning.intro}
              </p>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:mt-14 md:grid-cols-2">
              {learning.areas.map((area, index) => (
                <Reveal key={area.label} delay={index * 0.05}>
                  <article className="h-full rounded-2xl border border-white/10 bg-card p-5 sm:p-8">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-paper/50">
                        {area.label}
                      </p>
                      <p className="text-[11px] uppercase tracking-[0.16em] text-paper/40">
                        {area.status}
                      </p>
                    </div>
                    <p className="mt-4 text-base leading-relaxed text-paper/75">
                      {area.body}
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
