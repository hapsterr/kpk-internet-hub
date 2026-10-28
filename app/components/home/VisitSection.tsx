import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import {
  business,
  formatLocation,
  hasEmail,
  hasOpeningHours,
  hasPhone,
  hasWhatsApp,
} from "~/config/business";
import { Button } from "~/components/ui/Button";
import { SectionHeading } from "~/components/ui/SectionHeading";
import { Reveal } from "~/components/ui/Reveal";
import { buildWhatsAppUrl } from "~/utils/whatsapp";

export function VisitSection() {
  const location = formatLocation();
  const whatsappUrl = hasWhatsApp
    ? buildWhatsAppUrl("Hi KPK Internet Hub, I'd like to visit the shop. Are you open right now?")
    : null;

  return (
    <section className="container-page section-y">
      <SectionHeading
        align="center"
        eyebrow="Visit us"
        title="Visit KPK Internet Hub"
        description="Stop by the shop for printing, applications, computer support and more."
      />
      <Reveal delay={150}>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {location && (
            <div className="card-base p-6">
              <span className="mb-4 grid size-11 place-items-center rounded-xl bg-brand/10 text-brand">
                <MapPin aria-hidden="true" className="size-5" />
              </span>
              <h3 className="text-base font-semibold">Location</h3>
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
              <h3 className="text-base font-semibold">Opening Hours</h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-600">
                {business.openingHours.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          )}
          {(whatsappUrl || hasPhone || hasEmail) && (
            <div className="card-base p-6">
              <span className="mb-4 grid size-11 place-items-center rounded-xl bg-brand/10 text-brand">
                <MessageCircle aria-hidden="true" className="size-5" />
              </span>
              <h3 className="text-base font-semibold">Contact</h3>
              <ul className="mt-2 space-y-2 text-sm text-slate-600">
                {whatsappUrl && (
                  <li>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-brand hover:underline"
                    >
                      Chat on WhatsApp
                    </a>
                  </li>
                )}
                {hasPhone && business.phone && (
                  <li className="inline-flex items-center gap-2">
                    <Phone aria-hidden="true" className="size-4 text-muted" />
                    <a
                      href={`tel:${business.phone.replace(/\s/g, "")}`}
                      className="hover:text-brand"
                    >
                      {business.phone}
                    </a>
                  </li>
                )}
                {hasEmail && business.email && (
                  <li className="inline-flex items-center gap-2">
                    <Mail aria-hidden="true" className="size-4 text-muted" />
                    <a
                      href={`mailto:${business.email}`}
                      className="hover:text-brand"
                    >
                      {business.email}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </Reveal>
    </section>
  );
}
