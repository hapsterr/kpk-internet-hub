import type { NavLink } from "./types";

export const navLinks: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Tech Services", to: "/tech-services" },
  { label: "Products", to: "/products" },
  { label: "Website Development", to: "/website-development" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const footerServiceLinks: NavLink[] = [
  { label: "Application Assistance", to: "/services/applications" },
  { label: "CV Typing & Design", to: "/services/cv-and-design" },
  { label: "Computer Accessories", to: "/products" },
  { label: "Website Development", to: "/website-development" },
];

export const footerUtilityLinks: NavLink[] = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Contact", to: "/contact" },
];
