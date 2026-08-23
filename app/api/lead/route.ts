import { NextResponse } from "next/server";
import { appendLead } from "@/lib/google-sheets";
import { leadInterests, site } from "@/content/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** In-memory limiter. Enough at this volume — do not add Redis (blueprint §5.3). */
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) return true;
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

/** Normalise to 91XXXXXXXXXX, or null if it is not a valid Indian mobile. */
function normalisePhone(raw: string): string | null {
  const digits = raw.replace(/\D/g, "");
  const local = digits.length > 10 ? digits.slice(-10) : digits;
  if (!/^[6-9]\d{9}$/.test(local)) return null;
  return `91${local}`;
}

const errors = {
  name: "कृपया अपना नाम लिखें। · Please enter your name.",
  phone: "कृपया सही 10 अंकों का मोबाइल नंबर लिखें। · Please enter a valid 10-digit mobile number.",
  city: "कृपया अपना शहर या ज़िला लिखें। · Please enter your city or district.",
  interest: "कृपया एक विकल्प चुनें। · Please choose an option.",
  consent: "आगे बढ़ने के लिए सहमति देना ज़रूरी है। · Consent is required to continue.",
  rate: "बहुत सारे प्रयास। कुछ मिनट बाद कोशिश करें। · Too many attempts. Please try again in a few minutes.",
  down: "अभी फ़ॉर्म काम नहीं कर रहा। कृपया व्हाट्सएप पर संपर्क करें। · The form is unavailable. Please reach us on WhatsApp.",
};

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: errors.down }, { status: 400 });
  }

  // Honeypot: answer as if it worked, write nothing. Bots stop retrying.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const city = String(body.city ?? "").trim();
  const interest = String(body.interest ?? "").trim();
  const language = String(body.language ?? "hi").trim();
  const source = String(body.source ?? "unknown").trim().slice(0, 40);

  if (name.length < 2 || name.length > 80) {
    return NextResponse.json({ error: errors.name }, { status: 400 });
  }

  const phone = normalisePhone(String(body.phone ?? ""));
  if (!phone) {
    return NextResponse.json({ error: errors.phone }, { status: 400 });
  }

  if (city.length < 2 || city.length > 60) {
    return NextResponse.json({ error: errors.city }, { status: 400 });
  }

  // Fixed list only. A free-text complaint must never reach the sheet.
  if (!leadInterests.some((option) => option.value === interest)) {
    return NextResponse.json({ error: errors.interest }, { status: 400 });
  }

  if (body.consent !== true) {
    return NextResponse.json({ error: errors.consent }, { status: 400 });
  }

  // Limit only well-formed submissions: a person fumbling their phone number
  // must not get locked out, while a bot posting valid payloads still is.
  if (rateLimited(ip)) {
    return NextResponse.json({ error: errors.rate }, { status: 429 });
  }

  try {
    await appendLead({
      name,
      phone,
      city,
      interest,
      language: language === "en" ? "en" : "hi",
      source,
      consentVersion: site.consentVersion,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    // Never leak the upstream URL or raw error to the browser.
    console.error("[lead]", error instanceof Error ? error.message : error);
    return NextResponse.json({ error: errors.down }, { status: 500 });
  }
}
