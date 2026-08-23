/**
 * Agasta Homeo — patient lead webhook.
 * Ported from kanha-launcher/scripts/google-sheets-apps-script.gs.
 *
 * Setup
 *   1. Create the spreadsheet "Agasta Homeo — Leads" with a tab named Patients
 *   2. Extensions → Apps Script → paste this file
 *   3. Set SPREADSHEET_ID below
 *   4. Project Settings → Script Properties → add SECRET (any random string)
 *   5. Deploy → New deployment → Web app
 *        Execute as:      Me
 *        Who has access:  Anyone
 *   6. Copy the /exec URL into GOOGLE_SHEETS_WEBHOOK_URL, and the same SECRET
 *      into GOOGLE_SHEETS_SECRET, in the site's environment variables
 *
 * HARD RULE: contact and interest data only. No symptoms, no diagnosis,
 * no prescriptions — see AGASTA_HOMEO_TECH_BLUEPRINT.md §11.1.
 */

var SPREADSHEET_ID = "PUT_THE_LEADS_SPREADSHEET_ID_HERE";
var SHEET_NAME = "Patients";

var HEADERS = [
  "Submitted At",
  "Name",
  "WhatsApp",
  "City / District",
  "Interest",
  "Language",
  "Source",
  "Consent",
  "Status"
];

/** Run once from the editor to grant spreadsheet access. */
function authorizeOnce() {
  var sheet = getLeadSheet_(SpreadsheetApp.openById(SPREADSHEET_ID));
  Logger.log("Authorized. Sheet: " + sheet.getName());
}

function doGet() {
  return jsonResponse({ ok: true, message: "Agasta Homeo lead webhook is live" });
}

function getLeadSheet_(ss) {
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  return sheet;
}

function ensureHeaderRow_(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }
}

function parseRequest_(e) {
  if (e.parameter && (e.parameter.name || e.parameter.phone)) {
    return e.parameter;
  }

  if (!e.postData || !e.postData.contents) return {};

  var contents = String(e.postData.contents).trim();
  var contentType = e.postData.type || "";

  if (contentType.indexOf("application/json") !== -1 || contents.charAt(0) === "{") {
    try {
      return JSON.parse(contents);
    } catch (err) {
      return {};
    }
  }

  var params = {};
  var pairs = contents.split("&");
  for (var i = 0; i < pairs.length; i++) {
    var eq = pairs[i].indexOf("=");
    if (eq === -1) continue;
    var key = decodeURIComponent(pairs[i].substring(0, eq).replace(/\+/g, " "));
    var value = decodeURIComponent(pairs[i].substring(eq + 1).replace(/\+/g, " "));
    params[key] = value;
  }
  return params;
}

function doPost(e) {
  try {
    var expectedSecret = PropertiesService.getScriptProperties().getProperty("SECRET");
    var data = parseRequest_(e);

    if (expectedSecret && data.secret !== expectedSecret) {
      return jsonResponse({ error: "Unauthorized" });
    }

    if (!data.name || !data.phone) {
      return jsonResponse({ error: "Name and phone are required." });
    }

    // Consent is not optional. No consent, no row.
    if (!data.consent) {
      return jsonResponse({ error: "Consent is required." });
    }

    var sheet = getLeadSheet_(SpreadsheetApp.openById(SPREADSHEET_ID));
    ensureHeaderRow_(sheet);

    sheet.appendRow([
      data.submittedAt ? new Date(data.submittedAt) : new Date(),
      String(data.name).trim(),
      "'" + String(data.phone).trim(), // leading quote keeps the number as text
      String(data.city || "").trim(),
      String(data.interest || "").trim(),
      String(data.language || "hi").trim(),
      String(data.source || "").trim(),
      String(data.consent).trim(),
      ""
    ]);

    return jsonResponse({ ok: true });
  } catch (err) {
    return jsonResponse({ error: String(err) });
  }
}

function jsonResponse(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(
    ContentService.MimeType.JSON
  );
}
