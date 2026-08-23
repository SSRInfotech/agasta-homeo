import type { Bi } from "./site";

export const intro = {
  title: { hi: "बिहार क्यों", en: "Why Bihar" } satisfies Bi,
  lede: {
    hi: "असली कमी विचारधारा की नहीं, पहुँच की है। ये आबादी के आँकड़े हैं — होम्योपैथी इन्हें ‘हल’ नहीं करती। लेकिन यह उन्हीं गाँवों में बैठती है जहाँ ये आँकड़े रहते हैं।",
    en: "The real gap here is access, not ideology. These are population facts. Homoeopathy does not solve them — but it sits in the same villages where these numbers live.",
  } satisfies Bi,
};

/** NFHS-5 Bihar fact sheet, fieldwork 9 Jul 2019 – 2 Feb 2020, 35,834 households. */
export const nfhs = {
  sourceNote: {
    hi: "स्रोत: NFHS-5 बिहार फ़ैक्ट शीट (सर्वेक्षण 9 जुलाई 2019 – 2 फ़रवरी 2020, 35,834 परिवार), IIPS / स्वास्थ्य मंत्रालय।",
    en: "Source: NFHS-5 Bihar fact sheet (fieldwork 9 Jul 2019 – 2 Feb 2020, 35,834 households), IIPS / MoHFW.",
  } satisfies Bi,
  rows: [
    { value: "36.4%", label: { hi: "जनसंख्या 15 वर्ष से कम आयु की", en: "Population under 15 years" }, why: { hi: "बाल-स्वास्थ्य की समझ ही आधा ब्रांड है", en: "Child-health literacy is half the brand" } },
    { value: "56.4", label: { hi: "प्रति 1,000 पर पाँच वर्ष से कम आयु में मृत्यु (भारत: 41.9)", en: "Under-5 deaths per 1,000 (India: 41.9)" }, why: { hi: "हम सिखाते हैं कि अस्पताल कब दौड़ना है", en: "We teach when to run to a hospital" } },
    { value: "69.4%", label: { hi: "6–59 माह के बच्चों में ख़ून की कमी", en: "Children 6–59 months who are anaemic" }, why: { hi: "‘आयरन की जगह गोली’ नहीं बेचते — जाँच, आहार और IFA प्रोटोकॉल के अनुसार", en: "We do not sell iron-replacing globules — referral, diet and IFA per protocol" } },
    { value: "63.5%", label: { hi: "15–49 वर्ष की महिलाओं में ख़ून की कमी", en: "Women 15–49 who are anaemic" }, why: { hi: "वही नियम", en: "Same rule" } },
    { value: "13.7%", label: { hi: "पिछले दो सप्ताह में दस्त (5 वर्ष से कम)", en: "Diarrhoea in the last 2 weeks (under-5)" }, why: { hi: "पहले ORS और ज़िंक — निर्जलीकरण का इलाज होम्योपैथी नहीं है", en: "ORS and zinc first — homoeopathy is not a substitute for dehydration care" } },
    { value: "14.6%", label: { hi: "परिवार जिनके पास कोई स्वास्थ्य बीमा है", en: "Households with any health insurance" }, why: { hi: "जेब से ख़र्च — इसीलिए हम फ़ीस प्रकाशित करेंगे", en: "Out-of-pocket pain — which is why we will publish our fees" } },
    { value: "20.6%", label: { hi: "15–49 वर्ष की महिलाएँ जिन्होंने कभी इंटरनेट चलाया (ग्रामीण 17.0%)", en: "Women 15–49 who have ever used the internet (rural 17.0%)" }, why: { hi: "इसलिए हिंदी, ऑडियो और व्हाट्सएप — भारी वेबसाइट नहीं", en: "Which is why we build for Hindi, audio and WhatsApp — not a heavy website" } },
  ] as Array<{ value: string; label: Bi; why: Bi }>,
};

