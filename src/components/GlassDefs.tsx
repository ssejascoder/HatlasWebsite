/**
 * GlassDefs — the SVG filter that gives Atlas "Liquid Glass" its refraction.
 *
 * `.glass` surfaces reference `backdrop-filter: url(#lg-refract) ...`. The
 * filter builds fractal noise, softens it, then uses it as a displacement map
 * so whatever sits behind the panel bends at the edges like a thick lens.
 *
 * Mounted once, globally (see main.tsx). Zero layout footprint. Chrome/Safari
 * honor url() backdrop filters; Firefox falls back to plain blur (declared in
 * the CSS shorthand), so the panel still reads as frosted glass there.
 */
export function GlassDefs() {
  return (
    <svg
      aria-hidden="true"
      width="0"
      height="0"
      style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}
    >
      <defs>
        <filter
          id="lg-refract"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.011 0.011"
            numOctaves={2}
            seed={7}
            result="n"
          />
          <feGaussianBlur in="n" stdDeviation={1.3} result="nb" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="nb"
            scale={7}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  )
}
