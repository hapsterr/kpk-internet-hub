import type { ReactNode } from "react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

type CtaBannerProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

/**
 * Shared closing call-to-action band on the brand gradient.
 */
export function CtaBanner({ title, description, children }: CtaBannerProps) {
  return (
    <section className="gradient-bg">
      <div className="container-page section-y text-center">
        <SectionHeading
          as="h2"
          tone="dark"
          align="center"
          title={title}
          description={description}
        />
        <Reveal delay={150}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {children}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