/** CAG Performance Audit on Bihar public health, tabled 2024 (data to ~2022). */
export const cag = {
  sourceNote: {
    hi: "स्रोत: भारत के नियंत्रक एवं महालेखापरीक्षक — बिहार लोक स्वास्थ्य अवसंरचना पर निष्पादन लेखापरीक्षा, प्रतिवेदन संख्या 4 (2024)।",
    en: "Source: Comptroller and Auditor General of India — Performance Audit on Public Health Infrastructure, Bihar, Report No. 4 (2024).",
  } satisfies Bi,
  rows: [
    { value: "1 : 2,148", label: { hi: "उपलब्ध एलोपैथिक डॉक्टर पर जनसंख्या", en: "People per available allopathic doctor" } },
    { value: "82%", label: { hi: "आयुष निदेशालय के पद रिक्त (4,870 में से 4,017)", en: "AYUSH directorate posts vacant (4,017 of 4,870)" } },
    { value: "162", label: { hi: "सार्वजनिक आयुष सुविधाएँ, बनाम 12,610 एलोपैथिक (मार्च 2022)", en: "Public AYUSH facilities, against 12,610 allopathic (Mar 2022)" } },
    { value: "29", label: { hi: "प्राथमिक स्तर पर राज्य होम्योपैथिक औषधालय", en: "State homoeopathic dispensaries at primary level" } },
  ] as Array<{ value: string; label: Bi }>,
};

export const talent = {
  title: { hi: "प्रतिभा यहीं है", en: "The talent is already here" } satisfies Bi,
  rows: [
    { value: "15", label: { hi: "बिहार में होम्योपैथिक कॉलेज (2 में स्नातकोत्तर)", en: "Homoeopathic colleges in Bihar (2 with PG)" }, source: "Rajya Sabha annex — reconfirm live seat count with NCH" },
    { value: "393", label: { hi: "नए होम्योपैथिक चिकित्सा पदाधिकारी नियुक्त (दिसंबर 2025)", en: "New homoeopathic medical officers appointed (Dec 2025)" }, source: "State ceremony reporting, 16 Dec 2025 — 1,283 AYUSH appointments in all 38 districts" },
    { value: "294", label: { hi: "आयुष्मान आरोग्य मंदिर (आयुष), बिहार", en: "Ayushman Arogya Mandir (Ayush) in Bihar" }, source: "Lok Sabha USQ AU946" },
  ] as Array<{ value: string; label: Bi; source: string }>,
  note: {
    hi: "समस्या यह नहीं कि बिहार में BHMS स्नातक नहीं हैं। समस्या व्यवस्थित अस्पताल, भरोसेमंद दवा और स्थिर नौकरी की है।",
    en: "The problem is not that Bihar has no BHMS graduates. The problem is organised hospitals, trustworthy medicines, and stable jobs.",
  } satisfies Bi,
};

export const campaign = {
  title: { hi: "हमारा अभियान", en: "Our campaign" } satisfies Bi,
  items: [
    { hi: "स्कूलों और पंचायतों में बातचीत — हिंदी में, ऑडियो में", en: "School and panchayat talks — in Hindi, in audio" },
    { hi: "ज़िला-स्तर पर शिविर और उनका सार्वजनिक कैलेंडर", en: "District camps, with a public calendar" },
    { hi: "व्हाट्सएप पर सरल व्याख्या — बिना दवा बताए", en: "Plain WhatsApp explainers — that never prescribe" },
    { hi: "10 अप्रैल, विश्व होम्योपैथी दिवस पर 38 ज़िलों में सामग्री", en: "A 38-district content drop on 10 April, World Homoeopathy Day" },
    { hi: "हर आपात रेफ़रल का रिकॉर्ड — पहले दिन से", en: "A logged record of every emergency referral — from day one" },
  ] as Bi[],
  measure: {
    hi: "हम यह दावा नहीं करते कि हमने राज्य के स्वास्थ्य आँकड़े बदले हैं। हम अपनी गिनती हर तिमाही प्रकाशित करेंगे — शिविर, मरीज़, नियुक्त चिकित्सक, और रेफ़रल।",
    en: "We do not claim to have moved the state's health numbers. We will publish our own counts every quarter — camps, patients, doctors hired, and referrals made.",
  } satisfies Bi,
};

export const orsCallout: Bi = {
  hi: "अगर आपके बच्चे को दस्त है — अभी ORS शुरू करें। उसके बाद हमें कॉल करें।",
  en: "If your child has diarrhoea, start ORS now. Then call us.",
};
