import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Logo } from "@/components/Logo";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { ArrowLink } from "@/components/SafeLink";
import { Texture } from "@/components/Texture";
import { installateurs as copy } from "@/lib/installateurs";
import { homeHref } from "@/lib/paths";
import { links, product } from "@/lib/site";

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-paper/55">
      <span className="h-px w-8 bg-white/20" />
      <span>{children}</span>
    </p>
  );
}

const h2 =
  "max-w-3xl font-display text-[2.25rem] font-bold leading-[0.95] tracking-display sm:text-6xl sm:leading-[0.92]";
const section = "relative overflow-hidden border-t border-white/10 py-16 sm:py-24 md:py-28";
const primaryButton =
  "inline-flex h-12 w-full items-center justify-center rounded-full bg-navy px-6 text-sm font-medium text-paper transition duration-300 hover:scale-[1.03] hover:bg-[#2E5FE0] sm:w-auto";
const secondaryButton =
  "inline-flex h-12 w-full items-center justify-center rounded-full border border-white/20 px-6 text-sm font-medium text-paper transition duration-300 hover:scale-[1.03] hover:border-navy sm:w-auto";

export default function InstallateursPage() {
  return (
    <>
      <Navbar />
      <main id="main" lang="nl" className="pt-16 md:pt-[4.5rem]">
        {/* Hero */}
        <section className="relative overflow-hidden py-16 sm:py-24 md:py-32">
          <Texture />
          <div className="shell relative z-10">
            <Reveal>
              <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-paper/60">
                <span aria-hidden className="inline-block h-2 w-2 shrink-0 bg-navy" />
                {copy.hero.eyebrow}
              </p>
              <h1 className="mt-6 max-w-4xl font-display text-[2.5rem] font-bold leading-[0.92] tracking-display sm:mt-8 sm:text-7xl sm:leading-[0.9]">
                {copy.hero.title}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/75 md:text-lg">
                {copy.hero.intro}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={copy.hero.primary.href} className={primaryButton}>
                  {copy.hero.primary.label}
                </a>
                <a href={copy.hero.secondary.href} className={secondaryButton}>
                  {copy.hero.secondary.label}
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* What you get */}
        <section className={section}>
          <div className="shell relative z-10">
            <Reveal>
              <Label>{copy.why.label}</Label>
              <h2 className={h2}>{copy.why.title}</h2>
            </Reveal>
            <div className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-3">
              {copy.why.items.map((item, index) => (
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
          </div>
        </section>

        {/* Packages */}
        <section id="pakketten" className={section}>
          <Texture />
          <div className="shell relative z-10">
            <Reveal>
              <Label>{copy.packages.label}</Label>
              <h2 className={h2}>{copy.packages.title}</h2>
              <p className="mt-5 max-w-xl text-sm text-paper/55">{copy.packages.note}</p>
            </Reveal>
            <div className="mt-10 grid gap-4 sm:mt-12 lg:grid-cols-3">
              {copy.packages.items.map((pack, index) => (
                <Reveal key={pack.name} delay={index * 0.05} className="h-full">
                  <article
                    className={`relative flex h-full flex-col rounded-2xl border bg-card p-5 sm:p-8 ${
                      pack.highlight ? "border-navy" : "border-white/10"
                    }`}
                  >
                    {pack.highlight ? (
                      <span className="absolute right-4 top-4 rounded-full bg-navy px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-paper sm:right-5 sm:top-5">
                        Aanrader
                      </span>
                    ) : null}
                    <h3 className="pr-24 font-display text-2xl font-semibold tracking-display">
                      {pack.name}
                    </h3>
                    <p className="mt-6 font-display text-4xl font-bold tracking-display">
                      {pack.price}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-paper/45">
                      {pack.period}
                    </p>
                    <ul className="mt-6">
                      {pack.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex gap-3 border-t border-white/10 py-3 text-sm text-paper/75"
                        >
                          <span aria-hidden className="mt-[7px] inline-block h-1.5 w-1.5 shrink-0 bg-navy" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* The product */}
        <section id="product" className={section}>
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 top-10 hidden h-[26rem] w-[26rem] opacity-[0.06] lg:block"
          >
            <Logo brand="ayvstack" decorative fill />
          </div>
          <div className="shell relative z-10 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="min-w-0 lg:col-span-5">
              <Label>{copy.product.label}</Label>
              <Logo brand="ayvstack" className="h-16 w-16 sm:h-20 sm:w-20" />
              <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-paper/50">
                {product.name}
              </p>
            </Reveal>
            <Reveal delay={0.06} className="min-w-0 lg:col-span-7">
              <h2 className="font-display text-[2rem] font-bold leading-[0.98] tracking-display sm:text-5xl sm:leading-[0.95]">
                {copy.product.title}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/70 md:text-lg">
                {copy.product.body}
              </p>
              <ul className="mt-8 max-w-xl">
                {copy.product.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 border-t border-white/10 py-3 text-sm text-paper/80 sm:text-base"
                  >
                    <span aria-hidden className="mt-[8px] inline-block h-1.5 w-1.5 shrink-0 bg-navy" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 max-w-xl text-sm text-paper/55">{copy.product.status}</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
                <a href={copy.product.primary.href} className={primaryButton}>
                  {copy.product.primary.label}
                </a>
                <span className="group">
                  <ArrowLink href={copy.product.secondary.href} external>
                    {copy.product.secondary.label}
                    <span className="sr-only"> (opent in een nieuw tabblad)</span>
                  </ArrowLink>
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Process */}
        <section className={section}>
          <div className="shell relative z-10">
            <Reveal>
              <Label>{copy.process.label}</Label>
              <h2 className={h2}>{copy.process.title}</h2>
            </Reveal>
            <div className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-3">
              {copy.process.steps.map((step, index) => (
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
          </div>
        </section>

        {/* Earlier work */}
        <section className={section}>
          <div className="shell relative z-10 grid items-end gap-8 lg:grid-cols-12 lg:gap-14">
            <Reveal className="min-w-0 lg:col-span-7">
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
                    alt="Homepage van Dili Paints"
                    fill
                    unoptimized
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.06} className="min-w-0 lg:col-span-5 lg:pb-2">
              <Label>{copy.work.label}</Label>
              <h3 className="font-display text-[1.75rem] font-semibold tracking-display sm:text-4xl">
                {copy.work.name}
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-paper/65">
                {copy.work.body}
              </p>
              <div className="group mt-8">
                <ArrowLink href={copy.work.href} external>
                  {copy.work.cta}
                  <span className="sr-only"> (opent in een nieuw tabblad)</span>
                </ArrowLink>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className={section}>
          <div className="shell relative z-10 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="min-w-0 lg:col-span-4">
              <Label>{copy.faq.label}</Label>
              <h2 className="font-display text-[2.25rem] font-bold leading-[0.95] tracking-display sm:text-5xl">
                {copy.faq.title}
              </h2>
            </Reveal>
            <Reveal delay={0.06} className="min-w-0 lg:col-span-8">
              <div>
                {copy.faq.items.map((item) => (
                  <details key={item.q} className="group border-t border-white/10 py-5 last:border-b">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-medium text-paper sm:text-lg [&::-webkit-details-marker]:hidden">
                      <span>{item.q}</span>
                      <span
                        aria-hidden
                        className="shrink-0 text-xl text-paper/50 transition-transform duration-300 group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-paper/65 sm:text-base">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className={section}>
          <Texture />
          <div className="shell relative z-10">
            <Reveal>
              <h2 className={h2}>{copy.contact.title}</h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/70 md:text-lg">
                {copy.contact.body}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                <a href={copy.contact.cta.href} className={primaryButton}>
                  {copy.contact.cta.label}
                </a>
                <a
                  href={`tel:${links.phoneTel}`}
                  className="text-sm text-paper/80 underline decoration-white/20 underline-offset-4 transition hover:decoration-navy"
                >
                  {links.phone}
                </a>
                <a
                  href={`mailto:${links.email}`}
                  className="text-sm text-paper/80 underline decoration-white/20 underline-offset-4 transition hover:decoration-navy"
                >
                  {links.email}
                </a>
              </div>
              <a
                href={homeHref("main")}
                className="mt-12 inline-flex text-sm text-paper/60 underline decoration-white/20 underline-offset-4 transition hover:decoration-navy"
              >
                {copy.back}
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
