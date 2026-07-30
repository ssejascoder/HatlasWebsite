import { useEffect, useRef, useState } from 'react'

/** Sprite grain texture (CLAUDE.md signature). */
export function Grain() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <style>{`
        .grain {
          position: fixed;
          inset: 0;
          z-index: 1000;
          pointer-events: none;
          opacity: 0.035;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1   0 0 0 0 1   0 0 0 0 1   0 0 0 1 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
        }
      `}</style>
    </>
  )
}

/** Reading progress strip pinned at the top, gold gradient. */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const tick = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      const pct = max <= 0 ? 0 : Math.min(1, Math.max(0, window.scrollY / max))
      if (ref.current) ref.current.style.transform = `scaleX(${pct})`
    }
    tick()
    window.addEventListener('scroll', tick, { passive: true })
    window.addEventListener('resize', tick)
    return () => {
      window.removeEventListener('scroll', tick)
      window.removeEventListener('resize', tick)
    }
  }, [])
  return (
    <>
      <div ref={ref} className="scroll-progress" aria-hidden="true" />
      <style>{`
        .scroll-progress {
          position: fixed;
          inset: 0 0 auto 0;
          z-index: 200;
          height: 2px;
          background: linear-gradient(90deg, #5AA07C 0%, #3E7C5B 50%, #2F5E45 100%);
          transform: scaleX(0);
          transform-origin: 0 50%;
          pointer-events: none;
        }
      `}</style>
    </>
  )
}

/**
 * Cursor halo — tamed (per emil + impeccable consult).
 *
 * Changes from the original:
 *   - Smaller (360px, was 640px) — a focused accent, not a floodlight
 *   - Dimmer (peak opacity 0.5, was 1) — gold stays an accent, not ambient
 *   - Spring-lag: instead of writing the cursor position directly (which
 *     emil flags as "artificial, lacks motion"), we lerp toward the target
 *     in a rAF loop. The glow trails the cursor with momentum, so it reads
 *     as an intentional light source rather than a sticker glued to the
 *     pointer.
 *   - Uses transform (GPU) instead of left/top (layout).
 *
 * Disabled on touch + reduced motion + small screens.
 */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [active, setActive] = useState(false)
  const HALF = 180 // half of 360px, to center the glow on the cursor

  useEffect(() => {
    if (typeof window === 'undefined') return
    const disabled = window.matchMedia(
      '(max-width: 980px), (pointer: coarse), (prefers-reduced-motion: reduce)',
    ).matches
    if (disabled) return

    // Target = real cursor; current = lerped position the glow actually sits at
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const current = { x: target.x, y: target.y }
    let raf = 0
    let running = false

    const tick = () => {
      // Lerp factor 0.12 → soft trailing momentum (spring-like, no library)
      current.x += (target.x - current.x) * 0.12
      current.y += (target.y - current.y) * 0.12
      if (ref.current) {
        ref.current.style.transform =
          `translate3d(${current.x - HALF}px, ${current.y - HALF}px, 0)`
      }
      const dist = Math.hypot(target.x - current.x, target.y - current.y)
      if (dist > 0.5) {
        raf = requestAnimationFrame(tick)
      } else {
        running = false // settle, stop the loop until next move
      }
    }
    const ensureRunning = () => {
      if (!running) {
        running = true
        raf = requestAnimationFrame(tick)
      }
    }

    const onMove = (e: MouseEvent) => {
      setActive(true)
      target.x = e.clientX
      target.y = e.clientY
      ensureRunning()
    }
    const onLeave = () => setActive(false)
    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={ref} className={`cursor-glow ${active ? 'cursor-glow--active' : ''}`} aria-hidden="true" />
      <style>{`
        .cursor-glow {
          position: fixed; top: 0; left: 0;
          width: 360px; height: 360px;
          z-index: 50;
          opacity: 0;
          pointer-events: none;
          mix-blend-mode: multiply;
          background: radial-gradient(circle, rgba(90,160,124,0.16) 0%, rgba(90,160,124,0.05) 34%, transparent 68%);
          border-radius: 50%;
          transition: opacity 400ms var(--ease-out-strong);
          will-change: transform;
        }
        .cursor-glow--active { opacity: 0.55; }
        @media (max-width: 980px), (prefers-reduced-motion: reduce), (pointer: coarse) {
          .cursor-glow { display: none !important; }
        }
      `}</style>
    </>
  )
}
