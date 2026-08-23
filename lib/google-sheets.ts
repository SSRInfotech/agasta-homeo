import { google } from "googleapis";
import { appendFile, mkdir } from "fs/promises";
import path from "path";

/**
 * Ported from kanha-launcher/lib/google-sheets.ts, which is already proven in
 * production — including the Apps Script 302 redirect handling.
 *
 * HARD RULE (AGASTA_HOMEO_TECH_BLUEPRINT.md §1, §11.1): this sheet holds
 * contact and interest data only. No symptoms, no diagnosis, no prescription,
 * no lab values ever pass through here.
 */

export type Lead = {
  name: string;
  phone: string;
  city: string;
  interest: string;
  language: string;
  source: string;
  consentVersion: string;
};

export type AppendResult = { destination: "sheet" | "local"; warning?: string };

const SHEET_ID = process.env.GOOGLE_SHEET_ID ?? "";
const SHEET_TAB = "Patients";
const SHEET_RANGE = `${SHEET_TAB}!A:I`;

const HEADERS = [
  "Submitted At",
  "Name",
  "WhatsApp",
  "City / District",
  "Interest",
  "Language",
  "Source",
  "Consent",
  "Status",
];

function toRow(lead: Lead): string[] {
  return [
    new Date().toISOString(),
    lead.name,
    lead.phone,
    lead.city,
    lead.interest,
    lead.language,
    lead.source,
    lead.consentVersion,
    "", // Status — human-owned column: New → Called → Waitlisted → Not reachable
  ];
}

function parseServiceAccount() {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!raw) return null;
  try {
    return JSON.parse(raw) as { client_email: string; private_key: string };
  } catch {
    throw new Error("GOOGLE_SERVICE_ACCOUNT_JSON is invalid JSON.");
  }
}

async function appendToLocalFallback(lead: Lead) {
  const dir = path.join(process.cwd(), "data");
  await mkdir(dir, { recursive: true });
  await appendFile(
    path.join(dir, "leads.jsonl"),
    JSON.stringify({ ...lead, at: new Date().toISOString() }) + "\n",
  );
}

async function appendViaServiceAccount(lead: Lead) {
  const credentials = parseServiceAccount();
  if (!credentials || !SHEET_ID) return false;

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const sheets = google.sheets({ version: "v4", auth });

  const existing = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range: `${SHEET_TAB}!A1:I1`,
  });

  if (!existing.data.values?.length) {
    await sheets.spreadsheets.values.update({
      spreadsheetId: SHEET_ID,
      range: `${SHEET_TAB}!A1:I1`,
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [HEADERS] },
    });
  }

  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: SHEET_RANGE,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: [toRow(lead)] },
  });

  return true;
}

async function postToAppsScript(webhookUrl: string, body: Record<string, string>) {
  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    redirect: "manual",
  });

  // Apps Script answers 302 — follow it with a GET to read the JSON body.
  if (response.status >= 300 && response.status < 400) {
    const location = response.headers.get("location");
    if (!location) return "";
    const follow = await fetch(location, { method: "GET", redirect: "follow" });
    return follow.text();
  }

  return response.text();
}

async function appendViaWebhook(lead: Lead) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhookUrl) return false;

  const body: Record<string, string> = {
    submittedAt: new Date().toISOString(),
    name: lead.name,
    phone: lead.phone,
    city: lead.city,
    interest: lead.interest,
    language: lead.language,
    source: lead.source,
    consent: lead.consentVersion,
  };

  const secret = process.env.GOOGLE_SHEETS_SECRET;
  if (secret) body.secret = secret;

  const text = await postToAppsScript(webhookUrl, body);

  if (
    text.includes("Access denied") ||
    text.includes("You need access") ||
    text.includes("Page not found") ||
    text.includes("unable to open the file")
  ) {
    throw new Error("SHEETS_ACCESS_DENIED");
  }

  try {
    const result = JSON.parse(text) as { ok?: boolean; error?: string };
    if (result.error) throw new Error(result.error);
    if (result.ok) return true;
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === "SHEETS_ACCESS_DENIED") throw error;
      if (!error.message.startsWith("Unexpected")) throw error;
    }
  }

  return false;
}

export async function appendLead(lead: Lead): Promise<AppendResult> {
  if (process.env.GOOGLE_SERVICE_ACCOUNT_JSON) {
    const ok = await appendViaServiceAccount(lead);
    if (ok) return { destination: "sheet" };
  }

  if (process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
    try {
      const ok = await appendViaWebhook(lead);
      if (ok) return { destination: "sheet" };
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        await appendToLocalFallback(lead);
        console.warn("[lead] Webhook failed — saved to data/leads.jsonl for dev", error);
        return { destination: "local", warning: "Webhook failed; saved locally." };
      }
      throw error;
    }
  }

  if (process.env.NODE_ENV === "development") {
    await appendToLocalFallback(lead);
    console.warn("[lead] No sheet configured — saved to data/leads.jsonl (dev fallback)");
    return { destination: "local", warning: "No sheet configured; saved locally." };
  }

  throw new Error("LEADS_NOT_CONFIGURED");
}
