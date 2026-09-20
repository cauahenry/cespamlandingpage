import type { SectionTitleProps } from '@/types'

export function SectionTitle({
  tag,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}: SectionTitleProps) {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[align]

  const lineAlignClass = align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''

  return (
    <div className={`flex flex-col gap-3 ${alignClass} ${className}`}>
      {tag && (
        <span
          className="text-xs font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full w-fit"
          style={{
            background: light ? 'rgba(201,168,76,0.25)' : 'rgba(107,26,46,0.08)',
            color: light ? '#E8C97A' : '#6B1A2E',
          }}
        >
          {tag}
        </span>
      )}

      <h2
        className="font-serif font-bold leading-tight"
        style={{
          fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
          color: light ? '#FAF0D7' : '#1A1A2E',
        }}
      >
        {title}
      </h2>

      {/* Accent line */}
      <div
        className={`h-1 rounded-full w-14 ${lineAlignClass}`}
        style={{
          background: 'linear-gradient(90deg, #C9A84C, #E8C97A)',
        }}
      />

      {subtitle && (
        <p
          className="max-w-xl leading-relaxed mt-1"
          style={{
            color: light ? 'rgba(250,240,215,0.80)' : '#6B7280',
            fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
