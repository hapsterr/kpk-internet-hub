import {
  Briefcase,
  ClipboardList,
  Copy,
  CreditCard,
  FileText,
  FileUser,
  GraduationCap,
  Landmark,
  Palette,
  Printer,
  RefreshCw,
  School,
  ShieldCheck,
  University,
  Users,
  Wifi,
} from "lucide-react";
import type { Service, ServiceCategory } from "~/config/types";

export const serviceCategoryLabels: Record<ServiceCategory, string> = {
  "internet-printing": "Internet & Printing",
  applications: "Applications",
  documents: "Professional Documents",
  design: "Graphic Design",
};

export const serviceCategoryOrder: ServiceCategory[] = [
  "internet-printing",
  "applications",
  "documents",
  "design",
];

export const services: Service[] = [
  {
    slug: "internet-access",
    name: "Internet Access",
    description:
      "Internet café access for browsing, email, online forms and everyday digital tasks.",
    category: "internet-printing",
    icon: Wifi,
    details: [
      "Facilities and session options are confirmed in store — contact us for current availability.",
    ],
    whatsappMessage:
      "Hi KPK Internet Hub, I'd like to ask about internet access at the shop.",
  },
  {
    slug: "copying-photocopying",
    name: "Copying & Photocopying",
    description:
      "Quick document copying and photocopying for personal, school and business needs.",
    category: "internet-printing",
    icon: Copy,
    whatsappMessage:
      "Hi KPK Internet Hub, I'd like to ask about copying and photocopying services.",
  },
  {
    slug: "document-printing",
    name: "Document Printing",
    description:
      "Clear, readable document printing for applications, assignments, letters and forms.",
    category: "internet-printing",
    icon: Printer,
    whatsappMessage:
      "Hi KPK Internet Hub, I'd like to ask about document printing.",
  },
  {
    slug: "sars-assistance",
    name: "SARS-Related Assistance",
    description:
      "Guidance when completing SARS-related forms and online processes available to the public.",
    category: "applications",
    icon: Landmark,
    whatsappMessage:
      "Hi KPK Internet Hub, I'd like to ask about SARS-related assistance.",
  },
  {
    slug: "psira-assistance",
    name: "PSIRA-Related Assistance",
    description:
      "Help navigating PSIRA-related online steps and public registration processes.",
    category: "applications",
    icon: ShieldCheck,
    whatsappMessage:
      "Hi KPK Internet Hub, I'd like to ask about PSIRA-related assistance.",
  },
  {
    slug: "job-applications",
    name: "Job Applications",
    description:
      "Assistance completing and submitting online job applications.",
    category: "applications",
    icon: Briefcase,
    whatsappMessage:
      "Hi KPK Internet Hub, I'd like help with a job application.",
  },
  {
    slug: "bursary-applications",
    name: "Bursary Applications",
    description:
      "Guidance through online bursary application forms and requirements.",
    category: "applications",
    icon: GraduationCap,
    whatsappMessage:
      "Hi KPK Internet Hub, I'd like help with a bursary application.",
  },
  {
    slug: "school-applications",
    name: "School Applications",
    description:
      "Assistance with online school application processes.",
    category: "applications",
    icon: School,
    whatsappMessage:
      "Hi KPK Internet Hub, I'd like help with a school application.",
  },
  {
    slug: "university-applications",
    name: "University Applications",
    description:
      "Support navigating university study application portals and forms.",
    category: "applications",
    icon: University,
    whatsappMessage:
      "Hi KPK Internet Hub, I'd like help with a university application.",
  },
  {
    slug: "internship-applications",
    name: "Internship Applications",
    description:
      "Assistance with online internship application processes.",
    category: "applications",
    icon: Users,
    whatsappMessage:
      "Hi KPK Internet Hub, I'd like help with an internship application.",
  },
  {
    slug: "learnership-applications",
    name: "Learnership Applications",
    description:
      "Guidance when applying for learnership opportunities online.",
    category: "applications",
    icon: ClipboardList,
    whatsappMessage:
      "Hi KPK Internet Hub, I'd like help with a learnership application.",
  },
  {
    slug: "id-application-assistance",
    name: "ID-Related Application Assistance",
    description:
      "Help with public online steps related to ID documentation processes.",
    category: "applications",
    icon: CreditCard,
    whatsappMessage:
      "Hi KPK Internet Hub, I'd like to ask about ID-related application assistance.",
  },
  {
    slug: "standard-cv-typing",
    name: "Standard CV Typing",
    description:
      "Your information typed and organised into a clear, professional CV document.",
    category: "documents",
    icon: FileText,
    href: "/services/cv-and-design",
    whatsappMessage:
      "Hi KPK Internet Hub, I'd like to ask about standard CV typing.",
  },
  {
    slug: "modern-cv-design",
    name: "Modern CV Typing & Formatting",
    description:
      "Professionally structured CV layouts that present your experience clearly.",
    category: "documents",
    icon: FileUser,
    href: "/services/cv-and-design",
    whatsappMessage:
      "Hi KPK Internet Hub, I'd like to ask about modern CV design.",
  },
  {
    slug: "cv-updates",
    name: "CV Updates",
    description:
      "Update an existing CV with new experience, contact details or qualifications.",
    category: "documents",
    icon: RefreshCw,
    href: "/services/cv-and-design",
    details: ["Update services are confirmed in store before work begins."],
    whatsappMessage:
      "Hi KPK Internet Hub, I'd like to ask about updating my CV.",
  },
  {
    slug: "flyer-design",
    name: "Flyer Design",
    description:
      "Promotional flyer design for businesses, events and personal occasions.",
    category: "design",
    icon: Palette,
    href: "/services/cv-and-design",
    whatsappMessage:
      "Hi KPK Internet Hub, I'd like to ask about flyer design services.",
  },
];

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((service) => service.category === category);
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
