import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import axe from "axe-core";
import { MemoryRouter } from "react-router";
import { Header } from "~/components/layout/Header";
import { Footer } from "~/components/layout/Footer";

async function analyze(container: HTMLElement) {
  return await axe.run(container, {
    rules: {
      // color-contrast needs real rendering; covered by Lighthouse instead
      "color-contrast": { enabled: false },
    },
  });
}

describe("accessibility smoke checks", () => {
  it("header has no critical axe violations", async () => {
    const { container } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    const results = await analyze(container);
    expect(results.violations).toEqual([]);
  });

  it("footer has no critical axe violations", async () => {
    const { container } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
    const results = await analyze(container);
    expect(results.violations).toEqual([]);
  });
});
