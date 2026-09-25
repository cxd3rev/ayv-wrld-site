"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { navLinks } from "@/lib/site";

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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-white/10 bg-ink"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="shell flex h-16 items-center justify-between md:h-[4.5rem]">
        <a
          href="#main"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2.5"
        >
          <Logo brand="ayvwrld" priority className="h-8 w-8" />
          <span className="font-display text-[13px] font-semibold tracking-[0.18em]">
            AYV WRLD
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-paper/70 transition-colors duration-300 hover:text-paper"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex h-10 items-center rounded-full bg-navy px-4 text-[13px] font-medium text-paper transition duration-300 hover:scale-[1.03] hover:bg-[#2E5FE0]"
          >
            Get in touch
          </a>
        </nav>

        <button
          type="button"
          className="relative h-10 w-10 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span
            className={`absolute left-2 right-2 h-px bg-paper transition duration-300 ${
              open ? "top-1/2 rotate-45" : "top-[14px]"
            }`}
          />
          <span
            className={`absolute left-2 right-2 h-px bg-paper transition duration-300 ${
              open ? "top-1/2 -rotate-45" : "top-[24px]"
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col gap-2 bg-ink px-5 py-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 font-display text-4xl font-semibold tracking-display"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-navy text-sm font-medium text-paper"
            >
              Get in touch
            </a>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
