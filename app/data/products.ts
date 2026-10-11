import { Cable, Database, HardDrive, MemoryStick, Mouse } from "lucide-react";
import type { Product, ProductCategory } from "~/config/types";

export const productCategoryLabels: Record<ProductCategory, string> = {
  "hard-drives": "Hard Drives",
  ssds: "SSDs",
  ram: "RAM",
  "power-cables": "Power Cables",
  mice: "Computer Mice",
};

export const productCategoryOrder: ProductCategory[] = [
  "hard-drives",
  "ssds",
  "ram",
  "power-cables",
  "mice",
];

export const products: Product[] = [
  {
    slug: "hard-drives",
    name: "Hard Drives",
    category: "hard-drives",
    description:
      "Storage drives for backups and additional computer storage. Available sizes and stock are confirmed in store.",
    icon: HardDrive,
    enquiryMessage:
      "Hi KPK Internet Hub, I'd like to enquire about the availability of computer hard drives.",
  },
  {
    slug: "ssds",
    name: "SSDs",
    category: "ssds",
    description:
      "Solid state drives for faster everyday computer performance. Available capacities and form factors are confirmed in store.",
    icon: Database,
    enquiryMessage:
      "Hi KPK Internet Hub, I'd like to enquire about the availability of SSDs.",
  },
  {
    slug: "ram",
    name: "RAM",
    category: "ram",
    description:
      "Memory modules for computer upgrades. Available types and stock are confirmed in store.",
    icon: MemoryStick,
    enquiryMessage:
      "Hi KPK Internet Hub, I'd like to enquire about the availability of computer RAM.",
  },
  {
    slug: "power-cables",
    name: "Power Cables",
    category: "power-cables",
    description:
      "Computer power cables for desktop setups and replacements.",
    icon: Cable,
    enquiryMessage:
      "Hi KPK Internet Hub, I'd like to enquire about the availability of power cables.",
  },
  {
    slug: "computer-mice",
    name: "Computer Mice",
    category: "mice",
    description:
      "Wired and wireless computer mice for everyday use.",
    icon: Mouse,
    enquiryMessage:
      "Hi KPK Internet Hub, I'd like to enquire about the availability of computer mice.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
