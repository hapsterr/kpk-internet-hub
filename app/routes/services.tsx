import type { Route } from "./+types/services";
import { PageHeader } from "~/components/ui/PageHeader";
import { SectionHeading } from "~/components/ui/SectionHeading";
import { ServiceCard } from "~/components/services/ServiceCard";
import { CtaBanner } from "~/components/ui/CtaBanner";
import { Button } from "~/components/ui/Button";
import { WhatsAppButton } from "~/components/ui/WhatsAppButton";
import {
  getServicesByCategory,
  serviceCategoryLabels,
  serviceCategoryOrder,
} from "~/data/services";
import { hasWhatsApp } from "~/config/business";
import { seoMeta } from "~/utils/seo";

export const meta: Route.MetaFunction = () =>
  seoMeta({
    title: "Our Services | Internet, Printing & Application Assistance",
    description:
      "Explore internet, printing, application, document and digital services available through KPK Internet Hub.",
    path: "/services",
  });

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Our Services"
        description="Explore internet, printing, application, document and digital services available through KPK Internet Hub."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />

      {serviceCategoryOrder.map((category, index) => {
        const services = getServicesByCategory(category);
        if (services.length === 0) {
          return null;
        }
        return (
          <section
            key={category}
            className={index % 2 === 1 ? "bg-surface" : undefined}
          >
            <div className="container-page section-y">
              <SectionHeading title={serviceCategoryLabels[category]} />
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                  <ServiceCard key={service.slug} service={service} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CtaBanner
        title="Not Sure What You Need?"
        description="Send us a message and we will point you in the right direction."
      >
        {hasWhatsApp ? (
          <WhatsAppButton message="Hi KPK Internet Hub, I'd like to ask about the services you offer.">
            Chat on WhatsApp
          </WhatsAppButton>
        ) : null}
        <Button to="/contact" variant="ghost-dark">
          Contact Us
        </Button>
      </CtaBanner>
    </>
  );
}
