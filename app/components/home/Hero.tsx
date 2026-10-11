import { ArrowRight, ClipboardList, Code2, Monitor, Printer, Wifi } from "lucide-react";
import { Button } from "~/components/ui/Button";
import { Reveal } from "~/components/ui/Reveal";

const highlights = [
  { icon: Printer, label: "Printing & copying" },
  { icon: ClipboardList, label: "Application assistance" },
  { icon: Monitor, label: "Computer setup" },
  { icon: Code2, label: "Website development" },
];

export function Hero() {
  return (
    <section className="gradient-bg hero-grid relative overflow-hidden">
      <div className="container-page section-y relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Your Digital Solutions Hub
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
                Everything Digital.{" "}
                <span className="gradient-brand">All in One Place.</span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                From printing and online applications to computer support and
                professional website development, KPK Internet Hub brings your
                everyday digital needs together.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button to="/services" variant="primary">
                  Explore Our Services
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Button>
                <Button to="/contact" variant="ghost-dark">
                  Contact Us
                </Button>
              </div>
            </Reveal>
          </div>

          <div
            aria-hidden="true"
            className="relative mx-auto hidden w-full max-w-md lg:block"
          >
            <Reveal delay={300}>
              <div className="gentle-float rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <div className="grid grid-cols-2 gap-4">
                  {highlights.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex flex-col items-start gap-3 rounded-2xl border border-white/10 bg-navy/60 p-5"
                    >
                      <span className="grid size-10 place-items-center rounded-xl bg-brand/20 text-accent">
                        <Icon className="size-5" />
                      </span>
                      <span className="text-sm font-medium text-slate-200">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-2 rounded-2xl border border-accent/20 bg-accent/10 px-4 py-3 text-sm text-accent">
                  <Wifi className="size-4" />
                  One hub for everyday digital tasks
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
