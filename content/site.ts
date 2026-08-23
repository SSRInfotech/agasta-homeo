/**
 * Single source of truth for contact, legal and link data.
 *
 * Anything still marked TODO_ is a launch blocker — run `pnpm claim-lint`
 * to list them. See AGASTA_HOMEO_TECH_BLUEPRINT.md §15 (execution checklist).
 */

export type Bi = { hi: string; en: string };

export const site = {
  brand: {
    en: "Agasta Homeo",
    hi: "अगस्ता होमियो",
    legalEntity: "Kangson Wellness Pvt Ltd",
    parentLine: {
      hi: "कांगसन वेलनेस प्रा. लि. की एक इकाई",
      en: "A unit of Kangson Wellness Pvt Ltd",
    } satisfies Bi,
    /**
     * We are a company that builds and runs hospitals and employs doctors —
     * not a single clinic. Every page should read that way.
     */
    descriptor: {
      hi: "बिहार में होम्योपैथिक अस्पताल बनाने और चलाने वाली कंपनी",
      en: "A company building and running homoeopathic hospitals in Bihar",
    } satisfies Bi,
  },

  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://agastahomeo.com",

  /** Digits with country code, no +. Used to build wa.me links. */
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "TODO_WHATSAPP_NUMBER",

  /** Display + tel: form. */
  phone: {
    display: process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? "TODO_PHONE_DISPLAY",
    tel: process.env.NEXT_PUBLIC_PHONE_TEL ?? "TODO_PHONE_TEL",
  },

  email: {
    care: "care@agastahomeo.com",
    careers: "careers@agastahomeo.com",
    /** Required once personal data is collected — DPDP 2023. */
    grievance: "grievance@agastahomeo.com",
  },

  /** Live Google Form URL for doctor applications (never the /edit URL). */
  doctorFormUrl:
    process.env.NEXT_PUBLIC_DOCTOR_FORM_URL ?? "TODO_DOCTOR_FORM_URL",

  /**
   * Hospitals we actually operate. Stays empty until one is open and licensed.
   * A medical company that lists a facility it has not built is the exact
   * failure mode this site is designed to avoid.
   */
  hospitals: [] as Array<{ name: Bi; address: Bi; hours: Bi; mapUrl: string }>,

  /** Printed in the footer once issued. */
  registration: {
    cin: process.env.NEXT_PUBLIC_CIN ?? "TODO_CIN",
    gst: process.env.NEXT_PUBLIC_GST ?? "TODO_GST",
  },

  /**
   * Consent text version written into every lead row. When the wording
   * changes, bump this — that is what makes the consent record defensible.
   */
  consentVersion: "consent_v1_2026-08-23",

  emergencyNumber: "108",
} as const;

/** Fixed interest list. Never a free-text complaint box — blueprint §1. */
export const leadInterests: Array<{ value: string } & Bi> = [
  { value: "adults", hi: "बड़ों की ओपीडी", en: "Adults OPD" },
  { value: "children", hi: "बच्चों के लिए", en: "Children" },
  { value: "women", hi: "महिला स्वास्थ्य", en: "Women's health" },
  { value: "skin", hi: "त्वचा", en: "Skin" },
  { value: "long_term", hi: "पुरानी शिकायत", en: "Long-running complaint" },
  { value: "not_sure", hi: "अभी तय नहीं", en: "Not sure yet" },
];

export const nav: Array<{ href: string } & Bi> = [
  // Doctor recruitment is the site's primary job — it leads the nav.
  { href: "/doctors", hi: "चिकित्सकों के लिए", en: "For doctors" },
  { href: "/homoeopathy", hi: "होम्योपैथी क्या है", en: "Homoeopathy" },
  { href: "/bihar", hi: "बिहार", en: "Bihar" },
  { href: "/about", hi: "हमारे बारे में", en: "About" },
  { href: "/contact", hi: "संपर्क", en: "Contact" },
];

/* claim-lint-ok-start: AGASTA_FOUNDATION_DOC.md §9.3 verbatim. Names the DMRA
   1954 and the word "cure" only to disclaim them — this is the legal notice
   that keeps the rest of the site compliant, not a treatment claim. */
export const disclaimer: Bi = {
  hi: "इस वेबसाइट की सामग्री केवल जन-शिक्षा के लिए है। यह न तो रोग-निदान है और न ही व्यक्तिगत नुस्खा। भारत में होम्योपैथी का अभ्यास केवल राज्य परिषद / राष्ट्रीय होम्योपैथी आयोग में पंजीकृत व्यक्ति ही करते हैं। अगस्ता होमियो ड्रग्स एंड मैजिक रेमेडीज़ (आपत्तिजनक विज्ञापन) अधिनियम, 1954 में सूचीबद्ध रोगों को ठीक करने का दावा नहीं करता। आपात स्थिति में — सीने में दर्द, बेहोशी, तेज़ साँस फूलना, अत्यधिक रक्तस्राव, शिशु को तेज़ बुखार, ज़हर — निकटतम अस्पताल जाएँ या 108 पर कॉल करें।",
  en: "Content on this website is for public education. It is not a diagnosis or a personal prescription. Homoeopathy in India is practised by persons registered with the State Council / National Commission for Homoeopathy. Agasta Homeo does not claim to cure conditions listed under the Drugs and Magic Remedies (Objectionable Advertisements) Act, 1954. In emergency (chest pain, unconsciousness, severe breathlessness, heavy bleeding, high fever in an infant, poisoning) go to the nearest hospital or call 108.",
};
/* claim-lint-ok-end */

export const emergencyLine: Bi = {
  hi: "आपात स्थिति में तुरंत 108 पर कॉल करें या निकटतम अस्पताल जाएँ।",
  en: "In an emergency, call 108 or go to the nearest hospital.",
};

export const pharmacyLine: Bi = {
  hi: "दवा केवल पंजीकृत होम्योपैथिक चिकित्सक से परामर्श के बाद ही लें।",
  en: "Medicines only after consultation with a registered homoeopathic practitioner.",
};
