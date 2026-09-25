# 🏛️ CESPAM — Landing Page Institucional

<div align="center">
  <img src="https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite_6-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
</div>

<br/>

Landing page institucional moderna, acessível e de alta performance desenvolvida para a **CESPAM (Consultoria Contábil Pública)**, empresa sediada em Caruaru – PE especializada em soluções estratégicas para a gestão pública municipal.

O projeto utiliza o ecossistema mais atual do React (v19) com Vite 6, Tailwind CSS v4, animações fluidas com Framer Motion e validação de formulários com React Hook Form.

---

## 🌟 Destaques do Projeto

- **Tecnologias de Ponta**: Construído sobre React 19, TypeScript e o novo Tailwind CSS v4.
- **Microinterações e Animações**: Transições suaves e efeitos de entrada com Framer Motion.
- **Seções Institucionais Completas**:
  - **Hero Section**: Apresentação de impacto e chamada para ação (*CTA*).
  - **Sobre a CESPAM**: História, posicionamento de mercado e credenciais.
  - **Missão, Visão e Valores**: Estrutura de princípios éticos e profissionais.
  - **Soluções & Serviços**: Grade detalhada de áreas de atuação em consultoria pública e contábil.
  - **Contato & Localização**: Informações de endereço, telefones, horário de atendimento e formulário integrado.
- **Formulários Interativos**: Gerenciamento de estado e validação através do `react-hook-form`.
- **Acessibilidade & Performance**: SEO otimizado, semântica limpa e pontuação elevada no Lighthouse.

---

## 🛠️ Stack Tecnológica

| Camada | Tecnologia |
|---|---|
| **Biblioteca de UI** | [React 19](https://react.dev/) |
| **Linguagem** | [TypeScript](https://www.typescriptlang.org/) |
| **Bundler & Build Tool** | [Vite 6](https://vitejs.dev/) |
| **Estilização** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Animações** | [Framer Motion](https://www.framer.com/motion/) |
| **Ícones** | [Lucide React](https://lucide.dev/) |
| **Formulários** | [React Hook Form](https://react-hook-form.com/) |

---

## 📁 Estrutura de Diretórios

```
cespamlandingpage/
├── public/                    # Assets estáticos e favicon
├── src/
│   ├── components/            # Componentes reutilizáveis
│   │   ├── common/            # Botões, containers e tipografia
│   │   ├── layout/            # Header, Navbar e Footer
│   │   ├── sections/          # Seções da página (Hero, Sobre, Serviços, Contato)
│   │   └── ui/                # Componentes atômicos de interface
│   ├── constants/             # Textos estáticos, dados da empresa e menus
│   ├── styles/                # CSS global e configurações do Tailwind
│   ├── types/                 # Interfaces e tipagens TypeScript
│   ├── App.tsx                # Montagem principal da aplicação
│   └── main.tsx               # Ponto de entrada do React
├── index.html                 # Template HTML
├── vite.config.ts             # Configuração do Vite e plugins
└── tsconfig.json              # Configurações do compilador TypeScript
```

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- Gerenciador de pacotes `npm` ou `yarn`

### 1. Clonar o repositório
```bash
git clone https://github.com/cauahenry/cespamlandingpage.git
cd cespamlandingpage
```

### 2. Instalar as dependências
```bash
npm install
```

### 3. Iniciar o servidor de desenvolvimento
```bash
npm run dev
```
Acesse no seu navegador: `http://localhost:5173`

### 4. Gerar build de produção
```bash
npm run build
```
Os arquivos otimizados serão gerados na pasta `dist/`.

---

## 👨‍💻 Desenvolvido por

**Cauã Henry** — [GitHub](https://github.com/cauahenry) | [LinkedIn](https://linkedin.com/in/cauahenry)
