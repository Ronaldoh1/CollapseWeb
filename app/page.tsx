import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import Reveal from '@/components/ui/Reveal'
import ModuleCard from '@/components/ui/ModuleCard'
import { MODULES, CITATIONS } from '@/lib/modules'

export default function Home() {
  const liveModules = MODULES.filter(m => m.status === 'live')
  const upcomingModules = MODULES.filter(m => m.status !== 'live')
  const citations = Object.values(CITATIONS)

  return (
    <>
      <Nav />
      <main>

        {/* HERO */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-24 pb-20">
          <div className="absolute top-1/3 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2
                          bg-[radial-gradient(ellipse,rgba(200,150,12,0.07),transparent_65%)] pointer-events-none" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <svg className="w-[700px] h-[700px] opacity-[0.03] animate-spin-slow" viewBox="0 0 400 400" fill="none">
              {[[200,200],[240,200],[220,234.6],[180,234.6],[160,200],[180,165.4],[220,165.4],
                [280,200],[260,234.6],[260,165.4],[200,269.3],[140,234.6],[120,200],[140,165.4],[200,130.7]]
                .map(([cx,cy], i) => (
                  <circle key={i} cx={cx} cy={cy} r="40" stroke="rgba(200,150,12,0.9)" strokeWidth="0.5"/>
              ))}
              <circle cx="200" cy="200" r="120" stroke="rgba(200,150,12,0.4)" strokeWidth="0.5"/>
              <circle cx="200" cy="200" r="160" stroke="rgba(200,150,12,0.2)" strokeWidth="0.5"/>
            </svg>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="font-sans text-[0.55rem] tracking-[0.5em] text-gold uppercase mb-8 opacity-0
                            animate-[rise_0.8s_cubic-bezier(0.16,1,0.3,1)_0.4s_forwards]">
              Consciousness · Pattern Recognition · Critical Thinking
            </div>
            <h1 className="font-display font-black tracking-[0.08em] text-snow leading-[0.88]
                           text-[clamp(4rem,12vw,10rem)] mb-4 opacity-0
                           animate-[rise_1.2s_cubic-bezier(0.16,1,0.3,1)_0.7s_forwards]">
              SUNFLOW
            </h1>
            <div className="font-display text-[clamp(1.2rem,3vw,2rem)] tracking-[0.45em] text-amber font-light mb-10
                            opacity-0 animate-[rise_1s_cubic-bezier(0.16,1,0.3,1)_1s_forwards]">
              R E I G N I T E D
            </div>
            <div className="rule-gold max-w-[80px] mx-auto mb-10 opacity-0
                            animate-[rise_0.8s_cubic-bezier(0.16,1,0.3,1)_1.2s_forwards]" />
            <p className="font-serif italic font-light text-mist text-[clamp(1rem,2vw,1.3rem)] leading-[1.9]
                          max-w-2xl mx-auto mb-10 opacity-0
                          animate-[rise_0.9s_cubic-bezier(0.16,1,0.3,1)_1.4s_forwards]">
              The information on this platform does not ask you to believe anything.
              It asks you to{' '}
              <strong className="text-snow font-normal">look, research, and decide for yourself.</strong>
              {' '}Every claim has a source. Every source is searchable. Every pattern is real.
            </p>
            <div className="flex gap-4 justify-center flex-wrap opacity-0
                            animate-[rise_0.8s_cubic-bezier(0.16,1,0.3,1)_1.7s_forwards]">
              <a href="#modules"
                 className="bg-gradient-gold text-void font-display text-[0.6rem] tracking-[0.3em]
                            uppercase font-semibold px-8 py-3.5 hover:opacity-90 transition-opacity">
                Explore Modules
              </a>
              <a href="#cited"
                 className="border border-gold/30 text-amber font-display text-[0.6rem] tracking-[0.3em]
                            uppercase px-8 py-3.5 hover:border-gold/60 transition-colors">
                View Sources
              </a>
            </div>
          </div>
        </section>

        {/* CITATION BANNER */}
        <div className="border-y border-gold/10 py-8 px-6"
             style={{background:'linear-gradient(135deg,rgba(200,150,12,0.05),rgba(200,72,32,0.03))'}}>
          <Reveal>
            <div className="max-w-[1200px] mx-auto flex items-center gap-6 flex-wrap justify-center md:justify-start">
              <div className="font-display text-4xl text-gold/50">§</div>
              <p className="font-serif italic text-mist text-base leading-relaxed max-w-3xl">
                <strong className="text-amber font-normal not-italic">Everything here is cited, cross-referenced, and searchable.</strong>{' '}
                Peer-reviewed studies. Documented historical events. Verifiable public records.
                We are not asking you to trust us — <em>we are asking you to go look it up.</em>
              </p>
            </div>
          </Reveal>
        </div>

        {/* PILLARS */}
        <section className="py-28 px-6">
          <div className="max-w-[1200px] mx-auto">
            <Reveal><div className="eyebrow mb-4">What This Platform Is</div></Reveal>
            <Reveal delay={100}>
              <h2 className="font-display text-[clamp(2rem,5vw,4rem)] tracking-wide text-snow font-bold mb-6 leading-tight">
                Built on Three Principles
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="font-serif italic font-light text-mist text-lg leading-relaxed max-w-2xl mb-16">
                Not to give you answers. To give you better questions —
                <strong className="text-snow font-normal not-italic"> with evidence, across disciplines.</strong>
              </p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/4">
              {[
                { num:'I', title:'Pattern Recognition', body:'History doesn\'t repeat — but it rhymes with precision. Learning to see cycles, structures, and recurring mechanisms across time and culture is the most durable cognitive skill available.' },
                { num:'II', title:'Primary Sources', body:'Every module draws from peer-reviewed research and verified historical records. We cite everything. You can verify everything. The truth doesn\'t need you to believe it on faith.' },
                { num:'III', title:'Consciousness First', body:'Understanding the external world begins with understanding how your own mind was programmed — what was installed, by whom, and for what purpose. Internal clarity precedes external clarity.' },
              ].map((p, i) => (
                <Reveal key={p.num} delay={i * 100}>
                  <div className="bg-void p-10 group hover:bg-deep transition-colors duration-300 relative overflow-hidden h-full">
                    <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-gold to-transparent
                                    scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    <div className="font-display text-5xl font-bold text-gold/10 mb-6 leading-none">{p.num}</div>
                    <div className="font-display text-sm tracking-[0.1em] text-amber mb-4">{p.title}</div>
                    <p className="font-serif font-light text-fog text-[0.95rem] leading-[1.85]">{p.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <div className="rule-gold max-w-[1200px] mx-auto" />

        {/* MODULES */}
        <section className="py-28 px-6" id="modules">
          <div className="max-w-[1200px] mx-auto">
            <Reveal><div className="eyebrow mb-4">Knowledge Modules</div></Reveal>
            <Reveal delay={100}>
              <h2 className="font-display text-[clamp(2rem,5vw,4rem)] tracking-wide text-snow font-bold mb-6 leading-tight">
                The Curriculum
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="font-serif italic font-light text-mist text-lg leading-relaxed max-w-2xl mb-16">
                Each module is a standalone deep-dive. No account required. No paywall.
                No algorithm between you and the information.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/4">
              {MODULES.map((module, i) => (
                <Reveal key={module.slug} delay={(i % 2) * 80}>
                  <ModuleCard module={module} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SOURCES */}
        <section className="py-28 px-6 bg-ink" id="cited">
          <div className="max-w-[1200px] mx-auto">
            <Reveal><div className="eyebrow mb-4">Intellectual Integrity</div></Reveal>
            <Reveal delay={100}>
              <h2 className="font-display text-[clamp(2rem,5vw,4rem)] tracking-wide text-snow font-bold mb-6 leading-tight">
                Every Claim Has a Source.<br/>Every Source Is Searchable.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="font-serif italic font-light text-mist text-lg leading-relaxed max-w-2xl mb-16">
                If it can&apos;t be cited, it doesn&apos;t get published.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/4 mb-16">
              {citations.map((cite, i) => (
                <Reveal key={cite.id} delay={(i % 3) * 60}>
                  <div className="bg-void p-6 hover:bg-deep transition-colors h-full">
                    <div className="font-sans text-[0.5rem] tracking-[0.35em] text-gold uppercase mb-2">
                      {cite.tier.replace('-',' ')}
                    </div>
                    <div className="font-serif text-silver text-sm mb-1 leading-snug">{cite.author}</div>
                    <div className="font-serif italic font-light text-fog text-sm mb-2 leading-snug">
                      &ldquo;{cite.title}&rdquo;
                    </div>
                    <div className="font-sans text-[0.5rem] tracking-[0.1em] text-ash">
                      {cite.publication}, {cite.year}
                    </div>
                    {cite.url && (
                      <a href={cite.url} target="_blank" rel="noopener noreferrer"
                         className="mt-3 inline-block font-sans text-[0.48rem] tracking-[0.2em]
                                    text-gold/50 hover:text-gold uppercase transition-colors">
                        Verify Source →
                      </a>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <div className="p-8 border border-gold/10 bg-gold/[0.02]">
                <div className="eyebrow mb-4">A Note on Intellectual Honesty</div>
                <p className="font-serif font-light text-fog text-base leading-relaxed max-w-3xl">
                  No source is perfect. No framework explains everything. These modules represent one lens —
                  built from documented, verifiable research — not a complete picture of reality.
                  Read the primary sources directly. Find the counterarguments. Form your own conclusions.{' '}
                  <strong className="text-gold font-normal">
                    The goal has never been to replace your thinking. It has always been to give you
                    more material to think with.
                  </strong>
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* MANIFESTO */}
        <section className="py-28 px-6 bg-deep relative overflow-hidden text-center">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <span className="font-display font-black text-[clamp(6rem,22vw,18rem)] tracking-widest"
                  style={{color:'rgba(200,150,12,0.03)'}}>AWAKE</span>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <Reveal><div className="eyebrow justify-center mb-6">Our Purpose</div></Reveal>
            <Reveal delay={100}>
              <h2 className="font-display text-[clamp(2rem,5vw,4rem)] tracking-wide text-snow font-bold mb-4 leading-tight">
                The Information Exists.{' '}
                <span className="text-amber">We Just Won&apos;t Let It Stay Buried.</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <div className="rule-gold max-w-[50px] mx-auto my-8" />
            </Reveal>
            <Reveal delay={300}>
              <p className="font-serif italic font-light text-mist text-lg leading-[1.9] mb-10">
                The patterns documented here exist in public archives, university databases, and
                government records.{' '}
                <strong className="text-snow font-normal not-italic">
                  We are not leaking secrets. We are organizing what is already there —
                  and making it impossible to unsee.
                </strong>
              </p>
            </Reveal>
            <Reveal delay={400}>
              <div className="flex gap-3 justify-center flex-wrap">
                {['English','Español','Português · Soon'].map(lang => (
                  <span key={lang}
                        className={`font-sans text-[0.55rem] tracking-[0.25em] uppercase px-4 py-1.5 border
                          ${lang.includes('Soon') ? 'text-ash border-white/8' : 'text-amber border-gold/25'}`}>
                    {lang}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
