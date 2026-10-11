import { Button } from "~/components/ui/Button";
import { CtaBanner } from "~/components/ui/CtaBanner";
import { WhatsAppButton } from "~/components/ui/WhatsAppButton";

export function FinalCta() {
  return (
    <CtaBanner
      title="Need Assistance? Get in Touch."
      description="Questions about a service, an application or a website project? Reach out and we will help you get started."
    >
      <WhatsAppButton message="Hi KPK Internet Hub, I need assistance with a service.">
        Chat on WhatsApp
      </WhatsAppButton>
      <Button to="/contact" variant="ghost-dark">
        Visit Contact Page
      </Button>
    </CtaBanner>
  );
}
