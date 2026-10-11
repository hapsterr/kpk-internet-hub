/**
 * Post-build script for static Netlify hosting.
 *
 * 1. Copies the prerendered /404 page to 404.html so Netlify serves it for
 *    unknown paths (real 404s — no SPA rewrite that could mask them).
 * 2. Generates sitemap.xml and updates robots.txt with the sitemap URL —
 *    but only once the production domain is configured in
 *    app/config/business.ts (websiteUrl). Until then no sitemap is emitted,
 *    keeping preview deployments out of the indexable set.
 */
import { copyFile, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const clientDir = path.join(root, "build", "client");

const routes = [
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
];

function extractWebsiteUrl() {
  const businessSource = [
    "app/config/business.ts",
    "app/config/business.js",
  ].map((file) => path.join(root, file));

  for (const file of businessSource) {
    if (!existsSync(file)) continue;
    const source = readFile(file, "utf8");
    return source.then((text) => {
      const match = text.match(/websiteUrl:\s*["']([^"']+)["']/);
      return match ? match[1].replace(/\/+$/, "") : null;
    });
  }
  return Promise.resolve(null);
}

async function main() {
  if (!existsSync(clientDir)) {
    console.error("build/client not found — run react-router build first.");
    process.exit(1);
  }

  // 1. Netlify custom 404 page.
  const notFoundSource = path.join(clientDir, "404", "index.html");
  if (existsSync(notFoundSource)) {
    await copyFile(notFoundSource, path.join(clientDir, "404.html"));
    console.log("Copied 404/index.html -> 404.html");
  }

  // 2. Sitemap + robots, only when the production domain is configured.
  const websiteUrl = await extractWebsiteUrl();
  const robotsPath = path.join(clientDir, "robots.txt");
  const basicRobots = "User-agent: *\nAllow: /\n";

  if (!websiteUrl) {
    if (existsSync(path.join(clientDir, "sitemap.xml"))) {
      const { rm } = await import("node:fs/promises");
      await rm(path.join(clientDir, "sitemap.xml"));
    }
    await writeFile(robotsPath, basicRobots);
    console.log(
      "websiteUrl not configured — sitemap skipped, robots.txt written without sitemap reference.",
    );
    return;
  }

  const today = new Date().toISOString().slice(0, 10);
  const urls = routes
    .map(
      (route) => `  <url>
    <loc>${websiteUrl}${route === "/" ? "/" : route}</loc>
    <lastmod>${today}</lastmod>
    <priority>${route === "/" ? "1.0" : "0.7"}</priority>
  </url>`,
    )
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  await writeFile(path.join(clientDir, "sitemap.xml"), sitemap);
  await writeFile(
    robotsPath,
    `${basicRobots}Sitemap: ${websiteUrl}/sitemap.xml\n`,
  );
  console.log(`Sitemap generated for ${websiteUrl}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
