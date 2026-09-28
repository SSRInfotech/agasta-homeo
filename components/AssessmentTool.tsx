"use client";

import { useMemo, useState } from "react";
import { Bilingual } from "@/components/Bilingual";
import { LeadForm } from "@/components/LeadForm";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import {
  IconAlertTriangle,
  IconCheckCircle,
  IconDroplet,
  IconFingerprint,
  IconFlask,
  IconHandHeart,
  IconLeaf,
  IconWrench,
} from "@/components/icons";
import {
  conditionWhatsAppTemplate,
  conditions,
  dualCareOptions,
  dualCareQuestion,
  durationOptions,
  durationQuestion,
  resultDisclaimer,
  resultDualCareNote,
  resultSafe,
  resultUrgent,
  restartLabel,
  backLabel,
  type Condition,
} from "@/content/assessment";
import { site, emergencyLine, type Bi } from "@/content/site";

const iconFor: Record<Condition["icon"], React.ReactNode> = {
  droplet: <IconDroplet />,
  flask: <IconFlask />,
  fingerprint: <IconFingerprint />,
  leaf: <IconLeaf />,
  wrench: <IconWrench />,
  handHeart: <IconHandHeart />,
};

type Step = 0 | 1 | 2 | 3 | 4;

const optionButton =
  "i18n-swap w-full rounded-lg border border-line bg-surface px-5 py-4 text-left transition-colors hover:border-brand-mid focus-visible:border-brand-mid";

function StepDots({ step }: { step: Step }) {
  return (
    <div className="mb-8 flex gap-2" aria-hidden>
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className={`h-1.5 flex-1 rounded-full ${
            i < step ? "bg-brand" : i === step ? "bg-accent" : "bg-line"
          }`}
        />
      ))}
    </div>
  );
}

