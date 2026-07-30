import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let registered = false
function ensureRegistered() {
  if (registered) return
  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
    registered = true
  }
}

/**
 * Tiny `useGsap.context` wrapper.
 * Auto-cleans tweens & ScrollTriggers when the component unmounts.
 */
export function useGsap<T extends HTMLElement = HTMLElement>(
  setup: (scope: T) => void,
  deps: React.DependencyList = [],
) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    ensureRegistered()
    if (!ref.current) return
    // Global reduced-motion guard: skip ALL GSAP entrances/parallax. Elements
    // rest at their visible CSS default (components that hide via gsap.set stay
    // visible; the one that hides via CSS — Sistema cards — has a CSS override).
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return
    }
    const ctx = gsap.context(() => setup(ref.current as T), ref.current)
    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return ref
}

export { gsap, ScrollTrigger }
