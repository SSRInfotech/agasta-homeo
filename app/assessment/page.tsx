import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AssessmentTool } from "@/components/AssessmentTool";
import { assessmentIntro } from "@/content/assessment";

export const metadata: Metadata = {
  title: "अपनी स्थिति समझें | Understand your condition",
  description:
    "तीन छोटे सवाल — यह जानने के लिए कि आपकी शिकायत पहली होम्योपैथिक बातचीत के लिए ठीक है, या आज ही अस्पताल जाना बेहतर है।",
};

export default function AssessmentPage() {
  return (
    <Section narrow>
      <SectionHeading level={1} eyebrow={assessmentIntro.eyebrow} hi={assessmentIntro.title.hi} en={assessmentIntro.title.en} />
      <p lang="hi" className="mb-8 max-w-2xl text-lg text-ink-soft">
        {assessmentIntro.lede.hi}
      </p>
      <p lang="en" className="mb-8 max-w-2xl text-ink-muted">
        {assessmentIntro.lede.en}
      </p>

      <AssessmentTool />

      <p className="mt-10 text-sm">
        <Link href="/homoeopathy#dual-care" className="i18n-swap font-semibold text-brand underline underline-offset-4">
          <span lang="hi">यह भी देखें: होम्योपैथी कब मदद करती है, कब नहीं →</span>
          <span lang="en">Also see: when homoeopathy helps, and when it doesn&apos;t →</span>
        </Link>
      </p>
    </Section>
  );
}
