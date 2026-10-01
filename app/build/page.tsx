import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SafeLink } from "@/components/SafeLink";
import { Reveal } from "@/components/Reveal";
import { Texture } from "@/components/Texture";
import { build } from "@/lib/build";
import { homeHref, siteHref } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Build — AYV WRLD",
  description: "Products, client work, experiments, and the archive.",
};

export default function BuildPage() {
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
                <span>{build.label}</span>
              </p>
              <h1 className="max-w-3xl font-display text-[2.25rem] font-bold leading-[0.95] tracking-display sm:text-6xl sm:leading-[0.92]">
                {build.title}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/75 md:text-lg">
                {build.intro}
              </p>
            </Reveal>

            <div className="mt-10 flex max-w-3xl flex-col gap-12 sm:mt-14">
              {build.groups.map((group) => (
                <section key={group.label}>
                  <h2 className="font-display text-2xl font-semibold tracking-display">
                    {group.label}
                  </h2>
                  <ul className="mt-4 flex flex-col gap-4">
                    {group.items.map((item) => (
                      <li key={item.name}>
                        <article className="rounded-2xl border border-white/10 bg-card p-5 sm:p-8">
                          <div className="flex items-center justify-between gap-4">
                            <h3 className="font-display text-xl font-semibold tracking-display">
                              {item.name}
                            </h3>
                            <p className="shrink-0 text-[11px] uppercase tracking-[0.16em] text-paper/40">
                              {item.status}
                            </p>
                          </div>
                          <p className="mt-3 max-w-xl text-base leading-relaxed text-paper/75">
                            {item.note}
                          </p>
                          <SafeLink
                            href={siteHref(item.href)}
                            external={item.href.startsWith("http")}
                            className="mt-4 inline-flex text-sm text-paper/80 underline decoration-white/20 underline-offset-4 transition hover:decoration-navy"
                          >
                            {item.href.startsWith("http") ? "Open" : item.href.startsWith("/") ? "Open page" : "On the studio page"}
                          </SafeLink>
                        </article>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}

              <section>
                <h2 className="font-display text-2xl font-semibold tracking-display">
                  {build.experimentsLabel}
                </h2>
                {build.experiments.length === 0 ? (
                  <p className="mt-4 text-base leading-relaxed text-paper/55">
                    {build.experimentsEmpty}
                  </p>
                ) : (
                  <ul className="mt-4 flex flex-col gap-4">
                    {build.experiments.map((item) => (
                      <li
                        key={item.name}
                        className="rounded-2xl border border-white/10 bg-card p-5 sm:p-8"
                      >
                        <h3 className="font-display text-xl font-semibold tracking-display">
                          {item.name}
                        </h3>
                        <p className="mt-3 text-base leading-relaxed text-paper/75">
                          {item.note}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold tracking-display">
                  {build.archiveLabel}
                </h2>
                {build.archive.length === 0 ? (
                  <p className="mt-4 text-base leading-relaxed text-paper/55">
                    {build.archiveEmpty}
                  </p>
                ) : (
                  <ul className="mt-4 flex flex-col gap-4">
                    {build.archive.map((item) => (
                      <li
                        key={item.name}
                        className="rounded-2xl border border-white/10 bg-card p-5 sm:p-8"
                      >
                        <h3 className="font-display text-xl font-semibold tracking-display">
                          {item.name}
                        </h3>
                        <p className="mt-3 text-base leading-relaxed text-paper/75">
                          {item.note}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
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
