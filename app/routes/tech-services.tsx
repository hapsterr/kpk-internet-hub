import type { Route } from "./+types/tech-services";
import { PageHeader } from "~/components/ui/PageHeader";
import { ServiceCard } from "~/components/services/ServiceCard";
import { CtaBanner } from "~/components/ui/CtaBanner";
import { Button } from "~/components/ui/Button";
import { WhatsAppButton } from "~/components/ui/WhatsAppButton";
import { techServices } from "~/data/tech-services";
import { hasWhatsApp } from "~/config/business";
import { seoMeta } from "~/utils/seo";

export const meta: Route.MetaFunction = () =>
  seoMeta({
    title: "Technology Services | Windows Installation & Computer Setup",
    description:
      "Windows installation, PC configuration, phone configuration and website management services at KPK Internet Hub.",
    path: "/tech-services",
  });

export default function TechServices() {
  return (
    <>
      <PageHeader
        eyebrow="Tech services"
        title="Technology Services"
        description="Explore computer, phone and digital technology assistance available at KPK Internet Hub."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Tech Services" }]}
      />

      <section className="container-page section-y">
        <div className="grid gap-6 sm:grid-cols-2">
          {techServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <CtaBanner
        title="Need Help With a Device?"
        description="Send us a message describing what you need help with."
      >
        {hasWhatsApp ? (
          <WhatsAppButton message="Hi KPK Internet Hub, I'd like to ask about your technology services.">
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
