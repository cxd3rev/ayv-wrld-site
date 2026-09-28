import { links } from "@/lib/site";

/**
 * Packed logo cluster for the hub hero.
 * x/y are the centre of each mark, as a percentage of the cluster box.
 * size is a percentage of the cluster width. rotation is degrees.
 *
 * public/reference/ayvwrld-collection.png was not in the repo, so these
 * positions are a tight, slightly asymmetric pack with roughly 10–20% overlap.
 */

export type HubLogo = {
  id: string;
  name: string;
  /** Public path. The hero prefixes NEXT_PUBLIC_BASE_PATH. */
  logo: string;
  description: string;
  status: "live" | "soon";
  x: number;
  y: number;
  size: number;
  rotation: number;
  z: number;
  /**
   * Destination. Omit for "soon" items and the centre mark.
   * http(s) opens in a new tab. A hash stays in the same tab.
   */
  href?: string;
  /** Parent mark. Click scrolls to the top. Not a project destination. */
  centre?: boolean;
  /** Smaller marks around AYV Automation Stack. Hidden unless INCLUDE_MODULES. */
  module?: boolean;
};

// TODO: replace with the real AYV Automation Stack URL.
// The only existing target is the in-page #automation-pack section, so this
// cluster links there in the same tab until a real site exists.
const automationStackHref = links.automationPack;

// TODO: replace with the real One Man Army Stack course URL.
// Temporary same-tab link to the in-page #course section.
const courseHref = links.course;

export const hubLogos: HubLogo[] = [
  {
    id: "ayvwrld",
    name: "AYV WRLD",
    logo: "/logos/ayvwrld-logo-white.png",
    // PLACEHOLDER: centre-mark description.
    description: "The studio mark.",
    status: "live",
    centre: true,
    x: 50,
    y: 46,
    size: 44,
    rotation: -6,
    z: 2,
  },
  {
    id: "ayvstack",
    name: "AYV Automation Stack",
    logo: "/logos/ayvstack-logo-white.png",
    description: "Tools for leads, bookings, quotes, and reviews.",
    status: "live",
    href: automationStackHref,
    x: 23,
    y: 27,
    size: 36,
    rotation: 11,
    z: 5,
  },
  {
    id: "dili",
    name: "Dili Paints",
    logo: "/logos/dilipaints-logo-w.png",
    description: "A website for a Belgian painting company.",
    status: "live",
    href: links.diliPaints,
    x: 74,
    y: 24,
    size: 33,
    rotation: -8,
    z: 4,
  },
  {
    id: "oma",
    name: "One Man Army Stack",
    logo: "/logos/oma-logo-w.png",
    description: "A course on building and shipping SaaS products solo.",
    status: "live",
    href: courseHref,
    x: 27,
    y: 66,
    size: 35,
    rotation: 15,
    z: 6,
  },
  {
    id: "rated",
    name: "Rated",
    logo: "/logos/rated-logo-w.png",
    description: "Rate and rank your favorite hip-hop albums.",
    status: "soon",
    x: 49,
    y: 78,
    size: 29,
    rotation: 7,
    z: 7,
  },
  {
    id: "kleuro",
    name: "Kleuro",
    logo: "/logos/kleuro-logo-w.png",
    description: "Photograph a room and preview it in new colors.",
    status: "soon",
    x: 75,
    y: 62,
    size: 33,
    rotation: -12,
    z: 4,
  },
  {
    id: "avyro",
    name: "Avyro",
    logo: "/logos/avyro-logo-w.png",
    description: "Part of the AYV Automation Stack.",
    status: "live",
    href: automationStackHref,
    module: true,
    x: 10,
    y: 14,
    size: 18,
    rotation: -10,
    z: 6,
  },
  {
    id: "velto",
    name: "Velto",
    logo: "/logos/velto-logo-w.png",
    description: "Part of the AYV Automation Stack.",
    status: "live",
    href: automationStackHref,
    module: true,
    x: 36,
    y: 12,
    size: 16,
    rotation: 8,
    z: 6,
  },
  {
    id: "rovyn",
    name: "Rovyn",
    logo: "/logos/rovyn-logo-w.png",
    description: "Part of the AYV Automation Stack.",
    status: "live",
    href: automationStackHref,
    module: true,
    x: 9,
    y: 40,
    size: 16,
    rotation: 14,
    z: 6,
  },
  {
    id: "orvyn",
    name: "Orvyn",
    logo: "/logos/orvyn-logo-w.png",
    description: "Part of the AYV Automation Stack.",
    status: "live",
    href: automationStackHref,
    module: true,
    x: 38,
    y: 42,
    size: 15,
    rotation: -6,
    z: 6,
  },
  {
    id: "nexro",
    name: "Nexro",
    logo: "/logos/nexro-logo-w.png",
    description: "Part of the AYV Automation Stack.",
    status: "live",
    href: automationStackHref,
    module: true,
    x: 18,
    y: 8,
    size: 14,
    rotation: 4,
    z: 7,
  },
  {
    id: "ravelo",
    name: "Ravelo",
    logo: "/logos/ravelo-logo-w.png",
    description: "Part of the AYV Automation Stack.",
    status: "live",
    href: automationStackHref,
    module: true,
    x: 6,
    y: 26,
    size: 15,
    rotation: -16,
    z: 6,
  },
];
