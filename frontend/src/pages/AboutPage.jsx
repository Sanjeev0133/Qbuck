import React from "react";
import { FadeIn, Stagger, StaggerItem } from "../components/Motion";
import WaitlistForm from "../components/WaitlistForm";

const VALUES = [
  { title: "Dignity of work", body: "Every gig — from a 30-minute dog walk to a 2-hour sofa move — deserves real pay, on time, with respect. We design every flow around that idea." },
  { title: "Radical transparency", body: "Every fee, every payout, every poster's rating is visible upfront. No fine print. No 'surge' pricing. No hidden markup." },
  { title: "Neighborhood-first", body: "The best gigs are the ones a 10-minute bike ride from home. We design everything around short radius, strong community, and real accountability." },
  { title: "Safety isn't a feature", body: "It's the whole product. ID-verified earners and posters, live trip sharing, escrow payments, in-app SOS, and 24/7 human support." },
];

export default function AboutPage() {
  return (
    <div data-testid="about-page">
      {/* Hero */}
      <section className="pt-40 md:pt-56 pb-24 bg-sand-light">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.22em] text-olive font-semibold">About QuickBuck</span>
            <h1 className="mt-8 font-display font-bold text-balance leading-[0.88] tracking-[-0.04em] max-w-6xl"
                style={{ fontSize: "clamp(56px, 10vw, 176px)" }}>
              The fastest way to <span className="text-olive italic font-light" style={{fontFamily:"'Bricolage Grotesque', serif"}}>earn</span> a buck in your neighbourhood.
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Mission narrative */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14 grid lg:grid-cols-12 gap-12">
          <FadeIn className="lg:col-span-4">
            <span className="text-xs uppercase tracking-[0.22em] text-olive font-semibold">Our mission</span>
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-8 space-y-6 text-xl md:text-2xl leading-[1.35] text-ink/85 text-balance">
            <p>
              The traditional path to side income is slow and gate-kept. Walk-in part-time work is hard to find, harder to schedule, and pays you weeks late.
              Online gig platforms abstract away the neighbourhood entirely.
            </p>
            <p className="text-ink/60">
              Meanwhile, your neighbour has a sofa that needs moving, a dog that needs walking, and a Jio router they can't figure out.
              They'd happily pay ₹250 cash — right now — for someone nearby to just show up.
            </p>
            <p className="text-olive font-semibold">
              QuickBuck is the bridge.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-ink text-sand-light">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.22em] text-olive-light font-semibold">What we believe</span>
            <h2 className="mt-5 font-display font-bold text-balance leading-[0.95] tracking-[-0.035em] max-w-3xl"
                style={{ fontSize: "clamp(36px, 5.5vw, 80px)" }}>
              Four principles. No mission-statement fluff.
            </h2>
          </FadeIn>

          <Stagger className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map((v, i) => (
              <StaggerItem key={v.title}>
                <div className="border border-sand-light/10 rounded-4xl p-8 md:p-10 h-full hover:border-olive-light/60 transition-colors">
                  <span className="font-mono text-sm text-olive-light">0{i + 1}</span>
                  <h3 className="mt-6 font-display font-semibold text-3xl md:text-4xl tracking-tight leading-[1.05]">{v.title}</h3>
                  <p className="mt-4 text-sand-light/70 leading-relaxed">{v.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32 bg-sand-light">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.22em] text-olive font-semibold">The team</span>
            <h2 className="mt-5 font-display font-bold text-balance leading-[0.95] tracking-[-0.035em] max-w-3xl"
                style={{ fontSize: "clamp(36px, 5.5vw, 72px)" }}>
              Small. Fast. Relentless.
            </h2>
          </FadeIn>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Paul Abraham",  role: "Technical Engineering",            bio: "Owns the core platform stack. Obsessed with reliability, performance, and writing the smallest possible code that solves the biggest possible problem." },
              { name: "Sanjeev Reddy", role: "Web Engineering",                  bio: "Builds the surfaces you actually touch. Translates designs into fast, accessible, beautifully animated experiences across web and mobile." },
              { name: "Chavi",         role: "User Flow & Product Efficiency",   bio: "Maps every tap, every screen, every drop-off. Removes friction so the path from gig posted to gig paid is as short as humanly possible." },
              { name: "Tapasya",       role: "Revenue & Finance Management",     bio: "Designs the unit economics so QuickBuck can pay earners instantly and stay sustainable. Makes the math add up — for everyone." },
              { name: "Joanna",        role: "Marketing Head",                   bio: "Tells QuickBuck's story to the people it's actually built for. Owns brand, growth, and every conversation that brings the next earner home." },
            ].map((p, i) => {
              const initials = p.name.split(" ").map((s) => s[0]).slice(0, 2).join("");
              return (
                <FadeIn key={p.name} delay={i * 0.08}>
                  <div className="bg-white border border-black/5 rounded-4xl overflow-hidden h-full flex flex-col">
                    <div className="aspect-[4/5] relative bg-gradient-to-br from-olive/30 via-sand to-sand-dark/60 flex items-center justify-center">
                      <span className="font-display text-[7rem] font-extrabold text-ink/15 tracking-[-0.04em] leading-none">{initials}</span>
                      <span className="absolute bottom-4 left-4 right-4 text-[10px] uppercase tracking-[0.22em] text-ink/40">Photo coming soon</span>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <p className="font-display text-2xl font-semibold tracking-tight">{p.name}</p>
                      <p className="text-olive text-[11px] font-medium uppercase tracking-[0.22em] mt-2">{p.role}</p>
                      <p className="mt-4 text-ink/65 leading-relaxed text-[15px]">{p.bio}</p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-olive text-sand-light py-24 md:py-32" id="waitlist">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
          <FadeIn>
            <h2 className="font-display font-bold text-balance leading-[0.9] tracking-[-0.04em] max-w-4xl"
                style={{ fontSize: "clamp(40px, 7vw, 112px)" }}>
              Join us on the ground floor.
            </h2>
          </FadeIn>
          <div className="mt-10 max-w-xl">
            <WaitlistForm variant="dark" source="about" testidPrefix="about-waitlist" />
          </div>
        </div>
      </section>
    </div>
  );
}
