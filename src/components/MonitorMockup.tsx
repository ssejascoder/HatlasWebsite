import { TwentyDashboardMockup } from './TwentyDashboardMockup'

/**
 * MonitorMockup — Apple Pro Display XDR-style monitor with a Pro Stand.
 *
 * Replaces the earlier tilted MacBook (LaptopMockup). The user requested this
 * specific shape: a thick-bezel pro display with an aluminum neck and an
 * oval base, sitting head-on (not tilted).
 *
 * Why head-on:
 *   The dashboard content inside is dense (4 KPIs + header nav + main chart
 *   panel). A tilted perspective would distort text and make small numbers
 *   harder to read. Head-on is honest about being a product preview.
 *
 * Aluminum tone:
 *   We use a warm gold-tinted silver (warm cream-meta hue) so the stand
 *   reads as Editorial Monochrome's "silver" tier from CLAUDE.md §4.9 —
 *   not a stock aluminum, distinctively in-system.
 */

export function MonitorMockup() {
  return (
    <div className="monitor" aria-hidden="true">
      {/* Screen */}
      <div className="monitor__display">
        {/* Camera notch on top center */}
        <div className="monitor__notch" />

        {/* The actual viewport */}
        <div className="monitor__screen">
          <TwentyDashboardMockup />
          <div className="monitor__glare" />
        </div>

        {/* Bezel highlight */}
        <div className="monitor__bezel-shine" />
      </div>

      {/* Stand — neck + oval base */}
      <div className="monitor__stand-wrap">
        <div className="monitor__stand-neck" />
        <div className="monitor__stand-base">
          <div className="monitor__stand-base-shine" />
        </div>
      </div>

      {/* Contact shadow */}
      <div className="monitor__shadow" />

      <style>{`
        .monitor {
          position: relative;
          width: 100%;
          max-width: 900px;
          margin-inline: auto;
          /* Slight rotateX gives just enough 3D for the gold halo to read,
             without distorting the dashboard typography */
          perspective: 1800px;
        }

        /* ─── Screen lid ─── */
        .monitor__display {
          position: relative;
          width: 100%;
          /* Aspect ratio matches the embedded dashboard.png (1024 × 872) so
             the screenshot fills the screen without crop or letterbox. */
          aspect-ratio: 1024 / 872;
          padding: 16px 16px 22px;
          background:
            linear-gradient(180deg, #131210 0%, #0a0907 100%);
          border-radius: 14px;
          border: 1px solid rgba(201, 169, 97, 0.18);
          box-shadow:
            /* Top edge catches gold light */
            inset 0 1px 0 rgba(201, 169, 97, 0.22),
            /* Inner bezel deepens to black around the screen */
            inset 0 0 0 1px rgba(0, 0, 0, 0.40),
            /* Outer ambient */
            0 40px 80px -20px rgba(0, 0, 0, 0.75),
            0 8px 24px -8px rgba(0, 0, 0, 0.55),
            /* Hatlas signature halo */
            0 0 140px -50px rgba(201, 169, 97, 0.40);
        }
        .monitor__notch {
          position: absolute;
          top: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 18px;
          height: 5px;
          background: #050402;
          border-radius: 0 0 5px 5px;
          z-index: 2;
        }
        .monitor__screen {
          position: relative;
          width: 100%;
          height: 100%;
          background: #050402;
          border-radius: 4px;
          overflow: hidden;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04);
        }
        .monitor__glare {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(
            115deg,
            transparent 38%,
            rgba(255, 240, 200, 0.025) 50%,
            transparent 62%
          );
          mix-blend-mode: overlay;
        }
        .monitor__bezel-shine {
          position: absolute;
          inset: 0;
          pointer-events: none;
          border-radius: inherit;
          background: linear-gradient(
            160deg,
            rgba(255, 255, 255, 0.05) 0%,
            transparent 22%,
            transparent 78%,
            rgba(255, 255, 255, 0.03) 100%
          );
          mix-blend-mode: overlay;
        }

        /* ─── Stand wrap (centers neck + base under monitor) ─── */
        .monitor__stand-wrap {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: -2px;
        }

        /* Neck — narrow vertical column connecting display to base */
        .monitor__stand-neck {
          width: 14%;
          height: 64px;
          background:
            linear-gradient(180deg,
              #1a1a1a 0%,
              #1a1a1a 6%,
              #6a6660 12%,
              #b6b0a6 30%,
              #948f81 55%,
              #6a6660 85%,
              #4a4641 100%
            );
          /* Slight trapezoidal taper using clip-path */
          clip-path: polygon(8% 0, 92% 0, 96% 100%, 4% 100%);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.10),
            inset -1px 0 0 rgba(0, 0, 0, 0.40),
            inset 1px 0 0 rgba(255, 255, 255, 0.06);
        }

        /* Base — wide oval foot, aluminum gradient with sheen */
        .monitor__stand-base {
          position: relative;
          width: 34%;
          height: 24px;
          margin-top: -4px;
          border-radius: 50% / 100%;
          background:
            linear-gradient(180deg,
              #4a4641 0%,
              #847e72 18%,
              #b6b0a6 45%,
              #948f81 70%,
              #5a564f 100%
            );
          box-shadow:
            /* Inner highlight along the top edge */
            inset 0 1px 0 rgba(255, 255, 255, 0.30),
            /* Inner shadow under */
            inset 0 -2px 4px rgba(0, 0, 0, 0.45),
            /* Cast shadow under base */
            0 6px 14px -4px rgba(0, 0, 0, 0.55);
        }
        .monitor__stand-base-shine {
          position: absolute;
          top: 4px;
          left: 25%;
          right: 25%;
          height: 4px;
          border-radius: 50%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.40) 50%,
            transparent 100%
          );
          filter: blur(2px);
        }

        /* Soft halo under the whole rig */
        .monitor__shadow {
          position: absolute;
          left: 50%;
          bottom: -32px;
          width: 86%;
          height: 50px;
          transform: translateX(-50%);
          background: radial-gradient(
            ellipse at center,
            rgba(0, 0, 0, 0.55) 0%,
            transparent 70%
          );
          filter: blur(18px);
          pointer-events: none;
        }

        @media (prefers-reduced-motion: reduce) {
          /* No motion changes — this is decorative chrome */
        }
      `}</style>
    </div>
  )
}
