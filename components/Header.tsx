import Link from "next/link";
import { BrandMark } from "./BrandMark";
import { nav } from "@/content/site";
import { buildWaLink } from "@/lib/whatsapp";

export function Header() {
  const wa = buildWaLink("नमस्ते, मुझे अगस्ता होमियो के बारे में जानकारी चाहिए।");

  return (
    <>
      {/*
        Only the brand row is sticky. On a 390px phone the nav strip would
        otherwise hold ~240px of viewport hostage on every scroll.
      */}
      <header className="sticky top-0 z-50 border-b border-line bg-surface/95 backdrop-blur">
        <div className="wrap flex items-center justify-between gap-4 py-3">
          <Link href="/" aria-label="Agasta Homeo — home">
            <BrandMark />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                lang="hi"
                className="rounded-md px-3 py-2 text-[0.95rem] font-medium text-ink-soft transition-colors hover:bg-brand-soft hover:text-brand-dark"
              >
                {item.hi}
              </Link>
            ))}
          </nav>

          {/* Visible on phones too — WhatsApp is the primary channel here. */}
          <a
            data-cta
            href={wa.href}
            {...(wa.ready ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            lang="hi"
            className="inline-flex shrink-0 items-center rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            व्हाट्सएप
          </a>
        </div>
      </header>

      {/* Scrolls away with the page. */}
      <nav
        aria-label="Main (mobile)"
        className="flex gap-1 overflow-x-auto border-b border-line bg-surface px-4 py-2 lg:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            lang="hi"
            className="shrink-0 rounded-md px-3 py-2 text-sm font-medium whitespace-nowrap text-ink-soft"
          >
            {item.hi}
          </Link>
        ))}
      </nav>
    </>
  );
}
