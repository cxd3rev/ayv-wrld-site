"use client";

import { useLocale } from "@/components/Locale";
import { Logo } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { ArrowLink } from "@/components/SafeLink";
import { Texture } from "@/components/Texture";
import { product } from "@/lib/site";

export function Product() {
  const { copy } = useLocale();
  const text = copy.product;
  return (
    <section
      id="product"
      className="relative overflow-hidden border-t border-white/10 py-16 sm:py-24 md:py-32 lg:py-40"
    >
      <Texture />
      <div className="shell relative z-10">
        <Reveal>
          <p className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-paper/55">
            <span className="h-px w-8 bg-white/20" />
            <span>{text.section}</span>
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <article className="max-w-3xl rounded-2xl border border-white/10 bg-card p-5 sm:p-10">
            <Logo brand="ayvstack" className="h-14 w-14 sm:h-16 sm:w-16" />
            <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-paper/50">
              {text.label}
            </p>
            <h2 className="mt-4 font-display text-[2rem] font-bold leading-[0.98] tracking-display sm:text-5xl">
              {product.name}
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-paper/70 md:text-lg">
              {text.pitch}
            </p>
            <div className="mt-8">
              <ArrowLink href={product.href} external={product.external}>
                {text.cta}
                <span className="sr-only"> {text.newTab}</span>
              </ArrowLink>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
