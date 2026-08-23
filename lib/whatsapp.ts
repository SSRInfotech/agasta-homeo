import { site } from "@/content/site";

const isPlaceholder = (v: string) => v.startsWith("TODO_");

/**
 * Build a wa.me deep link with prefilled text. If the number has not been
 * configured yet, fall back to /contact rather than shipping a dead link.
 */
export function buildWaLink(text?: string): { href: string; ready: boolean } {
  if (isPlaceholder(site.whatsapp)) {
    return { href: "/contact", ready: false };
  }
  const base = `https://wa.me/${site.whatsapp}`;
  return {
    href: text ? `${base}?text=${encodeURIComponent(text)}` : base,
    ready: true,
  };
}

export function telLink(): { href: string; ready: boolean } {
  if (isPlaceholder(site.phone.tel)) return { href: "/contact", ready: false };
  return { href: `tel:${site.phone.tel}`, ready: true };
}
