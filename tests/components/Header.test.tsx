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

  it("hides the contact CTA while no contact number is configured", () => {
    if (hasWhatsApp) {
      return; // configured — CTA is expected to show (covered by e2e on staging)
    }
    renderWithRouter(<Header />);
    expect(
      screen.queryByRole("link", { name: /chat on whatsapp|call us/i }),
    ).not.toBeInTheDocument();
  });
});

describe("Footer", () => {
  it("renders navigation and a privacy policy link", () => {
    renderWithRouter(<Footer />);
    expect(screen.getByRole("navigation", { name: /footer/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Privacy Policy" })).toBeInTheDocument();
  });

  it("never prints an unconfigured contact detail", () => {
    renderWithRouter(<Footer />);
    expect(screen.queryByText(/\+27|0[0-9]{2}[\s-]?[0-9]{3}/)).not.toBeInTheDocument();
    expect(screen.queryByText(/@gmail\.com|@kpk/i)).not.toBeInTheDocument();
  });
});
