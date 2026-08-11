"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { copy, type Lang } from "./copy";
import Timeline from "./Timeline";

const SCALE_TICKS = ["0", "25", "50", "75", "100%"];

/** Institution marks. Only a real logo where use is unambiguous; otherwise initials. */
const CRED_MARK: ({ logo: string } | { initials: string })[] = [
  { logo: "/ufm.png" },
  { initials: "IB" },
  { initials: "PMI" },
  { initials: "MOS" },
];

export default function Portfolio() {
  const [lang, setLang] = useState<Lang>("es");
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
  }, [lang, t.meta.title]);

  return (
    <div className="shell">
      <div className="page">
        <header className="topbar">
          <span className="mark">SM</span>
          <div className="lang" role="group" aria-label={t.nav.toggleLabel}>
            <button type="button" className="lang-btn" aria-pressed={lang === "es"} onClick={() => setLang("es")}>
              es
            </button>
            <span className="lang-sep" aria-hidden="true">/</span>
            <button type="button" className="lang-btn" aria-pressed={lang === "en"} onClick={() => setLang("en")}>
              en
            </button>
          </div>
        </header>
      </div>

      {/* ------------------------------------------------------- HERO */}
      <div className="page">
        <section className="hero">
          <div className="hero-grid">
            <div className="hero-text">
              <p className="hero-meta">
                {t.hero.name} — {t.hero.place}
              </p>
              <h1 className="hero-title">{t.hero.role}</h1>
              <p className="hero-lede">{t.hero.lede}</p>
              <div className="hero-actions">
                <a className="cta" href="/CV-Sebastian-Mollinedo.pdf" download>
                  <svg className="cta-ico" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M8 1v9M4.2 6.6 8 10.4l3.8-3.8M2 13.6h12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
                  </svg>
                  {t.hero.cta}
                </a>
                <p className="hero-status">
                  <i className="pip" aria-hidden="true" />
                  {t.hero.available}
                </p>
              </div>
            </div>

            <figure className="portrait">
              <Image
                src="/sebastian.jpg"
                alt={t.hero.photoAlt}
                width={900}
                height={900}
                priority
                className="portrait-img"
              />
              <div className="portrait-rule" aria-hidden="true" />
              <figcaption className="portrait-cap">{t.hero.photoCaption}</figcaption>
            </figure>
          </div>

          <figure className="gauge">
            <figcaption className="gauge-label">{t.gauge.label}</figcaption>
            <div className="gauge-rows">
              <div className="gauge-row">
                <span className="gauge-key">{t.gauge.before}</span>
                <div className="gauge-track">
                  <div className="gauge-bar gauge-bar--before" />
                </div>
              </div>
              <div className="gauge-row">
                <span className="gauge-key">{t.gauge.after}</span>
                <div className="gauge-track">
                  <div className="gauge-bar gauge-bar--after" />
                </div>
              </div>
            </div>
            <div className="gauge-scale" aria-hidden="true" />
            <div className="gauge-ticks" aria-hidden="true">
              {SCALE_TICKS.map((tick) => (
                <span key={tick}>{tick}</span>
              ))}
            </div>
            <p className="gauge-caption">
              <span className="gauge-figure">{t.gauge.figure}</span> — {t.gauge.caption}
            </p>
          </figure>
        </section>
      </div>

      <div className="page"><div className="rule" /></div>

      {/* ------------------------------------------------------- WORK */}
      <div className="page">
        <section className="section" id="work">
          <p className="eyebrow">{t.work.eyebrow}</p>
          <h2 className="h2">{t.work.title}</h2>
          <div className="cards">
            {t.work.items.map((item) => (
              <article className="card" key={item.title}>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-body">{item.body}</p>
                <ul className="card-tags">
                  {item.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* --------------------------------------- TRACK RECORD (dark) */}
      <section className="band" id="path">
        <div className="page">
          <div className="section">
            <p className="eyebrow eyebrow--inv">{t.path.eyebrow}</p>
            <h2 className="h2 h2--inv">{t.path.title}</h2>

            <Timeline t={t} />

            <div className="path-list">
              {t.path.items.map((item) => (
                <article className="path-item" key={item.role}>
                  <div className="path-year">{item.year}</div>
                  <div>
                    <h3 className="path-role">{item.role}</h3>
                    <p className="path-org">{item.org}</p>
                    <p className="path-body">{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ STACK */}
      <div className="page">
        <section className="section" id="stack">
          <p className="eyebrow">{t.stack.eyebrow}</p>
          <h2 className="h2">{t.stack.title}</h2>
          {t.stack.groups.map((group) => (
            <div className="stack-row" key={group.k}>
              <div className="stack-k">{group.k}</div>
              <div className="stack-v">{group.v}</div>
            </div>
          ))}
          <p className="stack-note">{t.stack.note}</p>
        </section>

        <div className="rule" />

        {/* ------------------------------------------ CREDENTIALS */}
        <section className="section" id="credentials">
          <p className="eyebrow">{t.credentials.eyebrow}</p>
          <h2 className="h2">{t.credentials.title}</h2>
          {t.credentials.items.map((item, i) => {
            const m = CRED_MARK[i];
            return (
              <div className="cred-row" key={item.title}>
                <div className="cred-main">
                  <div className="cred-mark" aria-hidden="true">
                    {"logo" in m ? (
                      <Image src={m.logo} alt="" width={200} height={171} className="cred-logo" />
                    ) : (
                      <span className="cred-initials">{m.initials}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="cred-title">{item.title}</h3>
                    <p className="cred-org">{item.org}</p>
                  </div>
                </div>
                <div className="cred-meta">{item.meta}</div>
              </div>
            );
          })}
        </section>

        <div className="rule" />

        {/* --------------------------------------------- PERSONAL */}
        <section className="section" id="personal">
          <p className="eyebrow">{t.personal.eyebrow}</p>
          <h2 className="h2">{t.personal.title}</h2>
          <div className="pers-grid">
            <div className="pers-prose">
              {t.personal.body.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <dl className="readout">
              {t.personal.readout.map((r) => (
                <div className="readout-row" key={r.k}>
                  <dt>{r.k}</dt>
                  <dd>{r.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <div className="rule" />

        {/* ---------------------------------------------- CONTACT */}
        <section className="section" id="contact">
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2 className="h2">{t.contact.title}</h2>
          <p className="contact-body">{t.contact.body}</p>
          <ul className="contact-list">
            {t.contact.links.map((link) => (
              <li className="contact-item" key={link.label}>
                <a
                  className="contact-link"
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <span className="contact-label">{link.label}</span>
                  <span className="contact-value">{link.value}</span>
                  <span className="contact-arrow" aria-hidden="true">→</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <footer className="foot">
          <span>{t.hero.name}</span>
          <span>{t.footer} · 2026</span>
        </footer>
      </div>
    </div>
  );
}
