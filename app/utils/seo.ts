import type { MetaDescriptor } from "react-router";
import { business } from "~/config/business";

export type SeoOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

function absoluteUrl(path: string): string | null {
  if (!business.websiteUrl) {
    return null;
  }
  const base = business.websiteUrl.replace(/\/+$/, "");
  const normalisedPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalisedPath}`;
}

/**
 * Build route meta descriptors. Canonical and Open Graph URLs are only
 * emitted once the production domain is configured, so preview deployments
 * never become the indexed canonical version.
 */
export function seoMeta({ title, description, path, image }: SeoOptions): MetaDescriptor[] {
  const url = absoluteUrl(path);
  const meta: MetaDescriptor[] = [{ title }, { name: "description", content: description }];

  if (!business.websiteUrl) {
    meta.push({ name: "robots", content: "noindex, nofollow" });
  }

  meta.push(
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: business.name },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  );

  if (url) {
    meta.push({ tagName: "link", rel: "canonical", href: url });
    meta.push({ property: "og:url", content: url });
  }

  if (image) {
    const imageUrl = absoluteUrl(image) ?? image;
    meta.push(
      { property: "og:image", content: imageUrl },
      { name: "twitter:image", content: imageUrl },
    );
  }

  return meta;
}
