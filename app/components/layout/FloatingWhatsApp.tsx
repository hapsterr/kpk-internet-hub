import { MessageCircle } from "lucide-react";
import { hasWhatsApp } from "~/config/business";
import { buildWhatsAppUrl } from "~/utils/whatsapp";

/**
 * Floating WhatsApp shortcut. Renders nothing until a real number is
 * configured in app/config/business.ts.
 */
export function FloatingWhatsApp() {
  const url = hasWhatsApp
    ? buildWhatsAppUrl("Hi KPK Internet Hub, I'd like to enquire about your services.")
    : null;

  if (!url) {
    return null;
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with KPK Internet Hub on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-105"
    >
      <MessageCircle aria-hidden="true" className="size-6" />
    </a>
  );
}
