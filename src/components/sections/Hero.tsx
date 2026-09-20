import { motion } from 'framer-motion'
import { ArrowDown, ChevronRight } from 'lucide-react'
import { Logo } from '@/components/common/Logo'
import { COMPANY_INFO } from '@/constants/content'

function scrollTo(href: string) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

// Animated arc decorative element (inspired by logo)
function DecorativeArcs() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
      preserveAspectRatio="xMaxYMax meet"
      aria-hidden="true"
    >
      {[60, 110, 160, 210, 260, 310].map((r, i) => (
        <path
          key={r}
          d={`M 0,${r} A ${r},${r} 0 0,1 ${r},0`}
          fill="none"
          stroke="#E8C97A"
          strokeWidth="1.5"
          opacity={(6 - i) * 0.15}
        />
      ))}
    </svg>
  )
}

export function Hero() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(145deg, #4A1020 0%, #6B1A2E 50%, #7D2035 100%)' }}
    >
      {/* Grid background pattern */}
      <div className="absolute inset-0 bg-grid-dark opacity-60 pointer-events-none" aria-hidden="true" />

      {/* Decorative arcs – bottom-left corner */}
      <div className="absolute bottom-0 left-0 w-[520px] h-[520px]">
        <DecorativeArcs />
      </div>

      {/* Decorative arcs – top-right, mirrored */}
      <div
        className="absolute top-0 right-0 w-[340px] h-[340px] opacity-30 pointer-events-none"
        style={{ transform: 'rotate(180deg)' }}
        aria-hidden="true"
      >
        <DecorativeArcs />
      </div>

      {/* Gold gradient orb */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-32">

          {/* Left – Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Tag */}
            <motion.div variants={itemVariants}>
              <span
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full"
                style={{
                  background: 'rgba(201,168,76,0.20)',
                  color: '#E8C97A',
                  border: '1px solid rgba(201,168,76,0.35)',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#C9A84C' }} />
                Consultoria Contábil Pública
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-serif font-black leading-none tracking-tight"
              style={{
                fontSize: 'clamp(2.4rem, 5.5vw, 4rem)',
                color: '#FAF0D7',
              }}
            >
              Gestão Pública
              <br />
              <span style={{ color: '#E8C97A' }}>mais eficiente,</span>
              <br />
              resultados reais.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-base lg:text-lg leading-relaxed max-w-lg"
              style={{ color: 'rgba(250,240,215,0.75)' }}
            >
              {COMPANY_INFO.description}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mt-2">
              <a
                href="#servicos"
                onClick={(e) => { e.preventDefault(); scrollTo('#servicos') }}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg
                  font-semibold text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                  color: '#2D0A17',
                }}
              >
                Nossos Serviços
                <ChevronRight size={18} />
              </a>
              <a
                href="#contato"
                onClick={(e) => { e.preventDefault(); scrollTo('#contato') }}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg
                  font-semibold text-base transition-all duration-300 hover:-translate-y-1
                  border-2 hover:bg-white/10"
                style={{
                  color: '#FAF0D7',
                  borderColor: 'rgba(250,240,215,0.4)',
                }}
              >
                Fale Conosco
              </a>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              variants={itemVariants}
              className="mt-4 pt-6 border-t flex items-center gap-8 flex-wrap"
              style={{ borderColor: 'rgba(250,240,215,0.15)' }}
            >
              {[
                { value: '+30', label: 'Anos' },
                { value: '+50', label: 'Municípios' },
                { value: '100%', label: 'Dedicação' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div
                    className="font-black text-2xl font-serif"
                    style={{ color: '#E8C97A' }}
                  >
                    {s.value}
                  </div>
                  <div className="text-xs font-medium mt-0.5" style={{ color: 'rgba(250,240,215,0.60)' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right – Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: 'radial-gradient(circle, rgba(201,168,76,0.25) 0%, transparent 70%)',
                  filter: 'blur(32px)',
                  transform: 'scale(1.3)',
                }}
                aria-hidden="true"
              />
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Logo size={240} variant="icon" light />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('#sobre')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.5, duration: 0.5 }, y: { delay: 1.5, duration: 2, repeat: Infinity } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
          cursor-pointer border-0 bg-transparent"
        aria-label="Rolar para baixo"
        style={{ color: 'rgba(250,240,215,0.50)' }}
      >
        <span className="text-xs font-medium tracking-widest uppercase">Explore</span>
        <ArrowDown size={18} />
      </motion.button>
    </section>
  )
}
