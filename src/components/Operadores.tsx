import { useGsap, gsap, ScrollTrigger } from '../lib/useGsap'

/**
 * Operadores — Sprint 2.2 (monogram avatars, May iteration).
 *
 * Structure:
 *   1. Header (eyebrow + H2)
 *   2. HERO QUOTE — editorial Fraunces italic display
 *   3. THREE OPERATOR CARDS — monogram avatar + 1-line quote each
 *   4. PROOF STRIP — 3 italic gold numerals
 *
 * Avatars are editorial monograms: the operator initials set in Fraunces
 * italic inside a carbon circle. The operators are illustrative, so real
 * photos are not available; AI or stock faces would fail the impeccable
 * "AI slop test". Initials are honest signal, fully on-brand, and need no
 * external asset. When real B/W client photos exist, swap the monogram span
 * for an img inside .op-card__portrait.
 */

const HERO_QUOTE = {
  text: 'Antes tenía seis cuadernos. Hoy abro Hatlas y en treinta segundos sé cuánto vendió cada sucursal y qué hay que reponer mañana.',
  byline: 'Pablo Saavedra',
  context: 'Salteñería del Centro · 4 sucursales · Equipetrol + 2do Anillo',
}

type Operator = {
  seed: string
  name: string
  business: string
  quote: string
  initials: string
}

const OPERATORS: Operator[] = [
  {
    seed: 'camila-vega-panaderia',
    name: 'Camila Vega',
    business: 'Panadería La Esquina · Sopocachi, La Paz',
    quote: 'El cierre de caja se hace solo. Antes me robaba dos horas cada noche.',
    initials: 'CV',
  },
  {
    seed: 'andres-roldan-cafe',
    name: 'Andrés Roldán',
    business: 'Café Tunari · Cala Cala, Cochabamba',
    quote: 'Hatlas Agent me avisó qué cliente dejé de ver. Le escribí y volvió.',
    initials: 'AR',
  },
  {
    seed: 'lucia-iturralde-tienda',
    name: 'Lucía Iturralde',
    business: 'Comercial Rosita · Plan 3.000, Santa Cruz · 2 sucursales',
    quote: 'Trasladaron mis datos en cinco días. Cero Excel desde entonces.',
    initials: 'LI',
  },
]

