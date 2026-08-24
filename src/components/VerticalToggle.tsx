import { useEffect, useLayoutEffect, useRef } from 'react'
import { useVertical } from '../lib/VerticalContext'
import { VERTICAL_ORDER, VERTICALS, type VerticalKey } from '../lib/verticals'

/**
 * VerticalToggle — the rubro switcher that sits above the hero H1.
 *
 * Three Carbon-tier pills (Salteñería · Gimnasio · Ferretería). The active one
 * is highlighted by a single gold-tinted pill that SLIDES between options
 * (transitions-dev "Tabs sliding", 16) — JS measures the active button's
 * offsetLeft/offsetWidth and writes them onto the pill; CSS owns the tween.
 * The catalog snippet is light-theme; colors here are adapted to the dark/gold
 * system (gold tint + ring, the §4.9 "el oro es el escenario" accent).
 *
 * Accessibility: a labelled radiogroup. Each pill is aria-pressed and fully
 * keyboard reachable. The sliding pill is decorative (aria-hidden) and the
 * tween is disabled under prefers-reduced-motion.
 */
export function VerticalToggle() {
  const { vertical, setVertical } = useVertical()
  const pillRef = useRef<HTMLSpanElement | null>(null)
  const btnRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const firstRun = useRef(true)
  // Keep the active rubro readable from non-reactive handlers (resize/fonts)
  // so they reposition to the CURRENT pill without depending on `vertical`.
  const verticalRef = useRef(vertical)
  verticalRef.current = vertical

  const positionPill = (animate: boolean) => {
    const pill = pillRef.current
    const btn = btnRefs.current[verticalRef.current]
    if (!pill || !btn) return
    const apply = () => {
      pill.style.transform = `translateX(${btn.offsetLeft}px)`
      pill.style.width = `${btn.offsetWidth}px`
      pill.style.height = `${btn.offsetHeight}px`
      pill.style.top = `${btn.offsetTop}px`
    }
    if (animate) {
      // Defer to the next frame so the browser keeps the CURRENT (painted)
      // position as the transition baseline. Setting it synchronously inside
      // useLayoutEffect (same commit as React's re-render) makes the browser
      // skip the transition and the pill jumps instead of sliding.
      requestAnimationFrame(apply)
    } else {
      // Snap to position with no transition (first paint / resize / font load).
      const prev = pill.style.transition
      pill.style.transition = 'none'
      apply()
      void pill.offsetWidth // force reflow before restoring the transition
      pill.style.transition = prev
    }
  }

  useLayoutEffect(() => {
    positionPill(!firstRun.current)
    firstRun.current = false
  }, [vertical])

  useEffect(() => {
    // Mount-only: re-snapping on every rubro change here would beat (and cancel)
    // the slide animation from the layout effect.
    const onResize = () => positionPill(false)
    window.addEventListener('resize', onResize)
    // Reposition once webfonts settle — label widths shift on font swap.
    document.fonts?.ready.then(() => positionPill(false))
    return () => window.removeEventListener('resize', onResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="vtoggle" role="group" aria-label="Elegí tu rubro para ver el ejemplo">
      <span className="vtoggle__label">Vé tu negocio:</span>
      <div className="vtoggle__pills">
        <span className="vtoggle__pill-bg" ref={pillRef} aria-hidden="true" />
        {VERTICAL_ORDER.map((key: VerticalKey) => {
          const active = key === vertical
          return (
            <button
              key={key}
              ref={(el) => {
                btnRefs.current[key] = el
              }}
              type="button"
              className={`vtoggle__pill ${active ? 'is-active' : ''}`}
              aria-pressed={active}
              onClick={() => setVertical(key)}
            >
              {VERTICALS[key].label}
            </button>
          )
        })}
      </div>

      <style>{`
        .vtoggle {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 22px;
        }
        .vtoggle__label {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--cream-meta);
        }
        .vtoggle__pills {
          position: relative;
          display: inline-flex;
          gap: 6px;
          padding: 4px;
          background: var(--glass-bg-tint);
          -webkit-backdrop-filter: var(--glass-filter);
          backdrop-filter: var(--glass-filter);
          border: 1px solid var(--glass-border);
          border-radius: var(--r-pill);
          box-shadow: var(--glass-elev-sm);
        }
        /* The sliding highlight. transform + width are written inline by JS so
           the transition tweens between the previous and next measured pill. */
        .vtoggle__pill-bg {
          position: absolute;
          top: 4px;
          left: 0;
          height: 36px;
          width: 0;
          border-radius: var(--r-pill);
          background: var(--glass-bg-strong);
          border: 1px solid color-mix(in srgb, var(--ac) 45%, transparent);
          box-shadow: 0 6px 16px color-mix(in srgb, var(--gold) 22%, transparent), inset 0 1px 0 rgba(255, 255, 255, 0.6);
          transform: translateX(0);
          transition:
            transform var(--tabs-dur) var(--tabs-ease),
            width var(--tabs-dur) var(--tabs-ease);
          will-change: transform, width;
          z-index: 0;
          pointer-events: none;
        }
        .vtoggle__pill {
          position: relative;
          z-index: 1;
          appearance: none;
          border: 1px solid transparent;
          background: transparent;
          color: var(--cream-dim);
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: -0.005em;
          padding: 8px 16px;
          min-height: 36px;
          border-radius: var(--r-pill);
          cursor: pointer;
          white-space: nowrap;
          transition: color 200ms var(--ease-out-strong);
        }
        .vtoggle__pill:hover { color: var(--cream); }
        .vtoggle__pill:focus-visible {
          outline: 2px solid var(--gold);
          outline-offset: 2px;
        }
        /* Active pill: just the text color now — the gold ring/tint rides on
           the sliding .vtoggle__pill-bg underneath. */
        .vtoggle__pill.is-active {
          color: var(--gold-deep);
          font-weight: 600;
        }

        @media (max-width: 900px) {
          .vtoggle { justify-content: center; }
        }
        @media (max-width: 380px) {
          .vtoggle__pill { padding: 8px 12px; font-size: 12px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .vtoggle__pill-bg { transition: none !important; }
        }
      `}</style>
    </div>
  )
}
