import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Zap, Shield, Clock, MapPin, Sparkles, Banknote, Hand } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import WaitlistForm from "../components/WaitlistForm";
import AppStoreBadges from "../components/AppStoreBadges";
import { FadeIn, Stagger, StaggerItem } from "../components/Motion";

const HERO_IMG = "https://images.unsplash.com/photo-1758812925626-e30b5b345582?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwzfHx0ZWVuYWdlciUyMHVzaW5nJTIwcGhvbmUlMjBvdXRkb29yfGVufDB8fHx8MTc3NzYyNDExMHww&ixlib=rb-4.1.0&q=85";
const IMG_TECH = "https://images.unsplash.com/photo-1761499413046-08ac70109128?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwxfHx0ZWVuYWdlciUyMHVzaW5nJTIwcGhvbmUlMjBvdXRkb29yfGVufDB8fHx8MTc3NzYyNDExMHww&ixlib=rb-4.1.0&q=85";
const IMG_DOG = "https://images.unsplash.com/photo-1728945049018-5db2d3f43610?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjV8MHwxfHNlYXJjaHw0fHxtb3dpbmclMjBsYXduJTIwb3IlMjBkb2clMjB3YWxraW5nfGVufDB8fHx8MTc3NzYyNDExMHww&ixlib=rb-4.1.0&q=85";
const IMG_CASH = "https://images.unsplash.com/photo-1633504214759-e1013f422ed7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzN8MHwxfHNlYXJjaHwyfHxjaW5lbWF0aWMlMjBoYXBweSUyMHRlZW5hZ2VyJTIwY2FzaHxlbnwwfHx8fDE3Nzc2MjQxMTB8MA&ixlib=rb-4.1.0&q=85";
const IMG_APP = "https://static.prod-images.emergentagent.com/jobs/42615750-0951-4498-b028-ddddca2ee976/images/07983b11bcc012e8b989ff34704f1cf9c19f17c5de5911e09ebcd9adec5d7fd1.png";

const CATEGORIES = [
  { title: "Dog walking", avg: "₹150 / walk", icon: "🐕", img: IMG_DOG },
  { title: "Lawn mowing", avg: "₹300 / yard", icon: "🌿" },
  { title: "Tech help", avg: "₹200 / hr", icon: "💻" },
  { title: "Babysitting", avg: "₹180 / hr", icon: "👶" },
  { title: "Car wash", avg: "₹250 / car", icon: "🚗" },
  { title: "Moving help", avg: "₹350 / hr", icon: "📦" },
  { title: "Tutoring", avg: "₹250 / hr", icon: "📚" },
  { title: "Delivery run", avg: "₹120 / run", icon: "🛍️" },
];

