import { useVertical } from '../lib/VerticalContext'
import { PopNumber } from './PopNumber'

/**
 * OrbitingModules — six product-preview cards orbiting the dashboard image.
 *
 * Rebuilt as proper micro-product views inspired by Campfire.ai's hero:
 * each card shows real UI content (sparkline, customer profile with avatar,
 * progress bar, declining bar chart, schedule grid) rather than a generic
 * icon + value chip. Styling follows the Carbon tier from CLAUDE.md §4.9 —
 * dark gradient background, silver-line top inset, cream text on dark.
 *
 * Mechanics:
 *   - Six absolute-positioned cards around the embedded dashboard image
 *   - GSAP staggered entrance + mouse parallax (per-axis quickTo)
 *   - Reduced motion / coarse pointer / narrow viewport disables parallax
 */

interface CardConfig {
  /** Position in % of the orbit container — for `side: 'left'` measured
   *  from the left edge; for `side: 'right'` measured from the right edge */
  x: number
  y: number
  side: 'left' | 'right'
  /** Per-axis multiplier for the mouse parallax (positive = follows cursor) */
  px: number
  py: number
}

/**
 * Composition (revised — 4 corner cards, not 6).
 *
 * The earlier 6-card layout had a middle row that sat over the dashboard's
 * KPI + chart + big-number zone, obscuring the product (the whole point of
 * the hero). Per gpt-taste ("4 intentional cards beat 6 messy ones") and the
 * Campfire reference, we now use 4 cards at the CORNERS only:
 *
 *   top-left  ............ top-right
 *      (cobros)            (cliente)
 *          [ dashboard center stays clean ]
 *   bottom-left ......... bottom-right
 *      (stock)             (margen)
 *
 * The four chosen cards map to the four business pillars Hatlas Agent watches:
 * revenue (cobros), customers/churn (cliente), inventory (stock), cost/margin
 * (margen). Top cards overlap the nav bar zone, bottom cards overlap the
 * monitor stand zone — both non-critical. The center (greeting, KPIs, the
 * Bs 247.640 figure, the chart) is never covered.
 *
 * Inbound (logistics) and Personal (HR) cards are kept in the file but left
 * out of the active set to avoid crowding. Re-add to CARDS to restore them.
 */
const POSITIONS: Record<string, CardConfig> = {
  cobros:  { side: 'left',  x: -7, y: -11, px: 0.7, py: 0.5 },
  cliente: { side: 'right', x: -5, y: -11, px: -0.7, py: 0.5 },
  stock:   { side: 'left',  x: -7, y: 80,  px: 0.6, py: -0.5 },
  margen:  { side: 'right', x: -5, y: 82,  px: -0.6, py: -0.5 },
}

/* ============================================================
 * Card 1 — Cobros · hoy (sparkline)
 * ============================================================ */
function CardCobros() {
  const { data } = useVertical()
  const c = data.cards.cobros
  return (
    <div className="oc oc--cobros">
      <div className="oc__head">
        <div className="oc__eyebrow">{c.eyebrow}</div>
        <div className="oc__live"><span /> en vivo</div>
      </div>
      <div className="oc__value">Bs <em><PopNumber value={c.value} /></em></div>
      <svg className="oc__spark" viewBox="0 0 160 40" preserveAspectRatio="none">
        <defs>
          <linearGradient id="oc-cobros-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(62,124,91,0.32)" />
            <stop offset="100%" stopColor="rgba(62,124,91,0)" />
          </linearGradient>
        </defs>
        <path d="M0,32 L20,28 L40,30 L60,22 L80,24 L100,16 L120,18 L140,10 L160,6"
              fill="none" stroke="#3E7C5B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M0,32 L20,28 L40,30 L60,22 L80,24 L100,16 L120,18 L140,10 L160,6 L160,40 L0,40 Z"
              fill="url(#oc-cobros-fill)" />
      </svg>
      <div className="oc__foot">
        <span className="oc__foot-up">{c.foot}</span>
      </div>
    </div>
  )
}

/* ============================================================
 * Card 2 — Stock alert (queso)
 * ============================================================ */
function CardStock() {
  const { data } = useVertical()
  const s = data.cards.stock
  return (
    <div className="oc oc--stock">
      <div className="oc__head">
        <div className="oc__eyebrow">{s.eyebrow}</div>
        <span className="oc__dot oc__dot--warn" />
      </div>
      <div className="oc__row-1">
        <span className="oc__pname">{s.pname}</span>
        <span className="oc__pdays">{s.pdays}</span>
      </div>
      <div className="oc__bar">
        <div className="oc__bar-fill oc__bar-fill--warn" style={{ width: `${s.level}%` }} />
      </div>
      <div className="oc__foot">
        <span className="oc__foot-meta">{s.foot}</span>
      </div>
    </div>
  )
}

