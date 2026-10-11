import { ArrowRight } from "lucide-react";
import type { Service } from "~/config/types";
import { hasWhatsApp } from "~/config/business";
import { Button } from "~/components/ui/Button";
import { WhatsAppButton } from "~/components/ui/WhatsAppButton";
import { Reveal } from "~/components/ui/Reveal";

/**
 * Service card with a single primary action, chosen in priority order:
 * WhatsApp enquiry (when configured) → dedicated page link → contact page.
 */
export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  const canEnquire = hasWhatsApp && Boolean(service.whatsappMessage);

  return (
    <Reveal className="h-full">
      <article className="card-base flex h-full flex-col p-6">
        <span className="mb-4 grid size-12 place-items-center rounded-xl bg-brand/10 text-brand">
          <Icon aria-hidden="true" className="size-6" />
        </span>
        <h3 className="text-lg font-semibold">{service.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {service.description}
        </p>
        {service.details && (
          <ul className="mt-3 space-y-1.5">
            {service.details.map((detail) => (
              <li key={detail} className="flex gap-2 text-xs text-slate-500">
                <span
                  aria-hidden="true"
                  className="mt-1.5 size-1 shrink-0 rounded-full bg-brand/60"
                />
                {detail}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-auto pt-5">
          {canEnquire ? (
            <WhatsAppButton
              message={service.whatsappMessage}
              variant="outline"
              className="w-full sm:w-auto"
            >
              Enquire Now
            </WhatsAppButton>
          ) : service.href ? (
            <Button
              to={service.href}
              variant="outline"
              className="w-full sm:w-auto"
            >
              Learn More
              <ArrowRight aria-hidden="true" className="size-4" />
            </Button>
          ) : (
            <Button to="/contact" variant="outline" className="w-full sm:w-auto">
              Contact Us
              <ArrowRight aria-hidden="true" className="size-4" />
            </Button>
          )}
        </div>
      </article>
    </Reveal>
  );
}
