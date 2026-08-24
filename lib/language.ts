/** Cookie + localStorage key for the Hindi/English display toggle. */
export const LANG_STORAGE_KEY = "agasta-lang";

export type SiteLang = "hi" | "en";

export function parseSiteLang(value: string | undefined | null): SiteLang {
  return value === "en" ? "en" : "hi";
}
