import { emergencyLine, site } from "@/content/site";

/**
 * Sitewide, above everything. AGASTA_FOUNDATION_DOC.md §8 requires an
 * emergency line on every page; putting it first is the honest placement.
 */
export function EmergencyStrip() {
  return (
    <div className="bg-alert-soft text-alert">
      <div className="wrap flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 py-2 text-center text-sm">
        <span lang="hi">{emergencyLine.hi}</span>
        <span lang="en" className="hidden opacity-80 sm:inline">
          {emergencyLine.en}
        </span>
        <a
          href={`tel:${site.emergencyNumber}`}
          className="font-semibold underline underline-offset-2"
        >
          {site.emergencyNumber}
        </a>
      </div>
    </div>
  );
}
