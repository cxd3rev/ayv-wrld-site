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
    <section id="products" className="relative overflow-hidden py-24 md:py-32 lg:py-40">
      <Texture />
      <div className="shell relative z-10">
        <Reveal>
          <SectionLabel index="02" label="Products" />
          <h2 className="max-w-3xl font-display text-4xl font-bold leading-[0.92] tracking-display sm:text-6xl lg:text-7xl">
            {products.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-2 lg:gap-5">
          <Reveal className="lg:col-span-2">
            <article
              id="automation-pack"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card p-7 transition duration-300 ease-out hover:-translate-y-1 hover:border-white/20 sm:p-10 lg:min-h-[420px] lg:p-14"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-10 -right-6 hidden w-72 opacity-[0.07] md:block"
              >
                <Logo brand="ayvstack" decorative className="h-auto w-full" />
              </div>
              <div className="relative flex h-full flex-col justify-between gap-12">
                <div>
                  <span aria-hidden className="mb-8 inline-block h-2 w-2 bg-navy" />
                  <Logo brand="ayvstack" className="h-16 w-16 sm:h-20 sm:w-20" />
                  <p className="mt-10 text-[11px] uppercase tracking-[0.2em] text-paper/50">
                    Primary product
                  </p>
                  <h3 className="mt-3 max-w-xl font-display text-4xl font-bold leading-[0.95] tracking-display sm:text-5xl lg:text-6xl">
                    {products.featured.name}
                  </h3>
                  <p className="mt-5 max-w-lg text-base leading-relaxed text-paper/70 md:text-lg">
                    {products.featured.pitch}
                  </p>
                </div>
                <ArrowLink href={products.featured.href}>
                  {products.featured.cta}
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
                  className={`group relative flex h-full flex-col rounded-2xl border border-white/10 bg-card p-7 transition duration-300 ease-out hover:-translate-y-1 hover:border-white/20 sm:p-8 ${
                    href ? "" : "opacity-80 hover:opacity-100"
                  }`}
                >
                  {href ? null : (
                    <span className="absolute right-5 top-5 rounded-full border border-white/15 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-paper/70">
                      Coming soon
                    </span>
                  )}
                  {product.brand ? (
                    <Logo brand={product.brand} className="h-14 w-14" />
                  ) : null}
                  <h3
                    className={`font-display text-3xl font-bold tracking-display ${
                      product.brand ? "mt-8" : "mt-1 pr-28"
                    }`}
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
