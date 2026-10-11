import { Camera, CheckCircle2 } from "lucide-react";
import type { Route } from "./+types/about";
import { PageHeader } from "~/components/ui/PageHeader";
import { SectionHeading } from "~/components/ui/SectionHeading";
import { CtaBanner } from "~/components/ui/CtaBanner";
import { Button } from "~/components/ui/Button";
import { business } from "~/config/business";
import { seoMeta } from "~/utils/seo";

export const meta: Route.MetaFunction = () =>
  seoMeta({
    title: "About KPK Internet Hub",
    description:
      "KPK Internet Hub is an emerging internet café and digital solutions provider offering printing, application assistance, tech support, CV services and website development.",
    path: "/about",
  });

const audiences = [
  "Job seekers preparing applications and CVs",
  "School learners, university students and bursary applicants",
  "Internship and learnership applicants",
  "Anyone needing printing, copying or document services",
  "People who need help setting up a computer or phone",
  "Small business owners and entrepreneurs needing a website",
];

const capabilities = [
  "Internet access, printing and photocopying",
  "Online application assistance across many categories",
  "CV typing, modern CV formatting and flyer design",
  "Windows installation, PC and phone configuration",
  "Computer accessories — storage, memory, cables and mice",
  "Website design, development and management",
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="About KPK Internet Hub"
        description="An emerging internet café and digital solutions provider serving the everyday needs of our community."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      <section className="container-page section-y">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              title="One Hub. Endless Possibilities."
              description={`${business.name} is a South African internet café and digital services business. We bring document services, application assistance, technology support and digital solutions together in one place, so everyday tasks become simpler.`}
            />
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              Whether you are applying for a job, printing an important
              document, setting up a new device or looking to take your
              business online, our goal is to make the process straightforward
              and approachable.
            </p>
          </div>

          <div
            aria-hidden="true"
            className="grid place-items-center rounded-3xl border-2 border-dashed border-slate-200 bg-surface p-10 text-center"
          >
            <Camera className="size-8 text-muted" />
            <p className="mt-3 max-w-xs text-sm text-muted">
              Genuine shop photographs will be added here once available.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-page section-y">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <SectionHeading title="Who We Serve" />
              <ul className="mt-8 space-y-3">
                {audiences.map((audience) => (
                  <li key={audience} className="flex items-start gap-3">
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-0.5 size-5 shrink-0 text-brand"
                    />
                    <span className="text-sm leading-relaxed text-slate-600">
                      {audience}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading title="What We Do" />
              <ul className="mt-8 space-y-3">
                {capabilities.map((capability) => (
                  <li key={capability} className="flex items-start gap-3">
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-0.5 size-5 shrink-0 text-brand"
                    />
                    <span className="text-sm leading-relaxed text-slate-600">
                      {capability}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Come See What We Can Do"
        description="Visit the shop or send us a message to get started."
      >
        <Button to="/services" variant="inverse">
          Explore Services
        </Button>
        <Button to="/contact" variant="ghost-dark">
          Contact Us
        </Button>
      </CtaBanner>
    </>
  );
}
