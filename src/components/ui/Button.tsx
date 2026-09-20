import type { ButtonProps } from '@/types'

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'text-[#FAF0D7] border-transparent shadow-md hover:shadow-lg hover:-translate-y-0.5',
  secondary:
    'bg-[#FAF0D7] text-[#6B1A2E] border-transparent hover:bg-[#E8D5A3] hover:-translate-y-0.5',
  outline:
    'bg-transparent text-[#6B1A2E] border-[#6B1A2E] hover:bg-[#6B1A2E] hover:text-[#FAF0D7] hover:-translate-y-0.5',
  ghost:
    'bg-transparent text-[#6B1A2E] border-transparent hover:bg-[#f5e8ec]',
}

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'right',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-lg border-2 ' +
    'transition-all duration-300 cursor-pointer select-none ' +
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A84C] ' +
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none '

  const gradientStyle =
    variant === 'primary'
      ? { background: 'linear-gradient(135deg, #6B1A2E 0%, #8B2840 100%)' }
      : {}

  const classes = [base, variantClasses[variant], sizeClasses[size], className].join(' ')

  const inner = (
    <>
      {icon && iconPosition === 'left' && !loading && icon}
      {loading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        children
      )}
      {icon && iconPosition === 'right' && !loading && icon}
    </>
  )

  if (href) {
    return (
      <a href={href} className={classes} style={gradientStyle}>
        {inner}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classes}
      style={gradientStyle}
    >
      {inner}
    </button>
  )
}
