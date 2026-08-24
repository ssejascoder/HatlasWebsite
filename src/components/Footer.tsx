import { useState, FormEvent } from 'react'
import { BrandLockup } from './BrandMark'

const LINKS = {
  Producto: [
    { href: '#sistema', label: 'Producto' },
    { href: '#analista', label: 'Hatlas Agent' },
    { href: '#pricing', label: 'Precios' },
  ],
  Empresa: [
    { href: '#', label: 'Quiénes somos' },
    { href: 'mailto:hola@hatlas.bo', label: 'Contacto' },
    { href: '#', label: 'Términos' },
    { href: '#', label: 'Privacidad' },
  ],
}

/**
 * Footer — Sprint 4.3.
 *
 * Removed the 🇧🇴 emoji from the byline. The Editorial register doesn't host
 * emoji flags well. Replaced with `La Paz` in monospace for the same regional
 * signal.
 *
 * Industrias column also removed — it linked to a section we cut in Sprint
 * 2.3. When `/industrias` ships, add it back.
 */
export function Footer() {
  const [email, setEmail] = useState('')
  const [ok, setOk] = useState(false)
  const submit = (e: FormEvent) => {
    e.preventDefault()
    if (email) setOk(true)
  }
  return (
    <footer className="footer">
      <div className="container-lg">
        <div className="footer__grid">
          <div className="footer__brand">
            <span className="footer__logo">
              <BrandLockup height={24} variant="negro" />
            </span>
            <p>El software de gestión para PYMEs bolivianas.</p>
            <p className="footer__news-hint">Una novedad por mes. Cosas que pasaron en Hatlas.</p>
            <form className="footer__news" onSubmit={submit}>
              {ok ? (
                <div className="footer__news-ok">
                  ✓ Listo. Te escribimos cuando haya algo nuevo. Nunca más de una vez al mes.
                </div>
              ) : (
                <>
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit">Recibir novedades</button>
                </>
              )}
            </form>
          </div>

          {Object.entries(LINKS).map(([col, items]) => (
            <div key={col} className="footer__col">
              <h4>{col}</h4>
              <ul>
                {items.map((i) => (
                  <li key={i.label}>
                    <a href={i.href}>{i.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <span>© 2026 Hatlas · Santa Cruz, Bolivia</span>
          <span className="footer__tag">Start Thinking.</span>
        </div>
      </div>

      <style>{`
        .footer {
          position: relative;
          z-index: 10;
          background: var(--bg);
          border-top: 1px solid color-mix(in srgb, var(--ink) 6%, transparent);
          padding: 64px 0 40px;
        }
        .footer__grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 48px;
        }
        .footer__brand p {
          margin: 12px 0 18px;
          max-width: 320px;
          font-size: 14px;
          line-height: 1.55;
          color: var(--ink2);
        }
        .footer__news-hint {
          margin-top: 0 !important;
          margin-bottom: 10px !important;
          font-family: var(--font-display);
          font-size: 11px;
          letter-spacing: 0.04em;
          color: var(--ink3) !important;
        }
        .footer__logo { display: inline-flex; align-items: center; }
        .footer__news {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          max-width: 360px;
        }
        .footer__news input {
          flex: 1;
          min-height: 44px;
          padding: 12px 14px;
          background: var(--surface);
          color: var(--ink);
          border: 1px solid color-mix(in srgb, var(--ink) 16%, transparent);
          border-radius: var(--r-sm);
          font-family: var(--font-ui);
          font-size: 14px;
          outline: none;
          transition: border-color 200ms var(--ease-out);
        }
        .footer__news input:focus { border-color: var(--ac-deep); }
        .footer__news input::placeholder { color: var(--ph); }
        .footer__news button {
          min-height: 44px;
          padding: 12px 18px;
          color: var(--ac);
          background: color-mix(in srgb, var(--ac) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--ac) 28%, transparent);
          border-radius: 8px;
          font-family: var(--font-ui);
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          white-space: nowrap;
          transition:
            background 200ms var(--ease-out),
            color 200ms var(--ease-out),
            transform 160ms var(--ease-out);
        }
        .footer__news button:hover { background: color-mix(in srgb, var(--ac) 18%, transparent); color: var(--ink); }
        .footer__news button:active { transform: scale(0.97); }
        .footer__news-ok {
          padding: 10px 0;
          color: var(--ok);
          font-size: 13px;
        }

        .footer__col h4 {
          margin: 0 0 16px;
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ac);
        }
        .footer__col ul { margin: 0; padding: 0; list-style: none; }
        .footer__col li { margin-bottom: 10px; }
        .footer__col a {
          font-family: var(--font-ui);
          font-size: 14px;
          color: var(--ink2);
          text-decoration: none;
          transition: color 200ms var(--ease-out);
        }
        .footer__col a:hover { color: var(--ink); }

        .footer__bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 32px;
          border-top: 1px solid color-mix(in srgb, var(--ink) 6%, transparent);
          font-family: var(--font-display);
          font-size: 12px;
          letter-spacing: 0.05em;
          color: var(--ink3);
        }
        .footer__tag {
          font-family: var(--font-display);
          font-style: normal;
          font-weight: 600;
          font-size: 13px;
          color: var(--ac);
          letter-spacing: -0.01em;
        }

        @media (max-width: 780px) {
          .footer__grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 480px) {
          .footer__grid { grid-template-columns: 1fr; }
          .footer__bottom { flex-direction: column; gap: 12px; align-items: flex-start; }
        }
      `}</style>
    </footer>
  )
}
