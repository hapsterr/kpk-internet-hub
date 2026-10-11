import { ArrowRight, ClipboardList } from "lucide-react";
import { Button } from "~/components/ui/Button";
import { SectionHeading } from "~/components/ui/SectionHeading";
import { Reveal } from "~/components/ui/Reveal";

export function ApplicationsSection() {
  return (
    <section className="container-page section-y">
      <div className="card-base grid items-center gap-10 overflow-hidden p-8 sm:p-10 lg:grid-cols-[auto_1fr] lg:p-12">
        <span
          aria-hidden="true"
          className="grid size-20 place-items-center rounded-2xl bg-brand/10 text-brand"
        >
          <ClipboardList className="size-10" />
        </span>
        <div>
          <SectionHeading
            title="Need Help With an Application?"
            description="Whether it is a job, bursary, school, university, internship or learnership application, KPK Internet Hub helps you navigate the online process with confidence."
          />
          <Reveal delay={150}>
            <div className="mt-6">
              <Button to="/services/applications" variant="primary">
                View Application Services
                <ArrowRight aria-hidden="true" className="size-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
