import {
  ClipboardList,
  FileUser,
  Globe,
  Monitor,
  Printer,
  Wifi,
  type LucideIcon,
} from "lucide-react";

export type HomepageService = {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
  cta: string;
};

/**
 * The six primary services featured on the homepage. Detailed catalogue
 * data lives in app/data/services.ts.
 */
export const homepageServices: HomepageService[] = [
  {
    title: "Internet Access",
    description:
      "Internet café access for browsing, email, online forms and everyday digital tasks.",
    icon: Wifi,
    to: "/services",
    cta: "Explore",
  },
  {
    title: "Printing & Photocopying",
    description:
      "Clear document printing and quick photocopying for applications, schoolwork and business.",
    icon: Printer,
    to: "/services",
    cta: "Explore",
  },
  {
    title: "Online Applications",
    description:
      "Assistance with jobs, bursaries, school, university, SARS, PSIRA and other online applications.",
    icon: ClipboardList,
    to: "/services/applications",
    cta: "View Application Services",
  },
  {
    title: "CV Typing & Design",
    description:
      "Professional CV typing, modern CV formatting and promotional flyer design.",
    icon: FileUser,
    to: "/services/cv-and-design",
    cta: "View CV & Design",
  },
  {
    title: "Computer & Tech Support",
    description:
      "Windows installation, PC configuration and phone setup assistance.",
    icon: Monitor,
    to: "/tech-services",
    cta: "Explore Tech Services",
  },
  {
    title: "Website Design & Development",
    description:
      "Professional websites for small businesses, portfolios and landing pages.",
    icon: Globe,
    to: "/website-development",
    cta: "Website Development",
  },
];
