"use client";

import { useEffect, useRef, useState } from "react";
import { scaleLinear } from "d3-scale";
import { AXIS_YEARS, SPANS, type Copy } from "./copy";

const DOMAIN: [number, number] = [2020, 2026.72];

/**
 * Tenure spans. One data colour (brass) throughout — identity is carried by the
 * direct label on every bar, not by hue. Closed spans are hatched; the same
 * hatch language the hero gauge uses for "before".
 */
export default function Timeline({ t }: { t: Copy }) {
  const wrap = useRef<HTMLDivElement>(null);
  const [w, setW] = useState(760);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setW(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const compact = w < 560;
  const padR = compact ? 44 : 78;
  const rowH = compact ? 56 : 70;
  const barH = compact ? 16 : 20;
  const top = 4;
  const axisY = top + SPANS.length * rowH;
  const height = axisY + 38;

  const x = scaleLinear().domain(DOMAIN).range([0, Math.max(w - padR, 80)]);

  return (
    <figure className="tl" ref={wrap}>
      <figcaption className="tl-label">{t.path.chartLabel}</figcaption>

      <svg
        className="tl-svg"
        width="100%"
        height={height}
        viewBox={`0 0 ${Math.max(w, 200)} ${height}`}
        role="img"
        aria-label={t.path.chartLabel}
      >
        <defs>
          <pattern id="tlHatch" width="7" height="7" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
            <rect width="7" height="7" fill="transparent" />
            <line x1="0" y1="0" x2="0" y2="7" stroke="var(--brass-dk)" strokeWidth="2.2" />
          </pattern>
        </defs>

        {/* gridlines — recessive */}
        {AXIS_YEARS.map((yr) => (
          <line
            key={`g${yr}`}
            x1={x(yr)}
            x2={x(yr)}
            y1={top}
            y2={axisY}
            className="tl-grid"
          />
        ))}

        {/* spans */}
        {SPANS.map((s, i) => {
          const y = top + i * rowH + (compact ? 22 : 28);
          const x0 = x(s.start);
          const bw = Math.max(x(s.end) - x0, 3);
          const item = t.path.items[i];
          const years = s.current
            ? `${Math.floor(s.start)} →`
            : `${Math.floor(s.start)} – ${Math.floor(s.end)}`;
          return (
            <g key={item.role} className="tl-row">
              <text x={x0} y={y - 9} className="tl-role">
                {item.short}
              </text>
              <rect
                x={x0}
                y={y}
                width={bw}
                height={barH}
                rx="3"
                className={s.current ? "tl-bar tl-bar--live" : "tl-bar tl-bar--past"}
              />
              {s.current && (
                <circle cx={x0 + bw} cy={y + barH / 2} r="3.5" className="tl-tip" />
              )}
              <text x={x0 + bw + 12} y={y + barH / 2 + 4} className="tl-years">
                {years}
              </text>
            </g>
          );
        })}

        {/* axis */}
        <line x1="0" x2={x(DOMAIN[1])} y1={axisY} y2={axisY} className="tl-axis" />
        {AXIS_YEARS.map((yr) => (
          <g key={`t${yr}`}>
            <line x1={x(yr)} x2={x(yr)} y1={axisY} y2={axisY + 6} className="tl-axis" />
            <text x={x(yr)} y={axisY + 22} className="tl-tick">
              {compact ? `’${String(yr).slice(2)}` : yr}
            </text>
          </g>
        ))}
      </svg>

      <div className="tl-key">
        <span className="tl-key-item">
          <i className="tl-sw tl-sw--live" aria-hidden="true" />
          {t.path.current}
        </span>
        <span className="tl-key-item">
          <i className="tl-sw tl-sw--past" aria-hidden="true" />
          {t.path.closed}
        </span>
      </div>
    </figure>
  );
}
