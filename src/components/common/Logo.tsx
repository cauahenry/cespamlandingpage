interface LogoProps {
  size?: number
  className?: string
  variant?: 'full' | 'icon'
  light?: boolean
}

export function Logo({
  size = 64,
  className = '',
  variant = 'full',
  light = false,
}: LogoProps) {
  const primaryColor = light ? '#FAF0D7' : '#6B1A2E'
  const bgColor      = light ? 'rgba(250,240,215,0.12)' : '#FAF0D7'
  const borderColor  = light ? '#FAF0D7' : '#6B1A2E'
  const gridColor    = light ? 'rgba(250,240,215,0.25)' : '#E8C97A'
  const textColor    = light ? '#FAF0D7' : '#6B1A2E'

  const w = size
  const h = Math.round(size * 1.26)

  if (variant === 'icon') {
    return (
      <svg
        width={w}
        height={h}
        viewBox="0 0 200 252"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="CESPAM logo"
      >
        {/* Outer border */}
        <rect x="2" y="2" width="196" height="248" rx="14" ry="14"
          fill={bgColor} stroke={borderColor} strokeWidth="5"/>

        {/* Grid pattern */}
        <defs>
          <pattern id="grid-icon" width="22" height="22" patternUnits="userSpaceOnUse" x="8" y="8">
            <path d="M 22 0 L 0 0 0 22" fill="none" stroke={gridColor} strokeWidth="0.9"/>
          </pattern>
          <clipPath id="content-clip-icon">
            <rect x="7" y="7" width="186" height="188" rx="8"/>
          </clipPath>
        </defs>
        <rect x="7" y="7" width="186" height="188" fill={`url(#grid-icon)`}/>

        {/* Arcs — center at (7, 200) */}
        <g clipPath="url(#content-clip-icon)">
          <path d="M 7,150 A 50,50  0 0,1 57,200"  fill="none" stroke={primaryColor} strokeWidth="13" strokeLinecap="round"/>
          <path d="M 7,110 A 90,90  0 0,1 97,200"  fill="none" stroke={primaryColor} strokeWidth="13" strokeLinecap="round"/>
          <path d="M 7,68  A 132,132 0 0,1 139,200" fill="none" stroke={primaryColor} strokeWidth="13" strokeLinecap="round"/>
          <path d="M 7,25  A 175,175 0 0,1 182,200" fill="none" stroke={primaryColor} strokeWidth="13" strokeLinecap="round"/>
        </g>

        {/* Separator line */}
        <line x1="7" y1="200" x2="193" y2="200" stroke={borderColor} strokeWidth="2.5"/>

        {/* CESPAM text */}
        <text x="100" y="236"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="30" fontWeight="700"
          fill={textColor} textAnchor="middle" letterSpacing="4">
          CESPAM
        </text>
      </svg>
    )
  }

  // Full variant: logo + text side by side
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={w * 0.75}
        height={h * 0.75}
        viewBox="0 0 200 252"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="CESPAM logo"
      >
        <rect x="2" y="2" width="196" height="248" rx="14" ry="14"
          fill={bgColor} stroke={borderColor} strokeWidth="5"/>
        <defs>
          <pattern id="grid-full" width="22" height="22" patternUnits="userSpaceOnUse" x="8" y="8">
            <path d="M 22 0 L 0 0 0 22" fill="none" stroke={gridColor} strokeWidth="0.9"/>
          </pattern>
          <clipPath id="content-clip-full">
            <rect x="7" y="7" width="186" height="188" rx="8"/>
          </clipPath>
        </defs>
        <rect x="7" y="7" width="186" height="188" fill="url(#grid-full)"/>
        <g clipPath="url(#content-clip-full)">
          <path d="M 7,150 A 50,50  0 0,1 57,200"  fill="none" stroke={primaryColor} strokeWidth="13" strokeLinecap="round"/>
          <path d="M 7,110 A 90,90  0 0,1 97,200"  fill="none" stroke={primaryColor} strokeWidth="13" strokeLinecap="round"/>
          <path d="M 7,68  A 132,132 0 0,1 139,200" fill="none" stroke={primaryColor} strokeWidth="13" strokeLinecap="round"/>
          <path d="M 7,25  A 175,175 0 0,1 182,200" fill="none" stroke={primaryColor} strokeWidth="13" strokeLinecap="round"/>
        </g>
        <line x1="7" y1="200" x2="193" y2="200" stroke={borderColor} strokeWidth="2.5"/>
        <text x="100" y="236"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="30" fontWeight="700"
          fill={textColor} textAnchor="middle" letterSpacing="4">
          CESPAM
        </text>
      </svg>
      <div className="flex flex-col leading-tight">
        <span
          className="font-bold tracking-widest text-lg"
          style={{ color: light ? '#FAF0D7' : '#6B1A2E' }}
        >
          CESPAM
        </span>
        <span
          className="text-xs font-medium tracking-wide opacity-80 max-w-[180px] leading-tight"
          style={{ color: light ? '#E8C97A' : '#4A1020' }}
        >
          Consultoria Contábil Pública
        </span>
      </div>
    </div>
  )
}
