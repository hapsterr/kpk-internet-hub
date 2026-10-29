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

  it("stores the confirmed contact details", () => {
    expect(business.whatsappNumber).toBe("0670749646");
    expect(business.phone).toBe("0670749646");
    expect(business.email).toBe("info@kpkinternethub.co.za");
  });

  it("stores the confirmed address and opening hours", () => {
    expect(business.address).toBe("29769 Letoba Street, Ext 10, Mamelodi East");
    expect(business.city).toBe("Pretoria");
    expect(business.openingHours).toEqual([
      "Monday 09:00–18:00",
      "Tuesday 09:00–19:00",
      "Wednesday 09:00–19:00",
      "Thursday 09:00–19:00",
      "Friday 09:00–19:00",
      "Saturday 09:00–20:00",
      "Sunday 09:00–18:00",
    ]);
  });

  it("formatLocation joins configured parts", () => {
    expect(formatLocation()).toBe(
      "29769 Letoba Street, Ext 10, Mamelodi East, Pretoria",
    );
  });
});
