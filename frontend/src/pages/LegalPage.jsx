import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LEGAL_DOCS } from "../data/legal";
import { FadeIn } from "../components/Motion";
import { ArrowUp, FileText, Shield, Lock } from "lucide-react";

const ICON_BY_ID = {
  "earners-agreement": FileText,
  "trust-safety": Shield,
  privacy: Lock,
};

function Block({ children }) {
  if (!children) return null;
  if (Array.isArray(children)) {
    return children.map((p, i) => (
      <p key={i} className="text-ink/75 leading-[1.7] text-[15px] md:text-base mb-4 last:mb-0 text-pretty">
        {p}
      </p>
    ));
  }
  return null;
}

function Bullets({ items }) {
  if (!items || !items.length) return null;
  return (
    <ul className="my-4 space-y-2.5">
      {items.map((b, i) => (
        <li key={i} className="flex items-start gap-3 text-ink/75 leading-relaxed text-[15px] md:text-base">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-olive shrink-0" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

function Section({ section }) {
  return (
    <div className="mb-10">
      <h3 className="font-display font-semibold tracking-tight leading-tight text-ink text-2xl md:text-3xl mb-5">
        {section.heading}
      </h3>

      <Block>{section.paras}</Block>
      <Bullets items={section.bullets} />
      <Block>{section.paras2}</Block>
      <Bullets items={section.bullets2} />
      <Block>{section.paras3}</Block>
      <Bullets items={section.bullets3} />
      <Block>{section.paras4}</Block>
      <Bullets items={section.bullets4} />
      <Block>{section.paras5}</Block>
      <Bullets items={section.bullets5} />
      <Block>{section.paras6}</Block>
      <Bullets items={section.bullets6} />

      {section.sub && <h4 className="font-display font-semibold text-lg text-olive mt-6 mb-3">{section.sub}</h4>}
      {section.sub2 && <h4 className="font-display font-semibold text-lg text-olive mt-6 mb-3">{section.sub2}</h4>}
      {section.sub3 && <h4 className="font-display font-semibold text-lg text-olive mt-6 mb-3">{section.sub3}</h4>}
      {section.sub4 && <h4 className="font-display font-semibold text-lg text-olive mt-6 mb-3">{section.sub4}</h4>}
      {section.sub5 && <h4 className="font-display font-semibold text-lg text-olive mt-6 mb-3">{section.sub5}</h4>}
      {section.sub6 && <h4 className="font-display font-semibold text-lg text-olive mt-6 mb-3">{section.sub6}</h4>}
    </div>
  );
}

/**
 * Render a doc with the section ordering preserved using an explicit key list.
 * This ensures sub-headings render between their bullets correctly.
 */
function Doc({ doc }) {
  return (
    <article id={doc.id} className="scroll-mt-32">
      <header className="mb-10">
        <p className="text-xs uppercase tracking-[0.22em] text-olive font-semibold">{doc.title}</p>
        <h2 className="mt-3 font-display font-bold leading-[0.95] tracking-[-0.04em] text-balance"
            style={{ fontSize: "clamp(36px, 6vw, 80px)" }}>
          {doc.title}
        </h2>
        <p className="mt-3 text-ink/60 max-w-2xl text-[15px] md:text-base leading-relaxed">{doc.subtitle}</p>
        {doc.intro && (
          <p className="mt-6 text-ink/80 text-[15px] md:text-base leading-relaxed max-w-3xl border-l-2 border-olive pl-5 italic">
            {doc.intro}
          </p>
        )}
        {doc.meta && doc.meta.length > 0 && (
          <dl className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl">
            {doc.meta.map((m) => (
              <div key={m.label} className="bg-white border border-black/10 rounded-2xl p-4">
                <dt className="text-[10px] uppercase tracking-[0.22em] text-ink/45 font-semibold">{m.label}</dt>
                <dd className="font-display text-base font-semibold tracking-tight mt-1.5 break-words">{m.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </header>

      <div className="space-y-6">
        {doc.sections.map((s, i) => (
          <Section key={i} section={s} />
        ))}
      </div>
    </article>
  );
}

export default function LegalPage() {
  const { hash } = useLocation();
  const [activeId, setActiveId] = useState(LEGAL_DOCS[0].id);

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 220);
        setActiveId(id);
      }
    }
  }, [hash]);

  useEffect(() => {
    const handler = () => {
      const offset = window.scrollY + 200;
      let current = LEGAL_DOCS[0].id;
      for (const d of LEGAL_DOCS) {
        const el = document.getElementById(d.id);
        if (el && el.offsetTop <= offset) current = d.id;
      }
      setActiveId(current);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div data-testid="legal-page">
      {/* Hero */}
      <section className="pt-40 md:pt-52 pb-16 bg-sand-light">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.22em] text-olive font-semibold">Legal</p>
            <h1 className="mt-6 font-display font-bold text-balance leading-[0.9] tracking-[-0.04em] max-w-5xl"
                style={{ fontSize: "clamp(48px, 9vw, 148px)" }}>
              The fine print, <span className="text-olive italic font-light" style={{fontFamily:"'Bricolage Grotesque', serif"}}>in plain sight</span>.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-ink/65 max-w-3xl leading-relaxed">
              Three documents govern how QuickBuck works: the Earners Agreement, our Trust &amp; Safety guidelines, and the Privacy Policy.
              Read them in full below.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Body — sticky left nav + content */}
      <section className="bg-sand-light pb-32">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Sticky doc nav */}
            <nav className="lg:col-span-3 order-2 lg:order-1" aria-label="Legal documents">
              <div className="lg:sticky lg:top-28">
                <p className="text-xs uppercase tracking-[0.22em] text-ink/40 font-semibold mb-4">Documents</p>
                <ul className="space-y-1">
                  {LEGAL_DOCS.map((d) => {
                    const Icon = ICON_BY_ID[d.id] || FileText;
                    const isActive = activeId === d.id;
                    return (
                      <li key={d.id}>
                        <a
                          href={`#${d.id}`}
                          data-testid={`legal-nav-${d.id}`}
                          className={`group flex items-start gap-3 rounded-2xl px-4 py-3 transition-all ${
                            isActive ? "bg-ink text-sand-light" : "hover:bg-white text-ink/80"
                          }`}
                        >
                          <span className={`mt-0.5 w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                            isActive ? "bg-olive text-sand-light" : "bg-olive/10 text-olive"
                          }`}>
                            <Icon className="w-3.5 h-3.5" />
                          </span>
                          <span className="font-display font-semibold text-sm leading-tight tracking-tight">
                            {d.title}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-8 hidden lg:block">
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-ink/60 hover:text-olive transition-colors"
                    data-testid="legal-back-to-top"
                  >
                    <ArrowUp className="w-3.5 h-3.5" /> Back to top
                  </button>
                </div>
              </div>
            </nav>

            {/* Docs */}
            <div className="lg:col-span-9 order-1 lg:order-2 space-y-24">
              {LEGAL_DOCS.map((d) => <Doc key={d.id} doc={d} />)}

              <div className="border-t border-black/10 pt-10">
                <p className="text-sm text-ink/55">
                  Questions about these documents? Email{" "}
                  <a href="mailto:quickbuck.team@gmail.com" className="underline underline-offset-4 decoration-olive hover:text-olive">
                    quickbuck.team@gmail.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
