import Link from 'next/link'
import type { Module } from '@/lib/modules'

interface ModuleCardProps {
  module: Module
  delay?: number
}

const STATUS_STYLES = {
  'live':           'text-emerald-400 border-emerald-400/30 bg-emerald-400/5',
  'coming-soon':    'text-ash border-white/10',
  'in-development': 'text-ash border-white/10',
}

const STATUS_LABELS = {
  'live':           'Live',
  'coming-soon':    'Coming Soon',
  'in-development': 'In Development',
}

export default function ModuleCard({ module }: ModuleCardProps) {
  const isLive = module.status === 'live'
  const Wrapper = isLive ? Link : 'div'

  return (
    <Wrapper
      // @ts-expect-error conditional href
      href={isLive ? `/modules/${module.slug}` : undefined}
      className={`module-card block group ${isLive ? 'cursor-pointer' : 'cursor-default'}`}
    >
      {/* Color accent bar */}
      <div
        className="h-0.5 w-full"
        style={{ background: isLive ? `linear-gradient(90deg, ${module.palette.primary}, ${module.palette.accent})` : 'rgba(255,255,255,0.06)' }}
      />

      <div className="p-8">
        {/* Category */}
        <div
          className="font-sans text-[0.5rem] tracking-[0.4em] uppercase mb-3 font-light"
          style={{ color: isLive ? module.palette.primary : 'var(--ash)' }}
        >
          {module.category.slice(0, 2).join(' · ')}
        </div>

        {/* Title */}
        <h3 className="font-display text-xl tracking-wide text-snow mb-3 leading-tight
                       group-hover:text-gradient-gold transition-all duration-300">
          {module.title}
        </h3>

        {/* Description */}
        <p className="font-serif italic font-light text-fog text-sm leading-relaxed mb-6 line-clamp-3">
          {module.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <div className="font-sans text-[0.5rem] tracking-[0.2em] text-ash uppercase">
            {module.eyebrow}
          </div>

          <div className={`font-sans text-[0.5rem] tracking-[0.2em] uppercase px-2.5 py-1 border ${STATUS_STYLES[module.status]}`}>
            {STATUS_LABELS[module.status]}
          </div>
        </div>

        {/* Cited count */}
        {isLive && module.citations.length > 0 && (
          <div className="mt-3 flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-gold/50" />
            <span className="font-sans text-[0.48rem] tracking-[0.2em] text-ash uppercase">
              {module.citations.length} cited sources
            </span>
          </div>
        )}
      </div>
    </Wrapper>
  )
}
