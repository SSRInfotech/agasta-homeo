import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "निजता नीति | Privacy",
  description:
    "अगस्ता होमियो इस वेबसाइट पर क्या जानकारी लेता है, क्यों लेता है, कौन देखता है, कब तक रखता है, और हटाने के लिए किससे कहें।",
  robots: { index: true, follow: false },
};

const sections: Array<{ hi: string; en: string; body: { hi: string; en: string } }> = [
  {
    hi: "हम क्या लेते हैं",
    en: "What we collect",
    body: {
      hi: "इस वेबसाइट के फ़ॉर्म से केवल चार बातें: आपका नाम, आपका व्हाट्सएप/मोबाइल नंबर, आपका शहर या ज़िला, और आप किस बारे में जानना चाहते हैं (एक तय सूची में से)। हम इस फ़ॉर्म पर आपकी बीमारी, लक्षण, जाँच रिपोर्ट या दवाइयों का विवरण नहीं लेते — और आपसे अनुरोध है कि यहाँ न लिखें।",
      en: "From the form on this website, only four things: your name, your WhatsApp/mobile number, your city or district, and what you would like to know about (from a fixed list). We do not collect your illness, symptoms, test reports or medicines through this form — and we ask you not to enter them here.",
    },
  },
  {
    hi: "क्यों लेते हैं",
    en: "Why we collect it",
    body: {
      hi: "केवल इसलिए कि जब आपके क्षेत्र में हमारा अस्पताल खुले तो हम आपको कॉल या व्हाट्सएप कर सकें, और आपके सवाल का जवाब दे सकें। यह फ़ॉर्म चिकित्सा परामर्श नहीं है और इससे कोई इलाज शुरू नहीं होता।",
      en: "Only so that we can call or message you when a hospital opens in your area, and answer your question. This form is not a medical consultation and does not begin any treatment.",
    },
  },
  {
    hi: "कौन देखता है",
    en: "Who can see it",
    body: {
      hi: "कांगसन वेलनेस प्रा. लि. के नामित कर्मचारी। हम आपका नंबर किसी विज्ञापन सूची, डेटा ब्रोकर या तीसरे पक्ष को न बेचते हैं, न साझा करते हैं।",
      en: "Named staff of Kangson Wellness Pvt Ltd. We do not sell or share your number with advertising lists, data brokers, or any third party.",
    },
  },
  {
    hi: "कहाँ रखा जाता है",
    en: "Where it is stored",
    body: {
      hi: "अभी यह जानकारी Google Sheets में रखी जाती है, जिस तक केवल नामित खातों की पहुँच है। जब हमारा अपना सिस्टम शुरू होगा, यह जानकारी वहाँ स्थानांतरित कर दी जाएगी और शीट बंद कर दी जाएगी।",
      en: "For now this information is kept in Google Sheets, accessible only to named accounts. When our own system goes live, it will be migrated there and the sheet retired.",
    },
  },
  {
    hi: "कब तक रखते हैं",
    en: "How long we keep it",
    body: {
      hi: "अधिकतम 24 महीने, या जब तक आप हटाने के लिए न कहें — जो पहले हो।",
      en: "At most 24 months, or until you ask us to delete it — whichever is earlier.",
    },
  },
  {
    hi: "हटाने के लिए क्या करें",
    en: "How to have it deleted",
    body: {
      hi: `हमारे शिकायत अधिकारी को ${site.email.grievance} पर ईमेल कीजिए, या उसी नंबर से व्हाट्सएप कीजिए जो आपने फ़ॉर्म में दिया था। हम आपकी जानकारी हटा देंगे और आपको पुष्टि भेजेंगे।`,
      en: `Email our grievance officer at ${site.email.grievance}, or message us on WhatsApp from the same number you entered in the form. We will delete your information and confirm back to you.`,
    },
  },
  {
    hi: "कुकीज़ और ट्रैकिंग",
    en: "Cookies and tracking",
    body: {
      hi: "यह वेबसाइट विज्ञापन कुकी या ट्रैकिंग पिक्सल नहीं चलाती। हम आपके स्वास्थ्य-संबंधी रुचि के आधार पर आपको कहीं विज्ञापन नहीं दिखाते।",
      en: "This website runs no advertising cookies and no tracking pixels. We do not retarget you anywhere based on a health-related interest.",
    },
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Section narrow>
        <SectionHeading level={1} eyebrow="Privacy" hi="निजता नीति" en="Privacy policy" />
        <p className="text-sm text-ink-muted">
          {site.brand.en} · {site.brand.legalEntity} · {site.consentVersion}
        </p>

        <div className="mt-10 space-y-10">
          {sections.map((section) => (
            <section key={section.en}>
              <h2 lang="hi" className="text-xl font-semibold text-brand-dark">
                {section.hi}
              </h2>
              <p lang="en" className="text-sm text-ink-muted">
                {section.en}
              </p>
              <p lang="hi" className="mt-4 text-ink-soft">
                {section.body.hi}
              </p>
              <p lang="en" className="mt-3 text-sm text-ink-muted">
                {section.body.en}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-brand-line bg-brand-soft p-6">
          <p lang="hi" className="font-medium text-brand-dark">
            शिकायत अधिकारी से संपर्क: {site.email.grievance}
          </p>
          <p lang="en" className="mt-2 text-sm text-ink-soft">
            Grievance officer: {site.email.grievance} · {site.brand.legalEntity}
          </p>
        </div>
      </Section>
    </>
  );
}
