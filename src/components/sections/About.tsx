import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/common/AnimatedSection'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { STATS } from '@/constants/content'

function StatCard({
  stat,
  index,
}: {
  stat: (typeof STATS)[number]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center text-center p-6 rounded-2xl"
      style={{
        background: 'white',
        boxShadow: '0 4px 24px rgba(107,26,46,0.09)',
        border: '1px solid rgba(107,26,46,0.07)',
      }}
    >
      <span
        className="font-black font-serif"
        style={{
          fontSize: 'clamp(2rem, 5vw, 2.75rem)',
          background: 'linear-gradient(135deg, #6B1A2E, #C9A84C)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {stat.value}
      </span>
      <span className="text-sm font-medium mt-1" style={{ color: '#6B7280' }}>
        {stat.label}
      </span>
    </motion.div>
  )
}

export function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32" style={{ background: '#FAF0D7' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left – Text */}
          <div>
            <AnimatedSection direction="left">
              <SectionTitle
                tag="Sobre Nós"
                title="Especialistas em Gestão Pública Municipal"
                subtitle="Há mais de três décadas, a CESPAM atua como parceira estratégica dos municípios pernambucanos, oferecendo soluções técnicas que transformam a administração pública."
                align="left"
              />
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.2} className="mt-8">
              <p className="text-base leading-relaxed mb-5" style={{ color: '#4A5568' }}>
                Fundada com o propósito de elevar a qualidade da gestão governamental,
                a CESPAM reúne profissionais altamente qualificados em contabilidade pública,
                direito administrativo e gestão fiscal, todos comprometidos com a entrega de
                resultados concretos para o setor público.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#4A5568' }}>
                Nossa atuação abrange desde a escrituração contábil até a assessoria em
                processos licitatórios, sempre pautada pelos princípios da ética, transparência
                e conformidade com a legislação vigente.
              </p>
            </AnimatedSection>

            {/* Highlight box */}
            <AnimatedSection direction="left" delay={0.35} className="mt-8">
              <div
                className="flex items-start gap-4 p-5 rounded-xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(107,26,46,0.06), rgba(201,168,76,0.08))',
                  borderLeft: '4px solid #C9A84C',
                }}
              >
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: '#6B1A2E' }}>
                    Nossa localização
                  </p>
                  <p className="text-sm" style={{ color: '#4A5568' }}>
                    Rua Visconde de Inhaúma, 410 – Maurício de Nassau,{' '}
                    <strong>Caruaru – PE</strong>
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right – Stats */}
          <div>
            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-5">
                {STATS.map((stat, i) => (
                  <StatCard key={stat.label} stat={stat} index={i} />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
