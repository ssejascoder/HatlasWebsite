import { useState } from 'react'
import { useGsap, gsap, ScrollTrigger } from '../lib/useGsap'

/**
 * Pricing — Sprint 1.3 (tier inversion) + Sprint 1.4 (eyebrow contrast).
 *
 * Pre-audit shipped: Carbon (Starter) → Silver featured (Crecimiento) → Gold
 * (Enterprise Personalizado). That inverted Hatlas's internal §4.9 semantics:
 *   Gold = hero, max 1 per viewport. Silver = secondary. Dark = default.
 *
 * Now: 2 cards in the grid (Starter + Crecimiento). Crecimiento is Gold
 * featured — the anchor plan, the one most operators pick. Enterprise lives
 * BELOW the grid as an inline link → "¿Más de 5 sucursales? Hablemos."
 *
 * Eyebrow color on metallic gradients is forced to dark per CLAUDE.md §4.9.
 */

type Feature = string | { text: string; bold: true }

type Tier = {
  cls: 'tier-carbon' | 'tier-gold'
  label: string
  name: string
  price: string
  priceUnit?: string
  blurb: string
  features: Feature[]
  badge?: string
  ctaCls: 'tier-cta--light' | 'tier-cta--dark'
  ctaLabel: string
  featured?: boolean
}

const TIERS: Tier[] = [
  {
    cls: 'tier-carbon',
    label: 'Carbon',
    name: 'Starter',
    price: 'Bs. 690',
    priceUnit: '/ mes / sucursal',
    blurb: 'Para arrancar bien y sin trabas. Una sucursal, todas las áreas.',
    features: [
      'Punto de Venta + facturación electrónica boliviana',
      'Almacén',
      'Logística entre sucursales',
      'Finanzas',
      'Clientes',
      'Personal (asistencia y planillas)',
      '1 sucursal',
      'Soporte por chat de lunes a viernes',
    ],
    ctaCls: 'tier-cta--light',
    ctaLabel: 'Agendar demo',
  },
  {
    cls: 'tier-gold',
    label: 'Gold',
    name: 'Crecimiento',
    price: 'Bs. 1,290',
    priceUnit: '/ mes / sucursal',
    blurb: 'Cuando ya no alcanza Excel. Varias sucursales y Hatlas Agent aprendiendo lo tuyo.',
    features: [
      { text: 'Todo lo de Starter', bold: true },
      { text: 'Hatlas Agent incluido', bold: true },
      'Hasta 5 sucursales',
      'Reportes y tableros avanzados',
      'Soporte prioritario en chat, email y WhatsApp',
      'Entrenamos a tu equipo',
      'Trasladamos tus datos de Excel',
    ],
    badge: 'Recomendado',
    ctaCls: 'tier-cta--dark',
    ctaLabel: 'Empezar con Crecimiento',
    featured: true,
  },
]

function annualize(price: string) {
  if (!price.startsWith('Bs.')) return price
  // Strip every non-digit (the "." in "Bs." and the thousands separator both
  // broke the old parse). Prices are whole-Bs integers.
  const n = parseInt(price.replace(/\D/g, ''), 10) || 0
  if (!n) return price
  return `Bs. ${Math.round(n * 0.85).toLocaleString('es-BO')}`
}

