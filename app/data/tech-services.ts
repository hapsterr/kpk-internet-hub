import { Globe, Monitor, Settings, Smartphone } from "lucide-react";
import type { Service } from "~/config/types";

/**
 * Technology services explicitly confirmed in the business brief.
 * Do not add repair, data recovery or licensing services without approval.
 */
export const techServices: Service[] = [
  {
    slug: "windows-installation",
    name: "Windows Installation",
    description:
      "Installation and setup assistance for Windows computers. Software licences are not included unless separately confirmed.",
    category: "internet-printing",
    icon: Monitor,
    whatsappMessage:
      "Hi KPK Internet Hub, I'd like to ask about Windows installation assistance.",
  },
  {
    slug: "pc-configuration",
    name: "PC Configuration",
    description:
      "Assistance with general computer setup and configuration so your machine is ready for everyday use.",
    category: "internet-printing",
    icon: Settings,
    whatsappMessage:
      "Hi KPK Internet Hub, I'd like to ask about PC configuration assistance.",
  },
  {
    slug: "phone-configuration",
    name: "Phone Configuration",
    description:
      "Assistance with general smartphone setup and configuration.",
    category: "internet-printing",
    icon: Smartphone,
    whatsappMessage:
      "Hi KPK Internet Hub, I'd like to ask about phone configuration assistance.",
  },
  {
    slug: "website-design-management",
    name: "Website Design & Management",
    description:
      "Professional website design, development and ongoing management for businesses and individuals.",
    category: "internet-printing",
    icon: Globe,
    href: "/website-development",
  },
];
