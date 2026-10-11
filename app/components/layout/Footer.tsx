import { Link } from "react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import {
  business,
  formatLocation,
  hasEmail,
  hasPhone,
  hasWhatsApp,
} from "~/config/business";
import { footerServiceLinks, footerUtilityLinks, navLinks } from "~/config/navigation";
import { Logo } from "./Logo";
import { buildWhatsAppUrl } from "~/utils/whatsapp";

const year = new Date().getFullYear();

function ContactLinks() {
  const whatsappUrl = hasWhatsApp
    ? buildWhatsAppUrl("Hi KPK Internet Hub, I'd like to enquire about your services.")
    : null;
  const location = formatLocation();

  return (
    <ul className="space-y-3 text-sm text-slate-400">
      {whatsappUrl && (
        <li>
          <a
            href={whatsappUrl}
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle aria-hidden="true" className="size-4 text-accent" />
            Chat on WhatsApp
          </a>
        </li>
      )}
      {hasPhone && business.phone && (
        <li>
          <a
            href={`tel:${business.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            <Phone aria-hidden="true" className="size-4 text-accent" />
            {business.phone}
          </a>
        </li>
      )}
      {hasEmail && business.email && (
        <li>
          <a
            href={`mailto:${business.email}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            <Mail aria-hidden="true" className="size-4 text-accent" />
            {business.email}
          </a>
        </li>
      )}
      {location && (
        <li className="inline-flex items-start gap-2">
          <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
          {location}
        </li>
      )}
      {!whatsappUrl && !hasPhone && !hasEmail && !location && (
        <li>
          <Link to="/contact" className="transition-colors hover:text-white">
            Contact details will be published here once confirmed.
          </Link>
        </li>
      )}
    </ul>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="container-page section-y !py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo className="h-12" loading="lazy" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              {business.description}
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              {footerServiceLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h2>
            <div className="mt-4">
              <ContactLinks />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>
            &copy; {year} {business.name}. All rights reserved.
          </p>
          <ul className="flex items-center gap-4">
            {footerUtilityLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
