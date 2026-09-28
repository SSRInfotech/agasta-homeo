import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import { LeadForm } from "@/components/LeadForm";
import { deskRule, hospitalStatus, intro, privacyPromise, whatsappTemplates } from "@/content/contact";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "संपर्क | Contact",
  description:
    "अगस्ता होमियो से व्हाट्सएप या फ़ोन पर संपर्क करें। आपात स्थिति में 108 पर कॉल करें।",
};

export default function ContactPage() {
  return (
    <>
      <Section>
        <SectionHeading level={1} eyebrow="Contact" hi={intro.title.hi} en={intro.title.en} />
        <p lang="hi" className="max-w-3xl text-lg text-ink-soft">
          {intro.lede.hi}
        </p>
        <p lang="en" className="mt-3 max-w-3xl text-ink-muted">
          {intro.lede.en}
        </p>
        <WhatsAppCta text={whatsappTemplates.patient} />
      </Section>

      <Section tone="soft">
        <div className="grid gap-6 lg:grid-cols-3">
          <article className="card-hover rounded-xl border border-brand-line bg-surface p-6">
            <h2 className="i18n-swap text-lg font-semibold text-brand-dark">
              <span lang="hi">अस्पताल</span>
              <span lang="en">Hospital</span>
            </h2>
            {site.hospitals.map((hospital) => (
              <div key={hospital.name.en} className="mt-3">
                <p lang="hi" className="font-medium text-ink">{hospital.name.hi}</p>
                <p lang="en" className="text-sm text-ink-muted">{hospital.name.en}</p>
                <p lang="hi" className="mt-2 text-sm text-ink-soft">{hospital.address.hi}</p>
                <p lang="en" className="text-xs text-ink-muted">{hospital.address.en}</p>
                <p lang="hi" className="mt-1 text-sm text-ink-soft">{hospital.hours.hi}</p>
                <p lang="en" className="text-xs text-ink-muted">{hospital.hours.en}</p>
              </div>
            ))}
            <p lang="hi" className="mt-4 text-xs text-ink-muted">{hospitalStatus.hi}</p>
            <p lang="en" className="mt-1 text-xs text-ink-muted">{hospitalStatus.en}</p>
          </article>

          <article className="card-hover rounded-xl border border-brand-line bg-surface p-6">
            <h2 className="i18n-swap text-lg font-semibold text-brand-dark">
              <span lang="hi">व्हाट्सएप डेस्क</span>
              <span lang="en">WhatsApp desk</span>
            </h2>
            <p lang="hi" className="mt-3 text-sm text-ink-soft">{deskRule.hi}</p>
            <p lang="en" className="mt-2 text-sm text-ink-muted">{deskRule.en}</p>
          </article>

          <article className="card-hover rounded-xl border border-brand-line bg-surface p-6">
            <h2 className="i18n-swap text-lg font-semibold text-brand-dark">
              <span lang="hi">ईमेल</span>
              <span lang="en">Email</span>
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href={`mailto:${site.email.care}`} className="text-brand underline underline-offset-4">
                  {site.email.care}
                </a>
                <span className="block text-xs text-ink-muted">मरीज़ और सामान्य पूछताछ</span>
              </li>
              <li>
                <a href={`mailto:${site.email.careers}`} className="text-brand underline underline-offset-4">
                  {site.email.careers}
                </a>
                <span className="block text-xs text-ink-muted">चिकित्सक आवेदन</span>
              </li>
              <li>
                <a href={`mailto:${site.email.grievance}`} className="text-brand underline underline-offset-4">
                  {site.email.grievance}
                </a>
                <span className="block text-xs text-ink-muted">शिकायत अधिकारी / Grievance officer</span>
              </li>
            </ul>
          </article>
        </div>

        <div className="mt-8 rounded-xl border border-line bg-surface p-6">
          <p lang="hi" className="text-sm text-ink-soft">{privacyPromise.hi}</p>
          <p lang="en" className="mt-2 text-sm text-ink-muted">{privacyPromise.en}</p>
        </div>
      </Section>

      <Section narrow>
        <SectionHeading
          eyebrow="Outside Patna? Request a callback"
          hi="पटना से बाहर हैं? नाम लिख दीजिए, हम कॉल करेंगे"
          en="Outside Patna? Leave your details and we will call you"
        />
        <LeadForm source="contact-page" />
      </Section>
    </>
  );
}
