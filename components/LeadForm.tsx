"use client";

import { useState } from "react";
import { leadInterests } from "@/content/site";

type State = "idle" | "submitting" | "done" | "error";

const label = "block text-sm font-semibold text-ink";
const labelEn = "block text-xs font-normal text-ink-muted";
const field =
  "mt-2 w-full rounded-lg border border-line bg-surface px-4 py-3 text-base text-ink outline-none transition-colors focus:border-brand-mid";

export function LeadForm({ source }: { source: string }) {
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setState("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          city: data.get("city"),
          interest: data.get("interest"),
          consent: data.get("consent") === "on",
          source,
          language: "hi",
          company: data.get("company"), // honeypot
        }),
      });

      const result = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !result.ok) {
        setState("error");
        setMessage(result.error ?? "कुछ गड़बड़ हुई। कृपया दोबारा कोशिश करें।");
        return;
      }

      form.reset();
      setState("done");
    } catch {
      setState("error");
      setMessage("नेटवर्क की समस्या लग रही है। कृपया व्हाट्सएप पर संपर्क करें।");
    }
  }

  if (state === "done") {
    return (
      <div className="rounded-xl border border-brand-line bg-brand-soft p-6">
        <p lang="hi" className="text-lg font-semibold text-brand-dark">
          धन्यवाद। आपका नाम दर्ज हो गया है।
        </p>
        <p lang="hi" className="mt-2 text-ink-soft">
          हमारे ज़िले में क्लिनिक खुलने पर हम इसी नंबर पर कॉल करेंगे। यह चिकित्सा परामर्श नहीं था।
        </p>
        <p lang="en" className="mt-3 text-sm text-ink-muted">
          Thank you — we have your details. We will call this number when a clinic opens near you.
          This was not a medical consultation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate>
      {/* Honeypot — real people never see or fill this. */}
      <div aria-hidden className="absolute h-0 w-0 overflow-hidden opacity-0">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className={label}>
          <span lang="hi">आपका नाम</span>
          <span lang="en" className={labelEn}>Your name</span>
        </label>
        <input id="name" name="name" type="text" required autoComplete="name" className={field} />
      </div>

      <div>
        <label htmlFor="phone" className={label}>
          <span lang="hi">व्हाट्सएप / मोबाइल नंबर</span>
          <span lang="en" className={labelEn}>WhatsApp / mobile number</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="numeric"
          required
          autoComplete="tel"
          placeholder="98XXXXXXXX"
          className={field}
        />
      </div>

      <div>
        <label htmlFor="city" className={label}>
          <span lang="hi">शहर / ज़िला</span>
          <span lang="en" className={labelEn}>City / district</span>
        </label>
        <input id="city" name="city" type="text" required className={field} />
      </div>

      <div>
        <label htmlFor="interest" className={label}>
          <span lang="hi">किस बारे में जानना है?</span>
          <span lang="en" className={labelEn}>What would you like to know about?</span>
        </label>
        <select id="interest" name="interest" required defaultValue="" className={field}>
          <option value="" disabled>
            चुनें / Select
          </option>
          {leadInterests.map((option) => (
            <option key={option.value} value={option.value}>
              {option.hi} · {option.en}
            </option>
          ))}
        </select>
        <p lang="hi" className="mt-2 text-xs text-ink-muted">
          कृपया यहाँ अपनी बीमारी का विवरण न लिखें। लक्षण केवल चिकित्सक, केस लेते समय पूछते हैं।
        </p>
      </div>

      <label htmlFor="consent" className="flex items-start gap-3 rounded-lg bg-brand-soft/60 p-4">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-5 w-5 shrink-0 accent-[#0e4d3a]"
        />
        <span className="text-sm">
          <span lang="hi" className="block text-ink">
            मैं अगस्ता होमियो को दिए गए नंबर पर संपर्क करने की अनुमति देता/देती हूँ। यह चिकित्सा परामर्श
            नहीं है।
          </span>
          <span lang="en" className="mt-1 block text-ink-muted">
            I allow Agasta Homeo to contact me on the number provided. This form is not a medical
            consultation.
          </span>
        </span>
      </label>

      {state === "error" ? (
        <p role="alert" lang="hi" className="rounded-lg bg-alert-soft px-4 py-3 text-sm text-alert">
          {message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-dark disabled:opacity-60"
      >
        <span lang="hi">{state === "submitting" ? "भेजा जा रहा है…" : "नाम दर्ज करें"}</span>
      </button>
    </form>
  );
}
