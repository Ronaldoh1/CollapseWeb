import { notFound } from 'next/navigation'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import Reveal from '@/components/ui/Reveal'
import { getModule, MODULES } from '@/lib/modules'
import type { Metadata } from 'next'
import Link from 'next/link'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return MODULES.map(m => ({ slug: m.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const module = getModule(params.slug)
  if (!module) return {}
  return {
    title: module.title,
    description: module.description,
  }
}

export default function ModulePage({ params }: Props) {
  const module = getModule(params.slug)
  if (!module || module.status !== 'live') notFound()

  const relatedModules = MODULES.filter(m =>
    module.relatedSlugs.includes(m.slug) && m.status === 'live'
  )

  return (
    <>
      <Nav />
      <main>

        {/* ── MODULE HERO ── */}
        <section
          className="relative min-h-[70vh] flex items-end pb-16 px-6 pt-32 overflow-hidden"
        >
          {/* Glow */}
          <div
            className="absolute top-1/3 left-1/2 w-[700px] h-[500px] -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full"
            style={{ background: `radial-gradient(ellipse, ${module.palette.glow}, transparent 65%)` }}
          />

          {/* Background number */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-black
                          text-[clamp(10rem,30vw,24rem)] leading-none select-none pointer-events-none
                          tracking-widest"
               style={{ color: `${module.palette.primary}08` }}>
            {String(MODULES.indexOf(module) + 1).padStart(2, '0')}
          </div>

          <div className="relative z-10 max-w-[1200px] mx-auto w-full">
            <div className="opacity-0 animate-[rise_0.7s_ease_0.2s_forwards]">
              <Link
                href="/modules"
                className="font-sans text-[0.5rem] tracking-[0.35em] text-ash hover:text-mist
                           uppercase transition-colors mb-8 inline-flex items-center gap-2"
              >
                ← All Modules
              </Link>
            </div>

            <div
              className="font-sans text-[0.55rem] tracking-[0.5em] uppercase mb-4
                         opacity-0 animate-[rise_0.7s_ease_0.3s_forwards]"
              style={{ color: module.palette.primary }}
            >
              {module.eyebrow}
            </div>

            <h1
              className="font-display font-bold text-snow leading-[0.92] tracking-wide mb-4
                         text-[clamp(2.5rem,7vw,6rem)]
                         opacity-0 animate-[rise_1s_cubic-bezier(0.16,1,0.3,1)_0.5s_forwards]"
            >
              {module.title}
            </h1>

            <p
              className="font-display text-[clamp(1rem,2vw,1.4rem)] tracking-[0.05em] mb-6
                         opacity-0 animate-[rise_0.9s_ease_0.7s_forwards]"
              style={{ color: module.palette.accent }}
            >
              {module.subtitle}
            </p>

            <p
              className="font-serif italic font-light text-mist text-lg leading-relaxed max-w-2xl mb-8
                         opacity-0 animate-[rise_0.8s_ease_0.9s_forwards]"
            >
              {module.description}
            </p>

            {/* Meta row */}
            <div
              className="flex flex-wrap gap-4 items-center opacity-0 animate-[rise_0.7s_ease_1.1s_forwards]"
            >
              {module.category.map(cat => (
                <span
                  key={cat}
                  className="font-sans text-[0.5rem] tracking-[0.25em] text-ash uppercase
                             border border-white/8 px-3 py-1"
                >
                  {cat}
                </span>
              ))}
              <span className="font-sans text-[0.5rem] tracking-[0.2em] text-ash uppercase mx-2">·</span>
              <span className="font-sans text-[0.5rem] tracking-[0.2em] uppercase"
                    style={{ color: module.palette.primary }}>
                {module.citations.length} cited sources
              </span>
            </div>
          </div>
        </section>

        {/* Accent line */}
        <div
          className="h-px w-full"
          style={{ background: `linear-gradient(90deg, ${module.palette.primary}, ${module.palette.accent}, transparent)` }}
        />

        {/* ── HERO STATEMENT ── */}
        <div className="py-20 px-6 text-center"
             style={{ background: `radial-gradient(ellipse at 50% 0%, ${module.palette.glow}, transparent 60%)` }}>
          <Reveal>
            <blockquote
              className="font-serif italic font-light text-[clamp(1.3rem,3vw,2.2rem)] text-silver
                         leading-relaxed max-w-3xl mx-auto"
            >
              &ldquo;{module.heroStatement}&rdquo;
            </blockquote>
          </Reveal>
        </div>

        <div className="rule-gold max-w-[1200px] mx-auto" />

        {/* ── CHAPTERS ── */}
        <section className="py-20 px-6">
          <div className="max-w-[1200px] mx-auto">
            {module.chapters.length > 0 ? (
              module.chapters.map((chapter, ci) => (
                <Reveal key={chapter.id} delay={ci * 60}>
                  <article className="mb-20 pb-20 border-b border-white/5 last:border-0 last:mb-0 last:pb-0
                                     grid grid-cols-1 md:grid-cols-[140px_1fr] gap-8">
                    {/* Chapter label */}
                    <div>
                      <div className="font-display font-bold text-5xl tracking-wide leading-none mb-2"
                           style={{ color: `${module.palette.primary}20` }}>
                        {chapter.number}
                      </div>
                      <div className="font-sans text-[0.5rem] tracking-[0.35em] uppercase"
                           style={{ color: module.palette.primary }}>
                        Chapter {chapter.number}
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h2 className="font-display text-[clamp(1.5rem,3vw,2.5rem)] tracking-wide text-snow
                                     font-bold mb-8 leading-tight">
                        {chapter.title}
                      </h2>

                      <div className="chapter-body">
                        {chapter.body.map((para, pi) => (
                          <p key={pi} dangerouslySetInnerHTML={{ __html: para }} />
                        ))}
                      </div>

                      {chapter.pullQuote && (
                        <blockquote className="pull-quote my-8">
                          {chapter.pullQuote}
                          {chapter.pullQuoteAttr && (
                            <footer className="mt-3 font-sans text-[0.5rem] tracking-[0.3em] text-ash uppercase not-italic">
                              — {chapter.pullQuoteAttr}
                            </footer>
                          )}
                        </blockquote>
                      )}
                    </div>
                  </article>
                </Reveal>
              ))
            ) : (
              <Reveal>
                <div className="py-20 text-center">
                  <div className="font-display text-2xl tracking-wide text-ash mb-4">
                    Full module content coming soon
                  </div>
                  <p className="font-serif italic text-fog">
                    The research is complete. The writing is in progress.
                  </p>
                </div>
              </Reveal>
            )}
          </div>
        </section>

        {/* ── CITATIONS ── */}
        {module.citations.length > 0 && (
          <section className="py-20 px-6 bg-ink">
            <div className="max-w-[1200px] mx-auto">
              <Reveal>
                <div className="eyebrow mb-6">Sources & Citations</div>
              </Reveal>
              <Reveal delay={100}>
                <p className="font-serif italic font-light text-fog text-base mb-10 max-w-xl">
                  Every claim in this module is supported by at least one of the following
                  peer-reviewed, documented, or public-record sources.
                </p>
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/4">
                {module.citations.map((cite, i) => (
                  <Reveal key={cite.id} delay={(i % 2) * 60}>
                    <div className="bg-void p-6 hover:bg-deep transition-colors h-full">
                      <div className="font-sans text-[0.5rem] tracking-[0.35em] uppercase mb-2"
                           style={{ color: module.palette.primary }}>
                        {cite.tier.replace('-', ' ')}
                      </div>
                      <div className="font-serif text-silver text-sm mb-1">{cite.author}</div>
                      <div className="font-serif italic text-fog text-sm mb-2">
                        &ldquo;{cite.title}&rdquo;
                      </div>
                      <div className="font-sans text-[0.5rem] tracking-[0.1em] text-ash mb-1">
                        {cite.publication}, {cite.year}
                      </div>
                      {cite.notes && (
                        <div className="font-serif italic text-ash/70 text-xs mt-2 leading-relaxed">
                          {cite.notes}
                        </div>
                      )}
                      {cite.url && (
                        <a href={cite.url} target="_blank" rel="noopener noreferrer"
                           className="mt-3 inline-block font-sans text-[0.48rem] tracking-[0.2em]
                                      uppercase transition-colors"
                           style={{ color: `${module.palette.primary}70` }}
                           onMouseEnter={e => (e.currentTarget.style.color = module.palette.primary)}
                           onMouseLeave={e => (e.currentTarget.style.color = `${module.palette.primary}70`)}>
                          Verify Source →
                        </a>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── RELATED ── */}
        {relatedModules.length > 0 && (
          <section className="py-20 px-6">
            <div className="max-w-[1200px] mx-auto">
              <Reveal><div className="eyebrow mb-6">Continue Learning</div></Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/4">
                {relatedModules.map((m, i) => (
                  <Reveal key={m.slug} delay={i * 80}>
                    <Link href={`/modules/${m.slug}`}
                          className="block bg-panel p-8 border border-white/4 hover:border-gold/20
                                     hover:-translate-y-1 transition-all duration-300 group">
                      <div className="font-sans text-[0.5rem] tracking-[0.35em] uppercase mb-3"
                           style={{ color: m.palette.primary }}>
                        {m.eyebrow}
                      </div>
                      <div className="font-display text-xl tracking-wide text-snow mb-2
                                      group-hover:text-amber transition-colors">
                        {m.title}
                      </div>
                      <div className="font-serif italic text-fog text-sm leading-relaxed">
                        {m.subtitle}
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </>
  )
}
