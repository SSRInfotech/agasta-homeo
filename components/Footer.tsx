import Link from "next/link";
import { BrandMark } from "./BrandMark";
import { nav, pharmacyLine, site } from "@/content/site";

const showIfReal = (v: string) => (v.startsWith("TODO_") ? null : v);

export function Footer() {
  const cin = showIfReal(site.registration.cin);
  const gst = showIfReal(site.registration.gst);

  return (
    <footer className="bg-brand-dark text-white">
      <div className="wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <BrandMark invert />
          <p lang="hi" className="mt-4 max-w-sm text-sm text-brand-line">
            {site.brand.parentLine.hi}
          </p>
          <p lang="en" className="text-sm text-white/50">
            {site.brand.parentLine.en}
          </p>
          <p lang="hi" className="mt-5 max-w-sm text-sm text-brand-line">
            {pharmacyLine.hi}
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="mb-3 text-xs font-semibold tracking-[0.14em] text-white/50 uppercase">
            Pages
          </h2>
          <ul className="space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-brand-line hover:text-white" lang="hi">
                  {item.hi}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy" className="text-brand-line hover:text-white" lang="hi">
                निजता नीति
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="mb-3 text-xs font-semibold tracking-[0.14em] text-white/50 uppercase">
            Contact
          </h2>
          <ul className="space-y-2 text-sm text-brand-line">
            <li>
              <a href={`mailto:${site.email.care}`} className="hover:text-white">
                {site.email.care}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email.careers}`} className="hover:text-white">
                {site.email.careers}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email.grievance}`} className="hover:text-white">
                {site.email.grievance}
              </a>
              <span className="block text-xs text-white/40">Grievance officer</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-2 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.brand.legalEntity}
            {cin ? ` · CIN ${cin}` : ""}
            {gst ? ` · GST ${gst}` : ""}
          </p>
          <p>
            <span lang="hi">आपात स्थिति में {site.emergencyNumber}</span> · Emergency{" "}
            {site.emergencyNumber}
          </p>
        </div>
      </div>
    </footer>
  );
}
