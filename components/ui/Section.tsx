import type { ReactNode } from "react";

export function Section({
  children,
  id,
  tone = "plain",
  narrow = false,
}: {
  children: ReactNode;
  id?: string;
  tone?: "plain" | "soft" | "brand";
  narrow?: boolean;
}) {
  const toneClass =
    tone === "soft"
      ? "bg-brand-soft"
      : tone === "brand"
        ? "bg-brand-dark text-white"
        : "bg-transparent";

  return (
    <section id={id} className={`${toneClass} py-14 sm:py-20`}>
      <div className={narrow ? "wrap-narrow" : "wrap"}>{children}</div>
    </section>
  );
}
