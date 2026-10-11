import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import { navLinks } from "~/config/navigation";
import { business, hasPhone, hasWhatsApp } from "~/config/business";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { Button } from "~/components/ui/Button";
import { buildWhatsAppUrl } from "~/utils/whatsapp";

function getContactAction(): { href: string; label: string } | null {
  if (hasWhatsApp && business.whatsappNumber) {
    const url = buildWhatsAppUrl(
      "Hi KPK Internet Hub, I'd like to enquire about your services.",
      business.whatsappNumber,
    );
    if (url) {
      return { href: url, label: "Chat on WhatsApp" };
    }
  }
  if (hasPhone && business.phone) {
    return { href: `tel:${business.phone.replace(/\s/g, "")}`, label: "Call Us" };
  }
  return null;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const action = getContactAction();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-ink/95 backdrop-blur transition-[border-color,box-shadow] duration-300 ${
        scrolled
          ? "border-white/15 shadow-[0_12px_32px_-16px_rgb(0_0_0_/_0.6)]"
          : "border-white/10"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link
          to="/"
          aria-label="KPK Internet Hub home"
          className="shrink-0 rounded-lg"
        >
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `rounded-full px-3 py-2 text-sm font-medium transition-colors ${
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
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {action && (
            <Button
              href={action.href}
              variant="primary"
              className="hidden !px-5 !py-2.5 md:inline-flex"
            >
              {action.label}
            </Button>
          )}
          <button
            type="button"
            className="grid size-10 place-items-center rounded-lg text-slate-200 transition-colors hover:bg-white/10 hover:text-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <X aria-hidden="true" className="size-5" />
            ) : (
              <Menu aria-hidden="true" className="size-5" />
            )}
          </button>
        </div>
      </div>

      <MobileNav id="mobile-menu" open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
