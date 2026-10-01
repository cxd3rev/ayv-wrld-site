/**
 * Copy and outbound links for the AYV WRLD portfolio.
 * Search this file for "PLACEHOLDER" and replace those lines.
 *
 * AYV WRLD is the personal site. The heating-installer product lives in
 * another repo and is only linked from here.
 */

export const links = {
  /** The product lives in its own repo (cxd3rev/ayv-wrld2) and on this domain. */
  product: "https://www.ayvautomation.space",
  /** Dutch landing page for the website service, on this site. */
  installateurs: "/installateurs",
  // PLACEHOLDER: replace with the live One Man Army Stack course URL.
  course: "#course",
  diliPaints: "https://dilipaints.be/",
  rated: "https://rated-ivory.vercel.app/",
  email: "info@ayvwrld.com",
  phone: "0468 56 33 64",
  phoneTel: "+32468563364",
  // PLACEHOLDER: replace with your real social profile URLs.
  // Keep "#" until real profiles exist — Footer hides dead "#" links.
  x: "#",
  instagram: "#",
  github: "#",
} as const;

export const navLinks = [
  { href: "#products", label: "Projects" },
  { href: "/installateurs", label: "Websites" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "/now", label: "Now" },
] as const;

export const hero = {
  eyebrow: "Independent studio · Belgium",
  title: ["Achieve", "Your", "Vision"],
  subtext:
    "I'm Aron. AYV WRLD is my studio: the projects I build, what I'm learning, and the work I do for clients.",
  primaryCta: { label: "See the projects", href: "#products" },
  secondaryCta: { label: "Websites for installers", href: "/installateurs" },
};

/**
 * The SaaS product lives in cxd3rev/ayv-wrld2. This site only names it and links out.
 */
export const product = {
  // TODO: final product name
  name: "AYV Onderhoud",
  label: "A project",
  pitch:
    "A project I'm building for heating installers in Flanders. It has its own site. This page only points there.",
  status: "In development.",
  cta: "Visit the product",
  href: links.product,
  external: true,
};

/** The one service, for the same niche. Full Dutch page at /installateurs. */
export const service = {
  label: "The service",
  name: "Websites for heating installers",
  pitch:
    "Clear, fast websites for heating installers in Flanders, with maintenance requests built in.",
  cta: "See packages (Dutch)",
  href: links.installateurs,
};

export const products = {
  title: "Projects.",
  sideTitle: "Side projects",
  sideIntro: "Things I build to learn.",
  side: [
    {
      id: "rated",
      name: "Rated",
      pitch: "Rate and rank your favorite hip-hop albums.",
      brand: "rated" as const,
      href: links.rated,
      external: true,
      cta: "Read more",
    },
    {
      id: "kleuro",
      name: "Kleuro",
      pitch: "Point your camera at a room. See it repainted instantly.",
      brand: "kleuro" as const,
    },
  ],
};

export const course = {
  name: "One Man Army Stack",
  title: "Learn how I build and ship SaaS products solo.",
  description:
    "A step-by-step course teaching the exact apps and tools used to build and launch SaaS products, from idea to paying customer.",
  cta: "Explore the course",
  href: links.course,
  // PLACEHOLDER: replace with the real course outline.
  steps: [
    { n: "01", title: "Choose a problem someone will pay to solve" },
    { n: "02", title: "Build the product with a small, specific stack" },
    { n: "03", title: "Launch and reach the first paying customer" },
  ],
};

export const work = {
  title: "Selected work.",
  dili: {
    name: "Dili Paints",
    description:
      "A clean, trustworthy web presence for a local painting business.",
    meta: "Flanders · Interior and exterior · Kleur met klasse",
    href: links.diliPaints,
    cta: "View live site",
  },
};

export const about = {
  title: "One studio. No committee.",
  // PLACEHOLDER: personalize this bio — add your name or a longer story if you want one.
  bio: "I'm Aron, a developer building AYV WRLD on my own. Projects, client work, and the things I'm still learning.",
};

export const footerLinks = [
  { label: product.name, href: links.product, external: true },
  { label: "Websites voor installateurs", href: "/installateurs" },
  { label: "Rated", href: links.rated, external: true },
  { label: "Kleuro", href: "#kleuro" },
  { label: "One Man Army Stack", href: "#course" },
  { label: "Dili Paints", href: links.diliPaints, external: true },
  { label: "Me", href: "/me" },
  { label: "Learn", href: "/learn" },
  { label: "Think", href: "/think" },
  { label: "Journey", href: "/journey" },
  { label: "Now", href: "/now" },
  { label: "Build", href: "/build" },
] as const;
