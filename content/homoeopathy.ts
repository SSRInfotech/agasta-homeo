import type { Bi } from "./site";

export const intro = {
  title: { hi: "होम्योपैथी क्या है", en: "What homoeopathy is" } satisfies Bi,
  lede: {
    hi: "दो सौ साल पुरानी पद्धति, जो आज भारत में एक मंत्रालय, एक आयोग और एक शोध परिषद के अंतर्गत आती है।",
    en: "A two-hundred-year-old method that today sits under an Indian ministry, a commission and a research council.",
  } satisfies Bi,
};

export const history: Array<{ title: Bi; body: Bi }> = [
  {
    title: { hi: "1796 — शुरुआत", en: "1796 — the beginning" },
    body: {
      hi: "जर्मन चिकित्सक डॉ. सैमुअल हैनीमैन (1755–1843) ने इसे व्यवस्थित रूप दिया। उनकी पुस्तक ‘ऑर्गेनन ऑफ़ मेडिसिन’ आज भी अभ्यास की पाठ्यपुस्तक है।",
      en: "The German physician Dr Christian Friedrich Samuel Hahnemann (1755–1843) formalised it. His Organon of Medicine is still the practice text.",
    },
  },
  {
    title: { hi: "1839 — भारत में पहचान", en: "1839 — recognition in India" },
    body: {
      hi: "जॉन मार्टिन हॉनिगबर्गर द्वारा महाराजा रणजीत सिंह का उपचार वह प्रसंग है जिसने इस पद्धति को भारत में परिचित बनाया। 1847 में तंजौर में शुरुआती अस्पताल; बंगाल में महेंद्र लाल सरकार ने इसे बौद्धिक प्रतिष्ठा दी।",
      en: "John Martin Honigberger's treatment of Maharaja Ranjit Singh is the episode that made the system familiar in India. An early hospital at Tanjore followed in 1847; in Bengal, Mahendra Lal Sircar gave it intellectual standing.",
    },
  },
  {
    title: { hi: "1978 — शोध परिषद", en: "1978 — a research council" },
    body: {
      hi: "केंद्रीय होम्योपैथी अनुसंधान परिषद (CCRH) की स्थापना। आज इसके अंतर्गत 33 संस्थान/इकाइयाँ हैं।",
      en: "The Central Council for Research in Homoeopathy (CCRH) was established. It today runs 33 institutes and units.",
    },
  },
  {
    title: { hi: "2014 और 2021 — आज की व्यवस्था", en: "2014 and 2021 — today's framework" },
    body: {
      hi: "2014 में आयुष मंत्रालय बना। राष्ट्रीय होम्योपैथी आयोग अधिनियम, 2020 (5 जुलाई 2021 से प्रभावी) ने 1973 की परिषद की जगह ली — कॉलेज, आचार-संहिता और राष्ट्रीय रजिस्टर का आधुनिक नियामक।",
      en: "The Ministry of Ayush was created in 2014. The National Commission for Homoeopathy Act, 2020 (in force 5 July 2021) replaced the 1973 council as the modern regulator for colleges, ethics and the national register.",
    },
  },
];

export const principles: Array<{ n: string; title: Bi; body: Bi }> = [
  {
    n: "I",
    title: { hi: "समान से समान — Similia similibus curentur", en: "Like with like — Similia similibus curentur" },
    body: {
      hi: "जो पदार्थ किसी स्वस्थ व्यक्ति में लक्षणों का एक समूह पैदा कर सकता है, वही सावधानी से तैयार किए गए होम्योपैथिक रूप में, वैसे ही लक्षण-चित्र वाले रोगी में प्रयोग किया जा सकता है।",
      en: "A substance that can produce a set of symptoms in a healthy person may, in a carefully prepared homoeopathic form, be used for a sick person who presents a similar picture.",
    },
  },
  {
    n: "II",
    title: { hi: "न्यूनतम मात्रा", en: "The minimum dose" },
    body: {
      hi: "औषधियाँ पौधों, खनिजों और प्राणिज स्रोतों से क्रमिक तनुकरण और आघात (पोटेंटाइज़ेशन) द्वारा बनाई जाती हैं, और गोली, ग्लोब्यूल या तरल रूप में दी जाती हैं — भौतिक मात्रा कम रखते हुए।",
      en: "Medicines are prepared from plant, mineral and animal sources by serial dilution and succussion (potentisation), and given as globules, tablets or liquids, keeping the material dose small.",
    },
  },
  {
    n: "III",
    title: { hi: "व्यक्ति-विशेषता", en: "Individualisation" },
    body: {
      hi: "एक ही रोग-नाम वाले दो लोगों को अलग औषधि मिल सकती है, क्योंकि नींद, प्यास, डर, माहवारी, मौसम से बढ़ना — यह सब नुस्खे का हिस्सा है। इसीलिए चार मिनट की काउंटर-बिक्री होम्योपैथी नहीं है।",
      en: "Two people with the same disease name may receive different medicines, because sleep, thirst, fear, menses and weather aggravation are all part of the prescription. This is why a four-minute counter sale is not homoeopathy.",
    },
  },
];

