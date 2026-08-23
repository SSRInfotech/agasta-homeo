import type { Bi } from "@/content/site";

/**
 * Every published figure carries its source. AGASTA_FOUNDATION_DOC.md:
 * "Do not paste a statistic onto the site unless you also keep its source."
 */
export function Stat({
  value,
  label,
  source,
  invert = false,
}: {
  value: string;
  label: Bi;
  source?: string;
  invert?: boolean;
}) {
  return (
    <figure
      className={`rounded-xl border p-5 ${
        invert ? "border-white/15 bg-white/5" : "border-line bg-surface"
      }`}
    >
      <div className={`text-3xl font-semibold sm:text-4xl ${invert ? "text-white" : "text-brand"}`}>
        {value}
      </div>
      <figcaption className="mt-3">
        <span lang="hi" className={`block text-base ${invert ? "text-white" : "text-ink"}`}>
          {label.hi}
        </span>
        <span lang="en" className={`mt-1 block text-sm ${invert ? "text-brand-line" : "text-ink-muted"}`}>
          {label.en}
        </span>
        {source ? (
          <span className={`mt-3 block text-xs ${invert ? "text-white/50" : "text-ink-muted/80"}`}>
            {source}
          </span>
        ) : null}
      </figcaption>
    </figure>
  );
}
