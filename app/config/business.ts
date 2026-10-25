import type { BusinessConfig } from "./types";

/**
 * Central business configuration.
 *
 * Fields marked optional stay empty until the owner confirms the real
 * business information. Components must hide any dependent feature while the
 * corresponding value is missing — never invent placeholder contact details.
 */
export const business: BusinessConfig = {
  name: "KPK Internet Hub",
  tagline: "One Hub. Endless Possibilities.",
  description:
    "KPK Internet Hub is a South African internet café and digital services business offering printing, online application assistance, computer support, CV typing, flyer design, computer accessories and website development.",
  // TODO(owner): confirm before launch — dependent features stay hidden until set.
  whatsappNumber: undefined,
  phone: undefined,
  email: undefined,
  address: undefined,
  city: undefined,
  province: undefined,
  openingHours: undefined,
  googleMapsUrl: undefined,
  websiteUrl: "https://kpkinternethub.co.za",
  socials: undefined,
};

export const hasWhatsApp = Boolean(business.whatsappNumber);
export const hasPhone = Boolean(business.phone);
export const hasEmail = Boolean(business.email);
export const hasAddress = Boolean(business.address);
export const hasOpeningHours = Boolean(
  business.openingHours && business.openingHours.length > 0,
);
export const hasMapsLink = Boolean(business.googleMapsUrl);
export const hasSocials = Boolean(
  business.socials?.facebook || business.socials?.instagram,
);

export function formatLocation(): string | null {
  const parts = [business.address, business.city, business.province].filter(
    (part): part is string => Boolean(part && part.trim().length > 0),
  );
  return parts.length > 0 ? parts.join(", ") : null;
}
