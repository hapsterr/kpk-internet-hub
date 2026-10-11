import type { ReactNode } from "react";
import { Link } from "react-router";

export type ButtonVariant = "primary" | "outline" | "inverse" | "ghost-dark";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  outline:
    "border border-brand/30 bg-transparent text-brand hover:border-brand hover:bg-brand/5",
  inverse: "bg-white text-navy hover:bg-slate-100",
  "ghost-dark":
    "border border-white/25 bg-white/5 text-white hover:border-white/40 hover:bg-white/10",
};

type ButtonProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  ariaLabel?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200";

export function Button({
  children,
  to,
  href,
  variant = "primary",
  className = "",
  ariaLabel,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} aria-label={ariaLabel} onClick={onClick}>
      {children}
    </button>
  );
}
