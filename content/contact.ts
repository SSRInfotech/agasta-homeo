import type { Bi } from "./site";

export const intro = {
  title: { hi: "संपर्क", en: "Contact" } satisfies Bi,
  lede: {
    hi: "हमारा पहला अस्पताल पटना में खुल चुका है। व्हाट्सएप या फ़ोन पर बात कीजिए — या, अगर आप पटना से बाहर हैं, नीचे नाम लिख दीजिए, आपके ज़िले में अस्पताल खुलने पर हम कॉल करेंगे।",
    en: "Our first hospital is open in Patna. Reach us on WhatsApp or phone — or, if you are outside Patna, leave your name below and we will call you when one opens in your district.",
  } satisfies Bi,
};

/** `site.hospitals` holds the real entry (Patna, open 2026-09-13). Street
 *  address and hours are still TODO_ there — this line is the honest
 *  placeholder shown until those land, not a guessed address. */
export const hospitalStatus: Bi = {
  hi: "पटना अस्पताल का पूरा पता और समय जल्द जोड़ा जाएगा। तब तक रास्ता जानने के लिए व्हाट्सएप या फ़ोन पर पूछिए। पटना से बाहर अभी कोई अस्पताल चालू नहीं है।",
  en: "The Patna hospital's full address and hours will be added shortly. Until then, ask us on WhatsApp or phone for directions. Outside Patna, none of ours is open yet.",
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
