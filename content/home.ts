import type { Bi } from "./site";

export const hero = {
  eyebrow: {
    hi: "कांगसन वेलनेस प्रा. लि. की होम्योपैथी कंपनी",
    en: "The homoeopathy company of Kangson Wellness Pvt Ltd",
  } satisfies Bi,
  headline: {
    hi: "बिहार के लिए होम्योपैथिक अस्पताल — और उन्हें चलाने वाले चिकित्सक।",
    en: "Homoeopathic hospitals for Bihar — and the doctors who will run them.",
  } satisfies Bi,
  sub: {
    hi: "हम एक क्लिनिक नहीं, एक कंपनी हैं। हम OPD और भर्ती (IPD) — दोनों सुविधाओं वाले अस्पताल बना रहे हैं, और पंजीकृत होम्योपैथिक चिकित्सकों को वेतन पर रख रहे हैं।",
    en: "We are a company, not a single clinic. We are building hospitals with both OPD and inpatient (IPD) care, and putting registered homoeopathic doctors on payroll.",
  } satisfies Bi,
  vision: {
    hi: "ऐसी होम्योपैथी जो बिहार को मिल सके, सस्ती हो, और भरोसे लायक हो — उन चिकित्सकों द्वारा जिन्हें पेशेवर की तरह रखा जाता है।",
    en: "Homoeopathy that Bihar can find, afford, and trust — delivered by doctors who are treated as professionals.",
  } satisfies Bi,
  ctaPrimary: { hi: "चिकित्सक के रूप में आवेदन करें", en: "Apply as a doctor" } satisfies Bi,
  ctaSecondary: { hi: "अस्पताल खुलने पर सूचित करें", en: "Tell me when a hospital opens" } satisfies Bi,
  /**
   * Nothing is open yet and the site must never imply otherwise — the same
   * rule that keeps `site.hospitals` an empty array.
   */
  waitlistNote: {
    hi: "अभी हमारा कोई अस्पताल चालू नहीं है। पहला अस्पताल आपके ज़िले में खुलने पर हम आपको कॉल करेंगे। यह फ़ॉर्म चिकित्सा परामर्श नहीं है।",
    en: "No hospital of ours is open yet. We will call you when the first one opens in your district. This form is not a medical consultation.",
  } satisfies Bi,
};

/**
 * What the company is actually building. Written as a plan, never as an
 * operating facility — see `hero.waitlistNote`.
 */
export const building = {
  title: { hi: "हम क्या बना रहे हैं", en: "What we are building" } satisfies Bi,
  lede: {
    hi: "एक अस्पताल सिर्फ़ कमरा नहीं होता — वह रोस्टर, दवा, रिकॉर्ड और जवाबदेही होता है। हम चारों बना रहे हैं।",
    en: "A hospital is not a room. It is a roster, a pharmacy, a record and a line of accountability. We are building all four.",
  } satisfies Bi,
  pillars: [
    {
      tag: "OPD",
      title: { hi: "बाह्य रोगी विभाग", en: "Outpatient department" },
      body: {
        hi: "रोज़ चलने वाली ओपीडी, जहाँ पहला केस 20–30 मिनट का होता है — दवा का काउंटर नहीं। प्रकाशित फ़ीस, पंजीकृत चिकित्सक, और फ़ॉलो-अप का रजिस्टर।",
        en: "A daily OPD where a first case gets 20–30 minutes — not a medicine counter. Published fees, registered doctors, and a follow-up register.",
      },
    },
    {
      tag: "IPD",
      title: { hi: "भर्ती वार्ड", en: "Inpatient beds" },
      body: {
        hi: "उन मरीज़ों के लिए बिस्तर जिन्हें कुछ दिन निगरानी, नियमित दवा और नर्सिंग की ज़रूरत होती है — और जिन्हें रोज़ घर से आना-जाना कठिन है।",
        en: "Beds for patients who need a few days of observation, regular medication and nursing — and for whom travelling in daily is not realistic.",
      },
    },
    {
      tag: "PHARMACY",
      title: { hi: "लाइसेंस-प्राप्त फ़ार्मेसी", en: "A licensed pharmacy" },
      body: {
        hi: "कंपनी की अपनी या लाइसेंस-प्राप्त साझेदार फ़ार्मेसी — बैच नंबर, एक्सपायरी और भंडारण के नियम के साथ। चिकित्सक पर बिक्री का कोई लक्ष्य नहीं।",
        en: "A company-owned or licensed partner pharmacy, with batch numbers, expiry discipline and storage rules. No sales target on any doctor.",
      },
    },
    {
      tag: "RECORDS",
      title: { hi: "डिजिटल केस रिकॉर्ड", en: "Digital case records" },
      body: {
        hi: "हर मरीज़ का केस, नुस्खा और फ़ॉलो-अप दर्ज — और हर आपात रेफ़रल का अलग रिकॉर्ड, ताकि हम अपनी गिनती ख़ुद प्रकाशित कर सकें।",
        en: "Every case, prescription and follow-up recorded — and every emergency referral logged separately, so we can publish our own counts.",
      },
    },
  ] as Array<{ tag: string; title: Bi; body: Bi }>,
  /** The honesty line that has to sit next to the word "hospital". */
  limit: {
    hi: "साफ़ बात: ये होम्योपैथिक अस्पताल हैं। ये ट्रॉमा सेंटर, आईसीयू या इमरजेंसी वार्ड नहीं हैं। दुर्घटना, सीने में दर्द, बेहोशी या तेज़ रक्तस्राव में 108 पर कॉल करें या निकटतम अस्पताल जाएँ।",
    en: "Said plainly: these are homoeopathic hospitals. They are not trauma centres, ICUs or emergency wards. For an accident, chest pain, unconsciousness or heavy bleeding, call 108 or go to the nearest hospital.",
  } satisfies Bi,
};

