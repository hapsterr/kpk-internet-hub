import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { ServiceCard } from "~/components/services/ServiceCard";
import { ProductCard } from "~/components/products/ProductCard";
import { WhatsAppButton } from "~/components/ui/WhatsAppButton";
import { renderWithRouter } from "../helpers";
import { services } from "~/data/services";
import { products } from "~/data/products";
import { hasWhatsApp } from "~/config/business";

describe("ServiceCard", () => {
  it("renders the service name and description", () => {
    const service = services.find((s) => s.slug === "document-printing")!;
    renderWithRouter(<ServiceCard service={service} />);
    expect(screen.getByRole("heading", { name: service.name })).toBeInTheDocument();
    expect(screen.getByText(service.description)).toBeInTheDocument();
  });

  it("shows a working CTA for every service", () => {
    for (const service of services) {
      const { unmount } = renderWithRouter(<ServiceCard service={service} />);
      const links = screen.getAllByRole("link");
      expect(links.length).toBeGreaterThan(0);
      for (const link of links) {
        const href = link.getAttribute("href") ?? "";
        expect(href.length).toBeGreaterThan(0);
        if (href.startsWith("http")) {
          expect(href).toContain("wa.me");
        } else {
          expect(href.startsWith("/")).toBe(true);
        }
      }
      unmount();
    }
  });
});

describe("ProductCard", () => {
  it("offers availability enquiry without prices", () => {
    const product = products.find((p) => p.slug === "ram")!;
    renderWithRouter(<ProductCard product={product} />);
    expect(screen.getByRole("heading", { name: product.name })).toBeInTheDocument();
    const cta = screen.getByRole("link", { name: /check availability/i });
    const href = cta.getAttribute("href") ?? "";
    if (hasWhatsApp) {
      expect(href).toContain("wa.me");
      expect(decodeURIComponent(href)).toContain("RAM");
    } else {
      expect(href).toBe("/contact");
    }
  });

  it("produces the correct enquiry message per product", () => {
    for (const product of products) {
      const { unmount } = renderWithRouter(<ProductCard product={product} />);
      const cta = screen.getByRole("link", { name: /check availability/i });
      const href = cta.getAttribute("href") ?? "";
      if (hasWhatsApp) {
        expect(decodeURIComponent(href)).toContain(product.enquiryMessage);
      }
      unmount();
    }
  });
});

describe("WhatsAppButton", () => {
  it("renders a wa.me link with the configured number", () => {
    const { container } = renderWithRouter(
      <WhatsAppButton message="Test message">Chat</WhatsAppButton>,
    );
    const link = container.querySelector("a");
    expect(link).not.toBeNull();
    expect(link?.getAttribute("href")).toContain("wa.me/27670749646");
    expect(decodeURIComponent(link?.getAttribute("href") ?? "")).toContain(
      "Test message",
    );
  });
});
