"use client";

import { FormEvent, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Texture } from "@/components/Texture";
import { about, links } from "@/lib/site";

export function About() {
  const [opened, setOpened] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // PLACEHOLDER: no backend yet. This hands the message to the visitor's email app.
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = encodeURIComponent(`AYV WRLD — ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
    window.location.href = `mailto:${links.email}?subject=${subject}&body=${body}`;
    setOpened(true);
  }

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/10 py-24 md:py-32 lg:py-40"
    >
      <Texture />
      <div className="shell relative z-10 grid gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-paper/55">
            <span>05</span>
            <span className="h-px w-8 bg-white/20" />
            <span>About</span>
          </p>
          <h2 className="font-display text-4xl font-bold leading-[0.92] tracking-display sm:text-6xl">
            {about.title}
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-paper/75 md:text-lg">
            {about.bio}
          </p>
          <a
            href={`mailto:${links.email}`}
            className="mt-8 inline-flex text-sm text-paper/80 underline decoration-white/20 underline-offset-4 transition hover:decoration-navy"
          >
            {links.email}
          </a>
        </Reveal>

        <Reveal delay={0.08}>
          <form
            id="contact"
            onSubmit={onSubmit}
            className="rounded-2xl border border-white/10 bg-card p-6 sm:p-8"
          >
            <p className="text-[11px] uppercase tracking-[0.2em] text-paper/50">
              Contact
            </p>
            <div className="mt-6 space-y-4">
              <label className="block">
                <span className="mb-2 block text-xs text-paper/75">Name</span>
                <input
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="h-11 w-full rounded-lg border border-white/20 bg-ink px-3 text-sm text-paper outline-none focus:border-white/40"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs text-paper/75">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="h-11 w-full rounded-lg border border-white/20 bg-ink px-3 text-sm text-paper outline-none focus:border-white/40"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs text-paper/75">Message</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-y rounded-lg border border-white/20 bg-ink px-3 py-3 text-sm text-paper outline-none focus:border-white/40"
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-navy px-6 text-sm font-medium text-paper transition duration-300 hover:scale-[1.03] hover:bg-[#2E5FE0]"
            >
              Get in touch
            </button>
            <p className="mt-4 text-xs leading-relaxed text-paper/45">
              {opened
                ? "Your email app should be open with this message."
                : "Opens your email app. Nothing is stored on this site."}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
