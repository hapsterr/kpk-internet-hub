import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { homepageServices } from "~/data/homepage";
import { SectionHeading } from "~/components/ui/SectionHeading";
import { Reveal } from "~/components/ui/Reveal";

export function ServicesOverview() {
  return (
    <section className="container-page section-y">
      <SectionHeading
        align="center"
        eyebrow="What we do"
        title="What Can We Help You With?"
        description="Practical digital services for job seekers, students, businesses and everyday needs — all in one place."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {homepageServices.map(
          ({ title, description, icon: Icon, to, cta }, index) => (
            <Reveal key={title} delay={index * 70} className="h-full">
              <Link to={to} className="card-base group flex h-full flex-col p-6">
                <span className="mb-4 grid size-12 place-items-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon aria-hidden="true" className="size-6" />
                </span>
                <h3 className="text-lg font-semibold text-heading">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {description}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-brand">
                  {cta}
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </Reveal>
          ),
        )}
      </div>
    </section>
  );
}
