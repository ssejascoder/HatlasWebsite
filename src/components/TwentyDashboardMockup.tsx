/**
 * TwentyDashboardMockup — the actual product screenshot embedded inside the
 * monitor frame.
 *
 * Previously this was hand-coded HTML reproducing the dashboard. The user
 * clarified they wanted the LITERAL screenshot embedded, not a recreation.
 * So now we just render `/dashboard.png` and let the MonitorMockup frame it.
 *
 * The image lives in `landing/public/dashboard.png` (1024 × 872). When the
 * real product page changes, swap the PNG; no code update needed.
 */
export function TwentyDashboardMockup() {
  return (
    <img
      className="dash-img"
      src="/dashboard.png"
      alt=""
      aria-hidden="true"
      draggable={false}
    />
  )
}

/* Inline styles — the image must fill the monitor's inner screen without
   distortion. `object-fit: cover` would crop; the source already matches
   the screen's aspect ratio, so `cover` is safe and avoids letterboxing. */
const styleTag = (
  <style>{`
    .dash-img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
    }
  `}</style>
)

// Inject styles once at module load (cheaper than a per-render style tag).
if (typeof document !== 'undefined' && !document.getElementById('dash-img-styles')) {
  const tag = document.createElement('style')
  tag.id = 'dash-img-styles'
  tag.textContent = `
    .dash-img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
    }
  `
  document.head.appendChild(tag)
}

// Prevents "unused variable" warning on the JSX <style> above
void styleTag
