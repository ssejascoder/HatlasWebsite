import type { ReactNode } from 'react'
import { useGsap, gsap } from '../lib/useGsap'

/**
 * ContainerScroll — the Aceternity "container scroll" reveal, re-authored for
 * this codebase. The original was Tailwind + framer-motion + a dark #222 frame;
 * this project has no Tailwind and already ships GSAP, so the same effect (a 3D
 * card that un-tilts and settles as it scrolls into view) is driven by GSAP
 * ScrollTrigger scrub, styled to the Atlas Liquid Glass DS: a glass frame around
 * a solid product screen. Reduced-motion users get the resting (flat) state via
 * useGsap's global guard.
 */
export function ContainerScroll({
  titleComponent,
  children,
}: {
  titleComponent: ReactNode
  children: ReactNode
}) {
  const ref = useGsap<HTMLDivElement>((scope) => {
    const card = scope.querySelector<HTMLElement>('.cscroll__card')
    const header = scope.querySelector<HTMLElement>('.cscroll__header')
    if (!card) return
    const mobile = window.matchMedia('(max-width: 768px)').matches

    if (mobile) {
      // No 3D tilt on a narrow full-width card (it reads as broken). A gentle
      // scale-in as the card rises into view is enough.
      gsap.fromTo(
        card,
        { scale: 0.96, y: 26 },
        {
          scale: 1,
          y: 0,
          ease: 'none',
          scrollTrigger: { trigger: card, start: 'top 94%', end: 'top 52%', scrub: 0.5 },
        },
      )
      return
    }

    // Desktop: the card un-tilts as it rises, landing FLAT exactly when it is
    // centered in the viewport ('center center'), not far below.
    const st = { trigger: card, start: 'top bottom', end: 'center center', scrub: 0.5 }
    gsap.fromTo(
      card,
      { rotateX: 26, scale: 1.06 },
      { rotateX: 0, scale: 1, ease: 'none', scrollTrigger: st },
    )
    if (header) {
      gsap.fromTo(header, { y: 0 }, { y: -50, ease: 'none', scrollTrigger: st })
    }
  })

  return (
    <div className="cscroll" ref={ref}>
      <div className="cscroll__inner">
        <div className="cscroll__header">{titleComponent}</div>
        <div className="cscroll__card">
          <div className="cscroll__screen">{children}</div>
        </div>
      </div>

      <style>{`
        .cscroll { position: relative; }
        .cscroll__inner { perspective: 1000px; }
        .cscroll__header {
          max-width: 720px;
          margin: 0 auto 26px;
          text-align: center;
          will-change: transform;
        }
        .cscroll__card {
          position: relative;
          max-width: 1040px;
          margin: 0 auto;
          padding: 10px;
          border-radius: 30px;
          transform-origin: center top;
          transform-style: preserve-3d;
          background: var(--glass-strong);
          -webkit-backdrop-filter: blur(24px) saturate(1.8) brightness(1.06);
          backdrop-filter: url(#lg-refract) blur(24px) saturate(1.8) brightness(1.06);
          border: 1px solid var(--glass-border);
          box-shadow:
            0 2px 4px rgba(23, 22, 27, 0.05),
            0 40px 90px -30px rgba(23, 22, 27, 0.32),
            0 0 80px rgba(90, 160, 124, 0.14),
            inset 0 1.5px 1.5px var(--glass-hi);
          will-change: transform;
        }
        .cscroll__screen {
          height: clamp(340px, 52vh, 560px);
          border-radius: 22px;
          overflow: hidden;
          background: #FFFFFF;
          border: 1px solid var(--hairline);
        }
        .cscroll__screen > * { height: 100%; }

        @media (max-width: 768px) {
          .cscroll__card { border-radius: 22px; padding: 6px; }
          .cscroll__screen { border-radius: 16px; height: clamp(440px, 78vh, 600px); }
          .cscroll__header { margin-bottom: 18px; }
        }
      `}</style>
    </div>
  )
}
