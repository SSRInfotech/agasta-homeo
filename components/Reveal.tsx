"use client";

import { useEffect, useRef } from "react";

/**
 * Fades content up into place the first time it scrolls into view.
 *
 * Deliberately conservative: one shot per element (no re-triggering on
 * scroll up/down — that reads as a distracting loop, not a professional
 * one), and content is fully visible by default in the CSS (globals.css
 * `.reveal`) so nothing depends on this component actually mounting or
 * IntersectionObserver existing. See the motion-system comment in
 * globals.css for why that matters for this audience.
 */
export function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.classList.add("reveal-ready");

    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