export const firstVisit: Array<Bi> = [
  { hi: "आपकी शिकायत, आपके अपने शब्दों में", en: "Your chief complaint, in your own words" },
  { hi: "क्या बढ़ाता है, क्या घटाता है — समय, मौसम, खाना, आराम", en: "Modalities — what makes it better or worse: time, weather, food, rest" },
  { hi: "सामान्य लक्षण — भूख, प्यास, नींद, पसीना, गर्मी-ठंड", en: "Generals — appetite, thirst, sleep, sweat, temperature" },
  { hi: "मन — घबराहट, शोक, चिड़चिड़ापन, भय (सम्मान के साथ पूछा जाता है)", en: "Mind — anxiety, grief, irritability, fear, taken respectfully" },
  { hi: "पिछला और पारिवारिक इतिहास, और अभी चल रही दवाएँ", en: "Past and family history, and the medicines already running" },
  { hi: "परीक्षण, और ज़रूरत हो तो जाँच या एलोपैथिक आपात सेवा के लिए रेफ़रल", en: "Examination and, when needed, referral for labs or allopathic emergency" },
  { hi: "एक या कुछ सोच-समझकर चुनी गई औषधि — पोटेंसी और दोहराव समझाकर", en: "One or a few carefully chosen medicines, with potency and repetition explained" },
  { hi: "फ़ॉलो-अप — यह हफ़्तों की बातचीत है", en: "Follow-up — this is a conversation over weeks" },
];

export const pharmacy = {
  title: { hi: "औषधियाँ कैसे बनती हैं", en: "How the medicines are made" } satisfies Bi,
  body: {
    hi: "होम्योपैथिक औषधियाँ भारत में ड्रग्स एंड कॉस्मेटिक्स अधिनियम के तहत बनती हैं, और उनके मानक भारतीय चिकित्सा पद्धति एवं होम्योपैथी फ़ार्माकोपिया आयोग (PCIM&H) तय करता है। देश में लगभग 384 लाइसेंस-प्राप्त निर्माता और 1,117 फ़ार्माकोपियल मोनोग्राफ़ हैं। दवा केवल लाइसेंस-प्राप्त फ़ार्मेसी से ही लें — सड़क पर बिकने वाले अनजान उत्पाद नहीं।",
    en: "Homoeopathic medicines in India are manufactured under the Drugs and Cosmetics Act, to standards set by the Pharmacopoeia Commission for Indian Medicine & Homoeopathy (PCIM&H). The country has about 384 licensed manufacturers and 1,117 pharmacopoeial monographs. Buy only from licensed pharmacies — never unlabelled street products.",
  } satisfies Bi,
  source: "Ayush Vaibhav, Vol. 7, July 2025",
};

/** §4.2 — quote the existence of Indian research, never a claimed rate of results. */
export const research: Array<{ topic: Bi; claim: Bi; source: string }> = [
  {
    topic: { hi: "फ़्लू जैसी बीमारी (ILI)", en: "Influenza-like illness" },
    claim: {
      hi: "CCRH का बहु-केंद्रीय रैंडमाइज़्ड, प्लेसिबो-नियंत्रित परीक्षण (2009–10, 9 केंद्र, 447 प्रतिभागी) — व्यक्तिगत औषधि समूह में बुखार और लक्षणों से राहत प्लेसिबो की तुलना में तेज़ पाई गई।",
      en: "A multicentre randomised, placebo-controlled CCRH trial (2009–10, 9 centres, 447 randomised) reported faster relief of fever and symptoms in the individualised arms than in placebo.",
    },
    source: "Chakraborty P.S. et al., 2013",
  },
  {
    topic: { hi: "डेंगू से बचाव (सामुदायिक अध्ययन)", en: "Dengue prevention (community study)" },
    claim: {
      hi: "दिल्ली की बस्तियों में खुला समानांतर कोहोर्ट अध्ययन (लगभग 20,607 प्रतिभागी): Eupatorium perfoliatum 30C साप्ताहिक। यह एक विशिष्ट अध्ययन-डिज़ाइन का परिणाम है — मच्छर नियंत्रण, ORS या अस्पताल के डेंगू प्रोटोकॉल का विकल्प नहीं।",
      en: "An open-label parallel cohort in Delhi slums (n≈20,607) using weekly Eupatorium perfoliatum 30C. This is the result of one specific study design — not a reason to skip mosquito control, ORS, or hospital dengue protocols.",
    },
    source: "Nayak D. et al., Homeopathy, 2024",
  },
  {
    topic: { hi: "CCRH का शोध संग्रह", en: "The CCRH research archive" },
    claim: {
      hi: "CCRH की सूची में 238 अध्ययन दर्ज हैं, जिनमें 195 पूर्ण हो चुके हैं (154 प्रेक्षणात्मक, 41 RCT) — श्वसन, ENT, त्वचा, पेट, हड्डी-जोड़ और महिला स्वास्थ्य में सबसे अधिक।",
      en: "CCRH lists 238 studies, of which 195 are concluded (154 observational, 41 RCTs) — weighted towards respiratory, ENT, dermatology, gastrointestinal, musculoskeletal and women's health.",
    },
    source: "CCRH clinical research page",
  },
];

