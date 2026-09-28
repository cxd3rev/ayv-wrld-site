/**
 * Hero cluster. x/y are the centre of each full padded square, as a percentage
 * of the stage. w is the file width as a percentage of stage width. rot is
 * clockwise degrees.
 *
 * public/reference/ayvwrld-collection.png was not in the repo or the local
 * assets folder. These numbers are the supplied coordinate table.
 *
 * Search this file for "PLACEHOLDER" and "TODO" and edit those lines.
 */

export type HubLogo = {
  id: string;
  file: string;
  name: string;
  description: string;
  status: "live" | "soon";
  x: number;
  y: number;
  w: number;
  rot: number;
  z: number;
  /**
   * Live destination. http(s) opens in a new tab. A hash stays in the same tab.
   * Omit for the centre mark, "soon" items, and anything without a real URL.
   */
  href?: string;
  /** Centre brand. Click smooth-scrolls to the top. Not a link. */
  centre?: boolean;
};

// TODO: paste the real AYV Automation Stack URL. Do not invent a domain.
// While this is empty, the stack mark uses the temporary in-page link below
// and the module marks do not navigate.
export const AUTOMATION_STACK_URL: string = "";

// TODO: paste the real OMA site URL. Do not invent a domain.
// While this is empty, the OMA mark uses the temporary in-page #course link.
export const OMA_SITE_URL: string = "";

function moduleHref(anchor: string) {
  if (!AUTOMATION_STACK_URL) return undefined;
  return `${AUTOMATION_STACK_URL.replace(/\/$/, "")}#${anchor}`;
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
    x: 50.48,
    y: 41.66,
    w: 43.16,
    rot: 0,
    z: 1,
  },
  {
    id: "rated",
    file: "rated-logo-w.png",
    name: "Rated",
    // PLACEHOLDER: Rated description.
    description: "Rate and rank your favorite hip-hop albums.",
    status: "soon",
    x: 67.05,
    y: 58.0,
    w: 21.99,
    rot: 0,
    z: 2,
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
    x: 51.73,
    y: 76.1,
    w: 22.47,
    rot: 0,
    z: 3,
  },
  {
    id: "ayvstack",
    file: "ayvstack-logo-white.png",
    name: "AYV Automation Stack",
    // PLACEHOLDER: Automation Stack description.
    description: "Tools for leads, bookings, quotes, and reviews.",
    status: "live",
    // TODO: replace this temporary #automation-pack link with AUTOMATION_STACK_URL.
    href: AUTOMATION_STACK_URL || "#automation-pack",
    x: 32.2,
    y: 65.62,
    w: 19.46,
    rot: 0,
    z: 2,
  },
  {
    id: "dilipaints",
    file: "dilipaints-logo-w.png",
    name: "Dili Paints",
    // PLACEHOLDER: Dili Paints description.
    description: "A website for a Belgian painting company.",
    status: "live",
    href: "https://dilipaints.be/",
    x: 62.85,
    y: 80.73,
    w: 10.83,
    rot: 20,
    z: 4,
  },
  {
    id: "kleuro",
    file: "kleuro-logo-w.png",
    name: "Kleuro",
    // PLACEHOLDER: Kleuro description.
    description: "Photograph a room and preview it in new colors.",
    status: "soon",
    x: 70.67,
    y: 34.16,
    w: 10.88,
    rot: 20,
    z: 4,
  },
  {
    id: "avyro",
    file: "avyro-logo-w.png",
    name: "Avyro",
    // PLACEHOLDER: Avyro description.
    description: "Part of the AYV Automation Stack.",
    status: "live",
    // TODO: Automation Stack site anchor #avyro, once AUTOMATION_STACK_URL is set.
    href: moduleHref("avyro"),
    x: 42.87,
    y: 66.78,
    w: 11.61,
    rot: -100,
    z: 3,
  },
  {
    id: "velto",
    file: "velto-logo-w.png",
    name: "Velto",
    // PLACEHOLDER: Velto description.
    description: "Part of the AYV Automation Stack.",
    status: "live",
    // TODO: Automation Stack site anchor #velto, once AUTOMATION_STACK_URL is set.
    href: moduleHref("velto"),
    x: 38.88,
    y: 56.92,
    w: 10.93,
    rot: -20,
    z: 3,
  },
  {
    id: "rovyn",
    file: "rovyn-logo-w.png",
    name: "Rovyn",
    // PLACEHOLDER: Rovyn description.
    description: "Part of the AYV Automation Stack.",
    status: "live",
    // TODO: Automation Stack site anchor #rovyn, once AUTOMATION_STACK_URL is set.
    href: moduleHref("rovyn"),
    x: 26.88,
    y: 52.62,
    w: 9.89,
    rot: 20,
    z: 3,
  },
  {
    id: "orvyn",
    file: "orvyn-logo-w.png",
    name: "Orvyn",
    // PLACEHOLDER: Orvyn description.
    description: "Part of the AYV Automation Stack.",
    status: "live",
    // TODO: Automation Stack site anchor #orvyn, once AUTOMATION_STACK_URL is set.
    href: moduleHref("orvyn"),
    x: 32.68,
    y: 44.68,
    w: 11.51,
    rot: 0,
    z: 3,
  },
  {
    id: "nexro",
    file: "nexro-logo-w.png",
    name: "Nexro",
    // PLACEHOLDER: Nexro description.
    description: "Part of the AYV Automation Stack.",
    status: "live",
    // TODO: Automation Stack site anchor #nexro, once AUTOMATION_STACK_URL is set.
    href: moduleHref("nexro"),
    x: 39.71,
    y: 81.92,
    w: 9.59,
    rot: 0,
    z: 3,
  },
  {
    id: "ravelo",
    file: "ravelo-logo-w.png",
    name: "Ravelo",
    // PLACEHOLDER: Ravelo description.
    description: "Part of the AYV Automation Stack.",
    status: "live",
    // TODO: Automation Stack site anchor #ravelo, once AUTOMATION_STACK_URL is set.
    href: moduleHref("ravelo"),
    x: 22.49,
    y: 65.87,
    w: 11.86,
    rot: 0,
    z: 3,
  },
];
