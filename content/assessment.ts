import type { Bi } from "./site";

/**
 * "अपनी स्थिति समझें" — a short, client-side triage check, not a diagnosis
 * tool. Modelled on the self-select → short-questions → next-step pattern
 * proven by lifeforce.in's Assessment Test (see
 * app-doc/agasta-homeo/AGASTA_LIFEFORCE_BENCHMARK.md §2.3), but the ending
 * is deliberately different: Life Force ends in a "scope of improvement"
 * percentage, which this brand cannot say — see AGASTA_FOUNDATION_DOC.md
 * §11 and scripts/claim-lint.mjs. This tool never estimates an outcome. It
 * only sorts a visitor into "worth a first conversation" or "go to a
 * hospital today," using the same left/right columns as §3.3.
 *
 * Nothing typed here is sent anywhere. The result screen offers the two
 * lead paths the tech blueprint already defines — a WhatsApp template (no
 * symptom detail, matching content/contact.ts's whatsappTemplates) and the
 * existing waitlist LeadForm (which already refuses free-text symptoms).
 */

export const assessmentIntro = {
  eyebrow: "३ छोटे सवाल · कोई साइन-अप नहीं",
  title: { hi: "अपनी स्थिति समझें", en: "Understand your condition" } satisfies Bi,
  lede: {
    hi: "एक शिकायत चुनें और तीन छोटे सवालों के जवाब दें। यह बताएगा कि यह पहली होम्योपैथिक बातचीत के लिए ठीक जगह है, या आज ही अस्पताल जाना बेहतर है। यह निदान नहीं है, और कुछ भी सहेजा या भेजा नहीं जाता जब तक आप ख़ुद न चुनें।",
    en: "Pick a complaint and answer three short questions. It tells you whether this looks like a reasonable first homoeopathic conversation, or whether today calls for a hospital instead. This is not a diagnosis, and nothing is saved or sent unless you choose to.",
  } satisfies Bi,
};

export type ConditionId = "cold" | "gut" | "migraine" | "skin" | "joint" | "sleep";

export type Condition = {
  id: ConditionId;
  icon: "droplet" | "flask" | "fingerprint" | "leaf" | "wrench" | "handHeart";
  title: Bi;
  /** The condition-specific red-flag question — §3.3 "refer today" column. */
  flagQuestion: Bi;
  flagYes: Bi;
  flagNo: Bi;
};

/** Same six complaints as content/home.ts `visitReasons`, phrased as short card titles. */
export const conditions: Condition[] = [
  {
    id: "cold",
    icon: "droplet",
    title: { hi: "बार-बार सर्दी, एलर्जी, साइनस", en: "Recurrent cold, allergy, sinus" },
    flagQuestion: {
      hi: "क्या साँस लेने में तकलीफ़ या घरघराहट (सीटी जैसी आवाज़) हो रही है?",
      en: "Is there breathing difficulty or a whistling sound (wheeze)?",
    },
    flagYes: { hi: "हाँ, साँस फूलती है या घरघराहट है", en: "Yes, breathless or wheezing" },
    flagNo: { hi: "नहीं, ऐसा कुछ नहीं", en: "No, nothing like that" },
  },
  {
    id: "gut",
    icon: "flask",
    title: { hi: "गैस, अम्लता, पाचन", en: "Gas, acidity, digestion" },
    flagQuestion: {
      hi: "क्या काली उल्टी, पेट में बहुत तेज़ अकड़न, या आँखों में पीलापन के साथ भ्रम है?",
      en: "Is there black vomit, severe abdominal rigidity, or yellow eyes with confusion?",
    },
    flagYes: { hi: "हाँ, इनमें से कोई एक है", en: "Yes, one of these" },
    flagNo: { hi: "नहीं, ऐसा कुछ नहीं", en: "No, nothing like that" },
  },
  {
    id: "migraine",
    icon: "fingerprint",
    title: { hi: "सिरदर्द, माइग्रेन पैटर्न", en: "Headache, migraine pattern" },
    flagQuestion: {
      hi: "क्या अचानक बहुत तेज़ सिरदर्द, शरीर के एक तरफ़ कमज़ोरी, या दौरा हुआ है?",
      en: "Was there a sudden very severe headache, one-sided weakness, or a seizure?",
    },
    flagYes: { hi: "हाँ, इनमें से कोई एक है", en: "Yes, one of these" },
    flagNo: { hi: "नहीं, ऐसा कुछ नहीं", en: "No, nothing like that" },
  },
  {
    id: "skin",
    icon: "leaf",
    title: { hi: "त्वचा — एग्ज़िमा, पित्ती, मुँहासे", en: "Skin — eczema, hives, acne" },
    flagQuestion: {
      hi: "क्या लालिमा बहुत तेज़ी से फैल रही है, मवाद है, या साथ में तेज़ बुखार है?",
      en: "Is redness spreading very fast, is there pus, or a high fever with it?",
    },
    flagYes: { hi: "हाँ, इनमें से कोई एक है", en: "Yes, one of these" },
    flagNo: { hi: "नहीं, ऐसा कुछ नहीं", en: "No, nothing like that" },
  },
  {
    id: "joint",
    icon: "wrench",
    title: { hi: "जोड़ों की जकड़न, दर्द", en: "Joint stiffness, pain" },
    flagQuestion: {
      hi: "क्या एक जोड़ अचानक गर्म और सूजा हुआ है, या यह किसी चोट के बाद शुरू हुआ?",
      en: "Is one joint suddenly hot and swollen, or did this start after an injury?",
    },
    flagYes: { hi: "हाँ", en: "Yes" },
    flagNo: { hi: "नहीं", en: "No" },
  },
  {
    id: "sleep",
    icon: "handHeart",
    title: { hi: "घबराहट, नींद, तनाव", en: "Anxiety, sleep, stress" },
    flagQuestion: {
      hi: "क्या आत्महत्या का विचार आ रहा है, या नशा छोड़ने पर तेज़ कंपन-बेचैनी हो रही है?",
      en: "Is there suicidal thought, or severe tremor/agitation from stopping an addictive substance?",
    },
    flagYes: { hi: "हाँ", en: "Yes" },
    flagNo: { hi: "नहीं", en: "No" },
  },
];

