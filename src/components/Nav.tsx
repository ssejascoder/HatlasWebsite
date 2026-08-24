import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { MODULES } from '../lib/modules'
import { BrandLockup } from './BrandMark'

/** Section links live on the landing; "/#id" works from any route (browser
 *  scrolls to the anchor, full-load only when coming from a module page). */
const SECTION_LINKS = [{ href: '/#pricing', label: 'Precios' }]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [prodOpen, setProdOpen] = useState(false)
  const prodRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Producto dropdown: close on outside click + Escape.
  useEffect(() => {
    if (!prodOpen) return
    const onDown = (e: MouseEvent) => {
      if (prodRef.current && !prodRef.current.contains(e.target as Node)) setProdOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setProdOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [prodOpen])

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`} aria-label="Navegación principal">
        <div className="nav__inner">
          <Link to="/" className="logo" aria-label="Hatlas, ir al inicio">
            <BrandLockup height={26} variant="rounded" />
          </Link>
          <div className="nav__links">
            <div className="nav__prod" ref={prodRef}>
              <button
                type="button"
                className={`nav__prod-trigger ${prodOpen ? 'is-open' : ''}`}
                aria-haspopup="true"
                aria-expanded={prodOpen}
                onClick={() => setProdOpen((v) => !v)}
              >
                Producto
                <ChevronDown size={15} strokeWidth={1.75} className="nav__prod-chev" />
              </button>
              <div className={`pmenu ${prodOpen ? 'is-open' : ''}`} role="menu">
                {MODULES.map((m) => {
                  const Icon = m.icon
                  return (
                    <Link
                      key={m.slug}
                      to={`/modulos/${m.slug}`}
                      className="pmenu__item"
                      role="menuitem"
                      onClick={() => setProdOpen(false)}
                    >
                      <span className="pmenu__icon">
                        <Icon size={16} strokeWidth={1.5} />
                      </span>
                      <span className="pmenu__text">
                        <span className="pmenu__name">{m.name}</span>
                        <span className="pmenu__tag">{m.tagline}</span>
                      </span>
                    </Link>
                  )
                })}
                <Link
                  to="/modulos"
                  className="pmenu__all"
                  role="menuitem"
                  onClick={() => setProdOpen(false)}
                >
                  Ver todos los módulos
                  <ChevronDown size={13} strokeWidth={2} style={{ transform: 'rotate(-90deg)' }} />
                </Link>
              </div>
            </div>
            <Link to="/hatlas-agent">Hatlas Agent</Link>
            {SECTION_LINKS.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </div>
          <div className="nav__actions">
            <a href="#cta-final" className="btn-gold">Agendar demo</a>
            <button
              type="button"
              className="nav__hamburger"
              aria-label="Abrir menú"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </nav>

      <div className={`drawer ${open ? 'drawer--open' : ''}`} aria-hidden={!open}>
        <button
          type="button"
          className="drawer__close"
          aria-label="Cerrar menú"
          onClick={() => setOpen(false)}
        >
          <X size={18} />
        </button>
        <nav className="drawer__inner" aria-label="Navegación móvil">
          <span className="drawer__label">Producto</span>
          {MODULES.map((m) => (
            <Link
              key={m.slug}
              to={`/modulos/${m.slug}`}
              className="drawer__sub"
              onClick={() => setOpen(false)}
            >
              {m.name}
            </Link>
          ))}
          <Link to="/hatlas-agent" onClick={() => setOpen(false)}>
            Hatlas Agent
          </Link>
          {SECTION_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="#cta-final"
            className="btn-gold"
            onClick={() => setOpen(false)}
            style={{ marginTop: 8 }}
          >
            Agendar demo
          </a>
        </nav>
      </div>

      <style>{`
        .nav {
          position: fixed;
          inset: 0 0 auto 0;
          z-index: 100;
          border-bottom: 1px solid transparent;
          transition: background 300ms var(--ease-out-strong), border-color 300ms var(--ease-out-strong), backdrop-filter 300ms var(--ease-out-strong);
        }
        .nav--scrolled {
          background: var(--glass);
          -webkit-backdrop-filter: var(--glass-filter);
          backdrop-filter: var(--glass-filter);
          border-bottom-color: var(--hairline);
          box-shadow: inset 0 1px 0 var(--glass-hi), var(--e1);
        }
        .nav__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1280px;
          margin: 0 auto;
          padding: 18px 32px;
        }
        .nav__links { display: flex; align-items: center; gap: 32px; }
        .nav__links > a {
          color: var(--cream-dim);
          font-size: 14px;
          text-decoration: none;
          transition: color 200ms var(--ease-out-strong);
        }
        .nav__links > a:hover { color: var(--cream); }
        .nav__actions { display: flex; align-items: center; gap: 12px; }

        /* ---------- Producto dropdown (transitions-dev menu-dropdown 05) ---------- */
        .nav__prod { position: relative; }
        .nav__prod-trigger {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          appearance: none;
          border: none;
          background: transparent;
          padding: 0;
          font-family: var(--font-sans);
          font-size: 14px;
          color: var(--cream-dim);
          cursor: pointer;
          transition: color 200ms var(--ease-out-strong);
        }
        .nav__prod-trigger:hover,
        .nav__prod-trigger.is-open { color: var(--cream); }
        .nav__prod-chev { transition: transform 200ms var(--ease-out-strong); }
        .nav__prod-trigger.is-open .nav__prod-chev { transform: rotate(180deg); }

        /* Plano SÓLIDO: un menú se LEE y tiene que ocluir lo de atrás
           (regla de dos planos del DS). Elevación --e3, sin backdrop-filter. */
        .pmenu {
          position: absolute;
          top: calc(100% + 14px);
          left: -16px;
          width: 300px;
          padding: 8px;
          background: var(--surface);
          border: 1px solid var(--hairline);
          border-radius: var(--r-lg);
          box-shadow: var(--e3);
          display: flex;
          flex-direction: column;
          gap: 2px;
          transform-origin: top left;
          opacity: 0;
          transform: scale(0.97) translateY(-6px);
          pointer-events: none;
          transition: opacity 150ms var(--ease-out-strong), transform 150ms var(--ease-out-strong);
          z-index: 10;
        }
        .pmenu.is-open {
          opacity: 1;
          transform: scale(1) translateY(0);
          pointer-events: auto;
          transition: opacity 220ms cubic-bezier(0.22, 1, 0.36, 1), transform 220ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .pmenu__item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          border-radius: 10px;
          text-decoration: none;
          transition: background 160ms var(--ease-out-strong);
        }
        .pmenu__item:hover { background: color-mix(in srgb, var(--ink) 5%, transparent); }
        .pmenu__icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          flex-shrink: 0;
          background: var(--gold-tint-12);
          border: 1px solid var(--gold-glow);
          border-radius: 9px;
          color: var(--gold);
        }
        .pmenu__text { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
        .pmenu__all {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 4px;
          padding: 11px 12px;
          border-top: 1px solid var(--border-soft);
          border-radius: 0 0 10px 10px;
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--cream-meta);
          text-decoration: none;
          transition: color 160ms var(--ease-out-strong), background 160ms var(--ease-out-strong);
        }
        .pmenu__all:hover { color: var(--gold); background: rgba(23, 22, 27, 0.04); }
        .pmenu__name { font-size: 14px; font-weight: 600; color: var(--cream); }
        .pmenu__tag {
          font-size: 12px;
          color: var(--cream-dim);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .nav__hamburger {
          display: none;
          width: 44px; height: 44px;
          background: var(--glass-bg);
          -webkit-backdrop-filter: var(--glass-filter);
          backdrop-filter: var(--glass-filter);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          color: var(--cream);
          cursor: pointer;
          align-items: center; justify-content: center;
          box-shadow: var(--glass-elev-sm);
          transition: background 200ms var(--ease-out-strong);
        }
        .nav__hamburger:hover { background: var(--glass-bg-strong); }
        .nav__hamburger:active { transform: scale(0.97); }

        .logo {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--cream);
          text-decoration: none;
        }
        .logo:active { transform: scale(0.98); }

        .drawer {
          position: fixed; inset: 0;
          z-index: 200;
          background: color-mix(in srgb, var(--ink) 34%, transparent);
          -webkit-backdrop-filter: var(--backdrop-filter);
          backdrop-filter: var(--backdrop-filter);
          opacity: 0;
          pointer-events: none;
          transition: opacity 300ms var(--ease-out-strong);
        }
        .drawer--open {
          opacity: 1;
          pointer-events: auto;
        }
        .drawer__inner {
          position: absolute;
          top: 0; bottom: 0; right: 0;
          width: min(360px, 80vw);
          padding: 96px 32px 32px;
          background: var(--glass-bg-strong);
          -webkit-backdrop-filter: var(--glass-filter);
          backdrop-filter: var(--glass-filter);
          border-left: 1px solid var(--glass-border);
          box-shadow: -30px 0 80px rgba(23, 22, 27, 0.2);
          display: flex;
          flex-direction: column;
          gap: 2px;
          overflow-y: auto;
          transform: translateX(100%);
          transition: transform 400ms var(--ease-drawer);
        }
        .drawer--open .drawer__inner { transform: translateX(0); }
        .drawer__label {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--cream-meta);
          padding: 6px 0;
        }
        .drawer__sub {
          padding: 11px 0 11px 14px;
          font-size: 17px;
          color: var(--cream-dim);
          border-bottom: 1px solid var(--border-soft);
          text-decoration: none;
        }
        .drawer__sub:hover { color: var(--gold); }
        .drawer__inner > a:not(.drawer__sub) {
          padding: 14px 0;
          font-size: 22px;
          color: var(--cream);
          border-bottom: 1px solid var(--border-soft);
          text-decoration: none;
          letter-spacing: -0.01em;
        }
        .drawer__inner > a:not(.drawer__sub):hover { color: var(--gold); }
        .drawer__close {
          position: absolute;
          top: 18px; right: 24px;
          width: 44px; height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: 1px solid var(--border-soft);
          border-radius: 10px;
          color: var(--cream);
          cursor: pointer;
          z-index: 1;
          transition: background 200ms var(--ease-out-strong), transform 160ms var(--ease-out-strong);
        }
        .drawer__close:hover { background: var(--bg-elevated); }
        .drawer__close:active { transform: scale(0.97); }

        @media (max-width: 980px) {
          .nav__links { display: none; }
          .nav__hamburger { display: inline-flex; }
        }
        @media (max-width: 600px) {
          .nav__actions .btn-gold { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .pmenu { transition: opacity 120ms linear !important; transform: none !important; }
          .pmenu.is-open { transform: none !important; }
          .drawer, .drawer__inner { transition: opacity 120ms linear !important; }
          .drawer__inner { transform: none !important; }
        }
      `}</style>
    </>
  )
}
