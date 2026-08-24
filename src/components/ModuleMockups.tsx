import type { ReactNode } from 'react'
import { useVertical } from '../lib/VerticalContext'

/**
 * Six compact mockups used as the visual head of each module card.
 * Pure CSS/markup, no canvas, no images.
 *
 * Each mockup reads the currently selected rubro from VerticalContext, so the
 * Sistema bento stays in sync with the hero toggle (Salteñería / Gimnasio /
 * Ferretería). The module NAMES stay constant; only the demo content inside
 * each preview adapts. Content lives in lib/verticals.tsx → data.modules.
 *
 * MkFade re-mounts the preview on every rubro switch (key={vertical}) so the
 * shared .mk-fade crossfade (global.css) replays each toggle. Reduced-motion
 * users get a plain opacity fade.
 */

function MkFade({ children }: { children: ReactNode }) {
  const { vertical } = useVertical()
  return (
    <div key={vertical} className="mk-fade">
      {children}
    </div>
  )
}

export function MkPOS() {
  const { data } = useVertical()
  const m = data.modules.pos
  return (
    <MkFade>
      <div className="mk mk--pos">
        <div className="mk__title">{m.title}</div>
        <div className="mk__rows">
          {m.lines.map((line) => (
            <div key={line.label} className="mk__row">
              <span>{line.label}</span>
              <span>{line.amount}</span>
            </div>
          ))}
          <div className="mk__row mk__row--ghost">
            <span>{m.ghost}</span>
            <span>✓</span>
          </div>
        </div>
        <div className="mk__total">Bs <em>{m.total}</em></div>
        <style>{`
          .mk--pos { display: flex; flex-direction: column; gap: 9px; padding: 16px; height: 100%; }
          .mk__title { font-family: var(--font-display); font-size: 9px; letter-spacing: 0.16em; color: var(--ink3); text-transform: uppercase; }
          .mk__rows { display: flex; flex-direction: column; gap: 2px; flex: 1; }
          .mk__row { display: flex; justify-content: space-between; gap: 12px; font-family: var(--font-ui); font-size: 12px; color: var(--ink2); padding: 6px 0; border-bottom: 1px solid color-mix(in srgb, var(--ink) 6%, transparent); }
          .mk__row > span:first-child { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
          .mk__row > span:last-child { flex-shrink: 0; font-family: var(--font-display); color: var(--ink); }
          .mk__row--ghost { color: var(--ac-on); border-bottom: none; font-weight: 500; }
          .mk__row--ghost > span:last-child { color: var(--ac-on); }
          .mk__total { display: flex; align-items: baseline; gap: 5px; font-family: var(--font-ui); font-size: 13px; font-weight: 500; color: var(--ink2); margin-top: 2px; }
          .mk__total em { font-family: var(--font-display); font-style: normal; font-weight: 700; font-size: 26px; letter-spacing: -0.03em; color: var(--ink); }
        `}</style>
      </div>
    </MkFade>
  )
}

export function MkAlmacen() {
  const { data } = useVertical()
  const m = data.modules.almacen
  return (
    <MkFade>
      <div className="mk mk--alm">
        <div className="mk__title">{m.title}</div>
        <div className="mk__items">
          {m.items.map((it) => (
            <div key={it.sku} className="mk__item">
              <span className="mk__sku">{it.sku}</span>
              <span className={`mk__qty ${it.stock < 10 ? 'mk__qty--low' : ''}`}>{it.stock}</span>
            </div>
          ))}
        </div>
        <style>{`
          .mk--alm { padding: 16px; display: flex; flex-direction: column; gap: 2px; height: 100%; }
          .mk__items { display: flex; flex-direction: column; }
          .mk__item { display: flex; justify-content: space-between; align-items: center; gap: 12px; font-family: var(--font-ui); font-size: 12px; color: var(--ink2); padding: 8px 0; border-bottom: 1px solid color-mix(in srgb, var(--ink) 6%, transparent); }
          .mk__item:last-child { border-bottom: none; }
          .mk__sku { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
          .mk__qty { font-family: var(--font-display); font-weight: 500; color: var(--ink); flex-shrink: 0; }
          .mk__qty--low { color: var(--danger); }
        `}</style>
      </div>
    </MkFade>
  )
}

