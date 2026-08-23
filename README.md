# Agasta Homeo

Public website for **Agasta Homeo**, a unit of **Kangson Wellness Pvt Ltd** — homoeopathy clinics for Bihar.

Six static, Hindi-first pages plus one API route that writes patient callback requests to Google Sheets.

- **Brand, copy and claim rules:** `app-doc/kanha/agasta/AGASTA_FOUNDATION_DOC.md`
- **Architecture and phasing:** `app-doc/kanha/agasta/AGASTA_HOMEO_TECH_BLUEPRINT.md`

## Stack

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Vercel

No animation library, no CMS, no client state manager. Every page is static HTML; the only dynamic surface is `POST /api/lead`.

## Run it

```bash
pnpm install
cp .env.local.example .env.local   # fill in at least NEXT_PUBLIC_WHATSAPP
pnpm dev                           # http://localhost:3000
```

Without a sheet configured, `pnpm dev` writes leads to `data/leads.jsonl` so the form is testable offline.

| Command | What it does |
|---|---|
| `pnpm dev` | Dev server |
| `pnpm build` | `claim-lint` → `next build` |
| `pnpm claim-lint` | Claim rules only |
| `CHECK_PLACEHOLDERS=1 pnpm claim-lint` | Also fails while any `TODO_` remains |
| `pnpm lint` | ESLint |

## The two rules this repo enforces

**1. No cure claims.** `scripts/claim-lint.mjs` runs before every build. It fails on absolute claims ("cure", "guaranteed", "100%", "चमत्कार") and on any Drugs and Magic Remedies (Objectionable Advertisements) Act, 1954 scheduled condition sitting next to a treatment verb.

Legitimate exceptions — the disclaimer, the "what we are not" block, the myth table — are marked in the source and must carry a written reason:

```ts
/* claim-lint-ok-start: §9.3 verbatim — names the DMRA only to disclaim it */
...
/* claim-lint-ok-end */
```

A silent global disable defeats the point. If you add an exception, write why.

**2. No health data in the spreadsheet.** The patient form collects name, WhatsApp number, city, a fixed interest option, and consent. Nothing else. There is deliberately no free-text complaint box, and `/api/lead` rejects any interest value outside the fixed list. Symptoms belong in a clinic case sheet, taken by a registered doctor — see blueprint §1 and §11.1.

## Content

All copy lives in `content/*.ts` as `{ hi, en }` pairs, Hindi first. Pages import strings; they never inline them. That is what makes a later move to a locale router mechanical rather than a rewrite.

Every published statistic carries its source and year in the same object — the foundation doc's rule: *do not paste a statistic onto the site unless you also keep its source*.

## Google Sheets wiring

1. Create the spreadsheet **Agasta Homeo — Leads**, tab **Patients**
2. Extensions → Apps Script → paste `scripts/google-sheets-apps-script.gs`
3. Set `SPREADSHEET_ID`, add a `SECRET` script property
4. Deploy → New deployment → Web app (*Execute as: Me*, *Who has access: Anyone*)
5. Put the `/exec` URL in `GOOGLE_SHEETS_WEBHOOK_URL` and the same secret in `GOOGLE_SHEETS_SECRET`
6. Share the sheet with **named accounts only**

The doctor application form is a separate Google Form (~20 fields across 6 pages) built by `app-doc/kanha/google-forms/create-agasta-homeo-doctor-form.gs`. Link its live URL via `NEXT_PUBLIC_DOCTOR_FORM_URL`.

## Before you deploy

```bash
CHECK_PLACEHOLDERS=1 pnpm claim-lint
```

Then verify: a live form submit lands in the sheet, the WhatsApp link opens with prefilled Hindi text, the Hindi reads correctly aloud on a real phone, and Lighthouse on throttled 3G keeps LCP under 2.5s.