export function Operadores() {
  const ref = useGsap<HTMLElement>((scope) => {
    const quote = scope.querySelector<HTMLElement>('[data-anim="quote"]')
    const cards = scope.querySelectorAll<HTMLElement>('.op-card')

    if (quote) {
      gsap.set(quote, { opacity: 0, y: 24 })
      gsap.to(quote, {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: scope, start: 'top 75%', once: true },
      })
    }
    if (cards.length) {
      gsap.set(cards, { opacity: 0, y: 24 })
      ScrollTrigger.batch(cards, {
        onEnter: (els) => gsap.to(els, {
          opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.08, overwrite: true,
        }),
        start: 'top 80%',
        once: true,
      })
    }
  })

  return (
    <section
      className="section-pad operadores"
      id="operadores"
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="operadores-title"
    >
      <div className="container-lg">
        <header className="operadores__header">
          <span className="eyebrow">Dueños de negocio que lo usan</span>
          <h2 id="operadores-title" className="h-section">
            Negocios de Bolivia{' '}
            <em>que ya no vuelven al Excel.</em>
          </h2>
        </header>

        <figure className="op-quote" data-anim="quote">
          <blockquote className="op-quote__text">
            <span aria-hidden="true" className="op-quote__marks op-quote__marks--open">“</span>
            {HERO_QUOTE.text}
            <span aria-hidden="true" className="op-quote__marks op-quote__marks--close">”</span>
          </blockquote>
          <figcaption className="op-quote__byline">
            <span className="op-quote__name">— {HERO_QUOTE.byline}</span>
            <span className="op-quote__ctx">{HERO_QUOTE.context}</span>
          </figcaption>
        </figure>

        <div className="op-cards" role="list">
          {OPERATORS.map((op) => (
            <article key={op.seed} className="op-card" role="listitem">
              <div className="op-card__portrait" aria-hidden="true">
                <span className="op-card__monogram">{op.initials}</span>
              </div>
              <blockquote className="op-card__quote">
                <span aria-hidden="true" className="op-card__marks op-card__marks--open">“</span>
                {op.quote}
                <span aria-hidden="true" className="op-card__marks op-card__marks--close">”</span>
              </blockquote>
              <div className="op-card__byline">
                <span className="op-card__name">— {op.name}</span>
                <span className="op-card__biz">{op.business}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .operadores {
          position: relative;
          z-index: 10;
          background: var(--bg-subtle);
        }
        .operadores__header {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 56px;
        }
        .operadores__header .eyebrow {
          display: inline-block;
          margin-bottom: 20px;
        }

        /* ─── Hero editorial quote ─── */
        .op-quote {
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 8px;
          text-align: left;
        }
        .op-quote__text {
          font-family: var(--font-sans);
          font-style: italic;
          font-weight: 400;
          font-size: clamp(26px, 4vw, 50px);
          line-height: 1.22;
          color: var(--cream);
          letter-spacing: -0.02em;
          margin: 0 0 28px;
          text-wrap: balance;
        }
        .op-quote__marks {
          font-family: var(--font-sans);
          font-style: italic;
          color: var(--gold);
        }
        .op-quote__marks--open { margin-right: 6px; }
        .op-quote__marks--close { margin-left: 4px; }
        .op-quote__byline { display: flex; flex-direction: column; gap: 4px; }
        .op-quote__name {
          font-family: var(--font-sans);
          font-size: 16px;
          color: var(--cream);
          font-weight: 500;
        }
        .op-quote__ctx {
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--cream-meta);
        }

        /* ─── Three operator cards ─── */
        .op-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          max-width: 1080px;
          margin: 64px auto 0;
        }
        /* Carbon tier (§4.9 default) — unified with all content cards */
        .op-card {
          display: flex;
          flex-direction: column;
          gap: 18px;
          padding: 28px 24px;
          background: var(--glass-bg);
          -webkit-backdrop-filter: blur(18px) saturate(1.7) brightness(1.05);
          backdrop-filter: url(#lg-refract) blur(18px) saturate(1.7) brightness(1.05);
          border: 1px solid var(--glass-border);
          border-radius: var(--r-card);
          box-shadow: var(--glass-elev-sm);
          transition:
            border-color 300ms var(--ease-out-strong),
            box-shadow 300ms var(--ease-out-strong),
            transform 300ms var(--ease-out-strong);
        }
        .op-card:hover {
          border-color: rgba(62, 124, 91, 0.45);
          transform: translateY(-3px);
          box-shadow: 0 1px 2px rgba(23,22,27,.05), 0 22px 50px var(--glass-shadow), inset 0 1px 0 var(--glass-hi);
        }
        .op-card__portrait {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 84px;
          height: 84px;
          border-radius: 50%;
          background: var(--gold-tint-12);
          border: 1px solid var(--gold-glow);
          flex-shrink: 0;
        }
        .op-card__monogram {
          font-family: var(--font-display);
          font-style: normal;
          font-weight: 700;
          font-size: 28px;
          letter-spacing: -0.02em;
          color: var(--gold-deep);
          user-select: none;
        }
        .op-card__quote {
          margin: 0;
          font-family: var(--font-sans);
          font-size: 14px;
          line-height: 1.55;
          color: var(--cream);
          letter-spacing: -0.005em;
          text-wrap: pretty;
          flex: 1;
        }
        .op-card__marks {
          font-family: var(--font-sans);
          font-style: italic;
          color: var(--gold);
          font-size: 18px;
          line-height: 0;
          vertical-align: -0.05em;
        }
        .op-card__marks--open { margin-right: 4px; }
        .op-card__marks--close { margin-left: 3px; }
        .op-card__byline { display: flex; flex-direction: column; gap: 4px; }
        .op-card__name {
          font-family: var(--font-sans);
          font-size: 13px;
          color: var(--cream);
          font-weight: 500;
        }
        .op-card__biz {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--cream-meta);
        }

        @media (max-width: 900px) {
          .op-cards { grid-template-columns: 1fr; max-width: 560px; }
        }
      `}</style>
    </section>
  )
}
