/**
 * BrandLockup — el logo oficial de Hatlas, desde los archivos de marca.
 *
 * La marca entrega tres lockups (marca + wordmark "Hatlas"); son los assets
 * entregados, nunca una recreación:
 *
 *   negro   → todo negro, sin contenedor. Primario sobre las superficies papel.
 *   blanco  → invertido (blanco). Para fondos oscuros / de acento.
 *   rounded → marca en su círculo oscuro + wordmark negro. Alternativo.
 *
 * REGLA DEL DS: se ELIGE la versión por tema; nunca se recolorea con
 * `filter: invert()` ni `mix-blend-mode`. Por eso el swap va con <picture> +
 * `prefers-color-scheme`, que es el mismo criterio que usa atlas.css cuando
 * no hay `data-theme` explícito.
 *
 * Alturas de referencia del DS: 26px topbar · 24px footer.
 * Se dimensiona por ALTO para que cada archivo conserve su relación de aspecto.
 */

const ASSETS = {
  negro: { src: '/hatlas-logo.png', dark: '/hatlas-logo-white.png', w: 690, h: 202 },
  blanco: { src: '/hatlas-logo-white.png', dark: '/hatlas-logo-white.png', w: 694, h: 209 },
  rounded: { src: '/hatlas-logo-round.png', dark: '/hatlas-logo-white.png', w: 738, h: 191 },
} as const

export function BrandLockup({
  height = 32,
  variant = 'negro',
}: {
  height?: number
  variant?: keyof typeof ASSETS
}) {
  const { src, dark, w, h } = ASSETS[variant]
  const width = Math.round((w / h) * height)
  return (
    <picture>
      {/* El tema explícito manda sobre la preferencia del SO. */}
      <source srcSet={dark} media="(prefers-color-scheme: dark)" />
      <img
        src={src}
        alt="Hatlas"
        width={width}
        height={height}
        draggable={false}
        style={{ display: 'block', height, width: 'auto', flexShrink: 0 }}
      />
    </picture>
  )
}
