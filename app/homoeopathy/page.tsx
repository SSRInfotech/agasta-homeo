import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  IconAlertTriangle,
  IconBookOpen,
  IconCalendarClock,
  IconCheckCircle,
  IconDroplet,
  IconFingerprint,
  IconFlask,
  IconLandmark,
  IconMapPin,
  IconScale,
  IconShieldCheck,
  IconStethoscope,
} from "@/components/icons";
import {
  dualCare,
  firstVisit,
  history,
  intro,
  myths,
  pharmacy,
  principles,
  research,
  researchTone,
  whd,
} from "@/content/homoeopathy";

const historyIcons = [<IconBookOpen key="0" />, <IconMapPin key="1" />, <IconFlask key="2" />, <IconLandmark key="3" />];
const principleIcons = [<IconScale key="0" />, <IconDroplet key="1" />, <IconFingerprint key="2" />];
const researchIcons = [<IconStethoscope key="0" />, <IconShieldCheck key="1" />, <IconBookOpen key="2" />];

export const metadata: Metadata = {
  title: "होम्योपैथी क्या है | What homoeopathy is",
  description:
    "होम्योपैथी की तीन बुनियादी बातें, पहली मुलाक़ात कैसी होती है, दवा कैसे बनती है, भारत में क्या शोध हुआ है, और कब सीधे अस्पताल जाना है।",
};