export function Pricing() {
  const [annual, setAnnual] = useState(false)

  const ref = useGsap<HTMLElement>((scope) => {
    const cards = scope.querySelectorAll<HTMLElement>('.tier-card')
    gsap.set(cards, { opacity: 0, y: 40 })
    ScrollTrigger.batch(cards, {
      onEnter: (els) => {
        els.forEach((el) => {
          gsap.to(el, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', overwrite: true })
        })
      },
      start: 'top 85%',
      once: true,
    })
  })

  return (
    <section
      className="section-pad pricing"
      id="pricing"
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="pricing-title"
    >
      <div className="container-lg">
        <header className="pricing__header">
          <span className="eyebrow">Precios bolivianos</span>
          <h2 id="pricing-title" className="h-section">
            Hatlas crece <em>con vos.</em>
          </h2>
          <p className="lede" style={{ marginInline: 'auto' }}>
            Arrancá con todo lo esencial. Sumá Hatlas Agent y más sucursales cuando crezcas.
          </p>
        </header>

        <div className="toggle">
          <span className="toggle__pill" data-annual={annual} aria-hidden="true" />
          <button
            type="button"
            className={`toggle__btn ${!annual ? 'toggle__btn--active' : ''}`}
            onClick={() => setAnnual(false)}
          >
            Mensual
          </button>
          <button
            type="button"
            className={`toggle__btn ${annual ? 'toggle__btn--active' : ''}`}
            onClick={() => setAnnual(true)}
          >
            Anual
            <span className="toggle__save">−15%</span>
          </button>
        </div>

        <div className="grid">
          {TIERS.map((t) => (
            <article
              key={t.name}
              className={`tier-card ${t.cls} ${t.featured ? 'tier-card--featured' : ''}`}
            >
              {t.badge && <div className="tier-card__badge">{t.badge}</div>}
              <div className="tier-card__label">{t.label}</div>
              <div className="tier-card__name">{t.name}</div>
              <div className="tier-card__price">
                {annual ? annualize(t.price) : t.price}
                <span className="tier-card__price-unit">
                  {' '}
                  {annual ? '/ mes / sucursal · facturado anual' : t.priceUnit}
                </span>
              </div>
              <p className="tier-card__blurb">{t.blurb}</p>
              <ul className="tier-card__features">
                {t.features.map((f, i) => {
                  const text = typeof f === 'string' ? f : f.text
                  const bold = typeof f !== 'string' && f.bold
                  return (
                    <li key={i} className={bold ? 'is-bold' : ''}>{text}</li>
                  )
                })}
              </ul>
              <a href="#cta-final" className={`tier-cta ${t.ctaCls}`}>
                {t.ctaLabel}
              </a>
            </article>
          ))}
        </div>

        <p className="enterprise">
          <span className="enterprise__lead">
            ¿Más de 5 sucursales, conexión con otros sistemas o atención dedicada?
          </span>{' '}
          <a className="enterprise__link" href="mailto:enterprise@hatlas.bo">
            Hablemos →
          </a>
        </p>

        <p className="pricing__fine">
          Precios en bolivianos. IVA no incluido. Pagás por mes o por año con 15% de descuento.
          Puesta en marcha incluida en todos los planes.
        </p>
      </div>

      <style>{`
        .pricing {
          position: relative;
          z-index: 10;
          background: var(--bg-base);
        }
        .pricing__header {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 40px;
        }
        .pricing__header .eyebrow { display: inline-block; margin-bottom: 20px; }
        .pricing__header h2 { margin-bottom: 18px; }

        .toggle {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 4px;
          width: 320px;
          max-width: 90vw;
          background: var(--bg-card);
          border: 1px solid var(--border-soft);
          border-radius: 999px;
          margin: 0 auto 40px;
        }
        /* sliding gold pill (matches the rubro toggle aesthetic) */
        .toggle__pill {
          position: absolute;
          top: 4px;
          left: 4px;
          width: calc(50% - 4px);
          height: calc(100% - 8px);
          background: var(--gold);
          border-radius: 999px;
          transform: translateX(0);
          transition: transform 280ms var(--ease-out-strong);
          z-index: 0;
        }
        .toggle__pill[data-annual="true"] { transform: translateX(100%); }
        .toggle__btn {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 44px;
          padding: 12px 18px;
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.02em;
          color: var(--cream-dim);
          background: transparent;
          border: none;
          border-radius: 999px;
          cursor: pointer;
          transition: color 200ms var(--ease-out-strong);
        }
        .toggle__btn:hover { color: var(--cream); }
        .toggle__btn--active { color: var(--gold-text); }
        @media (prefers-reduced-motion: reduce) {
          .toggle__pill { transition: none; }
        }
        .toggle__save {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.06em;
          padding: 2px 8px;
          border-radius: 999px;
          background: var(--gold-tint-12);
          color: var(--gold-deep);
        }
        .toggle__btn--active .toggle__save { background: rgba(255, 255, 255, 0.24); color: var(--gold-text); }

        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          max-width: 880px;
          margin: 0 auto;
          align-items: stretch;
        }
        @media (max-width: 780px) {
          .grid { grid-template-columns: 1fr; max-width: 480px; }
        }

        .tier-card {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 32px 28px;
          border-radius: 16px;
        }
        .tier-carbon {
          background: var(--glass-bg-strong);
          -webkit-backdrop-filter: blur(18px) saturate(1.7) brightness(1.05);
          backdrop-filter: url(#lg-refract) blur(18px) saturate(1.7) brightness(1.05);
          border: 1px solid var(--glass-border);
          color: var(--cream);
          box-shadow: var(--glass-elev);
        }
        .tier-gold {
          background: linear-gradient(160deg, #3E7C5B 0%, #2F5E45 100%);
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: #FFFFFF;
          box-shadow:
            0 0 0 1px rgba(47, 94, 69, 0.30),
            0 30px 60px -18px rgba(47, 94, 69, 0.55),
            inset 0 1px 0 rgba(255, 255, 255, 0.20);
        }
        .tier-gold .tier-card__name,
        .tier-gold .tier-card__price {
          color: #FFFFFF;
        }
        .tier-card--featured { transform: translateY(0); }
        @media (min-width: 781px) {
          .tier-card--featured { transform: scale(1.02); }
        }

        /*
         * Sprint 1.4 (revised post-WCAG check): the gold gradient runs from
         * #8a6f3a to #d4ac6a; any dark text on the darker end fails WCAG.
         * Fix: hide the redundant Gold eyebrow (badge already labels the
         * tier), darken the price-unit, and use solid #1a1a1a for body text
         * which sits over the bright half of the gradient.
         */
        .tier-gold .tier-card__label {
          visibility: hidden;
          height: 0;
          margin: 0;
        }
        .tier-gold .tier-card__price-unit {
          color: rgba(255, 255, 255, 0.82);
          opacity: 1;
        }
        .tier-gold .tier-card__blurb,
        .tier-gold .tier-card__features {
          color: #FFFFFF;
        }
        .tier-gold .tier-card__blurb { opacity: 0.9; }
        .tier-gold .tier-card__features li::before { opacity: 0.9; color: #FFFFFF; }

        .tier-card__badge {
          position: absolute;
          top: -12px;
          right: 24px;
          padding: 6px 12px;
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          background: var(--gold);
          color: var(--gold-text);
          border-radius: 999px;
          box-shadow: 0 8px 20px color-mix(in srgb, var(--gold) 40%, transparent), inset 0 1px 0 rgba(255,255,255,0.3);
        }
        .tier-card__label {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          opacity: 0.7;
          margin-bottom: 12px;
        }
        .tier-card__name {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 22px;
          letter-spacing: -0.02em;
          margin-bottom: 8px;
        }
        .tier-card__price {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 34px;
          letter-spacing: -0.03em;
          line-height: 1;
          margin-bottom: 6px;
        }
        .tier-card__price-unit {
          opacity: 0.7;
          font-size: 13px;
          font-weight: 400;
        }
        .tier-card__blurb {
          margin: 14px 0 22px;
          font-size: 14px;
          line-height: 1.5;
          opacity: 0.88;
        }
        .tier-card__features {
          flex: 1;
          margin: 0 0 28px;
          padding: 0;
          font-size: 14px;
          line-height: 1.55;
          list-style: none;
        }
        .tier-card__features li {
          display: flex;
          gap: 10px;
          padding: 6px 0;
        }
        .tier-card__features li::before {
          content: '✓';
          opacity: 0.7;
          margin-top: 2px;
          flex-shrink: 0;
        }
        .tier-card__features li.is-bold { font-weight: 500; }

        .tier-cta {
          width: 100%;
          padding: 12px 16px;
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 500;
          text-align: center;
          text-decoration: none;
          border-radius: 10px;
          cursor: pointer;
          transition: background 200ms var(--ease-out-strong), transform 160ms var(--ease-out-strong);
        }
        .tier-cta:active { transform: scale(0.97); }
        .tier-cta--light {
          background: transparent;
          color: var(--gold-deep);
          border: 1px solid rgba(62, 124, 91, 0.42);
        }
        .tier-cta--light:hover { background: var(--gold-tint-12); border-color: var(--gold); }
        .tier-cta--dark {
          background: #FFFFFF;
          color: var(--gold-deep);
          border: 1px solid rgba(255, 255, 255, 0.6);
          box-shadow: 0 8px 20px rgba(23, 22, 27, 0.18);
        }
        .tier-cta--dark:hover { background: #F2EFE8; }

        .enterprise {
          margin: 48px auto 0;
          max-width: 720px;
          text-align: center;
          font-family: var(--font-sans);
          font-size: 14px;
          color: var(--cream-dim);
        }
        .enterprise__lead { display: inline; }
        .enterprise__link {
          display: inline-flex;
          align-items: center;
          min-height: 44px;
          padding: 6px 8px;
          color: var(--gold);
          text-decoration: none;
          font-weight: 500;
          transition: color 200ms var(--ease-out-strong);
        }
        .enterprise__link:hover { color: var(--gold-bright); }

        .pricing__fine {
          margin-top: 24px;
          text-align: center;
          font-family: var(--font-mono);
          font-size: 12px;
          line-height: 1.55;
          letter-spacing: 0.04em;
          color: var(--cream-meta);
          max-width: 640px;
          margin-inline: auto;
        }
      `}</style>
    </section>
  )
}
