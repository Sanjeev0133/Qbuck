import React from "react";
import { Link } from "react-router-dom";
import { FadeIn } from "../components/Motion";
import { ArrowRight } from "lucide-react";

export default function NotFoundPage() {
  return (
    <section className="pt-40 md:pt-52 pb-32 bg-sand-light min-h-[80vh]" data-testid="not-found-page">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
        <FadeIn>
          <p className="font-mono text-sm text-olive">404 · not found</p>
          <h1 className="mt-4 font-display font-bold text-balance leading-[0.9] tracking-[-0.04em]"
              style={{ fontSize: "clamp(48px, 9vw, 148px)" }}>
            This page is <span className="text-olive italic font-light" style={{fontFamily:"'Bricolage Grotesque', serif"}}>out on a gig</span>.
          </h1>
          <p className="mt-8 text-xl text-ink/65 max-w-xl">Let's get you back to somewhere more useful.</p>
          <Link to="/" data-testid="not-found-home-btn" className="mt-8 inline-flex items-center gap-2 bg-ink text-sand-light rounded-full px-7 py-4 font-semibold hover:bg-olive transition-colors">
            Back home <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
