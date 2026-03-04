import Link from 'next/link'

const FOOTER_LINKS = [
  { href: '/modules', label: 'Modules' },
  { href: '/#cited',  label: 'Sources' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-16 px-6">
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="font-display text-xl tracking-[0.15em] text-amber font-semibold mb-3">
              ☀ SunFlow: Reignited
            </div>
            <p className="font-serif italic font-light text-fog text-sm leading-relaxed">
              Consciousness education through pattern recognition
              and primary source research. No algorithm.
              No paywall. No agenda — only evidence.
            </p>
          </div>

          {/* Nav */}
          <div>
            <div className="eyebrow mb-4">Navigate</div>
            <div className="flex flex-col gap-2">
              {FOOTER_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="font-sans text-[0.6rem] tracking-[0.25em] text-ash hover:text-amber uppercase transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Commitment */}
          <div>
            <div className="eyebrow mb-4">Our Standard</div>
            <div className="flex flex-col gap-1.5">
              {[
                'All claims cited',
                'Peer-reviewed sources',
                'Public domain records',
                'No authentication required',
                'No tracking',
                'No ads',
              ].map((item) => (
                <div
                  key={item}
                  className="font-sans text-[0.55rem] tracking-[0.2em] text-ash uppercase"
                >
                  — {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Rule */}
        <div className="rule-gold mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-sans text-[0.5rem] tracking-[0.2em] text-ash uppercase">
            SunFlow: Reignited · Consciousness Education Platform
          </p>
          <p className="font-sans text-[0.5rem] tracking-[0.15em] text-ash/50 uppercase">
            Not financial, legal, or medical advice · All information verifiable through public sources
          </p>
        </div>
      </div>
    </footer>
  )
}
