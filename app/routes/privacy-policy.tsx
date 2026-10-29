import type { Route } from "./+types/privacy-policy";
import { PageHeader } from "~/components/ui/PageHeader";
import { business } from "~/config/business";
import { seoMeta } from "~/utils/seo";

export const meta: Route.MetaFunction = () =>
  seoMeta({
    title: "Privacy Policy",
    description:
      "How KPK Internet Hub handles personal information, website data and WhatsApp enquiries in line with POPIA principles.",
    path: "/privacy-policy",
  });

const sections = [
  {
    heading: "Who we are",
    body: `${business.name} is a South African internet café and digital services business. This policy explains how we handle personal information when you interact with our website or contact us.`,
  },
  {
    heading: "Information we collect through this website",
    body: "This website does not have accounts, contact forms, online payments or document uploads. We do not ask you to submit ID numbers, CV documents, banking details, login credentials or application information through the website. If you choose to contact us through WhatsApp, phone or email, you share information directly with us through that channel, and we use it only to respond to your enquiry and provide the service you asked about.",
  },
  {
    heading: "Application assistance",
    body: "When we assist you with an online application, you handle your own accounts and personal information directly with the relevant institution. We never ask for your usernames or passwords, and we do not submit or store your application credentials through this website.",
  },
  {
    heading: "Cookies and analytics",
    body: "This website does not use advertising cookies or third-party tracking scripts. Standard technical data may be processed by our hosting provider (for example IP addresses in server logs) as part of delivering the website securely and reliably.",
  },
  {
    heading: "Sharing of information",
    body: "We do not sell personal information. Information you share with us through direct enquiries is used only for the purpose you intended, unless we are required by law to disclose it.",
  },
  {
    heading: "Your rights under POPIA",
    body: "You have the right to ask what personal information we hold about you, to request correction of inaccurate information, and to ask how your information has been used. To make a request, contact us using the details on our contact page.",
  },
  {
    heading: "Data security",
    body: "We take reasonable steps to protect personal information shared with us directly. Information sent through WhatsApp or other messaging platforms is governed by the security practices of those services as well as our own handling practices.",
  },
  {
    heading: "Third-party links",
    body: "Our website may link to external services such as WhatsApp or Google Maps. Those services have their own privacy policies, and we are not responsible for how they handle your information.",
  },
  {
    heading: "Changes to this policy",
    body: "We may update this policy from time to time to reflect changes in how the business operates. The latest version will always be published on this page.",
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="How KPK Internet Hub handles personal information and website data."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Privacy Policy" }]}
      />

      <section className="container-page section-y">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-10">
            {sections.map((section) => (
              <article key={section.heading}>
                <h2 className="text-xl font-semibold">{section.heading}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {section.body}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-12 text-xs text-muted">
            Last updated: {new Date().getFullYear()} — {business.name}.
          </p>
        </div>
      </section>
    </>
  );
}
