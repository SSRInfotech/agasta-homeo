"use client";

import { useEffect, useRef, useState } from "react";

const NUM_RE = /\d[\d,]*\.?\d*/g;

/** Picks the most significant numeric run in a mixed string like "1 : 2,148"
 *  or "12.49 करोड़" — the one with the most digits, not just the first. */
function pickTarget(value: string) {
  const matches = [...value.matchAll(NUM_RE)];
  if (!matches.length) return null;
  let best = matches[0];
  let bestDigits = best[0].replace(/\D/g, "").length;
  for (const m of matches.slice(1)) {
    const digits = m[0].replace(/\D/g, "").length;
    if (digits > bestDigits) {
      best = m;
      bestDigits = digits;
    }
  }
  return best;
}

/**
 * Counts a stat up to its final value once scrolled into view. Renders the
 * final string on first paint (server and client match, no hydration
 * flash) and only starts animating after mount confirms it can observe —
 * same contract as components/Reveal.tsx. Values this can't parse a number
 * out of, and reduced-motion visitors, simply keep the static string.
 */
export function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const match = pickTarget(value);
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (!match || match.index === undefined || reduceMotion || typeof IntersectionObserver === "undefined") {
      return;
    }

    const raw = match[0];
    const hasComma = raw.includes(",");
    const decimals = raw.includes(".") ? raw.split(".")[1].length : 0;
    const target = Number(raw.replace(/,/g, ""));
    const prefix = value.slice(0, match.index);
    const suffix = value.slice(match.index + raw.length);

    const format = (n: number) => {
      const fixed = n.toFixed(decimals);
      if (!hasComma) return fixed;
      const [intPart, decPart] = fixed.split(".");
      const grouped = Number(intPart).toLocaleString("en-IN");
      return decPart ? `${grouped}.${decPart}` : grouped;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        observer.disconnect();

        const duration = 1100;
        const start = performance.now();

        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(`${prefix}${format(target * eased)}${suffix}`);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{display}</span>;
}
