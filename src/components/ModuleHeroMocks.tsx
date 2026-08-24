import { useVertical } from '../lib/VerticalContext'
import { PopNumber } from './PopNumber'
import type { ModuleExampleKey } from '../lib/modules'

/**
 * ModuleHeroMocks — rich, rubro-aware product mockups for the module-page hero
 * (and the "Así se ve en tu rubro" section). Modeled on the real Hatlas product
 * views (POS ticket, Stock por producto, Balance del mes, CRM Clientes,
 * Planilla), so the marketing graphic looks like the actual app instead of a
 * thin placeholder.
 *
 * Each mock reads the active rubro from verticals.tsx (data.modules.*) so it
 * reskins with the toggle. Illustrative chrome (KPI strips, period chips) uses
 * representative values; the core list/table/total stays rubro-driven.
 *
 * Pure CSS + inline SVG. Style language matches the site (carbon surfaces,
 * Fraunces italic numerals, mono caps labels, gold accent) and the product.
 */

function Eyebrow({ label, live = true }: { label: string; live?: boolean }) {
  return (
    <div className="hm__top">
      <span className="hm__eyebrow">{label}</span>
      {live && (
        <span className="hm__live">
          <span /> en vivo
        </span>
      )}
    </div>
  )
}

/* ───────────────────────── Punto de Venta ───────────────────────── */
function HmPOS() {
  const m = useVertical().data.modules.pos
  return (
    <div className="hm">
      <Eyebrow label={m.title} />
      <div className="hm__ticket">
        {m.lines.map((l) => (
          <div key={l.label} className="hm__line">
            <span className="hm__line-name">
              <span className="hm__dot" />
              {l.label}
            </span>
            <span className="hm__line-amt">{l.amount}</span>
          </div>
        ))}
      </div>
      <div className="hm__total">
        <span className="hm__total-l">Total</span>
        <span className="hm__total-v">
          Bs <em>{m.total}</em>
        </span>
      </div>
      <div className="hm__status">
        <span className="hm__sc" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path
              d="M5 12.5l4 4 9.5-10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        Factura en línea emitida
      </div>
      <div className="hm__chips">
        <span className="hm__chip">QR</span>
        <span className="hm__chip">Tarjeta</span>
        <span className="hm__chip">Efectivo</span>
        <span className="hm__chip hm__chip--gold">Libro de Ventas ✓</span>
      </div>
    </div>
  )
}

