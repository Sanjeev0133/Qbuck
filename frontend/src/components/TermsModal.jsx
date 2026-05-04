import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, Shield, FileText, Lock } from "lucide-react";

const STORAGE_KEY = "qb_terms_accepted_v1";

export default function TermsModal() {
  const [open, setOpen] = useState(false);
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    try {
      const accepted = localStorage.getItem(STORAGE_KEY);
      if (!accepted) setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  const accept = () => {
    if (!agreed) return;
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ accepted_at: new Date().toISOString(), version: 1 })
      );
    } catch {}
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="terms-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-6"
          data-testid="terms-modal-overlay"
        >
          {/* Scrim */}
          <div className="absolute inset-0 bg-ink/70 backdrop-blur-md" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full md:max-w-2xl bg-sand-light rounded-t-4xl md:rounded-4xl shadow-2xl border border-black/5 overflow-hidden"
            data-testid="terms-modal"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-olive" />

            <div className="p-7 md:p-10">
              <p className="text-[11px] uppercase tracking-[0.22em] text-olive font-semibold">
                Before you continue
              </p>
              <h2
                className="mt-3 font-display font-bold leading-[0.95] tracking-[-0.035em]"
                style={{ fontSize: "clamp(28px, 4.5vw, 44px)" }}
              >
                Welcome to QuickBuck.
                <br />
                <span className="text-ink/60">A few important things.</span>
              </h2>

              <p className="mt-5 text-ink/70 leading-relaxed">
                QuickBuck is a technology platform that connects task givers with task doers in India.
                By continuing to use this site or joining the waitlist, you confirm that you have read
                and agree to the following:
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { icon: FileText, title: "Earners Agreement", to: "/legal#earners-agreement" },
                  { icon: Shield, title: "Trust & Safety", to: "/legal#trust-safety" },
                  { icon: Lock, title: "Privacy Policy", to: "/legal#privacy" },
                ].map((d) => (
                  <Link
                    key={d.title}
                    to={d.to}
                    target="_blank"
                    rel="noopener"
                    data-testid={`terms-link-${d.title.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                    className="group bg-white border border-black/10 rounded-2xl p-4 hover:border-olive transition-colors flex items-start gap-3"
                  >
                    <div className="w-9 h-9 rounded-xl bg-olive/10 group-hover:bg-olive group-hover:text-sand-light flex items-center justify-center text-olive shrink-0 transition-colors">
                      <d.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-sm tracking-tight leading-tight">{d.title}</p>
                      <p className="text-[11px] text-ink/50 mt-1 uppercase tracking-[0.18em]">Read in full →</p>
                    </div>
                  </Link>
                ))}
              </div>

              <ul className="mt-7 space-y-2 text-sm text-ink/75">
                <li className="flex gap-2"><span className="text-olive">•</span>You must be 18+ to use QuickBuck.</li>
                <li className="flex gap-2"><span className="text-olive">•</span>All payments are digital only — processed via Razorpay.</li>
                <li className="flex gap-2"><span className="text-olive">•</span>QuickBuck is an intermediary — we don't employ task doers or supervise tasks.</li>
                <li className="flex gap-2"><span className="text-olive">•</span>You're responsible for your own conduct, taxes, and KYC accuracy.</li>
              </ul>

              <label
                className="mt-7 flex items-start gap-3 cursor-pointer select-none p-4 bg-white border border-black/10 rounded-2xl hover:border-olive/60 transition-colors"
                data-testid="terms-agree-label"
              >
                <span
                  className={`mt-0.5 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all shrink-0 ${
                    agreed ? "bg-olive border-olive text-sand-light" : "border-ink/30 bg-white"
                  }`}
                >
                  {agreed && <Check className="w-3.5 h-3.5" strokeWidth={3} />}
                </span>
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  data-testid="terms-agree-checkbox"
                />
                <span className="text-sm text-ink/85 leading-relaxed">
                  I have read and accept the QuickBuck{" "}
                  <Link to="/legal#earners-agreement" target="_blank" className="underline underline-offset-4 decoration-olive hover:text-olive">
                    Earners Agreement
                  </Link>
                  ,{" "}
                  <Link to="/legal#trust-safety" target="_blank" className="underline underline-offset-4 decoration-olive hover:text-olive">
                    Trust &amp; Safety guidelines
                  </Link>
                  , and{" "}
                  <Link to="/legal#privacy" target="_blank" className="underline underline-offset-4 decoration-olive hover:text-olive">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>

              <button
                onClick={accept}
                disabled={!agreed}
                data-testid="terms-accept-btn"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-semibold transition-all duration-300 bg-ink text-sand-light hover:bg-olive disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Accept and continue
              </button>

              <p className="mt-4 text-[11px] text-ink/45 text-center">
                If you don't agree, please discontinue use of the platform.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
