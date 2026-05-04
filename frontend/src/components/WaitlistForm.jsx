import React, { useState } from "react";
import axios from "axios";
import { ArrowRight, Check } from "lucide-react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { hasAcceptedTerms, requestTermsAcceptance } from "../lib/consent";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function WaitlistForm({ variant = "light", role = "earner", source = "homepage", testidPrefix = "waitlist" }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onDark = variant === "dark";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }
    if (!hasAcceptedTerms()) {
      toast.error("Please accept the QuickBuck terms to continue.");
      requestTermsAcceptance();
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/waitlist`, { email, role, source });
      setSuccess(true);
      setEmail("");
      toast.success("You're on the list. Welcome to QuickBuck.");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      data-testid={`${testidPrefix}-form`}
      className={`w-full max-w-xl ${onDark ? "" : ""}`}
    >
      <div
        className={`relative flex items-center rounded-full p-1.5 transition-all border ${
          onDark
            ? "bg-sand-light/10 border-sand-light/20 focus-within:border-sand-light/50"
            : "bg-white border-black/10 focus-within:border-olive"
        }`}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          data-testid={`${testidPrefix}-email-input`}
          className={`flex-1 bg-transparent outline-none px-5 py-3.5 text-[15px] font-medium placeholder:font-normal ${
            onDark ? "text-sand-light placeholder:text-sand-light/40" : "text-ink placeholder:text-ink/40"
          }`}
        />
        <button
          type="submit"
          disabled={loading}
          data-testid={`${testidPrefix}-submit-btn`}
          className={`inline-flex items-center gap-2 rounded-full px-5 md:px-6 py-3 text-sm font-semibold transition-all duration-300 disabled:opacity-60 ${
            onDark
              ? "bg-sand-light text-ink hover:bg-olive hover:text-sand-light"
              : "bg-ink text-sand-light hover:bg-olive"
          }`}
        >
          <AnimatePresence mode="wait" initial={false}>
            {success ? (
              <motion.span
                key="ok"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="inline-flex items-center gap-2"
              >
                <Check className="w-4 h-4" />
                On the list
              </motion.span>
            ) : (
              <motion.span
                key="go"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="inline-flex items-center gap-2"
              >
                {loading ? "Joining…" : "Get early access"}
                {!loading && <ArrowRight className="w-4 h-4" />}
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
      <p className={`mt-3 text-xs ${onDark ? "text-sand-light/50" : "text-ink/50"}`}>
        Free to join. No spam. Unsubscribe anytime.
      </p>
    </form>
  );
}
