import { describe, expect, it } from "vitest";
import { navLinks, footerServiceLinks, footerUtilityLinks } from "~/config/navigation";
import { business, formatLocation } from "~/config/business";

describe("navigation config", () => {
  it("every nav link points at an internal absolute path", () => {
    for (const link of [...navLinks, ...footerServiceLinks, ...footerUtilityLinks]) {
      expect(link.to.startsWith("/")).toBe(true);
      expect(link.label.length).toBeGreaterThan(0);
    }
  });

  it("has no duplicate nav destinations", () => {
    const targets = navLinks.map((link) => link.to);
    expect(new Set(targets).size).toBe(targets.length);
  });

  it("includes the primary navigation items from the specification", () => {
    const targets = navLinks.map((link) => link.to);
    expect(targets).toEqual([
      "/",
      "/services",
      "/tech-services",
      "/products",
      "/website-development",
      "/about",
      "/contact",
    ]);
  });
});

describe("business config", () => {
  it("has the verified name and tagline", () => {
    expect(business.name).toBe("KPK Internet Hub");
    expect(business.tagline).toBe("One Hub. Endless Possibilities.");
  });

  it("does not fabricate contact details", () => {
    if (!business.whatsappNumber) {
      expect(business.whatsappNumber).toBeUndefined();
    }
    if (!business.email) {
      expect(business.email).toBeUndefined();
    }
  });

  it("formatLocation returns null when no location is configured", () => {
    if (!business.address && !business.city && !business.province) {
      expect(formatLocation()).toBeNull();
    }
  });

  it("formatLocation joins configured parts", () => {
    const parts = [business.address, business.city, business.province].filter(
      Boolean,
    );
    if (parts.length > 0) {
      expect(formatLocation()).toBe(parts.join(", "));
    }
  });
});