export default function HomoeopathyPage() {
  return (
    <>
      <Section>
        <SectionHeading level={1} eyebrow="Awareness" hi={intro.title.hi} en={intro.title.en} />
        <p lang="hi" className="max-w-3xl text-xl text-ink-soft">
          {intro.lede.hi}
        </p>
        <p lang="en" className="mt-3 max-w-3xl text-ink-muted">
          {intro.lede.en}
        </p>
      </Section>

      <Section tone="soft">
        <SectionHeading
          eyebrow="History"
          hi="दो सौ साल की पद्धति, एक भारतीय मंत्रालय"
          en="A 200-year-old method, an Indian ministry"
        />
        <ol className="stagger grid gap-5 md:grid-cols-2">
          {history.map((item, i) => (
            <li key={item.title.en} className="card-hover rounded-xl border border-brand-line bg-surface p-6">
              <div className="icon-badge mb-4" aria-hidden>
                {historyIcons[i]}
              </div>
              <h3 lang="hi" className="text-lg font-semibold text-brand-dark">
                {item.title.hi}
              </h3>
              <p lang="en" className="text-sm text-ink-muted">
                {item.title.en}
              </p>
              <p lang="hi" className="mt-4 text-ink-soft">
                {item.body.hi}
              </p>
              <p lang="en" className="mt-2 text-sm text-ink-muted">
                {item.body.en}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="The three principles"
          hi="तीन बुनियादी सिद्धांत"
          en="The three principles"
        />
        <div className="stagger grid gap-6 lg:grid-cols-3">
          {principles.map((item, i) => (
            <article key={item.n} className="card-hover rounded-xl border border-line bg-surface p-6">
              <div className="icon-badge mb-4" aria-hidden>
                {principleIcons[i]}
              </div>
              <p className="text-2xl font-semibold text-brand-mid">{item.n}</p>
              <h3 lang="hi" className="mt-3 text-lg font-semibold">
                {item.title.hi}
              </h3>
              <p lang="en" className="mt-1 text-sm text-ink-muted">
                {item.title.en}
              </p>
              <p lang="hi" className="mt-4 text-ink-soft">
                {item.body.hi}
              </p>
              <p lang="en" className="mt-2 text-sm text-ink-muted">
                {item.body.en}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading
          eyebrow="Your first visit"
          hi="पहली मुलाक़ात कैसी होती है"
          en="What a first visit feels like"
        />
        <ol className="stagger grid gap-3 md:grid-cols-2">
          {firstVisit.map((step, index) => (
            <li key={step.en} className="flex gap-4 rounded-lg border border-brand-line bg-surface p-4">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand text-sm font-semibold text-white">
                {index + 1}
              </span>
              <span>
                <span lang="hi" className="block text-ink">
                  {step.hi}
                </span>
                <span lang="en" className="mt-1 block text-sm text-ink-muted">
                  {step.en}
                </span>
              </span>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="icon-badge mb-5" aria-hidden>
          <IconFlask />
        </div>
        <SectionHeading eyebrow="Pharmacy" hi={pharmacy.title.hi} en={pharmacy.title.en} />
        <p lang="hi" className="max-w-3xl text-lg text-ink-soft">
          {pharmacy.body.hi}
        </p>
        <p lang="en" className="mt-3 max-w-3xl text-ink-muted">
          {pharmacy.body.en}
        </p>
        <p className="mt-4 text-xs text-ink-muted">{pharmacy.source}</p>
      </Section>

      <Section tone="soft">
        <SectionHeading
          eyebrow="Research in India"
          hi="भारत में क्या शोध हुआ है"
          en="What research in India has looked at"
        />
        <div className="stagger grid gap-5 lg:grid-cols-3">
          {research.map((card, i) => (
            <article key={card.source} className="flex flex-col rounded-xl border border-brand-line bg-surface p-6">
              <div className="icon-badge mb-4" aria-hidden>
                {researchIcons[i]}
              </div>
              <h3 lang="hi" className="text-lg font-semibold text-brand-dark">
                {card.topic.hi}
              </h3>
              <p lang="en" className="text-sm text-ink-muted">
                {card.topic.en}
              </p>
              <p lang="hi" className="mt-4 text-sm text-ink-soft">
                {card.claim.hi}
              </p>
              <p lang="en" className="mt-3 text-sm text-ink-muted">
                {card.claim.en}
              </p>
              <p className="mt-auto pt-5 text-xs text-ink-muted">{card.source}</p>
            </article>
          ))}
        </div>
        <p lang="hi" className="mt-8 max-w-3xl border-l-4 border-brand-line pl-4 font-medium text-brand-dark">
          {researchTone.hi}
        </p>
        <p lang="en" className="mt-1 max-w-3xl border-l-4 border-brand-line pl-4 text-sm text-ink-muted">
          {researchTone.en}
        </p>
      </Section>

      <Section id="dual-care">
        <SectionHeading eyebrow="Dual care" hi={dualCare.title.hi} en={dualCare.title.en} />
        <p lang="hi" className="mb-2 max-w-3xl text-ink-soft">
          {dualCare.lede.hi}
        </p>
        <p lang="en" className="mb-8 max-w-3xl text-sm text-ink-muted">
          {dualCare.lede.en}
        </p>

        {/*
          Mobile: stacked pairs. The red-flag column is the safety-critical
          half — it must never sit behind a horizontal scroll on a phone.
        */}
        <ul className="space-y-4 md:hidden">
          {dualCare.rows.map((row) => (
            <li key={row.left.en} className="overflow-hidden rounded-xl border border-line">
              <div className="bg-brand-soft p-4">
                <p className="mb-1 flex items-center gap-1.5 text-xs font-semibold tracking-wide text-brand uppercase">
                  <IconCheckCircle className="h-3.5 w-3.5" aria-hidden />
                  {dualCare.leftHead.en}
                </p>
                <span lang="hi" className="block text-ink">
                  {row.left.hi}
                </span>
                <span lang="en" className="mt-1 block text-xs text-ink-muted">
                  {row.left.en}
                </span>
              </div>
              <div className="border-t border-line bg-alert-soft p-4">
                <p className="mb-1 flex items-center gap-1.5 text-xs font-semibold tracking-wide text-alert uppercase">
                  <IconAlertTriangle className="h-3.5 w-3.5" aria-hidden />
                  {dualCare.rightHead.en}
                </p>
                <span lang="hi" className="block font-medium text-alert">
                  {row.right.hi}
                </span>
                <span lang="en" className="mt-1 block text-xs text-ink-muted">
                  {row.right.en}
                </span>
              </div>
            </li>
          ))}
        </ul>

        <div className="hidden overflow-x-auto rounded-xl border border-line md:block">
          <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-brand-soft">
                <th scope="col" className="w-1/2 p-4 align-top">
                  <span className="mb-2 flex items-center gap-2 text-brand" aria-hidden>
                    <IconCheckCircle className="h-5 w-5" />
                  </span>
                  <span lang="hi" className="block font-semibold text-brand-dark">
                    {dualCare.leftHead.hi}
                  </span>
                  <span lang="en" className="mt-1 block text-xs font-normal text-ink-muted">
                    {dualCare.leftHead.en}
                  </span>
                </th>
                <th scope="col" className="w-1/2 border-l border-line bg-alert-soft p-4 align-top">
                  <span className="mb-2 flex items-center gap-2 text-alert" aria-hidden>
                    <IconAlertTriangle className="h-5 w-5" />
                  </span>
                  <span lang="hi" className="block font-semibold text-alert">
                    {dualCare.rightHead.hi}
                  </span>
                  <span lang="en" className="mt-1 block text-xs font-normal text-alert/70">
                    {dualCare.rightHead.en}
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {dualCare.rows.map((row) => (
                <tr key={row.left.en} className="border-t border-line align-top">
                  <td className="p-4">
                    <span lang="hi" className="block text-ink">
                      {row.left.hi}
                    </span>
                    <span lang="en" className="mt-1 block text-xs text-ink-muted">
                      {row.left.en}
                    </span>
                  </td>
                  <td className="border-l border-line p-4">
                    <span lang="hi" className="block font-medium text-alert">
                      {row.right.hi}
                    </span>
                    <span lang="en" className="mt-1 block text-xs text-ink-muted">
                      {row.right.en}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading eyebrow="Myths" hi="प्रचलित ग़लतफ़हमियाँ" en="Myths, answered plainly" />
        <dl className="stagger grid gap-5 md:grid-cols-2">
          {myths.map((item) => (
            <div key={item.myth.en} className="card-hover rounded-xl border border-brand-line bg-surface p-6">
              <dt lang="hi" className="text-lg font-semibold text-ink">
                {item.myth.hi}
              </dt>
              <dt lang="en" className="text-sm text-ink-muted">
                {item.myth.en}
              </dt>
              <dd className="mt-3">
                <span lang="hi" className="block text-ink-soft">
                  {item.answer.hi}
                </span>
                <span lang="en" className="mt-3 block text-sm text-ink-muted">
                  {item.answer.en}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section>
        <div className="icon-badge mb-5" aria-hidden>
          <IconCalendarClock />
        </div>
        <SectionHeading eyebrow="10 April" hi={whd.title.hi} en={whd.title.en} />
        <p lang="hi" className="max-w-3xl text-lg text-ink-soft">
          {whd.body.hi}
        </p>
        <p lang="en" className="mt-3 max-w-3xl text-ink-muted">
          {whd.body.en}
        </p>
        <p className="mt-4 text-xs text-ink-muted">{whd.source}</p>
      </Section>
    </>
  );
}