export const researchTone: Bi = {
  hi: "भारत इस शोध को वित्त देता है और प्रकाशित करता है। हम उसी परंपरा में अभ्यास करते हैं। व्यक्तिगत परिणाम भिन्न हो सकते हैं।",
  en: "India funds and publishes this work. We practise in that tradition. Individual results vary.",
};

/** §3.3 — the honest two-column table. */
export const dualCare = {
  title: { hi: "होम्योपैथी और अस्पताल", en: "Homoeopathy and the hospital" } satisfies Bi,
  lede: {
    hi: "बिहार के परिवार पहले से ही कई पद्धतियाँ साथ चलाते हैं। एक पंजीकृत होम्योपैथ जो MBBS का अपमान करने के बजाय तालमेल बिठाता है, मरीज़ को सुरक्षित रखता है।",
    en: "Bihar families already mix systems. A registered homoeopath who coordinates rather than insults the MBBS keeps the patient safer.",
  } satisfies Bi,
  leftHead: { hi: "आमतौर पर पहली बातचीत के लिए ठीक", en: "Often a good first conversation" } satisfies Bi,
  rightHead: { hi: "आज ही रेफ़र करें — देर न करें", en: "Refer today — do not delay" } satisfies Bi,
  rows: [
    { left: { hi: "बार-बार सर्दी, एलर्जी की छींक, पुरानी साइनस", en: "Recurrent cold, allergic sneeze, chronic sinus" }, right: { hi: "साँस में घरघराहट, ऑक्सीजन गिरना, पहला गंभीर दमा दौरा", en: "Stridor, oxygen drop, first severe asthma attack" } },
    { left: { hi: "गैस-अम्लता, कब्ज़ या पतले दस्त का पैटर्न", en: "Functional acidity, constipation or loose-stool pattern" }, right: { hi: "काली उल्टी, पत्थर जैसा कड़ा पेट, पीलिया के साथ बेहोशी", en: "Black vomit, board-like abdomen, jaundice with confusion" } },
    { left: { hi: "तनाव या माइग्रेन जैसा सिरदर्द", en: "Tension or migraine pattern with known triggers" }, right: { hi: "अचानक सबसे तेज़ सिरदर्द, एक तरफ़ कमज़ोरी, दौरा", en: "Sudden worst headache, weakness of one side, seizure" } },
    { left: { hi: "एक्ज़िमा, पित्ती, मुँहासे (बिना संक्रमण के)", en: "Eczema, urticaria, acne (non-infected)" }, right: { hi: "तेज़ी से फैलती लाली, मवाद, तेज़ बुखार", en: "Rapidly spreading redness, pus, high fever" } },
    { left: { hi: "जोड़ों की जकड़न, शुरुआती घिसाव का दर्द", en: "Joint stiffness, early wear-and-tear pain" }, right: { hi: "एक जोड़ में गर्म सूजन, चोट, पेशाब-मल पर नियंत्रण जाना", en: "Hot swollen single joint, trauma, loss of bladder or bowel control" } },
    { left: { hi: "घबराहट, नींद, परीक्षा का तनाव", en: "Anxiety-somatic, sleep, exam stress" }, right: { hi: "आत्महत्या का विचार, मनोविकृति, शराब छूटने के लक्षण", en: "Suicidal intent, psychosis, alcohol withdrawal" } },
    { left: { hi: "माहवारी का दर्द, जाँच योजना के बाद", en: "Dysmenorrhoea, after an ultrasound plan" }, right: { hi: "हर घंटे पैड भीगना, गर्भावस्था में दर्द", en: "A pad soaked every hour, pain in pregnancy" } },
    { left: { hi: "बार-बार पेशाब में जलन, कल्चर योजना के साथ", en: "Recurrent urinary symptoms, with a culture plan" }, right: { hi: "कमर के बग़ल में दर्द के साथ बुखार, पेशाब बंद होना", en: "Flank pain with fever, no urine passed" } },
    { left: { hi: "ज्ञात बीपी/शुगर में जीवनशैली सहयोग — आपके चिकित्सक के साथ", en: "Lifestyle support in known BP or sugar, with your physician" }, right: { hi: "नया बहुत ऊँचा बीपी/शुगर, सीने में दर्द, गर्भावस्था में अनियंत्रित शुगर", en: "Newly very high BP or sugar, chest pain, unmanaged diabetes in pregnancy" } },
  ],
};

