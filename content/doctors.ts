import type { Bi } from "./site";

export const intro = {
  headline: { hi: "आप चिकित्सा कीजिए। अस्पताल हम चलाएँगे।", en: "Practise homoeopathy. We will run the hospital." } satisfies Bi,
  lede: {
    hi: "अगस्ता होमियो एक कंपनी है जो बिहार में होम्योपैथिक अस्पताल बना और चला रही है — OPD और भर्ती वार्ड, दोनों। हम चिकित्सकों को वेतन पर रखते हैं।\n\nबिहार में BHMS की सच्चाई: बिना वेतन के ‘ऑब्ज़र्वर’ साल, कमाई सिर्फ़ दवा के मार्जिन से, न PF, न CME, और एक सरकारी परीक्षा का इंतज़ार जो दशक भर खिंच सकता है। हम इसके उलट बनाना चाहते हैं।",
    en: "Agasta Homeo is a company building and running homoeopathic hospitals in Bihar — OPD and inpatient both. We put doctors on payroll.\n\nThe BHMS reality in Bihar: unpaid observer years, income only from medicine margin, no PF, no CME, and a wait for a government post that can take a decade. We are trying to build the opposite.",
  } satisfies Bi,
};

/** §6.1 — publish a promise only if operations can keep it. */
export const evp: Array<{ promise: Bi; monday: Bi }> = [
  {
    promise: { hi: "नैदानिक गरिमा", en: "Clinical dignity" },
    monday: { hi: "पहले केस के लिए 20–30 मिनट का स्लॉट। ‘प्रति घंटे बारह मरीज़’ जैसा कोई लक्ष्य नहीं।", en: "20–30 minute first-case slots. No “twelve patients an hour” KPI." },
  },
  {
    promise: { hi: "बिक्री का कोई दबाव नहीं", en: "No forced sales" },
    monday: { hi: "एक छोटी फ़ॉर्मुलरी से नुस्खा; फ़ार्मेसी कंपनी की या लाइसेंस-प्राप्त साझेदार की। चिकित्सक सेल्समैन नहीं है।", en: "Prescription from a short formulary; the pharmacy is company-owned or a licensed partner. The doctor is not a salesman." },
  },
  {
    promise: { hi: "तनख़्वाह की तारीख़", en: "A salary date" },
    monday: { hi: "तय तारीख़ को खाते में, ग्रेड सहित नियुक्ति पत्र के साथ।", en: "Credited on a fixed date, with an offer letter and a grade." },
  },
  {
    promise: { hi: "पंजीकरण का सम्मान", en: "Registration respected" },
    monday: { hi: "बोर्ड पर केवल NCH / राज्य परिषद के नंबर। नवीनीकरण की याद हम दिलाते हैं।", en: "Only NCH / State Council numbers on the board. We pay for renewal reminders." },
  },
  {
    promise: { hi: "CME", en: "CME" },
    monday: { hi: "मासिक केस कॉन्फ़्रेंस, और हर तिमाही एक NCH/CCRH वेबिनार।", en: "A monthly case conference, and one NCH/CCRH webinar a quarter." },
  },
  {
    promise: { hi: "रेफ़रल नेटवर्क", en: "A referral network" },
    monday: { hi: "लिखित सूची — कौन सा MBBS, कौन सी लैब, बच्चों की कौन सी इमरजेंसी।", en: "A written list: which MBBS, which lab, which paediatric emergency." },
  },
  {
    promise: { hi: "औज़ार", en: "Tools" },
    monday: { hi: "केस शीट, फ़ॉलो-अप रजिस्टर, और एक व्हाट्सएप डेस्क जो नुस्खा नहीं देती।", en: "A case sheet, a follow-up register, and a WhatsApp desk that does not prescribe." },
  },
  {
    promise: { hi: "आगे बढ़ने का रास्ता", en: "Growth" },
    monday: { hi: "रेज़िडेंट → कंसल्टेंट → इन-चार्ज → ज़िला क्लिनिकल लीड।", en: "Resident → Consultant → In-charge → District clinical lead." },
  },
  {
    promise: { hi: "जगह के बारे में सच", en: "Location honesty" },
    monday: { hi: "‘बिहार में कहीं भी जाने को तैयार?’ — यह असली सवाल है, और हम इसे छिपाते नहीं।", en: "“Open to anywhere in Bihar?” is a real question, and we do not hide it." },
  },
];

export const offer: Bi[] = [
  { hi: "पूर्णकालिक, अंशकालिक और विज़िटिंग कंसल्टेंट भूमिकाएँ", en: "Full-time, part-time and visiting consultant roles" },
  { hi: "OPD और भर्ती वार्ड — दोनों का अनुभव, एक ही संस्थान में", en: "Experience across both OPD and the inpatient ward, in one institution" },
  { hi: "NCH पात्रता के अनुसार BHMS / MD (होम्यो) / DHMS", en: "BHMS / MD (Hom) / DHMS as per NCH eligibility" },
  { hi: "व्यवस्थित ओपीडी — दवा का काउंटर नहीं", en: "A structured OPD, not a medicine counter" },
  { hi: "सीखना: वरिष्ठ चिकित्सकों के साथ केस समीक्षा", en: "Learning: case reviews with seniors" },
  { hi: "स्थिरता: नियुक्ति पत्र, छुट्टी, और ऐसी तनख़्वाह जो आप घर बता सकें", en: "Stability: an appointment letter, leave, and a salary you can tell your family about" },
  { hi: "मिशन: जिस भी ज़िले में जाएँ, वहाँ होम्योपैथी को समझा हुआ छोड़ें", en: "Mission: make homoeopathy understood in every district we enter" },
];

/** §6.1 "Growth" row, as a standalone visual ladder. */
export const growthLadder: Bi[] = [
  { hi: "रेज़िडेंट", en: "Resident" },
  { hi: "कंसल्टेंट", en: "Consultant" },
  { hi: "इन-चार्ज", en: "In-charge" },
  { hi: "ज़िला क्लिनिकल लीड", en: "District clinical lead" },
];

export const applyCta = {
  title: { hi: "आवेदन कैसे करें", en: "How to apply" } satisfies Bi,
  body: {
    hi: "फ़ॉर्म भरने में 4–5 मिनट लगते हैं और यह फ़ोन पर आसानी से भर जाता है। पहले फ़ॉर्म भरें — CV बाद में व्हाट्सएप पर भेजें।",
    en: "The form takes 4–5 minutes and works well on a phone. Fill the form first — send your CV on WhatsApp afterwards.",
  } satisfies Bi,
  button: { hi: "चिकित्सक आवेदन फ़ॉर्म खोलें", en: "Open the doctor application form" } satisfies Bi,
  whatsappTemplate: "नमस्ते, मैं BHMS/MD हूँ। पंजीकरण संख्या: ___, शहर: ___, पूर्णकालिक/विज़िटिंग: ___",
};
