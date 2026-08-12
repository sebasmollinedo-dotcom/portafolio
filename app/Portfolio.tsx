"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { copy, type Lang } from "./copy";
import Timeline from "./Timeline";

const TICKS = ["0", "25", "50", "75", "100%"];

/** Institution marks. A real logo only where use is unambiguous; otherwise initials. */
const CRED_MARK: ({ logo: string } | { initials: string })[] = [
  { logo: "/ufm.png" },
  { initials: "IB" },
  { initials: "PMI" },
  { initials: "MOS" },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".rv");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Only arm the hidden state once JS is running, so a script failure
    // can never leave the page blank.
    document.documentElement.classList.add("reveal-on");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).dataset.in = "1";
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => {
      io.disconnect();
      document.documentElement.classList.remove("reveal-on");
    };
  }, []);
}

export default function Portfolio() {
  const [lang, setLang] = useState<Lang>("es");
  const t = copy[lang];
  useReveal();

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
  }, [lang, t.meta.title]);

  const tag = (label: string) => (
    <div className="tag">
      <i aria-hidden="true" />
      <span>{label}</span>
    </div>
  );

  return (
    <>
      <nav className="nav">
        <div className="nav-in">
          <span className="nav-mark">SM<i>.</i></span>
          <div className="nav-lang" role="group" aria-label={t.nav.toggleLabel}>
            <button type="button" className="nav-btn" aria-pressed={lang === "es"} onClick={() => setLang("es")}>es</button>
            <span className="nav-sep" aria-hidden="true">/</span>
            <button type="button" className="nav-btn" aria-pressed={lang === "en"} onClick={() => setLang("en")}>en</button>
          </div>
        </div>
      </nav>

      {/* ------------------------------------------------- HERO */}
      <header className="wrap hero">
        {tag(`${t.hero.name} · ${t.hero.place}`)}

        <div className="hero-grid">
          <div>
            <h1 className="hero-title">
              {t.hero.roleLines.map((line, i) => (
                <span key={line} className={i === 1 ? "lit" : undefined}>{line}</span>
              ))}
            </h1>
            <p className="lede">{t.hero.lede}</p>
            <div className="hero-actions">
              <a className="cta" href="/CV-Sebastian-Mollinedo.pdf" download>
                <svg className="cta-ico" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M8 1v9M4.2 6.6 8 10.4l3.8-3.8M2 13.6h12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" />
                </svg>
                {t.hero.cta}
              </a>
              <span className="status">
                <i className="pip" aria-hidden="true" />
                {t.hero.available}
              </span>
            </div>
          </div>

          <figure className="portrait">
            <div className="portrait-frame">
              <Image src="/sebastian.jpg" alt={t.hero.photoAlt} width={900} height={900} priority className="portrait-img" />
            </div>
            <figcaption className="portrait-cap">{t.hero.photoCaption}</figcaption>
          </figure>
        </div>
      </header>

      {/* ----------------------------------------------- NUMBERS */}
      <section className="wrap sect" id="stats">
        {tag(t.stats.eyebrow)}
        <h2 className="h2 rv">{t.stats.title}</h2>

        <div className="nums rv">
          {t.stats.items.map((s) => (
            <div className="num" key={s.label}>
              <div className="num-v">{s.prefix}{s.target}{s.suffix}</div>
              <p className="num-l">{s.label}</p>
            </div>
          ))}
        </div>

        <figure className="gauge rv" style={{ marginTop: "clamp(1.5rem,3vw,2.5rem)" }}>
          <figcaption className="lbl">{t.gauge.label}</figcaption>
          <div className="gauge-rows">
            <div className="gauge-row">
              <span className="gauge-key">{t.gauge.before}</span>
              <div className="gauge-track"><div className="gauge-bar gauge-bar--before" /></div>
            </div>
            <div className="gauge-row">
              <span className="gauge-key">{t.gauge.after}</span>
              <div className="gauge-track"><div className="gauge-bar gauge-bar--after" /></div>
            </div>
          </div>
          <div className="gauge-ticks" aria-hidden="true">
            {TICKS.map((k) => <span key={k}>{k}</span>)}
          </div>
          <p className="gauge-caption">
            <span className="gauge-figure">{t.gauge.figure}</span> — {t.gauge.caption}
          </p>
        </figure>
      </section>

      {/* -------------------------------------------------- WORK */}
      <section className="wrap sect" id="work">
        {tag(t.work.eyebrow)}
        <h2 className="h2 rv">{t.work.title}</h2>
        <div className="cards rv">
          {t.work.items.map((item, i) => (
            <article className="card" key={item.title}>
              <div className="card-n">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-body">{item.body}</p>
              <ul className="card-tags">
                {item.tags.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* -------------------------------------------------- PATH */}
      <section className="wrap sect" id="path">
        {tag(t.path.eyebrow)}
        <h2 className="h2 rv">{t.path.title}</h2>
        <div className="rv"><Timeline t={t} /></div>
        {t.path.items.map((item) => (
          <article className="path-item rv" key={item.role}>
            <div className="path-year">{item.year}</div>
            <div>
              <h3 className="path-role">{item.role}</h3>
              <p className="path-org">{item.org}</p>
              <p className="path-body">{item.body}</p>
            </div>
          </article>
        ))}
      </section>

      {/* ------------------------------------------------- STACK */}
      <section className="wrap sect" id="stack">
        {tag(t.stack.eyebrow)}
        <h2 className="h2 rv">{t.stack.title}</h2>
        {t.stack.groups.map((g) => (
          <div className="row rv" key={g.k}>
            <div className="row-k">{g.k}</div>
            <div className="row-v">{g.v}</div>
          </div>
        ))}
        <p className="stack-note">{t.stack.note}</p>
      </section>

      {/* -------------------------------------------- CREDENTIALS */}
      <section className="wrap sect" id="credentials">
        {tag(t.credentials.eyebrow)}
        <h2 className="h2 rv">{t.credentials.title}</h2>
        {t.credentials.items.map((item, i) => {
          const m = CRED_MARK[i];
          return (
            <div className="cred rv" key={item.title}>
              <div className="cred-main">
                <div className="cred-mark" aria-hidden="true">
                  {"logo" in m
                    ? <Image src={m.logo} alt="" width={200} height={171} className="cred-logo" />
                    : <span className="cred-initials">{m.initials}</span>}
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

      {/* ---------------------------------------------- PERSONAL */}
      <section className="wrap sect" id="personal">
        {tag(t.personal.eyebrow)}
        <h2 className="h2 rv">{t.personal.title}</h2>
        <div className="pers">
          <div className="pers-prose rv">
            {t.personal.body.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
          </div>
          <dl className="readout rv">
            {t.personal.readout.map((r) => (
              <div className="readout-row" key={r.k}>
                <dt>{r.k}</dt>
                <dd>{r.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ----------------------------------------------- CONTACT */}
      <section className="wrap sect" id="contact">
        {tag(t.contact.eyebrow)}
        <h2 className="h2 rv">{t.contact.title}</h2>
        <ul className="links">
          {t.contact.links.map((l) => (
            <li className="link-item rv" key={l.label}>
              <a
                className="link"
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                download={l.href.endsWith(".pdf") ? true : undefined}
              >
                <span className="link-k">{l.label}</span>
                <span className="link-v">{l.value}</span>
                <span className="link-a" aria-hidden="true">→</span>
              </a>
            </li>
          ))}
        </ul>

        <footer className="foot">
          <span>{t.hero.name}</span>
          <span>{t.footer} · 2026</span>
        </footer>
      </section>
    </>
  );
}
