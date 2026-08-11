"use client";

import { useEffect, useState } from "react";
import { copy, type Lang } from "./copy";

const SCALE_TICKS = ["0", "25", "50", "75", "100%"];

export default function Portfolio() {
  const [lang, setLang] = useState<Lang>("es");
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
  }, [lang, t.meta.title]);

  return (
    <div className="page">
      <header className="topbar">
        <span className="mark">SM</span>
        <div className="lang" role="group" aria-label={t.nav.toggleLabel}>
          <button
            type="button"
            className="lang-btn"
            aria-pressed={lang === "es"}
            onClick={() => setLang("es")}
          >
            es
          </button>
          <span className="lang-sep" aria-hidden="true">
            /
          </span>
          <button
            type="button"
            className="lang-btn"
            aria-pressed={lang === "en"}
            onClick={() => setLang("en")}
          >
            en
          </button>
        </div>
      </header>

      <main>
        {/* ---------------------------------------------- HERO */}
        <section className="hero">
          <p className="hero-meta">
            {t.hero.name} — {t.hero.place}
          </p>
          <h1 className="hero-title">{t.hero.role}</h1>
          <p className="hero-lede">{t.hero.lede}</p>

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

        <div className="rule" />

        {/* ---------------------------------------------- WORK */}
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

        <div className="rule" />

        {/* ------------------------------------------ TIMELINE */}
        <section className="section" id="path">
          <p className="eyebrow">{t.path.eyebrow}</p>
          <h2 className="h2">{t.path.title}</h2>
          {t.path.items.map((item) => (
            <article className="path-item" key={item.year}>
              <div className="path-year">{item.year}</div>
              <div>
                <h3 className="path-role">{item.role}</h3>
                <p className="path-org">{item.org}</p>
                <p className="path-body">{item.body}</p>
              </div>
            </article>
          ))}
        </section>

        <div className="rule" />

        {/* --------------------------------------------- STACK */}
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

        {/* --------------------------------------- CREDENTIALS */}
        <section className="section" id="credentials">
          <p className="eyebrow">{t.credentials.eyebrow}</p>
          <h2 className="h2">{t.credentials.title}</h2>
          {t.credentials.items.map((item) => (
            <div className="cred-row" key={item.title}>
              <div>
                <h3 className="cred-title">{item.title}</h3>
                <p className="cred-org">{item.org}</p>
              </div>
              <div className="cred-meta">{item.meta}</div>
            </div>
          ))}
        </section>

        <div className="rule" />

        {/* ------------------------------------------- CONTACT */}
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
                  <span className="contact-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="foot">
        <span>{t.hero.name}</span>
        <span>{t.footer} · 2026</span>
      </footer>
    </div>
  );
}
