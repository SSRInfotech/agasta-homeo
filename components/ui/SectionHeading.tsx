import type { Bi } from "@/content/site";

export function SectionHeading({
  hi,
  en,
  eyebrow,
  level = 2,
  invert = false,
}: Bi & { eyebrow?: string; level?: 1 | 2 | 3; invert?: boolean }) {
  const Tag = (["h1", "h2", "h3"] as const)[level - 1];
  return (
    <header className="mb-8 max-w-3xl">
      {eyebrow ? (
        <p className={`mb-3 text-sm font-semibold tracking-[0.14em] uppercase ${invert ? "text-brand-line" : "text-brand-mid"}`}>
          {eyebrow}
        </p>
      ) : null}
      <Tag
        lang="hi"
        className={`text-[1.75rem] leading-snug font-semibold sm:text-4xl ${invert ? "text-white" : ""}`}
      >
        {hi}
      </Tag>
      <p lang="en" className={`mt-2 text-lg ${invert ? "text-brand-line" : "text-ink-muted"}`}>
        {en}
      </p>
    </header>
  );
}
