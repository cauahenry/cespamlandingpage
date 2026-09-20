'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 480)
    window.addEventListener('scroll', toggle, { passive: true })
    return () => window.removeEventListener('scroll', toggle)
  }, [])

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={scrollUp}
          aria-label="Voltar ao topo"
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full
            flex items-center justify-center shadow-lg
            cursor-pointer border-0"
          style={{
            background: 'linear-gradient(135deg, #6B1A2E, #8B2840)',
            color: '#FAF0D7',
          }}
          whileHover={{ scale: 1.1, boxShadow: '0 8px 25px rgba(107,26,46,0.4)' }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUp size={20} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
