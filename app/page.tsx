import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stat } from "@/components/ui/Stat";
import { Button } from "@/components/ui/Button";
import { Bilingual } from "@/components/Bilingual";
import { LeadForm } from "@/components/LeadForm";
import { site } from "@/content/site";
import {
  biharBlurb,
  biharMeasure,
  biharStats,
  building,
  careersTeaser,
  doctorsMinute,
  firstVisitPromise,
  hero,
  promises,
  prosBlock,
  prosLimit,
  trustStrip,
  visitReasons,
  visitReasonsNote,
} from "@/content/home";

export default function HomePage() {
  return (
    <>
      {/* 1 — Hero. Doctor recruitment is the primary conversion. */}
      <section className="border-b border-line bg-surface">
        <div className="wrap grid gap-12 py-14 sm:py-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div>
            <p lang="hi" className="text-sm font-semibold text-brand-mid">
              {hero.eyebrow.hi}
            </p>
            <h1 lang="hi" className="mt-5 text-[2rem] leading-tight font-semibold sm:text-5xl">
              {hero.headline.hi}
            </h1>
            <p lang="en" className="mt-3 text-xl text-ink-soft">
              {hero.headline.en}
            </p>
            <p lang="hi" className="mt-6 max-w-xl text-lg text-ink-soft">
              {hero.sub.hi}
            </p>
            <p lang="en" className="mt-2 max-w-xl text-ink-muted">
              {hero.sub.en}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/doctors">
                <span lang="hi">{hero.ctaPrimary.hi}</span>
              </Button>
              <Button href="#callback" variant="secondary">
                <span lang="hi">{hero.ctaSecondary.hi}</span>
              </Button>
            </div>
          </div>

          <aside className="self-center rounded-2xl border border-brand-line bg-brand-soft p-7">
            <p lang="hi" className="text-lg leading-relaxed font-medium text-brand-dark">
              {hero.vision.hi}
            </p>
            <p lang="en" className="mt-4 text-sm leading-relaxed text-ink-soft">
              {hero.vision.en}
            </p>
          </aside>
        </div>
      </section>

      {/* 2 — Trust strip */}
      <div className="border-b border-line bg-brand-dark">
        <div className="wrap grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustStrip.map((item) => (
            <div key={item.en}>
              <p lang="hi" className="font-semibold text-white">
                {item.hi}
              </p>
              <p lang="en" className="mt-1 text-sm text-brand-line">
                {item.en}
              </p>
              <p className="mt-2 text-xs text-white/40">{item.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3 — What we are building. Establishes "company", not "clinic". */}
      <Section>
        <SectionHeading
          eyebrow="What we are building"
          hi={building.title.hi}
          en={building.title.en}
        />
        <p lang="hi" className="mb-10 max-w-3xl text-lg text-ink-soft">
          {building.lede.hi}
        </p>

        <div className="grid gap-5 sm:grid-cols-2">
          {building.pillars.map((pillar) => (
            <article key={pillar.tag} className="rounded-xl border border-line bg-surface p-6">
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
            className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3.5 text-base font-semibold text-brand-dark transition-colors hover:bg-brand-line"
          >
            <span lang="hi">{careersTeaser.cta.hi}</span>
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
        <div className="grid gap-6 md:grid-cols-3">
          {promises.map((item) => (
            <article key={item.title.en} className="rounded-xl border border-line bg-surface p-6">
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
            <h3 className="mb-3 text-sm font-semibold text-accent">
              <span lang="hi">हम क्या नहीं हैं</span>
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

      {/* 7 — People often visit us for… (never "we treat") */}
      <Section>
        <SectionHeading
          eyebrow="People often visit us for"
          hi="लोग आमतौर पर इन शिकायतों के साथ आते हैं"
          en="What people usually come to us with"
        />
        <ul className="flex flex-wrap gap-2.5">
          {visitReasons.map((reason) => (
            <li
              key={reason.en}
              className="rounded-full border border-brand-line bg-brand-soft px-4 py-2.5 text-sm"
            >
              <span lang="hi" className="text-brand-dark">
                {reason.hi}
              </span>
              <span lang="en" className="ml-2 text-ink-muted">
                · {reason.en}
              </span>
            </li>
          ))}
        </ul>
        <Bilingual
          {...visitReasonsNote}
          className="mt-6 max-w-3xl text-sm"
          hiClassName="text-ink-soft"
        />
        <p className="mt-6">
          <Link
            href="/homoeopathy#dual-care"
            className="font-semibold text-brand underline underline-offset-4"
            lang="hi"
          >
            और यह भी देखें: कब सीधे अस्पताल जाना है →
          </Link>
        </p>
      </Section>

      {/* 8 — A doctor's minute */}
      <Section tone="soft">
        <SectionHeading
          eyebrow="A doctor's minute"
          hi="एक चिकित्सक का एक मिनट"
          en="What actually happens in a consultation"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctorsMinute.map((step) => (
            <article key={step.step} className="rounded-xl border border-brand-line bg-surface p-6">
              <p className="text-sm font-semibold text-brand-mid">{step.step}</p>
              <h3 lang="hi" className="mt-3 text-xl font-semibold">
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
      <Section>
        <SectionHeading eyebrow="Why Bihar" hi="बिहार क्यों" en="Why Bihar" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
          <Link href="/bihar" className="font-semibold text-brand underline underline-offset-4" lang="hi">
            बिहार के पूरे आँकड़े देखें →
          </Link>
        </p>
      </Section>

      {/* 10 — Patient waitlist */}
      <Section id="callback" tone="soft" narrow>
        <SectionHeading
          eyebrow="Request a callback"
          hi="अस्पताल खुलने पर हमें आपको कॉल करने दीजिए"
          en="Let us call you when a hospital opens near you"
        />
        <div className="mb-8 rounded-xl border border-brand-line bg-surface p-5">
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
