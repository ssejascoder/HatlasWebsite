import { ShieldCheck, MessageCircle, QrCode, FileSpreadsheet } from 'lucide-react'

/**
 * ConnectsWith — thin "se conecta con lo que ya usás" strip. ERPs reassure
 * buyers they won't be isolated. Honest, Bolivia-specific integrations.
 */
const ITEMS = [
  { icon: ShieldCheck, label: 'Impuestos Nacionales' },
  { icon: MessageCircle, label: 'WhatsApp' },
  { icon: QrCode, label: 'Pagos con QR' },
  { icon: FileSpreadsheet, label: 'Importá tu Excel' },
]

export function ConnectsWith() {
  return (
    <section className="cw" aria-label="Se conecta con">
      <div className="container-lg cw__inner t-reveal">
        <span className="cw__label">Se conecta con lo que ya usás</span>
        <ul className="cw__items">
          {ITEMS.map(({ icon: Icon, label }) => (
            <li key={label} className="cw__item">
              <Icon size={17} strokeWidth={1.5} />
              {label}
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .cw { position: relative; z-index: 10; background: var(--bg-base); padding: 28px 0; border-top: 1px solid var(--border-soft); border-bottom: 1px solid var(--border-soft); }
        .cw__inner {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 16px 32px;
        }
        .cw__label {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--cream-meta);
        }
        .cw__items { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; align-items: center; gap: 12px 26px; }
        .cw__item {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-size: 14px;
          color: var(--cream-dim);
        }
        .cw__item svg { color: var(--gold); flex-shrink: 0; }
        @media (max-width: 600px) {
          .cw__inner { flex-direction: column; gap: 16px; }
        }
      `}</style>
    </section>
  )
}
