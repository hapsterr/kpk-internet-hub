import type { ReactNode } from "react";
import { useReveal } from "~/hooks/useReveal";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

/**
 * Wraps content in a one-shot fade-up when it scrolls into view.
 * Purely transform/opacity based, so it stays cheap on mobile.
 */
export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const { ref, className: revealClass, style } = useReveal<HTMLDivElement>(delay);

  return (
    <div ref={ref} className={`${revealClass} ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}