/* ============================================================
 * Card 3 — Inbound logistics
 * ============================================================ */
function CardInbound() {
  return (
    <div className="oc oc--inbound">
      <div className="oc__eyebrow">INBOUND · 18:30 ETA</div>
      <div className="oc__route">
        <span className="oc__route-from">Cocina central</span>
        <span className="oc__route-arrow" aria-hidden="true">→</span>
        <span className="oc__route-to">Las Palmas</span>
      </div>
      <div className="oc__progress">
        <div className="oc__progress-fill" style={{ width: '68%' }} />
      </div>
      <div className="oc__foot">
        <span className="oc__foot-meta">320 unidades · 8 productos</span>
        <span className="oc__foot-tag">en camino</span>
      </div>
    </div>
  )
}

/* ============================================================
 * Card 4 — Margen pollo (declining bars)
 * ============================================================ */
function CardMargen() {
  const { data } = useVertical()
  const m = data.cards.margen
  const weeks = [
    { h: 78, t: 'S-3' },
    { h: 70, t: 'S-2' },
    { h: 58, t: 'S-1' },
    { h: 46, t: 'Hoy', highlight: true },
  ]
  return (
    <div className="oc oc--margen">
      <div className="oc__head">
        <div className="oc__eyebrow">{m.eyebrow}</div>
        <span className="oc__delta oc__delta--down">{m.delta}</span>
      </div>
      <div className="oc__bars">
        {weeks.map((w, i) => (
          <div key={i} className={`oc__bar-col ${w.highlight ? 'oc__bar-col--hi' : ''}`}>
            <div className="oc__bar-bar" style={{ height: `${w.h}%` }} />
            <div className="oc__bar-label">{w.t}</div>
          </div>
        ))}
      </div>
      <div className="oc__foot">
        <span className="oc__foot-meta">{m.foot}</span>
      </div>
    </div>
  )
}

/* ============================================================
 * Card 5 — Cliente Carlos Mendoza
 * ============================================================ */
function CardCliente() {
  const { data } = useVertical()
  const cl = data.cards.cliente
  return (
    <div className="oc oc--cliente">
      <div className="oc__eyebrow">{cl.eyebrow}</div>
      <div className="oc__client">
        <div className="oc__avatar" aria-hidden="true">{cl.initials}</div>
        <div className="oc__client-info">
          <div className="oc__client-name">{cl.name}</div>
          <div className="oc__client-tag">{cl.tag}</div>
        </div>
      </div>
      <div className="oc__client-meta">
        <span className="oc__client-time">{cl.time}</span>
        <span className="oc__client-cta">{cl.cta}</span>
      </div>
    </div>
  )
}

/* ============================================================
 * Card 6 — Personal en turno (grid)
 * ============================================================ */
function CardPersonal() {
  // 14 in turn, 11 ok, 2 delayed, 1 absent
  const cells = Array.from({ length: 14 }, (_, i) => {
    if (i === 4 || i === 9) return 'warn'
    if (i === 12) return 'off'
    return 'ok'
  })
  return (
    <div className="oc oc--personal">
      <div className="oc__head">
        <div className="oc__eyebrow">PERSONAL · HOY</div>
        <div className="oc__pers-count"><em>14</em> en turno</div>
      </div>
      <div className="oc__grid">
        {cells.map((s, i) => (
          <span key={i} className={`oc__cell oc__cell--${s}`} />
        ))}
      </div>
      <div className="oc__foot">
        <span className="oc__foot-meta">2 atrasos · 1 falta</span>
      </div>
    </div>
  )
}

// Four corner cards. CardInbound + CardPersonal stay defined above but are
// intentionally left out here to keep the dashboard center uncovered.
// Four rubro-aware cards float around the hero panel (the Campfire-style
// orbit composition). Corners only, so the panel's center stays legible.
const CARDS = [
  { key: 'cobros',  Render: CardCobros,  pos: POSITIONS.cobros },
  { key: 'cliente', Render: CardCliente, pos: POSITIONS.cliente },
  { key: 'stock',   Render: CardStock,   pos: POSITIONS.stock },
  { key: 'margen',  Render: CardMargen,  pos: POSITIONS.margen },
]
void CardInbound
void CardPersonal

