import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Receipt,
  Boxes,
  Truck,
  LineChart,
  Users,
  IdCard,
  ArrowUpRight,
} from 'lucide-react'
import { useGsap, gsap, ScrollTrigger } from '../lib/useGsap'
import {
  MkPOS,
  MkAlmacen,
  MkSupply,
  MkFinanzas,
  MkClientes,
  MkRRHH,
} from './ModuleMockups'

/**
 * Sistema (was "Modular") — Sprint 1.2.
 *
 * Why the rename: CLAUDE.md §1.1 + §10 anti-pattern #8 ban pitching "modular /
 * configurable / platform" — those words sound like *work* to the SMB owner.
 * The section now reads as "Hatlas trae todo. Tu negocio entiende." — capability
 * over architecture.
 *
 * Layout: same gapless 2+1+1 bento (4 cols × 2 rows). `grid-auto-flow: dense`
 * added defensively per gpt-taste — if a 7th module ever lands, the grid
 * survives.
 */

type Module = {
  icon: typeof Receipt
  name: string
  slug: string
  desc: string
  Mockup: () => JSX.Element
  span: 'large' | 'normal'
}

const MODULES: Module[] = [
  {
    icon: Receipt,
    name: 'Punto de Venta',
    slug: 'punto-de-venta',
    desc: 'Cobrá con QR, tarjeta o efectivo y facturá en línea, autorizado por Impuestos Nacionales.',
    Mockup: MkPOS,
    span: 'large',
  },
  {
    icon: Boxes,
    name: 'Almacén',
    slug: 'almacen',
    desc: 'Stock por sucursal y por producto. Aviso automático cuando se está acabando.',
    Mockup: MkAlmacen,
    span: 'normal',
  },
  {
    icon: Truck,
    name: 'Logística',
    slug: 'logistica',
    desc: 'Compras, traspasos y movimientos entre sucursales.',
    Mockup: MkSupply,
    span: 'normal',
  },
  {
    icon: LineChart,
    name: 'Finanzas',
    slug: 'finanzas',
    desc: 'Ingresos, egresos y costos en un solo tablero. Sin Excel.',
    Mockup: MkFinanzas,
    span: 'large',
  },
  {
    icon: Users,
    name: 'Clientes',
    slug: 'clientes',
    desc: 'Sabés quién compra qué, cuándo, y cuándo dejó de venir.',
    Mockup: MkClientes,
    span: 'normal',
  },
  {
    icon: IdCard,
    name: 'Personal',
    slug: 'personal',
    desc: 'Tu equipo, asistencia y planillas. Sin papeles.',
    Mockup: MkRRHH,
    span: 'normal',
  },
]

