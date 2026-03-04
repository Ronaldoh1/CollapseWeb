import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import Reveal from '@/components/ui/Reveal'
import ModuleCard from '@/components/ui/ModuleCard'
import { MODULES } from '@/lib/modules'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Modules',
  description: 'All SunFlow: Reignited consciousness education modules. Cited, searchable, free.',
}

export default function ModulesPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-28 px-6">
        <div className="max-w-[1200px] mx-auto">

          <Reveal>
            <div className="eyebrow mb-4">Knowledge Modules</div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] tracking-wide text-snow font-bold mb-6 leading-tight">
              The Full Curriculum
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-serif italic font-light text-mist text-lg leading-relaxed max-w-2xl mb-6">
              Every module is independently cited. Every source is publicly verifiable.
              No account. No paywall. No algorithm between you and the information.
            </p>
          </Reveal>

          <Reveal delay={250}>
            <div className="flex items-center gap-2 mb-16 px-4 py-3 border border-gold/15 bg-gold/4
                            inline-flex w-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="font-sans text-[0.55rem] tracking-[0.3em] text-emerald-400/80 uppercase">
                {MODULES.filter(m => m.status === 'live').length} modules live
              </span>
              <span className="text-ash mx-2">·</span>
              <span className="font-sans text-[0.55rem] tracking-[0.3em] text-ash uppercase">
                {MODULES.filter(m => m.status !== 'live').length} in development
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/4">
            {MODULES.map((module, i) => (
              <Reveal key={module.slug} delay={(i % 2) * 80}>
                <ModuleCard module={module} />
              </Reveal>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
