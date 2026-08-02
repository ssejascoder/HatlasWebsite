import { TrendingDown, Package, UserMinus, CalendarClock, Wallet, type LucideIcon } from 'lucide-react'
import { useGsap, gsap, ScrollTrigger } from '../lib/useGsap'
import { useVertical } from '../lib/VerticalContext'
import type { InsightIcon } from '../lib/verticals'

/**
 * Sección Analista IA — Sprint 2.1.
 *
 * Pre-audit: this section reused the Hero's AnalystMockup, then placed 3
 * identical insight cards underneath. Reading order: same mockup twice, then
 * three cards that all looked alike. Repetition, no second-read.
 *
 * Now: a chat-style transcript replaces the duplicate mockup. The user types
 * the question once, the Analyst responds in three structured steps. The 3
 * insight cards stay (they prove breadth: pricing, stock, churn) but they sit
 * BELOW the chat as concrete examples.
 */

/** Maps the data-layer icon keys to lucide components. */
const INSIGHT_ICONS: Record<InsightIcon, LucideIcon> = {
  trend: TrendingDown,
  package: Package,
  user: UserMinus,
  calendar: CalendarClock,
  wallet: Wallet,
}

export function Analista() {
  const { data } = useVertical()
  const { chat, insights } = data
  const ref = useGsap<HTMLElement>((scope) => {
    const chat = scope.querySelector<HTMLElement>('[data-anim="chat"]')
    const cards = scope.querySelectorAll<HTMLElement>('.insight-card')
    const cierre = scope.querySelector<HTMLElement>('[data-anim="cierre"]')

    if (chat) {
      gsap.set(chat, { opacity: 0, y: 24 })
      gsap.to(chat, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: { trigger: scope, start: 'top 70%', once: true },
      })
    }
    if (cards.length) {
      gsap.set(cards, { opacity: 0, y: 24 })
      ScrollTrigger.batch(cards, {
        onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out', overwrite: true }),
        start: 'top 80%',
        once: true,
      })
    }
    if (cierre) {
      gsap.set(cierre, { opacity: 0, y: 16 })
      gsap.to(cierre, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: { trigger: cierre, start: 'top 85%', once: true },
      })
    }
  })

  return (
    <section
      className="section-pad analista"
      id="analista"
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="analista-title"
    >
      <div className="container-lg">
        <header className="analista__header">
          <span className="eyebrow">Hatlas Agent · trabaja por vos</span>
          <h2 id="analista-title" className="h-section">
            Conocé a <em>Hatlas Agent.</em>
          </h2>
          <p className="lede" style={{ marginInline: 'auto' }}>
            Vigila tus ventas, stock, costos y clientes las 24 horas, y te avisa qué hacer sin que
            se lo pidas.
          </p>
        </header>

        <div className="chat" data-anim="chat">
          <div className="chat__bubble chat__bubble--user">
            <div className="chat__who">TÚ</div>
            <p>{chat.question}</p>
          </div>

          <div className="chat__bubble chat__bubble--ai">
            <div className="chat__who">HATLAS AGENT · ANALISTA DE HATLAS</div>
            <p className="chat__lead">{chat.lead}</p>
            <ol className="chat__steps">
              {chat.steps.map((step, i) => (
                <li key={i}>
                  <span className="chat__step-tag">{step.tag}</span>
                  <span>{step.text}</span>
                </li>
              ))}
            </ol>
            <div className="chat__suggestion">
              <span className="chat__sugg-label">Sugerencia</span>
              <span>{chat.suggestion}</span>
            </div>
            <div className="chat__actions">
              <button type="button" className="chat__btn chat__btn--primary">{chat.actions[0]}</button>
              <button type="button" className="chat__btn chat__btn--ghost">{chat.actions[1]}</button>
            </div>
          </div>
        </div>

        <div className="insights">
          <div className="insights__head">
            <span className="eyebrow" style={{ color: 'var(--cream-meta)' }}>
              Lo que Hatlas Agent detectó esta semana
            </span>
          </div>
          <div className="insights__grid">
            {insights.map(({ icon, title, detail, meta }, i) => {
              const Icon = INSIGHT_ICONS[icon]
              return (
              <article key={i} className="insight-card">
                <span className="insight-card__icon">
                  <Icon size={20} strokeWidth={1.5} />
                </span>
                <div className="insight-card__body">
                  <p className="insight-card__title"><em>{title}</em></p>
                  <p className="insight-card__detail">{detail}</p>
                  <div className="insight-card__meta">{meta}</div>
                </div>
              </article>
              )
            })}
          </div>
        </div>

        <p className="analista__cierre" data-anim="cierre">
          Te dice qué hacer, <em>no solo qué pasó.</em>
        </p>
        <div className="analista__cta">
          <a href="#cta-final" className="btn-link">Agendar una demo</a>
        </div>
      </div>

      <style>{`
        .analista {
          position: relative;
          z-index: 10;
          background: var(--bg-base);
        }
        .analista__header {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 48px;
        }
        .analista__header .eyebrow { display: inline-block; margin-bottom: 20px; }
        .analista__header h2 { margin-bottom: 20px; }

        .chat {
          max-width: 760px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .chat__bubble {
          padding: 18px 22px;
          border-radius: 16px;
          font-family: var(--font-sans);
        }
        .chat__bubble--user {
          align-self: flex-end;
          max-width: 480px;
          background: var(--bg-elevated);
          border: 1px solid var(--border-soft);
          color: var(--cream);
        }
        /* Carbon tier (§4.9) — was a warm amber wash, now matches every
           other content card. The "who is speaking" distinction from the
           user bubble is carried by alignment + the gold label, not by a
           yellow background. */
        .chat__bubble--ai {
          align-self: flex-start;
          max-width: 640px;
          background: var(--glass-bg-strong);
          -webkit-backdrop-filter: blur(20px) saturate(1.8) brightness(1.06);
          backdrop-filter: url(#lg-refract) blur(20px) saturate(1.8) brightness(1.06);
          border: 1px solid var(--glass-border);
          box-shadow: var(--glass-elev);
        }
        .chat__who {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.16em;
          color: var(--cream-meta);
          margin-bottom: 8px;
        }
        .chat__bubble p { margin: 0; font-size: 15px; line-height: 1.5; color: var(--cream); }
        .chat__lead { font-weight: 400; }

        .chat__steps {
          list-style: none;
          margin: 14px 0 18px;
          padding: 0;
          counter-reset: step;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .chat__steps li {
          display: grid;
          grid-template-columns: 88px 1fr;
          gap: 12px;
          align-items: baseline;
          font-size: 14px;
          line-height: 1.5;
          color: var(--cream-dim);
        }
        .chat__steps li em {
          font-family: var(--font-sans);
          font-style: italic;
          color: var(--gold);
          font-weight: 600;
        }
        .chat__step-tag {
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--gold);
          padding-top: 2px;
        }

        .chat__suggestion {
          display: grid;
          grid-template-columns: 110px 1fr;
          gap: 12px;
          padding: 12px 14px;
          background: var(--gold-tint-12);
          border: 1px solid var(--gold-glow);
          border-radius: 12px;
          font-size: 13px;
          line-height: 1.5;
          color: var(--cream);
        }
        .chat__sugg-label {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--gold);
        }
        .chat__actions { display: flex; gap: 10px; margin-top: 16px; flex-wrap: wrap; }
        .chat__btn {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 500;
          min-height: 44px;
          padding: 11px 18px;
          border-radius: 10px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          transition: transform 160ms var(--ease-out-strong), background 200ms var(--ease-out-strong), border-color 200ms var(--ease-out-strong);
        }
        .chat__btn:active { transform: scale(0.97); }
        .chat__btn--primary {
          background: var(--grad-gold);
          color: var(--gold-text);
          border: none;
        }
        .chat__btn--ghost {
          background: transparent;
          color: var(--cream-dim);
          border: 1px solid var(--border-strong);
        }
        .chat__btn--ghost:hover { color: var(--cream); }

        .insights {
          max-width: 1100px;
          margin: 72px auto 0;
        }
        .insights__head { text-align: center; margin-bottom: 20px; }
        .insights__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }
        /* Carbon tier (§4.9 default) — same family as the hero orbital cards,
           since both represent "Hatlas Agent observations" */
        .insight-card {
          display: flex;
          gap: 14px;
          padding: 18px 20px;
          background: var(--glass-bg);
          -webkit-backdrop-filter: blur(18px) saturate(1.7) brightness(1.05);
          backdrop-filter: url(#lg-refract) blur(18px) saturate(1.7) brightness(1.05);
          border: 1px solid var(--glass-border);
          border-radius: var(--r-card);
          box-shadow: var(--glass-elev-sm);
        }
        /* Restrained icon treatment (matches .module-card__icon): the gold
           fill + gold border was oversaturating the accent. Gold lives only
           on the icon stroke now; the container is a subtle neutral square,
           per §4.9 "el oro es el escenario, no el actor". */
        .insight-card__icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          color: var(--gold);
          background: var(--gold-tint-12);
          border: 1px solid var(--gold-glow);
          border-radius: 10px;
          flex-shrink: 0;
        }
        .insight-card__body { flex: 1; }
        .insight-card__title {
          margin: 0 0 6px;
          font-size: 14px;
          line-height: 1.45;
          color: var(--cream);
        }
        /* Title in cream Fraunces italic — gold was the whole sentence, too
           much. Gold now lives only on the icon (the accent), per §4.9
           "el oro es el escenario, no el actor". */
        .insight-card__title em {
          font-family: var(--font-sans);
          font-style: normal;
          color: var(--gold);
          font-weight: 600;
        }
        .insight-card__detail {
          margin: 0 0 8px;
          font-size: 13px;
          line-height: 1.5;
          color: var(--cream-dim);
        }
        .insight-card__meta {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--cream-meta);
        }

        .analista__cierre {
          text-align: center;
          font-family: var(--font-display);
          font-style: normal;
          font-weight: 600;
          letter-spacing: -0.03em;
          color: var(--cream);
          line-height: 1.1;
          font-size: clamp(24px, 3vw, 40px);
          margin: 72px auto 24px;
        }
        .analista__cierre em { color: var(--gold); }
        .analista__cta { text-align: center; }

        @media (max-width: 900px) {
          .insights__grid { grid-template-columns: 1fr; }
          /* Keep the conversation code: AI bubble fills width, user bubble
             stays narrower and right-aligned so "who is speaking" survives. */
          .chat__bubble--ai { max-width: 100%; }
          .chat__bubble--user { max-width: 85%; }
          .chat__steps li, .chat__suggestion { grid-template-columns: 1fr; gap: 4px; }
        }
      `}</style>
    </section>
  )
}
