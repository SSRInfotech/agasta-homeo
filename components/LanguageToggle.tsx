"use client";

import { useEffect, useState } from "react";
import { LANG_STORAGE_KEY, type SiteLang } from "@/lib/language";

function apply(lang: SiteLang) {
  const root = document.documentElement;
  if (lang === "en") {
    root.dataset.lang = "en";
    root.lang = "en";
  } else {
    delete root.dataset.lang;
    root.lang = "hi";
  }
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
    document.cookie = `${LANG_STORAGE_KEY}=${lang}; path=/; max-age=31536000; SameSite=Lax`;
  } catch {
    // Private browsing / storage disabled — the toggle still works for this
    // page view via the DOM attribute, it just won't persist. Fine either way.
  }
}

/**
 * Top-right language preference. Site content already carries both
 * languages in the DOM (content/*.ts `Bi` pairs) — this only flips which
 * one is visible, via the CSS rules in globals.css. No re-render, no
 * route change, no page reload.
 *
 * The active pill is synced from `document.documentElement` after mount
 * (set beforehand by the no-flash script in app/layout.tsx) rather than
 * from React state initialised at render time, so server and client markup
 * match on first paint and there is no hydration warning.
 */
export function LanguageToggle() {
  const [active, setActive] = useState<SiteLang>("hi");

  useEffect(() => {
    setActive(document.documentElement.dataset.lang === "en" ? "en" : "hi");
  }, []);

  function select(lang: SiteLang) {
    apply(lang);
    setActive(lang);
  }

  const base = "rounded-md px-2.5 py-1 text-xs font-semibold transition-colors";
  const on = "bg-alert text-white";
  const off = "text-alert/70 hover:text-alert";

  return (
    <div
      role="group"
      aria-label="भाषा चुनें / Choose language"
      className="inline-flex shrink-0 items-center gap-0.5 rounded-lg border border-alert/25 bg-white/60 p-0.5"
    >
      <button
        type="button"
        onClick={() => select("hi")}
        aria-pressed={active === "hi"}
        className={`${base} ${active === "hi" ? on : off}`}
      >
        हिंदी
      </button>
      <button
        type="button"
        onClick={() => select("en")}
        aria-pressed={active === "en"}
        className={`${base} ${active === "en" ? on : off}`}
      >
        English
      </button>
    </div>
  );
}
