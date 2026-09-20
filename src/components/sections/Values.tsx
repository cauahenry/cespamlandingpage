import { motion } from 'framer-motion'
import { Briefcase, Scale, Heart, Users, Check } from 'lucide-react'
import { AnimatedSection } from '@/components/common/AnimatedSection'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { VALUES } from '@/constants/content'

const ICONS = {
  Briefcase,
  Scale,
  Heart,
  Handshake: Users,
} as const

type IconKey = keyof typeof ICONS

/* ─────────────────────────────────────────────────────────
   Esquema visual por card:
   0 → fundo bordô escuro   (destaque)
   1 → branco
   2 → branco
   3 → creme suave
───────────────────────────────────────────────────────── */
const CARD_STYLES = [
  {
    bg:      '#6B1A2E',
    border:  'none',
    shadow:  '0 8px 32px rgba(107,26,46,0.30)',
    iconBg:  'rgba(250,240,215,0.15)',
    iconClr: '#E8C97A',
    tagClr:  '#E8C97A',
    sepClr:  'rgba(250,240,215,0.20)',
    itemClr: 'rgba(250,240,215,0.88)',
    checkClr:'#E8C97A',
  },
  {
    bg:      '#ffffff',
    border:  '1px solid rgba(107,26,46,0.09)',
    shadow:  '0 4px 20px rgba(107,26,46,0.08)',
    iconBg:  'rgba(107,26,46,0.07)',
    iconClr: '#6B1A2E',
    tagClr:  '#6B1A2E',
    sepClr:  'rgba(107,26,46,0.10)',
    itemClr: '#374151',
    checkClr:'#C9A84C',
  },
  {
    bg:      '#ffffff',
    border:  '1px solid rgba(107,26,46,0.09)',
    shadow:  '0 4px 20px rgba(107,26,46,0.08)',
    iconBg:  'rgba(107,26,46,0.07)',
    iconClr: '#6B1A2E',
    tagClr:  '#6B1A2E',
    sepClr:  'rgba(107,26,46,0.10)',
    itemClr: '#374151',
    checkClr:'#C9A84C',
  },
  {
    bg:      '#FAF0D7',
    border:  '1px solid rgba(107,26,46,0.09)',
    shadow:  '0 4px 20px rgba(107,26,46,0.07)',
    iconBg:  'rgba(107,26,46,0.07)',
    iconClr: '#6B1A2E',
    tagClr:  '#6B1A2E',
    sepClr:  'rgba(107,26,46,0.12)',
    itemClr: '#374151',
    checkClr:'#C9A84C',
  },
]

export function Values() {
  return (
    <section
      id="valores"
      className="py-24 lg:py-32"
      style={{ background: '#FAF0D7' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection className="mb-14">
          <SectionTitle
            tag="Nossos Valores"
            title="O que nos guia todos os dias"
            subtitle="Valores sólidos construídos ao longo de décadas de atuação na área pública."
          />
        </AnimatedSection>

        {/* Grid: 4 colunas, todas com mesma altura via items-stretch */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {VALUES.map((group, idx) => {
            const s = CARD_STYLES[idx]
            const IconComp = ICONS[(group.icon as IconKey)] ?? Users

            return (
              <motion.article
                key={group.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: idx * 0.10 }}
                /* h-full garante que todas as colunas ocupem a mesma altura */
                className="flex flex-col rounded-2xl p-7 h-full transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: s.bg,
                  border:     s.border,
                  boxShadow:  s.shadow,
                }}
              >
                {/* ① Ícone */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                  style={{ background: s.iconBg }}
                >
                  <IconComp size={20} strokeWidth={1.8} style={{ color: s.iconClr }} />
                </div>

                {/* ② Label de contexto — altura mínima fixa para alinhar os itens */}
                <div className="mb-4" style={{ minHeight: '72px' }}>
                  <p
                    className="text-[11px] font-extrabold uppercase tracking-widest leading-snug"
                    style={{ color: s.tagClr }}
                  >
                    {group.context}
                  </p>
                </div>

                {/* ③ Separador sutil */}
                <div
                  className="mb-5 h-px w-full flex-shrink-0"
                  style={{ background: s.sepClr }}
                />

                {/* ④ Lista de valores — sem mt-auto, começa sempre no mesmo ponto */}
                <ul className="flex flex-col gap-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <Check
                        size={13}
                        strokeWidth={3}
                        className="flex-shrink-0"
                        style={{ color: s.checkClr }}
                      />
                      <span
                        className="text-sm font-medium leading-tight"
                        style={{ color: s.itemClr }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
