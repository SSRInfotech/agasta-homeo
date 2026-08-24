import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import {
  IconArrowRight,
  IconCheckCircle,
  IconGraduationCap,
  IconHandHeart,
  IconMapPin,
  IconNetwork,
  IconScale,
  IconShieldCheck,
  IconTrendingUp,
  IconWallet,
  IconWrench,
} from "@/components/icons";
import { applyCta, evp, growthLadder, intro, offer } from "@/content/doctors";
import { site } from "@/content/site";

const evpIcons: Record<string, React.ReactNode> = {
  "Clinical dignity": <IconHandHeart />,
  "No forced sales": <IconShieldCheck />,
  "A salary date": <IconWallet />,
  "Registration respected": <IconScale />,
  CME: <IconGraduationCap />,
  "A referral network": <IconNetwork />,
  Tools: <IconWrench />,
  Growth: <IconTrendingUp />,
  "Location honesty": <IconMapPin />,
};

export const metadata: Metadata = {
  title: "BHMS jobs Bihar | चिकित्सकों के लिए",
  description:
    "अगस्ता होमियो में BHMS / MD (होम्यो) / DHMS चिकित्सकों के लिए पूर्णकालिक, अंशकालिक और विज़िटिंग भूमिकाएँ। तय रोस्टर, नियुक्ति पत्र, CME।",
};

const formReady = !site.doctorFormUrl.startsWith("TODO_");

export default function DoctorsPage() {
  return (
    <>
      <Section>
        <SectionHeading level={1} eyebrow="Careers" hi={intro.headline.hi} en={intro.headline.en} />
        <p lang="hi" className="max-w-3xl text-lg whitespace-pre-line text-ink-soft">
          {intro.lede.hi}
        </p>
        <p lang="en" className="mt-3 max-w-3xl whitespace-pre-line text-ink-muted">
          {intro.lede.en}
        </p>
      </Section>

      <Section tone="soft">
        <SectionHeading
          eyebrow="What we promise"
          hi="हम क्या वादा करते हैं — और सोमवार सुबह उसका मतलब क्या है"
          en="What we promise, and what it means on Monday morning"
        />
        <div className="overflow-x-auto rounded-xl border border-brand-line bg-surface">
          <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-line bg-brand-soft">
                <th scope="col" className="w-1/3 p-4 font-semibold text-brand-dark">वादा / Promise</th>
                <th scope="col" className="p-4 font-semibold text-brand-dark">
                  सोमवार सुबह इसका मतलब / What it means on Monday
                </th>
              </tr>
            </thead>
            <tbody>
              {evp.map((row) => (
                <tr key={row.promise.en} className="border-b border-line align-top last:border-0">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <span className="icon-badge h-9 w-9" aria-hidden>
                        {evpIcons[row.promise.en]}
                      </span>
                      <span>
                        <span lang="hi" className="block font-semibold text-ink">{row.promise.hi}</span>
                        <span lang="en" className="mt-1 block text-xs text-ink-muted">{row.promise.en}</span>
                      </span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span lang="hi" className="block text-ink-soft">{row.monday.hi}</span>
                    <span lang="en" className="mt-1 block text-xs text-ink-muted">{row.monday.en}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Growth ladder — §6.1's "Growth" table row, as a visual path. */}
      <Section tone="soft">
        <SectionHeading eyebrow="Growth" hi="आगे बढ़ने का रास्ता" en="A path, not a dead end" />
        <div className="flex flex-wrap items-center gap-3">
          {growthLadder.map((step, i) => (
            <div key={step.en} className="flex items-center gap-3">
              <div className="flex items-center gap-3 rounded-xl border border-brand-line bg-surface py-3 pr-5 pl-3">
                <span className="icon-badge sm" aria-hidden>
                  <IconTrendingUp />
                </span>
                <span>
                  <span lang="hi" className="block text-sm font-semibold text-brand-dark">{step.hi}</span>
                  <span lang="en" className="block text-xs text-ink-muted">{step.en}</span>
                </span>
              </div>
              {i < growthLadder.length - 1 ? (
                <IconArrowRight className="h-5 w-5 shrink-0 text-brand-line" aria-hidden />
              ) : null}
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="The offer" hi="क्या मिलेगा" en="What the role offers" />
        <ul className="stagger grid gap-3 md:grid-cols-2">
          {offer.map((item) => (
            <li key={item.en} className="flex gap-3 rounded-lg border border-line bg-surface p-4">
              <IconCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-mid" aria-hidden />
              <span>
                <span lang="hi" className="block text-ink">{item.hi}</span>
                <span lang="en" className="mt-1 block text-sm text-ink-muted">{item.en}</span>
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="brand">
        <SectionHeading invert eyebrow="Apply" hi={applyCta.title.hi} en={applyCta.title.en} />
        <p lang="hi" className="max-w-2xl text-lg text-white/90">
          {applyCta.body.hi}
        </p>
        <p lang="en" className="mt-3 max-w-2xl text-brand-line">
          {applyCta.body.en}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {formReady ? (
            <a
              data-cta
              href={site.doctorFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="i18n-swap inline-flex items-center justify-center rounded-lg bg-white px-6 py-3.5 text-base font-semibold text-brand-dark transition-colors hover:bg-brand-line"
            >
              <span lang="hi">{applyCta.button.hi}</span>
              <span lang="en">{applyCta.button.en}</span>
            </a>
          ) : (
            // Two sibling paragraphs, not one nested inside the other — a
            // [lang="hi"] wrapper hides all its children when English is
            // selected, which would have taken the English line down with it.
            <div className="rounded-lg border border-white/25 bg-white/10 px-5 py-4 text-sm">
              <p lang="hi" className="text-white">
                आवेदन फ़ॉर्म का लिंक जल्द यहाँ लगेगा। तब तक व्हाट्सएप पर संपर्क करें।
              </p>
              <p lang="en" className="text-brand-line">
                The application form link goes here shortly. Until then, reach us on WhatsApp.
              </p>
            </div>
          )}
        </div>

        <div className="mt-6">
          <WhatsAppCta text={applyCta.whatsappTemplate} compact />
        </div>
      </Section>
    </>
  );
}