export const durationQuestion: Bi = {
  hi: "यह शिकायत कब से है?",
  en: "How long has this been going on?",
};

export const durationOptions: Bi[] = [
  { hi: "एक हफ़्ते से कम", en: "Less than a week" },
  { hi: "कुछ हफ़्तों से", en: "A few weeks" },
  { hi: "कई महीनों से", en: "Several months" },
  { hi: "यह बार-बार होता रहता है", en: "It keeps recurring" },
];

export const dualCareQuestion: Bi = {
  hi: "क्या आप गर्भवती हैं, या पहले से कोई बड़ी दवा (जैसे इंसुलिन, बीपी की दवा) ले रहे हैं?",
  en: "Are you pregnant, or already on a major medicine (like insulin or a BP medicine)?",
};

export const dualCareOptions: { value: "yes" | "no" } & { label: Bi } = {
  value: "yes",
  label: { hi: "हाँ", en: "Yes" },
};

export const resultSafe = {
  title: { hi: "यह पहली बातचीत के लिए ठीक जगह है", en: "This looks like a reasonable first conversation" } satisfies Bi,
  body: {
    hi: "आपके जवाबों में कोई तुरंत ख़तरे की बात नहीं दिखी। यह एक ऐसा मामला है जिसके साथ लोग आमतौर पर हमारे पास आते हैं — अगला क़दम एक चिकित्सक से बात करना है, जो पूरा केस लेकर बताएँगे।",
    en: "Nothing in your answers points to an immediate danger. This is the kind of case people usually bring to us — the next step is a conversation with a doctor, who will take your full case before saying anything more.",
  } satisfies Bi,
};

export const resultUrgent = {
  title: { hi: "आज ही अस्पताल जाएँ — इंतज़ार न करें", en: "Go to a hospital today — do not wait" } satisfies Bi,
  body: {
    hi: "आपके जवाब में एक चेतावनी लक्षण है। यह होम्योपैथी ओपीडी का मामला नहीं, आज ही अस्पताल जाने का मामला है।",
    en: "One of your answers is a red-flag symptom. This is not something to bring to a homoeopathy OPD — it needs a hospital today.",
  } satisfies Bi,
};

export const resultDualCareNote: Bi = {
  hi: "यह भी ज़रूर बताएँ: आप गर्भवती हैं या पहले से बड़ी दवा ले रहे हैं। चिकित्सक इसे केस लेते समय ध्यान में रखेंगे — इसके लिए कोई भी चालू दवा ख़ुद बंद न करें।",
  en: "Also mention this when you talk to the doctor: you are pregnant or already on a major medicine. They will factor it in while taking your case — do not stop any running medicine on your own.",
};

export const resultDisclaimer: Bi = {
  hi: "यह एक संकेत है, निदान नहीं। यह न बताता है कि क्या ठीक होगा, न कोई प्रतिशत — यह केवल इतना बताता है कि अगला क़दम एक चिकित्सक है या एक अस्पताल।",
  en: "This is a signal, not a diagnosis. It does not say what will get better, or by how much — it only says whether the next step is a doctor or a hospital.",
};

/** Static templates, one per condition — same convention as content/contact.ts
 *  `whatsappTemplates`: a category name only, filled-in blanks, no symptom
 *  detail. The WhatsApp desk gives appointment/fee information; a doctor
 *  takes the actual case. */
export function conditionWhatsAppTemplate(condition: Condition): string {
  return `नमस्ते, मैंने वेबसाइट पर "${condition.title.hi}" के बारे में जानकारी ली। मुझे इस बारे में बात करनी है। मेरा नाम ___, उम्र ___, शहर ___।`;
}

export const restartLabel: Bi = { hi: "दोबारा शुरू करें", en: "Start again" };
export const backLabel: Bi = { hi: "पीछे", en: "Back" };
