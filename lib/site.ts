import type { LogoBrand } from "@/components/Logo";

/**
 * Marketing copy and outbound links for the AYV WRLD hub.
 * Search this file for "PLACEHOLDER" and replace those lines.
 */

export const links = {
  // PLACEHOLDER: replace with the live AYV Automation Pack URL.
  automationPack: "#automation-pack",
  // PLACEHOLDER: replace with the live One Man Army Stack course URL.
  course: "#course",
  diliPaints: "https://dilipaints.be/",
  // PLACEHOLDER: replace with your public email address.
  email: "hello@ayvwrld.com",
  // PLACEHOLDER: replace with your real social profile URLs.
  x: "#",
  instagram: "#",
  github: "#",
} as const;

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#products", label: "Products" },
  { href: "#course", label: "Course" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export const hero = {
  // PLACEHOLDER: hero eyebrow label.
  eyebrow: "Independent studio",
  title: ["Achieve", "Your", "Vision"],
  subtext:
    "Independent developer building SaaS products, apps, and tools under the AYV WRLD name.",
};

export type OrbitProject = {
  id: string;
  name: string;
  description: string;
  brand?: LogoBrand;
  wordmark?: string;
  href?: string;
  external?: boolean;
  comingSoon?: boolean;
};

export const orbitProjects: OrbitProject[] = [
  {
    id: "ayvstack",
    name: "AYV Automation Stack",
    description:
      "A modular SaaS suite of 6 connected tools that help businesses convert leads, manage bookings, follow up on quotes and invoices, and win more reviews.",
    brand: "ayvstack",
    // PLACEHOLDER: real Automation Stack URL. This stays on #automation-pack until that exists.
    href: links.automationPack,
  },
  {
    id: "dili",
    name: "Dili Paints",
    description:
      "A client website built for a Belgian painting company offering interior and exterior painting services across Flanders.",
    // PLACEHOLDER: swap in public/logos/dili-logo-white.png when a real file exists.
    wordmark: "Dili",
    href: links.diliPaints,
    external: true,
  },
  {
    id: "rated",
    name: "Rated",
    description: "A mobile app for rating and ranking your favorite hip-hop albums.",
    brand: "rated",
    comingSoon: true,
  },
  {
    id: "kleuro",
    name: "Kleuro",
    description:
      "An app that lets you photograph a room and instantly preview it repainted in different colors.",
    brand: "kleuro",
    comingSoon: true,
  },
  {
    id: "oma",
    name: "One Man Army Stack",
    description:
      "A course teaching, step by step, the exact tools and workflow used to build and ship SaaS products solo.",
    brand: "oma",
    href: links.course,
  },
];

export const products = {
  // PLACEHOLDER: products section headline.
  title: "Shipped under one name.",
  featured: {
    name: "AYV Automation Pack",
    pitch:
      "6 tools to help businesses get more clients, manage leads, and win reviews.",
    cta: "Explore the pack",
    href: links.automationPack,
  },
  upcoming: [
    {
      id: "rated",
      name: "Rated",
      pitch: "Rate and rank your favorite hip-hop albums.",
      brand: "rated" as const,
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
  // PLACEHOLDER: selected-work section headline.
  title: "Selected work.",
  dili: {
    name: "Dili Paints",
    description:
      "A clean, trustworthy web presence for a local painting business.",
    // PLACEHOLDER: extra context line. Edit or remove.
    meta: "Flanders · Interior and exterior · Kleur met klasse",
    href: links.diliPaints,
    cta: "View live site",
  },
};

export const about = {
  // PLACEHOLDER: about headline.
  title: "One studio. No committee.",
  // PLACEHOLDER: personalize this bio — add your name or a longer story if you want one.
  bio: "Developer and founder building AYV WRLD. Solo-built, practical tools, no fluff.",
};

export const footerLinks = [
  { label: "AYV Automation Pack", href: "#automation-pack" },
  { label: "Rated", href: "#rated" },
  { label: "Kleuro", href: "#kleuro" },
  { label: "One Man Army Stack", href: "#course" },
  { label: "Dili Paints", href: links.diliPaints, external: true },
] as const;
