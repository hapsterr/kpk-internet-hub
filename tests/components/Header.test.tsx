import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "~/components/layout/Header";
import { Footer } from "~/components/layout/Footer";
import { renderWithRouter } from "../helpers";
import { hasWhatsApp } from "~/config/business";

describe("Header", () => {
  it("renders the brand and primary navigation links", () => {
    renderWithRouter(<Header />);
    expect(
      screen.getByRole("link", { name: /kpk internet hub home/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: /primary/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Services" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Products" })).toBeInTheDocument();
  });

  it("toggles the mobile menu open and closed", async () => {
    const user = userEvent.setup();
    renderWithRouter(<Header />);

    const toggle = screen.getByRole("button", { name: /open menu/i });
    expect(toggle).toHaveAttribute("aria-expanded", "false");

    await user.click(toggle);
    expect(screen.getByRole("navigation", { name: /mobile/i })).toBeVisible();
    expect(
      screen.getByRole("button", { name: /close menu/i }),
    ).toHaveAttribute("aria-expanded", "true");

    await user.click(screen.getByRole("button", { name: /close menu/i }));
    expect(
      screen.queryByRole("navigation", { name: /mobile/i, hidden: true }),
    ).not.toBeVisible();
  });

  it("shows the WhatsApp contact CTA", () => {
    if (!hasWhatsApp) {
      return; // unconfigured — CTA is expected to hide (covered by e2e)
    }
    renderWithRouter(<Header />);
    const cta = screen.getByRole("link", { name: /chat on whatsapp/i });
    expect(cta.getAttribute("href")).toContain("wa.me");
  });
});

describe("Footer", () => {
  it("renders navigation and a privacy policy link", () => {
    renderWithRouter(<Footer />);
    expect(screen.getByRole("navigation", { name: /footer/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Privacy Policy" })).toBeInTheDocument();
  });

  it("shows the confirmed phone number and email address", () => {
    renderWithRouter(<Footer />);
    expect(
      screen.getByRole("link", { name: /0670749646/i }),
    ).toHaveAttribute("href", "tel:0670749646");
    expect(
      screen.getByRole("link", { name: /info@kpkinternethub\.co\.za/i }),
    ).toHaveAttribute("href", "mailto:info@kpkinternethub.co.za");
  });

  it("never prints placeholder or foreign contact details", () => {
    renderWithRouter(<Footer />);
    expect(screen.queryByText(/@gmail\.com/i)).not.toBeInTheDocument();
    expect(
      screen.queryByText(/contact details will be published here/i),
    ).not.toBeInTheDocument();
  });
});
