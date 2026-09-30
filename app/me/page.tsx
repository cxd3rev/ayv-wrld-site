import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { Texture } from "@/components/Texture";
import { me } from "@/lib/me";
import { homeHref } from "@/lib/paths";
import { about } from "@/lib/site";

export const metadata: Metadata = {
  title: "Me — AYV WRLD",
  description: "The person behind AYV WRLD.",
};

export default function MePage() {
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
                <span>{me.label}</span>
              </p>
              <h1 className="max-w-3xl font-display text-[2.25rem] font-bold leading-[0.95] tracking-display sm:text-6xl sm:leading-[0.92]">
                {me.title}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/75 md:text-lg">
                {about.bio}
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-paper/55 md:text-lg">
                {me.intro}
              </p>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:mt-14 md:grid-cols-2">
              {me.notes.map((note, index) => (
                <Reveal key={note.label} delay={index * 0.05}>
                  <article className="h-full rounded-2xl border border-white/10 bg-card p-5 sm:p-8">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-paper/50">
                      {note.label}
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-paper/75">
                      {note.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <a
                href={homeHref("about")}
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
