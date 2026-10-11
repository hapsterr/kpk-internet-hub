import type { ReactNode } from "react";
import { useReveal } from "~/hooks/useReveal";

type SectionHeadingProps = {
  title: string;
  description?: ReactNode;
  eyebrow?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  as?: "h1" | "h2";
  className?: string;
  revealDelay?: number;
};

export function SectionHeading({
  title,
  description,
  eyebrow,
  align = "left",
  tone = "light",
  as = "h2",
  className = "",
  revealDelay = 0,
}: SectionHeadingProps) {
  const Heading = as;
  const isDark = tone === "dark";
  const alignment = align === "center" ? "mx-auto text-center" : "";
  const { ref, className: revealClass, style } = useReveal<HTMLDivElement>(
    revealDelay,
  );

  return (
    <div
      ref={ref}
      style={style}
      className={`max-w-2xl ${alignment} ${revealClass} ${className}`}
    >
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] ${
            isDark ? "text-accent" : "text-brand"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <Heading
        className={`text-3xl font-bold tracking-tight sm:text-4xl ${
          isDark ? "text-white" : "text-heading"
        }`}
      >
        {title}
      </Heading>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
