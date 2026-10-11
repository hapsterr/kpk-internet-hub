import type { LucideIcon } from "lucide-react";

export type SocialLinks = {
  facebook?: string;
  instagram?: string;
};

export type BusinessConfig = {
  name: string;
  tagline: string;
  description: string;
  whatsappNumber?: string;
  phone?: string;
  email?: string;
  address?: string;
  city?: string;
  province?: string;
  openingHours?: string[];
  googleMapsUrl?: string;
  websiteUrl?: string;
  socials?: SocialLinks;
};

export type NavLink = {
  label: string;
  to: string;
};

export type ServiceCategory =
  | "internet-printing"
  | "applications"
  | "documents"
  | "design";

export type Service = {
  slug: string;
  name: string;
  description: string;
  category: ServiceCategory;
  icon: LucideIcon;
  href?: string;
  details?: string[];
  whatsappMessage?: string;
};

export type ProductCategory =
  | "hard-drives"
  | "ssds"
  | "ram"
  | "power-cables"
  | "mice";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  description: string;
  icon: LucideIcon;
  enquiryMessage: string;
};

export type Faq = {
  id: string;
  question: string;
  answer: string;
};

export type PortfolioProject = {
  slug: string;
  title: string;
  description: string;
  type: string;
};

export type PageMeta = {
  title: string;
  description: string;
  path: string;
};
