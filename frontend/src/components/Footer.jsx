import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Twitter, Youtube, Mail } from "lucide-react";
import Wordmark from "./Wordmark";

export default function Footer() {
  return (
    <footer className="relative bg-ink text-sand-light overflow-hidden" data-testid="site-footer">
      <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14 pt-24 md:pt-32 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.2em] text-sand/60 mb-6">
              The teen gig economy
            </p>
            <h2 className="font-display font-bold text-balance text-3xl md:text-4xl leading-[1.02] tracking-tight">
              Small tasks.
              <br />
              <span className="text-olive-light">Instant cash.</span>
            </h2>
            <p className="mt-6 text-sand/70 max-w-md leading-relaxed">
              QuickBuck connects teens with safe, local gigs in their neighborhood —
              and pays them the moment the job is done.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <a href="#" data-testid="social-instagram" className="w-10 h-10 rounded-full border border-sand/20 flex items-center justify-center hover:bg-olive hover:border-olive transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" data-testid="social-twitter" className="w-10 h-10 rounded-full border border-sand/20 flex items-center justify-center hover:bg-olive hover:border-olive transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" data-testid="social-youtube" className="w-10 h-10 rounded-full border border-sand/20 flex items-center justify-center hover:bg-olive hover:border-olive transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="mailto:hello@quickbuck.app" data-testid="social-email" className="w-10 h-10 rounded-full border border-sand/20 flex items-center justify-center hover:bg-olive hover:border-olive transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-[0.2em] text-sand/50 mb-5">Product</p>
            <ul className="space-y-3">
              <li><Link to="/how-it-works" className="text-sand/85 hover:text-sand transition-colors">How it works</Link></li>
              <li><Link to="/for-teens" className="text-sand/85 hover:text-sand transition-colors">For Teens</Link></li>
              <li><Link to="/for-posters" className="text-sand/85 hover:text-sand transition-colors">For Posters</Link></li>
              <li><Link to="/#waitlist" className="text-sand/85 hover:text-sand transition-colors">Waitlist</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-[0.2em] text-sand/50 mb-5">Company</p>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sand/85 hover:text-sand transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-sand/85 hover:text-sand transition-colors">Contact</Link></li>
              <li><a href="#" className="text-sand/85 hover:text-sand transition-colors">Press</a></li>
              <li><a href="#" className="text-sand/85 hover:text-sand transition-colors">Careers</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-sand/50 mb-5">Legal & Safety</p>
            <ul className="space-y-3">
              <li><a href="#" className="text-sand/85 hover:text-sand transition-colors">Trust & Safety</a></li>
              <li><a href="#" className="text-sand/85 hover:text-sand transition-colors">Parental consent</a></li>
              <li><a href="#" className="text-sand/85 hover:text-sand transition-colors">Terms</a></li>
              <li><a href="#" className="text-sand/85 hover:text-sand transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>

        {/* Massive wordmark */}
        <div className="mt-24 md:mt-32 border-t border-sand/10 pt-10">
          <div
            className="font-display font-extrabold leading-none tracking-[-0.06em] select-none"
            style={{ fontSize: "clamp(64px, 18vw, 280px)" }}
          >
            <span className="text-sand-light">Quick</span><span className="text-olive-light">Buck</span>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-sand/50">
          <div className="flex items-center gap-2">
            <Wordmark className="text-sm" variant="dark" />
            <span>© {new Date().getFullYear()} QuickBuck Labs, Inc.</span>
          </div>
          <p>Made with care in the neighborhood.</p>
        </div>
      </div>
    </footer>
  );
}
