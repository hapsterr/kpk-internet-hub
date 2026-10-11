import { describe, expect, it } from "vitest";
import {
  products,
  productCategoryOrder,
  productCategoryLabels,
} from "~/data/products";

describe("products data", () => {
  it("covers every declared category", () => {
    for (const category of productCategoryOrder) {
      expect(products.some((product) => product.category === category)).toBe(
        true,
      );
    }
  });

  it("has unique slugs and a label for every category", () => {
    const slugs = products.map((product) => product.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const category of productCategoryOrder) {
      expect(productCategoryLabels[category]).toBeTruthy();
    }
  });

  it("every product has an enquiry message asking about availability", () => {
    for (const product of products) {
      expect(product.enquiryMessage.length).toBeGreaterThan(0);
      expect(product.enquiryMessage.toLowerCase()).toContain("kpk internet hub");
    }
  });

  it("contains no prices, brands, ratings or stock claims", () => {
    for (const product of products) {
      const text = `${product.name} ${product.description} ${product.enquiryMessage}`;
      expect(text).not.toMatch(/\bR\s?\d/);
      expect(text.toLowerCase()).not.toMatch(/in stock|sold out|discount|rating/);
      expect(text.toLowerCase()).not.toContain("add to cart");
    }
  });
});
