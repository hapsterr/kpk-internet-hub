import type { Product } from "~/config/types";
import { hasWhatsApp } from "~/config/business";
import { Button } from "~/components/ui/Button";
import { WhatsAppButton } from "~/components/ui/WhatsAppButton";
import { Reveal } from "~/components/ui/Reveal";

/**
 * Catalogue-only product card. Availability is always confirmed through a
 * personal enquiry — no prices, stock statuses or specifications are shown.
 */
export function ProductCard({ product }: { product: Product }) {
  const Icon = product.icon;

  return (
    <Reveal className="h-full">
      <article className="card-base flex h-full flex-col p-6">
        <span className="mb-4 grid size-12 place-items-center rounded-xl bg-accent/10 text-brand">
          <Icon aria-hidden="true" className="size-6" />
        </span>
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {product.description}
        </p>
        <div className="mt-auto pt-5">
          {hasWhatsApp ? (
            <WhatsAppButton
              message={product.enquiryMessage}
              variant="outline"
              className="w-full sm:w-auto"
            >
              Check Availability
            </WhatsAppButton>
          ) : (
            <Button to="/contact" variant="outline" className="w-full sm:w-auto">
              Check Availability
            </Button>
          )}
        </div>
      </article>
    </Reveal>
  );
}
