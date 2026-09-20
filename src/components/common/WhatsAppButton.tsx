import { motion } from 'framer-motion'

const WHATSAPP_NUMBER = '5581983636349' // +55 81 98363-6349
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Olá! Gostaria de saber mais sobre os serviços da CESPAM.'
)
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* Ícone SVG oficial do WhatsApp */
function WhatsAppIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.5L4 29l7.75-1.813A11.93 11.93 0 0 0 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3Z"
        fill="#fff"
      />
      <path
        d="M16 5.5c-5.247 0-9.5 4.253-9.5 9.5 0 2.087.67 4.02 1.81 5.593l-1.06 3.86 3.97-1.04A9.456 9.456 0 0 0 16 24.5c5.247 0 9.5-4.253 9.5-9.5S21.247 5.5 16 5.5Z"
        fill="#25D366"
      />
      <path
        d="M12.5 10.5c-.3-.7-.6-.71-.88-.72H11c-.25 0-.65.09-1 .46-.34.37-1.3 1.27-1.3 3.1s1.33 3.6 1.52 3.85c.18.25 2.6 4.13 6.4 5.63 3.16 1.25 3.8 1 4.49.94.68-.07 2.2-.9 2.51-1.77.31-.87.31-1.62.22-1.77-.09-.16-.34-.25-.71-.44-.37-.19-2.2-1.08-2.54-1.21-.34-.12-.59-.18-.84.19-.25.37-.97 1.21-1.19 1.46-.22.25-.43.28-.8.09-.37-.19-1.56-.57-2.97-1.83-1.1-.98-1.84-2.19-2.05-2.56-.22-.37-.02-.57.16-.75.17-.17.37-.44.55-.66.18-.22.25-.37.37-.62.13-.25.06-.47-.03-.66-.09-.19-.82-2.03-1.16-2.77Z"
        fill="#fff"
      />
    </svg>
  )
}

export function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ opacity: 0, scale: 0.5, x: -20 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 1.2, ease: 'easeOut' }}
      className="fixed bottom-8 left-8 z-50 flex items-center gap-2.5
        rounded-full shadow-xl cursor-pointer overflow-hidden group"
      style={{
        background: 'linear-gradient(135deg, #25D366, #1DA851)',
        boxShadow: '0 4px 20px rgba(37,211,102,0.40)',
        textDecoration: 'none',
      }}
      whileHover={{
        scale: 1.06,
        boxShadow: '0 8px 32px rgba(37,211,102,0.55)',
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pill que expande ao hover */}
      <span className="flex items-center gap-2.5 pl-3.5 pr-5 py-3">
        <WhatsAppIcon size={26} />

        {/* Texto que aparece ao hover — largura animada */}
        <motion.span
          className="overflow-hidden whitespace-nowrap text-sm font-semibold text-white"
          initial={{ width: 0, opacity: 0 }}
          whileHover={{ width: 'auto', opacity: 1 }}
          style={{ display: 'block' }}
        >
          {/* Texto visível só no grupo hover — fallback CSS */}
        </motion.span>
      </span>

      {/* Label — visível sempre em desktop, expande via CSS group-hover */}
      <style>{`
        .wa-label {
          max-width: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-width 0.35s ease, opacity 0.25s ease, padding-right 0.35s ease;
          white-space: nowrap;
          font-size: 0.875rem;
          font-weight: 600;
          color: #fff;
          padding-right: 0;
        }
        .wa-btn:hover .wa-label {
          max-width: 160px;
          opacity: 1;
          padding-right: 16px;
        }
      `}</style>

      {/* Wrapper com ícone + label */}
      <span className="wa-btn fixed bottom-8 left-8 z-50 flex items-center
        rounded-full cursor-pointer overflow-hidden"
        style={{ display: 'contents' }}
      />
    </motion.a>
  )
}

/* ── Versão simplificada e funcional (sem o CSS trick aninhado) ── */
export function WhatsAppFloatingButton() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp com a CESPAM"
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 1.2, type: 'spring', bounce: 0.4 }}
      className="fixed bottom-8 left-8 z-50 flex items-center gap-0
        rounded-full cursor-pointer select-none group overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #25D366, #128C7E)',
        boxShadow: '0 4px 24px rgba(37,211,102,0.45)',
        textDecoration: 'none',
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 8px 36px rgba(37,211,102,0.60)',
      }}
      whileTap={{ scale: 0.93 }}
    >
      {/* Ícone — sempre visível */}
      <span className="flex items-center justify-center w-14 h-14 flex-shrink-0">
        <WhatsAppIcon size={28} />
      </span>

      {/* Texto — oculto por padrão, expande no hover via CSS transition */}
      <span
        className="overflow-hidden transition-all duration-300 ease-out
          max-w-0 group-hover:max-w-[180px] opacity-0 group-hover:opacity-100
          whitespace-nowrap text-sm font-semibold text-white pr-0 group-hover:pr-5"
      >
        Falar no WhatsApp
      </span>
    </motion.a>
  )
}
