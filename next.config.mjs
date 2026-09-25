// GitHub Pages serves this site at /ayv-wrld-site, not at the domain root.
// The Pages workflow also injects basePath, but unoptimized next/image
// does not apply that prefix, so the logo URLs have to include it too.
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const basePath =
  process.env.GITHUB_ACTIONS === "true" && repository ? `/${repository}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
