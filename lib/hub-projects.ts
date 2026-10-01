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

/** The one product (repo: cxd3rev/ayv-wrld2). The six module logos were retired. */
export const AUTOMATION_STACK_URL = "https://www.ayvautomation.space";

// TODO: paste the real OMA site URL. Do not invent a domain.
// While this is empty, the OMA mark uses the temporary in-page #course link.
export const OMA_SITE_URL: string = "";

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
    mobile: { x: 50, y: 24, w: 58, rot: 0 },
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
    mobile: { x: 66, y: 72, w: 26, rot: 0 },
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
    mobile: { x: 71, y: 49, w: 28, rot: 8 },
  },
  {
    id: "ayvstack",
    file: "ayvstack-logo-white.png",
    name: "AYV Onderhoud",
    description: "The product: boiler maintenance for heating installers.",
    status: "live",
    href: AUTOMATION_STACK_URL,
    z: 3,
    desktop: { x: 30.5, y: 60.5, w: 25, rot: 0 },
    mobile: { x: 31, y: 54, w: 36, rot: -6 },
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
    mobile: { x: 38, y: 78, w: 18, rot: 15 },
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
    mobile: { x: 20, y: 76, w: 16, rot: -15 },
  },
];
