import type { Config } from "@react-router/dev/config";

const prerenderedRoutes = [
  "/",
  "/services",
  "/services/applications",
  "/services/cv-and-design",
  "/tech-services",
  "/products",
  "/website-development",
  "/about",
  "/contact",
  "/privacy-policy",
  "/404",
];

export default {
  // Static hosting only (Netlify Free) — no runtime server.
  ssr: false,
  // Every public route is rendered to HTML at build time.
  prerender: prerenderedRoutes,
} satisfies Config;
