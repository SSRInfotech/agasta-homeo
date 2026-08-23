#!/usr/bin/env node
/**
 * claim-lint — makes AGASTA_FOUNDATION_DOC.md §11 a build failure instead of
 * a checklist somebody skips at 11pm.
 *
 * Rules
 *  1. Absolute claims ("cure", "guaranteed", "100%", "चमत्कार") are banned.
 *  2. A condition scheduled under the Drugs and Magic Remedies (Objectionable
 *     Advertisements) Act, 1954 next to a treatment verb is the actual offence.
 *
 * Escapes — deliberately visible, and each one needs a written reason:
 *      // claim-lint-ok: <reason>                 (same line)
 *      /* claim-lint-ok-start: <reason> *\/ ... /* claim-lint-ok-end *\/
 *
 * Run:  pnpm claim-lint         (also runs automatically in `pnpm build`)
 *       CHECK_PLACEHOLDERS=1 pnpm claim-lint   → also fails on unresolved TODO_
 */

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const SCAN_DIRS = ["content", "app", "components"];
const EXTENSIONS = [".ts", ".tsx"];

const BANNED_PHRASES = [
  /\bcure[sd]?\b/i,
  /\bcuring\b/i,
  /\bguarantee[ds]?\b/i,
  /100\s*%/,
  /\bpermanent(ly)?\s+(cure|relief|solution)/i,
  /\bmiracle\b/i,
  /\bno\s+side\s*-?\s*effects?\b/i,
  /\bcompletely\s+(cured|healed)\b/i,
  /चमत्कार/,
  /गारंटी/,
  /पूर्ण\s*इलाज/,
  /जड़\s*से\s*ख़?त्म/,
  /100\s*%\s*ठीक/,
];

/** Subset of the 1954 Schedule. Re-verify against the current text. */
const DMRA_SCHEDULE = [
  "cancer", "diabetes", "tuberculosis", "epilepsy", "leprosy", "paralysis",
  "blindness", "cataract", "glaucoma", "deafness", "goitre", "insanity",
  "heart disease", "high blood pressure", "sexual impotence", "sterility",
  "obesity", "leucoderma", "hydrocele", "venereal", "typhoid", "pneumonia",
  "appendicitis", "gall stone", "kidney stone", "lockjaw", "smallpox",
  "कैंसर", "मधुमेह", "तपेदिक", "मिर्गी", "कुष्ठ", "लकवा", "बाँझपन", "नपुंसकता",
  "मोतियाबिंद", "घेंघा", "चेचक", "मोटापा",
];

const TREATMENT_VERBS =
  /\b(treats?|treating|treatment|cures?|heals?|remedy for|solution for|इलाज|उपचार|ठीक\s*कर)\b/i;

function walk(dir) {
  let out = [];
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return out;
  }
  for (const entry of entries) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out = out.concat(walk(full));
    else if (EXTENSIONS.some((ext) => full.endsWith(ext))) out.push(full);
  }
  return out;
}

const violations = [];
const placeholders = [];
const escapes = [];

for (const file of SCAN_DIRS.flatMap(walk)) {
  const lines = readFileSync(file, "utf8").split("\n");
  let inEscapedRegion = false;

  lines.forEach((line, index) => {
    const at = `${file}:${index + 1}`;

    if (line.includes("claim-lint-ok-start")) {
      inEscapedRegion = true;
      escapes.push(`${at}  ${line.trim().slice(0, 96)}`);
      return;
    }
    if (line.includes("claim-lint-ok-end")) {
      inEscapedRegion = false;
      return;
    }

    const match = line.match(/TODO_[A-Z_]+/g);
    if (match) placeholders.push(`${at}  ${match.join(", ")}`);

    if (inEscapedRegion || line.includes("claim-lint-ok")) return;

    for (const pattern of BANNED_PHRASES) {
      if (pattern.test(line)) {
        violations.push({ at, rule: `banned claim ${pattern}`, line: line.trim() });
      }
    }

    const lower = line.toLowerCase();
    for (const condition of DMRA_SCHEDULE) {
      if (lower.includes(condition) && TREATMENT_VERBS.test(line)) {
        violations.push({
          at,
          rule: `DMRA 1954 scheduled condition "${condition}" beside a treatment verb`,
          line: line.trim(),
        });
      }
    }
  });

  if (inEscapedRegion) {
    violations.push({
      at: `${file}`,
      rule: "claim-lint-ok-start was never closed with claim-lint-ok-end",
      line: "",
    });
  }
}

for (const violation of violations) {
  console.error(`✖ ${violation.at}\n  ${violation.rule}\n  ${violation.line.slice(0, 160)}\n`);
}

if (placeholders.length) {
  console.warn(`\n⚠ ${placeholders.length} unresolved placeholder(s) — launch blockers:`);
  for (const placeholder of placeholders) console.warn(`  ${placeholder}`);
}

if (escapes.length) {
  console.log(`\nℹ ${escapes.length} reviewed exception(s):`);
  for (const escape of escapes) console.log(`  ${escape}`);
}

if (violations.length) {
  console.error(`\n${violations.length} claim violation(s). See AGASTA_FOUNDATION_DOC.md §11.`);
  process.exit(1);
}

if (process.env.CHECK_PLACEHOLDERS === "1" && placeholders.length) {
  console.error("\nCHECK_PLACEHOLDERS=1 and placeholders remain. Fill content/site.ts.");
  process.exit(1);
}

console.log("\n✓ claim-lint clean");
