/**
 * Aurora — ambient gold light wash behind hero.
 *
 * Iteration history (lessons learned):
 *   v1 (legacy dist) — cx=1300 cy=600. Bright but cropped off the right edge
 *      of centered viewports, looked like a half-sun off-screen.
 *   v2 (Sprint 3.6)  — cx=900 cy=400. Centered behind text. RESULT: the gold
 *      wash sat directly behind the subhead body copy → body text dissolved
 *      into the glow ("una panadería o un comercio…" became unreadable).
 *   v3 (this)        — cx=820 cy=720, AND peak alphas reduced 30%. The glow
 *      now anchors UNDER the mockup card (which becomes the "light source"
 *      narratively), while the H1 + subhead + CTAs above sit on the dark
 *      upper portion of the hero. Body text contrast preserved.
 *
 * Rule for any future move: aurora may never overlap body text. The H1 sits
 * around y=240-320 in viewBox units, the subhead at y=420-500. So the glow's
 * top edge (cy - ry * 0.9) must stay below ~y=560.
 */
export function Aurora() {
  return (
    <div className="aurora-stage" aria-hidden="true">
      <svg
        className="aurora-svg"
        viewBox="0 0 1600 900"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="aurora-diff" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(201,169,97,0.16)" />
            <stop offset="100%" stopColor="rgba(201,169,97,0)" />
          </radialGradient>
          <radialGradient id="aurora-outer" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(201,169,97,0.30)" />
            <stop offset="100%" stopColor="rgba(201,169,97,0)" />
          </radialGradient>
          <radialGradient id="aurora-mid" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(217,185,113,0.44)" />
            <stop offset="100%" stopColor="rgba(201,169,97,0)" />
          </radialGradient>
          <radialGradient id="aurora-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,220,140,0.50)" />
            <stop offset="100%" stopColor="rgba(217,185,113,0)" />
          </radialGradient>
          <filter id="blur-60"><feGaussianBlur stdDeviation="60" /></filter>
          <filter id="blur-40"><feGaussianBlur stdDeviation="40" /></filter>
          <filter id="blur-22"><feGaussianBlur stdDeviation="22" /></filter>
          <filter id="blur-5"><feGaussianBlur stdDeviation="5" /></filter>
        </defs>

        <ellipse className="aurora-diff"  cx="820" cy="720" rx="720" ry="280" fill="url(#aurora-diff)"  filter="url(#blur-60)" />
        <ellipse className="aurora-outer" cx="820" cy="720" rx="520" ry="200" fill="url(#aurora-outer)" filter="url(#blur-40)" />
        <ellipse className="aurora-mid"   cx="820" cy="720" rx="340" ry="130" fill="url(#aurora-mid)"   filter="url(#blur-22)" />
        <ellipse className="aurora-core"  cx="820" cy="720" rx="160" ry="55"  fill="url(#aurora-core)"  filter="url(#blur-5)" />
      </svg>

      <style>{`
        .aurora-stage {
          position: absolute;
          inset: 0;
          z-index: 1;
          isolation: isolate;
          pointer-events: none;
        }
        .aurora-svg { width: 100%; height: 100%; }
        /*
         * Tamed (per emil + impeccable consult): was 4 layers each with its
         * own drift animation (corePulse/midDrift/outerDrift/diffDrift) =
         * four continuous motions competing. Now only the core breathes,
         * very slowly and subtly; outer/mid/diff are static. One gentle
         * light source, not a lava lamp. Reduced motion stops it entirely.
         */
        .aurora-svg .aurora-core {
          will-change: opacity, transform;
          transform-origin: 820px 720px;
          animation: corePulse 18s ease-in-out infinite;
        }

        @keyframes corePulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.88; transform: scale(1.012); }
        }

        @media (prefers-reduced-motion: reduce) {
          .aurora-svg .aurora-core { animation: none; }
        }
      `}</style>
    </div>
  )
}
