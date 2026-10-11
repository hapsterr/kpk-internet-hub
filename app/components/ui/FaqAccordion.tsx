import { ChevronDown } from "lucide-react";
import type { Faq } from "~/config/types";

/**
 * Accessible FAQ accordion built on native <details>/<summary>, which
 * provides keyboard support and correct ARIA semantics without JavaScript.
 */
export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  if (faqs.length === 0) {
    return null;
  }

  return (
    <div className="divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-soft">
      {faqs.map((faq) => (
        <details key={faq.id} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-heading transition-colors hover:bg-slate-50 [&::-webkit-details-marker]:hidden sm:px-6">
            {faq.question}
            <ChevronDown
              aria-hidden="true"
              className="size-5 shrink-0 text-brand transition-transform duration-200 group-open:rotate-180"
            />
          </summary>
          <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600 sm:px-6">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
