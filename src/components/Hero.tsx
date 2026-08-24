import { useEffect, useState } from 'react'
import { ShieldCheck } from 'lucide-react'
import { ContainerScroll } from './ContainerScroll'
import { AppScreen } from './AppScreen'
import { PhoneMockup } from './PhoneMockup'
import { VerticalToggle } from './VerticalToggle'
import { useVertical } from '../lib/VerticalContext'

/**
 * Hero — centered.
 *
 * Desktop: the wide Hatlas panel un-tilts as it reaches center (ContainerScroll).
 * Mobile: a portrait PHONE mockup of the app instead — a landscape dashboard
 * squished into a phone reads as broken, and the ICP uses Hatlas on their phone.
 * Same centered lead (toggle → H1 → subhead → CTAs → trust) either way.
 */
export function Hero() {
  const { data, vertical } = useVertical()
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth <= 768,
  )
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    const on = () => setIsMobile(mq.matches)
    on()
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])

  const lead = (
    <div className="hero__lead">
      <div className="hero__toggle">
        <VerticalToggle />
      </div>
      <h1 id="hero-headline" className="h-mega hero__headline">
        El sistema operativo de tu negocio.{' '}
        <em>Con un agente que trabaja por vos, 24/7.</em>
      </h1>
      <p className="hero__subhead">
        <span key={vertical} className="hero__subhead-swap">
          {data.heroSubhead.pre}
          <em>{data.heroSubhead.em}</em>
          {data.heroSubhead.post}
        </span>
      </p>
      <div className="hero__ctas">
        <a href="#cta-final" className="btn-gold">Ver Hatlas con mis datos</a>
        <a href="#analista" className="btn-ghost">Ver qué detecta Hatlas Agent</a>
      </div>
      <div className="hero__trust">
        <ShieldCheck size={15} strokeWidth={1.75} />
        Autorizado por Impuestos Nacionales
      </div>
    </div>
  )

  return (
    <section className="hero" id="hero" aria-labelledby="hero-headline">
      <div className="hero__bg" aria-hidden="true" />

      {isMobile ? (
        <div className="hero__mobile">
          {lead}
          <PhoneMockup />
        </div>
      ) : (
        <ContainerScroll titleComponent={lead}>
          <AppScreen />
        </ContainerScroll>
      )}

      <style>{`
        .hero {
          position: relative;
          z-index: 5;
          padding: 100px 24px 32px;
          overflow: hidden;
        }
        .hero__bg {
          position: absolute;
          inset: -6% -5% 30%;
          z-index: 0;
          pointer-events: none;
          background:
            radial-gradient(42% 42% at 26% 16%, color-mix(in srgb, var(--ac-light) 34%, transparent), transparent 70%),
            radial-gradient(46% 44% at 78% 10%, color-mix(in srgb, var(--ac) 26%, transparent), transparent 70%),
            radial-gradient(50% 46% at 92% 44%, rgba(224, 178, 120, 0.18), transparent 72%);
          filter: blur(8px);
        }
        .hero > * { position: relative; z-index: 10; }
        .hero__mobile { display: flex; flex-direction: column; align-items: center; gap: 30px; }

        /* ── centered lead (goes into ContainerScroll's header) ── */
        .hero__lead { max-width: 1000px; margin: 0 auto; text-align: center; }
        .hero__toggle { display: flex; justify-content: center; margin-bottom: 16px; }
        .hero__headline {
          margin: 0 auto 16px;
          max-width: 22ch;
          font-size: clamp(34px, 4.1vw, 56px);
          line-height: 1.02;
          text-wrap: balance;
        }
        .hero__subhead {
          margin: 0 auto 22px;
          max-width: 640px;
          font-size: 16.5px;
          line-height: 1.55;
          color: var(--cream-dim);
        }
        .hero__subhead em {
          font-family: var(--font-sans);
          font-style: italic;
          font-weight: 500;
          color: var(--gold);
        }
        .hero__subhead-swap {
          display: block;
          animation: hero-subhead-enter 340ms var(--ease-out-strong) both;
          will-change: transform, filter, opacity;
        }
        @keyframes hero-subhead-enter {
          0% { opacity: 0; filter: blur(var(--text-swap-blur)); transform: translateY(var(--text-swap-translate-y)); }
          100% { opacity: 1; filter: blur(0); transform: translateY(0); }
        }
        .hero__ctas { display: flex; flex-wrap: wrap; justify-content: center; gap: 14px; }
        .hero__trust {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 20px;
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
        .hero__trust svg { color: var(--gold); flex-shrink: 0; }

        @media (prefers-reduced-motion: reduce) {
          .hero__subhead-swap { animation: none !important; }
        }
        @media (max-width: 600px) {
          .hero { padding: 92px 18px 20px; }
          .hero__toggle { margin-bottom: 14px; }
          .hero__headline { font-size: clamp(29px, 8.4vw, 38px); max-width: 20ch; margin-bottom: 14px; }
          .hero__subhead { font-size: 15.5px; margin-bottom: 18px; }
          .hero__ctas { gap: 10px; }
          .hero__ctas .btn-gold, .hero__ctas .btn-ghost { width: 100%; justify-content: center; }
          .hero__trust { margin-top: 16px; }
        }
      `}</style>
    </section>
  )
}
