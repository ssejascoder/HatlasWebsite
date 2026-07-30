import { TwentyDashboardMockup } from './TwentyDashboardMockup'

/**
 * LaptopMockup — a tilted MacBook-style frame with the Hatlas dashboard
 * rendered inside the screen.
 *
 * Why CSS 3D over an SVG or PNG illustration:
 *   - Crisp at every viewport (no asset to swap)
 *   - Animatable per element (parallax, hover lift)
 *   - The inside is real HTML — we can update the dashboard copy without
 *     re-rendering an asset
 *
 * The perspective transform (rotateX 6deg, rotateY -8deg) gives a "viewed
 * from slightly above and the right" angle, which is the standard premium
 * marketing convention and reads as 3D without being aggressive.
 *
 * Reduced-motion: respects prefers-reduced-motion by flattening rotateY to
 * 0 — the laptop becomes a head-on frame. The dashboard stays readable.
 */

interface Props {
  /** Pass true to flatten the perspective (e.g. when in viewport on mobile). */
  flat?: boolean
}

export function LaptopMockup({ flat = false }: Props) {
  return (
    <div className={`laptop ${flat ? 'laptop--flat' : ''}`} aria-hidden="true">
      <div className="laptop__stage">
        <div className="laptop__lid">
          {/* Camera notch */}
          <div className="laptop__notch" />

          {/* The screen surface */}
          <div className="laptop__screen">
            <TwentyDashboardMockup />
            {/* Glare overlay — sweep of light across the glass */}
            <div className="laptop__glare" />
          </div>

          {/* Bezel ring */}
          <div className="laptop__bezel-shine" />
        </div>

        {/* Base / keyboard plate (visible as a thin sliver under the lid) */}
        <div className="laptop__base">
          <div className="laptop__base-notch" />
        </div>

        {/* Soft contact shadow under the laptop */}
        <div className="laptop__shadow" />
      </div>

      <style>{`
        .laptop {
          /* The perspective container — all 3D math happens against this */
          position: relative;
          perspective: 1400px;
          perspective-origin: 50% 0%;
          width: 100%;
          max-width: 880px;
          margin-inline: auto;
        }
        .laptop__stage {
          position: relative;
          transform-style: preserve-3d;
          transform: rotateX(6deg) rotateY(-8deg);
        }
        .laptop--flat .laptop__stage {
          transform: rotateX(2deg) rotateY(0deg);
        }
        @media (prefers-reduced-motion: reduce) {
          .laptop__stage {
            transform: rotateX(2deg) rotateY(0deg);
          }
        }

        /* Screen lid */
        .laptop__lid {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          padding: 14px;
          background: linear-gradient(160deg, #1d1a14 0%, #0f0d09 50%, #14110b 100%);
          border-radius: 18px 18px 4px 4px;
          border: 1px solid rgba(201, 169, 97, 0.22);
          box-shadow:
            /* Inner highlight on top edge — bezel catches light */
            inset 0 1px 0 rgba(201, 169, 97, 0.20),
            /* Outer ambient glow */
            0 30px 80px -20px rgba(0, 0, 0, 0.75),
            0 6px 18px -6px rgba(0, 0, 0, 0.50),
            /* Gold halo (Hatlas signature) */
            0 0 120px -40px rgba(201, 169, 97, 0.35);
          /* Slight depth — sits forward in 3D space */
          transform: translateZ(0);
        }
        .laptop__notch {
          position: absolute;
          top: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 64px;
          height: 6px;
          background: #050402;
          border-radius: 0 0 8px 8px;
          z-index: 2;
        }
        .laptop__screen {
          position: relative;
          width: 100%;
          height: 100%;
          background: #050402;
          border-radius: 6px;
          overflow: hidden;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04);
        }
        .laptop__glare {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(
            120deg,
            transparent 35%,
            rgba(255, 240, 200, 0.04) 50%,
            transparent 65%
          );
          mix-blend-mode: overlay;
        }
        .laptop__bezel-shine {
          position: absolute;
          inset: 0;
          pointer-events: none;
          border-radius: inherit;
          background: linear-gradient(
            165deg,
            rgba(255, 255, 255, 0.06) 0%,
            transparent 25%,
            transparent 70%,
            rgba(255, 255, 255, 0.04) 100%
          );
          mix-blend-mode: overlay;
        }

        /* Base — narrow strip below the lid suggesting the keyboard plate */
        .laptop__base {
          position: relative;
          width: 104%;
          height: 14px;
          margin: -2px auto 0;
          background: linear-gradient(180deg, #16130e 0%, #0a0907 100%);
          border-radius: 0 0 14px 14px;
          border: 1px solid rgba(201, 169, 97, 0.15);
          border-top: none;
          transform: translateZ(-8px);
          box-shadow:
            inset 0 1px 0 rgba(201, 169, 97, 0.12),
            0 18px 40px -10px rgba(0, 0, 0, 0.60);
        }
        .laptop__base-notch {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 90px;
          height: 4px;
          background: #050402;
          border-radius: 0 0 6px 6px;
        }

        /* Contact shadow */
        .laptop__shadow {
          position: absolute;
          left: 50%;
          bottom: -36px;
          width: 90%;
          height: 60px;
          transform: translateX(-50%);
          background: radial-gradient(
            ellipse at center,
            rgba(0, 0, 0, 0.55) 0%,
            transparent 70%
          );
          filter: blur(20px);
          pointer-events: none;
        }
      `}</style>
    </div>
  )
}
