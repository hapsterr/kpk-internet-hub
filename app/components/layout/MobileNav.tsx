import { NavLink } from "react-router";
import { navLinks } from "~/config/navigation";
import { business, hasPhone, hasWhatsApp } from "~/config/business";
import { buildWhatsAppUrl } from "~/utils/whatsapp";

type MobileNavProps = {
  id: string;
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ id, open, onClose }: MobileNavProps) {
  const whatsappUrl = hasWhatsApp
    ? buildWhatsAppUrl("Hi KPK Internet Hub, I'd like to enquire about your services.")
    : null;

  return (
    <div
      id={id}
      hidden={!open}
      className="border-t border-white/10 bg-ink lg:hidden"
    >
      <nav aria-label="Mobile">
        <ul className="container-page flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                onClick={onClose}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          {whatsappUrl && (
            <li className="mt-2">
              <a
                href={whatsappUrl}
                className="btn-primary block w-full"
                onClick={onClose}
              >
                Chat on WhatsApp
              </a>
            </li>
          )}
          {!whatsappUrl && hasPhone && business.phone && (
            <li className="mt-2">
              <a
                href={`tel:${business.phone.replace(/\s/g, "")}`}
                className="btn-primary block w-full"
                onClick={onClose}
              >
                Call Us
              </a>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
