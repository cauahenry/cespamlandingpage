import { Eye, Target } from 'lucide-react'
import { AnimatedSection } from '@/components/common/AnimatedSection'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { VISION, MISSION } from '@/constants/content'

function VMCard({
  icon: Icon,
  title,
  text,
  delay,
  accent,
}: {
  icon: typeof Eye
  title: string
  text: string
  delay: number
  accent: 'gold' | 'primary'
}) {
  const accentColor = accent === 'gold' ? '#C9A84C' : '#6B1A2E'
  const accentBg    = accent === 'gold' ? 'rgba(201,168,76,0.10)' : 'rgba(107,26,46,0.08)'

  return (
    <AnimatedSection direction="up" delay={delay}>
      <div
        className="h-full flex flex-col p-8 lg:p-10 rounded-2xl transition-all duration-300"
        style={{
          background: 'white',
          boxShadow: '0 4px 30px rgba(107,26,46,0.08)',
          border: '1px solid rgba(107,26,46,0.07)',
        }}
      >
        {/* Icon */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
          style={{ background: accentBg }}
        >
          <Icon size={26} style={{ color: accentColor }} strokeWidth={1.8} />
        </div>

        {/* Accent bar */}
        <div
          className="h-1 w-12 rounded-full mb-5"
          style={{ background: `linear-gradient(90deg, ${accentColor}, ${accentColor}88)` }}
        />

        <h3 className="font-serif font-bold text-2xl mb-4" style={{ color: '#1A1A2E' }}>
          {title}
        </h3>

        <p className="text-base leading-relaxed flex-1" style={{ color: '#4A5568' }}>
          {text}
        </p>
      </div>
    </AnimatedSection>
  )
}

export function Mission() {
  return (
    <section id="missao" className="py-24 lg:py-32" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection className="mb-14">
          <SectionTitle
            tag="Propósito"
            title="Visão & Missão"
            subtitle="Os pilares que guiam cada projeto e cada decisão da CESPAM."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <VMCard
            icon={Eye}
            title={VISION.title}
            text={VISION.text}
            delay={0.1}
            accent="primary"
          />
          <VMCard
            icon={Target}
            title={MISSION.title}
            text={MISSION.text}
            delay={0.2}
            accent="gold"
          />
        </div>

        {/* Bottom decorative strip */}
        <AnimatedSection delay={0.4} className="mt-20">
          <div
            className="relative rounded-2xl overflow-hidden p-10 text-center"
            style={{
              background: 'linear-gradient(135deg, #4A1020 0%, #6B1A2E 60%, #7D2035 100%)',
            }}
          >
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" aria-hidden="true" />
            <div className="relative z-10">
              <p
                className="font-serif font-bold text-xl lg:text-2xl italic max-w-2xl mx-auto"
                style={{ color: '#FAF0D7' }}
              >
                "Comprometidos com a excelência na gestão pública, porque cada
                município merece o melhor."
              </p>
              <div
                className="mt-4 h-0.5 w-20 mx-auto rounded-full"
                style={{ background: 'linear-gradient(90deg, #C9A84C, #E8C97A)' }}
              />
              <p className="mt-3 text-sm font-medium" style={{ color: 'rgba(232,201,122,0.80)' }}>
                Equipe CESPAM
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
