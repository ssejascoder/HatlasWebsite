import { gsap, ScrollTrigger } from './useGsap'

/**
 * Puente entre el contrato `data-anim` del design system y el GSAP del sitio.
 *
 * `atlas-anim.js` es un archivo UMD que espera `window.gsap` / `window.ScrollTrigger`.
 * Acá GSAP viene de npm y vive en el scope del módulo, así que sin este puente
 * el archivo reintentaría 50 veces y caería en su red de seguridad de 1200 ms:
 * el motion quedaría muerto SIN ningún error visible.
 *
 * El import es dinámico a propósito — un import estático se izaría por encima
 * de la asignación de los globals y el archivo se evaluaría sin encontrarlos.
 *
 * `autoSections: false` es permanente: las secciones del sitio ya declaran su
 * propia entrada (ContainerScroll con scrub, `.t-reveal`, tweens por componente),
 * y el fade-up automático las animaría dos veces.
 */

type AtlasAnim = {
  init: (opts?: Record<string, unknown>) => void
  refresh: (scope?: Element | null) => void
}

declare global {
  interface Window {
    gsap?: typeof gsap
    ScrollTrigger?: typeof ScrollTrigger
    atlasAnim?: AtlasAnim
  }
}

let started: Promise<void> | null = null

/** Monta el contrato una sola vez. Idempotente. */
export function initAtlasAnim(): Promise<void> {
  if (started) return started
  started = (async () => {
    if (typeof window === 'undefined') return
    window.gsap ??= gsap
    window.ScrollTrigger ??= ScrollTrigger
    // @ts-expect-error — se vendorea tal cual del DS, sin tipos propios
    await import('./atlas-anim.js')
    window.atlasAnim?.init({ autoSections: false })
  })()
  return started
}

/** Llamalo después de renderizar contenido nuevo (cambio de ruta, lazy chunks). */
export function refreshAtlasAnim(): void {
  window.atlasAnim?.refresh()
}
