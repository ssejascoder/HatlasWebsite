import { useEffect, type RefObject } from 'react'

/**
 * transitions-dev "Texts reveal" (18) driver. Observes `.t-reveal` elements
 * inside `scopeRef` and adds `.is-revealed` when they scroll into view (once).
 * Reduced-motion reveals everything immediately. Pass deps to re-scan when the
 * rendered content changes (e.g. route param).
 */
export function useReveal(
  scopeRef: RefObject<HTMLElement | null>,
  deps: React.DependencyList = [],
) {
  useEffect(() => {
    const root = scopeRef.current
    if (!root) return
    const els = Array.from(root.querySelectorAll<HTMLElement>('.t-reveal'))
    if (!els.length) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((el) => el.classList.add('is-revealed'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-revealed')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
