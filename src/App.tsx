import { useEffect, useRef } from 'react'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { ActionsMarquee } from './components/ActionsMarquee'
import { TrustStrip } from './components/TrustStrip'
import { Sistema } from './components/Sistema'
import { ConnectsWith } from './components/ConnectsWith'
import { Analista } from './components/Analista'
import { Operadores } from './components/Operadores'
import { Onboarding } from './components/Onboarding'
import { Pricing } from './components/Pricing'
import { FAQ } from './components/FAQ'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { Grain, ScrollProgress, CursorGlow } from './components/Chrome'
import GradualBlur from './components/GradualBlur'
import { ScrollTrigger } from './lib/useGsap'
import { useReveal } from './lib/useReveal'

/**
 * Landing structure (post-audit, Sprint 1-3 applied).
 *
 *   Nav + chrome (Grain, ScrollProgress, CursorGlow)
 *   ──────────────
 *   1. Hero          — cinematic center, H1 ≤ 2 lines
 *   2. TrustStrip    — merged from old TrustBand + Stats
 *   3. Sistema       — 6-module bento (id #sistema, was #modular)
 *   4. Analista IA   — chat-style transcript + 3 insight cards
 *   5. Operadores    — single editorial quote + 3 proof numerals
 *   6. Pricing       — 2 tiers (Starter + Gold-featured Crecimiento) + Enterprise inline
 *   7. FAQ
 *   8. FinalCTA
 *   9. Footer
 *
 * Removed vs old:
 *   - Marquee section (decorative, no conversion)
 *   - Verticales section (2/3 in waitlist → product-incomplete signal)
 *   - Stats section (merged into TrustStrip)
 *   - TrustBand (merged into TrustStrip)
 *   - Sticky CTA (deferred; final CTA + sticky nav are enough)
 *   - "Próximamente: …" footers
 *
 * Total content sections: 9 (was 11). Visual chrome unchanged.
 */
export function App() {
  // Refresh ScrollTrigger once fonts settle so triggers don't misfire on
  // initial layout shift.
  useEffect(() => {
    if (typeof document === 'undefined') return
    if (document.fonts?.ready) {
      document.fonts.ready.then(() => ScrollTrigger.refresh())
    }
  }, [])

  // texts-reveal (18) for the non-GSAP landing sections (Onboarding, ConnectsWith).
  const mainRef = useRef<HTMLElement>(null)
  useReveal(mainRef)

  return (
    <>
      <Nav />
      <Grain />
      <ScrollProgress />
      <CursorGlow />
      <main id="top" ref={mainRef}>
        <Hero />
        <ActionsMarquee />
        <TrustStrip />
        <Sistema />
        <ConnectsWith />
        <Analista />
        <Operadores />
        <Onboarding />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      {/* Premium "reading edge": soft gradual blur at the bottom of the viewport.
          zIndex 40 (→140 page) sits above content but below the WhatsApp FAB (150)
          and the mobile drawer (200) so neither gets blurred. */}
      <GradualBlur
        target="page"
        position="bottom"
        height="5.5rem"
        strength={2}
        divCount={6}
        curve="bezier"
        opacity={1}
        zIndex={40}
      />
    </>
  )
}