/** §8.1 item 2 — trust strip. Every figure carries its source. */
export const trustStrip: Array<Bi & { note: string }> = [
  {
    hi: "3.45 लाख पंजीकृत होम्योपैथिक चिकित्सक",
    en: "3.45 lakh registered homoeopathic doctors",
    note: "PIB, World Homoeopathy Day 2026",
  },
  {
    hi: "आयुष मंत्रालय के अंतर्गत मान्यता प्राप्त पद्धति",
    en: "A recognised system under the Ministry of Ayush",
    note: "Ministry of Ayush, 2014",
  },
  {
    hi: "राष्ट्रीय होम्योपैथी आयोग द्वारा नियमित",
    en: "Regulated by the National Commission for Homoeopathy",
    note: "NCH Act 2020, in force 5 Jul 2021",
  },
  {
    hi: "केवल पंजीकृत चिकित्सक",
    en: "Registered practitioners only",
    note: "State Council / NCH registration on file",
  },
];

/** §8.1 item 3 — three promises. */
export const promises: Array<{ title: Bi; body: Bi }> = [
  {
    title: { hi: "जागरूकता", en: "Awareness" },
    body: {
      hi: "अधिकतर परिवारों ने ‘होम्योपैथी’ शब्द सुना है। बहुत कम ने ऐसे चिकित्सक से मुलाक़ात की है जिसने पूरा केस लिया हो।",
      en: "Most families have heard the word homoeopathy. Few have met a doctor who took a full case.",
    },
  },
  {
    title: { hi: "ईमानदार देखभाल", en: "Honest care" },
    body: {
      hi: "हम बताते हैं कि होम्योपैथी कब मदद करती है — और कब सीधे अस्पताल जाना है।",
      en: "We say plainly when homoeopathy helps, and when you should go straight to a hospital.",
    },
  },
  {
    title: { hi: "चिकित्सक जो टिकते हैं", en: "Doctors who stay" },
    body: {
      hi: "तय रोस्टर, तय तनख़्वाह की तारीख़, और दवा बेचने का कोई लक्ष्य नहीं। ऐसा अस्पताल जहाँ आप अपने परिवार को भेजें।",
      en: "A fixed roster, a salary date you can count on, and no medicine-sale quota. A hospital you would send your own family to.",
    },
  },
];

/**
 * §8.1 item 4 / §3.3 left column — "People often visit us for…"
 * Never phrased as a treatment claim — see AGASTA_FOUNDATION_DOC.md §3.3.
 */
