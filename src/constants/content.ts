// ─── Informações da Empresa ──────────────────────────────────────────────────

export const COMPANY_INFO = {
  name: 'CESPAM',
  tagline: 'Excelência em Consultoria Contábil Pública',
  description:
    'Empresa especializada em consultoria na área pública, oferecendo soluções que contribuem para aumentar a eficiência e a eficácia da gestão governamental.',
  address: 'Rua Visconde de Inhaúma, 410 – Maurício de Nassau, Caruaru – PE',
  phones: ['(81) 3721.7522', '(81) 99644.1200'],
  email: 'cespam@cespam.com.br',
  hoursWeekdays: 'Segunda a Sexta: 8h às 18h',
  mapUrl:
    'https://www.google.com/maps/search/Rua+Visconde+de+Inhaúma,+410,+Caruaru,+PE',
} as const

// ─── Visão e Missão ───────────────────────────────────────────────────────────

export const VISION = {
  title: 'Visão',
  text: 'Alcançar o melhor desempenho no segmento de consultoria na Área pública, oferecendo produtos e soluções que possam contribuir para aumentar a eficiência e a eficácia da gestão governamental.',
} as const

export const MISSION = {
  title: 'Missão',
  text: 'Prestar serviços técnicos de notória especialização, que ofereçam soluções para o Município, com foco em resultados.',
} as const

// ─── Valores ─────────────────────────────────────────────────────────────────

export const VALUES = [
  {
    id: 'professional',
    context: 'No exercício da atividade profissional, atuar com:',
    icon: 'Briefcase',
    items: ['Ética', 'Competência', 'Criatividade', 'Disposição'],
  },
  {
    id: 'decision',
    context: 'No processo de decisão, buscar:',
    icon: 'Scale',
    items: ['Verdade', 'Consenso', 'Justiça'],
  },
  {
    id: 'personal',
    context: 'Na conduta pessoal, portar-se com:',
    icon: 'Heart',
    items: ['Dignidade', 'Caráter', 'Espírito de cooperação'],
  },
  {
    id: 'relationship',
    context: 'No relacionamento entre clientes, equipes e profissionais:',
    icon: 'Handshake',
    items: [
      'Responsabilidade',
      'Profissionalismo',
      'Comunicação',
      'Independência',
      'Transparência',
    ],
  },
] as const

// ─── Serviços ─────────────────────────────────────────────────────────────────

export const SERVICES = [
  {
    id: 'accounting',
    icon: 'BookOpen',
    title: 'Contabilidade Pública',
    description:
      'Escrituração e controle das finanças municipais conforme as normas PCASP, garantindo conformidade e transparência na gestão fiscal.',
    color: 'primary',
  },
  {
    id: 'tax',
    icon: 'Calculator',
    title: 'Consultoria Tributária',
    description:
      'Assessoria especializada em tributação municipal, recuperação de receitas e otimização da arrecadação pública.',
    color: 'accent',
  },
  {
    id: 'budget',
    icon: 'BarChart3',
    title: 'Gestão Orçamentária',
    description:
      'Elaboração e acompanhamento do PPA, LDO e LOA, garantindo cumprimento das metas fiscais estabelecidas na LRF.',
    color: 'primary',
  },
  {
    id: 'bidding',
    icon: 'FileText',
    title: 'Licitações e Contratos',
    description:
      'Assessoria em processos licitatórios e gestão de contratos administrativos conforme a Lei 14.133/2021.',
    color: 'accent',
  },
  {
    id: 'audit',
    icon: 'Shield',
    title: 'Auditoria Interna',
    description:
      'Controle e fiscalização da gestão pública municipal, prevenindo irregularidades e otimizando processos internos.',
    color: 'primary',
  },
  {
    id: 'training',
    icon: 'GraduationCap',
    title: 'Capacitação',
    description:
      'Treinamento e desenvolvimento de servidores públicos em contabilidade pública, licitações e gestão governamental.',
    color: 'accent',
  },
] as const

// ─── Estatísticas ─────────────────────────────────────────────────────────────

export const STATS = [
  { value: '+30', label: 'Anos de Experiência', suffix: '' },
  { value: '+50', label: 'Municípios Atendidos', suffix: '' },
  { value: '100%', label: 'Comprometimento', suffix: '' },
  { value: '100%', label: 'Conformidade Legal', suffix: '' },
] as const

// ─── Navegação ────────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Visão & Missão', href: '#missao' },
  { label: 'Valores', href: '#valores' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Contato', href: '#contato' },
] as const
