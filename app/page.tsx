import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stat } from "@/components/ui/Stat";
import { Button } from "@/components/ui/Button";
import { Bilingual } from "@/components/Bilingual";
import { LeadForm } from "@/components/LeadForm";
import { ConsultationScene } from "@/components/illustrations/ConsultationScene";
import {
  IconArrowRight,
  IconBed,
  IconBookOpen,
  IconCalendarClock,
  IconClipboardHeart,
  IconDroplet,
  IconEar,
  IconFileText,
  IconFingerprint,
  IconFlask,
  IconGlobe,
  IconHandHeart,
  IconHospital,
  IconLandmark,
  IconLeaf,
  IconMapPin,
  IconScale,
  IconShieldCheck,
  IconStethoscope,
  IconTrendingUp,
  IconUsers,
  IconWrench,
} from "@/components/icons";
import { site } from "@/content/site";
import {
  biharBlurb,
  biharMeasure,
  biharStats,
  building,
  campsInitiative,
  careersTeaser,
  doctorsMinute,
  firstVisitPromise,
  hero,
  indiaStats,
  legalRecognition,
  promises,
  prosBlock,
  prosLimit,
  trustStrip,
  visitReasons,
  visitReasonsNote,
} from "@/content/home";

const pillarIcons: Record<string, React.ReactNode> = {
  OPD: <IconStethoscope />,
  IPD: <IconBed />,
  PHARMACY: <IconFlask />,
  RECORDS: <IconFileText />,
};

const trustIcons = [<IconUsers key="0" />, <IconLandmark key="1" />, <IconScale key="2" />, <IconShieldCheck key="3" />];

const promiseIcons: Record<string, React.ReactNode> = {
  Awareness: <IconBookOpen />,
  "Honest care": <IconHandHeart />,
  "Doctors who stay": <IconUsers />,
};

const minuteIcons: Record<string, React.ReactNode> = {
  "01": <IconEar />,
  "02": <IconFingerprint />,
  "03": <IconDroplet />,
  "04": <IconCalendarClock />,
};

const indiaStatIcons = [<IconUsers key="0" />, <IconHospital key="1" />, <IconMapPin key="2" />];

/** One icon per `visitReasons` entry, same order — the awareness grid,
 *  styled after a circular disease-index look, never a diagnosis label. */
const visitReasonIcons = [
  <IconDroplet key="0" />,
  <IconFlask key="1" />,
  <IconFingerprint key="2" />,
  <IconLeaf key="3" />,
  <IconWrench key="4" />,
  <IconHandHeart key="5" />,
  <IconCalendarClock key="6" />,
  <IconClipboardHeart key="7" />,
  <IconTrendingUp key="8" />,
];

const legalIcons: Record<string, React.ReactNode> = {
  ministry: <IconLandmark />,
  council: <IconScale />,
  pharma: <IconFlask />,
  who: <IconGlobe />,
};

