/**
 * The Analyst card — Hatlas AI Analyst alert.
 * Reused only in Hero per Sprint 2.1 (AI section now uses a different visual).
 */
export function AnalystMockup() {
  return (
    <div className="analyst-mockup" aria-hidden="true">
      <div className="am__header">
        <span className="am__brand">TWENTY AGENT · ANALISTA DE TWENTY</span>
        <span className="am__time">HACE 5 MIN</span>
      </div>
      <p className="am__body">
        Equipetrol registra un pico inusual.{' '}
        <em>Ingresos 45% por encima</em> del promedio para esta hora.
      </p>
      <div className="am__metric">
        <div className="am__metric-label">VENTAS · 18:00 A 19:00</div>
        <div className="am__metric-value">Bs 2.840</div>
      </div>
      <div className="am__delta">
        <span className="am__delta-pill">▲ 45,2%</span>
        <span className="am__delta-context">comparado con los últimos 4 jueves</span>
      </div>
      <div className="am__note">
        El movimiento se mantendrá alto hasta las 20:30. Conviene reforzar la caja
        para que la gente no espere.
      </div>
      <div className="am__actions">
        <button type="button" className="am__btn am__btn--primary">Notificar a sucursal</button>
        <button type="button" className="am__btn am__btn--ghost">Ver detalles</button>
      </div>

      <style>{`
        .analyst-mockup {
          width: min(560px, 100%);
          padding: 22px 24px 20px;
          border-radius: 14px;
          background: linear-gradient(180deg, #14110b 0%, #0a0907 100%);
          border: 1px solid rgba(201, 169, 97, 0.18);
          box-shadow: 0 30px 80px -30px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(184, 179, 168, 0.10);
          font-family: var(--font-sans);
        }
        .am__header {
          display: flex; justify-content: space-between; align-items: baseline;
          margin-bottom: 14px;
        }
        .am__brand {
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 0.18em;
          color: rgba(242, 237, 224, 0.55);
        }
        .am__time {
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 0.12em;
          color: rgba(242, 237, 224, 0.40);
        }
        .am__body {
          margin: 0 0 18px;
          font-size: 17px;
          font-weight: 300;
          line-height: 1.30;
          color: var(--cream);
          letter-spacing: -0.005em;
        }
        .am__body em {
          font-family: var(--font-display);
          font-style: italic;
          color: var(--gold);
          font-weight: 500;
        }
        .am__metric {
          display: flex; align-items: baseline; justify-content: space-between;
          padding: 14px 0 10px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }
        .am__metric-label {
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 0.14em;
          color: rgba(242, 237, 224, 0.45);
        }
        .am__metric-value {
          font-family: var(--font-display);
          font-style: italic;
          font-size: 28px;
          color: var(--cream);
          letter-spacing: -0.02em;
        }
        .am__delta {
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 14px;
        }
        .am__delta-pill {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--success);
          background: rgba(109, 211, 154, 0.10);
          border: 1px solid rgba(109, 211, 154, 0.30);
          padding: 3px 8px;
          border-radius: 999px;
        }
        .am__delta-context {
          font-size: 11px;
          color: var(--cream-faint);
        }
        .am__note {
          font-size: 12px;
          line-height: 1.5;
          color: var(--cream-dim);
          margin-bottom: 16px;
        }
        .am__actions { display: flex; gap: 8px; }
        .am__btn {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 500;
          padding: 9px 14px;
          border-radius: 8px;
          cursor: pointer;
          transition: transform 160ms var(--ease-out-strong), background 200ms var(--ease-out-strong);
        }
        .am__btn:active { transform: scale(0.97); }
        .am__btn--primary {
          background: var(--grad-gold);
          border: none;
          color: var(--gold-text);
        }
        .am__btn--ghost {
          background: transparent;
          color: var(--cream-dim);
          border: 1px solid var(--border-strong);
        }
        .am__btn--ghost:hover { color: var(--cream); }
      `}</style>
    </div>
  )
}