export function Sistema() {
  const ref = useGsap<HTMLElement>((scope) => {
    ScrollTrigger.batch(scope.querySelectorAll('.module-card'), {
      onEnter: (els) => {
        gsap.to(els, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.06,
          overwrite: true,
        })
      },
      start: 'top 85%',
      once: true,
    })
  })

  /** Spotlight hover halo follows the cursor (Sprint 3.4 polish). */
  const gridRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return
    const cards = grid.querySelectorAll<HTMLElement>('.module-card')
    const handlers: Array<() => void> = []
    cards.forEach((card) => {
      const onMove = (e: MouseEvent) => {
        const r = card.getBoundingClientRect()
        card.style.setProperty('--mx', `${e.clientX - r.left}px`)
        card.style.setProperty('--my', `${e.clientY - r.top}px`)
      }
      card.addEventListener('mousemove', onMove)
      handlers.push(() => card.removeEventListener('mousemove', onMove))
    })
    return () => handlers.forEach((h) => h())
  }, [])

  return (
    <section
      className="section-pad sistema"
      id="sistema"
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="sistema-title"
    >
      <div className="container-lg">
        <header className="sistema__header">
          <span className="eyebrow">Adiós al Excel y los cuadernos</span>
          <h2 id="sistema-title" className="h-section">
            Todo tu negocio en un solo sistema,{' '}
            <em>de la caja a la planilla.</em>
          </h2>
          <p className="lede" style={{ marginInline: 'auto' }}>
            Punto de venta, stock, finanzas, clientes y personal: lo que antes estaba en Excel,
            WhatsApp y cuadernos ahora está junto y conectado. Vendés en caja y el stock y las
            cuentas se actualizan solos.
          </p>
        </header>

        <div className="bento" ref={gridRef}>
          {MODULES.map(({ icon: Icon, name, slug, desc, Mockup, span }) => (
            <Link
              key={name}
              to={`/modulos/${slug}`}
              className={`module-card module-card--${span}`}
              aria-label={`${name}: ver más`}
            >
              <div className="module-card__thumb">
                <Mockup />
              </div>
              <div className="module-card__text">
                <span className="module-card__icon">
                  <Icon size={18} strokeWidth={1.5} />
                </span>
                <h3>
                  {name}
                  <ArrowUpRight className="module-card__arrow" size={16} strokeWidth={1.75} />
                </h3>
                <p>{desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .sistema {
          position: relative;
          z-index: 10;
          background: var(--bg-subtle);
        }
        .sistema__header {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 64px;
        }
        .sistema__header .eyebrow {
          display: inline-block;
          margin-bottom: 20px;
        }
        .sistema__header h2 { margin-bottom: 20px; }

        .bento {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: minmax(280px, auto);
          grid-auto-flow: dense; /* gpt-taste defensive */
          gap: 12px;
        }
        /* Liquid Glass card */
        .module-card {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding: 20px;
          background: var(--glass-bg);
          -webkit-backdrop-filter: var(--glass-filter);
          backdrop-filter: var(--glass-filter);
          border: 1px solid var(--glass-border);
          border-radius: var(--r-card);
          box-shadow: var(--glass-elev-sm);
          overflow: hidden;
          opacity: 0;
          transform: translateY(40px);
          transition:
            border-color 300ms var(--ease-out-strong),
            box-shadow 300ms var(--ease-out-strong),
            transform 300ms var(--ease-out-strong);
        }
        .module-card:hover {
          border-color: color-mix(in srgb, var(--ac) 45%, transparent);
          transform: translateY(-3px);
          box-shadow: 0 1px 2px color-mix(in srgb, var(--ink) 5%, transparent), 0 22px 50px var(--glass-shadow), inset 0 1px 0 var(--glass-hi);
        }
        .module-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), color-mix(in srgb, var(--ac) 10%, transparent), transparent 40%);
          opacity: 0;
          pointer-events: none;
          transition: opacity 300ms var(--ease-out-strong);
          z-index: 0;
        }
        .module-card:hover::before { opacity: 1; }
        .module-card > * { position: relative; z-index: 1; }

        .module-card--large { grid-column: span 2; }
        .module-card--normal { grid-column: span 1; }

        .module-card__thumb {
          flex: 1;
          min-height: 130px;
          border-radius: var(--r-lg);
          border: 1px solid var(--border);
          background: #FFFFFF;
          box-shadow: 0 1px 2px color-mix(in srgb, var(--ink) 5%, transparent);
          overflow: hidden;
        }
        .module-card__text { display: flex; flex-direction: column; gap: 6px; }
        /* Restrained icon: subtle neutral square + soft border + gold stroke.
           Same treatment as .insight-card__icon (system-wide consistency). */
        .module-card__icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          margin-bottom: 4px;
          background: var(--gold-tint-12);
          border: 1px solid var(--gold-glow);
          border-radius: var(--r-sm);
          color: var(--gold);
        }
        .module-card { text-decoration: none; color: inherit; }
        .module-card h3 {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          font-family: var(--font-display);
          margin: 0;
          font-size: 18px;
          font-weight: 600;
          letter-spacing: -0.02em;
          color: var(--cream);
        }
        .module-card__arrow {
          flex-shrink: 0;
          color: var(--cream-meta);
          opacity: 0;
          transform: translate(-4px, 4px);
          transition:
            opacity 300ms var(--ease-out-strong),
            transform 300ms var(--ease-out-strong),
            color 300ms var(--ease-out-strong);
        }
        .module-card:hover .module-card__arrow { opacity: 1; transform: translate(0, 0); color: var(--gold); }
        .module-card p {
          margin: 0;
          font-size: 13px;
          line-height: 1.45;
          color: var(--cream-dim);
        }

        @media (max-width: 980px) {
          .bento { grid-template-columns: repeat(2, 1fr); }
          .module-card--large, .module-card--normal { grid-column: span 1; }
        }
        @media (max-width: 560px) {
          .bento { grid-template-columns: 1fr; grid-auto-rows: minmax(260px, auto); }
        }
        /* Cards are hidden via CSS and revealed by GSAP. Under reduced motion the
           GSAP setup is skipped, so show them at rest here. */
        @media (prefers-reduced-motion: reduce) {
          .module-card { opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  )
}
