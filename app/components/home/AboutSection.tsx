import { CheckCircle2 } from "lucide-react";
import { Button } from "~/components/ui/Button";
import { SectionHeading } from "~/components/ui/SectionHeading";
import { Reveal } from "~/components/ui/Reveal";

const pillars = [
  "Document services — printing, photocopying, CV typing and flyer design",
  "Application assistance — jobs, bursaries, school, university and more",
  "Technology support — Windows installation, PC and phone configuration",
  "Digital services — computer accessories and professional website development",
];

export function AboutSection() {
  return (
    <section className="bg-surface">
      <div className="container-page section-y">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="About KPK"
            title="Your Local Digital Solutions Hub"
            description="KPK Internet Hub brings practical document, application, technology and digital services together in one convenient location, so you can get more done without running around."
          />
          <Reveal delay={150}>
            <div>
              <ul className="space-y-4">
                {pillars.map((pillar) => (
                  <li key={pillar} className="flex items-start gap-3">
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-0.5 size-5 shrink-0 text-brand"
                    />
                    <span className="text-sm leading-relaxed text-slate-600 sm:text-base">
                      {pillar}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button to="/about" variant="primary">
                  Learn More About Us
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
