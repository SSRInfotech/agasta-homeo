import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stat } from "@/components/ui/Stat";
import { cag, campaign, intro, nfhs, orsCallout, talent } from "@/content/bihar";

export const metadata: Metadata = {
  title: "बिहार क्यों | Why Bihar",
  description:
    "बिहार के स्वास्थ्य आँकड़े — NFHS-5 और CAG के स्रोतों के साथ — और अगस्ता होमियो का जागरूकता अभियान।",
};

export default function BiharPage() {
  return (
    <>
      <Section>
        <SectionHeading level={1} eyebrow="Why Bihar" hi={intro.title.hi} en={intro.title.en} />
        <p lang="hi" className="max-w-3xl text-xl text-ink-soft">
          {intro.lede.hi}
        </p>
        <p lang="en" className="mt-3 max-w-3xl text-ink-muted">
          {intro.lede.en}
        </p>
      </Section>

      <Section tone="soft">
        <SectionHeading
          eyebrow="NFHS-5"
          hi="स्वास्थ्य साक्षरता क्यों ज़रूरी है"
          en="Why health literacy matters here"
        />
        <div className="overflow-x-auto rounded-xl border border-brand-line bg-surface">
          <table className="w-full min-w-[46rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-line bg-brand-soft">
                <th scope="col" className="p-4 font-semibold text-brand-dark">आँकड़ा</th>
                <th scope="col" className="p-4 font-semibold text-brand-dark">संकेतक / Indicator</th>
                <th scope="col" className="p-4 font-semibold text-brand-dark">यह हमारी साइट पर क्यों है</th>
              </tr>
            </thead>
            <tbody>
              {nfhs.rows.map((row) => (
                <tr key={row.label.en} className="border-b border-line align-top last:border-0">
                  <td className="p-4 text-xl font-semibold whitespace-nowrap text-brand">{row.value}</td>
                  <td className="p-4">
                    <span lang="hi" className="block text-ink">{row.label.hi}</span>
                    <span lang="en" className="mt-1 block text-xs text-ink-muted">{row.label.en}</span>
                  </td>
                  <td className="p-4">
                    <span lang="hi" className="block text-ink-soft">{row.why.hi}</span>
                    <span lang="en" className="mt-1 block text-xs text-ink-muted">{row.why.en}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p lang="hi" className="mt-4 text-xs text-ink-muted">{nfhs.sourceNote.hi}</p>
        <p lang="en" className="text-xs text-ink-muted">{nfhs.sourceNote.en}</p>

        <div className="mt-10 rounded-xl border-2 border-alert/30 bg-alert-soft p-6">
          <p lang="hi" className="text-lg font-semibold text-alert">{orsCallout.hi}</p>
          <p lang="en" className="mt-2 text-sm text-alert/80">{orsCallout.en}</p>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="CAG 2024"
          hi="और अस्पताल क्यों चाहिए"
          en="Why more hospitals are needed"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cag.rows.map((row) => (
            <Stat key={row.value} value={row.value} label={row.label} />
          ))}
        </div>
        <p lang="hi" className="mt-6 text-xs text-ink-muted">{cag.sourceNote.hi}</p>
        <p lang="en" className="text-xs text-ink-muted">{cag.sourceNote.en}</p>
      </Section>

      <Section tone="soft">
        <SectionHeading eyebrow="Talent" hi={talent.title.hi} en={talent.title.en} />
        <div className="grid gap-4 md:grid-cols-3">
          {talent.rows.map((row) => (
            <Stat key={row.value} value={row.value} label={row.label} source={row.source} />
          ))}
        </div>
        <p lang="hi" className="mt-8 max-w-3xl text-lg text-ink-soft">{talent.note.hi}</p>
        <p lang="en" className="mt-2 max-w-3xl text-ink-muted">{talent.note.en}</p>
      </Section>

      <Section>
        <SectionHeading eyebrow="Our campaign" hi={campaign.title.hi} en={campaign.title.en} />
        <ul className="grid gap-3 md:grid-cols-2">
          {campaign.items.map((item) => (
            <li key={item.en} className="rounded-lg border border-line bg-surface p-4">
              <span lang="hi" className="block text-ink">{item.hi}</span>
              <span lang="en" className="mt-1 block text-sm text-ink-muted">{item.en}</span>
            </li>
          ))}
        </ul>
        <p lang="hi" className="mt-8 max-w-3xl border-l-4 border-brand-line pl-4 font-medium text-brand-dark">
          {campaign.measure.hi}
        </p>
        <p lang="en" className="mt-1 max-w-3xl border-l-4 border-brand-line pl-4 text-sm text-ink-muted">
          {campaign.measure.en}
        </p>
      </Section>
    </>
  );
}
