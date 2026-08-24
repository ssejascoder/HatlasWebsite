import { useEffect, useRef, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import {
  Sparkles,
  ArrowRight,
  TrendingDown,
  Package,
  UserMinus,
  CalendarClock,
  Wallet,
  type LucideIcon,
} from 'lucide-react'
import { Nav } from './Nav'
import { Footer } from './Footer'
import { FinalCTA } from './FinalCTA'
import { Analista } from './Analista'
import { Grain, ScrollProgress, CursorGlow } from './Chrome'
import { VerticalToggle } from './VerticalToggle'
import { useVertical } from '../lib/VerticalContext'
import { MODULES } from '../lib/modules'
import { useReveal } from '../lib/useReveal'
import type { InsightIcon } from '../lib/verticals'

/**
 * TwentyAgentPage (/hatlas-agent) — dedicated, bespoke page for the AI agent
 * (the product's differentiator), distinct from the operational module pages.
 * Reuses the rubro-aware chat + insights demo (<Analista/>) and the per-module
 * `agent` capability strings; adds its own hero with a live agent-alert preview.
 */

const INSIGHT_ICONS: Record<InsightIcon, LucideIcon> = {
  trend: TrendingDown,
  package: Package,
  user: UserMinus,
  calendar: CalendarClock,
  wallet: Wallet,
}

function AgentAlerts() {
  const { vertical, data } = useVertical()
  const top = data.insights.slice(0, 2)
  return (
    <div key={vertical} className="hm-fade ta-alerts">
      <div className="ta-alerts__head">
        <span className="ta-alerts__live"><span /> Hatlas Agent · en vivo</span>
      </div>
      {top.map((it, i) => {
        const Icon = INSIGHT_ICONS[it.icon]
        return (
          <article key={i} className={`ta-alert ${i === 0 ? 'ta-alert--lead' : ''}`}>
            <span className="ta-alert__icon">
              <Icon size={18} strokeWidth={1.5} />
            </span>
            <div className="ta-alert__body">
              <p className="ta-alert__title">{it.title}</p>
              {i === 0 && <p className="ta-alert__detail">{it.detail}</p>}
              <div className="ta-alert__meta">{it.meta}</div>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export function TwentyAgentPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Hatlas Agent · Hatlas'
    return () => {
      document.title = 'Hatlas'
    }
  }, [])

  const pageRef = useRef<HTMLElement>(null)
  useReveal(pageRef)

  return (
    <>
      <Nav />
      <Grain />
      <ScrollProgress />
      <CursorGlow />

      <main id="top" className="tapage" ref={pageRef}>
        {/* HERO */}
        <section className="ta-hero">
          <div className="ta-hero__bg" aria-hidden="true" />
          <div className="container-lg ta-hero__inner">
            <div className="ta-hero__content">
              <span className="meyebrow t-reveal" style={{ '--t-i': 0 } as CSSProperties}>
                <span className="meyebrow__icon">
                  <Sparkles size={16} strokeWidth={1.5} />
                </span>
                Hatlas Agent
              </span>
              <h1 className="ta-hero__h1 t-reveal" style={{ '--t-i': 1 } as CSSProperties}>
                Un analista que <em>nunca duerme.</em>
              </h1>
              <p className="ta-hero__sub t-reveal" style={{ '--t-i': 2 } as CSSProperties}>
                Hatlas Agent vigila tus ventas, tu stock, tus costos y tus clientes las 24 horas.
                Te avisa qué conviene hacer, en español y sin que se lo pidas.
              </p>
              <div className="ta-hero__ctas t-reveal" style={{ '--t-i': 3 } as CSSProperties}>
                <a href="#cta-final" className="btn-gold">
                  Agendar demo
                </a>
                <Link to="/modulos" className="btn-ghost">
                  Ver los módulos
                </Link>
              </div>
            </div>
            <div className="ta-hero__demo t-reveal" style={{ '--t-i': 4 } as CSSProperties}>
              <VerticalToggle />
              <AgentAlerts />
            </div>
          </div>
        </section>

        {/* DEMO — reused rubro-aware chat + insights */}
        <Analista />

        {/* PER-MODULE — what the agent does in each module */}
        <section className="section-pad ta-mods" aria-labelledby="ta-mods-title">
          <div className="container-lg">
            <h2 id="ta-mods-title" className="h-section ta-mods__title t-reveal">
              Lo que hace en <em>cada parte de tu negocio.</em>
            </h2>
            <div className="ta-mods__grid">
              {MODULES.map((m, i) => {
                const Icon = m.icon
                return (
                  <Link
                    key={m.slug}
                    to={`/modulos/${m.slug}`}
                    className="ta-mod t-reveal"
                    style={{ '--t-i': i } as CSSProperties}
                  >
                    <span className="ta-mod__icon">
                      <Icon size={18} strokeWidth={1.5} />
                    </span>
                    <span className="ta-mod__name">
                      {m.name}
                      <ArrowRight className="ta-mod__arrow" size={14} strokeWidth={1.75} />
                    </span>
                    <p className="ta-mod__text">{m.agent}</p>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />

      <style>{`
        .tapage { position: relative; z-index: 5; }

        /* ---------- Hero ---------- */
        .ta-hero { position: relative; padding: 140px 0 64px; overflow: hidden; }
        .ta-hero__bg {
          position: absolute; inset: 0; z-index: 0;
          background:
            radial-gradient(48% 60% at 82% 12%, color-mix(in srgb, var(--ac) 32%, transparent), transparent 68%),
            radial-gradient(46% 52% at 16% 6%, color-mix(in srgb, var(--ac-light) 22%, transparent), transparent 70%),
            radial-gradient(50% 50% at 96% 82%, color-mix(in srgb, var(--ac-light) 16%, transparent), transparent 72%);
        }
        .ta-hero__inner {
          position: relative; z-index: 1;
          display: grid;
          grid-template-columns: minmax(340px, 1fr) minmax(380px, 0.95fr);
          gap: 56px; align-items: center;
        }
        .ta-hero__h1 {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: clamp(36px, 4.6vw, 60px);
          line-height: 1.02;
          letter-spacing: -0.03em;
          margin: 18px 0 22px;
          max-width: 14ch;
          text-wrap: balance;
          color: var(--cream);
        }
        .ta-hero__h1 em { font-style: normal; font-weight: 700; color: var(--gold); }
        .ta-hero__sub {
          margin: 0 0 32px; max-width: 50ch;
          font-size: 18px; line-height: 1.55; color: var(--cream-dim);
        }
        .ta-hero__ctas { display: flex; flex-wrap: wrap; gap: 14px; }
        .ta-hero__demo { justify-self: end; width: 100%; max-width: 440px; }

        /* ---------- Agent alerts (hero visual) ---------- */
        .ta-alerts {
          display: flex; flex-direction: column; gap: 10px;
          padding: 16px;
          border: 1px solid var(--glass-border);
          border-radius: var(--r-card);
          background: var(--glass-bg-strong);
          -webkit-backdrop-filter: var(--glass-filter);
          backdrop-filter: var(--glass-filter);
          box-shadow: var(--glass-elev), 0 0 60px color-mix(in srgb, var(--ac) 14%, transparent);
        }
        .ta-alerts__head { padding: 4px 4px 2px; }
        .ta-alerts__live {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--cream-meta);
        }
        .ta-alerts__live span {
          width: 6px; height: 6px; border-radius: 999px; background: var(--success);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--ok) 14%, transparent);
        }
        .ta-alert {
          display: flex; gap: 12px;
          padding: 14px;
          border: 1px solid var(--border);
          border-radius: 12px;
          background: var(--bg-card);
        }
        .ta-alert--lead { background: var(--gold-tint-12); border-color: color-mix(in srgb, var(--ac) 40%, transparent); }
        .ta-alert__icon {
          display: inline-flex; align-items: center; justify-content: center;
          width: 34px; height: 34px; flex-shrink: 0;
          color: var(--gold);
          background: var(--gold-tint-12);
          border: 1px solid var(--gold-glow);
          border-radius: 9px;
        }
        .ta-alert__title {
          margin: 0 0 5px;
          font-family: var(--font-sans); font-style: italic; font-weight: 500; font-size: 15px;
          line-height: 1.35; color: var(--cream);
        }
        .ta-alert__detail { margin: 0 0 7px; font-size: 12px; line-height: 1.5; color: var(--cream-dim); }
        .ta-alert__meta {
          font-family: var(--font-mono); font-size: 9px; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--cream-meta);
        }

        /* ---------- Per-module ---------- */
        .ta-mods { position: relative; z-index: 10; background: var(--bg-subtle); }
        .ta-mods__title { text-align: center; max-width: 18ch; margin: 0 auto 48px; }
        .ta-mods__grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;
        }
        .ta-mod {
          display: flex; flex-direction: column; gap: 10px;
          padding: 24px;
          background: var(--glass-bg);
          -webkit-backdrop-filter: var(--glass-filter);
          backdrop-filter: var(--glass-filter);
          border: 1px solid var(--glass-border);
          border-radius: var(--r-card);
          box-shadow: var(--glass-elev-sm);
          text-decoration: none;
          transition: border-color 300ms var(--ease-out-strong), box-shadow 300ms var(--ease-out-strong), transform 300ms var(--ease-out-strong);
        }
        .ta-mod:hover { border-color: color-mix(in srgb, var(--ac) 45%, transparent); transform: translateY(-3px); box-shadow: 0 1px 2px color-mix(in srgb, var(--ink) 5%, transparent), 0 22px 50px var(--glass-shadow), inset 0 1px 0 var(--glass-hi); }
        .ta-mod__icon {
          display: inline-flex; align-items: center; justify-content: center;
          width: 38px; height: 38px;
          color: var(--gold);
          background: var(--gold-tint-12);
          border: 1px solid var(--gold-glow);
          border-radius: 9px;
          transition: border-color 300ms var(--ease-out-strong), background 300ms var(--ease-out-strong);
        }
        .ta-mod:hover .ta-mod__icon { border-color: var(--gold-deep); background: var(--gold-tint-12); }
        .ta-mod__name {
          display: flex; align-items: center; justify-content: space-between;
          font-family: var(--font-display); font-size: 17px; font-weight: 600; letter-spacing: -0.02em; color: var(--cream);
        }
        .ta-mod__arrow { color: var(--cream-meta); transition: transform 300ms var(--ease-out-strong), color 300ms var(--ease-out-strong); }
        .ta-mod:hover .ta-mod__arrow { transform: translateX(4px); color: var(--gold); }
        .ta-mod__text { margin: 0; font-size: 13px; line-height: 1.5; color: var(--cream-dim); }

        @media (max-width: 980px) {
          .ta-hero__inner { grid-template-columns: 1fr; gap: 40px; }
          .ta-hero__demo { justify-self: stretch; max-width: 100%; }
          .ta-mods__grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 560px) {
          .ta-hero { padding: 116px 0 48px; }
        }
      `}</style>
    </>
  )
}
