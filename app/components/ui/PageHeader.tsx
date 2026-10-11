import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

type PageHeaderProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  breadcrumbs: Crumb[];
};

/**
 * Shared dark page hero for interior routes: breadcrumbs, heading and
 * optional intro copy on the brand gradient.
 */
export function PageHeader({
  title,
  description,
  eyebrow,
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <section className="gradient-bg hero-grid border-b border-white/5">
      <div className="container-page section-y !py-14 sm:!py-16">
        <Reveal>
          <Breadcrumbs items={breadcrumbs} />
        </Reveal>
        <SectionHeading
          as="h1"
          tone="dark"
          eyebrow={eyebrow}
          title={title}
          description={description}
          revealDelay={120}
          className="mt-6"
        />
      </div>
    </section>
  );
}
