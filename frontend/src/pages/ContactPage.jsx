import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { FadeIn } from "../components/Motion";
import { Mail, MapPin, MessageCircle, ArrowRight } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "General inquiry", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const onChange = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields");
      return;
    }
    if (form.message.trim().length < 5) {
      toast.error("Tell us a bit more (at least 5 characters)");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Message received. We'll be in touch within 24 hours.");
      setSent(true);
      setForm({ name: "", email: "", subject: "General inquiry", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Couldn't send. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div data-testid="contact-page">
      {/* Hero */}
      <section className="pt-40 md:pt-52 pb-16 bg-sand-light">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.22em] text-olive font-semibold">Contact</span>
            <h1 className="mt-6 font-display font-bold text-balance leading-[0.9] tracking-[-0.04em] max-w-5xl"
                style={{ fontSize: "clamp(48px, 9vw, 148px)" }}>
              Say hi. <span className="text-olive italic font-light" style={{fontFamily:"'Bricolage Grotesque', serif"}}>We reply.</span>
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="pb-24 md:pb-40 bg-sand-light">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14 grid lg:grid-cols-12 gap-12">
          {/* Left info */}
          <FadeIn className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-olive font-semibold mb-3">Email</p>
              <a href="mailto:hello@quickbuck.app" className="font-display text-3xl md:text-4xl font-semibold tracking-tight hover:text-olive transition-colors inline-flex items-center gap-2">
                hello@quickbuck.app <Mail className="w-5 h-5" />
              </a>
              <p className="text-ink/60 mt-3">Average reply time: 4 hours (weekdays).</p>
            </div>
            <div className="border-t border-black/10 pt-8">
              <p className="text-xs uppercase tracking-[0.22em] text-olive font-semibold mb-3">Press</p>
              <a href="mailto:press@quickbuck.app" className="font-display text-2xl font-semibold tracking-tight hover:text-olive">
                press@quickbuck.app
              </a>
            </div>
            <div className="border-t border-black/10 pt-8">
              <p className="text-xs uppercase tracking-[0.22em] text-olive font-semibold mb-3">HQ</p>
              <p className="font-display text-xl tracking-tight inline-flex items-center gap-2">
                <MapPin className="w-5 h-5 text-olive" />
                Austin, TX — with teams in LA & NYC
              </p>
            </div>
            <div className="border-t border-black/10 pt-8">
              <p className="text-xs uppercase tracking-[0.22em] text-olive font-semibold mb-3">Trust & Safety</p>
              <p className="text-ink/75 leading-relaxed">
                If you're a parent or teen with an urgent safety concern, we have 24/7 support inside the app after launch. For now, email <a href="mailto:safety@quickbuck.app" className="underline underline-offset-4 decoration-olive">safety@quickbuck.app</a>.
              </p>
            </div>
          </FadeIn>

          {/* Right form */}
          <FadeIn delay={0.1} className="lg:col-span-7">
            <form
              onSubmit={submit}
              data-testid="contact-form"
              className="bg-white border border-black/5 rounded-4xl p-8 md:p-10 space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs uppercase tracking-[0.18em] text-ink/60 font-semibold">Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={onChange("name")}
                    required
                    data-testid="contact-name-input"
                    className="mt-2 w-full bg-sand-light/70 border border-black/10 rounded-2xl px-4 py-3.5 outline-none focus:border-olive focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.18em] text-ink/60 font-semibold">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={onChange("email")}
                    required
                    data-testid="contact-email-input"
                    className="mt-2 w-full bg-sand-light/70 border border-black/10 rounded-2xl px-4 py-3.5 outline-none focus:border-olive focus:bg-white transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.18em] text-ink/60 font-semibold">Topic</label>
                <select
                  value={form.subject}
                  onChange={onChange("subject")}
                  data-testid="contact-subject-select"
                  className="mt-2 w-full bg-sand-light/70 border border-black/10 rounded-2xl px-4 py-3.5 outline-none focus:border-olive focus:bg-white"
                >
                  <option>General inquiry</option>
                  <option>Partnership</option>
                  <option>Press</option>
                  <option>Trust & Safety</option>
                  <option>Investor</option>
                </select>
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.18em] text-ink/60 font-semibold">Message</label>
                <textarea
                  rows={6}
                  value={form.message}
                  onChange={onChange("message")}
                  required
                  data-testid="contact-message-input"
                  className="mt-2 w-full bg-sand-light/70 border border-black/10 rounded-2xl px-4 py-3.5 outline-none focus:border-olive focus:bg-white resize-none transition-colors"
                  placeholder="Tell us what's up..."
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                data-testid="contact-submit-btn"
                className="inline-flex items-center gap-2 bg-ink text-sand-light rounded-full px-7 py-4 font-semibold hover:bg-olive transition-colors disabled:opacity-60"
              >
                {loading ? "Sending…" : sent ? "Sent — thanks!" : "Send message"}
                {!loading && <ArrowRight className="w-4 h-4" />}
              </button>
            </form>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
