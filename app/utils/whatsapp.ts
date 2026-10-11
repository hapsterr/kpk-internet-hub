import { business } from "~/config/business";

const DEFAULT_COUNTRY_CODE = "27";

/**
 * Normalise a South African phone number to international format for wa.me.
 * Local numbers such as "072 123 4567" become "27721234567".
 */
export function normaliseWhatsAppNumber(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.startsWith("0")) {
    return `${DEFAULT_COUNTRY_CODE}${digits.slice(1)}`;
  }
  return digits;
}

/**
 * Build a WhatsApp deep link. Returns null when no number is configured so
 * callers can hide the action instead of rendering a broken link.
 */
export function buildWhatsAppUrl(
  message?: string,
  number: string | undefined = business.whatsappNumber,
): string | null {
  if (!number || number.trim().length === 0) {
    return null;
  }

  const base = `https://wa.me/${normaliseWhatsAppNumber(number)}`;

  if (!message) {
    return base;
  }

  return `${base}?text=${encodeURIComponent(message)}`;
}
