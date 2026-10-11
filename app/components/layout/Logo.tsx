import { business } from "~/config/business";

const LOGO_SRC = "/images/logo/KPKLogo-transparent.png";
const LOGO_WIDTH = 512;
const LOGO_HEIGHT = 235;

/**
 * Official KPK wordmark on a transparent background, so the dark header and
 * footer colour runs straight into the artwork with no visible plate.
 */
export function Logo({
  className = "h-10",
  loading = "eager",
}: {
  className?: string;
  loading?: "eager" | "lazy";
}) {
  return (
    <img
      src={LOGO_SRC}
      alt={business.name}
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      loading={loading}
      decoding="async"
      className={`w-auto shrink-0 ${className}`}
    />
  );
}
