import { useVertical } from '../lib/VerticalContext'

/**
 * PopNumber — transitions-dev "Number pop-in" (02), React-idiomatic.
 *
 * Renders a numeric string as per-character spans. The wrapper is keyed to the
 * active rubro, so React re-mounts it on every toggle and the CSS
 * `.t-digit-group.is-animating` animation (global.css) replays — each digit
 * rises in from below with a brief blur, the last two staggered.
 *
 * Used for the hero "Cobros" value, which changes per rubro. Reduced-motion
 * users get the value with no animation (guarded in global.css).
 */
export function PopNumber({ value }: { value: string }) {
  const { vertical } = useVertical()
  const chars = value.split('')
  return (
    <span className="t-digit-group is-animating" key={vertical}>
      {chars.map((ch, i) => {
        const stagger =
          i === chars.length - 2 ? 1 : i === chars.length - 1 ? 2 : undefined
        return (
          <span className="t-digit" data-stagger={stagger} key={i}>
            {ch}
          </span>
        )
      })}
    </span>
  )
}
