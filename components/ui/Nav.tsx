'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '/',        label: 'Home' },
  { href: '/modules', label: 'Modules' },
  { href: '/#cited',  label: 'Sources' },
]

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled
          ? 'bg-void/90 backdrop-blur-xl border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-content mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-7 h-7 rounded-full border border-gold/40 flex items-center justify-center text-xs relative
                          group-hover:border-gold/80 transition-colors duration-300">
            ☀
            <span className="absolute inset-[-5px] rounded-full border border-gold/10 group-hover:border-gold/20 transition-colors" />
          </div>
          <div>
            <div className="font-display text-[0.8rem] tracking-[0.2em] text-amber font-semibold leading-none">
              SunFlow
            </div>
            <div className="font-sans text-[0.45rem] tracking-[0.35em] text-ash uppercase leading-none mt-0.5">
              Reignited
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-sans text-[0.6rem] tracking-[0.3em] uppercase transition-colors duration-200
                ${pathname === href ? 'text-amber' : 'text-fog hover:text-mist'}`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Citation badge */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 border border-gold/20
                        bg-gold/5 font-sans text-[0.5rem] tracking-[0.25em] text-gold uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-blink" />
          All Content Cited
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-fog hover:text-snow transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-ink border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="font-sans text-[0.65rem] tracking-[0.3em] uppercase text-fog hover:text-amber transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
