import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle,
} from 'lucide-react'
import { AnimatedSection } from '@/components/common/AnimatedSection'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { COMPANY_INFO } from '@/constants/content'
import type { ContactFormData } from '@/types'

function ContactInfoItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof MapPin
  label: string
  value: string
  href?: string
}) {
  return (
    <div className="flex gap-4">
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: 'rgba(201,168,76,0.20)' }}
      >
        <Icon size={18} style={{ color: '#E8C97A' }} strokeWidth={1.8} />
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: 'rgba(250,240,215,0.50)' }}>
          {label}
        </p>
        {href ? (
          <a
            href={href}
            className="text-sm font-medium transition-colors hover:text-[#E8C97A]"
            style={{ color: '#FAF0D7' }}
          >
            {value}
          </a>
        ) : (
          <p className="text-sm font-medium" style={{ color: '#FAF0D7' }}>
            {value}
          </p>
        )}
      </div>
    </div>
  )
}

const inputClass =
  'w-full px-4 py-3 rounded-lg text-sm border bg-white transition-all duration-200 ' +
  'placeholder:text-gray-400 focus:outline-none focus:ring-2'

const inputStyle = {
  borderColor: 'rgba(107,26,46,0.15)',
  color: '#1A1A2E',
}

const focusStyle = {
  '--tw-ring-color': '#C9A84C',
  '--tw-ring-opacity': '0.5',
} as React.CSSProperties

