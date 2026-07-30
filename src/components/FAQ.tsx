import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const ITEMS = [
  {
    q: '¿Cuánto tarda en estar listo?',
    a: 'De Excel a Hatlas en una semana. Configuramos todo el primer día, trasladamos tus datos y entrenamos a tu equipo durante la primera semana. Empezás a facturar el día uno.',
  },
  {
    q: '¿Cumple con la facturación electrónica boliviana?',
    a: 'Sí. Hatlas está conectado directamente al sistema de facturación electrónica del país. No usamos complementos ni servicios externos. Emitís facturas legales desde el primer día.',
  },
  {
    q: '¿Tengo que usar todo Hatlas desde el inicio?',
    a: 'No. Todos los planes traen todas las áreas: cobros, almacén, logística, finanzas, clientes y personal. Empezás usando lo que necesites primero, el resto está ahí cuando lo querés. Hatlas Agent y la opción de varias sucursales vienen en el plan Crecimiento.',
  },
  {
    q: '¿Hatlas Agent entiende mi negocio en serio?',
    a: 'Sí, y se nota en los primeros siete días. Hatlas Agent aprende patrones de venta, qué clientes te compran y cuándo, cómo se mueve el stock, dónde estás ganando y dónde no. Cuanto más usás Hatlas, mejor lee tu negocio.',
  },
  {
    q: '¿Quién ve mis datos?',
    a: 'Solo vos y tu equipo. Tus datos viajan y se guardan cifrados. Copia de seguridad automática todos los días. Cumplimos con las normas de privacidad bolivianas. Nunca compartimos tu información con terceros.',
  },
  {
    q: '¿Puedo cambiar de plan cuando quiera?',
    a: 'Sí. Podés subir o bajar de plan mes a mes sin penalización. El plan anual tiene 15% de descuento; si cancelás antes te devolvemos lo proporcional.',
  },
]

/**
 * FAQ — Sprint 4.2 polish.
 *
 * Pre-audit had a redundant eyebrow ("Preguntas frecuentes") + H2 ("Lo que
 * quieren saber"). Same job twice. Now only the H2 — concise and earns its
 * place.
 *
 * Accordion uses the modern grid-template-rows 0fr↔1fr trick for smooth height
 * animation without measuring. Interruptible by design (transition, not
 * keyframes — per emil).
 */
export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section className="section-pad faq" id="faq" aria-labelledby="faq-title">
      <div className="container-lg">
        <header className="faq__header">
          <h2 id="faq-title" className="h-section">
            Lo que más <em>nos preguntan.</em>
          </h2>
        </header>
        <div className="faq__list">
          {ITEMS.map((it, i) => {
            const isOpen = open === i
            return (
              <button
                key={i}
                type="button"
                className={`faq__item ${isOpen ? 'is-open' : ''}`}
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span className="faq__q">
                  <span>{it.q}</span>
                  <span className="faq__toggle" aria-hidden="true">
                    <Plus className="faq__ico faq__ico--plus" size={16} />
                    <Minus className="faq__ico faq__ico--minus" size={16} />
                  </span>
                </span>
                <div
                  className="faq__a-wrap"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="faq__a-inner">
                    <p>{it.a}</p>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      <style>{`
        .faq {
          position: relative;
          z-index: 10;
          background: var(--bg-subtle);
        }
        .faq__header {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 48px;
        }
        .faq__list {
          display: flex;
          flex-direction: column;
          max-width: 840px;
          margin: 0 auto;
          border-top: 1px solid var(--border-soft);
        }
        .faq__item {
          width: 100%;
          padding: 24px 0;
          background: transparent;
          border: none;
          border-bottom: 1px solid var(--border-soft);
          text-align: left;
          color: var(--cream);
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }
        .faq__q {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          font-family: var(--font-sans);
          font-size: 18px;
          font-weight: 400;
          letter-spacing: -0.005em;
          color: var(--cream);
        }
        .faq__item:hover .faq__q { color: var(--gold); }
        .faq__toggle {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border: 1px solid var(--border);
          background: var(--bg-card);
          color: var(--cream-dim);
          border-radius: 9px;
          flex-shrink: 0;
          transition:
            background 200ms var(--ease-out-strong),
            border-color 200ms var(--ease-out-strong),
            color 200ms var(--ease-out-strong);
        }
        .faq__item.is-open .faq__toggle {
          background: var(--gold-tint-12);
          border-color: var(--gold-deep);
          color: var(--gold);
        }
        /* transitions-dev · icon-swap (09) on the +/- toggle */
        .faq__ico {
          position: absolute;
          inset: 0;
          margin: auto;
          width: 16px;
          height: 16px;
          transition:
            opacity 200ms ease-in-out,
            transform 200ms ease-in-out,
            filter 200ms ease-in-out;
        }
        .faq__ico--minus { opacity: 0; transform: scale(0.4) rotate(-90deg); filter: blur(2px); }
        .faq__item.is-open .faq__ico--plus { opacity: 0; transform: scale(0.4) rotate(90deg); filter: blur(2px); }
        .faq__item.is-open .faq__ico--minus { opacity: 1; transform: none; filter: none; }
        .faq__a-wrap {
          display: grid;
          grid-template-rows: 0fr;
          overflow: hidden;
          transition: grid-template-rows 350ms cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        @media (prefers-reduced-motion: reduce) {
          .faq__a-wrap { transition: none; }
          .faq__ico { transition: none; }
        }
        .faq__a-inner { min-height: 0; }
        .faq__a-inner p {
          margin: 16px 0 0;
          padding-right: 48px;
          max-width: 680px;
          font-size: 15px;
          line-height: 1.6;
          color: var(--cream-dim);
        }
      `}</style>
    </section>
  )
}
