import { ArrowLink } from "@/components/SafeLink";
import { Logo } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { Texture } from "@/components/Texture";
import { WaitlistForm } from "@/components/WaitlistForm";
import { siteHref } from "@/lib/paths";
import { product, products, work } from "@/lib/site";

function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <p className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-paper/55">
      <span>{index}</span>
      <span className="h-px w-8 bg-white/20" />
      <span>{label}</span>
    </p>
  );
}

export function Products() {
  return (
    <section id="products" className="relative overflow-hidden py-16 sm:py-24 md:py-32 lg:py-40">
      <Texture />
      <div className="shell relative z-10">
        <Reveal>
          <SectionLabel index="02" label="Projects" />
          <h2 className="max-w-3xl font-display text-[2.25rem] font-bold leading-[0.95] tracking-display sm:text-6xl sm:leading-[0.92] lg:text-7xl">
            {products.title}
          </h2>
        </Reveal>

        <div className="mt-10 sm:mt-12">
          <Reveal>
            <article
              id="product"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card p-5 transition duration-300 ease-out hover:border-white/20 sm:p-10 md:hover:-translate-y-1 lg:p-12"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-10 -right-6 hidden w-72 opacity-[0.07] md:block"
              >
                <Logo brand="ayvstack" decorative className="h-auto w-full" />
              </div>
              <div className="relative flex h-full flex-col justify-between gap-8 sm:gap-10">
                <div>
                  <div className="flex items-center gap-4">
                    <Logo brand="ayvstack" className="h-12 w-12 sm:h-16 sm:w-16" />
                    <p className="text-[11px] uppercase tracking-[0.2em] text-paper/50">
                      {product.label}
                    </p>
                  </div>
                  <h3 className="mt-6 max-w-xl break-words font-display text-[2rem] font-bold leading-[0.98] tracking-display sm:mt-8 sm:text-5xl sm:leading-[0.95]">
                    {product.name}
                  </h3>
                  <p className="mt-5 max-w-lg text-base leading-relaxed text-paper/70 md:text-lg">
                    {product.pitch}
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <ArrowLink href={product.href} external={product.external}>
                    {product.cta}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </ArrowLink>
                  <p className="text-xs text-paper/45">{product.status}</p>
                </div>
              </div>
            </article>
          </Reveal>
        </div>

        {/* Side projects: kept, but visibly not the focus. */}
        <Reveal>
          <div className="mt-16 flex flex-col gap-2 border-t border-white/10 pt-8 sm:mt-20 sm:flex-row sm:items-end sm:justify-between">
            <h3 className="font-display text-2xl font-semibold tracking-display sm:text-3xl">
              {products.sideTitle}
            </h3>
            <p className="max-w-sm text-sm text-paper/55">{products.sideIntro}</p>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:gap-5">
          {products.side.map((item, index) => {
            const href = "href" in item ? item.href : undefined;

            return (
              <Reveal key={item.id} delay={index * 0.06} className="h-full">
                <article
                  id={item.id}
                  className={`group relative flex h-full flex-col rounded-2xl border border-white/10 bg-card p-5 transition duration-300 ease-out hover:border-white/20 sm:p-8 ${
                    href ? "" : "opacity-80 hover:opacity-100"
                  }`}
                >
                  {href ? null : (
                    <span className="absolute right-4 top-4 rounded-full border border-white/15 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-paper/70 sm:right-5 sm:top-5">
                      Coming soon
                    </span>
                  )}
                  <Logo brand={item.brand} className="h-10 w-10 sm:h-12 sm:w-12" />
                  <h4 className="mt-6 font-display text-[1.5rem] font-bold tracking-display sm:text-2xl">
                    {item.name}
                  </h4>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-paper/65">
                    {item.pitch}
                  </p>
                  <div className="mt-auto">
                    {href ? (
                      <div className="mt-8">
                        <ArrowLink
                          href={href}
                          external={"external" in item ? item.external : false}
                        >
                          {"cta" in item ? item.cta : "Read more"}
                          <span className="sr-only"> (opens in a new tab)</span>
                        </ArrowLink>
                      </div>
                    ) : (
                      <WaitlistForm product={item.name} />
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <h3 className="mt-16 border-t border-white/10 pt-8 font-display text-2xl font-semibold tracking-display sm:mt-20 sm:text-3xl">
            Client work
          </h3>
        </Reveal>
        <Reveal className="mt-6">
          <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-card p-5 sm:max-w-md sm:p-8">
            <Logo brand="dili" className="h-10 w-10 sm:h-12 sm:w-12" />
            <h4 className="mt-6 font-display text-[1.5rem] font-bold tracking-display sm:text-2xl">
              {work.dili.name}
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-paper/65">{work.dili.description}</p>
            <div className="mt-8">
              <ArrowLink href={siteHref(work.dili.href)} external>
                {work.dili.cta}
                <span className="sr-only"> (opens in a new tab)</span>
              </ArrowLink>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
