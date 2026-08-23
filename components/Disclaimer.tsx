import { disclaimer } from "@/content/site";

/** §9.3 — on every page. */
export function Disclaimer() {
  return (
    <aside className="border-t border-line bg-brand-soft/50">
      <div className="wrap py-10">
        <h2 className="mb-3 text-sm font-semibold text-brand">
          <span lang="hi">अस्वीकरण</span> <span lang="en" className="text-ink-muted">/ Disclaimer</span>
        </h2>
        <p lang="hi" className="max-w-4xl text-[0.95rem] leading-relaxed text-ink-soft">
          {disclaimer.hi}
        </p>
        <p lang="en" className="mt-3 max-w-4xl text-sm leading-relaxed text-ink-muted">
          {disclaimer.en}
        </p>
      </div>
    </aside>
  );
}
