import {
  index,
  route,
  type RouteConfig,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("services", "routes/services.tsx"),
  route("services/applications", "routes/applications.tsx"),
  route("services/cv-and-design", "routes/cv-design.tsx"),
  route("tech-services", "routes/tech-services.tsx"),
  route("products", "routes/products.tsx"),
  route("website-development", "routes/website-development.tsx"),
  route("about", "routes/about.tsx"),
  route("contact", "routes/contact.tsx"),
  route("privacy-policy", "routes/privacy-policy.tsx"),
  // Catch-all handles unknown paths and the prerendered /404 page.
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
