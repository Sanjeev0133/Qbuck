// Lightweight consent helper for the QuickBuck T&C gate.
// Acceptance is stored in localStorage with a versioned key so we can re-prompt
// returning users by bumping the version (here and in TermsModal.jsx).

export const TERMS_STORAGE_KEY = "qb_terms_accepted_v1";
export const TERMS_ACCEPTED_EVENT = "qb:terms-accepted";
export const OPEN_TERMS_EVENT = "qb:open-terms";

export function hasAcceptedTerms() {
  try {
    return Boolean(localStorage.getItem(TERMS_STORAGE_KEY));
  } catch {
    return false;
  }
}

/** Force-open the consent modal from anywhere (e.g. when a form is blocked). */
export function requestTermsAcceptance() {
  try {
    window.dispatchEvent(new CustomEvent(OPEN_TERMS_EVENT));
  } catch {}
}

/** Mark terms accepted + notify subscribers. */
export function markTermsAccepted() {
  try {
    localStorage.setItem(
      TERMS_STORAGE_KEY,
      JSON.stringify({ accepted_at: new Date().toISOString(), version: 1 })
    );
    window.dispatchEvent(new CustomEvent(TERMS_ACCEPTED_EVENT));
  } catch {}
}
