import { emergencyLine, site } from "@/content/site";
import { LanguageToggle } from "./LanguageToggle";

/**
 * Sitewide, above everything. AGASTA_FOUNDATION_DOC.md §8 requires an
 * emergency line on every page; putting it first is the honest placement.
 *
 * This is also literally the top-right of every page, so the language
 * toggle lives here rather than competing for space in the header row.
 */
export function EmergencyStrip() {
  return (
    <div className="bg-alert-soft text-alert">
      <div className="wrap flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-2 text-sm">
        <div className="flex flex-1 flex-wrap items-center justify-center gap-x-2 gap-y-0.5 text-center sm:justify-start sm:text-left">
          <span lang="hi">{emergencyLine.hi}</span>
          <span lang="en" className="emergency-strip-en hidden opacity-80 sm:inline">
            {emergencyLine.en}
          </span>
          <a
            href={`tel:${site.emergencyNumber}`}
            className="emergency-pulse rounded font-semibold underline underline-offset-2"
          >
            {site.emergencyNumber}
          </a>
        </div>

        <LanguageToggle />
      </div>
    </div>
  );
}
