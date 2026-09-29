/**
 * Hero cluster. x/y are the centre of each full padded square, as a percentage
 * of the stage. w is the file width as a percentage of stage width. rot is
 * clockwise degrees.
 *
 * desktop matches the supplied desktop coordinate table.
 * mobile matches public/reference/ayvwrld-collection-mobile.png: a tall stack,
 * not a scaled copy of the desktop banner.
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
    desktop: { x: 50.48, y: 41.66, w: 43.16, rot: 0 },
    mobile: { x: 50, y: 18, w: 78, rot: 0 },
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
    desktop: { x: 67.05, y: 58.0, w: 21.99, rot: 0 },
    mobile: { x: 76, y: 52, w: 38, rot: 0 },
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
    desktop: { x: 51.73, y: 76.1, w: 22.47, rot: 0 },
    mobile: { x: 30, y: 46, w: 42, rot: -10 },
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
    desktop: { x: 32.2, y: 65.62, w: 19.46, rot: 0 },
    mobile: { x: 68, y: 68, w: 32, rot: -8 },
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
    desktop: { x: 62.85, y: 80.73, w: 10.83, rot: 20 },
    mobile: { x: 88, y: 90, w: 26, rot: 12 },
  },
  {
    id: "kleuro",
    file: "kleuro-logo-w.png",
    name: "Kleuro",
    // PLACEHOLDER: Kleuro description.
    description: "Photograph a room and preview it in new colors.",
    status: "soon",
    z: 4,
    desktop: { x: 70.67, y: 34.16, w: 10.88, rot: 20 },
    mobile: { x: 72, y: 84, w: 28, rot: 16 },
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
    desktop: { x: 42.87, y: 66.78, w: 11.61, rot: -100 },
    mobile: { x: 24, y: 60, w: 30, rot: 8 },
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
    desktop: { x: 38.88, y: 56.92, w: 10.93, rot: -20 },
    mobile: { x: 46, y: 82, w: 30, rot: 6 },
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
    desktop: { x: 26.88, y: 52.62, w: 9.89, rot: 20 },
    mobile: { x: 14, y: 34, w: 28, rot: -18 },
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
    desktop: { x: 32.68, y: 44.68, w: 11.51, rot: 0 },
    mobile: { x: 52, y: 58, w: 20, rot: 0 },
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
    desktop: { x: 39.71, y: 81.92, w: 9.59, rot: 0 },
    mobile: { x: 84, y: 32, w: 30, rot: 14 },
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
    desktop: { x: 22.49, y: 65.87, w: 11.86, rot: 0 },
    mobile: { x: 18, y: 78, w: 34, rot: -6 },
  },
];
