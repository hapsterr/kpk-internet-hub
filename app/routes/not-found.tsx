import type { Route } from "./+types/not-found";
import { Button } from "~/components/ui/Button";
import { seoMeta } from "~/utils/seo";

export const meta: Route.MetaFunction = () =>
  seoMeta({
    title: "Page Not Found (404)",
    description: "The page you are looking for could not be found.",
    path: "/404",
  });

const quickLinks = [
  { label: "Services", to: "/services" },
  { label: "Tech Services", to: "/tech-services" },
  { label: "Products", to: "/products" },
  { label: "Website Development", to: "/website-development" },
  { label: "Contact", to: "/contact" },
];

export default function NotFound() {
  return (
    <section className="gradient-bg">
      <div className="container-page section-y text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          Error 404
        </p>
        <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-slate-300">
          The page you are looking for does not exist or may have been moved.
          Try one of the links below.
        </p>
        <ul className="mx-auto mt-8 flex flex-wrap justify-center gap-3">
          {quickLinks.map((link) => (
            <li key={link.to}>
              <Button to={link.to} variant="ghost-dark">
                {link.label}
              </Button>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Button to="/" variant="inverse">
            Back to Home
          </Button>
        </div>
      </div>
    </section>
  );
}
