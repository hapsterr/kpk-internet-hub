import { describe, expect, it } from "vitest";
import { services, getServicesByCategory, getServiceBySlug } from "~/data/services";
import { techServices } from "~/data/tech-services";
import { serviceCategoryOrder } from "~/data/services";

const validCategories = new Set([
  "internet-printing",
  "applications",
  "documents",
  "design",
]);

describe("services data", () => {
  it("contains no duplicate slugs", () => {
    const slugs = services.map((service) => service.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("every service has a name, description, valid category and icon", () => {
    for (const service of services) {
      expect(service.name.length).toBeGreaterThan(0);
      expect(service.description.length).toBeGreaterThan(0);
      expect(validCategories.has(service.category)).toBe(true);
      expect(service.icon).toBeTruthy();
    }
  });

  it("does not contain price-like text", () => {
    for (const service of services) {
      const text = `${service.name} ${service.description} ${(service.details ?? []).join(" ")}`;
      expect(text).not.toMatch(/\bR\s?\d/);
      expect(text.toLowerCase()).not.toContain("starting from");
    }
  });

  it("getServicesByCategory returns only matching services", () => {
    const applications = getServicesByCategory("applications");
    expect(applications.length).toBeGreaterThan(0);
    for (const service of applications) {
      expect(service.category).toBe("applications");
    }
  });

  it("getServiceBySlug finds and misses correctly", () => {
    expect(getServiceBySlug("document-printing")?.name).toBe("Document Printing");
    expect(getServiceBySlug("does-not-exist")).toBeUndefined();
  });

  it("every category in order has at least one service", () => {
    for (const category of serviceCategoryOrder) {
      expect(getServicesByCategory(category).length).toBeGreaterThan(0);
    }
  });
});

describe("tech services data", () => {
  it("has unique slugs and no price-like text", () => {
    const slugs = techServices.map((service) => service.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const service of techServices) {
      expect(`${service.name} ${service.description}`).not.toMatch(/\bR\s?\d/);
    }
  });
});