export function OrbitingModules() {
  // The four rubro-aware cards positioned around the product screenshot
  // (static — no mouse parallax, to keep the hero calm).
  return (
    <div className="orbit" aria-hidden="true">
      <h2 className="orbit-mobile-label">Lo que <em>Hatlas Agent</em> ve en tu negocio</h2>
      {CARDS.map(({ key, Render, pos }) => {
        const positionStyle =
          pos.side === 'right'
            ? { right: `${pos.x}%`, top: `${pos.y}%` }
            : { left: `${pos.x}%`, top: `${pos.y}%` }
        return (
          <div
            key={key}
            className={`orbit-slot orbit-slot--${pos.side} orbit-slot--${key}`}
            style={positionStyle}
          >
            <Render />
          </div>
        )
      })}

      <style>{`
        .orbit { position: absolute; inset: 0; pointer-events: none; }
        .orbit-slot { position: absolute; will-change: opacity; }
        .orbit-slot--cobros  { width: 215px; }
        .orbit-slot--cliente { width: 235px; }
        .orbit-slot--stock   { width: 200px; }
        .orbit-slot--margen  { width: 220px; }

        /* ─── Liquid Glass card ─── */
        .oc {
          position: relative;
          padding: 12px 14px;
          background: var(--glass-bg-strong);
          -webkit-backdrop-filter: blur(18px) saturate(1.8) brightness(1.06);
          backdrop-filter: url(#lg-refract) blur(18px) saturate(1.8) brightness(1.06);
          border: 1px solid var(--glass-border);
          border-radius: 16px;
          box-shadow: var(--glass-elev-sm);
          color: var(--cream);
          font-family: var(--font-sans);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .oc__head {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .oc__eyebrow {
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 0.14em;
          color: var(--cream-meta);
          text-transform: uppercase;
        }
        .oc__value {
          font-family: var(--font-sans);
          font-size: 14px;
          color: var(--cream);
          letter-spacing: -0.01em;
          line-height: 1;
        }
        .oc__value em {
          font-family: var(--font-display);
          font-style: normal;
          font-size: 22px;
          color: var(--cream);
          letter-spacing: -0.03em;
          margin-left: 2px;
          font-weight: 700;
        }
        .oc__foot {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 0.06em;
          color: var(--cream-meta);
        }
        .oc__foot-up { color: var(--success); letter-spacing: 0.06em; }
        .oc__foot-meta { letter-spacing: 0.04em; }

        /* Live dot */
        .oc__live {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-family: var(--font-mono);
          font-size: 8px;
          letter-spacing: 0.10em;
          color: var(--cream-meta);
        }
        .oc__live > span {
          width: 5px; height: 5px; border-radius: 50%;
          background: var(--success);
          animation: oc-pulse 1.8s ease-in-out infinite;
        }
        @keyframes oc-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        /* Status dot */
        .oc__dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--success);
        }
        .oc__dot--warn { background: var(--warning); }

        /* ─── Card 1: Cobros sparkline ─── */
        .oc__spark {
          width: 100%;
          height: 32px;
          margin: -2px 0;
        }

        /* ─── Card 2: Stock alert ─── */
        .oc__row-1 {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }
        .oc__pname { font-size: 13px; color: var(--cream); font-weight: 600; }
        .oc__pdays {
          font-family: var(--font-display);
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          color: var(--warning);
          line-height: 1;
        }
        .oc__bar {
          height: 4px;
          background: rgba(23, 22, 27, 0.08);
          border-radius: 2px;
          overflow: hidden;
        }
        .oc__bar-fill {
          height: 100%;
          background: var(--success);
          border-radius: 2px;
        }
        .oc__bar-fill--warn {
          background: linear-gradient(90deg, var(--warning) 0%, #b8893b 100%);
        }

        /* ─── Card 3: Inbound progress ─── */
        .oc__route {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: var(--cream);
        }
        .oc__route-from { color: var(--cream-dim); }
        .oc__route-arrow {
          color: var(--gold);
          font-family: var(--font-mono);
        }
        .oc__route-to { color: var(--cream); font-weight: 500; }
        .oc__progress {
          height: 4px;
          background: rgba(23, 22, 27, 0.08);
          border-radius: 2px;
          overflow: hidden;
          position: relative;
        }
        .oc__progress-fill {
          height: 100%;
          background: var(--grad-gold);
          border-radius: 2px;
        }
        .oc__foot-tag {
          padding: 2px 6px;
          background: var(--gold-tint-12);
          color: var(--gold-deep);
          border-radius: 4px;
          font-size: 8px;
          letter-spacing: 0.10em;
        }

        /* ─── Card 4: Margen bars ─── */
        .oc__delta {
          font-family: var(--font-mono);
          font-size: 11px;
          padding: 2px 6px;
          border-radius: 4px;
          letter-spacing: 0.04em;
        }
        .oc__delta--down {
          color: var(--danger);
          background: rgba(155, 69, 60, 0.10);
        }
        .oc__bars {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 8px;
          height: 48px;
          padding: 4px 2px 0;
        }
        .oc__bar-col {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          height: 100%;
          justify-content: flex-end;
        }
        .oc__bar-bar {
          width: 100%;
          background: linear-gradient(180deg, rgba(62,124,91,0.40) 0%, rgba(62,124,91,0.68) 100%);
          border-radius: 2px;
        }
        .oc__bar-col--hi .oc__bar-bar {
          background: linear-gradient(180deg, rgba(155,69,60,0.55) 0%, rgba(155,69,60,0.88) 100%);
        }
        .oc__bar-label {
          font-family: var(--font-mono);
          font-size: 8px;
          letter-spacing: 0.08em;
          color: var(--cream-meta);
        }
        .oc__bar-col--hi .oc__bar-label { color: var(--danger); }

        /* ─── Card 5: Cliente ─── */
        .oc__client {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .oc__avatar {
          width: 36px;
          height: 36px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          /* Neutral avatar (was a warm gold gradient + gold border + gold
             initials = too much gold). Subtle dark fill, soft border, muted
             initials — gold stays a restrained accent system-wide. */
          background: var(--gold-tint-12);
          color: var(--gold-deep);
          border: 1px solid var(--gold-glow);
          border-radius: 50%;
          font-family: var(--font-mono);
          font-weight: 600;
          font-size: 11px;
          letter-spacing: 0.05em;
          flex-shrink: 0;
        }
        .oc__client-info {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .oc__client-name {
          font-size: 13px;
          color: var(--cream);
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .oc__client-tag {
          font-family: var(--font-mono);
          font-size: 8px;
          letter-spacing: 0.08em;
          color: var(--cream-meta);
          text-transform: uppercase;
        }
        .oc__client-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 4px;
          border-top: 1px solid var(--border-soft);
        }
        .oc__client-time {
          font-family: var(--font-display);
          font-style: normal;
          font-weight: 600;
          font-size: 12px;
          color: var(--warning);
        }
        .oc__client-cta {
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 0.10em;
          color: var(--gold);
        }

        /* ─── Card 6: Personal grid ─── */
        .oc__pers-count {
          font-size: 11px;
          color: var(--cream-dim);
        }
        .oc__pers-count em {
          font-family: var(--font-display);
          font-style: normal;
          font-size: 15px;
          color: var(--cream);
          margin-right: 3px;
          font-weight: 700;
        }
        .oc__grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 4px;
        }
        .oc__cell {
          aspect-ratio: 1;
          border-radius: 3px;
          background: rgba(23, 22, 27, 0.08);
        }
        .oc__cell--ok    { background: rgba(62, 124, 91, 0.62); }
        .oc__cell--warn  { background: rgba(185, 119, 42, 0.62); }
        .oc__cell--off   { background: rgba(155, 69, 60, 0.55); }

        /* Label hidden on desktop (cards float around the screenshot). */
        .orbit-mobile-label { display: none; }

        /* Mobile: cards stop floating and stack as a clean titled block below
           the screenshot. */
        @media (max-width: 1100px) {
          .orbit {
            position: static;
            inset: auto;
            pointer-events: auto;
            display: flex;
            flex-direction: column;
            gap: 14px;
            margin-top: 36px;
            width: 100%;
          }
          .orbit-mobile-label {
            display: block;
            text-align: center;
            margin: 2px auto 22px;
            max-width: 20ch;
            font-family: var(--font-sans);
            font-weight: 500;
            font-size: clamp(21px, 5.8vw, 28px);
            line-height: 1.2;
            letter-spacing: -0.015em;
            color: var(--cream);
            text-transform: none;
          }
          .orbit-mobile-label em {
            font-family: var(--font-display);
            font-style: normal;
            font-weight: 700;
            color: var(--gold);
          }
          .orbit-slot {
            position: static;
            width: 100%;
            left: auto;
            right: auto;
            top: auto;
            display: block;
          }
          .oc { padding: 14px 16px; gap: 10px; border-radius: 14px; }
        }
      `}</style>
    </div>
  )
}
