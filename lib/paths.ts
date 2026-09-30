const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Homepage section. Hash-only links break once the visitor is on another page. */
export function homeHref(hash = "main") {
  const id = hash.replace(/^#/, "");
  return `${basePath}/#${id}`;
}

export function pageHref(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

/** Hash links go home. Root paths stay on this site. Everything else is external. */
export function siteHref(href: string) {
  if (href.startsWith("#")) return homeHref(href);
  if (href.startsWith("/")) return pageHref(href);
  return href;
}
