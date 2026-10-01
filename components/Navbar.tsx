"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LanguageSwitch, useLocale } from "@/components/Locale";
import { Logo } from "@/components/Logo";
import { homeHref, siteHref } from "@/lib/paths";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled || open;
  const { copy: text } = useLocale();
  const navLinks = [
    { href: "#websites", label: text.nav.websites },
    { href: "#work", label: text.nav.work },
    { href: "/automation", label: text.nav.product },
    { href: "/course", label: text.nav.course },
    { href: "#about", label: text.nav.about },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-white/10 bg-ink"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="shell flex h-16 items-center justify-between gap-3 md:h-[4.5rem]">
        <a
          href={homeHref("main")}
          onClick={() => setOpen(false)}
          className="flex min-w-0 items-center gap-2.5"
        >
          <Logo brand="ayvwrld" priority className="h-8 w-8 shrink-0" />
          <span className="truncate font-display text-[13px] font-semibold tracking-[0.18em]">
            AYV WRLD
          </span>
        </a>

        <nav aria-label={text.nav.primary} className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={siteHref(link.href)}
              className="text-[13px] text-paper/70 transition-colors duration-300 hover:text-paper"
            >
              {link.label}
            </a>
          ))}
          <LanguageSwitch />
          <a
            href={homeHref("contact")}
            className="inline-flex h-10 items-center rounded-full bg-navy px-4 text-[13px] font-medium text-paper transition duration-300 hover:scale-[1.03] hover:bg-[#2E5FE0]"
          >
            {text.nav.contact}
          </a>
        </nav>

        <LanguageSwitch className="lg:hidden" />

        <button
          type="button"
          className="relative -mr-1 flex h-11 w-11 shrink-0 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? text.nav.closeMenu : text.nav.openMenu}</span>
          <span
            className={`absolute left-2.5 right-2.5 h-px bg-paper transition duration-300 ${
              open ? "top-1/2 rotate-45" : "top-[15px]"
            }`}
          />
          <span
            className={`absolute left-2.5 right-2.5 h-px bg-paper transition duration-300 ${
              open ? "top-1/2 -rotate-45" : "top-[25px]"
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            aria-label={text.nav.mobile}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col gap-1 overflow-y-auto overscroll-contain bg-ink px-5 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-6 lg:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={siteHref(link.href)}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 font-display text-3xl font-semibold tracking-display sm:text-4xl"
              >
                {link.label}
              </a>
            ))}
            <a
              href={homeHref("contact")}
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex h-12 min-h-[48px] w-full items-center justify-center rounded-full bg-navy text-sm font-medium text-paper"
            >
              {text.nav.contact}
            </a>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