export const visitReasons: Bi[] = [
  { hi: "बार-बार सर्दी, छींक, पुरानी साइनस की शिकायत", en: "Recurrent cold, allergic sneeze, chronic sinus picture" },
  { hi: "गैस-अम्लता, कब्ज़ या पतले दस्त का पुराना पैटर्न", en: "Functional acidity, constipation or loose-stool pattern" },
  { hi: "तनाव या माइग्रेन जैसा सिरदर्द, जिसके कारण पहचाने हों", en: "Tension or migraine pattern with known triggers" },
  { hi: "एक्ज़िमा, पित्ती, मुँहासे (बिना संक्रमण के)", en: "Eczema, urticaria, acne (non-infected)" },
  { hi: "जोड़ों की जकड़न, शुरुआती घिसाव का दर्द", en: "Joint stiffness, early wear-and-tear pain" },
  { hi: "घबराहट, नींद की दिक़्क़त, परीक्षा का तनाव", en: "Anxiety-somatic pictures, sleep, exam stress" },
  { hi: "माहवारी में दर्द या अनियमितता — जाँच की योजना के साथ", en: "Painful or irregular periods, alongside an ultrasound plan" },
  { hi: "बार-बार पेशाब में जलन — कल्चर जाँच के साथ", en: "Recurrent urinary symptoms, with a culture protocol" },
  { hi: "पहले से ज्ञात बीपी या शुगर में जीवनशैली सहयोग — आपके चिकित्सक के साथ-साथ", en: "Lifestyle support in known BP or sugar, alongside your treating physician" },
];

export const visitReasonsNote: Bi = {
  hi: "यह सूची इसलिए है कि लोग आमतौर पर इन्हीं शिकायतों के साथ आते हैं। यह परिणाम का वादा नहीं है, और हर मामले में पहले पूरा केस लिया जाता है।",
  en: "This is a list of why people usually come to us. It is not a promise of results, and every case is taken in full first.",
};

/** §8.1 item 5 — Bihar module. Four numbers, each with a source and year. */
export const biharStats: Array<{ value: string; label: Bi; source: string }> = [
  {
    value: "12.49 करोड़",
    label: { hi: "बिहार की अनुमानित जनसंख्या", en: "Bihar's projected population" },
    source: "CAG Performance Audit, Bihar (Mar 2022 projection)",
  },
  {
    value: "1 : 2,148",
    label: { hi: "एक एलोपैथिक डॉक्टर पर इतने लोग", en: "People per available allopathic doctor" },
    source: "CAG Performance Audit, Bihar, Report No. 4 (2024)",
  },
  {
    value: "82%",
    label: { hi: "आयुष निदेशालय के पद रिक्त", en: "AYUSH directorate posts lying vacant" },
    source: "CAG Performance Audit, Bihar (4,017 of 4,870)",
  },
  {
    value: "294",
    label: { hi: "आयुष्मान आरोग्य मंदिर (आयुष), बिहार", en: "Ayushman Arogya Mandir (Ayush) in Bihar" },
    source: "Lok Sabha USQ AU946",
  },
];

export const biharBlurb: Bi = {
  hi: "बिहार में बारह करोड़ से अधिक लोग हैं और डॉक्टर बहुत कम। सरकारी आयुष सेवाएँ बढ़ रही हैं। अगस्ता होमियो इसमें एक निजी, जवाबदेह अस्पताल नेटवर्क जोड़ रहा है — OPD और भर्ती दोनों, प्रकाशित फ़ीस, वेतन पर पंजीकृत चिकित्सक, और एक जन-अभियान ताकि हर प्रखंड जाने कि होम्योपैथी क्या है, और क्या नहीं है।",
  en: "Bihar has more than twelve crore people and too few doctors. Government AYUSH services are expanding. Agasta Homeo is adding a private, accountable hospital network — OPD and inpatient both, published fees, registered doctors on payroll, and a public campaign so every block knows what homoeopathy is and what it is not.",
};

export const biharMeasure: Bi = {
  hi: "हमारा असर मरीज़ों की संख्या, टिके हुए चिकित्सकों और सही समय पर भेजे गए आपात रेफ़रल से नापा जाएगा — नारों से नहीं।",
  en: "Our impact will be measured in patients seen, doctors retained, and emergencies correctly referred — not in slogans.",
};

