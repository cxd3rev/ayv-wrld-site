/**
 * Hero cluster. x/y are the centre of each full padded square, as a percentage
 * of the stage. w is the file width as a percentage of stage width. rot is
 * clockwise degrees.
 *
 * Both stages show public/cluster/ayvwrld-cluster.jpg.
 * These centres are the click targets on that artwork.
 *
 * Search this file for "PLACEHOLDER" and "TODO" and edit those lines.
 */

export type HubLayout = {
  x: number;
  y: number;
  w: number;
  rot: number;
};

export type HubLogo = {
  id: string;
  file: string;
  name: string;
  description: string;
  status: "live" | "soon";
  z: number;
  desktop: HubLayout;
  mobile: HubLayout;
  /**
   * Live destination. http(s) opens in a new tab. A hash stays in the same tab.
   * Omit for the centre mark, "soon" items, and anything without a real URL.
   */
  href?: string;
  /** Centre brand. Click smooth-scrolls to the top. Not a link. */
  centre?: boolean;
};

export type PlacedLogo = HubLogo & HubLayout;

export const AUTOMATION_STACK_URL = "https://www.ayvautomation.space";

// TODO: paste the real OMA site URL. Do not invent a domain.
// While this is empty, the OMA mark uses the temporary in-page #course link.
export const OMA_SITE_URL: string = "";

// Product pages on the live stack site are /automation/{slug}.
// The homepage has no #avyro-style anchors.
function moduleHref(slug: string) {
  return `${AUTOMATION_STACK_URL}/automation/${slug}`;
}

export function placeLogo(item: HubLogo, mobile: boolean): PlacedLogo {
  return { ...item, ...(mobile ? item.mobile : item.desktop) };
}

export const hubLogos: HubLogo[] = [
  {
    id: "ayvwrld",
    file: "ayvwrld-logo-white.png",
    name: "AYV WRLD",
    // PLACEHOLDER: centre-mark description.
    description: "The studio mark.",
    status: "live",
    centre: true,
    z: 1,
    desktop: { x: 50, y: 41, w: 56, rot: 0 },
    mobile: { x: 50, y: 41, w: 56, rot: 0 },
  },
  {
    id: "rated",
    file: "rated-logo-w.png",
    name: "Rated",
    // PLACEHOLDER: Rated description.
    description: "Rate and rank your favorite hip-hop albums.",
    status: "live",
    href: "https://rated-ivory.vercel.app/",
    z: 2,
    desktop: { x: 84, y: 24, w: 36, rot: 0 },
    mobile: { x: 84, y: 24, w: 36, rot: 0 },
  },
  {
    id: "oma",
    file: "oma-logo-w.png",
    name: "OMA",
    // PLACEHOLDER: OMA description.
    description: "A course on building and shipping SaaS products solo.",
    status: "live",
    // TODO: replace this temporary #course link with OMA_SITE_URL.
    href: OMA_SITE_URL || "#course",
    z: 3,
    desktop: { x: 54, y: 84, w: 38, rot: 0 },
    mobile: { x: 54, y: 84, w: 38, rot: 0 },
  },
  {
    id: "ayvstack",
    file: "ayvstack-logo-white.png",
    name: "AYV Automation Stack",
    // PLACEHOLDER: Automation Stack description.
    description: "Tools for leads, bookings, quotes, and reviews.",
    status: "live",
    href: AUTOMATION_STACK_URL,
    z: 2,
    desktop: { x: 30, y: 70, w: 28, rot: 0 },
    mobile: { x: 30, y: 70, w: 28, rot: 0 },
  },
  {
    id: "dilipaints",
    file: "dilipaints-logo-w.png",
    name: "Dili Paints",
    // PLACEHOLDER: Dili Paints description.
    description: "A website for a Belgian painting company.",
    status: "live",
    href: "https://dilipaints.be/",
    z: 4,
    desktop: { x: 62, y: 90, w: 14, rot: 15 },
    mobile: { x: 62, y: 90, w: 14, rot: 15 },
  },
  {
    id: "kleuro",
    file: "kleuro-logo-w.png",
    name: "Kleuro",
    // PLACEHOLDER: Kleuro description.
    description: "Photograph a room and preview it in new colors.",
    status: "soon",
    z: 4,
    desktop: { x: 68, y: 50, w: 14, rot: 20 },
    mobile: { x: 68, y: 50, w: 14, rot: 20 },
  },
  {
    id: "avyro",
    file: "avyro-logo-w.png",
    name: "Avyro",
    // PLACEHOLDER: Avyro description.
    description: "Part of the AYV Automation Stack.",
    status: "live",
    href: moduleHref("avyro"),
    z: 3,
    desktop: { x: 86, y: 64, w: 28, rot: -10 },
    mobile: { x: 86, y: 64, w: 28, rot: -10 },
  },
  {
    id: "velto",
    file: "velto-logo-w.png",
    name: "Velto",
    // PLACEHOLDER: Velto description.
    description: "Part of the AYV Automation Stack.",
    status: "live",
    href: moduleHref("velto"),
    z: 3,
    desktop: { x: 24, y: 22, w: 16, rot: -15 },
    mobile: { x: 24, y: 22, w: 16, rot: -15 },
  },
  {
    id: "rovyn",
    file: "rovyn-logo-w.png",
    name: "Rovyn",
    // PLACEHOLDER: Rovyn description.
    description: "Part of the AYV Automation Stack.",
    status: "live",
    href: moduleHref("rovyn"),
    z: 3,
    desktop: { x: 18, y: 32, w: 16, rot: 10 },
    mobile: { x: 18, y: 32, w: 16, rot: 10 },
  },
  {
    id: "orvyn",
    file: "orvyn-logo-w.png",
    name: "Orvyn",
    // PLACEHOLDER: Orvyn description.
    description: "Part of the AYV Automation Stack.",
    status: "live",
    href: moduleHref("orvyn"),
    z: 3,
    desktop: { x: 73, y: 88, w: 14, rot: 0 },
    mobile: { x: 73, y: 88, w: 14, rot: 0 },
  },
  {
    id: "nexro",
    file: "nexro-logo-w.png",
    name: "Nexro",
    // PLACEHOLDER: Nexro description.
    description: "Part of the AYV Automation Stack.",
    status: "live",
    href: moduleHref("nexro"),
    z: 3,
    desktop: { x: 30, y: 15, w: 18, rot: 0 },
    mobile: { x: 30, y: 15, w: 18, rot: 0 },
  },
  {
    id: "ravelo",
    file: "ravelo-logo-w.png",
    name: "Ravelo",
    // PLACEHOLDER: Ravelo description.
    description: "Part of the AYV Automation Stack.",
    status: "live",
    href: moduleHref("ravelo"),
    z: 3,
    desktop: { x: 11, y: 60, w: 20, rot: 0 },
    mobile: { x: 11, y: 60, w: 20, rot: 0 },
  },
];
