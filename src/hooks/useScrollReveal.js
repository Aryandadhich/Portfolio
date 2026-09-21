import { useEffect } from 'react'

/**
 * Adds 'is-visible' class to elements with [data-animate] when they enter
 * the viewport. Used for section fade-up / slide-in effects.
 */
export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-animate]')
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )

    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
