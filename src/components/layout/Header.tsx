import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { Logo } from '@/components/common/Logo'
import { NAV_LINKS, COMPANY_INFO } from '@/constants/content'

/* ── Underline animated nav link ─────────────────────────────────── */
function NavLink({
  href,
  label,
  isActive,
  scrolled,
  onClick,
}: {
  href: string
  label: string
  isActive: boolean
  scrolled: boolean
  onClick: () => void
}) {
  const activeColor  = scrolled ? '#6B1A2E' : '#E8C97A'
  const defaultColor = scrolled ? '#3D1020' : 'rgba(250,240,215,0.80)'

  return (
    <a
      href={href}
      onClick={(e) => { e.preventDefault(); onClick() }}
      className="relative px-1 py-2 text-sm font-medium group"
      style={{ color: isActive ? activeColor : defaultColor }}
    >
      {label}

      {/* Underline — slide-in on hover, stays visible when active */}
      <span
        className="absolute bottom-0 left-0 h-[2px] rounded-full transition-all duration-300 ease-out"
        style={{
          background: scrolled
            ? 'linear-gradient(90deg, #6B1A2E, #C9A84C)'
            : 'linear-gradient(90deg, #C9A84C, #E8C97A)',
          width: isActive ? '100%' : '0%',
        }}
      />

      {/* CSS hover handled inline with a trick: we use group-hover via the parent */}
      <style>{`
        a[href="${href}"]:hover > span {
          width: 100% !important;
        }
      `}</style>
    </a>
  )
}

export function Header() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)
  const [active,      setActive]      = useState('')

  /* Scroll listener */
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  /* Scroll spy */
  useEffect(() => {
    const sections = NAV_LINKS.map(l => document.querySelector(l.href))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActive('#' + e.target.id) })
      },
      { threshold: 0.4 }
    )
    sections.forEach(s => { if (s) observer.observe(s) })
    return () => observer.disconnect()
  }, [])

  /* Close drawer on resize */
  useEffect(() => {
    const h = () => { if (window.innerWidth >= 1024) setMobileOpen(false) }
    window.addEventListener('resize', h)
    return () => window.removeEventListener('resize', h)
  }, [])

  const handleNav = (href: string) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  /* Colors based on scroll state */
  const linkBg   = scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.04)'
  const shadow   = scrolled ? '0 2px 24px rgba(107,26,46,0.12)' : 'none'
  const border   = scrolled ? '1px solid rgba(107,26,46,0.08)' : 'none'

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background:    linkBg,
          backdropFilter: scrolled ? 'blur(18px)' : 'none',
          boxShadow:     shadow,
          borderBottom:  border,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">

            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); handleNav('#hero') }}
              aria-label="CESPAM – início"
              className="flex-shrink-0"
            >
              <Logo size={46} variant="full" light={!scrolled} />
            </a>

            {/* ── Desktop Nav ── */}
            <nav
              className="hidden lg:flex items-center gap-6"
              aria-label="Menu principal"
            >
              {NAV_LINKS.map(link => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  isActive={active === link.href}
                  scrolled={scrolled}
                  onClick={() => handleNav(link.href)}
                />
              ))}
            </nav>

            {/* ── Desktop Actions ── */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Phone */}
              <a
                href={`tel:${COMPANY_INFO.phones[0].replace(/\D/g, '')}`}
                className="flex items-center gap-1.5 text-sm font-medium transition-all duration-200
                  hover:opacity-80 hover:scale-[1.02]"
                style={{ color: scrolled ? '#6B1A2E' : '#E8C97A' }}
              >
                <Phone size={14} strokeWidth={2.2} />
                <span>{COMPANY_INFO.phones[0]}</span>
              </a>

              {/* CTA Button – "Fale Conosco" */}
              <motion.a
                href="#contato"
                onClick={(e) => { e.preventDefault(); handleNav('#contato') }}
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
                  text-sm font-semibold overflow-hidden transition-all duration-300"
                style={
                  scrolled
                    ? {
                        background: 'linear-gradient(135deg, #6B1A2E, #8B2840)',
                        color: '#FAF0D7',
                        boxShadow: '0 2px 12px rgba(107,26,46,0.30)',
                      }
                    : {
                        background: 'rgba(250,240,215,0.15)',
                        color: '#FAF0D7',
                        border: '1.5px solid rgba(250,240,215,0.50)',
                      }
                }
                whileHover={
                  scrolled
                    ? { scale: 1.04, boxShadow: '0 6px 20px rgba(107,26,46,0.40)' }
                    : { background: 'rgba(250,240,215,0.25)', scale: 1.04 }
                }
                whileTap={{ scale: 0.97 }}
              >
                Fale Conosco
              </motion.a>
            </div>

            {/* ── Mobile Hamburger ── */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileOpen}
              className="lg:hidden p-2 rounded-lg transition-colors"
              style={{ color: scrolled ? '#6B1A2E' : '#FAF0D7' }}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/55 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 flex flex-col p-6 lg:hidden"
              style={{ background: '#4A1020' }}
            >
              <div className="flex items-center justify-between mb-8">
                <Logo size={42} variant="full" light />
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Fechar menu"
                  className="p-2 rounded-lg"
                  style={{ color: '#FAF0D7' }}
                >
                  <X size={22} />
                </button>
              </div>

              <nav className="flex flex-col gap-1 flex-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                    className="px-4 py-3 rounded-lg text-base font-medium transition-all duration-200"
                    style={{
                      color:      active === link.href ? '#E8C97A' : 'rgba(250,240,215,0.80)',
                      background: active === link.href ? 'rgba(250,240,215,0.10)' : 'transparent',
                      borderLeft: active === link.href ? '2px solid #C9A84C' : '2px solid transparent',
                    }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto pt-6 border-t flex flex-col gap-3" style={{ borderColor: 'rgba(250,240,215,0.12)' }}>
                <a
                  href={`tel:${COMPANY_INFO.phones[0].replace(/\D/g, '')}`}
                  className="flex items-center gap-2 text-sm"
                  style={{ color: '#E8C97A' }}
                >
                  <Phone size={14} />
                  {COMPANY_INFO.phones[0]}
                </a>
                <a
                  href="#contato"
                  onClick={(e) => { e.preventDefault(); handleNav('#contato') }}
                  className="text-center py-3 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
                  style={{
                    background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                    color: '#2D0A17',
                  }}
                >
                  Fale Conosco
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
