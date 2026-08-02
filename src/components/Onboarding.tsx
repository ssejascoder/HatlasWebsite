import type { CSSProperties } from 'react'

/**
 * Onboarding ("Cómo arrancás") — reduces the #1 ERP objection: switching cost.
 * Three steps + a compact "antes vs con Hatlas" contrast. Placed right before
 * Pricing so the migration fear is handled before the price ask.
 */

const STEPS = [
  {
    n: '01',
    title: 'Lo dejamos andando',
    desc: 'Configuramos Hatlas con tu negocio, tus productos y tus sucursales. El día uno ya podés facturar.',
  },
  {
    n: '02',
    title: 'Migramos tu Excel',
    desc: 'Trasladamos tus datos de Excel, WhatsApp y cuadernos. No empezás de cero ni perdés tu historial.',
  },
  {
    n: '03',
    title: 'Entrenamos a tu equipo',
    desc: 'En la primera semana tu equipo ya factura solo y vos ya ves tus números en vivo.',
  },
]

export function Onboarding() {
  return (
    <section className="section-pad onb" id="como-arrancas" aria-labelledby="onb-title">
      <div className="container-lg">
        <header className="onb__header t-reveal">
          <span className="eyebrow">Cómo arrancás</span>
          <h2 id="onb-title" className="h-section">
            De Excel a Hatlas <em>en una semana.</em>
          </h2>
          <p className="lede" style={{ marginInline: 'auto' }}>
            Cambiar de sistema asusta. Por eso lo hacemos nosotros, con vos, sin que pares tu negocio.
          </p>
        </header>

        <ol className="onb__steps">
          {STEPS.map((s, i) => (
            <li key={s.n} className="onb__step t-reveal" style={{ '--t-i': i } as CSSProperties}>
              <span className="onb__num">{s.n}</span>
              <h3 className="onb__step-title">{s.title}</h3>
              <p className="onb__step-desc">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>

      <style>{`
        .onb { position: relative; z-index: 10; }
        .onb__header { text-align: center; max-width: 720px; margin: 0 auto 56px; }
        .onb__header .eyebrow { display: inline-block; margin-bottom: 20px; }
        .onb__header h2 { margin-bottom: 20px; }

        .onb__steps {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          counter-reset: step;
        }
        .onb__step {
          position: relative;
          padding: 28px;
          background: var(--glass-bg);
          -webkit-backdrop-filter: blur(18px) saturate(1.7) brightness(1.05);
          backdrop-filter: url(#lg-refract) blur(18px) saturate(1.7) brightness(1.05);
          border: 1px solid var(--glass-border);
          border-radius: var(--r-card);
          box-shadow: var(--glass-elev-sm);
        }
        .onb__num {
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.2em;
          color: var(--gold);
        }
        .onb__step-title {
          margin: 14px 0 8px;
          font-family: var(--font-display);
          font-style: normal;
          font-weight: 600;
          letter-spacing: -0.02em;
          font-size: 21px;
          color: var(--cream);
        }
        .onb__step-desc { margin: 0; font-size: 14px; line-height: 1.55; color: var(--cream-dim); }

        @media (max-width: 860px) {
          .onb__steps { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
