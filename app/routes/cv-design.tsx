import type { Route } from "./+types/cv-design";
import { FileText, Palette, Sparkles } from "lucide-react";
import { PageHeader } from "~/components/ui/PageHeader";
import { SectionHeading } from "~/components/ui/SectionHeading";
import { CtaBanner } from "~/components/ui/CtaBanner";
import { Button } from "~/components/ui/Button";
import { WhatsAppButton } from "~/components/ui/WhatsAppButton";
import { hasWhatsApp } from "~/config/business";
import { seoMeta } from "~/utils/seo";

export const meta: Route.MetaFunction = () =>
  seoMeta({
    title: "CV Typing & Flyer Design Services",
    description:
      "Professional CV typing, modern CV formatting and promotional flyer design services at KPK Internet Hub.",
    path: "/services/cv-and-design",
  });

const services = [
  {
    icon: FileText,
    title: "Standard CV Typing",
    description:
      "We help you present your information in a clear, professional CV document that is easy for employers to read. Bring your existing content or work with us to structure it.",
  },
  {
    icon: Sparkles,
    title: "Modern CV Design",
    description:
      "Professionally structured CV layouts that organise your experience, qualifications and skills into a polished, modern format.",
  },
  {
    icon: Palette,
    title: "Flyer Design",
    description:
      "Promotional flyer design for businesses, events and personal occasions — clear messaging and a professional look.",
  },
];

export default function CvDesign() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="CV Typing & Creative Design"
        description="Present yourself professionally with CV typing, modern formatting and flyer design from KPK Internet Hub."
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: "CV & Design" },
        ]}
      />

      <section className="container-page section-y">
        <div className="grid gap-6 md:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <div key={title} className="card-base p-6">
              <span className="mb-4 grid size-12 place-items-center rounded-xl bg-brand/10 text-brand">
                <Icon aria-hidden="true" className="size-6" />
              </span>
              <h2 className="text-lg font-semibold">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-page section-y">
          <SectionHeading
            align="center"
            title="Example Design Placeholders"
            description="Illustrative examples with fictional names and contact details — real customer documents are never shown without permission."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <figure className="card-base overflow-hidden">
              <div className="border-b border-slate-100 bg-white p-8">
                <figcaption className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <div className="mb-4 border-b border-slate-200 pb-3">
                    <p className="font-display text-lg font-bold text-heading">
                      Thabo Mokoena
                    </p>
                    <p className="text-xs text-slate-500">
                      Administrative Assistant — example CV layout
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2.5 w-3/4 rounded bg-slate-200" />
                    <div className="h-2.5 w-full rounded bg-slate-100" />
                    <div className="h-2.5 w-5/6 rounded bg-slate-100" />
                    <div className="h-2.5 w-2/3 rounded bg-slate-200" />
                  </div>
                  <p className="mt-4 text-[10px] uppercase tracking-wider text-muted">
                    Example only — fictional details
                  </p>
                </figcaption>
              </div>
              <p className="px-6 py-4 text-sm text-slate-600">
                Standard CV typing: a clean, readable document structured for
                employers.
              </p>
            </figure>

            <figure className="card-base overflow-hidden">
              <div className="border-b border-slate-100 bg-gradient-to-br from-navy to-brand p-8">
                <figcaption className="mx-auto max-w-[240px] rounded-xl bg-white p-5 shadow-lg">
                  <p className="text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-brand">
                    Grand Opening
                  </p>
                  <p className="mt-2 text-center font-display text-xl font-bold text-heading">
                    Perfect Trends Salon
                  </p>
                  <p className="mt-2 text-center text-xs text-slate-500">
                    example flyer — 080 000 0000
                  </p>
                  <div className="mt-4 rounded-lg bg-brand/10 py-2 text-center text-[10px] font-semibold text-brand">
                    Saturday · 10:00
                  </div>
                </figcaption>
              </div>
              <p className="px-6 py-4 text-sm text-slate-600">
                Flyer design: promotional layouts for businesses, events and
                personal occasions.
              </p>
            </figure>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Want a Professional CV or Flyer?"
        description="Send us a message and tell us what you need."
      >
        {hasWhatsApp ? (
          <WhatsAppButton message="Hi KPK Internet Hub, I'd like to enquire about CV typing or flyer design services.">
            Enquire About CV or Design Services
          </WhatsAppButton>
        ) : null}
        <Button to="/contact" variant="ghost-dark">
          Contact Us
        </Button>
      </CtaBanner>
    </>
  );
}
