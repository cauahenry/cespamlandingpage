// ─── Navigation ──────────────────────────────────────────────────────────────

export interface NavLink {
  label: string
  href: string
}

// ─── Sections ─────────────────────────────────────────────────────────────────

export interface Stat {
  value: string
  label: string
  suffix: string
}

export interface Service {
  id: string
  icon: string
  title: string
  description: string
  color: 'primary' | 'accent'
}

export interface ValueGroup {
  id: string
  context: string
  icon: string
  items: readonly string[]
}

export interface VisionMission {
  title: string
  text: string
}

// ─── Contact Form ─────────────────────────────────────────────────────────────

export interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

// ─── Components ───────────────────────────────────────────────────────────────

export interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

export interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

export interface SectionTitleProps {
  tag?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  light?: boolean
  className?: string
}
