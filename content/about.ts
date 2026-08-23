import type { Bi } from "./site";

export const intro = {
  title: { hi: "हमारे बारे में", en: "About us" } satisfies Bi,
  lede: {
    hi: "अगस्ता होमियो एक कंपनी है — बिहार में होम्योपैथिक अस्पताल बनाने, चलाने और उनमें पंजीकृत चिकित्सकों को वेतन पर रखने वाली। यह कांगसन वेलनेस प्रा. लि. का पहला क्लिनिकल ब्रांड है। भारत जिस होम्योपैथी पर भरोसा करता है, उसे हम व्यवस्थित अस्पताल, स्थिर नौकरी और ज़िला-स्तर की पहुँच देना चाहते हैं।",
    en: "Agasta Homeo is a company: it builds and runs homoeopathic hospitals in Bihar and employs registered doctors on payroll. It is the first clinical brand of Kangson Wellness Pvt Ltd. We bring organised operations to a system India already trusts — so more families in Bihar can meet a registered homoeopathic doctor, and more doctors can practise without running a one-person shop.",
  } satisfies Bi,
};

export const umbrella = {
  title: { hi: "एक भरोसे की परत, कई अस्पताल", en: "One trust layer, many hospitals" } satisfies Bi,
  parent: "Kangson Wellness Pvt Ltd",
  verticals: [
    { name: { hi: "अगस्ता होमियो", en: "Agasta Homeo" }, status: { hi: "अभी शुरू हो रहा है", en: "Launching now" }, live: true },
    { name: { hi: "आयुर्वेद", en: "Ayurveda" }, status: { hi: "बाद में", en: "Later" }, live: false },
    { name: { hi: "फ़िज़ियोथेरेपी", en: "Physiotherapy" }, status: { hi: "बाद में", en: "Later" }, live: false },
  ] as Array<{ name: Bi; status: Bi; live: boolean }>,
  note: {
    hi: "आगे की सेवाएँ तभी घोषित होंगी जब वे वास्तव में मौजूद होंगी और लाइसेंस-प्राप्त होंगी।",
    en: "Later verticals will be announced only when they actually exist and are licensed.",
  } satisfies Bi,
};

export const builders = {
  title: { hi: "हम यह क्यों बना सकते हैं", en: "Why we can build this" } satisfies Bi,
  body: {
    hi: "कान्हा समूह ने बिहार में सैकड़ों लोगों को नौकरी देना, दुकानें चलाना और ज़िले को नक़्शे की पिन नहीं बल्कि असली बाज़ार मानना सीखा है। कांगसन वेलनेस उसी परिचालन अनुशासन को देखभाल पर लागू करता है। अगस्ता होमियो की चिकित्सा होम्योपैथी है। हमारा फ़र्क़ यह है कि अस्पताल अगले साल भी यहीं होगा, चिकित्सक अब भी रोस्टर पर होंगे, और बोर्ड पर लिखा फ़ोन नंबर अब भी उठेगा।",
    en: "The Kanha group learned, in Bihar, how to hire hundreds of people, keep shops open, and treat a district as a real market rather than a pin on a map. Kangson Wellness applies that operating discipline to care. Agasta Homeo's medicine is homoeopathy. Our difference is that the hospital will still be here next year, the doctor will still be on the roster, and the phone number on the board will still work.",
  } satisfies Bi,
  caveat: {
    hi: "एक बात साफ़ है: दूसरे उद्योग में सफलता कोई चिकित्सा योग्यता नहीं है। चिकित्सा केवल पंजीकृत चिकित्सक करते हैं।",
    en: "One thing stays clear: success in another industry is not a medical credential. Medicine is practised only by registered doctors.",
  } satisfies Bi,
};

export const mission: Bi = {
  hi: "अगस्ता होमियो इसलिए है ताकि सीवान के एक किसान और पटना की एक शिक्षिका को एक ही स्तर मिले — एक पंजीकृत होम्योपैथिक चिकित्सक, एक शांत कमरा, लाइसेंस-प्राप्त फ़ार्मेसी की दवा, और यह साफ़ निर्देश कि कब इसके बजाय अस्पताल जाना है।",
  en: "Agasta Homeo exists so a farmer in Siwan and a teacher in Patna can meet the same standard: a registered homoeopathic doctor, a quiet room, a medicine from a licensed pharmacy, and a clear instruction on when to go to the hospital instead.",
};

export const governance = {
  title: { hi: "नैदानिक प्रशासन", en: "Clinical governance" } satisfies Bi,
  body: {
    hi: "हमारे चिकित्सा प्रमुख की नियुक्ति प्रक्रिया में है। नाम, योग्यता और पंजीकरण संख्या यहाँ तभी प्रकाशित होगी जब नियुक्ति पूरी हो जाएगी — पहले नहीं।",
    en: "Our medical lead is being appointed. The name, qualification and registration number will be published here once the appointment is complete — not before.",
  } satisfies Bi,
};

/**
 * The difference between a company and a doctor's own shop. This is the
 * single clearest answer to "so what are you, exactly?".
 */
export const operatingModel = {
  title: { hi: "हम कैसे चलते हैं", en: "How we operate" } satisfies Bi,
  rows: [
    {
      ours: { hi: "इमारत कंपनी की", en: "The company owns the facility" },
      not: { hi: "चिकित्सक किराया या फ़्रैंचाइज़ी फ़ीस नहीं देता", en: "The doctor pays no rent and no franchise fee" },
    },
    {
      ours: { hi: "चिकित्सक वेतन पर", en: "The doctor is on payroll" },
      not: { hi: "कमाई दवा के मार्जिन पर निर्भर नहीं", en: "Income does not depend on medicine margin" },
    },
    {
      ours: { hi: "फ़ार्मेसी कंपनी की या लाइसेंस-प्राप्त साझेदार की", en: "The pharmacy is company-owned or a licensed partner" },
      not: { hi: "चिकित्सक पर बिक्री का कोई लक्ष्य नहीं", en: "No sales target sits on any doctor" },
    },
    {
      ours: { hi: "केस रिकॉर्ड कंपनी रखती है", en: "The company keeps the case record" },
      not: { hi: "मरीज़ का इतिहास एक निजी रजिस्टर में खोता नहीं", en: "A patient's history does not vanish into a private register" },
    },
    {
      ours: { hi: "रेफ़रल दर्ज होते हैं", en: "Referrals are logged" },
      not: { hi: "आपात मामले चुपचाप नहीं निपटाए जाते", en: "Emergencies are not quietly waved along" },
    },
  ] as Array<{ ours: Bi; not: Bi }>,
};
