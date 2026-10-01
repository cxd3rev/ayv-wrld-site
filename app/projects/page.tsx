import type { Metadata } from "next";
import { Course } from "@/components/Course";
import { Footer } from "@/components/Footer";
import { Logo } from "@/components/Logo";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { ArrowLink } from "@/components/SafeLink";
import { Texture } from "@/components/Texture";
import { homeHref } from "@/lib/paths";
import { product } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects — AYV WRLD",
  description: "AYV Automation and One Man Army Stack, apart from the website work.",
};

export default function ProjectsPage() {
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
                <span>Projects</span>
              </p>
              <h1 className="max-w-3xl font-display text-[2.25rem] font-bold leading-[0.95] tracking-display sm:text-6xl sm:leading-[0.92]">
                Two other things I build.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/75 md:text-lg">
                These are not the websites. Each one has its own place.
              </p>
            </Reveal>

            <Reveal className="mt-12">
              <article className="max-w-3xl rounded-2xl border border-white/10 bg-card p-5 sm:p-10">
                <Logo brand="ayvstack" className="h-14 w-14 sm:h-16 sm:w-16" />
                <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-paper/50">
                  {product.label}
                </p>
                <h2 className="mt-4 font-display text-[2rem] font-bold leading-[0.98] tracking-display sm:text-5xl">
                  {product.name}
                </h2>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-paper/70 md:text-lg">
                  {product.pitch}
                </p>
                <div className="mt-8">
                  <ArrowLink href={product.href} external={product.external}>
                    {product.cta}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </ArrowLink>
                </div>
              </article>
            </Reveal>
          </div>
        </section>

        <Course />

        <section className="border-t border-white/10 py-12">
          <div className="shell">
            <a
              href={homeHref("main")}
              className="text-sm text-paper/70 underline decoration-white/20 underline-offset-4 transition hover:decoration-navy"
            >
              Back to websites
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
