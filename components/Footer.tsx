import { Logo } from "@/components/Logo";
import { SafeLink } from "@/components/SafeLink";
import { homeHref, pageHref } from "@/lib/paths";
import { footerLinks, links } from "@/lib/site";

const socials = [
  {
    label: "X",
    href: links.x,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4" fill="currentColor">
        <path d="M14.7 10.3 22.2 2h-2.1l-6.5 7.2L8.3 2H2l8 11.1L2.4 22H4.5l7.1-7.9L15.6 22H22l-7.3-11.7Zm-2.5 2.8-.8-1.1L5.1 3.5h2.6l4.8 6.8.8 1.1 6.7 9.4h-2.6l-5.2-7.3Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: links.instagram,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.4" cy="6.6" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: links.github,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4" fill="currentColor">
        <path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.9 9.6.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.2-4.6-5.1 0-1.1.4-2 1-2.8-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.4 9.4 0 0 1 5 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.7.8 1 1.7 1 2.8 0 4-2.3 4.8-4.6 5.1.4.3.7 1 .7 2v2.9c0 .3.2.6.7.5 4-1.4 6.9-5.1 6.9-9.6C22 6.6 17.5 2 12 2Z" />
      </svg>
    ),
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  // Hide dead "#" socials until real profile URLs are set in lib/site.ts.
  const liveSocials = socials.filter((item) => item.href && item.href !== "#");

  return (
    <footer className="border-t border-white/10">
      <div className="shell py-12 sm:py-14 md:py-16">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
          <a href={homeHref("main")} className="flex min-w-0 items-center gap-3">
            <Logo brand="ayvwrld" className="h-9 w-9 shrink-0" />
            <span className="font-display text-sm font-semibold tracking-[0.18em]">
              AYV WRLD
            </span>
          </a>
          {liveSocials.length > 0 ? (
            <ul className="flex gap-3 sm:gap-4">
              {liveSocials.map((item) => (
                <li key={item.label}>
                  <SafeLink
                    href={item.href}
                    external
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-paper/70 transition duration-300 hover:scale-105 hover:text-paper"
                    aria-label={item.label}
                  >
                    {item.icon}
                  </SafeLink>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <ul className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
          {footerLinks.map((link) => (
            <li key={link.label} className="min-w-0">
              <SafeLink
                href={
                  link.href.startsWith("#")
                    ? homeHref(link.href)
                    : link.href.startsWith("/")
                      ? pageHref(link.href)
                      : link.href
                }
                external={"external" in link ? link.external : false}
                className="break-words text-sm text-paper/60 transition-colors duration-300 hover:text-paper"
              >
                {link.label}
              </SafeLink>
            </li>
          ))}
        </ul>

        <p className="mt-8 flex flex-col gap-1 text-sm text-paper/60 sm:mt-10 sm:flex-row sm:gap-6">
          <a
            href={`mailto:${links.email}`}
            className="transition-colors duration-300 hover:text-paper"
          >
            {links.email}
          </a>
          <a
            href={`tel:${links.phoneTel}`}
            className="transition-colors duration-300 hover:text-paper"
          >
            {links.phone}
          </a>
        </p>

        <p className="mt-10 text-xs text-paper/40 sm:mt-12">© {year} AYV WRLD</p>
      </div>
    </footer>
  );
}
