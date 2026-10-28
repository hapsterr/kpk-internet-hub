import { expect, test } from "@playwright/test";

const pages = [
  { path: "/", heading: /everything digital/i },
  { path: "/services", heading: /our services/i },
  { path: "/services/applications", heading: /online application assistance/i },
  { path: "/services/cv-and-design", heading: /cv typing/i },
  { path: "/tech-services", heading: /technology services/i },
  { path: "/products", heading: /computer accessories/i },
  { path: "/website-development", heading: /professional website/i },
  { path: "/about", heading: /about kpk internet hub/i },
  { path: "/contact", heading: /contact kpk internet hub/i },
  { path: "/privacy-policy", heading: /privacy policy/i },
];

test.describe("page smoke tests", () => {
  for (const page of pages) {
    test(`${page.path} loads with its heading`, async ({ page: browserPage }) => {
      await browserPage.goto(page.path);
      await expect(browserPage.getByRole("heading", { level: 1 })).toHaveText(
        page.heading,
      );
    });
  }

  test("unknown route shows the 404 page", async ({ page: browserPage }) => {
    await browserPage.goto("/this-page-does-not-exist");
    await expect(browserPage.getByRole("heading", { name: /page not found/i })).toBeVisible();
  });
});

test.describe("navigation", () => {
  test("desktop navigation moves between pages", async ({
    page: browserPage,
    isMobile,
  }) => {
    test.skip(isMobile, "desktop nav is hidden on mobile viewports");
    await browserPage.goto("/");
    await browserPage.waitForLoadState("networkidle");
    await browserPage
      .getByRole("navigation", { name: /primary/i })
      .getByRole("link", { name: "Services", exact: true })
      .click();
    await expect(browserPage).toHaveURL(/\/services$/);
    await expect(
      browserPage.getByRole("heading", { level: 1, name: /our services/i }),
    ).toBeVisible();
  });

  test("mobile menu opens, navigates and closes", async ({
    page: browserPage,
    isMobile,
  }) => {
    test.skip(!isMobile, "mobile menu is only visible below the lg breakpoint");
    await browserPage.goto("/");
    await browserPage.waitForLoadState("networkidle");
    const toggle = browserPage.getByRole("button", { name: /open menu/i });
    await toggle.click();
    await expect(
      browserPage.getByRole("button", { name: /close menu/i }),
    ).toHaveAttribute("aria-expanded", "true");
    const mobileNav = browserPage.getByRole("navigation", { name: /mobile/i });
    await expect(mobileNav).toBeVisible();
    await mobileNav.getByRole("link", { name: "Products" }).click();
    await expect(browserPage).toHaveURL(/\/products$/);
    await expect(mobileNav).not.toBeVisible();
  });
});

test.describe("content integrity", () => {
  test("no prices, checkout or cart anywhere on the site", async ({ page: browserPage }) => {
    for (const page of pages) {
      await browserPage.goto(page.path);
      const text = (await browserPage.locator("body").innerText()).toLowerCase();
      expect(text).not.toMatch(/\br\s?\d+/);
      expect(text).not.toContain("add to cart");
      expect(text).not.toContain("checkout");
      expect(text).not.toContain("starting from");
      expect(text).not.toContain("buy now");
    }
  });

  test("services catalogue lists the expected categories", async ({ page: browserPage }) => {
    await browserPage.goto("/services");
    await expect(browserPage.getByRole("heading", { name: /internet & printing/i })).toBeVisible();
    await expect(browserPage.getByRole("heading", { name: /^applications$/i })).toBeVisible();
    await expect(browserPage.getByRole("heading", { name: /professional documents/i })).toBeVisible();
    await expect(browserPage.getByRole("heading", { name: /graphic design/i })).toBeVisible();
  });

  test("product catalogue shows every category with an availability CTA", async ({ page: browserPage }) => {
    await browserPage.goto("/products");
    for (const name of ["Hard Drives", "SSDs", "RAM", "Power Cables", "Computer Mice"]) {
      await expect(browserPage.getByRole("heading", { name })).toBeVisible();
    }
    const ctas = browserPage.getByRole("link", { name: /check availability/i });
    expect(await ctas.count()).toBeGreaterThanOrEqual(5);
  });

  test("website development page shows process, FAQ and quote CTA", async ({ page: browserPage }) => {
    await browserPage.goto("/website-development");
    await expect(browserPage.getByRole("heading", { name: /how it works/i })).toBeVisible();
    await expect(browserPage.getByRole("heading", { name: /website faq/i })).toBeVisible();
    const firstFaq = browserPage.getByText("What types of websites can you build?");
    await firstFaq.click();
    await expect(
      browserPage.getByText(/small business websites, portfolio websites/i),
    ).toBeVisible();
  });
});

test.describe("contact flow", () => {
  test("contact page shows the confirmed channels", async ({ page: browserPage }) => {
    await browserPage.goto("/contact");
    await expect(browserPage.getByRole("link", { name: /chat on whatsapp/i })).toBeVisible();
    await expect(browserPage.getByRole("link", { name: /call us/i })).toBeVisible();
    await expect(browserPage.getByRole("link", { name: /send an email/i })).toBeVisible();
    await expect(browserPage.getByText("info@kpkinternethub.co.za")).toBeVisible();
  });
});
