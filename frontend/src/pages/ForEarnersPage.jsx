import React from "react";
import { FadeIn, Stagger, StaggerItem } from "../components/Motion";
import WaitlistForm from "../components/WaitlistForm";
import AppStoreBadges from "../components/AppStoreBadges";

const IMG_APP = "https://static.prod-images.emergentagent.com/jobs/42615750-0951-4498-b028-ddddca2ee976/images/07983b11bcc012e8b989ff34704f1cf9c19f17c5de5911e09ebcd9adec5d7fd1.png";

export default function ForEarnersPage() {
  return (
    <div data-testid="for-earners-page">
      {/* Hero */}
      <section className="relative pt-40 md:pt-52 pb-24 bg-sand-light overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14 grid lg:grid-cols-12 gap-12 items-end">
          <FadeIn className="lg:col-span-8">
            <span className="text-xs uppercase tracking-[0.22em] text-olive font-semibold">For earners</span>
            <h1 className="mt-6 font-display font-bold text-balance leading-[0.9] tracking-[-0.04em]"
                style={{ fontSize: "clamp(48px, 9vw, 148px)" }}>
              Free hour.<br />
              <span className="text-olive italic font-light" style={{fontFamily:"'Bricolage Grotesque', serif"}}>Paid</span> in cash.
            </h1>
          </FadeIn>
          <FadeIn delay={0.15} className="lg:col-span-4">
            <p className="text-lg text-ink/70 leading-relaxed max-w-md">
              Pick up real gigs near home on your own schedule — no interviews, no notice period, no waiting two weeks for a salary credit.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Split feature */}
      <section className="py-24 md:py-32 bg-sand-light">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn>
            <div className="aspect-[4/5] rounded-4xl bg-sand overflow-hidden relative">
              <img src={IMG_APP} alt="QuickBuck app" className="w-full h-full object-cover" />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <span className="text-xs uppercase tracking-[0.22em] text-olive font-semibold">Built for how you live</span>
            <h2 className="mt-5 font-display font-bold text-balance leading-[0.95] tracking-[-0.035em]"
                style={{ fontSize: "clamp(36px, 5.5vw, 80px)" }}>
              No boss. No fixed shift. <span className="text-olive">No paperwork.</span>
            </h2>
            <ul className="mt-10 space-y-6">
              {[
                { k: "Work when you want", v: "A free Saturday afternoon? An hour between meetings? Open the app — gigs are waiting." },
                { k: "Cash out instantly", v: "Transfer to your bank, UPI, or wallet in under a minute. No 'pending' or salary delays." },
                { k: "Build your reputation", v: "Every 5-star gig earns badges that unlock higher-paying tasks and recurring clients." },
                { k: "Real safety, real support", v: "Live trip sharing, in-app emergency line, and 24/7 human support — not a chatbot." },
              ].map((f) => (
                <li key={f.k} className="border-t border-black/10 pt-5">
                  <p className="font-display text-2xl font-semibold tracking-tight">{f.k}</p>
                  <p className="mt-2 text-ink/65 leading-relaxed">{f.v}</p>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* Earning examples */}
      <section className="py-24 md:py-32 bg-ink text-sand-light">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.22em] text-olive-light font-semibold">A realistic afternoon</span>
            <h2 className="mt-5 font-display font-bold text-balance leading-[0.95] tracking-[-0.035em] max-w-3xl"
                style={{ fontSize: "clamp(36px, 5.5vw, 80px)" }}>
              What gigs typically pay near you.
            </h2>
            <p className="mt-6 text-sand-light/65 max-w-2xl text-lg">
              Indicative payouts based on common neighbourhood gigs. Actual prices are set per task by the poster.
            </p>
          </FadeIn>

          <Stagger className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { time: "Walk", task: "Two dogs · 30 min", pay: "₹200" },
              { time: "Tech help", task: "Wi-Fi setup · 1 hr", pay: "₹380" },
              { time: "Lawn", task: "Mow front yard", pay: "₹300" },
              { time: "Delivery", task: "Grocery run · 2 km", pay: "₹180" },
              { time: "Care", task: "Babysit · 3 hrs", pay: "₹480" },
            ].map((g, i) => (
              <StaggerItem key={i}>
                <div className="border border-sand-light/10 rounded-3xl p-6 h-full bg-ink hover:bg-olive hover:border-olive transition-colors duration-500">
                  <p className="font-mono text-xs text-olive-light uppercase tracking-[0.18em]">{g.time}</p>
                  <p className="mt-6 font-display text-xl font-semibold tracking-tight">{g.task}</p>
                  <p className="mt-4 text-3xl font-display font-bold text-sand-light">{g.pay}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-olive text-sand-light py-24 md:py-32" id="waitlist">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
          <FadeIn>
            <h2 className="font-display font-bold text-balance leading-[0.9] tracking-[-0.04em] max-w-3xl"
                style={{ fontSize: "clamp(40px, 7vw, 112px)" }}>
              Got a free hour? <span className="italic font-light" style={{fontFamily:"'Bricolage Grotesque', serif"}}>Turn it into cash.</span>
            </h2>
          </FadeIn>
          <div className="mt-10 max-w-xl">
            <WaitlistForm variant="dark" role="earner" source="for-earners" testidPrefix="earners-waitlist" />
            <div className="mt-8"><AppStoreBadges variant="dark" /></div>
          </div>
        </div>
      </section>
    </div>
  );
}
