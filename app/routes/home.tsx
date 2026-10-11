import type { Route } from "./+types/home";
import { business } from "~/config/business";
import { seoMeta } from "~/utils/seo";
import { Hero } from "~/components/home/Hero";
import { ServicesOverview } from "~/components/home/ServicesOverview";
import { AboutSection } from "~/components/home/AboutSection";
import { ApplicationsSection } from "~/components/home/ApplicationsSection";
import { TechSection } from "~/components/home/TechSection";
import { WebsiteDevSection } from "~/components/home/WebsiteDevSection";
import { VisitSection } from "~/components/home/VisitSection";
import { FinalCta } from "~/components/home/FinalCta";

export const meta: Route.MetaFunction = () =>
  seoMeta({
    title: `${business.name} | Internet Café & Digital Services`,
    description:
      "KPK Internet Hub offers printing, photocopying, online application assistance, CV typing, flyer design, computer support, accessories and website development.",
    path: "/",
  });

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <AboutSection />
      <ApplicationsSection />
      <TechSection />
      <WebsiteDevSection />
      <VisitSection />
      <FinalCta />
    </>
  );
}
