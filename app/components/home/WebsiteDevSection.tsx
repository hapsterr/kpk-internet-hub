import { ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/Button";
import { SectionHeading } from "~/components/ui/SectionHeading";
import { Reveal } from "~/components/ui/Reveal";

export function WebsiteDevSection() {
  return (
    <section className="gradient-bg">
      <div className="container-page section-y">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <SectionHeading
            as="h2"
            tone="dark"
            eyebrow="Website development"
            title="Let's Bring Your Business Online."
            description="From professional business websites to personal portfolios, KPK Internet Hub can help you establish an online presence."
          />
          <Reveal delay={150}>
            <div className="flex flex-col items-start gap-6 rounded-3xl border border-white/10 bg-white/5 p-8">
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                  Small business websites
                </li>
                <li className="flex items-center gap-2">
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                  Portfolio websites &amp; landing pages
                </li>
                <li className="flex items-center gap-2">
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                  Redesigns, maintenance &amp; management
                </li>
              </ul>
              <Button to="/website-development" variant="inverse">
                Request a Website Quote
                <ArrowRight aria-hidden="true" className="size-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
