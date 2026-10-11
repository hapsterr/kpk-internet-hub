import {
  ArrowRight,
  Compass,
  DraftingCompass,
  FolderKanban,
  Hammer,
  Rocket,
  Wand2,
} from "lucide-react";
import type { Route } from "./+types/website-development";
import { PageHeader } from "~/components/ui/PageHeader";
import { SectionHeading } from "~/components/ui/SectionHeading";
import { FaqAccordion } from "~/components/ui/FaqAccordion";
import { CtaBanner } from "~/components/ui/CtaBanner";
import { Button } from "~/components/ui/Button";
import { WhatsAppButton } from "~/components/ui/WhatsAppButton";
import { portfolioProjects } from "~/data/portfolio";
import { websiteFaqs } from "~/data/faqs";
import { hasWhatsApp } from "~/config/business";
import { seoMeta } from "~/utils/seo";

export const meta: Route.MetaFunction = () =>
  seoMeta({
    title: "Website Design & Development for Your Business",
    description:
      "Professional website design, development and management for small businesses, portfolios and landing pages from KPK Internet Hub.",
    path: "/website-development",
  });

const websiteTypes = [
  {
    icon: FolderKanban,
    title: "Small Business Websites",
    description:
      "Professional multi-page websites that present your services, story and contact details.",
  },
  {
    icon: Wand2,
    title: "Portfolio Websites",
    description:
      "Clean personal websites that showcase your work and skills to potential clients or employers.",
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    description:
      "Focused single-page websites designed around one goal — an offer, event or campaign.",
  },
  {
    icon: DraftingCompass,
    title: "Website Redesigns",
    description:
      "Modernise an existing website with clearer structure, better mobile behaviour and a refreshed look.",
  },
  {
    icon: Hammer,
    title: "Maintenance & Management",
    description:
      "Ongoing website updates and management so your site stays current after launch.",
  },
];

const steps = [
  {
    icon: Compass,
    title: "Tell Us About Your Business",
    description: "An initial consultation to understand your goals and needs.",
  },
  {
    icon: DraftingCompass,
    title: "Planning & Design",
    description: "We agree on the structure and visual direction together.",
  },
  {
    icon: Hammer,
    title: "Development",
    description: "The agreed website is built and reviewed with you.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Your website goes live with agreed post-launch assistance.",
  },
];

export default function WebsiteDevelopment() {
  return (
    <>
      <PageHeader
        eyebrow="Website development"
        title="Your Business Deserves a Professional Website."
        description="Establish a modern online presence with website design, development and management services from KPK Internet Hub."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Website Development" }]}
      />

      <section className="container-page section-y">
        <SectionHeading
          align="center"
          title="Websites We Can Build"
          description="Every project starts with a conversation about your business and your customers."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {websiteTypes.map(({ icon: Icon, title, description }) => (
            <div key={title} className="card-base p-6">
              <span className="mb-4 grid size-12 place-items-center rounded-xl bg-brand/10 text-brand">
                <Icon aria-hidden="true" className="size-6" />
              </span>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-page section-y">
          <SectionHeading
            align="center"
            title="How It Works"
            description="A straightforward process from first conversation to launch."
          />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, title, description }, index) => (
              <li key={title} className="card-base relative p-6">
                <span className="absolute right-5 top-5 font-display text-3xl font-bold text-brand/10">
                  {index + 1}
                </span>
                <span className="mb-4 grid size-12 place-items-center rounded-xl bg-brand/10 text-brand">
                  <Icon aria-hidden="true" className="size-6" />
                </span>
                <h3 className="text-base font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-page section-y">
        <SectionHeading
          align="center"
          title="Portfolio Showcase"
          description="A selection of delivered projects will appear here as they are completed and approved."
        />
        {portfolioProjects.length > 0 ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioProjects.map((project) => (
              <article key={project.slug} className="card-base p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                  {project.type}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <div className="card-base mx-auto mt-10 max-w-2xl p-8 text-center">
            <p className="text-sm leading-relaxed text-slate-600">
              Our portfolio is growing. Completed projects will be showcased
              here once approved. In the meantime, contact us to discuss what we
              can build for you — this very website was designed and developed
              in-house.
            </p>
            <div className="mt-6">
              <Button to="/contact" variant="outline">
                Get in Touch
                <ArrowRight aria-hidden="true" className="size-4" />
              </Button>
            </div>
          </div>
        )}
      </section>

      <section className="bg-surface">
        <div className="container-page section-y">
          <SectionHeading
            align="center"
            title="Website FAQ"
            description="Common questions about website projects."
          />
          <div className="mx-auto mt-10 max-w-2xl">
            <FaqAccordion faqs={websiteFaqs} />
          </div>
        </div>
      </section>

      <CtaBanner
        title="Have a Website Project in Mind?"
        description="Tell us a little about your business and what you need — we will take it from there."
      >
        {hasWhatsApp ? (
          <WhatsAppButton message="Hi KPK Internet Hub, I'm interested in website development for my business and would like to discuss my project.">
            Request a Quote
          </WhatsAppButton>
        ) : null}
        <Button to="/contact" variant="ghost-dark">
          Contact Us
        </Button>
      </CtaBanner>
    </>
  );
}