export default function HomePage() {
  return (
    <>
      {/* 1 — Hero. Doctor recruitment is the primary conversion. */}
      <section className="border-b border-line bg-surface">
        <div className="wrap grid gap-12 py-14 sm:py-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <Reveal>
            <div className="cascade">
              <div>
                <span className="brand-badge">
                  <span lang="hi">अगस्ता होमियो</span>
                  <span aria-hidden>·</span>
                  <span lang="en">Agasta Homeo</span>
                </span>
                <span className="i18n-swap ml-2 inline-flex items-center gap-1.5 rounded-full bg-brand-dark px-3 py-1.5 text-xs font-semibold text-white">
                  <span aria-hidden>●</span>
                  <span lang="hi">{hero.patnaBadge.hi}</span>
                  <span lang="en">{hero.patnaBadge.en}</span>
                </span>
                <p lang="hi" className="mt-3 text-sm font-semibold text-brand-mid">
                  {hero.eyebrow.hi}
                </p>
                <p lang="en" className="text-sm font-medium text-ink-muted">
                  {hero.eyebrow.en}
                </p>
              </div>
              <div className="mt-5">
                <h1 lang="hi" className="text-[2rem] leading-tight font-semibold sm:text-5xl">
                  {hero.headline.hi}
                </h1>
                <p lang="en" className="mt-3 text-xl text-ink-soft">
                  {hero.headline.en}
                </p>
              </div>
              <div className="mt-6">
                <p lang="hi" className="max-w-xl text-lg text-ink-soft">
                  {hero.sub.hi}
                </p>
                <p lang="en" className="mt-2 max-w-xl text-ink-muted">
                  {hero.sub.en}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/doctors" className="i18n-swap">
                  <span lang="hi">{hero.ctaPrimary.hi}</span>
                  <span lang="en">{hero.ctaPrimary.en}</span>
                </Button>
                <Button href="/contact" variant="secondary" className="i18n-swap">
                  <span lang="hi">{hero.ctaSecondary.hi}</span>
                  <span lang="en">{hero.ctaSecondary.en}</span>
                </Button>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-2xl border border-brand-line bg-surface p-4 sm:p-6">
              <ConsultationScene className="mx-auto h-auto w-full max-w-sm" />
            </div>
            <aside className="rounded-2xl border border-brand-line bg-brand-soft p-7">
              <p lang="hi" className="text-lg leading-relaxed font-medium text-brand-dark">
                {hero.vision.hi}
              </p>
              <p lang="en" className="mt-4 text-sm leading-relaxed text-ink-soft">
                {hero.vision.en}
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* 2 — Trust strip */}
      <div className="border-b border-line bg-brand-dark">
        <div className="wrap grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustStrip.map((item, i) => (
            <div key={item.en} className="flex gap-4">
              <div className="icon-badge invert" aria-hidden>
                {trustIcons[i]}
              </div>
              <div>
                <p lang="hi" className="font-semibold text-white">
                  {item.hi}
                </p>
                <p lang="en" className="mt-1 text-sm text-brand-line">
                  {item.en}
                </p>
                <p className="mt-2 text-xs text-white/40">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3 — What we are building. Establishes "company", not "clinic". */}
      <Section>
        <SectionHeading
          eyebrow="OPD · IPD · Pharmacy · Records"
          hi={building.title.hi}
          en={building.title.en}
        />
        <p lang="hi" className="mb-2 max-w-3xl text-lg text-ink-soft">
          {building.lede.hi}
        </p>
        <p lang="en" className="mb-10 max-w-3xl text-ink-muted">
          {building.lede.en}
        </p>

        <div className="stagger grid gap-5 sm:grid-cols-2">
          {building.pillars.map((pillar) => (
            <article key={pillar.tag} className="card-hover rounded-xl border border-line bg-surface p-6">
              <div className="icon-badge mb-4" aria-hidden>
                {pillarIcons[pillar.tag]}
              </div>
              <p className="text-xs font-semibold tracking-[0.16em] text-brand-mid uppercase">
                {pillar.tag}
              </p>
              <h3 lang="hi" className="mt-3 text-xl font-semibold">
                {pillar.title.hi}
              </h3>
              <p lang="en" className="text-sm text-ink-muted">
                {pillar.title.en}
              </p>
              <p lang="hi" className="mt-4 text-ink-soft">
                {pillar.body.hi}
              </p>
              <p lang="en" className="mt-2 text-sm text-ink-muted">
                {pillar.body.en}
              </p>
            </article>
          ))}
        </div>

        {/* The honesty line that must sit next to the word "hospital". */}
        <div className="mt-8 rounded-xl border-2 border-alert/30 bg-alert-soft p-6">
          <p lang="hi" className="font-medium text-alert">
            {building.limit.hi}
          </p>
          <p lang="en" className="mt-2 text-sm text-alert/80">
            {building.limit.en}
          </p>
        </div>
      </Section>

      {/* 3.5 — Free consultation camps + awareness drives (§1.3 pillar 1). */}
      <Section tone="soft">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="Awareness"
              hi={campsInitiative.title.hi}
              en={campsInitiative.title.en}
            />
            <p lang="hi" className="max-w-xl text-lg text-ink-soft">
              {campsInitiative.lede.hi}
            </p>
            <p lang="en" className="mt-3 max-w-xl text-ink-muted">
              {campsInitiative.lede.en}
            </p>
            <ul className="stagger mt-6 space-y-3">
              {campsInitiative.points.map((point) => (
                <li key={point.en} className="flex gap-3 rounded-lg border border-brand-line bg-surface p-4">
                  <span className="icon-badge sm shrink-0" aria-hidden>
                    <IconCalendarClock />
                  </span>
                  <span>
                    <span lang="hi" className="block text-ink">
                      {point.hi}
                    </span>
                    <span lang="en" className="mt-1 block text-xs text-ink-muted">
                      {point.en}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="self-start rounded-xl border border-brand-line bg-surface p-6">
            <p lang="hi" className="text-ink">
              {campsInitiative.note.hi}
            </p>
            <p lang="en" className="mt-3 text-sm text-ink-muted">
              {campsInitiative.note.en}
            </p>
            <Button href="#callback" className="i18n-swap mt-6">
              <span lang="hi">{campsInitiative.cta.hi}</span>
              <span lang="en">{campsInitiative.cta.en}</span>
            </Button>
          </div>
        </div>
      </Section>

      {/* 4 — Doctors. Moved high: hiring is what this site is for. */}
      <Section tone="brand">
        <SectionHeading
          invert
          eyebrow="For doctors"
          hi={careersTeaser.headline.hi}
          en={careersTeaser.headline.en}
        />
        <p lang="hi" className="max-w-2xl text-lg text-white/90">
          {careersTeaser.body.hi}
        </p>
        <p lang="en" className="mt-3 max-w-2xl text-brand-line">
          {careersTeaser.body.en}
        </p>
        <p lang="hi" className="mt-6 max-w-2xl border-l-4 border-white/25 pl-4 text-white/90">
          {careersTeaser.note.hi}
        </p>
        <p lang="en" className="mt-1 max-w-2xl border-l-4 border-white/25 pl-4 text-sm text-brand-line">
          {careersTeaser.note.en}
        </p>
        <div className="mt-8">
          <Link
            data-cta
            href="/doctors"
            className="i18n-swap inline-flex items-center justify-center rounded-lg bg-white px-6 py-3.5 text-base font-semibold text-brand-dark transition-colors hover:bg-brand-line"
          >
            <span lang="hi">{careersTeaser.cta.hi}</span>
            <span lang="en">{careersTeaser.cta.en}</span>
          </Link>
        </div>
      </Section>

      {/* 5 — Three promises */}
      <Section>
        <SectionHeading
          eyebrow="What we promise"
          hi="तीन वादे"
          en="Three promises we intend to keep"
        />
        <div className="stagger grid gap-6 md:grid-cols-3">
          {promises.map((item) => (
            <article key={item.title.en} className="card-hover rounded-xl border border-line bg-surface p-6">
              <div className="icon-badge mb-4" aria-hidden>
                {promiseIcons[item.title.en]}
              </div>
              <h3 lang="hi" className="text-xl font-semibold">
                {item.title.hi}
              </h3>
              <p lang="en" className="mt-0.5 text-sm font-medium tracking-wide text-brand-mid uppercase">
                {item.title.en}
              </p>
              <p lang="hi" className="mt-4 text-ink-soft">
                {item.body.hi}
              </p>
              <p lang="en" className="mt-3 text-sm text-ink-muted">
                {item.body.en}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* 6 — Why families choose homoeopathy, with the limit stated */}
      <Section tone="soft">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="Why families choose it"
              hi="परिवार होम्योपैथी क्यों चुनते हैं"
              en="Why families choose homoeopathy"
            />
            <p lang="hi" className="text-lg leading-relaxed text-ink">
              {prosBlock.hi}
            </p>
            <p lang="en" className="mt-4 text-ink-muted">
              {prosBlock.en}
            </p>
          </div>
          <div className="self-start rounded-xl border border-brand-line bg-surface p-6">
            <h3 className="i18n-swap mb-3 text-sm font-semibold text-accent">
              <span lang="hi">हम क्या नहीं हैं</span>
              <span lang="en">What we are not</span>
            </h3>
            <p lang="hi" className="text-ink">
              {prosLimit.hi}
            </p>
            <p lang="en" className="mt-3 text-sm text-ink-muted">
              {prosLimit.en}
            </p>
          </div>
        </div>
      </Section>

      {/* 6.5 — Legal recognition + India infrastructure, stated proudly once */}
      <Section>
        <SectionHeading
          eyebrow="Recognised in India"
          hi={legalRecognition.title.hi}
          en={legalRecognition.title.en}
        />
        <p lang="hi" className="max-w-3xl text-lg text-ink-soft">
          {legalRecognition.lede.hi}
        </p>
        <p lang="en" className="mt-3 max-w-3xl text-ink-muted">
          {legalRecognition.lede.en}
        </p>

        <div className="stagger mt-10 grid gap-4 sm:grid-cols-3">
          {indiaStats.map((stat, i) => (
            <Stat key={stat.value} value={stat.value} label={stat.label} source={stat.source} icon={indiaStatIcons[i]} />
          ))}
        </div>

        <div className="stagger mt-6 grid gap-5 md:grid-cols-2">
          {legalRecognition.points.map((point) => (
            <article key={point.key} className="flex gap-4 rounded-xl border border-line bg-surface p-6">
              <div className="icon-badge shrink-0" aria-hidden>
                {legalIcons[point.key]}
              </div>
              <div>
                <h3 lang="hi" className="font-semibold text-brand-dark">
                  {point.title.hi}
                </h3>
                <p lang="en" className="text-xs font-medium tracking-wide text-ink-muted uppercase">
                  {point.title.en}
                </p>
                <p lang="hi" className="mt-2 text-sm text-ink-soft">
                  {point.body.hi}
                </p>
                <p lang="en" className="mt-1 text-xs text-ink-muted">
                  {point.body.en}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* 7 — People often visit us for… (never "we treat") */}
      <Section tone="soft">
        <SectionHeading
          eyebrow="People often visit us for"
          hi="लोग आमतौर पर इन शिकायतों के साथ आते हैं"
          en="What people usually come to us with"
        />
        <ul className="stagger flex flex-wrap justify-center gap-x-6 gap-y-8 sm:justify-start">
          {visitReasons.map((reason, i) => (
            <li key={reason.en} className="flex w-28 flex-col items-center gap-3 text-center">
              <span
                className="grid h-24 w-24 shrink-0 place-items-center rounded-full border-2 border-brand-line bg-brand-soft text-brand transition-transform duration-200 [&_svg]:h-10 [&_svg]:w-10"
                aria-hidden
              >
                {visitReasonIcons[i]}
              </span>
              <span lang="hi" className="text-sm leading-snug font-semibold text-ink">
                {reason.hi}
              </span>
              <span lang="en" className="text-xs leading-snug text-ink-muted">
                {reason.en}
              </span>
            </li>
          ))}
          <li className="flex w-28 flex-col items-center gap-3 text-center">
            <Link
              href="/assessment"
              className="grid h-24 w-24 shrink-0 place-items-center rounded-full bg-accent text-white transition-transform duration-200 hover:-translate-y-1 [&_svg]:h-9 [&_svg]:w-9"
            >
              <IconArrowRight />
            </Link>
            <Link href="/assessment" className="i18n-swap text-sm font-semibold text-accent underline underline-offset-4">
              <span lang="hi">और देखें</span>
              <span lang="en">See more</span>
            </Link>
          </li>
        </ul>
        <Bilingual
          {...visitReasonsNote}
          className="mt-6 max-w-3xl text-sm"
          hiClassName="text-ink-soft"
        />
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          <Link
            href="/assessment"
            className="i18n-swap font-semibold text-brand underline underline-offset-4"
          >
            <span lang="hi">अपनी शिकायत के लिए ३ सवाल — अभी समझें →</span>
            <span lang="en">3 questions for your complaint — understand it now →</span>
          </Link>
          <Link
            href="/homoeopathy#dual-care"
            className="i18n-swap font-semibold text-brand underline underline-offset-4"
          >
            <span lang="hi">और यह भी देखें: कब सीधे अस्पताल जाना है →</span>
            <span lang="en">Also see: when to go straight to a hospital →</span>
          </Link>
        </div>
      </Section>

      {/* 8 — A doctor's minute */}
      <Section>
        <SectionHeading
          eyebrow="A doctor's minute"
          hi="एक चिकित्सक का एक मिनट"
          en="What actually happens in a consultation"
        />
        <div className="stagger grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctorsMinute.map((step) => (
            <article key={step.step} className="card-hover rounded-xl border border-brand-line bg-surface p-6">
              <div className="icon-badge mb-4" aria-hidden>
                {minuteIcons[step.step]}
              </div>
              <p className="text-sm font-semibold text-brand-mid">{step.step}</p>
              <h3 lang="hi" className="mt-2 text-xl font-semibold">
                {step.title.hi}
              </h3>
              <p lang="en" className="text-sm text-ink-muted">
                {step.title.en}
              </p>
              <p lang="hi" className="mt-4 text-sm text-ink-soft">
                {step.body.hi}
              </p>
              <p lang="en" className="mt-2 text-sm text-ink-muted">
                {step.body.en}
              </p>
            </article>
          ))}
        </div>
        <p lang="hi" className="mt-10 text-2xl font-semibold text-brand-dark sm:text-3xl">
          {firstVisitPromise.hi}
        </p>
        <p lang="en" className="mt-2 text-ink-muted">
          {firstVisitPromise.en}
        </p>
      </Section>

      {/* 9 — Bihar */}
      <Section tone="soft">
        <SectionHeading eyebrow="Why Bihar" hi="बिहार क्यों" en="Why Bihar" />
        <div className="stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {biharStats.map((stat) => (
            <Stat key={stat.value} value={stat.value} label={stat.label} source={stat.source} />
          ))}
        </div>
        <div className="mt-8 max-w-3xl">
          <p lang="hi" className="text-lg text-ink-soft">
            {biharBlurb.hi}
          </p>
          <p lang="en" className="mt-3 text-ink-muted">
            {biharBlurb.en}
          </p>
          <p lang="hi" className="mt-6 border-l-4 border-brand-line pl-4 font-medium text-brand-dark">
            {biharMeasure.hi}
          </p>
          <p lang="en" className="mt-1 border-l-4 border-brand-line pl-4 text-sm text-ink-muted">
            {biharMeasure.en}
          </p>
        </div>
        <p className="mt-8">
          <Link href="/bihar" className="i18n-swap font-semibold text-brand underline underline-offset-4">
            <span lang="hi">बिहार के पूरे आँकड़े देखें →</span>
            <span lang="en">See all the Bihar numbers →</span>
          </Link>
        </p>
      </Section>

      {/* 10 — Patient waitlist, for everywhere outside Patna */}
      <Section id="callback" narrow>
        <SectionHeading
          eyebrow="Outside Patna? Request a callback"
          hi="पटना में हैं? सीधे संपर्क करें। बाहर हैं? हमें कॉल करने दीजिए"
          en="In Patna? Contact us directly. Elsewhere? Let us call you"
        />
        <div className="mb-8 rounded-xl border border-brand-line bg-brand-soft p-5">
          <p lang="hi" className="text-ink">
            {hero.waitlistNote.hi}
          </p>
          <p lang="en" className="mt-2 text-sm text-ink-muted">
            {hero.waitlistNote.en}
          </p>
        </div>
        <LeadForm source="home-callback" />
      </Section>

      <div className="sr-only">{site.brand.legalEntity}</div>
    </>
  );
}
