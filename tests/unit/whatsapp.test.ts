import { describe, expect, it } from "vitest";
import {
  buildWhatsAppUrl,
  normaliseWhatsAppNumber,
} from "~/utils/whatsapp";

describe("normaliseWhatsAppNumber", () => {
  it("converts a local SA mobile number to international format", () => {
    expect(normaliseWhatsAppNumber("072 123 4567")).toBe("27721234567");
  });

  it("strips spaces, dashes and parentheses", () => {
    expect(normaliseWhatsAppNumber("072-123 (4567)")).toBe("27721234567");
  });

  it("keeps numbers already in international format", () => {
    expect(normaliseWhatsAppNumber("27721234567")).toBe("27721234567");
  });

  it("does not double-prefix the country code", () => {
    expect(normaliseWhatsAppNumber("270721234567")).toBe("270721234567");
  });
});

describe("buildWhatsAppUrl", () => {
  it("returns null when no number is configured", () => {
    expect(buildWhatsAppUrl("hello", undefined)).toBeNull();
    expect(buildWhatsAppUrl("hello", "")).toBeNull();
    expect(buildWhatsAppUrl("hello", "   ")).toBeNull();
  });

  it("builds a wa.me link without a message", () => {
    expect(buildWhatsAppUrl(undefined, "0721234567")).toBe(
      "https://wa.me/27721234567",
    );
  });

  it("URL-encodes the pre-filled message", () => {
    const url = buildWhatsAppUrl(
      "Hi KPK, I'd like to check availability of RAM & SSDs.",
      "0721234567",
    );
    expect(url).toBe(
      "https://wa.me/27721234567?text=" +
        encodeURIComponent("Hi KPK, I'd like to check availability of RAM & SSDs."),
    );
  });

  it("encodes spaces and special characters safely", () => {
    const url = buildWhatsAppUrl("a b&c=d?e", "0721234567");
    expect(url).toContain("text=a%20b%26c%3Dd%3Fe");
  });
});
