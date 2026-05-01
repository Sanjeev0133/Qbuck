import React from "react";
import { FadeIn, Stagger, StaggerItem } from "../components/Motion";
import WaitlistForm from "../components/WaitlistForm";

const VALUES = [
  { title: "Dignity of work", body: "We believe teenagers are capable, responsible, and under-employed. QuickBuck gives them a first taste of meaningful work — not minimum-wage drudgery." },
  { title: "Radical transparency", body: "Every fee, every payout, every poster's rating is visible upfront. No fine print. No 'surge' pricing. No hidden markup." },
  { title: "Neighborhood-first", body: "The best gigs are the ones a 10-minute bike ride from home. We design everything around short radius, strong community, and real accountability." },
  { title: "Safety isn't a feature", body: "It's the whole product. Verified parents, verified posters, live check-ins, escrow payments, 24/7 human support." },
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
              We're building the <span className="text-olive italic font-light" style={{fontFamily:"'Bricolage Grotesque', serif"}}>first job</span> a million teens will ever have.
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
              The traditional "teen job" is broken. Babysitting depends on who your parents know. Lemonade stands don't scale.
              Part-time retail jobs are hard to get, harder to schedule, and pay you two weeks late.
            </p>
            <p className="text-ink/60">
              Meanwhile, your neighbour has a sofa that needs moving, a dog that needs walking, and a Jio router they can't figure out.
              They'd happily pay ₹250 cash — right now — for someone to just show up.
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

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Rohan M.", role: "Co-founder / CEO", bio: "Grew up mowing lawns for ₹50. Now building the app he wishes he'd had at 15." },
              { name: "Aisha K.", role: "Co-founder / CTO", bio: "Ex-fintech. Obsessed with instant settlement and making trust scale." },
              { name: "Sam P.", role: "Head of Trust & Safety", bio: "Former child-safety advisor. Every safety feature goes through him first." },
            ].map((p, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white border border-black/5 rounded-4xl overflow-hidden">
                  <div className="aspect-[4/5] bg-gradient-to-br from-olive/20 via-sand to-sand-dark/40 flex items-center justify-center">
                    <span className="font-display text-8xl font-bold text-olive/60">{p.name[0]}</span>
                  </div>
                  <div className="p-6">
                    <p className="font-display text-2xl font-semibold tracking-tight">{p.name}</p>
                    <p className="text-olive text-sm font-medium uppercase tracking-[0.18em] mt-1">{p.role}</p>
                    <p className="mt-4 text-ink/65 leading-relaxed">{p.bio}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
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
