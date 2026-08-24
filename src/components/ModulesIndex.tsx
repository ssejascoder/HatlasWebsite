import { useEffect, useRef, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Nav } from './Nav'
import { Footer } from './Footer'
import { FinalCTA } from './FinalCTA'
import { Grain, ScrollProgress, CursorGlow } from './Chrome'
import { MODULES } from '../lib/modules'
import { useReveal } from '../lib/useReveal'

/**
 * ModulesIndex — directory of all six modules (Odoo-style "all apps" page).
 * Reached from the Nav "Producto" dropdown ("Ver todos los módulos") and
 * /modulos. Each card links to its module page.
 */
export function ModulesIndex() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Módulos · Hatlas'
    return () => {
      document.title = 'Hatlas'
    }
  }, [])

  const pageRef = useRef<HTMLElement>(null)
  useReveal(pageRef)

  return (
    <>
      <Nav />
      <Grain />
      <ScrollProgress />
      <CursorGlow />

      <main id="top" className="mindex" ref={pageRef}>
        <section className="mindex__hero">
          <div className="mindex__bg" aria-hidden="true" />
          <div className="container-lg">
            <span className="eyebrow t-reveal">Todo tu negocio, un solo lugar</span>
            <h1 className="h-mega mindex__h1 t-reveal" style={{ '--t-i': 1 } as CSSProperties}>
              Seis módulos que <em>hablan entre sí.</em>
            </h1>
            <p className="lede mindex__lede t-reveal" style={{ '--t-i': 2 } as CSSProperties}>
              Punto de venta, almacén, logística, finanzas, clientes y personal. Cada uno resuelve
              lo suyo y todos comparten los mismos datos. Vendés en caja y el resto se actualiza
              solo.
            </p>
          </div>
        </section>

        <section className="section-pad mindex__list">
          <div className="container-lg">
            <div className="mindex__grid">
              {MODULES.map((m, i) => {
                const Icon = m.icon
                return (
                  <Link
                    key={m.slug}
                    to={`/modulos/${m.slug}`}
                    className="micard t-reveal"
                    style={{ '--t-i': i } as CSSProperties}
                  >
                    <span className="micard__icon">
                      <Icon size={20} strokeWidth={1.5} />
                    </span>
                    <h2 className="micard__name">{m.name}</h2>
                    <p className="micard__tag">{m.tagline}</p>
                    <span className="micard__cta">
                      Ver módulo
                      <ArrowRight size={15} strokeWidth={1.75} />
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />

      <style>{`
        .mindex { position: relative; z-index: 5; }
        .mindex__hero {
          position: relative;
          padding: 152px 0 56px;
          overflow: hidden;
        }
        .mindex__bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          background:
            radial-gradient(50% 60% at 50% -6%, color-mix(in srgb, var(--ac) 30%, transparent), transparent 66%),
            radial-gradient(44% 48% at 12% 0%, color-mix(in srgb, var(--ac-light) 20%, transparent), transparent 70%),
            radial-gradient(44% 48% at 92% 4%, color-mix(in srgb, var(--ac-light) 16%, transparent), transparent 70%);
        }
        .mindex__hero .container-lg { position: relative; z-index: 1; }
        .mindex__hero .eyebrow { display: inline-block; margin-bottom: 20px; }
        .mindex__h1 { margin: 0 0 22px; max-width: 18ch; }
        .mindex__lede { margin: 0; max-width: 58ch; }

        .mindex__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }
        .micard {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 28px;
          min-height: 200px;
          background: var(--glass);
          -webkit-backdrop-filter: var(--glass-filter);
          backdrop-filter: var(--glass-filter);
          border: 1px solid var(--glass-border);
          border-radius: var(--r-xl);
          box-shadow: var(--e1), inset 0 1px 0 var(--glass-hi);
          text-decoration: none;
          transition:
            border-color 300ms var(--ease-out),
            transform 300ms var(--ease-out),
            box-shadow 300ms var(--ease-out);
        }
        .micard:hover {
          border-color: color-mix(in srgb, var(--ac) 45%, transparent);
          transform: translateY(-3px);
          box-shadow: 0 1px 2px color-mix(in srgb, var(--ink) 5%, transparent), 0 22px 50px var(--glass-shadow), inset 0 1px 0 var(--glass-hi);
        }
        .micard__icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: color-mix(in srgb, var(--ac) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--ac) 28%, transparent);
          border-radius: 11px;
          color: var(--ac-on);
          transition: border-color 300ms var(--ease-out), background 300ms var(--ease-out);
        }
        .micard:hover .micard__icon { border-color: color-mix(in srgb, var(--ac) 50%, transparent); background: color-mix(in srgb, var(--ac) 18%, transparent); }
        .micard__name {
          margin: 6px 0 0;
          font-family: var(--font-display);
          font-style: normal;
          font-weight: 600;
          letter-spacing: -0.02em;
          font-size: 23px;
          color: var(--ink);
        }
        .micard__tag { margin: 0; font-size: 14px; line-height: 1.5; color: var(--ink2); }
        .micard__cta {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-family: var(--font-display);
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ink3);
          transition: color 300ms var(--ease-out);
        }
        .micard__cta svg { transition: transform 300ms var(--ease-out); }
        .micard:hover .micard__cta { color: var(--ac-on); }
        .micard:hover .micard__cta svg { transform: translateX(4px); }

        @media (max-width: 900px) {
          .mindex__grid { grid-template-columns: repeat(2, 1fr); }
          .mindex__hero { padding: 128px 0 40px; }
        }
        @media (max-width: 560px) {
          .mindex__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
