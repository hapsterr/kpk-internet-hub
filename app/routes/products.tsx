import type { Route } from "./+types/products";
import { PageHeader } from "~/components/ui/PageHeader";
import { SectionHeading } from "~/components/ui/SectionHeading";
import { ProductCard } from "~/components/products/ProductCard";
import { CtaBanner } from "~/components/ui/CtaBanner";
import { Button } from "~/components/ui/Button";
import { WhatsAppButton } from "~/components/ui/WhatsAppButton";
import {
  productCategoryLabels,
  productCategoryOrder,
  products,
} from "~/data/products";
import { hasWhatsApp } from "~/config/business";
import { seoMeta } from "~/utils/seo";

export const meta: Route.MetaFunction = () =>
  seoMeta({
    title: "Computer Accessories | Hard Drives, SSDs, RAM & More",
    description:
      "Computer accessories and essentials at KPK Internet Hub — hard drives, SSDs, RAM, power cables and computer mice. Check availability in store.",
    path: "/products",
  });

export default function Products() {
  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="Computer Accessories & Essentials"
        description="Browse the categories of computer accessories available at KPK Internet Hub. Availability is confirmed in store — contact us to check what is currently in stock."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Products" }]}
      />

      <section className="container-page section-y">
        <SectionHeading
          title="Product Categories"
          description="Select a category and enquire about current availability."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <p className="mt-10 text-xs leading-relaxed text-muted">
          Categories shown:{" "}
          {productCategoryOrder
            .map((category) => productCategoryLabels[category])
            .join(", ")}
          . New categories can be added easily by the shop team.
        </p>
      </section>

      <CtaBanner
        title="Looking for Something Specific?"
        description="Ask us about current stock and availability."
      >
        {hasWhatsApp ? (
          <WhatsAppButton message="Hi KPK Internet Hub, I'd like to check the availability of computer accessories.">
            Check Availability
          </WhatsAppButton>
        ) : null}
        <Button to="/contact" variant="ghost-dark">
          Contact Us
        </Button>
      </CtaBanner>
    </>
  );
}