export default function HomePage() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 140]);
  const heroScale = useTransform(scrollY, [0, 600], [1, 1.08]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.35]);

  return (
    <div data-testid="home-page">
      {/* ===== HERO ===== */}
      <section className="relative min-h-[100svh] w-full overflow-hidden bg-ink text-sand-light" data-testid="hero-section">
        <motion.div
          style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <img
            src={HERO_IMG}
            alt="Person on phone outdoors"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/40 to-ink" />
          <div className="absolute inset-0 bg-grid-dark opacity-30" />
        </motion.div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14 pt-40 md:pt-48 pb-20 min-h-[100svh] flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 border border-sand-light/20 rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-sand-light/80">
              <span className="w-1.5 h-1.5 rounded-full bg-olive-light animate-pulse" />
              Launching soon · iOS + Android
            </div>
          </motion.div>

          <div className="max-w-5xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-extrabold text-balance leading-[0.88] tracking-[-0.045em]"
              style={{ fontSize: "clamp(56px, 10vw, 168px)" }}
            >
              Small tasks.
              <br />
              <span className="text-olive-light italic font-light" style={{ fontFamily: "'Bricolage Grotesque', serif" }}>
                Instant
              </span>{" "}
              cash.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="mt-10 max-w-xl text-lg md:text-xl text-sand-light/80 leading-relaxed"
            >
              The app where anyone can earn real money for everyday gigs in their neighbourhood. Local, fast, and fair —
              get paid the second the job is done.
            </motion.p>

            <motion.div
              id="waitlist"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7 }}
              className="mt-10"
            >
              <WaitlistForm variant="dark" testidPrefix="hero-waitlist" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.9 }}
              className="mt-8"
            >
              <AppStoreBadges variant="dark" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex items-center justify-between gap-6 pt-12 text-[13px] text-sand-light/70"
          >
            <div className="flex items-center gap-6 flex-wrap">
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-olive-light animate-pulse" />
                Early access opening soon
              </span>
              <span className="hidden md:inline">Verified earners & posters</span>
              <span className="hidden md:inline">Secure payouts via UPI & Razorpay</span>
            </div>
            <div className="hidden md:flex items-center gap-2 text-xs uppercase tracking-[0.22em]">
              <span>Scroll</span>
              <span className="block w-10 h-px bg-sand-light/40" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== MARQUEE STRIP ===== */}
      <section className="relative bg-ink border-y border-sand-light/10 overflow-hidden py-6" aria-hidden>
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 shrink-0 text-sand-light/60 font-display text-2xl md:text-3xl font-medium tracking-tight">
              {["Lawn mowing", "•", "Dog walking", "•", "Tech help", "•", "Babysitting", "•", "Car wash", "•", "Delivery", "•", "Tutoring", "•", "Moving", "•"].map((w, j) => (
                <span key={j}>{w}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ===== VALUE PROPOSITION ===== */}
      <section className="relative py-24 md:py-40 bg-sand-light" data-testid="value-section">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            <FadeIn className="lg:col-span-7">
              <span className="text-xs uppercase tracking-[0.22em] text-olive font-semibold">Why QuickBuck</span>
              <h2 className="mt-5 font-display font-bold text-balance leading-[0.95] tracking-[-0.035em]"
                  style={{ fontSize: "clamp(40px, 6.5vw, 96px)" }}>
                Real work.
                <br />
                Real pay. <span className="text-olive">Right now.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.15} className="lg:col-span-5">
              <p className="text-lg md:text-xl text-ink/70 leading-relaxed max-w-xl">
                People don't need lectures about hustle. They need a fast, fair way to pick up local work between meetings, classes, and weekends —
                without waiting two weeks for a payout. That's QuickBuck.
              </p>
            </FadeIn>
          </div>

          <Stagger className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Paid instantly", desc: "The second a task ends, cash hits your wallet. No 'net 30.' No salary delays." },
              { icon: MapPin, title: "Hyper-local", desc: "Gigs within a 3 km radius. Walk, cycle, or auto there in minutes." },
              { icon: Shield, title: "Verified both ways", desc: "Every earner and poster is ID-verified. Ratings, reviews, and dispute protection on every gig." },
              { icon: Clock, title: "Fits your schedule", desc: "Browse open gigs, accept what works. No fixed shifts, no quotas, no obligations." },
            ].map((f) => (
              <StaggerItem key={f.title}>
                <div className="group bg-white border border-black/5 rounded-3xl p-8 h-full hover:border-olive/40 transition-all duration-500">
                  <div className="w-12 h-12 rounded-2xl bg-olive/10 flex items-center justify-center mb-6 group-hover:bg-olive group-hover:text-sand-light transition-colors">
                    <f.icon className="w-5 h-5 text-olive group-hover:text-sand-light" />
                  </div>
                  <h3 className="font-display font-semibold text-2xl tracking-tight mb-3">{f.title}</h3>
                  <p className="text-ink/60 leading-relaxed text-[15px]">{f.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="relative bg-ink text-sand-light py-24 md:py-40 overflow-hidden" data-testid="how-it-works-section">
        <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
            <FadeIn>
              <span className="text-xs uppercase tracking-[0.22em] text-olive-light font-semibold">How it works</span>
              <h2 className="mt-5 font-display font-bold text-balance leading-[0.95] tracking-[-0.035em]"
                  style={{ fontSize: "clamp(40px, 6.5vw, 96px)" }}>
                From swipe
                <br />
                to payout.
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <Link
                to="/how-it-works"
                data-testid="how-more-link"
                className="inline-flex items-center gap-2 text-sand-light/80 hover:text-sand-light border-b border-sand-light/30 pb-1"
              >
                See the full flow <ArrowUpRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-sand-light/10 rounded-3xl overflow-hidden">
            {[
              { step: "01", title: "Browse gigs", desc: "Open QuickBuck. See a live feed of paying tasks nearby — filtered to your skills and radius." , icon: Hand },
              { step: "02", title: "Accept task", desc: "Tap to accept. Chat with the poster. Get turn-by-turn directions to the gig.", icon: Sparkles },
              { step: "03", title: "Get paid", desc: "Finish the job. Poster confirms. Cash lands in your QuickBuck wallet — instantly.", icon: Banknote },
            ].map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.12} className="bg-ink p-10 md:p-12">
                <div className="flex items-start justify-between mb-10">
                  <span className="font-mono text-sm text-olive-light">{s.step}</span>
                  <s.icon className="w-6 h-6 text-olive-light" />
                </div>
                <h3 className="font-display font-semibold text-3xl tracking-tight mb-4">{s.title}</h3>
                <p className="text-sand-light/65 leading-relaxed">{s.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CATEGORIES BENTO ===== */}
      <section className="relative bg-sand-light py-24 md:py-40" data-testid="categories-section">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.22em] text-olive font-semibold">Popular gigs</span>
            <h2 className="mt-5 font-display font-bold text-balance leading-[0.95] tracking-[-0.035em] max-w-3xl"
                style={{ fontSize: "clamp(40px, 6.5vw, 96px)" }}>
              Not fetch-coffee<span className="text-olive">.</span>
              <br />
              Actual work people pay for.
            </h2>
          </FadeIn>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-6 gap-5">
            {/* Featured large card */}
            <FadeIn className="md:col-span-4 md:row-span-2">
              <div className="relative h-[560px] rounded-4xl overflow-hidden group">
                <img src={IMG_DOG} alt="Dog walking" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between text-sand-light">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 text-[10px] uppercase tracking-[0.22em] border border-sand-light/30 rounded-full">Most booked</span>
                  </div>
                  <div>
                    <p className="text-sm text-sand-light/70 mb-2">Dog walking</p>
                    <h3 className="font-display font-bold text-balance leading-[0.95]" style={{ fontSize: "clamp(36px, 5vw, 64px)" }}>
                      ₹150 per walk.
                      <br />Paid on leash-down.
                    </h3>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1} className="md:col-span-2">
              <div className="h-[270px] rounded-4xl bg-olive text-sand-light p-8 flex flex-col justify-between">
                <div className="text-6xl">🌿</div>
                <div>
                  <p className="font-display text-3xl font-semibold tracking-tight">Lawn mowing</p>
                  <p className="text-sand-light/75 text-sm mt-1">₹300 per yard · 1–2 hrs</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15} className="md:col-span-2">
              <div className="h-[270px] rounded-4xl bg-sand border border-black/5 p-8 flex flex-col justify-between relative overflow-hidden">
                <img src={IMG_TECH} alt="Tech" className="absolute right-[-30px] bottom-[-30px] w-56 h-56 object-cover rounded-3xl opacity-90" />
                <div className="relative text-6xl">💻</div>
                <div className="relative">
                  <p className="font-display text-3xl font-semibold tracking-tight">Tech help</p>
                  <p className="text-ink/65 text-sm mt-1">₹200 / hr · Wi-Fi, phones, apps</p>
                </div>
              </div>
            </FadeIn>

            {CATEGORIES.slice(3).map((c, i) => (
              <FadeIn key={c.title} delay={0.05 * i} className="md:col-span-2">
                <div className="h-[220px] rounded-4xl bg-white border border-black/5 p-8 flex flex-col justify-between hover:border-olive/50 hover:-translate-y-1 transition-all duration-500">
                  <div className="text-5xl">{c.icon}</div>
                  <div>
                    <p className="font-display text-2xl font-semibold tracking-tight">{c.title}</p>
                    <p className="text-ink/60 text-sm mt-1">{c.avg}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRUST / SAFETY ===== */}
      <section className="relative bg-ink text-sand-light py-24 md:py-40 grain" data-testid="trust-section">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="text-xs uppercase tracking-[0.22em] text-olive-light font-semibold">Trust isn't optional</span>
              <h2 className="mt-5 font-display font-bold text-balance leading-[0.95] tracking-[-0.035em]"
                  style={{ fontSize: "clamp(40px, 6vw, 88px)" }}>
                Safe by default.
                <br />
                <span className="text-sand-light/60">Trusted by design.</span>
              </h2>
              <p className="mt-8 text-lg text-sand-light/75 leading-relaxed max-w-xl">
                Every account is ID-verified. Every payment moves through a PCI-compliant escrow wallet. Every gig is rated both ways.
              </p>

              <ul className="mt-10 space-y-4">
                {[
                  "Government ID verification at signup",
                  "Background-checked task posters",
                  "In-app live trip sharing & SOS",
                  "Funds held in escrow until you confirm",
                  "Two-way ratings build a transparent reputation",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sand-light/90">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-olive-light shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="relative aspect-[4/5] rounded-4xl overflow-hidden">
                <img src={IMG_CASH} alt="Earner with phone and cash" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-ink/50 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 glass-dark rounded-2xl p-5 border border-sand-light/10">
                  <p className="text-xs uppercase tracking-[0.22em] text-olive-light mb-2">Sample wallet</p>
                  <p className="font-display text-2xl font-semibold tracking-tight">Earnings land instantly</p>
                  <p className="text-sand-light/60 text-sm mt-1">Across every completed gig · Paid to wallet on confirm</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative bg-olive text-sand-light py-24 md:py-40 overflow-hidden" data-testid="cta-section">
        <div className="absolute -left-20 -top-20 w-[500px] h-[500px] rounded-full bg-olive-dark/60 blur-3xl opacity-70" />
        <div className="absolute -right-32 -bottom-32 w-[600px] h-[600px] rounded-full bg-ink/40 blur-3xl" />
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <FadeIn>
                <h2 className="font-display font-bold text-balance leading-[0.9] tracking-[-0.04em]"
                    style={{ fontSize: "clamp(48px, 8vw, 128px)" }}>
                  Be first in line.
                </h2>
                <p className="mt-8 text-xl md:text-2xl text-sand-light/85 max-w-2xl leading-relaxed">
                  Join the QuickBuck early access list and we'll let you in the second your area opens up.
                  Launch begins early 2026.
                </p>
              </FadeIn>
            </div>
            <div className="lg:col-span-5">
              <FadeIn delay={0.1}>
                <WaitlistForm variant="dark" testidPrefix="cta-waitlist" />
                <div className="mt-8">
                  <AppStoreBadges variant="dark" />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
