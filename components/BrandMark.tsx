import { site } from "@/content/site";

/**
 * Typographic mark only. No stock chakras, no glowing hands, no gold foil —
 * AGASTA_FOUNDATION_DOC.md §10.
 */
export function BrandMark({ invert = false }: { invert?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3">
      <span
        aria-hidden
        className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg text-xl font-semibold ${
          invert ? "bg-white text-brand-dark" : "bg-brand text-white"
        }`}
      >
        अ
      </span>
      <span className="leading-tight">
        <span lang="hi" className={`block text-lg font-semibold ${invert ? "text-white" : "text-brand-dark"}`}>
          {site.brand.hi}
        </span>
        <span
          lang="en"
          className={`block text-[0.68rem] font-medium tracking-[0.16em] uppercase ${
            invert ? "text-brand-line" : "text-ink-muted"
          }`}
        >
          {site.brand.en}
        </span>
      </span>
    </span>
  );
}
