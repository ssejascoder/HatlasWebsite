/**
 * BrandLockup — the official Hatlas logo, straight from the brand files.
 *
 * The brand ships three lockups (mark + "Hatlas" wordmark); these are the
 * delivered assets, never a recreation:
 *
 *   negro   → all-black, no container. Primary on the paper surfaces.
 *   blanco  → reversed (white). For dark/ink backgrounds.
 *   rounded → mark inside its dark circle + black wordmark. Alternate.
 *
 * Sized by HEIGHT so each file keeps its own intrinsic aspect ratio.
 */

const ASSETS = {
  negro: { src: '/hatlas-logo.png', w: 690, h: 202 },
  blanco: { src: '/hatlas-logo-white.png', w: 694, h: 209 },
  rounded: { src: '/hatlas-logo-round.png', w: 738, h: 191 },
} as const

export function BrandLockup({
  height = 32,
  variant = 'negro',
}: {
  height?: number
  variant?: keyof typeof ASSETS
}) {
  const { src, w, h } = ASSETS[variant]
  return (
    <img
      src={src}
      alt="Hatlas"
      width={Math.round((w / h) * height)}
      height={height}
      draggable={false}
      style={{ display: 'block', height, width: 'auto', flexShrink: 0 }}
    />
  )
}
