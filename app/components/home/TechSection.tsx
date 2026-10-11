import { ArrowRight, Monitor, Settings, Smartphone } from "lucide-react";
import { Button } from "~/components/ui/Button";
import { SectionHeading } from "~/components/ui/SectionHeading";
import { Reveal } from "~/components/ui/Reveal";

const items = [
  {
    icon: Monitor,
    title: "Windows Installation",
    description: "Installation and setup assistance for Windows computers.",
  },
  {
    icon: Settings,
    title: "PC Configuration",
    description: "General computer setup and configuration for everyday use.",
  },
  {
    icon: Smartphone,
    title: "Phone Configuration",
    description: "Help with general smartphone setup and configuration.",
  },
];

export function TechSection() {
  return (
    <section className="bg-surface">
      <div className="container-page section-y">
        <SectionHeading
          align="center"
          eyebrow="Tech services"
          title="Computer & Device Assistance"
          description="Get practical help with Windows installations, PC configuration and phone setup from the KPK team."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {items.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={index * 90} className="h-full">
              <div className="card-base h-full p-6 text-center">
                <span className="mx-auto mb-4 grid size-12 place-items-center rounded-xl bg-brand/10 text-brand">
                  <Icon aria-hidden="true" className="size-6" />
                </span>
                <h3 className="text-base font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <div className="mt-10 text-center">
            <Button to="/tech-services" variant="primary">
              Explore Tech Services
              <ArrowRight aria-hidden="true" className="size-4" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
