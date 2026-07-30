import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Plus, Minus, Smartphone, Sparkles } from 'lucide-react'
import { Nav } from './Nav'
import { Footer } from './Footer'
import { FinalCTA } from './FinalCTA'
import { Grain, ScrollProgress, CursorGlow } from './Chrome'
import { VerticalToggle } from './VerticalToggle'
import { useVertical } from '../lib/VerticalContext'
import { getModule, MODULES, type ModuleExampleKey } from '../lib/modules'
import { useReveal } from '../lib/useReveal'
import { HeroMock } from './ModuleHeroMocks'

/**
 * ModulePage — one reusable marketing page for every product module.
 *
 * Data-driven from lib/modules.tsx. The live example (hero screen + dedicated
 * section) reuses the rubro-aware Mk* mockups, so the page reskins with the
 * hero toggle. Structure follows AIDA: hero (attention) -> qué resuelve +
 * features (interest) -> rubro example (desire) -> CTA (action). Entrance is
 * pure-CSS staggered reveal (reduced-motion safe), motion is transform/opacity
 * with ease-out only. No nested cards, no gradient text, no em dashes.
 */

function ModuleScreen({ exampleKey }: { exampleKey: ModuleExampleKey }) {
  return (
    <div className="mscreen">
      <div className="mscreen__bar">
        <span />
        <span />
        <span />
      </div>
      <div className="mscreen__body">
        <HeroMock exampleKey={exampleKey} />
      </div>
    </div>
  )
}

