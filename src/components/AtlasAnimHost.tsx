import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { initAtlasAnim, refreshAtlasAnim } from '../lib/atlas'

/**
 * Monta el contrato `data-anim` del design system y lo refresca en cada cambio
 * de ruta (las rutas interiores llegan por `lazy()`, así que su DOM no existe
 * cuando corre el init). `refresh()` es idempotente: ignora lo ya animado.
 */
export function AtlasAnimHost() {
  const { pathname } = useLocation()

  useEffect(() => {
    let raf = 0
    initAtlasAnim().then(() => {
      raf = requestAnimationFrame(refreshAtlasAnim)
    })
    return () => cancelAnimationFrame(raf)
  }, [pathname])

  return null
}
