import { useEffect, useRef, useState } from "react";

/**
 * Scroll-reveal state: returns a ref, a class name and a transition delay.
 * The element fades/slides into view the first time it intersects the
 * viewport. Content is shown immediately when motion is reduced or
 * IntersectionObserver is unavailable.
 */
export function useReveal<T extends HTMLElement>(delay = 0) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    // Reduced-motion users already see content: CSS only hides .reveal when
    // motion is allowed, so no observer (and no state change) is needed.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      const timeout = window.setTimeout(() => setVisible(true), 0);
      return () => window.clearTimeout(timeout);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return {
    ref,
    className: visible ? "reveal is-visible" : "reveal",
    style: { transitionDelay: `${delay}ms` },
  };
}
