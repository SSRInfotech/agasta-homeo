import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_Devanagari } from "next/font/google";
import { EmergencyStrip } from "@/components/EmergencyStrip";
import { Header } from "@/components/Header";
import { Disclaimer } from "@/components/Disclaimer";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-devanagari",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brand.en} | Homoeopathic hospitals in Bihar | Kangson Wellness`,
    template: `%s | ${site.brand.en}`,
  },
  description:
    "बिहार में होम्योपैथिक अस्पताल बनाने और चलाने वाली कंपनी। Agasta Homeo builds and runs homoeopathic OPD and inpatient hospitals in Bihar, and employs registered BHMS / MD (Hom) doctors on payroll. A unit of Kangson Wellness Pvt Ltd.",
  openGraph: {
    type: "website",
    locale: "hi_IN",
    alternateLocale: "en_IN",
    siteName: site.brand.en,
    url: site.url,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0e4d3a",
};

/**
 * Organization only. A MedicalClinic / LocalBusiness node needs a real address
 * and hours — schema with an address that does not exist is worse than none.
 */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.brand.en,
  alternateName: site.brand.hi,
  url: site.url,
  parentOrganization: { "@type": "Organization", name: site.brand.legalEntity },
  description: site.brand.descriptor.en,
  areaServed: { "@type": "State", name: "Bihar, India" },
  email: site.email.care,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi" className={`${inter.variable} ${devanagari.variable}`}>
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-3 focus:rounded focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
        >
          मुख्य सामग्री पर जाएँ
        </a>
        <EmergencyStrip />
        <Header />
        <main id="main">{children}</main>
        <Disclaimer />
        <Footer />
      </body>
    </html>
  );
}
