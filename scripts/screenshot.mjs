import { chromium } from "@playwright/test";
import { mkdirSync } from "node:fs";

const base = "http://localhost:5173";
mkdirSync("screenshots", { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

async function shot(path, file, { full = false, settle = 1600, scrollY = 0 } = {}) {
  await page.goto(base + path);
  if (scrollY) {
    await page.evaluate((y) => window.scrollTo(0, y), scrollY);
  }
  await page.waitForTimeout(settle);
  await page.screenshot({ path: `screenshots/${file}`, fullPage: full });
  console.log("saved", file);
}

await shot("/", "home-hero.png");
await shot("/", "home-services.png", { scrollY: 850, settle: 2000 });
await shot("/services", "services-top.png");
await shot("/website-development", "webdev-top.png");

await browser.close();
