import { MessageCircle } from "lucide-react";
import { Button, type ButtonVariant } from "./Button";
import { buildWhatsAppUrl } from "~/utils/whatsapp";

type WhatsAppButtonProps = {
  message?: string;
  children?: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

/**
 * Renders nothing until a real WhatsApp number is configured in
 * app/config/business.ts, so a broken or placeholder contact link is
 * never published.
 */
export function WhatsAppButton({
  message,
  children,
  variant = "primary",
  className,
}: WhatsAppButtonProps) {
  const url = buildWhatsAppUrl(message);

  if (!url) {
    return null;
  }

  return (
    <Button href={url} variant={variant} className={className}>
      <MessageCircle aria-hidden="true" className="size-4" />
      {children ?? "Chat on WhatsApp"}
    </Button>
  );
}