export function ModulePage() {
  const { slug } = useParams<{ slug: string }>()
  const mod = getModule(slug)
  const { data } = useVertical()

  // Scroll to top + set the document title whenever the module changes.
  useEffect(() => {
    window.scrollTo(0, 0)
    if (mod) document.title = `${mod.name} · Hatlas`
    return () => {
      document.title = 'Hatlas'
    }
  }, [mod])

  // transitions-dev "Texts reveal" (18): hero reveals on load, lower sections
  // on scroll. Re-scans per module (slug) so fresh nodes get observed.
  const pageRef = useRef<HTMLElement | null>(null)
  useReveal(pageRef, [slug])

  const [openFaq, setOpenFaq] = useState<number | null>(0)

  if (!mod) return <Navigate to="/" replace />

  const Icon = mod.icon
  const related = mod.related.map(getModule).filter(Boolean) as NonNullable<
    ReturnType<typeof getModule>
  >[]

  return (
    <>
      <Nav />
      <Grain />
      <ScrollProgress />
      <CursorGlow />

      <main id="top" className="mpage" ref={pageRef}>
        {/* ATTENTION — hero */}
        <section className="mhero">
          <div className="mhero__bg" aria-hidden="true" />
          <div className="container-lg mhero__inner">
            <div className="mhero__content">
              <Link to="/#sistema" className="mback t-reveal" style={{ '--t-i': 0 } as CSSProperties}>
                <ArrowLeft size={15} strokeWidth={1.75} />
                Todos los módulos
              </Link>
              <span className="meyebrow t-reveal" style={{ '--t-i': 1 } as CSSProperties}>
                <span className="meyebrow__icon">
                  <Icon size={16} strokeWidth={1.5} />
                </span>
                {mod.name}
              </span>
              <h1 className="mhero__h1 t-reveal" style={{ '--t-i': 2 } as CSSProperties}>
                {mod.heroH1.lead}
                <em>{mod.heroH1.em}</em>
              </h1>
              <p className="mhero__sub t-reveal" style={{ '--t-i': 3 } as CSSProperties}>
                {mod.heroSub}
              </p>
              <div className="mhero__ctas t-reveal" style={{ '--t-i': 4 } as CSSProperties}>
                <a href="#cta-final" className="btn-gold">
                  Agendar demo
                </a>
                <Link to="/#pricing" className="btn-ghost">
                  Ver precios
                </Link>
              </div>
              {mod.channels && (
                <p className="mhero__channels t-reveal" style={{ '--t-i': 5 } as CSSProperties}>
                  <Smartphone size={15} strokeWidth={1.75} />
                  {mod.channels}
                </p>
              )}
            </div>
            <div className="mhero__demo t-reveal" style={{ '--t-i': 6 } as CSSProperties}>
              <VerticalToggle />
              <ModuleScreen exampleKey={mod.exampleKey} />
            </div>
          </div>
        </section>

        {/* INTEREST — qué resuelve */}
        <section className="section-pad msolve">
          <div className="container-lg">
            <h2 className="h-section msolve__title t-reveal">
              Lo que deja de ser <em>un problema.</em>
            </h2>
            <div className="msolve__list">
              {mod.problems.map((p, i) => (
                <div
                  key={p.pain}
                  className="msolve__row t-reveal"
                  style={{ '--t-i': i } as CSSProperties}
                >
                  <p className="msolve__pain">{p.pain}</p>
                  <p className="msolve__fix">{p.fix}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INTEREST — features bento */}
        <section className="section-pad mfeatures">
          <div className="container-lg">
            <h2 className="h-section mfeatures__title t-reveal">
              Todo lo de {mod.name}, <em>en serio.</em>
            </h2>
            <div className="mfeatures__grid">
              {mod.features.map((f, i) => {
                const FIcon = f.icon
                return (
                  <article
                    key={f.title}
                    className="fcard t-reveal"
                    style={{ '--t-i': i } as CSSProperties}
                  >
                    {FIcon && (
                      <span className="fcard__icon">
                        <FIcon size={18} strokeWidth={1.5} />
                      </span>
                    )}
                    <div className="fcard__body">
                      <h3>{f.title}</h3>
                      <p>{f.desc}</p>
                    </div>
                  </article>
                )
              })}
            </div>
            <div className="mmore t-reveal">
              <span className="mmore__label">Y además</span>
              <ul className="mmore__chips">
                {mod.more.map((x) => (
                  <li key={x} className="mmore__chip">
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* DIFFERENTIATOR — Hatlas Agent in this module */}
        <section className="section-pad magent">
          <div className="container-lg">
            <div className="magent__card t-reveal">
              <span className="magent__icon">
                <Sparkles size={20} strokeWidth={1.5} />
              </span>
              <div className="magent__body">
                <span className="magent__eyebrow">Hatlas Agent en {mod.name}</span>
                <p className="magent__text">{mod.agent}</p>
              </div>
            </div>
          </div>
        </section>

        {/* DESIRE — rubro-aware live example */}
        <section className="section-pad mexample">
          <div className="container-lg mexample__inner">
            <div className="mexample__copy t-reveal">
              <span className="eyebrow">Adaptado a lo tuyo</span>
              <h2 className="h-section">
                Así se ve {mod.name} en tu <em>{data.label.toLowerCase()}.</em>
              </h2>
              <p className="lede">
                Cambiá de rubro y mirá cómo {mod.name} habla el idioma de tu negocio. El mismo
                módulo, con tus productos y tus números.
              </p>
              <VerticalToggle />
            </div>
            <div className="t-reveal" style={{ '--t-i': 1 } as CSSProperties}>
              <ModuleScreen exampleKey={mod.exampleKey} />
            </div>
          </div>
        </section>

        {/* connects to — related modules */}
        <section className="section-pad mrelated">
          <div className="container-lg">
            <h2 className="h-section mrelated__title t-reveal">
              No trabaja <em>solo.</em>
            </h2>
            <p className="lede mrelated__lede t-reveal" style={{ '--t-i': 1 } as CSSProperties}>
              {mod.name} se conecta con el resto de Hatlas. Vendés en caja y todo lo demás se
              actualiza solo.
            </p>
            <div className="mrelated__grid">
              {related.map((r, i) => {
                const RIcon = r.icon
                return (
                  <Link
                    key={r.slug}
                    to={`/modulos/${r.slug}`}
                    className="rcard t-reveal"
                    style={{ '--t-i': i } as CSSProperties}
                  >
                    <span className="rcard__icon">
                      <RIcon size={18} strokeWidth={1.5} />
                    </span>
                    <span className="rcard__text">
                      <span className="rcard__name">{r.name}</span>
                      <span className="rcard__tag">{r.tagline}</span>
                    </span>
                    <ArrowRight className="rcard__arrow" size={16} strokeWidth={1.75} />
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* mini FAQ */}
        <section className="section-pad mfaq">
          <div className="container-lg mfaq__inner">
            <h2 className="h-section mfaq__title t-reveal">Dudas rápidas</h2>
            <div className="mfaq__list">
              {mod.faq.map((it, i) => {
                const isOpen = openFaq === i
                return (
                  <button
                    key={it.q}
                    type="button"
                    className={`mfaq__item t-reveal ${isOpen ? 'is-open' : ''}`}
                    style={{ '--t-i': i } as CSSProperties}
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="mfaq__q">
                      <span>{it.q}</span>
                      <span className="mfaq__toggle" aria-hidden="true">
                        <Plus className="mfaq__ico mfaq__ico--plus" size={16} />
                        <Minus className="mfaq__ico mfaq__ico--minus" size={16} />
                      </span>
                    </span>
                    <span className="mfaq__a-wrap" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
                      <span className="mfaq__a-inner">
                        <span>{it.a}</span>
                      </span>
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        {/* ACTION */}
        <FinalCTA />
      </main>
      <Footer />

      <style>{`
        .mpage { position: relative; z-index: 5; }

        /* ---------- Hero ---------- */
        .mhero {
          position: relative;
          padding: 132px 0 64px;
          overflow: hidden;
        }
        .mhero__bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          background:
            radial-gradient(48% 60% at 82% 12%, rgba(90, 160, 124, 0.30), transparent 68%),
            radial-gradient(46% 52% at 16% 4%, rgba(143, 188, 164, 0.22), transparent 70%),
            radial-gradient(50% 50% at 96% 80%, rgba(224, 178, 120, 0.16), transparent 72%);
        }
        .mhero__inner {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(340px, 1fr) minmax(420px, 1fr);
          gap: 56px;
          align-items: center;
        }
        .mback {
          display: flex;
          width: fit-content;
          align-items: center;
          gap: 7px;
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          color: var(--cream-meta);
          text-decoration: none;
          margin-bottom: 20px;
          transition: color 200ms var(--ease-out-strong);
        }
        .mback:hover { color: var(--gold); }
        .mhero__h1 {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: clamp(34px, 4vw, 56px);
          line-height: 1.02;
          letter-spacing: -0.03em;
          margin: 0 0 22px;
          max-width: 16ch;
          text-wrap: balance;
          color: var(--cream);
        }
        .mhero__h1 em {
          font-style: normal;
          font-weight: 700;
          color: var(--gold);
        }
        .mhero__sub {
          margin: 0 0 32px;
          max-width: 48ch;
          font-size: 18px;
          line-height: 1.55;
          color: var(--cream-dim);
        }
        .mhero__ctas { display: flex; flex-wrap: wrap; gap: 14px; }
        .mhero__channels {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          margin: 18px 0 0;
          font-size: 13px;
          color: var(--cream-dim);
        }
        .mhero__channels svg { color: var(--gold); flex-shrink: 0; }
        .mhero__demo { justify-self: end; width: 100%; max-width: 460px; }

        /* ---------- Screen frame (reused) ---------- */
        .mscreen {
          border: 1px solid var(--glass-border);
          border-radius: var(--r-card);
          background: var(--glass-bg-strong);
          -webkit-backdrop-filter: blur(20px) saturate(1.8) brightness(1.06);
          backdrop-filter: url(#lg-refract) blur(20px) saturate(1.8) brightness(1.06);
          box-shadow: var(--glass-elev), 0 0 60px rgba(90, 160, 124, 0.14);
          overflow: hidden;
        }
        .mscreen__bar {
          display: flex;
          gap: 6px;
          padding: 12px 14px;
          border-bottom: 1px solid var(--border-soft);
        }
        .mscreen__bar span {
          width: 9px;
          height: 9px;
          border-radius: 999px;
          background: var(--border-strong);
        }
        .mscreen__body {
          min-height: 360px;
          display: flex;
          flex-direction: column;
        }
        .mscreen__body > .hm-fade { flex: 1; display: flex; flex-direction: column; }

        /* ---------- Qué resuelve ---------- */
        .msolve__title { max-width: 16ch; margin: 0 0 40px; }
        .msolve__list {
          display: grid;
          gap: 1px;
          background: var(--border-soft);
          border: 1px solid var(--border-soft);
          border-radius: 14px;
          overflow: hidden;
        }
        .msolve__row {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 32px;
          padding: 28px 28px;
          background: var(--bg-base);
        }
        .msolve__pain {
          margin: 0;
          font-family: var(--font-sans);
          font-style: italic;
          font-weight: 500;
          font-size: 20px;
          line-height: 1.3;
          color: var(--cream);
        }
        .msolve__fix {
          margin: 0;
          font-size: 15px;
          line-height: 1.6;
          color: var(--cream-dim);
          align-self: center;
        }

        /* ---------- Features bento ---------- */
        .mfeatures { background: var(--bg-subtle); }
        .mfeatures__title { margin: 0 0 40px; }
        .mfeatures__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-flow: dense;
          gap: 12px;
        }
        .fcard {
          padding: 24px;
          background: var(--glass-bg);
          -webkit-backdrop-filter: blur(18px) saturate(1.7) brightness(1.05);
          backdrop-filter: url(#lg-refract) blur(18px) saturate(1.7) brightness(1.05);
          border: 1px solid var(--glass-border);
          border-radius: var(--r-card);
          box-shadow: var(--glass-elev-sm);
          min-height: 184px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 24px;
          transition: border-color 300ms var(--ease-out-strong),
            box-shadow 300ms var(--ease-out-strong),
            transform 300ms var(--ease-out-strong);
        }
        .fcard:hover { border-color: rgba(62,124,91,0.45); transform: translateY(-3px); box-shadow: 0 1px 2px rgba(23,22,27,.05), 0 22px 50px var(--glass-shadow), inset 0 1px 0 var(--glass-hi); }
        .fcard__icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          background: var(--gold-tint-12);
          border: 1px solid var(--gold-glow);
          border-radius: 9px;
          color: var(--gold);
          transition: border-color 300ms var(--ease-out-strong),
            background 300ms var(--ease-out-strong);
        }
        .fcard:hover .fcard__icon {
          border-color: var(--gold-deep);
          background: var(--gold-tint-12);
        }
        .fcard__body { display: flex; flex-direction: column; gap: 8px; }
        .fcard h3 {
          margin: 0;
          font-family: var(--font-display);
          font-size: 18px;
          font-weight: 600;
          letter-spacing: -0.02em;
          color: var(--cream);
        }
        .fcard p { margin: 0; font-size: 13px; line-height: 1.5; color: var(--cream-dim); }

        /* ---------- "Y además" depth chips ---------- */
        .mmore {
          display: flex;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 12px 14px;
          margin-top: 28px;
        }
        .mmore__label {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--cream-meta);
        }
        .mmore__chips { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 8px; }
        .mmore__chip {
          font-size: 13px;
          color: var(--cream-dim);
          padding: 7px 13px;
          background: var(--glass-bg);
          -webkit-backdrop-filter: blur(10px) saturate(1.4);
          backdrop-filter: blur(10px) saturate(1.4);
          border: 1px solid var(--glass-border);
          border-radius: 999px;
        }

        /* ---------- Hatlas Agent band ---------- */
        .magent__card {
          display: flex;
          gap: 18px;
          align-items: flex-start;
          padding: 28px 32px;
          background:
            radial-gradient(120% 140% at 0% 0%, rgba(62, 124, 91, 0.14), transparent 60%),
            var(--glass-bg-strong);
          -webkit-backdrop-filter: blur(18px) saturate(1.7) brightness(1.05);
          backdrop-filter: url(#lg-refract) blur(18px) saturate(1.7) brightness(1.05);
          border: 1px solid rgba(62, 124, 91, 0.35);
          border-radius: var(--r-card);
          box-shadow: var(--glass-elev);
        }
        .magent__icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 46px;
          height: 46px;
          flex-shrink: 0;
          background: var(--gold-tint-12);
          border: 1px solid var(--gold-deep);
          border-radius: 12px;
          color: var(--gold-bright);
        }
        .magent__eyebrow {
          display: block;
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 8px;
        }
        .magent__text {
          margin: 0;
          max-width: 64ch;
          font-family: var(--font-sans);
          font-style: italic;
          font-weight: 500;
          font-size: clamp(18px, 2vw, 23px);
          line-height: 1.4;
          color: var(--cream);
        }

        /* ---------- Rubro example ---------- */
        .mexample__inner {
          display: grid;
          grid-template-columns: 1fr minmax(360px, 0.85fr);
          gap: 56px;
          align-items: center;
        }
        .mexample__copy .eyebrow { display: inline-block; margin-bottom: 16px; }
        .mexample__copy h2 { margin: 0 0 18px; max-width: 16ch; }
        .mexample__copy .lede { margin: 0 0 26px; }

        /* ---------- Related ---------- */
        .mrelated { background: var(--bg-subtle); }
        .mrelated__title { margin: 0 0 14px; }
        .mrelated__lede { margin: 0 0 36px; max-width: 52ch; }
        .mrelated__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        .rcard {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 20px;
          background: var(--glass-bg);
          -webkit-backdrop-filter: blur(16px) saturate(1.6);
          backdrop-filter: blur(16px) saturate(1.6);
          border: 1px solid var(--glass-border);
          border-radius: var(--r-card);
          box-shadow: var(--glass-elev-sm);
          text-decoration: none;
          transition: border-color 300ms var(--ease-out-strong),
            transform 300ms var(--ease-out-strong);
        }
        .rcard:hover { border-color: rgba(62,124,91,0.45); transform: translateY(-2px); }
        .rcard__icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          flex-shrink: 0;
          background: var(--gold-tint-12);
          border: 1px solid var(--gold-glow);
          border-radius: 9px;
          color: var(--gold);
        }
        .rcard__text { display: flex; flex-direction: column; gap: 3px; min-width: 0; }
        .rcard__name { font-size: 15px; font-weight: 500; color: var(--cream); }
        .rcard__tag {
          font-size: 12px;
          color: var(--cream-dim);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .rcard__arrow {
          margin-left: auto;
          flex-shrink: 0;
          color: var(--cream-meta);
          transition: transform 300ms var(--ease-out-strong), color 300ms var(--ease-out-strong);
        }
        .rcard:hover .rcard__arrow { transform: translateX(4px); color: var(--gold); }

        /* ---------- Mini FAQ ---------- */
        .mfaq__inner { max-width: 820px; }
        .mfaq__title { margin: 0 0 28px; }
        .mfaq__list { display: flex; flex-direction: column; border-top: 1px solid var(--border-soft); }
        .mfaq__item {
          width: 100%;
          padding: 22px 0;
          background: transparent;
          border: none;
          border-bottom: 1px solid var(--border-soft);
          text-align: left;
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }
        .mfaq__q {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          font-size: 17px;
          color: var(--cream);
        }
        .mfaq__item:hover .mfaq__q { color: var(--gold); }
        .mfaq__toggle {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          flex-shrink: 0;
          border: 1px solid var(--border);
          background: var(--bg-card);
          color: var(--cream-dim);
          border-radius: 9px;
          transition: background 200ms var(--ease-out-strong),
            border-color 200ms var(--ease-out-strong), color 200ms var(--ease-out-strong);
        }
        .mfaq__item.is-open .mfaq__toggle {
          background: var(--gold-tint-12);
          border-color: var(--gold-deep);
          color: var(--gold);
        }
        /* transitions-dev · icon-swap (09) on the +/- toggle */
        .mfaq__ico {
          position: absolute;
          inset: 0;
          margin: auto;
          width: 16px;
          height: 16px;
          transition:
            opacity 200ms ease-in-out,
            transform 200ms ease-in-out,
            filter 200ms ease-in-out;
        }
        .mfaq__ico--minus { opacity: 0; transform: scale(0.4) rotate(-90deg); filter: blur(2px); }
        .mfaq__item.is-open .mfaq__ico--plus { opacity: 0; transform: scale(0.4) rotate(90deg); filter: blur(2px); }
        .mfaq__item.is-open .mfaq__ico--minus { opacity: 1; transform: none; filter: none; }
        .mfaq__a-wrap {
          display: grid;
          grid-template-rows: 0fr;
          overflow: hidden;
          transition: grid-template-rows 350ms cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        @media (prefers-reduced-motion: reduce) {
          .mfaq__a-wrap { transition: none; }
          .mfaq__ico { transition: none; }
        }
        .mfaq__a-inner { min-height: 0; }
        .mfaq__a-inner > span {
          display: block;
          margin: 14px 0 0;
          padding-right: 44px;
          max-width: 64ch;
          font-size: 15px;
          line-height: 1.6;
          color: var(--cream-dim);
        }

        /* Entrance + on-scroll reveal handled by the global .t-reveal class
           (transitions-dev "Texts reveal", 18) + IntersectionObserver. */

        /* ---------- Responsive ---------- */
        @media (max-width: 980px) {
          .mhero__inner,
          .mexample__inner { grid-template-columns: 1fr; gap: 40px; }
          .mhero__demo { justify-self: stretch; max-width: 100%; }
          .mfeatures__grid { grid-template-columns: repeat(2, 1fr); }
          .mrelated__grid { grid-template-columns: 1fr; }
          .msolve__row { grid-template-columns: 1fr; gap: 10px; }
        }
        @media (max-width: 560px) {
          .mhero { padding: 116px 0 48px; }
          .mfeatures__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
