import { buildWaLink, telLink } from "@/lib/whatsapp";
import { site } from "@/content/site";

export function WhatsAppCta({ text, compact = false }: { text?: string; compact?: boolean }) {
  const wa = buildWaLink(text);
  const tel = telLink();

  return (
    <div className={`flex flex-wrap gap-3 ${compact ? "" : "mt-6"}`}>
      <a
        data-cta
        href={wa.href}
        {...(wa.ready ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-dark"
      >
        <span lang="hi">व्हाट्सएप पर बात करें</span>
      </a>
      {tel.ready ? (
        <a
          data-cta
          href={tel.href}
          className="inline-flex items-center justify-center rounded-lg border-2 border-brand px-6 py-3.5 text-base font-semibold text-brand transition-colors hover:bg-brand-soft"
        >
          {site.phone.display}
        </a>
      ) : null}
    </div>
  );
}
