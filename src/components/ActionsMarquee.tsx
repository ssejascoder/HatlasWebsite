/**
 * ActionsMarquee — "Lo que dueños de negocio hacen con Hatlas".
 *
 * Inspired by Campfire's "Top accounting teams use Campfire for" repeating
 * carousel. Adapts the pattern to Hatlas: a single endless row of common
 * actions ("Facturar al cliente · Cerrar caja · Ver margen del día · …"),
 * scrolling slowly.
 *
 * Why this works for Hatlas's audience:
 *   The SMB owner reading the landing recognizes 8/10 of these as things they
 *   currently do in scattered tools. Seeing them in one stream tells them
 *   "all of this lives in Hatlas" without a feature comparison table.
 *
 * Mechanics:
 *   - Pure CSS keyframe marquee — no JS, off-main-thread.
 *   - Items render twice in series so the loop is seamless.
 *   - Fade masks on both edges so items don't pop in/out abruptly.
 *   - aria-hidden because the content is decorative reinforcement, not
 *     load-bearing — the canonical list of features lives in the Sistema
 *     section just below.
 *   - prefers-reduced-motion: stops the animation. Items remain visible as
 *     a static line.
 */

const ACTIONS = [
  'Facturar al cliente',
  'Cerrar caja del día',
  'Ver el margen real',
  'Reponer stock antes de que se acabe',
  'Cobrar con QR',
  'Reactivar al cliente que dejó de venir',
  'Pagar planillas',
  'Saber qué se vendió ayer',
  'Comparar sucursales en tiempo real',
  'Imprimir factura electrónica',
  'Mandar promoción por WhatsApp',
  'Cuadrar inventario sin contar a mano',
  'Detectar cuándo conviene comprar',
  'Ver qué turno está cubierto',
]

export function ActionsMarquee() {
  return (
    <section className="actions" aria-label="Lo que hacen los dueños de negocio con Hatlas">
      <div className="actions__inner">
        <span className="actions__label">Lo que hacen con Hatlas</span>
        <div className="actions__track-wrap" aria-hidden="true">
          <div className="actions__track">
            {[...ACTIONS, ...ACTIONS].map((a, i) => (
              <span key={i} className="actions__item">
                <span className="actions__mark" aria-hidden="true">✦</span>
                <span className="actions__text">{a}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .actions {
          position: relative;
          z-index: 10;
          background: var(--bg-base);
          padding: 28px 0;
          border-top: 1px solid var(--border-soft);
          border-bottom: 1px solid var(--border-soft);
        }
        .actions__inner {
          display: flex;
          align-items: center;
          gap: 32px;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
        }
        .actions__label {
          flex-shrink: 0;
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--gold);
        }
        .actions__track-wrap {
          flex: 1;
          min-width: 0;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(
            90deg,
            transparent 0%,
            #000 6%,
            #000 94%,
            transparent 100%
          );
          mask-image: linear-gradient(
            90deg,
            transparent 0%,
            #000 6%,
            #000 94%,
            transparent 100%
          );
        }
        .actions__track {
          display: inline-flex;
          white-space: nowrap;
          animation: actions-scroll 75s linear infinite;
          will-change: transform;
        }
        .actions__item {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          padding-right: 28px;
        }
        .actions__mark {
          color: var(--gold);
          font-size: 11px;
          line-height: 1;
        }
        .actions__text {
          font-family: var(--font-sans);
          font-style: italic;
          font-weight: 500;
          font-size: 19px;
          color: var(--cream);
          letter-spacing: -0.01em;
        }
        .actions__item:nth-child(odd) .actions__text { color: var(--cream); }
        .actions__item:nth-child(even) .actions__text { color: var(--gold); }

        @keyframes actions-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .actions__track { animation: none; }
        }

        @media (max-width: 780px) {
          .actions__inner { flex-direction: column; align-items: flex-start; gap: 16px; padding: 0 20px; }
          .actions__text { font-size: 17px; }
          /* In the column layout the wrap is no longer a flex:1 child on the
             horizontal axis, so it would size to the 7000px track and leak
             horizontal scroll. Pin it to the viewport width so overflow:hidden
             can clip the marquee. */
          .actions__track-wrap { width: 100%; align-self: stretch; }
        }
      `}</style>
    </section>
  )
}
