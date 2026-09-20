import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react'
import { Logo } from '@/components/common/Logo'
import { NAV_LINKS, COMPANY_INFO } from '@/constants/content'

export function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer style={{ background: '#2D0A17' }} aria-label="Rodapé">
      {/* Top bar accent */}
      <div className="h-1" style={{ background: 'linear-gradient(90deg, #6B1A2E, #C9A84C, #6B1A2E)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1 – Brand */}
          <div className="lg:col-span-1">
            <Logo size={60} variant="icon" light />
            <p className="mt-4 text-sm leading-relaxed" style={{ color: 'rgba(250,240,215,0.65)' }}>
              Excelência em consultoria contábil pública. Soluções especializadas para
              a gestão governamental eficiente.
            </p>
            <div className="mt-5 flex gap-3">
              {/* Social placeholders */}
              {['in', 'f'].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s === 'in' ? 'LinkedIn' : 'Facebook'}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold
                    transition-all duration-200 hover:scale-110"
                  style={{
                    background: 'rgba(250,240,215,0.1)',
                    color: '#E8C97A',
                    border: '1px solid rgba(232,201,122,0.3)',
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 – Quick links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: '#E8C97A' }}>
              Menu Rápido
            </h3>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                    className="text-sm transition-colors duration-200 hover:translate-x-1 inline-flex items-center gap-1.5 group"
                    style={{ color: 'rgba(250,240,215,0.70)' }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all group-hover:scale-125"
                      style={{ background: '#C9A84C' }}
                    />
                    <span className="group-hover:text-[#FAF0D7] transition-colors">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 – Contact info */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: '#E8C97A' }}>
              Contato
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" style={{ color: '#C9A84C' }} />
                <span className="text-sm leading-relaxed" style={{ color: 'rgba(250,240,215,0.70)' }}>
                  {COMPANY_INFO.address}
                </span>
              </li>
              {COMPANY_INFO.phones.map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <Phone size={16} className="flex-shrink-0" style={{ color: '#C9A84C' }} />
                  <a
                    href={`tel:${p.replace(/\D/g, '')}`}
                    className="text-sm hover:text-[#FAF0D7] transition-colors"
                    style={{ color: 'rgba(250,240,215,0.70)' }}
                  >
                    {p}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <Mail size={16} className="flex-shrink-0" style={{ color: '#C9A84C' }} />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-sm hover:text-[#FAF0D7] transition-colors"
                  style={{ color: 'rgba(250,240,215,0.70)' }}
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 – Hours */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: '#E8C97A' }}>
              Horários
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <Clock size={16} className="flex-shrink-0 mt-0.5" style={{ color: '#C9A84C' }} />
                <div>
                  <p className="text-sm font-medium" style={{ color: '#FAF0D7' }}>
                    Segunda a Sexta
                  </p>
                  <p className="text-sm" style={{ color: 'rgba(250,240,215,0.65)' }}>
                    8h às 18h
                  </p>
                </div>
              </div>
              <a
                href={COMPANY_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5
                  rounded-lg transition-all duration-200 hover:scale-105 w-fit"
                style={{
                  background: 'rgba(201,168,76,0.15)',
                  color: '#E8C97A',
                  border: '1px solid rgba(201,168,76,0.35)',
                }}
              >
                <MapPin size={13} />
                Ver no Google Maps
                <ExternalLink size={11} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: 'rgba(250,240,215,0.08)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row
          items-center justify-between gap-3">
          <p className="text-xs" style={{ color: 'rgba(250,240,215,0.45)' }}>
            © {year} CESPAM – Todos os direitos reservados.
          </p>
          <p className="text-xs" style={{ color: 'rgba(250,240,215,0.30)' }}>
            Consultoria Contábil Pública · Caruaru – PE
          </p>
        </div>
      </div>
    </footer>
  )
}
