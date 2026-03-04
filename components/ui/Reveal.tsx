'use client'

import { useEffect, useRef, ReactNode, ElementType } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  as?: ElementType
}

export default function Reveal({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`
          el.classList.add('opacity-100', 'translate-y-0')
          el.classList.remove('opacity-0', 'translate-y-6')
          obs.unobserve(el)
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])

  return (
    <Tag
      ref={ref}
      className={`opacity-0 translate-y-6 transition-all duration-[900ms] ease-out ${className}`}
    >
      {children}
    </Tag>
  )
}