export function MkSupply() {
  const { data } = useVertical()
  const m = data.modules.logistica
  return (
    <MkFade>
      <div className="mk mk--sup">
        <div className="mk__title">{m.title}</div>
        <div className="mk__flow">
          <span>{m.from}</span>
          <span aria-hidden="true">→</span>
          <span>{m.to}</span>
        </div>
        <div className="mk__chips">
          {m.chips.map((chip, i) => (
            <span
              key={chip}
              className={`mk__chip ${i === m.chips.length - 1 ? 'mk__chip--ok' : ''}`}
            >
              {chip}
            </span>
          ))}
        </div>
        <style>{`
          .mk--sup { padding: 16px; display: flex; flex-direction: column; gap: 14px; height: 100%; }
          .mk__flow { display: flex; align-items: center; gap: 8px; font-family: var(--font-ui); font-size: 14px; font-weight: 500; color: var(--ink); flex-wrap: wrap; }
          .mk__flow span:nth-child(2) { color: var(--ac-on); font-family: var(--font-display); }
          .mk__chips { display: flex; gap: 6px; flex-wrap: wrap; }
          .mk__chip { font-family: var(--font-display); font-size: 10px; padding: 3px 8px; border: 1px solid var(--hairline); border-radius: 999px; color: var(--ink2); }
          .mk__chip--ok { color: var(--ac-on); border-color: color-mix(in srgb, var(--ac) 35%, transparent); background: color-mix(in srgb, var(--ac) 10%, transparent); }
        `}</style>
      </div>
    </MkFade>
  )
}

export function MkFinanzas() {
  const { data } = useVertical()
  const m = data.modules.finanzas
  return (
    <MkFade>
      <div className="mk mk--fin">
        <div className="mk__head">
          <div className="mk__title">{m.title}</div>
          <div className="mk__amount">Bs <em>{m.amount}</em></div>
        </div>
        <svg className="mk__chart" viewBox="0 0 280 80" preserveAspectRatio="none">
          <path
            d="M0,60 L40,55 L80,45 L120,48 L160,30 L200,28 L240,20 L280,12"
            fill="none"
            stroke="var(--ac)"
            strokeWidth="1.6"
          />
          <path
            d="M0,60 L40,55 L80,45 L120,48 L160,30 L200,28 L240,20 L280,12 L280,80 L0,80 Z"
            fill="url(#g-fin)"
          />
          <defs>
            <linearGradient id="g-fin" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="color-mix(in srgb, var(--ac) 30%, transparent)" />
              <stop offset="100%" stopColor="color-mix(in srgb, var(--ac) 0%, transparent)" />
            </linearGradient>
          </defs>
        </svg>
        <div className="mk__delta">{m.delta}</div>
        <style>{`
          .mk--fin { padding: 16px; display: flex; flex-direction: column; gap: 10px; height: 100%; }
          .mk__head { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; }
          .mk__amount { display: flex; align-items: baseline; gap: 4px; font-family: var(--font-ui); font-size: 13px; font-weight: 500; color: var(--ink2); flex-shrink: 0; }
          .mk__amount em { font-family: var(--font-display); font-style: normal; font-weight: 700; font-size: 22px; letter-spacing: -0.03em; color: var(--ink); }
          .mk__chart { flex: 1; min-height: 56px; width: 100%; }
          .mk__delta { font-family: var(--font-display); font-size: 10px; color: var(--ac-on); letter-spacing: 0.04em; }
        `}</style>
      </div>
    </MkFade>
  )
}

export function MkClientes() {
  const { data } = useVertical()
  const m = data.modules.clientes
  return (
    <MkFade>
      <div className="mk mk--cli">
        <div className="mk__title">{m.title}</div>
        <div className="mk__list">
          {m.rows.map((r) => (
            <div key={r.name} className="mk__client">
              <span>{r.name}</span>
              <span className="mk__visit">{r.visits}</span>
            </div>
          ))}
        </div>
        <style>{`
          .mk--cli { padding: 16px; display: flex; flex-direction: column; gap: 2px; height: 100%; }
          .mk__list { display: flex; flex-direction: column; }
          .mk__client { display: flex; justify-content: space-between; align-items: center; gap: 12px; font-family: var(--font-ui); font-size: 12px; color: var(--ink); padding: 8px 0; border-bottom: 1px solid color-mix(in srgb, var(--ink) 6%, transparent); }
          .mk__client:last-child { border-bottom: none; }
          .mk__client > span:first-child { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-weight: 500; }
          .mk__visit { font-family: var(--font-display); color: var(--ink3); font-size: 10px; flex-shrink: 0; }
        `}</style>
      </div>
    </MkFade>
  )
}

export function MkRRHH() {
  const { data } = useVertical()
  const m = data.modules.personal
  return (
    <MkFade>
      <div className="mk mk--rrhh">
        <div className="mk__title">{m.title}</div>
        <div className="mk__grid">
          {m.stats.map((s) => (
            <div key={s.label}>
              <div className="mk__num">{s.num}</div>
              <div className="mk__small">{s.label}</div>
            </div>
          ))}
        </div>
        <style>{`
          .mk--rrhh { padding: 16px; display: flex; flex-direction: column; gap: 14px; height: 100%; justify-content: center; }
          .mk__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
          .mk__num { font-family: var(--font-display); font-style: normal; font-weight: 700; font-size: 26px; letter-spacing: -0.03em; color: var(--ink); line-height: 1; }
          .mk__small { font-family: var(--font-display); font-size: 9px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink3); margin-top: 4px; }
        `}</style>
      </div>
    </MkFade>
  )
}
