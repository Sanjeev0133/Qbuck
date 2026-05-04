import React from "react";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-ink text-sand-light overflow-hidden" data-testid="site-footer">
      <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14 pt-24 md:pt-32 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-6">
            <p className="text-xs uppercase tracking-[0.2em] text-sand/60 mb-6">
              Tap · Do · Earn
            </p>
            <h2 className="font-display font-bold text-balance text-3xl md:text-4xl leading-[1.02] tracking-tight">
              Small tasks.
              <br />
              <span className="text-olive-light">Instant cash.</span>
            </h2>
            <p className="mt-6 text-sand/70 max-w-md leading-relaxed">
              QuickBuck connects people with safe, local gigs in their neighbourhood —
              and pays them the moment the job is done.
            </p>

            <a
              href="mailto:quickbuckindia@gmail.com"
              data-testid="footer-email-cta"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-sand/20 px-5 py-3 text-sm hover:bg-olive hover:border-olive transition-colors"
            >
              <Mail className="w-4 h-4" />
              quickbuckindia@gmail.com
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-sand/50 mb-5">Product</p>
            <ul className="space-y-3">
              <li><Link to="/how-it-works" className="text-sand/85 hover:text-sand transition-colors">How it works</Link></li>
              <li><Link to="/for-earners" className="text-sand/85 hover:text-sand transition-colors">For Earners</Link></li>
              <li><Link to="/for-posters" className="text-sand/85 hover:text-sand transition-colors">For Posters</Link></li>
              <li><Link to="/#waitlist" className="text-sand/85 hover:text-sand transition-colors">Join the waitlist</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-sand/50 mb-5">Company</p>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sand/85 hover:text-sand transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-sand/85 hover:text-sand transition-colors">Contact</Link></li>
              <li><Link to="/legal#earners-agreement" className="text-sand/85 hover:text-sand transition-colors">Earners Agreement</Link></li>
              <li><Link to="/legal#trust-safety" className="text-sand/85 hover:text-sand transition-colors">Trust &amp; Safety</Link></li>
              <li><Link to="/legal#privacy" className="text-sand/85 hover:text-sand transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 md:mt-28 border-t border-sand/10 pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <img
            src="/quickbuck-full.png"
            alt="QuickBuck"
            className="h-20 md:h-24 w-auto opacity-95 bg-sand-light/95 rounded-2xl px-3 py-1"
            draggable={false}
          />
          <p className="text-xs text-sand/50">Made in Hyderabad.</p>
        </div>
      </div>
    </footer>
  );
}