/* claim-lint-ok-start: §8.2 myth table. Each row names a false belief in
   order to correct it. The "myth" column is quoted, not asserted. */
export const myths: Array<{ myth: Bi; answer: Bi }> = [
  {
    myth: { hi: "“होम्योपैथी असली दवा नहीं है।”", en: "“Homoeopathy is not real medicine.”" },
    answer: {
      hi: "भारत में यह एक वैधानिक पद्धति है — अपने कॉलेज, एक राष्ट्रीय आयोग और एक शोध परिषद के साथ।",
      en: "In India it is a statutory system, with its own colleges, a national commission, and a research council.",
    },
  },
  {
    myth: { hi: "“एक रोग के लिए एक ही दवा होती है।”", en: "“One medicine fits one disease name.”" },
    answer: { hi: "औषधि रोग-नाम से नहीं, व्यक्ति के लक्षण-चित्र से मिलाई जाती है।", en: "The medicine is matched to the person-picture, not to the disease name." },
  },
  {
    myth: { hi: "“जितनी ऊँची पोटेंसी, उतनी तेज़ दवा।”", en: "“Higher potency is always stronger.”" },
    answer: { hi: "पोटेंसी एक नैदानिक निर्णय है, क़ीमत की श्रेणी नहीं।", en: "Potency is a clinical choice, not a price tier." },
  },
  {
    myth: { hi: "“होम्योपैथी लेनी है तो एलोपैथी छोड़नी पड़ेगी।”", en: "“You must stop allopathy.”" },
    answer: {
      hi: "अक्सर आपको नहीं छोड़नी चाहिए। इंसुलिन, मिर्गी या टीबी की दवा घटाने का निर्णय आपके एलोपैथिक चिकित्सक का है — हमारा नहीं।",
      en: "Often you must not. Any change to insulin, anti-epileptic or anti-TB medicines is your allopathic doctor's decision, not ours.",
    },
  },
  {
    myth: { hi: "“यह सिर्फ़ बच्चों पर काम करती है।”", en: "“It works only on children.”" },
    answer: { hi: "वास्तविक अभ्यास का बड़ा हिस्सा पुरानी शिकायतों वाले वयस्क हैं।", en: "Adults with long-running functional complaints are a large part of real practice." },
  },
  {
    myth: { hi: "“ग्लोब्यूल हाथ से छू लिए तो दवा मर जाती है।”", en: "“If you touch the globules they die.”" },
    answer: {
      hi: "साफ़-सफ़ाई ज़रूरी है — दवा को तेज़ गंध और कपूर से दूर रखें। बाक़ी दूषण की जादुई कहानियाँ सही नहीं हैं।",
      en: "Hygiene matters — keep medicines away from camphor and strong odours. The magical contamination stories do not hold.",
    },
  },
];
/* claim-lint-ok-end */

export const whd = {
  title: { hi: "विश्व होम्योपैथी दिवस — 10 अप्रैल", en: "World Homoeopathy Day — 10 April" } satisfies Bi,
  body: {
    hi: "डॉ. हैनीमैन की जयंती पर हर साल 10 अप्रैल को विश्व होम्योपैथी दिवस मनाया जाता है। 2026 का राष्ट्रीय विषय था — ‘सतत स्वास्थ्य के लिए होम्योपैथी’। हम इस दिन ज़िलों में जागरूकता सामग्री और शिविर लेकर जाते हैं।",
    en: "World Homoeopathy Day falls on 10 April, Dr Hahnemann's birth anniversary. The 2026 national theme was “Homoeopathy for Sustainable Health”. We use the day to take awareness material and camps into the districts.",
  } satisfies Bi,
  source: "PIB, 9 April 2026",
};
