/**
 * Verifies the static build output after `react-router build`:
 * - every public route has prerendered HTML
 * - a Netlify 404.html exists
 * - prerendered pages contain real content and metadata
 * - any WhatsApp links use the configured business number
 */
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const clientDir = path.join(root, "build", "client");

const routes = [
  { path: "/", marker: "Everything Digital" },
  { path: "/services", marker: "Our Services" },
  { path: "/services/applications", marker: "not an official government" },
  { path: "/services/cv-and-design", marker: "CV Typing" },
  { path: "/tech-services", marker: "Technology Services" },
  { path: "/products", marker: "Computer Accessories" },
  { path: "/website-development", marker: "Professional Website" },
  { path: "/about", marker: "About KPK Internet Hub" },
  { path: "/contact", marker: "Contact KPK Internet Hub" },
  { path: "/privacy-policy", marker: "Privacy Policy" },
  { path: "/404", marker: "Page Not Found" },
];

let failed = false;

function fail(message) {
  console.error(`FAIL: ${message}`);
  failed = true;
}

if (!existsSync(clientDir)) {
  console.error("build/client not found — run react-router build first.");
  process.exit(1);
}

for (const route of routes) {
  const htmlPath =
    route.path === "/"
      ? path.join(clientDir, "index.html")
      : path.join(clientDir, ...route.path.split("/").filter(Boolean), "index.html");

  if (!existsSync(htmlPath)) {
    fail(`missing prerendered HTML for ${route.path}`);
    continue;
  }

  const html = readFileSync(htmlPath, "utf8");

  if (!html.includes("<title>") || !html.includes("</title>")) {
    fail(`${route.path}: missing <title>`);
  }
  if (!html.includes('name="description"')) {
    fail(`${route.path}: missing meta description`);
  }
  if (!html.includes(route.marker)) {
    fail(`${route.path}: expected content marker "${route.marker}" not found`);
  }
  if (/wa\.me\/(?!27670749646)/.test(html)) {
    fail(`${route.path}: contains a wa.me link for an unconfigured number`);
  }

  console.log(`OK: ${route.path}`);
}

if (!existsSync(path.join(clientDir, "404.html"))) {
  fail("missing 404.html at publish root (required for Netlify custom 404)");
} else {
  console.log("OK: 404.html");
}

if (failed) {
  process.exit(1);
}

console.log("Build verification passed.");
