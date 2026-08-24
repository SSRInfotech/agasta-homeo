import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  IconFileText,
  IconFlask,
  IconHandHeart,
  IconHospital,
  IconLeaf,
  IconShieldCheck,
  IconStethoscope,
  IconWallet,
} from "@/components/icons";
import { builders, governance, intro, mission, operatingModel, umbrella } from "@/content/about";
import { site } from "@/content/site";

const verticalIcons: Record<string, React.ReactNode> = {
  "Agasta Homeo": <IconStethoscope />,
  Ayurveda: <IconLeaf />,
  Physiotherapy: <IconHandHeart />,
};

const operatingModelIcons = [<IconHospital key="0" />, <IconWallet key="1" />, <IconFlask key="2" />, <IconFileText key="3" />, <IconShieldCheck key="4" />];

export const metadata: Metadata = {
  title: "हमारे बारे में | About",
  description:
    "अगस्ता होमियो — बिहार में होम्योपैथिक अस्पताल बनाने और चलाने वाली कंपनी। हमारा उद्देश्य, संचालन मॉडल, ढाँचा और नैदानिक प्रशासन।",
};

export default function AboutPage() {
  return (
    <>
      <Section>
        <SectionHeading level={1} eyebrow="About" hi={intro.title.hi} en={intro.title.en} />
        <p lang="hi" className="max-w-3xl text-xl text-ink-soft">
          {intro.lede.hi}
        </p>
        <p lang="en" className="mt-3 max-w-3xl text-ink-muted">
          {intro.lede.en}
        </p>
      </Section>

      <Section tone="soft">
        <SectionHeading eyebrow="Structure" hi={umbrella.title.hi} en={umbrella.title.en} />
        <div className="rounded-xl border border-brand-line bg-surface p-6 sm:p-8">
          <p className="text-lg font-semibold text-brand-dark">{umbrella.parent}</p>
          <ul className="stagger mt-6 grid gap-3 sm:grid-cols-3">
            {umbrella.verticals.map((vertical) => (
              <li
                key={vertical.name.en}
                className={`rounded-lg border p-4 ${
                  vertical.live ? "border-brand bg-brand-soft" : "border-dashed border-line bg-bg"
                }`}
              >
                <span className={`icon-badge sm mb-3 ${vertical.live ? "" : "opacity-50"}`} aria-hidden>
                  {verticalIcons[vertical.name.en]}
                </span>
                <span lang="hi" className={`block font-semibold ${vertical.live ? "text-brand-dark" : "text-ink-muted"}`}>
                  {vertical.name.hi}
                </span>
                <span lang="en" className="mt-0.5 block text-sm text-ink-muted">
                  {vertical.name.en}
                </span>
                <span lang="hi" className="mt-3 block text-xs text-ink-muted">
                  {vertical.status.hi}
                </span>
                <span lang="en" className="mt-0.5 block text-xs text-ink-muted">
                  {vertical.status.en}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <p lang="hi" className="mt-4 text-sm text-ink-muted">{umbrella.note.hi}</p>
        <p lang="en" className="text-sm text-ink-muted">{umbrella.note.en}</p>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Operating model"
          hi={operatingModel.title.hi}
          en={operatingModel.title.en}
        />
        <ul className="stagger grid gap-4 md:grid-cols-2">
          {operatingModel.rows.map((row, i) => (
            <li key={row.ours.en} className="card-hover rounded-xl border border-line bg-surface p-5">
              <span className="icon-badge sm mb-3" aria-hidden>
                {operatingModelIcons[i]}
              </span>
              <p lang="hi" className="font-semibold text-brand-dark">
                {row.ours.hi}
              </p>
              <p lang="en" className="text-sm text-ink-muted">
                {row.ours.en}
              </p>
              <p lang="hi" className="mt-3 border-t border-line pt-3 text-sm text-ink-soft">
                {row.not.hi}
              </p>
              <p lang="en" className="mt-1 text-xs text-ink-muted">
                {row.not.en}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="soft">
        <SectionHeading eyebrow="Operating story" hi={builders.title.hi} en={builders.title.en} />
        <p lang="hi" className="max-w-3xl text-lg leading-relaxed text-ink-soft">
          {builders.body.hi}
        </p>
        <p lang="en" className="mt-4 max-w-3xl text-ink-muted">
          {builders.body.en}
        </p>
        <div className="mt-8 max-w-3xl rounded-xl border-l-4 border-accent bg-surface p-5">
          <p lang="hi" className="font-medium text-ink">{builders.caveat.hi}</p>
          <p lang="en" className="mt-2 text-sm text-ink-muted">{builders.caveat.en}</p>
        </div>
      </Section>

      <Section tone="brand">
        <p lang="hi" className="max-w-4xl text-2xl leading-relaxed font-medium text-white sm:text-3xl">
          {mission.hi}
        </p>
        <p lang="en" className="mt-6 max-w-3xl text-brand-line">
          {mission.en}
        </p>
      </Section>

      <Section>
        <SectionHeading eyebrow="Governance" hi={governance.title.hi} en={governance.title.en} />
        <p lang="hi" className="max-w-3xl text-ink-soft">{governance.body.hi}</p>
        <p lang="en" className="mt-3 max-w-3xl text-ink-muted">{governance.body.en}</p>
        <p className="mt-8 text-sm text-ink-muted">
          {site.brand.legalEntity} · {site.email.grievance}
        </p>
      </Section>
    </>
  );
}
