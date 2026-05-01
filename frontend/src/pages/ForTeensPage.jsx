import React from "react";
import { FadeIn, Stagger, StaggerItem } from "../components/Motion";
import WaitlistForm from "../components/WaitlistForm";
import AppStoreBadges from "../components/AppStoreBadges";

const IMG_APP = "https://static.prod-images.emergentagent.com/jobs/42615750-0951-4498-b028-ddddca2ee976/images/07983b11bcc012e8b989ff34704f1cf9c19f17c5de5911e09ebcd9adec5d7fd1.png";
const IMG_CASH = "https://images.unsplash.com/photo-1633504214759-e1013f422ed7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzN8MHwxfHNlYXJjaHwyfHxjaW5lbWF0aWMlMjBoYXBweSUyMHRlZW5hZ2VyJTIwY2FzaHxlbnwwfHx8fDE3Nzc2MjQxMTB8MA&ixlib=rb-4.1.0&q=85";

export default function ForTeensPage() {
  return (
    <div data-testid="for-teens-page">
      {/* Hero */}
      <section className="relative pt-40 md:pt-52 pb-24 bg-sand-light overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14 grid lg:grid-cols-12 gap-12 items-end">
          <FadeIn className="lg:col-span-8">
            <span className="text-xs uppercase tracking-[0.22em] text-olive font-semibold">For teens</span>
            <h1 className="mt-6 font-display font-bold text-balance leading-[0.9] tracking-[-0.04em]"
                style={{ fontSize: "clamp(48px, 9vw, 148px)" }}>
              School by day.<br />
              <span className="text-olive italic font-light" style={{fontFamily:"'Bricolage Grotesque', serif"}}>Paid</span> by dinner.
            </h1>
          </FadeIn>
          <FadeIn delay={0.15} className="lg:col-span-4">
            <p className="text-lg text-ink/70 leading-relaxed max-w-md">
              Earn real money on your own schedule — no interviews, no uniforms, no waiting two weeks for a paycheck.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-ink text-sand-light py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { big: "₹350", sub: "Average earned per hour on QuickBuck gigs" },
            { big: "< 60s", sub: "From 'task complete' to cash in your wallet" },
            { big: "14 min", sub: "Median distance from home to your first gig" },
          ].map((s, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="border-l border-sand-light/15 pl-6">
                <p className="font-display font-bold text-6xl md:text-7xl tracking-[-0.04em] text-olive-light">{s.big}</p>
                <p className="mt-4 text-sand-light/70 max-w-[240px]">{s.sub}</p>
              </div>
            </FadeIn>
          ))}
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
              No boss. No schedule. <span className="text-olive">No BS.</span>
            </h2>
            <ul className="mt-10 space-y-6">
              {[
                { k: "Work when you want", v: "Free Saturday? Spare hour before practice? Open the app — gigs are waiting." },
                { k: "Cash out instantly", v: "Transfer to your debit card, bank, or Apple Pay in under a minute." },
                { k: "Build your rep", v: "Every 5-star gig earns badges that unlock higher-paying tasks." },
                { k: "Safety first, always", v: "Live check-ins, trip sharing, and a one-tap emergency support line." },
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
            <span className="text-xs uppercase tracking-[0.22em] text-olive-light font-semibold">Realistic weekend</span>
            <h2 className="mt-5 font-display font-bold text-balance leading-[0.95] tracking-[-0.035em] max-w-3xl"
                style={{ fontSize: "clamp(36px, 5.5vw, 80px)" }}>
              One Saturday. Five gigs. ₹1,540.
            </h2>
          </FadeIn>

          <Stagger className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { time: "9:00 AM", task: "Walk two dogs", pay: "₹200" },
              { time: "11:30 AM", task: "Help set up Wi-Fi", pay: "₹380" },
              { time: "1:00 PM", task: "Mow front lawn", pay: "₹300" },
              { time: "4:15 PM", task: "Grocery delivery run", pay: "₹180" },
              { time: "6:00 PM", task: "Babysit for 3 hrs", pay: "₹480" },
            ].map((g, i) => (
              <StaggerItem key={i}>
                <div className="border border-sand-light/10 rounded-3xl p-6 h-full bg-ink hover:bg-olive hover:border-olive transition-colors duration-500">
                  <p className="font-mono text-xs text-olive-light">{g.time}</p>
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
              Stop asking for money. <span className="italic font-light" style={{fontFamily:"'Bricolage Grotesque', serif"}}>Start earning it.</span>
            </h2>
          </FadeIn>
          <div className="mt-10 max-w-xl">
            <WaitlistForm variant="dark" role="teen" source="for-teens" testidPrefix="teens-waitlist" />
            <div className="mt-8"><AppStoreBadges variant="dark" /></div>
          </div>
        </div>
      </section>
    </div>
  );
}
