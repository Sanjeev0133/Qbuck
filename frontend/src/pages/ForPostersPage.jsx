import React from "react";
import { FadeIn, Stagger, StaggerItem } from "../components/Motion";
import WaitlistForm from "../components/WaitlistForm";
import { ArrowRight } from "lucide-react";

export default function ForPostersPage() {
  return (
    <div data-testid="for-posters-page">
      {/* Hero */}
      <section className="pt-40 md:pt-52 pb-24 bg-sand-light">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.22em] text-olive font-semibold">For task posters</span>
            <h1 className="mt-6 font-display font-bold text-balance leading-[0.9] tracking-[-0.04em] max-w-5xl"
                style={{ fontSize: "clamp(48px, 9vw, 148px)" }}>
              The errand is already <span className="text-olive italic font-light" style={{fontFamily:"'Bricolage Grotesque', serif"}}>done</span>.
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-10 text-xl md:text-2xl text-ink/70 max-w-2xl leading-relaxed">
              Post a task. A verified teen in your neighborhood shows up in minutes. You pay only when it's done right.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Flow */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Post a task", body: "Describe the task, set a fair price, attach a photo if it helps. Takes under 30 seconds." },
              { step: "02", title: "Match in minutes", body: "Verified teens nearby see your gig and can accept. You see their rating and past reviews before confirming." },
              { step: "03", title: "Pay on completion", body: "The funds are held in escrow. When you confirm the task is done, they release instantly. Not a cent before." },
            ].map((s, i) => (
              <StaggerItem key={s.step}>
                <div className="border border-black/5 rounded-4xl p-8 md:p-10 h-full bg-sand-light/50">
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-xs text-olive">STEP {s.step}</span>
                    <ArrowRight className="w-5 h-5 text-olive" />
                  </div>
                  <h3 className="mt-10 font-display font-semibold text-3xl tracking-tight leading-[1.05]">{s.title}</h3>
                  <p className="mt-4 text-ink/65 leading-relaxed">{s.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Value grid */}
      <section className="py-24 md:py-32 bg-ink text-sand-light">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.22em] text-olive-light font-semibold">Why post here</span>
            <h2 className="mt-5 font-display font-bold text-balance leading-[0.95] tracking-[-0.035em] max-w-3xl"
                style={{ fontSize: "clamp(36px, 5.5vw, 80px)" }}>
              Faster than TaskRabbit. Cheaper than an agency.
            </h2>
          </FadeIn>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-sand-light/10 rounded-3xl overflow-hidden">
            {[
              { title: "Average match time", value: "7 min", sub: "From post to 'accepted'" },
              { title: "Average savings", value: "46%", sub: "Versus equivalent pro services" },
              { title: "Completion rate", value: "98.2%", sub: "Across our pilot neighborhoods" },
              { title: "Every teen is", value: "Age-verified", sub: "Parental consent on file" },
              { title: "Your payment is", value: "Protected", sub: "Held in escrow, released on confirm" },
              { title: "Service fee", value: "9%", sub: "Transparent. No hidden markup." },
            ].map((c) => (
              <FadeIn key={c.title}>
                <div className="bg-ink p-8 h-full">
                  <p className="text-sand-light/50 text-sm">{c.title}</p>
                  <p className="mt-4 font-display font-bold text-5xl tracking-[-0.035em]">{c.value}</p>
                  <p className="mt-3 text-sand-light/60 text-sm">{c.sub}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Common tasks */}
      <section className="py-24 md:py-32 bg-sand-light">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
          <FadeIn>
            <h2 className="font-display font-bold text-balance leading-[0.95] tracking-[-0.035em] max-w-4xl"
                style={{ fontSize: "clamp(36px, 5.5vw, 80px)" }}>
              What people post most.
            </h2>
          </FadeIn>

          <div className="mt-16 flex flex-wrap gap-3">
            {["Mow my lawn","Walk the dog","Rake leaves","Shovel snow","Help set up Wi-Fi","Carry groceries","Assemble IKEA","Water plants 1 week","Wash the car","Babysit 2 hrs","Move a couch","Clean the garage","Print & mail package","Return Amazon box","Pet sit weekend"].map((t) => (
              <span key={t} className="px-5 py-3 rounded-full bg-white border border-black/10 text-sm font-medium hover:border-olive hover:bg-olive hover:text-sand-light transition-all cursor-default">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-sand-light py-24 md:py-32" id="waitlist">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14 grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <h2 className="font-display font-bold text-balance leading-[0.9] tracking-[-0.04em]"
                style={{ fontSize: "clamp(40px, 6.5vw, 96px)" }}>
              Your to-do list. <br /><span className="text-olive-light">Done by Tuesday.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-sand-light/70 text-lg mb-6 max-w-md">Join the early access list and get 3 free task posts when we launch in your area.</p>
            <WaitlistForm variant="dark" role="poster" source="for-posters" testidPrefix="posters-waitlist" />
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