export function Contact() {
  const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>()

  const onSubmit = async (_data: ContactFormData) => {
    setSubmitState('loading')
    // Simulated form submission (replace with real API call / mailto / etc.)
    await new Promise((r) => setTimeout(r, 1500))
    setSubmitState('success')
    reset()
    setTimeout(() => setSubmitState('idle'), 5000)
  }

  return (
    <section
      id="contato"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #4A1020 0%, #6B1A2E 100%)' }}
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" aria-hidden="true" />

      {/* Decorative orb */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(201,168,76,0.10) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-14">
          <SectionTitle
            tag="Fale Conosco"
            title="Entre em Contato"
            subtitle="Nossa equipe está pronta para atendê-lo. Envie sua mensagem e responderemos o mais breve possível."
            light
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Left – Contact Info */}
          <AnimatedSection direction="left" className="lg:col-span-2">
            <div className="flex flex-col gap-7">
              <ContactInfoItem
                icon={MapPin}
                label="Endereço"
                value={COMPANY_INFO.address}
              />
              {COMPANY_INFO.phones.map((p) => (
                <ContactInfoItem
                  key={p}
                  icon={Phone}
                  label="Telefone"
                  value={p}
                  href={`tel:${p.replace(/\D/g, '')}`}
                />
              ))}
              <ContactInfoItem
                icon={Mail}
                label="E-mail"
                value={COMPANY_INFO.email}
                href={`mailto:${COMPANY_INFO.email}`}
              />
              <ContactInfoItem
                icon={Clock}
                label="Horário de Atendimento"
                value="Segunda a Sexta: 8h às 18h"
              />

              {/* Separator */}
              <div className="h-px" style={{ background: 'rgba(250,240,215,0.15)' }} />

              {/* Direct email CTA */}
              <div>
                <p className="text-sm mb-3" style={{ color: 'rgba(250,240,215,0.65)' }}>
                  Prefere enviar um e-mail diretamente?
                </p>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-lg
                    transition-all duration-200 hover:scale-105"
                  style={{
                    background: 'rgba(201,168,76,0.20)',
                    color: '#E8C97A',
                    border: '1px solid rgba(201,168,76,0.40)',
                  }}
                >
                  <Mail size={15} />
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Right – Form */}
          <AnimatedSection direction="right" delay={0.15} className="lg:col-span-3">
            <div
              className="rounded-2xl p-8 lg:p-10"
              style={{ background: 'white', boxShadow: '0 20px 60px rgba(0,0,0,0.25)' }}
            >
              <h3 className="font-serif font-bold text-xl mb-6" style={{ color: '#1A1A2E' }}>
                Envie sua Mensagem
              </h3>

              {/* Success message */}
              {submitState === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 rounded-xl mb-6"
                  style={{ background: 'rgba(22,163,74,0.08)', border: '1px solid rgba(22,163,74,0.25)' }}
                >
                  <CheckCircle2 size={20} style={{ color: '#16a34a' }} />
                  <p className="text-sm font-medium" style={{ color: '#15803d' }}>
                    Mensagem enviada com sucesso! Entraremos em contato em breve.
                  </p>
                </motion.div>
              )}

              {/* Error message */}
              {submitState === 'error' && (
                <div
                  className="flex items-center gap-3 p-4 rounded-xl mb-6"
                  style={{ background: 'rgba(220,38,38,0.06)', border: '1px solid rgba(220,38,38,0.20)' }}
                >
                  <AlertCircle size={20} style={{ color: '#dc2626' }} />
                  <p className="text-sm font-medium" style={{ color: '#b91c1c' }}>
                    Erro ao enviar. Tente novamente ou ligue para nós.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: '#4A5568' }}>
                      Nome completo *
                    </label>
                    <input
                      {...register('name', { required: 'Nome é obrigatório' })}
                      placeholder="Seu nome"
                      className={inputClass}
                      style={{ ...inputStyle, ...focusStyle }}
                    />
                    {errors.name && (
                      <p className="text-xs mt-1" style={{ color: '#dc2626' }}>
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: '#4A5568' }}>
                      E-mail *
                    </label>
                    <input
                      {...register('email', {
                        required: 'E-mail é obrigatório',
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: 'E-mail inválido',
                        },
                      })}
                      type="email"
                      placeholder="seu@email.com"
                      className={inputClass}
                      style={{ ...inputStyle, ...focusStyle }}
                    />
                    {errors.email && (
                      <p className="text-xs mt-1" style={{ color: '#dc2626' }}>
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: '#4A5568' }}>
                    Telefone
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    placeholder="(81) 00000-0000"
                    className={inputClass}
                    style={{ ...inputStyle, ...focusStyle }}
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: '#4A5568' }}>
                    Assunto *
                  </label>
                  <select
                    {...register('subject', { required: 'Selecione um assunto' })}
                    className={inputClass}
                    style={{ ...inputStyle, ...focusStyle }}
                  >
                    <option value="">Selecione um assunto...</option>
                    <option value="contabilidade">Contabilidade Pública</option>
                    <option value="tributaria">Consultoria Tributária</option>
                    <option value="orcamentaria">Gestão Orçamentária</option>
                    <option value="licitacoes">Licitações e Contratos</option>
                    <option value="auditoria">Auditoria Interna</option>
                    <option value="capacitacao">Capacitação</option>
                    <option value="outro">Outro assunto</option>
                  </select>
                  {errors.subject && (
                    <p className="text-xs mt-1" style={{ color: '#dc2626' }}>
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: '#4A5568' }}>
                    Mensagem *
                  </label>
                  <textarea
                    {...register('message', {
                      required: 'Mensagem é obrigatória',
                      minLength: { value: 20, message: 'Mensagem muito curta (mínimo 20 caracteres)' },
                    })}
                    rows={5}
                    placeholder="Descreva como podemos ajudá-lo..."
                    className={`${inputClass} resize-none`}
                    style={{ ...inputStyle, ...focusStyle }}
                  />
                  {errors.message && (
                    <p className="text-xs mt-1" style={{ color: '#dc2626' }}>
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitState === 'loading' || submitState === 'success'}
                  className="mt-2 flex items-center justify-center gap-2.5 py-4 rounded-lg
                    font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5
                    hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                  style={{
                    background: 'linear-gradient(135deg, #6B1A2E, #8B2840)',
                    color: '#FAF0D7',
                  }}
                >
                  {submitState === 'loading' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Enviar Mensagem
                    </>
                  )}
                </button>

                <p className="text-xs text-center" style={{ color: '#9CA3AF' }}>
                  * Campos obrigatórios. Seus dados são tratados com total sigilo.
                </p>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
