import { Clock, Globe, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import type { Route } from "./+types/contact";
import { PageHeader } from "~/components/ui/PageHeader";
import { Button } from "~/components/ui/Button";
import {
  business,
  formatLocation,
  hasEmail,
  hasOpeningHours,
  hasPhone,
  hasSocials,
  hasWhatsApp,
} from "~/config/business";
import { buildWhatsAppUrl } from "~/utils/whatsapp";
import { seoMeta } from "~/utils/seo";

export const meta: Route.MetaFunction = () =>
  seoMeta({
    title: "Contact KPK Internet Hub",
    description:
      "Get in touch with KPK Internet Hub — chat on WhatsApp, call, email or visit the shop for printing, applications, tech support and website development.",
    path: "/contact",
  });

export default function Contact() {
  const location = formatLocation();
  const whatsappUrl = hasWhatsApp
    ? buildWhatsAppUrl("Hi KPK Internet Hub, I'd like to enquire about your services.")
    : null;

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Contact KPK Internet Hub"
        description="Questions about a service, product or website project? Reach out through the channels below."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <section className="container-page section-y">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whatsappUrl && (
              <div className="card-base p-6">
                <span className="mb-4 grid size-11 place-items-center rounded-xl bg-[#25D366]/10 text-[#128C7E]">
                  <MessageCircle aria-hidden="true" className="size-5" />
                </span>
                <h2 className="text-lg font-semibold">WhatsApp</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  The quickest way to reach us for enquiries about services,
                  products and website projects.
                </p>
                <div className="mt-4">
                  <Button href={whatsappUrl} variant="outline">
                    Chat on WhatsApp
                  </Button>
                </div>
              </div>
            )}

            {hasPhone && business.phone && (
              <div className="card-base p-6">
                <span className="mb-4 grid size-11 place-items-center rounded-xl bg-brand/10 text-brand">
                  <Phone aria-hidden="true" className="size-5" />
                </span>
                <h2 className="text-lg font-semibold">Telephone</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {business.phone}
                </p>
                <div className="mt-4">
                  <Button href={`tel:${business.phone.replace(/\s/g, "")}`} variant="outline">
                    Call Us
                  </Button>
                </div>
              </div>
            )}

            {hasEmail && business.email && (
              <div className="card-base p-6">
                <span className="mb-4 grid size-11 place-items-center rounded-xl bg-brand/10 text-brand">
                  <Mail aria-hidden="true" className="size-5" />
                </span>
                <h2 className="text-lg font-semibold">Email</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {business.email}
                </p>
                <div className="mt-4">
                  <Button href={`mailto:${business.email}`} variant="outline">
                    Send an Email
                  </Button>
                </div>
              </div>
            )}

            {location && (
              <div className="card-base p-6">
                <span className="mb-4 grid size-11 place-items-center rounded-xl bg-brand/10 text-brand">
                  <MapPin aria-hidden="true" className="size-5" />
                </span>
                <h2 className="text-lg font-semibold">Visit the Shop</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {location}
                </p>
                {business.googleMapsUrl && (
                  <div className="mt-4">
                    <Button href={business.googleMapsUrl} variant="outline">
                      Get Directions
                    </Button>
                  </div>
                )}
              </div>
            )}

            {hasOpeningHours && business.openingHours && (
              <div className="card-base p-6">
                <span className="mb-4 grid size-11 place-items-center rounded-xl bg-brand/10 text-brand">
                  <Clock aria-hidden="true" className="size-5" />
                </span>
                <h2 className="text-lg font-semibold">Opening Hours</h2>
                <ul className="mt-2 space-y-1 text-sm text-slate-600">
                  {business.openingHours.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            )}

            {hasSocials && (
              <div className="card-base p-6">
                <span className="mb-4 grid size-11 place-items-center rounded-xl bg-brand/10 text-brand">
                  <Globe aria-hidden="true" className="size-5" />
                </span>
                <h2 className="text-lg font-semibold">Social Media</h2>
                <ul className="mt-3 flex flex-wrap gap-3">
                  {business.socials?.facebook && (
                    <li>
                      <a
                        href={business.socials.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-brand/30 px-4 py-2 text-sm font-semibold text-brand transition-colors hover:bg-brand/5"
                      >
                        Facebook
                      </a>
                    </li>
                  )}
                  {business.socials?.instagram && (
                    <li>
                      <a
                        href={business.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-brand/30 px-4 py-2 text-sm font-semibold text-brand transition-colors hover:bg-brand/5"
                      >
                        Instagram
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            )}
        </div>
      </section>
    </>
  );
}
