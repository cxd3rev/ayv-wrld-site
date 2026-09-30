import { ArrowLink } from "@/components/SafeLink";
import { Logo } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { Texture } from "@/components/Texture";
import { WaitlistForm } from "@/components/WaitlistForm";
import { products } from "@/lib/site";

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
          <SectionLabel index="02" label="Products" />
          <h2 className="max-w-3xl font-display text-[2.25rem] font-bold leading-[0.95] tracking-display sm:text-6xl sm:leading-[0.92] lg:text-7xl">
            {products.title}
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:mt-12 lg:grid-cols-2 lg:gap-5">
          <Reveal className="lg:col-span-2">
            <article
              id="automation-pack"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card p-5 transition duration-300 ease-out hover:border-white/20 sm:p-10 md:hover:-translate-y-1 lg:min-h-[420px] lg:p-14"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-10 -right-6 hidden w-72 opacity-[0.07] md:block"
              >
                <Logo brand="ayvstack" decorative className="h-auto w-full" />
              </div>
              <div className="relative flex h-full flex-col justify-between gap-8 sm:gap-12">
                <div>
                  <span aria-hidden className="mb-5 inline-block h-2 w-2 bg-navy sm:mb-8" />
                  <Logo brand="ayvstack" className="h-14 w-14 sm:h-20 sm:w-20" />
                  <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-paper/50 sm:mt-10">
                    Primary product
                  </p>
                  <h3 className="mt-3 max-w-xl break-words font-display text-[2rem] font-bold leading-[0.98] tracking-display sm:text-5xl sm:leading-[0.95] lg:text-6xl">
                    {products.featured.name}
                  </h3>
                  <p className="mt-5 max-w-lg text-base leading-relaxed text-paper/70 md:text-lg">
                    {products.featured.pitch}
                  </p>
                </div>
                <ArrowLink href={products.featured.href} external={products.featured.external}>
                  {products.featured.cta}
                  <span className="sr-only"> (opens in a new tab)</span>
                </ArrowLink>
              </div>
            </article>
          </Reveal>

          {products.upcoming.map((product, index) => {
            const href = "href" in product ? product.href : undefined;

            return (
              <Reveal key={product.id} delay={index * 0.06} className="h-full">
                <article
                  id={product.id}
                  className={`group relative flex h-full flex-col rounded-2xl border border-white/10 bg-card p-5 transition duration-300 ease-out hover:border-white/20 sm:p-8 md:hover:-translate-y-1 ${
                    href ? "" : "opacity-80 hover:opacity-100"
                  }`}
                >
                  {href ? null : (
                    <span className="absolute right-4 top-4 rounded-full border border-white/15 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-paper/70 sm:right-5 sm:top-5">
                      Coming soon
                    </span>
                  )}
                  {product.brand ? (
                    <Logo brand={product.brand} className="h-12 w-12 sm:h-14 sm:w-14" />
                  ) : null}
                  <h3
                    className={`font-display text-[1.75rem] font-bold tracking-display sm:text-3xl ${
                      product.brand ? "mt-6 sm:mt-8" : "mt-1"
                    } ${href ? "" : "pr-24 sm:pr-28"}`}
                  >
                    {product.name}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-paper/65">
                    {product.pitch}
                  </p>
                  <div className="mt-auto">
                    {href ? (
                      <div className="mt-8">
                        <ArrowLink
                          href={href}
                          external={"external" in product ? product.external : false}
                        >
                          {"cta" in product ? product.cta : "Read more"}
                          <span className="sr-only"> (opens in a new tab)</span>
                        </ArrowLink>
                      </div>
                    ) : (
                      <WaitlistForm product={product.name} />
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
