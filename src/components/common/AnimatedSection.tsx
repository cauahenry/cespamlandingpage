import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import type { AnimatedSectionProps } from '@/types'

export function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const dirMap = {
    up:    { y: 48, x: 0 },
    down:  { y: -48, x: 0 },
    left:  { y: 0, x: 48 },
    right: { y: 0, x: -48 },
    none:  { y: 0, x: 0 },
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...dirMap[direction] }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
