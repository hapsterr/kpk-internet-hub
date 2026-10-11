import { AlertTriangle } from "lucide-react";
import type { Route } from "./+types/applications";
import { PageHeader } from "~/components/ui/PageHeader";
import { SectionHeading } from "~/components/ui/SectionHeading";
import { ServiceCard } from "~/components/services/ServiceCard";
import { CtaBanner } from "~/components/ui/CtaBanner";
import { Button } from "~/components/ui/Button";
import { WhatsAppButton } from "~/components/ui/WhatsAppButton";
import { getServicesByCategory } from "~/data/services";
import { hasWhatsApp } from "~/config/business";
import { seoMeta } from "~/utils/seo";

export const meta: Route.MetaFunction = () =>
  seoMeta({
    title: "Online Application Assistance | Jobs, Bursaries & More",
    description:
      "Assistance with job, bursary, school, university, internship, learnership, SARS, PSIRA and ID-related online applications at KPK Internet Hub.",
    path: "/services/applications",
  });

const applicationServices = getServicesByCategory("applications");

export default function Applications() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Online Application Assistance"
        description="KPK Internet Hub helps you navigate relevant online application processes — from jobs and bursaries to school, university and public service applications."
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: "Application Assistance" },
        ]}
      />

      <section className="container-page section-y">
        <SectionHeading
          title="Application Categories We Can Help With"
          description="Bring the requirements for your application and we will help you work through the online steps."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {applicationServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <div
          role="note"
          className="mt-12 flex items-start gap-4 rounded-2xl border border-amber-300/70 bg-amber-50 p-6"
        >
          <AlertTriangle
            aria-hidden="true"
            className="mt-0.5 size-5 shrink-0 text-amber-600"
          />
          <p className="text-sm leading-relaxed text-amber-900">
            KPK Internet Hub provides independent application assistance and is
            not an official government, university or recruiting authority.
            Application outcomes are determined by the relevant institutions.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Ready to Start Your Application?"
        description="Send us a message with the type of application you need help with."
      >
        {hasWhatsApp ? (
          <WhatsAppButton message="Hi KPK Internet Hub, I'd like to enquire about application assistance.">
            Enquire About Application Assistance
          </WhatsAppButton>
        ) : null}
        <Button to="/contact" variant="ghost-dark">
          Contact Us
        </Button>
      </CtaBanner>
    </>
  );
}
