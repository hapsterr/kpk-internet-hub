import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import { business } from "~/config/business";
import { Header } from "~/components/layout/Header";
import { Footer } from "~/components/layout/Footer";
import { FloatingWhatsApp } from "~/components/layout/FloatingWhatsApp";
import { Button } from "~/components/ui/Button";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,100..900&family=Space+Grotesk:wght@300..700&display=swap",
  },
  { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
];

/**
 * Structured data uses only verified business details. Local address,
 * phone and geo are added automatically once configured in business.ts.
 */
function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: business.name,
    slogan: business.tagline,
    description: business.description,
    ...(business.websiteUrl ? { url: business.websiteUrl } : {}),
  };
}

export const meta: Route.MetaFunction = () => [
  {
    title: `${business.name} | ${business.tagline}`,
  },
  { name: "description", content: business.description },
  { "script:ld+json": organizationSchema() },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-navy"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <section className="gradient-bg">
      <div className="container-page section-y text-center">
        <h1 className="text-5xl font-bold text-white">{message}</h1>
        <p className="mt-4 text-slate-300">{details}</p>
        <div className="mt-8">
          <Button to="/" variant="inverse">
            Back to Home
          </Button>
        </div>
        {stack && (
          <pre className="mt-8 w-full overflow-x-auto rounded-xl bg-black/40 p-4 text-left text-xs text-slate-300">
            <code>{stack}</code>
          </pre>
        )}
      </div>
    </section>
  );
}