/** §8.1 item 6 — a doctor's minute. Condensed from §2.2. */
export const doctorsMinute: Array<{ step: string; title: Bi; body: Bi }> = [
  {
    step: "01",
    title: { hi: "सुनना", en: "Listen" },
    body: {
      hi: "शिकायत आपके अपने शब्दों में। क्या बढ़ाता है, क्या घटाता है — समय, मौसम, खाना, आराम।",
      en: "The complaint in your own words. What makes it better or worse — time, weather, food, rest.",
    },
  },
  {
    step: "02",
    title: { hi: "व्यक्ति को देखना", en: "Individualise" },
    body: {
      hi: "भूख, प्यास, नींद, पसीना, मन। एक ही रोग-नाम वाले दो लोगों को अलग औषधि मिल सकती है।",
      en: "Appetite, thirst, sleep, sweat, mind. Two people with the same disease name may receive different medicines.",
    },
  },
  {
    step: "03",
    title: { hi: "न्यूनतम मात्रा", en: "Minimum dose" },
    body: {
      hi: "एक या कुछ सोच-समझकर चुनी गई औषधि, लाइसेंस-प्राप्त फ़ार्मेसी से — पोटेंसी और दोहराव समझाकर।",
      en: "One or a few carefully chosen medicines from a licensed pharmacy, with the potency and repetition explained.",
    },
  },
  {
    step: "04",
    title: { hi: "फ़ॉलो-अप", en: "Follow-up" },
    body: {
      hi: "होम्योपैथी हफ़्तों की बातचीत है, एक पुड़िया की घटना नहीं। और ज़रूरत पड़ने पर जाँच या अस्पताल के लिए रेफ़रल।",
      en: "Homoeopathy is a conversation over weeks, not a one-sachet event — with referral for labs or hospital when needed.",
    },
  },
];

export const firstVisitPromise: Bi = {
  hi: "आपकी पहली मुलाक़ात एक केस है, क़तार का नंबर नहीं।",
  en: "Your first visit is a case, not a queue number.",
};

/* claim-lint-ok-start: AGASTA_FOUNDATION_DOC.md §3.2 verbatim. The banned
   words appear only inside the sentence that disclaims them — removing them
   would remove the honesty this brand is built on. */
export const prosBlock: Bi = {
  hi: "होम्योपैथी भारत की मान्यता प्राप्त चिकित्सा पद्धतियों में से एक है। अगस्ता होमियो का चिकित्सक सिर्फ़ रिपोर्ट नहीं, पूरा व्यक्ति देखता है और न्यूनतम मात्रा में औषधि देता है। परिवार हमें इसलिए चुनते हैं क्योंकि दवाई आमतौर पर मृदु होती है, समय मिलता है, और रोज़मर्रा तथा पुरानी कई शिकायतों में बिना हर बुखार को पाँच एंटीबायोटिक बनाए साथ चला जा सकता है।",
  en: "Homoeopathy is one of India's recognised medical systems. An Agasta Homeo doctor studies you — not only your lab printout — and prescribes a minimum dose from the homoeopathic pharmacopoeia. Families choose us because the medicines are generally gentle, the visits are unhurried, and many everyday and long-running complaints can be walked with, without turning every fever into a five-antibiotic story.",
};

export const prosLimit: Bi = {
  hi: "हम यह भी साफ़ कहते हैं — हम इमरजेंसी वार्ड नहीं हैं, ज़रूरी अस्पताल इलाज छोड़ने को नहीं कहते, और चमत्कार का विज्ञापन नहीं करते।",
  en: "We are equally clear about what we are not: we are not an emergency ward, we do not ask you to abandon necessary hospital treatment, and we do not advertise miracle cures.",
};
/* claim-lint-ok-end */

export const careersTeaser = {
  headline: { hi: "आप चिकित्सा कीजिए। अस्पताल हम चलाएँगे।", en: "Practise homoeopathy. We will run the hospital." } satisfies Bi,
  body: {
    hi: "BHMS · MD (होम्यो) · DHMS — OPD और भर्ती वार्ड, दोनों के लिए। पूर्णकालिक, अंशकालिक और विज़िटिंग भूमिकाएँ। तय रोस्टर, नियुक्ति पत्र, तय तनख़्वाह की तारीख़, CME, और दवा बेचने का कोई लक्ष्य नहीं।",
    en: "BHMS · MD (Hom) · DHMS — for both OPD and the inpatient ward. Full-time, part-time and visiting roles. A fixed roster, an appointment letter, a salary date you can count on, CME, and no medicine-sale quota.",
  } satisfies Bi,
  note: {
    hi: "हम एक-एक करके अस्पताल खोल रहे हैं, इसलिए भर्ती लगातार चलती रहेगी। अभी आवेदन कर दीजिए — जगह खुलते ही हम आपसे बात करेंगे।",
    en: "We are opening hospitals one at a time, so hiring runs continuously. Apply now — we will talk to you as roles open.",
  } satisfies Bi,
  cta: { hi: "आवेदन फ़ॉर्म खोलें", en: "Open the application form" } satisfies Bi,
};
