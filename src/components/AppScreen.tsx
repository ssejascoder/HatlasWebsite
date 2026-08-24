import { Receipt, Boxes, Truck, LineChart, Users, IdCard, Search, Plus } from 'lucide-react'
import { useVertical } from '../lib/VerticalContext'

/**
 * AppScreen — the light Hatlas "Panel" mock shown inside the hero's scroll
 * reveal (ContainerScroll). Atlas DS: glass chrome, SOLID white data surfaces,
 * Sora numbers, Salvia green accents. Rubro-aware via useVertical.
 */

const RAIL = [
  { icon: Receipt, on: true },
  { icon: Boxes, on: false },
  { icon: Truck, on: false },
  { icon: LineChart, on: false },
  { icon: Users, on: false },
  { icon: IdCard, on: false },
]

const MOVES = [
  { doc: 'Factura #1042', who: 'Mostrador', amount: 'Bs 34', tone: 'ok' },
  { doc: 'Factura #1041', who: 'Carlos Mendoza', amount: 'Bs 128', tone: 'ok' },
  { doc: 'Ingreso stock', who: 'Cocina central', amount: '+320 u', tone: 'in' },
  { doc: 'Factura #1040', who: 'Mostrador', amount: 'Bs 52', tone: 'ok' },
]

export function AppScreen() {
  const { data } = useVertical()
  const kpis = [
    { l: 'Ventas de hoy', bs: true, v: data.cards.cobros.value, d: '18%', up: true },
    { l: 'Ingresos mes', bs: true, v: data.modules.finanzas.amount, d: '9%', up: true },
    { l: 'Ticket prom.', bs: true, v: '46', d: '3%', up: true },
    { l: 'Margen', bs: false, v: '36%', d: '8%', up: false },
  ]

  return (
    <div className="ascreen" aria-hidden="true">
      <div className="ascreen__top">
        <span className="ascreen__dots"><i /><i /><i /></span>
        <nav className="ascreen__tabs">
          <span className="is-active">Panel</span>
          <span>Ventas</span>
          <span>Almacén</span>
          <span>Clientes</span>
        </nav>
        <span className="ascreen__search"><Search size={13} strokeWidth={1.75} /> Buscar</span>
        <span className="ascreen__cta"><Plus size={13} strokeWidth={2.25} /> Nueva venta</span>
      </div>

      <div className="ascreen__body">
        <aside className="ascreen__rail">
          {RAIL.map(({ icon: Icon, on }, i) => (
            <span key={i} className={`ascreen__nav ${on ? 'is-on' : ''}`}>
              <Icon size={17} strokeWidth={1.6} />
            </span>
          ))}
        </aside>

        <main className="ascreen__main">
          <div className="ascreen__greet">
            <span>Buenas noches, <em>Sam</em></span>
            <span className="ascreen__meta"><i /> Sucursal Equipetrol · en vivo</span>
          </div>

          <div className="ascreen__kpis">
            {kpis.map((k) => (
              <div key={k.l} className="ascreen__kpi">
                <span className="ascreen__kpi-l">{k.l}</span>
                <span className="ascreen__kpi-v">
                  {k.bs && <span className="ascreen__bs">Bs </span>}{k.v}
                </span>
                <span className={`ascreen__delta ${k.up ? 'up' : 'down'}`}>
                  {k.up ? '↑' : '↓'} {k.d}
                </span>
              </div>
            ))}
          </div>

          <div className="ascreen__row">
            <div className="ascreen__panel ascreen__chart">
              <div className="ascreen__panel-head">
                <span>Ingresos vs costos</span>
                <span className="ascreen__legend"><i className="in" />Ingresos <i className="out" />Costos</span>
              </div>
              <svg viewBox="0 0 560 150" preserveAspectRatio="none" className="ascreen__svg">
                <defs>
                  <linearGradient id="as-fill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="color-mix(in srgb, var(--ac) 16%, transparent)" />
                    <stop offset="100%" stopColor="color-mix(in srgb, var(--ac) 0%, transparent)" />
                  </linearGradient>
                </defs>
                <path d="M0,120 L80,110 L160,116 L240,84 L320,92 L400,60 L480,50 L560,26 L560,150 L0,150 Z" fill="url(#as-fill)" />
                <path d="M0,120 L80,110 L160,116 L240,84 L320,92 L400,60 L480,50 L560,26" fill="none" stroke="var(--ac)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M0,134 L80,130 L160,132 L240,122 L320,126 L400,116 L480,118 L560,108" fill="none" stroke="var(--ink3)" strokeWidth="1.6" strokeDasharray="4 5" strokeLinecap="round" />
              </svg>
            </div>

            <div className="ascreen__panel ascreen__list">
              <div className="ascreen__panel-head"><span>Movimientos recientes</span></div>
              <ul>
                {MOVES.map((m) => (
                  <li key={m.doc}>
                    <span className="ascreen__mv-doc">{m.doc}</span>
                    <span className="ascreen__mv-who">{m.who}</span>
                    <span className={`ascreen__mv-amt ${m.tone}`}>{m.amount}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>

      <style>{`
        .ascreen {
          display: flex;
          flex-direction: column;
          height: 100%;
          font-family: var(--font-ui);
          background:
            radial-gradient(60% 50% at 82% 0%, color-mix(in srgb, var(--ac-light) 14%, transparent), transparent 70%),
            color-mix(in srgb, var(--surface) 92%, var(--bg));
          color: var(--ink);
        }
        .ascreen__top {
          display: flex; align-items: center; gap: 16px;
          padding: 12px 16px;
          border-bottom: 1px solid var(--hairline);
          background: rgba(255,255,255,0.7);
          -webkit-backdrop-filter: var(--glass-filter); backdrop-filter: var(--glass-filter);
        }
        .ascreen__dots { display: inline-flex; gap: 6px; }
        .ascreen__dots i { width: 9px; height: 9px; border-radius: 999px; background: color-mix(in srgb, var(--ink) 16%, transparent); }
        .ascreen__tabs { display: inline-flex; gap: 18px; font-size: 12.5px; color: var(--ink2); }
        .ascreen__tabs .is-active { color: var(--ac-deep); font-weight: 600; }
        .ascreen__search {
          margin-left: auto; display: inline-flex; align-items: center; gap: 6px;
          font-size: 12px; color: var(--ink3);
          padding: 6px 12px; border: 1px solid var(--hairline); border-radius: 999px; background: var(--surface);
        }
        .ascreen__cta {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 12.5px; font-weight: 600; color: #fff;
          padding: 7px 13px; border-radius: 10px; background: linear-gradient(135deg, var(--ac), var(--ac-deep));
          box-shadow: 0 6px 14px color-mix(in srgb, var(--ac) 40%, transparent);
        }
        .ascreen__body { flex: 1; display: flex; min-height: 0; }
        .ascreen__rail {
          display: flex; flex-direction: column; gap: 8px;
          padding: 16px 12px;
          border-right: 1px solid var(--hairline);
          background: var(--surface);
        }
        .ascreen__nav {
          display: inline-flex; align-items: center; justify-content: center;
          width: 38px; height: 38px; border-radius: 11px; color: var(--ink3);
        }
        .ascreen__nav.is-on { color: var(--ac); background: color-mix(in srgb, var(--ac) 10%, transparent); border: 1px solid color-mix(in srgb, var(--ac) 28%, transparent); }
        .ascreen__main { flex: 1; min-width: 0; padding: 20px 22px; display: flex; flex-direction: column; gap: 16px; overflow: hidden; }
        .ascreen__greet { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; flex-wrap: wrap; }
        .ascreen__greet > span:first-child { font-size: 15px; color: var(--ink2); }
        .ascreen__greet em { font-style: normal; font-weight: 600; color: var(--ink); }
        .ascreen__meta { display: inline-flex; align-items: center; gap: 7px; font-family: var(--font-display); font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink3); }
        .ascreen__meta i { width: 6px; height: 6px; border-radius: 999px; background: var(--ac); box-shadow: 0 0 0 3px color-mix(in srgb, var(--ac) 16%, transparent); }

        .ascreen__kpis { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
        .ascreen__kpi {
          display: flex; flex-direction: column; gap: 7px;
          padding: 14px; background: var(--surface); border: 1px solid var(--hairline);
          border-radius: 16px; box-shadow: 0 1px 2px color-mix(in srgb, var(--ink) 5%, transparent);
        }
        .ascreen__kpi-l { font-size: 12px; color: var(--ink2); }
        .ascreen__kpi-v { font-family: var(--font-display); font-weight: 700; font-size: 23px; letter-spacing: -0.03em; line-height: 1; color: var(--ink); }
        .ascreen__bs { font-size: 13px; font-weight: 600; color: var(--ink2); }
        .ascreen__delta { align-self: flex-start; font-family: var(--font-display); font-size: 10px; padding: 3px 7px; border-radius: 999px; }
        .ascreen__delta.up { color: var(--ok); background: color-mix(in srgb, var(--ok) 12%, transparent); }
        .ascreen__delta.down { color: var(--danger); background: color-mix(in srgb, var(--danger) 10%, transparent); }

        .ascreen__row { flex: 1; display: grid; grid-template-columns: 1.5fr 1fr; gap: 12px; min-height: 0; }
        .ascreen__panel { background: var(--surface); border: 1px solid var(--hairline); border-radius: 16px; box-shadow: 0 1px 2px color-mix(in srgb, var(--ink) 5%, transparent); padding: 16px; display: flex; flex-direction: column; min-height: 0; }
        .ascreen__panel-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; }
        .ascreen__panel-head > span:first-child { font-size: 13px; font-weight: 600; color: var(--ink); }
        .ascreen__legend { display: inline-flex; gap: 12px; font-family: var(--font-display); font-size: 10px; color: var(--ink3); }
        .ascreen__legend i { display: inline-block; width: 9px; height: 3px; border-radius: 2px; margin-right: 5px; vertical-align: middle; }
        .ascreen__legend i.in { background: var(--ac); }
        .ascreen__legend i.out { background: var(--ink3); }
        .ascreen__svg { width: 100%; flex: 1; min-height: 90px; }

        .ascreen__list ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; }
        .ascreen__list li { display: grid; grid-template-columns: 1fr auto; grid-auto-rows: auto; gap: 0 8px; padding: 9px 0; border-bottom: 1px solid color-mix(in srgb, var(--ink) 6%, transparent); font-size: 12px; }
        .ascreen__list li:last-child { border-bottom: none; }
        .ascreen__mv-doc { color: var(--ink); font-weight: 500; }
        .ascreen__mv-who { grid-column: 1; font-size: 11px; color: var(--ink3); }
        .ascreen__mv-amt { grid-column: 2; grid-row: 1 / span 2; align-self: center; font-family: var(--font-display); color: var(--ink); }
        .ascreen__mv-amt.in { color: var(--ac-deep); }

        @media (max-width: 900px) {
          .ascreen__rail { display: none; }
          .ascreen__main { padding: 16px; gap: 12px; }
          .ascreen__kpis { grid-template-columns: repeat(2, 1fr); }
          .ascreen__row { grid-template-columns: 1fr; }
          .ascreen__list { display: none; }
          .ascreen__search { display: none; }
          .ascreen__tabs { gap: 14px; }
        }
        @media (max-width: 560px) {
          /* Keep the top bar from overflowing the narrow card: drop the tab
             row, leave the window dots + primary action. */
          .ascreen__top { padding: 11px 14px; gap: 10px; }
          .ascreen__tabs { display: none; }
          .ascreen__cta { margin-left: auto; }
          .ascreen__main { padding: 14px; gap: 12px; }
          .ascreen__greet > span:first-child { font-size: 14px; }
          /* Compact KPIs so the chart still gets real height. */
          .ascreen__kpis { gap: 10px; }
          .ascreen__kpi { padding: 12px; gap: 5px; border-radius: 13px; }
          .ascreen__kpi-l { font-size: 11.5px; }
          .ascreen__kpi-v { font-size: 19px; }
          .ascreen__delta { font-size: 9.5px; padding: 2px 6px; }
          .ascreen__svg { min-height: 120px; }
          .ascreen__panel { padding: 14px; }
        }
      `}</style>
    </div>
  )
}
