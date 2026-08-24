import { Sparkles, Receipt, LineChart, Boxes, Users, ArrowRight } from 'lucide-react'
import { useGsap, gsap } from '../lib/useGsap'
import { useVertical } from '../lib/VerticalContext'

/**
 * PhoneMockup — the mobile hero visual. Instead of squishing the wide desktop
 * dashboard into a phone, this shows the Hatlas app the way the ICP actually
 * uses it: a portrait phone. Atlas DS (paper screen, glass-ish cards, Sora
 * numbers, Salvia green). Rubro-aware. Gentle scale/fade entrance (no 3D tilt).
 */
export function PhoneMockup() {
  const { data, vertical } = useVertical()
  const c = data.cards
  const fin = data.modules.finanzas

  const ref = useGsap<HTMLDivElement>((scope) => {
    gsap.fromTo(
      scope,
      { y: 30, scale: 0.97, autoAlpha: 0.6 },
      {
        y: 0,
        scale: 1,
        autoAlpha: 1,
        ease: 'power2.out',
        scrollTrigger: { trigger: scope, start: 'top 92%', end: 'top 55%', scrub: 0.4 },
      },
    )
  })

  return (
    <div className="phone" ref={ref} aria-hidden="true">
      <div className="phone__frame">
        <span className="phone__island" />
        <div className="phone__screen" key={vertical}>
          <div className="phone__status">
            <span>20:41</span>
            <span className="phone__status-r"><i /><i /><i className="bat" /></span>
          </div>

          <div className="phone__head">
            <span className="phone__live"><span /> PANEL · EN VIVO</span>
            <span className="phone__av">S</span>
          </div>

          <div className="phone__greet">Buenas noches, <em>Sam</em></div>

          <div className="phone__hero-kpi">
            <span className="phone__k-l">Ventas de hoy</span>
            <span className="phone__k-v"><span className="bs">Bs</span> {c.cobros.value}</span>
            <span className="phone__delta up">↑ 18% vs ayer</span>
          </div>

          <div className="phone__kpis">
            <div className="phone__kpi">
              <span className="phone__k-l">Posición</span>
              <span className="phone__k-v2"><span className="bs">Bs</span> {fin.amount}</span>
              <span className="phone__delta up">↑ 18%</span>
            </div>
            <div className="phone__kpi">
              <span className="phone__k-l">Margen</span>
              <span className="phone__k-v2">36%</span>
              <span className="phone__delta down">↓ 8%</span>
            </div>
          </div>

          <div className="phone__agent">
            <span className="phone__agent-ic"><Sparkles size={14} strokeWidth={1.75} /></span>
            <div className="phone__agent-body">
              <span className="phone__agent-l">Hatlas Agent</span>
              <span className="phone__agent-t">
                <em>{c.cliente.name}</em> no vuelve hace 23 días.
              </span>
              <span className="phone__agent-cta">Reactivar <ArrowRight size={12} strokeWidth={2} /></span>
            </div>
          </div>

          <div className="phone__tabs">
            <span className="is-on"><Receipt size={18} strokeWidth={1.6} /></span>
            <span><LineChart size={18} strokeWidth={1.6} /></span>
            <span><Boxes size={18} strokeWidth={1.6} /></span>
            <span><Users size={18} strokeWidth={1.6} /></span>
          </div>
        </div>
      </div>

      <style>{`
        .phone { width: min(300px, 78vw); margin: 0 auto; will-change: transform, opacity; }
        .phone__frame {
          position: relative;
          border-radius: 46px;
          background: linear-gradient(160deg, #26252b, #17161B);
          padding: 9px;
          box-shadow:
            0 2px 4px rgba(23,22,27,0.10),
            0 40px 70px -24px rgba(23,22,27,0.40),
            0 0 0 1px rgba(23,22,27,0.06),
            inset 0 0 0 1.5px rgba(255,255,255,0.06);
        }
        .phone__island {
          position: absolute;
          top: 20px; left: 50%; transform: translateX(-50%);
          width: 84px; height: 22px; border-radius: 999px;
          background: #0b0a0d; z-index: 3;
        }
        .phone__screen {
          position: relative;
          border-radius: 38px;
          overflow: hidden;
          background:
            radial-gradient(70% 40% at 80% 0%, rgba(143,188,164,0.16), transparent 70%),
            color-mix(in srgb, var(--surface) 92%, var(--bg));
          padding: 44px 14px 12px;
          display: flex;
          flex-direction: column;
          gap: 11px;
          font-family: var(--font-sans);
          color: var(--cream);
        }
        .phone__status {
          position: absolute; top: 15px; left: 0; right: 0;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 22px;
          font-family: var(--font-mono); font-size: 11px; font-weight: 600; color: var(--cream);
        }
        .phone__status-r { display: inline-flex; align-items: center; gap: 4px; }
        .phone__status-r i { width: 5px; height: 9px; border-radius: 1px; background: var(--cream); display: inline-block; }
        .phone__status-r i.bat { width: 16px; }

        .phone__head { display: flex; align-items: center; justify-content: space-between; }
        .phone__live {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: var(--font-mono); font-size: 9px; letter-spacing: 0.12em; color: var(--cream-meta);
        }
        .phone__live > span { width: 6px; height: 6px; border-radius: 999px; background: var(--gold); box-shadow: 0 0 0 3px rgba(62,124,91,0.16); }
        .phone__av {
          width: 28px; height: 28px; border-radius: 50%;
          display: inline-flex; align-items: center; justify-content: center;
          background: var(--gold-tint-12); border: 1px solid var(--gold-glow);
          font-family: var(--font-mono); font-size: 11px; font-weight: 600; color: var(--gold-deep);
        }
        .phone__greet { font-size: 14px; color: var(--cream-dim); }
        .phone__greet em { font-style: normal; font-weight: 600; color: var(--cream); }

        .phone__hero-kpi {
          display: flex; flex-direction: column; gap: 6px;
          padding: 14px; background: var(--surface); border: 1px solid var(--border);
          border-radius: 16px; box-shadow: 0 1px 2px rgba(23,22,27,0.05);
        }
        .phone__k-l { font-size: 12px; color: var(--cream-dim); }
        .phone__k-v { font-family: var(--font-display); font-weight: 700; font-size: 30px; letter-spacing: -0.03em; line-height: 1; color: var(--cream); }
        .phone__k-v .bs, .phone__k-v2 .bs { font-family: var(--font-sans); font-size: 14px; font-weight: 600; color: var(--cream-dim); margin-right: 3px; }
        .phone__k-v2 { font-family: var(--font-display); font-weight: 700; font-size: 20px; letter-spacing: -0.03em; line-height: 1; color: var(--cream); }
        .phone__delta { align-self: flex-start; font-family: var(--font-mono); font-size: 9.5px; padding: 2px 7px; border-radius: 999px; }
        .phone__delta.up { color: var(--ok); background: color-mix(in srgb, var(--ok) 12%, transparent); }
        .phone__delta.down { color: var(--danger); background: color-mix(in srgb, var(--danger) 10%, transparent); }

        .phone__kpis { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .phone__kpi {
          display: flex; flex-direction: column; gap: 6px;
          padding: 12px; background: var(--surface); border: 1px solid var(--border);
          border-radius: 14px; box-shadow: 0 1px 2px rgba(23,22,27,0.05);
        }

        .phone__agent {
          display: flex; gap: 10px;
          padding: 12px 13px;
          background:
            radial-gradient(120% 140% at 0% 0%, rgba(62,124,91,0.12), transparent 60%),
            #FFFFFF;
          border: 1px solid rgba(62,124,91,0.30);
          border-radius: 16px;
        }
        .phone__agent-ic {
          display: inline-flex; align-items: center; justify-content: center;
          width: 30px; height: 30px; flex-shrink: 0;
          background: var(--gold-tint-12); border: 1px solid var(--gold-glow);
          border-radius: 9px; color: var(--gold); align-self: flex-start;
        }
        .phone__agent-body { display: flex; flex-direction: column; gap: 3px; min-width: 0; }
        .phone__agent-l { font-family: var(--font-mono); font-size: 9px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gold); }
        .phone__agent-t { font-size: 12.5px; line-height: 1.4; color: var(--cream); }
        .phone__agent-t em { font-family: var(--font-sans); font-style: italic; font-weight: 600; color: var(--gold); }
        .phone__agent-cta { display: inline-flex; align-items: center; gap: 4px; margin-top: 2px; font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.06em; color: var(--gold-deep); }

        .phone__tabs {
          margin-top: auto;
          display: flex; align-items: center; justify-content: space-around;
          padding: 12px 6px 6px;
          border-top: 1px solid var(--border-soft);
          color: var(--cream-meta);
        }
        .phone__tabs .is-on { color: var(--gold); }

        @media (prefers-reduced-motion: reduce) {
          .phone { opacity: 1 !important; transform: none !important; }
        }
      `}</style>
    </div>
  )
}