/* ───────────────────────────── Almacén ──────────────────────────── */
function HmAlmacen() {
  const m = useVertical().data.modules.almacen
  const low = m.items.filter((it) => it.stock < 10).length
  const units = m.items.reduce((s, it) => s + it.stock, 0)
  return (
    <div className="hm">
      <Eyebrow label={m.title} live={false} />
      <div className="hm__kpis">
        <div className="hm__kpi">
          <div className="hm__kpi-l">Filas</div>
          <div className="hm__kpi-v">{m.items.length}</div>
        </div>
        <div className="hm__kpi">
          <div className="hm__kpi-l">Unidades</div>
          <div className="hm__kpi-v">{units}</div>
        </div>
        <div className="hm__kpi hm__kpi--gold">
          <div className="hm__kpi-l">Reponer</div>
          <div className="hm__kpi-v">
            <PopNumber value={String(low)} />
          </div>
        </div>
      </div>
      <table className="hm__table">
        <thead>
          <tr>
            <th>Producto</th>
            <th className="hm__num">Stock</th>
            <th className="hm__right">Estado</th>
          </tr>
        </thead>
        <tbody>
          {m.items.map((it) => {
            const lowItem = it.stock < 10
            return (
              <tr key={it.sku}>
                <td className="hm__sku">{it.sku}</td>
                <td className={`hm__num ${lowItem ? 'hm__num--low' : ''}`}>{it.stock}</td>
                <td className="hm__right">
                  <span className={`hm__pill ${lowItem ? 'hm__pill--low' : 'hm__pill--ok'}`}>
                    {lowItem ? 'Bajo' : 'OK'}
                  </span>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

/* ──────────────────────────── Logística ─────────────────────────── */
function HmLogistica() {
  const m = useVertical().data.modules.logistica
  return (
    <div className="hm">
      <Eyebrow label={m.title} live={false} />
      <div className="hm__route">
        <span className="hm__route-node">{m.from}</span>
        <span className="hm__route-arrow" aria-hidden="true">
          →
        </span>
        <span className="hm__route-node hm__route-node--to">{m.to}</span>
      </div>
      <div className="hm__chips">
        {m.chips.map((c, i) => (
          <span
            key={c}
            className={`hm__chip ${
              i === m.chips.length - 1 ? 'hm__chip--ok hm__chip--shimmer' : ''
            }`}
          >
            {c}
          </span>
        ))}
      </div>
      <div className="hm__movs">
        <div className="hm__mov">
          <span className="hm__mov-l">
            <span className="hm__dot" />
            Traspaso entre sucursales
          </span>
          <span className="hm__pill hm__pill--ok">en camino</span>
        </div>
        <div className="hm__mov">
          <span className="hm__mov-l">
            <span className="hm__dot hm__dot--muted" />
            Orden de compra a proveedor
          </span>
          <span className="hm__pill hm__pill--done">recibido</span>
        </div>
      </div>
    </div>
  )
}

/* ──────────────────────────── Finanzas ──────────────────────────── */
function HmFinanzas() {
  const m = useVertical().data.modules.finanzas
  return (
    <div className="hm">
      <div className="hm__top">
        <span className="hm__eyebrow">{m.title}</span>
        <span className="hm__period">30 días</span>
      </div>
      <div className="hm__big">
        Bs <em><PopNumber value={m.amount} /></em>
      </div>
      <div className="hm__delta">{m.delta}</div>
      <svg className="hm__chart" viewBox="0 0 320 90" preserveAspectRatio="none">
        <defs>
          <linearGradient id="hm-fin" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="color-mix(in srgb, var(--ac) 28%, transparent)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <path
          d="M0,74 L46,68 L92,58 L138,62 L184,42 L230,36 L276,22 L320,12"
          fill="none"
          stroke="var(--ac)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0,74 L46,68 L92,58 L138,62 L184,42 L230,36 L276,22 L320,12 L320,90 L0,90 Z"
          fill="url(#hm-fin)"
        />
      </svg>
      <div className="hm__chips">
        <span className="hm__chip hm__chip--ok">Ingresos</span>
        <span className="hm__chip">Egresos</span>
        <span className="hm__chip hm__chip--gold">Margen</span>
      </div>
    </div>
  )
}

/* ──────────────────────────── Clientes ──────────────────────────── */
const CLIENT_AMOUNTS = ['Bs 1.240', 'Bs 860', 'Bs 540']
function HmClientes() {
  const m = useVertical().data.modules.clientes
  return (
    <div className="hm">
      <Eyebrow label={m.title} live={false} />
      <div className="hm__kpis">
        <div className="hm__kpi">
          <div className="hm__kpi-l">Clientes</div>
          <div className="hm__kpi-v">104</div>
        </div>
        <div className="hm__kpi">
          <div className="hm__kpi-l">Recurrentes</div>
          <div className="hm__kpi-v">38</div>
        </div>
        <div className="hm__kpi hm__kpi--gold">
          <div className="hm__kpi-l">En riesgo</div>
          <div className="hm__kpi-v">
            <PopNumber value="5" />
          </div>
        </div>
      </div>
      <div className="hm__list">
        {m.rows.map((r, i) => (
          <div key={r.name} className="hm__client">
            <span className="hm__avatar">{r.name.charAt(0)}</span>
            <span className="hm__client-text">
              <span className="hm__client-name">{r.name}</span>
              <span className="hm__client-sub">{r.visits}</span>
            </span>
            <span className="hm__client-amt">{CLIENT_AMOUNTS[i] ?? 'Bs 320'}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ──────────────────────────── Personal ──────────────────────────── */
const TEAM = ['M', 'C', 'R', 'A']
function HmPersonal() {
  const m = useVertical().data.modules.personal
  return (
    <div className="hm">
      <Eyebrow label={m.title} live={false} />
      <div className="hm__statgrid">
        {m.stats.map((s) => (
          <div key={s.label} className="hm__stat">
            <div className="hm__stat-num">{s.num}</div>
            <div className="hm__stat-l">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="hm__team">
        <div className="hm__avatars">
          {TEAM.map((t, i) => (
            <span key={i} className="hm__avatar hm__avatar--sm">
              {t}
            </span>
          ))}
        </div>
        <span className="hm__team-note">
          <span className="hm__sc" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="16" height="16">
              <path
                d="M5 12.5l4 4 9.5-10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          Planilla del mes al día
        </span>
      </div>
    </div>
  )
}

const MOCKS: Record<ModuleExampleKey, () => JSX.Element> = {
  pos: HmPOS,
  almacen: HmAlmacen,
  logistica: HmLogistica,
  finanzas: HmFinanzas,
  clientes: HmClientes,
  personal: HmPersonal,
}

export function HeroMock({ exampleKey }: { exampleKey: ModuleExampleKey }) {
  const { vertical } = useVertical()
  const Mock = MOCKS[exampleKey]
  return (
    <div key={vertical} className="hm-fade">
      <Mock />
      <style>{`
        .hm {
          display: flex;
          flex-direction: column;
          gap: 14px;
          height: 100%;
          padding: 18px;
          font-family: var(--font-ui);
        }
        .hm__top { display: flex; align-items: center; justify-content: space-between; }
        .hm__eyebrow {
          font-family: var(--font-display);
          font-size: 9px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--ink3);
        }
        .hm__live, .hm__period {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-display);
          font-size: 9px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--ink3);
        }
        .hm__period {
          padding: 3px 8px;
          border: 1px solid color-mix(in srgb, var(--ink) 6%, transparent);
          border-radius: 999px;
        }
        .hm__live span {
          width: 6px; height: 6px; border-radius: 999px;
          background: var(--ok);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--ok) 14%, transparent);
        }
        .hm__dot {
          display: inline-block;
          width: 6px; height: 6px; border-radius: 999px;
          background: var(--ac);
          margin-right: 9px;
          vertical-align: middle;
        }
        .hm__dot--muted { background: var(--ph); }

        /* KPI strip */
        .hm__kpis { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
        .hm__kpi {
          padding: 11px 12px;
          border: 1px solid color-mix(in srgb, var(--ink) 6%, transparent);
          border-radius: 11px;
          background: color-mix(in srgb, var(--ac) 6%, transparent);
        }
        .hm__kpi--gold { border-color: color-mix(in srgb, var(--ac) 40%, transparent); background: color-mix(in srgb, var(--ac) 10%, transparent); }
        .hm__kpi-l {
          font-family: var(--font-display);
          font-size: 8px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--ink3);
          margin-bottom: 5px;
        }
        .hm__kpi-v {
          font-family: var(--font-display);
          font-style: normal;
          font-weight: 700;
          letter-spacing: -0.03em;
          font-size: 22px;
          line-height: 1;
          color: var(--ink);
        }
        .hm__kpi--gold .hm__kpi-v { color: var(--ac-hover); }

        /* POS ticket */
        .hm__ticket { display: flex; flex-direction: column; gap: 2px; }
        .hm__line {
          display: flex; align-items: center; justify-content: space-between;
          gap: 12px;
          padding: 9px 0;
          border-bottom: 1px solid color-mix(in srgb, var(--ink) 6%, transparent);
          font-size: 13px;
          color: var(--ink2);
        }
        .hm__line-name { display: inline-flex; align-items: center; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .hm__line-amt { flex-shrink: 0; font-family: var(--font-display); color: var(--ink); }
        .hm__total {
          display: flex; align-items: baseline; justify-content: space-between;
          margin-top: 2px;
        }
        .hm__total-l {
          font-family: var(--font-display);
          font-size: 9px; letter-spacing: 0.16em; text-transform: uppercase;
          color: var(--ink3);
        }
        .hm__total-v { font-family: var(--font-display); font-style: normal; font-weight: 700; font-size: 30px; color: var(--ink); }
        .hm__total-v em { color: var(--ac-on); font-weight: 500; }
        .hm__status {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 12px; color: var(--ok);
          padding: 3px 9px; border-radius: 999px; background: var(--surface);
        }
        .hm__check {
          display: inline-flex; align-items: center; justify-content: center;
          width: 16px; height: 16px; border-radius: 999px;
          background: color-mix(in srgb, var(--ok) 16%, transparent);
          font-size: 10px;
        }
        /* transitions-dev · success-check (10) — POS "factura emitida" moment.
           Pops + draws after the card crossfade settles; replays on rubro
           toggle (the whole mock remounts via .hm-fade key). */
        .hm__sc {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 18px; height: 18px;
          border-radius: 999px;
          background: color-mix(in srgb, var(--ok) 16%, transparent);
          color: var(--ok);
          animation: hm-sc-pop 460ms cubic-bezier(0.34, 1.35, 0.64, 1) 240ms both;
        }
        .hm__sc path {
          stroke-dasharray: 20;
          stroke-dashoffset: 20;
          animation: hm-sc-draw 520ms var(--ease-out) 340ms both;
        }
        @keyframes hm-sc-pop {
          0% { transform: scale(0.3); opacity: 0; }
          60% { transform: scale(1.12); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes hm-sc-draw { to { stroke-dashoffset: 0; } }
        @media (prefers-reduced-motion: reduce) {
          .hm__sc { animation: none; }
          .hm__sc path { animation: none; stroke-dashoffset: 0; }
        }

        /* chips */
        .hm__chips { display: flex; flex-wrap: wrap; gap: 6px; margin-top: auto; }
        .hm__chip {
          font-family: var(--font-display);
          font-size: 10px;
          padding: 4px 9px;
          border: 1px solid color-mix(in srgb, var(--ink) 6%, transparent);
          border-radius: 999px;
          color: var(--ink2);
          background: var(--surface);
        }
        .hm__chip--ok { color: var(--ok); border-color: color-mix(in srgb, var(--ok) 30%, transparent); }
        .hm__chip--gold { color: var(--ac-on); border-color: color-mix(in srgb, var(--ac) 40%, transparent); }
        /* transitions-dev · shimmer-text (15) — "en camino" = in transit */
        .hm__chip--shimmer {
          color: var(--ok);
          animation: hm-shimmer 2.6s linear infinite;
        }
        @keyframes hm-shimmer {
          0%, 100% { opacity: 1; }
          50% { opacity: .62; }
        }

        /* transitions-dev · number-pop-in (02) inside the mock — delayed so it
           punctuates AFTER the card crossfade settles (scoped to .hm so the
           home-hero PopNumber keeps its no-delay timing). */
        .hm .t-digit-group.is-animating .t-digit { animation-delay: 240ms; }
        .hm .t-digit-group.is-animating .t-digit[data-stagger='1'] { animation-delay: 310ms; }
        .hm .t-digit-group.is-animating .t-digit[data-stagger='2'] { animation-delay: 380ms; }

        @media (prefers-reduced-motion: reduce) {
          .hm__chip--shimmer {
            animation: none;
            color: var(--ok);
          }
        }

        /* table (Almacén) */
        .hm__table { width: 100%; border-collapse: collapse; }
        .hm__table th {
          font-family: var(--font-display);
          font-size: 8px; letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--ink3);
          text-align: left; font-weight: 400;
          padding: 0 0 8px;
          border-bottom: 1px solid color-mix(in srgb, var(--ink) 6%, transparent);
        }
        .hm__table td {
          font-size: 12px; color: var(--ink2);
          padding: 9px 0;
          border-bottom: 1px solid color-mix(in srgb, var(--ink) 6%, transparent);
        }
        .hm__table tr:last-child td { border-bottom: none; }
        .hm__sku { font-family: var(--font-display); }
        .hm__num { font-family: var(--font-display); color: var(--ink); text-align: right; }
        .hm__num--low { color: var(--danger); }
        .hm__right { text-align: right; }
        .hm__pill {
          font-family: var(--font-display);
          font-size: 9px; padding: 2px 8px; border-radius: 999px;
          border: 1px solid color-mix(in srgb, var(--ink) 6%, transparent); color: var(--ink2);
          background: var(--surface);
        }
        .hm__pill--ok { color: var(--ok); border-color: color-mix(in srgb, var(--ok) 30%, transparent); }
        .hm__pill--low { color: var(--danger); border-color: color-mix(in srgb, var(--danger) 35%, transparent); }
        .hm__pill--done { color: var(--ink3); }

        /* route (Logística) */
        .hm__route {
          display: flex; align-items: center; gap: 12px;
          font-size: 15px; color: var(--ink);
          padding: 4px 0;
        }
        .hm__route-arrow { color: var(--ac-on); font-family: var(--font-display); }
        .hm__route-node--to { color: var(--ink); }
        .hm__movs { display: flex; flex-direction: column; gap: 8px; margin-top: 2px; }
        .hm__mov {
          display: flex; align-items: center; justify-content: space-between; gap: 12px;
          padding: 11px 12px;
          border: 1px solid color-mix(in srgb, var(--ink) 6%, transparent);
          border-radius: 11px;
          background: color-mix(in srgb, var(--ac) 6%, transparent);
          font-size: 12px; color: var(--ink2);
        }
        .hm__mov-l { display: inline-flex; align-items: center; }

        /* Finanzas */
        .hm__big { font-family: var(--font-display); font-style: normal; font-weight: 700; font-size: 38px; line-height: 1; color: var(--ink); }
        .hm__big em { color: var(--ac-on); }
        .hm__delta {
          font-family: var(--font-display); font-size: 10px; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--ok);
          margin-top: -4px;
          padding: 2px 7px; border-radius: 999px; align-self: flex-start;
          background: var(--surface);
        }
        .hm__chart { width: 100%; flex: 1; min-height: 80px; }

        /* Clientes */
        .hm__list { display: flex; flex-direction: column; gap: 2px; }
        .hm__client {
          display: flex; align-items: center; gap: 11px;
          padding: 9px 0;
          border-bottom: 1px solid color-mix(in srgb, var(--ink) 6%, transparent);
        }
        .hm__client:last-child { border-bottom: none; }
        .hm__avatar {
          display: inline-flex; align-items: center; justify-content: center;
          width: 30px; height: 30px; flex-shrink: 0;
          border-radius: 999px;
          background: color-mix(in srgb, var(--ac) 12%, transparent);
          border: 1px solid color-mix(in srgb, var(--ac) 30%, transparent);
          color: var(--ac-on);
          font-family: var(--font-display); font-style: normal; font-weight: 700; font-size: 13px;
        }
        .hm__avatar--sm { width: 26px; height: 26px; font-size: 11px; }
        .hm__client-text { display: flex; flex-direction: column; gap: 1px; min-width: 0; flex: 1; }
        .hm__client-name { font-size: 13px; color: var(--ink); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .hm__client-sub { font-family: var(--font-display); font-size: 10px; color: var(--ink3); }
        .hm__client-amt { flex-shrink: 0; font-family: var(--font-display); font-style: normal; font-weight: 700; font-size: 16px; color: var(--ink); }

        /* Personal */
        .hm__statgrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
        .hm__stat {
          padding: 16px 12px;
          border: 1px solid color-mix(in srgb, var(--ink) 6%, transparent);
          border-radius: 11px;
          background: color-mix(in srgb, var(--ac) 6%, transparent);
          text-align: center;
        }
        .hm__stat-num { font-family: var(--font-display); font-style: normal; font-weight: 700; font-size: 30px; line-height: 1; color: var(--ink); }
        .hm__stat-l {
          font-family: var(--font-display); font-size: 8px; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--ink3); margin-top: 6px;
        }
        .hm__team {
          display: flex; align-items: center; justify-content: space-between; gap: 12px;
          margin-top: auto;
          padding: 12px;
          border: 1px solid color-mix(in srgb, var(--ink) 6%, transparent);
          border-radius: 11px;
          background: color-mix(in srgb, var(--ac) 6%, transparent);
        }
        .hm__avatars { display: flex; }
        .hm__avatars .hm__avatar { margin-right: -8px; box-shadow: 0 0 0 2px #FFFFFF; }
        .hm__team-note { display: inline-flex; align-items: center; gap: 8px; font-size: 12px; color: var(--ok); padding: 3px 9px; border-radius: 999px; background: var(--surface); }
      `}</style>
    </div>
  )
}
