import { type ReactNode, type CSSProperties } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

interface ScrollRevealProps {
  children: ReactNode
  /** Delay before the animation starts, e.g. '0ms', '100ms', '200ms' */
  delay?: string
  /** How far (in px) the element floats up from. Default: 40px */
  distance?: number
  className?: string
  style?: CSSProperties
}

/**
 * Wraps children in a float-up + fade-in animation that triggers
 * once when the element scrolls into view.
 */
export function ScrollReveal({
  children,
  delay = '0ms',
  distance = 40,
  className = '',
  style,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : `translateY(${distance}px)`,
        transition: `opacity 0.7s ease ${delay}, transform 0.7s cubic-bezier(0.22, 0.61, 0.36, 1) ${delay}`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  )
}
