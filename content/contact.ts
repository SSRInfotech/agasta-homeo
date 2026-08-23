import type { Bi } from "./site";

export const intro = {
  title: { hi: "संपर्क", en: "Contact" } satisfies Bi,
  lede: {
    hi: "हमारा पहला अस्पताल तैयार हो रहा है। तब तक व्हाट्सएप या फ़ोन पर बात कीजिए — या नीचे नाम लिख दीजिए, अस्पताल खुलने पर हम कॉल करेंगे।",
    en: "Our first hospital is being set up. Until then, reach us on WhatsApp or phone — or leave your name below and we will call you when one opens near you.",
  } satisfies Bi,
};

export const noHospitalYet: Bi = {
  hi: "अभी कोई अस्पताल पता प्रकाशित नहीं है, क्योंकि अभी कोई खुला नहीं है। हम यहाँ काल्पनिक पता नहीं लिखेंगे।",
  en: "No hospital address is published yet, because none is open yet. We will not print an address that does not exist.",
};

/** §9.4 — WhatsApp first-reply templates. The desk never prescribes. */
export const whatsappTemplates = {
  patient: "नमस्ते, मेरा नाम ___ है, उम्र ___, शहर ___। मुझे अगस्ता होमियो के अस्पताल की जानकारी चाहिए।",
  doctor: "नमस्ते, मैं BHMS/MD हूँ। पंजीकरण संख्या ___, शहर ___, पूर्णकालिक/विज़िटिंग ___।",
};

export const deskRule: Bi = {
  hi: "हमारा व्हाट्सएप डेस्क अपॉइंटमेंट, समय, रास्ता और फ़ीस बताता है। वह दवा नहीं बताता — नुस्खा केवल पंजीकृत चिकित्सक, केस लेने के बाद देता है।",
  en: "Our WhatsApp desk handles appointments, timings, directions and fees. It does not prescribe — a prescription comes only from a registered doctor, after a case is taken.",
};

export const privacyPromise: Bi = {
  hi: "हम किसी मरीज़ की कहानी या तस्वीर बिना लिखित सहमति के प्रकाशित नहीं करते।",
  en: "We do not publish patient stories or photographs without written consent.",
};
