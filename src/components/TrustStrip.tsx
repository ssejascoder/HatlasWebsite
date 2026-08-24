/**
 * TrustStrip — merged TrustBand + Stats (Sprint 3.1).
 *
 * Old landing had two separate sections: a TrustBand (3 sentences with
 * checkmarks) and a Stats grid (4 italic gold numerals). They competed for
 * the same job. Now one strip, 4 chips, monospace caps + Fraunces gold value.
 */
const CHIPS = [
  { value: 'Legal', label: 'Factura electrónica incluida' },
  { value: '6', label: 'Negocios usándolo hoy' },
  { value: '12k+', label: 'Facturas ya emitidas' },
  { value: '5 min', label: 'Y ya estás facturando' },
]

export function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Indicadores de confianza">
      <div className="container-lg">
        <div className="strip">
          {CHIPS.map((c, i) => (
            <div key={i} className="chip">
              <span className="chip__value">{c.value}</span>
              <span className="chip__label">{c.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .trust-strip {
          position: relative;
          z-index: 10;
          background: var(--glass-bg-tint);
          backdrop-filter: var(--glass-filter);
          -webkit-backdrop-filter: var(--glass-filter);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 34px 0;
        }
        .strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }
        .chip {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          padding: 0 24px;
          text-align: center;
          border-right: 1px solid var(--border-soft);
        }
        .chip:last-child { border-right: none; }
        .chip__value {
          font-family: var(--font-display);
          font-style: normal;
          font-weight: 700;
          font-size: clamp(24px, 2.8vw, 36px);
          color: var(--gold);
          letter-spacing: -0.03em;
          line-height: 1;
        }
        .chip__label {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--cream-meta);
        }
        @media (max-width: 780px) {
          .strip { grid-template-columns: repeat(2, 1fr); gap: 24px 0; }
          .chip:nth-child(2) { border-right: none; }
        }
      `}</style>
    </section>
  )
}
