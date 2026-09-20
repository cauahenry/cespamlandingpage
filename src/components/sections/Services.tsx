import { motion } from 'framer-motion'
import {
  BookOpen, Calculator, BarChart3, FileText, Shield, GraduationCap,
} from 'lucide-react'
import { AnimatedSection } from '@/components/common/AnimatedSection'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { SERVICES } from '@/constants/content'

const ICON_MAP = {
  BookOpen, Calculator, BarChart3, FileText, Shield, GraduationCap,
} as const

type IconKey = keyof typeof ICON_MAP

export function Services() {
  return (
    <section id="servicos" className="py-24 lg:py-32 relative overflow-hidden" style={{ background: '#ffffff' }}>

      {/* Subtle decorative background */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(ellipse at 80% 20%, rgba(201,168,76,0.06) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-14">
          <SectionTitle
            tag="O que fazemos"
            title="Nossos Serviços"
            subtitle="Soluções especializadas para todas as necessidades da gestão pública municipal."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES.map((service, idx) => {
            const IconComp = ICON_MAP[service.icon as IconKey] ?? BookOpen
            const isAccent = service.color === 'accent'

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.55, delay: idx * 0.08 }}
                className="group flex flex-col p-7 rounded-2xl cursor-default transition-all duration-300"
                style={{
                  background: 'white',
                  border: '1px solid rgba(107,26,46,0.08)',
                  boxShadow: '0 2px 12px rgba(107,26,46,0.06)',
                }}
                whileHover={{
                  y: -6,
                  boxShadow: '0 16px 40px rgba(107,26,46,0.15)',
                  borderColor: isAccent ? '#C9A84C' : '#6B1A2E',
                }}
              >
                {/* Icon container */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300"
                  style={{
                    background: isAccent
                      ? 'rgba(201,168,76,0.10)'
                      : 'rgba(107,26,46,0.07)',
                  }}
                >
                  <IconComp
                    size={26}
                    strokeWidth={1.6}
                    style={{ color: isAccent ? '#C9A84C' : '#6B1A2E' }}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Title */}
                <h3
                  className="font-semibold text-lg mb-3"
                  style={{ color: '#1A1A2E' }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed flex-1" style={{ color: '#6B7280' }}>
                  {service.description}
                </p>

                {/* Bottom accent */}
                <div
                  className="mt-5 h-0.5 w-0 rounded-full transition-all duration-500 group-hover:w-full"
                  style={{
                    background: isAccent
                      ? 'linear-gradient(90deg, #C9A84C, #E8C97A)'
                      : 'linear-gradient(90deg, #6B1A2E, #8B2840)',
                  }}
                />
              </motion.article>
            )
          })}
        </div>

        {/* CTA below services */}
        <AnimatedSection delay={0.4} className="mt-14 text-center">
          <p className="text-base mb-5" style={{ color: '#6B7280' }}>
            Não encontrou o que procura?{' '}
            <strong style={{ color: '#6B1A2E' }}>Entre em contato</strong>{' '}
            e nossa equipe encontrará a melhor solução para você.
          </p>
          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold
              text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #6B1A2E, #8B2840)',
              color: '#FAF0D7',
            }}
          >
            Solicitar Consultoria
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
