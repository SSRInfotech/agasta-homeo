import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export function Section({
  children,
  id,
  tone = "plain",
  narrow = false,
  reveal = true,
}: {
  children: ReactNode;
  id?: string;
  tone?: "plain" | "soft" | "brand";
  narrow?: boolean;
  /** Set false for content that must be instantly visible/interactive
   *  (nothing on this site needs that today, but the escape hatch matters
   *  more than the default). */
  reveal?: boolean;
}) {
  const toneClass =
    tone === "soft"
      ? "bg-brand-soft"
      : tone === "brand"
        ? "bg-brand-dark text-white"
        : "bg-transparent";

  const inner = reveal ? <Reveal>{children}</Reveal> : children;

  return (
    <section id={id} className={`${toneClass} py-14 sm:py-20`}>
      <div className={narrow ? "wrap-narrow" : "wrap"}>{inner}</div>
    </section>
  );
}