function QuestionOption({ bi, tone = "default", onClick }: { bi: Bi; tone?: "default" | "flag"; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${optionButton} ${tone === "flag" ? "border-alert/40 hover:border-alert" : ""}`}
    >
      <Bilingual as="span" hi={bi.hi} en={bi.en} hiClassName="font-medium text-ink" enClassName="text-sm" />
    </button>
  );
}

export function AssessmentTool() {
  const [step, setStep] = useState<Step>(0);
  const [condition, setCondition] = useState<Condition | null>(null);
  const [duration, setDuration] = useState<Bi | null>(null);
  const [flag, setFlag] = useState<boolean | null>(null);
  const [dualCare, setDualCare] = useState<boolean | null>(null);

  const waText = useMemo(() => (condition ? conditionWhatsAppTemplate(condition) : undefined), [condition]);

  function reset() {
    setStep(0);
    setCondition(null);
    setDuration(null);
    setFlag(null);
    setDualCare(null);
  }

  function pickCondition(c: Condition) {
    setCondition(c);
    setStep(1);
  }

  return (
    <div className="rounded-2xl border border-brand-line bg-surface p-6 sm:p-9">
      <StepDots step={step} />

      {step === 0 ? (
        <div>
          <h3 className="i18n-swap mb-5 text-lg font-semibold text-ink">
            <span lang="hi">आपकी शिकायत किससे मिलती-जुलती है?</span>
            <span lang="en">Which of these is closest to your complaint?</span>
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {conditions.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => pickCondition(c)}
                className="flex items-center gap-4 rounded-xl border border-line bg-surface p-4 text-left transition-colors hover:border-brand-mid"
              >
                <span className="icon-badge sm shrink-0" aria-hidden>
                  {iconFor[c.icon]}
                </span>
                <Bilingual as="span" hi={c.title.hi} en={c.title.en} hiClassName="font-medium text-ink" enClassName="text-xs" />
              </button>
            ))}
          </div>
        </div>
      ) : null}

      {step === 1 && condition ? (
        <div>
          <p className="i18n-swap mb-1 text-xs font-semibold tracking-[0.14em] text-brand-mid uppercase">
            <Bilingual as="span" hi={condition.title.hi} en={condition.title.en} />
          </p>
          <h3 className="i18n-swap mb-5 text-lg font-semibold text-ink">
            <span lang="hi">{durationQuestion.hi}</span>
            <span lang="en">{durationQuestion.en}</span>
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {durationOptions.map((opt) => (
              <QuestionOption
                key={opt.en}
                bi={opt}
                onClick={() => {
                  setDuration(opt);
                  setStep(2);
                }}
              />
            ))}
          </div>
          <button type="button" onClick={() => setStep(0)} className="i18n-swap mt-6 text-sm text-ink-muted underline underline-offset-4">
            <span lang="hi">← {backLabel.hi}</span>
            <span lang="en">← {backLabel.en}</span>
          </button>
        </div>
      ) : null}

      {step === 2 && condition ? (
        <div>
          <h3 className="i18n-swap mb-5 text-lg font-semibold text-ink">
            <span lang="hi">{condition.flagQuestion.hi}</span>
            <span lang="en">{condition.flagQuestion.en}</span>
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            <QuestionOption
              bi={condition.flagYes}
              tone="flag"
              onClick={() => {
                setFlag(true);
                setStep(3);
              }}
            />
            <QuestionOption
              bi={condition.flagNo}
              onClick={() => {
                setFlag(false);
                setStep(3);
              }}
            />
          </div>
          <button type="button" onClick={() => setStep(1)} className="i18n-swap mt-6 text-sm text-ink-muted underline underline-offset-4">
            <span lang="hi">← {backLabel.hi}</span>
            <span lang="en">← {backLabel.en}</span>
          </button>
        </div>
      ) : null}

      {step === 3 ? (
        <div>
          <h3 className="i18n-swap mb-5 text-lg font-semibold text-ink">
            <span lang="hi">{dualCareQuestion.hi}</span>
            <span lang="en">{dualCareQuestion.en}</span>
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            <QuestionOption
              bi={dualCareOptions.label}
              onClick={() => {
                setDualCare(true);
                setStep(4);
              }}
            />
            <QuestionOption
              bi={{ hi: "नहीं", en: "No" }}
              onClick={() => {
                setDualCare(false);
                setStep(4);
              }}
            />
          </div>
          <button type="button" onClick={() => setStep(2)} className="i18n-swap mt-6 text-sm text-ink-muted underline underline-offset-4">
            <span lang="hi">← {backLabel.hi}</span>
            <span lang="en">← {backLabel.en}</span>
          </button>
        </div>
      ) : null}

      {step === 4 && condition ? (
        <div className="animate-fade-in-up">
          <div className="mb-5 rounded-lg border border-dashed border-line bg-bg px-4 py-3 text-sm">
            <Bilingual
              as="span"
              hi={`आपने चुना: ${condition.title.hi}${duration ? ` · ${duration.hi}` : ""}`}
              en={`You selected: ${condition.title.en}${duration ? ` · ${duration.en}` : ""}`}
              hiClassName="text-ink-soft"
              enClassName="text-xs"
            />
          </div>
          {flag ? (
            <div className="rounded-xl border-2 border-alert/30 bg-alert-soft p-6">
              <div className="flex gap-3">
                <span className="icon-badge alert shrink-0" aria-hidden>
                  <IconAlertTriangle />
                </span>
                <div>
                  <p lang="hi" className="text-lg font-semibold text-alert">
                    {resultUrgent.title.hi}
                  </p>
                  <p lang="en" className="mt-1 text-sm font-medium text-alert/80">
                    {resultUrgent.title.en}
                  </p>
                </div>
              </div>
              <p lang="hi" className="mt-4 text-ink">
                {resultUrgent.body.hi}
              </p>
              <p lang="en" className="mt-2 text-sm text-ink-muted">
                {resultUrgent.body.en}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  data-cta
                  href={`tel:${site.emergencyNumber}`}
                  className="inline-flex items-center justify-center rounded-lg bg-alert px-6 py-3.5 text-base font-semibold text-white hover:opacity-90"
                >
                  📞 {site.emergencyNumber} {" · "}
                  <span lang="hi">डायल करें</span>
                  <span lang="en" className="ml-1">Dial now</span>
                </a>
              </div>
              <p lang="hi" className="mt-4 text-sm text-ink-soft">
                {emergencyLine.hi}
              </p>
              <p lang="en" className="text-xs text-ink-muted">
                {emergencyLine.en}
              </p>
            </div>
          ) : (
            <div className="rounded-xl border-2 border-brand-line bg-brand-soft p-6">
              <div className="flex gap-3">
                <span className="icon-badge shrink-0" aria-hidden>
                  <IconCheckCircle />
                </span>
                <div>
                  <p lang="hi" className="text-lg font-semibold text-brand-dark">
                    {resultSafe.title.hi}
                  </p>
                  <p lang="en" className="mt-1 text-sm font-medium text-brand-mid">
                    {resultSafe.title.en}
                  </p>
                </div>
              </div>
              <p lang="hi" className="mt-4 text-ink">
                {resultSafe.body.hi}
              </p>
              <p lang="en" className="mt-2 text-sm text-ink-muted">
                {resultSafe.body.en}
              </p>

              {dualCare ? (
                <div className="mt-5 rounded-lg border border-brand-line bg-surface p-4">
                  <p lang="hi" className="text-sm text-ink-soft">
                    {resultDualCareNote.hi}
                  </p>
                  <p lang="en" className="mt-1 text-xs text-ink-muted">
                    {resultDualCareNote.en}
                  </p>
                </div>
              ) : null}

              <WhatsAppCta text={waText} compact />

              <div className="mt-8 border-t border-brand-line pt-6">
                <p className="i18n-swap mb-4 text-sm font-semibold text-brand-dark">
                  <span lang="hi">या अपना नाम दर्ज करें — अस्पताल खुलने पर हम कॉल करेंगे</span>
                  <span lang="en">Or leave your details — we will call when a hospital opens</span>
                </p>
                <LeadForm source="assessment-tool" />
              </div>
            </div>
          )}

          <p lang="hi" className="mt-5 text-xs text-ink-muted">
            {resultDisclaimer.hi}
          </p>
          <p lang="en" className="text-xs text-ink-muted">
            {resultDisclaimer.en}
          </p>

          <button type="button" onClick={reset} className="i18n-swap mt-6 text-sm font-semibold text-brand underline underline-offset-4">
            <span lang="hi">{restartLabel.hi}</span>
            <span lang="en">{restartLabel.en}</span>
          </button>
        </div>
      ) : null}
    </div>
  );
}
