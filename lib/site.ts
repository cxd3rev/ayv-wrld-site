/**
 * Copy and outbound links for AYV WRLD.
 * Search this file for "PLACEHOLDER" and replace those lines.
 *
 * The homepage is Aron's profile. Projects are listed there.
 * AYV Automation has its own page. Rated links out to its live site.
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
  { href: "#websites", label: "Websites" },
  { href: "#work", label: "Work" },
  { href: "/automation", label: "Automation" },
  { href: "/course", label: "Course" },
  { href: "#about", label: "About" },
] as const;

export const hero = {
  eyebrow: "Websites · Belgium",
  title: ["Achieve", "Your", "Vision"],
  subtext:
    "I build websites for anyone who needs one. Clear, fast, and made so people can find you and get in touch.",
  primaryCta: { label: "Get a website", href: "#websites" },
  secondaryCta: { label: "See the work", href: "#work" },
};

/**
 * The SaaS product lives in cxd3rev/ayv-wrld2. This site only names it and links out.
 */
export const product = {
  // TODO: final product name
  name: "AYV Automation",
  label: "A project",
  pitch:
    "A project I'm building for heating installers in Flanders. It has its own site. This page only points there.",
  status: "In development.",
  cta: "Visit the product",
  href: links.product,
  external: true,
};

/** Homepage offer: a website for anyone, not a product pitch. */
export const websites = {
  label: "Websites",
  title: "A website, if you need one.",
  intro:
    "For a person, a shop, or a company. You tell me what the site has to do. I design it, write it, and put it online.",
  points: [
    {
      title: "Clear on a phone",
      body: "People look you up on their phone. The site is built for that first.",
    },
    {
      title: "About what you do",
      body: "What you offer, where you work, and why someone should contact you. No filler pages.",
    },
    {
      title: "A way to reach you",
      body: "A contact form or a button that lands in your inbox. You can answer from there.",
    },
  ],
  stepsTitle: "How it works",
  steps: [
    {
      n: "01",
      title: "We talk",
      body: "What you do, who the site is for, and what should happen when someone visits.",
    },
    {
      n: "02",
      title: "I build it",
      body: "You see the site before it goes online. Text and photos can still change.",
    },
    {
      n: "03",
      title: "It goes live",
      body: "I connect the domain and leave you with a site you can send to people.",
    },
  ],
  note: "You get a fixed price after the first conversation. No price on this page until we know what you need.",
  cta: "Get in touch",
  href: "#contact",
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
  title: "A site I already built.",
  dili: {
    name: "Dili Paints",
    description:
      "A website for a painting business in Flanders. This is the kind of site I can build.",
    meta: "Flanders · Interior and exterior · Kleur met klasse",
    href: links.diliPaints,
    cta: "View live site",
  },
};

export const about = {
  title: "Built by one person.",
  // PLACEHOLDER: personalize this bio — add your name or a longer story if you want one.
  bio: "I'm Aron. AYV WRLD is where I make websites. If you need one, write or call.",
};

export const footerLinks = [
  { label: "Dili Paints", href: links.diliPaints, external: true },
  { label: "AYV Automation", href: "/automation" },
  { label: "Rated", href: links.rated, external: true },
] as const;
