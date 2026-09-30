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
