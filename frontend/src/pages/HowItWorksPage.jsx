import React from "react";
import { FadeIn, Stagger, StaggerItem } from "../components/Motion";
import WaitlistForm from "../components/WaitlistForm";
import { ChevronRight } from "lucide-react";

const STEPS = [
  {
    num: "01",
    title: "Sign up & get verified",
    body: "Create your teen account in 90 seconds. Parents receive a consent link and verify the account from their own phone.",
    details: ["Age 13–19 eligible", "Parent ID verification", "Free, forever"],
  },
  {
    num: "02",
    title: "Browse nearby gigs",
    body: "Open the live map. Filter by distance, payout, and category. Every gig shows the full price, location, and the poster's rating.",
    details: ["Radius: 0.5 – 3 km", "Upfront pricing — no hidden fees", "Poster identity verified"],
  },
  {
    num: "03",
    title: "Accept & chat",
    body: "Tap accept. A secure in-app chat opens with the poster. Agree on timing. Navigate with built-in directions.",
    details: ["Private encrypted chat", "Live ETA sharing", "Safety check-ins every 30 min"],
  },
  {
    num: "04",
    title: "Complete the task",
    body: "Show up, do great work, snap a before/after photo in the app. The poster confirms with a single tap.",
    details: ["Photo-verified completion", "24/7 support", "Rating both ways"],
  },
  {
    num: "05",
    title: "Get paid. Instantly.",
    body: "As soon as the poster confirms, cash lands in your QuickBuck wallet. Cash out to your bank in under 60 seconds.",
    details: ["No 'net 30' or 'pending'", "Bank + debit + digital cash", "Weekly report emailed to parents"],
  },
];

const FAQ = [
  { q: "How old do I have to be?", a: "QuickBuck is open to teens ages 13–19 with verified parental consent. Posters must be 18+ and ID-verified." },
  { q: "Is it really instant?", a: "Yes. The moment a poster confirms your task is complete, funds are released to your QuickBuck wallet. Cash-outs to most banks settle in under a minute." },
  { q: "What if something goes wrong?", a: "Every gig is covered by our dispute and refund protection. In-app safety check-ins and 24/7 support are available anytime." },
  { q: "Do parents have visibility?", a: "Parents get a dedicated dashboard with live location during tasks, earnings summaries, and the ability to approve or decline specific gig categories." },
  { q: "What does it cost?", a: "Joining and accepting gigs is free for teens. Task posters pay a small service fee per gig. No subscription, ever." },
];

export default function HowItWorksPage() {
  return (
    <div data-testid="how-it-works-page">
      {/* Hero */}
      <section className="pt-40 md:pt-52 pb-24 bg-sand-light">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.22em] text-olive font-semibold">How it works</span>
            <h1 className="mt-6 font-display font-bold text-balance leading-[0.9] tracking-[-0.04em] max-w-5xl"
                style={{ fontSize: "clamp(48px, 9vw, 148px)" }}>
              Five steps between you and <span className="text-olive italic font-light" style={{fontFamily:"'Bricolage Grotesque', serif"}}>cash in hand</span>.
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-10 text-xl md:text-2xl text-ink/65 max-w-2xl leading-relaxed">
              QuickBuck strips away the nonsense of traditional part-time work.
              Here's exactly what happens, start to finish.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-sand-light pb-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="space-y-4">
            {STEPS.map((s, i) => (
              <FadeIn key={s.num} delay={i * 0.05}>
                <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 p-8 md:p-12 rounded-4xl transition-colors ${i % 2 === 0 ? "bg-white border border-black/5" : "bg-ink text-sand-light"}`}>
                  <div className="md:col-span-3">
                    <span className={`font-mono text-sm ${i % 2 === 0 ? "text-olive" : "text-olive-light"}`}>
                      STEP {s.num}
                    </span>
                    <h2 className="mt-4 font-display font-semibold text-3xl md:text-4xl tracking-tight leading-[1.05]">
                      {s.title}
                    </h2>
                  </div>
                  <div className="md:col-span-6">
                    <p className={`text-lg md:text-xl leading-relaxed ${i % 2 === 0 ? "text-ink/75" : "text-sand-light/80"}`}>
                      {s.body}
                    </p>
                  </div>
                  <ul className={`md:col-span-3 space-y-3 text-sm ${i % 2 === 0 ? "text-ink/60" : "text-sand-light/70"}`}>
                    {s.details.map((d) => (
                      <li key={d} className="flex items-start gap-2">
                        <ChevronRight className={`w-4 h-4 shrink-0 mt-0.5 ${i % 2 === 0 ? "text-olive" : "text-olive-light"}`} />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ink text-sand-light py-24 md:py-32" data-testid="faq-section">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <FadeIn className="lg:col-span-4">
              <span className="text-xs uppercase tracking-[0.22em] text-olive-light font-semibold">Questions</span>
              <h2 className="mt-5 font-display font-bold text-balance leading-[0.95] tracking-[-0.035em]"
                  style={{ fontSize: "clamp(40px, 6vw, 88px)" }}>
                Good ones.
                <br />Fair answers.
              </h2>
            </FadeIn>
            <Stagger className="lg:col-span-8 space-y-2">
              {FAQ.map((f, i) => (
                <StaggerItem key={i}>
                  <details className="group border-b border-sand-light/10 py-6 cursor-pointer" data-testid={`faq-item-${i}`}>
                    <summary className="flex items-center justify-between list-none">
                      <span className="font-display text-xl md:text-2xl font-semibold tracking-tight">{f.q}</span>
                      <span className="w-8 h-8 rounded-full border border-sand-light/20 flex items-center justify-center transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-4 text-sand-light/75 leading-relaxed max-w-2xl">{f.a}</p>
                  </details>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <div className="mt-24" id="waitlist">
            <FadeIn>
              <p className="text-xs uppercase tracking-[0.22em] text-olive-light mb-6">Ready?</p>
              <WaitlistForm variant="dark" testidPrefix="how-waitlist" />
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
