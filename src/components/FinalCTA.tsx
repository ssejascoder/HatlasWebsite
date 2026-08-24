import { ShieldCheck, Lock, DatabaseBackup, MapPin } from 'lucide-react'
import { useGsap, gsap } from '../lib/useGsap'
import { whatsappUrl, emailUrl, CONTACT_EMAIL } from '../lib/contact'

const TRUST = [
  { icon: ShieldCheck, label: 'Autorizado por Impuestos Nacionales' },
  { icon: Lock, label: 'Cifrado de extremo a extremo' },
  { icon: DatabaseBackup, label: 'Backup diario automático' },
  { icon: MapPin, label: 'Tus datos, en Bolivia' },
]

export function FinalCTA() {
  const ref = useGsap<HTMLElement>((scope) => {
    const headline = scope.querySelector<HTMLElement>('[data-anim="headline"]')
    if (!headline) return
    gsap.set(headline, { opacity: 0, y: 20 })
    gsap.to(headline, {
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: scope, start: 'top 75%', once: true },
    })
  })

  return (
    <section
      className="section-pad final-cta"
      id="cta-final"
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="cta-final-title"
    >
      <div className="container-lg">
        <div className="final-cta__inner">
          <span className="eyebrow">Empezá hoy</span>
          <h2 id="cta-final-title" className="h-section" data-anim="headline">
            Probá Hatlas <em>con tu negocio.</em>
          </h2>
          <p className="lede" style={{ marginInline: 'auto' }}>
            Reservá 20 minutos con el equipo. Te mostramos Hatlas con tus datos reales
            y respondemos todo lo que necesites saber.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold final-cta__btn"
          >
            Escribinos por WhatsApp
          </a>
          <p className="final-cta__alt">
            o agendá 20 min: <a href={emailUrl}>{CONTACT_EMAIL}</a>
          </p>
          <ul className="trust-badges" aria-label="Garantías de Hatlas">
            {TRUST.map(({ icon: Icon, label }) => (
              <li key={label} className="trust-badge">
                <Icon size={15} strokeWidth={1.75} />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        .final-cta {
          position: relative;
          z-index: 10;
          background: var(--bg-subtle);
          text-align: center;
        }
        .final-cta__inner { max-width: 720px; margin: 0 auto; }
        .final-cta__inner .eyebrow { display: inline-block; margin-bottom: 24px; }
        .final-cta__inner h2 { margin-bottom: 20px; }
        .final-cta__inner .lede { margin: 0 auto 36px; }
        .final-cta__btn { padding: 14px 28px; font-size: 15px; }
        .final-cta__alt { margin: 16px 0 0; font-size: 13px; color: var(--cream-dim); }
        .final-cta__alt a { color: var(--gold); text-decoration: none; }
        .final-cta__alt a:hover { text-decoration: underline; }
        .trust-badges {
          list-style: none;
          margin: 36px 0 0;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px 14px;
        }
        .trust-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 15px;
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.04em;
          color: var(--cream-dim);
          background: var(--glass-bg);
          -webkit-backdrop-filter: var(--glass-filter);
          backdrop-filter: var(--glass-filter);
          border: 1px solid var(--glass-border);
          border-radius: var(--r-pill);
          box-shadow: var(--glass-elev-sm);
        }
        .trust-badge svg { color: var(--gold); flex-shrink: 0; }
      `}</style>
    </section>
  )
}
