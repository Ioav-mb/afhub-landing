/**
 * Prefix a public-asset path with Vite's BASE_URL so it works under any
 * deployment base (e.g. "/afhub-landing/" on GitHub Pages, "/" in dev).
 */
export const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
