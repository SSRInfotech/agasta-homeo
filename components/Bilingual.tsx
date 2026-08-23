import type { ElementType } from "react";
import type { Bi } from "@/content/site";

type Props = Bi & {
  as?: ElementType;
  className?: string;
  hiClassName?: string;
  enClassName?: string;
};

/**
 * Hindi first, English second — AGASTA_FOUNDATION_DOC.md §0.
 * One URL per page, both languages on it. Every string lives in content/*.ts
 * as { hi, en }, so moving to a locale router later is mechanical.
 */
export function Bilingual({ hi, en, as: Tag = "p", className = "", hiClassName = "", enClassName = "" }: Props) {
  return (
    <Tag className={className}>
      <span lang="hi" className={`block ${hiClassName}`}>
        {hi}
      </span>
      <span lang="en" className={`mt-1.5 block text-[0.86em] text-ink-muted ${enClassName}`}>
        {en}
      </span>
    </Tag>
  );
}
