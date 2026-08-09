// ─────────────────────────────────────────────────────────────────────────
// Single source of truth for all portfolio content.
// Edit this file to update anything on the site — no other file needs touching.
// ─────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Anupam Singh',
  initials: 'AS',
  role: 'Full-Stack Developer',
  stack: 'MERN · NestJS · React',
  tagline:
    'I build and operate production systems — from billing pipelines to multi-model AI platforms — engineered to hold up under real-world load.',
  location: 'Faridabad, India',
  email: 'anupamsingh2389@gmail.com',
  phone: '+91 70651-69819',
  github: 'https://github.com/anupamsingh-engineer',
  githubHandle: 'anupamsingh-engineer',
  linkedin: 'https://www.linkedin.com/in/anupamsinghdev',
  linkedinHandle: 'anupamsinghdev',
  site: 'https://anupam-mern-portfolio.vercel.app',
  resumeUrl: '/anupam_singh_resume.pdf',
  summary:
    'Full-Stack Developer with 4+ years architecting and scaling production web applications on the MERN stack and NestJS. Owns backend systems end-to-end — multi-provider API orchestration, multi-gateway subscription billing, revenue attribution, and role-based access control — alongside performant, production React frontends. Experienced across the full delivery lifecycle: system design, AWS deployment/observability, and Agile collaboration in distributed teams.',
  availableForWork: true,
} as const

export const stats = [
  { label: 'Years of experience', value: '4+' },
  { label: 'LLM providers integrated', value: '8+' },
  { label: 'Payment gateways integrated', value: '6+' },
  { label: 'REST endpoints shipped', value: '70+' },
] as const

export type ExperienceGroup = {
  title: string
  bullets: string[]
}

export type Experience = {
  company: string
  companyUrl?: string
  location: string
  role: string
  subtitle?: string
  /** Platform-specific scale metrics — only shown for the role they belong to. */
  scale?: string
  period: string
  /** Use for roles with thematically grouped ownership areas. */
  groups?: ExperienceGroup[]
  /** Use for simpler, ungrouped roles. */
  highlights?: string[]
  tech: string[]
  /** Product/company links relevant to this role (e.g. the platforms shipped). */
  links?: { label: string; url: string }[]
}

export const experience: Experience[] = [
  {
    company: 'Lenny.ai',
    location: 'Israel — Remote',
    role: 'Software Engineer (Full Stack)',
    subtitle: 'BERTI.AI (multi-model AI platform) & scholarship-management platform',
    scale: '100K+ registered students · 220K+ applications submitted',
    period: 'May 2023 — Present',
    groups: [
      {
        title: 'Multi-Provider AI Platform (BERTI.AI)',
        bullets: [
          'Architected a multi-provider LLM orchestration layer in NestJS unifying **8+ AI providers** (OpenAI GPT, Anthropic Claude, Google Gemini, DeepSeek, xAI Grok, Perplexity, plus Stability AI/Leonardo AI/ByteDance for image generation) behind a single pluggable **model-registry/dispatch pattern**, enabling any-model routing from one API contract.',
          'Built a **side-by-side multi-model comparison UI** (React 18, Redux Toolkit, Ant Design) letting users query **up to 3 AI models simultaneously** with per-response voting and regeneration — the product’s core differentiating feature.',
          'Implemented deterministic **SHA-256-based conversation threading** so regenerated and parallel multi-model responses stayed correctly linked to session state; integrated **speech-to-text (Google Speech API)** into the core chat service.',
        ],
      },
      {
        title: 'Billing, Monetization & Access Control',
        bullets: [
          'Built and maintained **multi-gateway subscription billing** (PayPal, Stripe, CheckoutChamp, Paddle, ArcaMax) across two products — subscription lifecycle (create/upgrade/cancel/refund), OAuth2 client-credentials flows, and **webhook-driven payment reconciliation** with trace-ID-correlated audit logging.',
          'Designed a full **coupon/voucher engine** (creation, redemption tracking, usage analytics) and a **usage-metering system** enforcing free/paid/voucher tier token & request quotas, with automated threshold-based alerts.',
          'Implemented **role-based access control (RBAC)** using CASL, subscribed directly to Redux auth state to reactively rebuild permission rules and gate UI/API access down to individual features without page reloads.',
        ],
      },
      {
        title: 'Growth, Attribution & Analytics',
        bullets: [
          'Designed a **partner/affiliate revenue-attribution system** from scratch — postback endpoints, encrypted partner API keys, click-to-conversion tracking, and an audit-logged revenue-event pipeline.',
          'Integrated **Meta Conversions API** (server-side, with fbc/fbp signal capture at checkout) and GA4 event tracking for cross-platform ad attribution; instrumented **150+ frontend components** across Mixpanel, PostHog, GA4, and Hotjar for funnel and conversion analytics.',
        ],
      },
      {
        title: 'Platform Architecture, APIs & DevOps',
        bullets: [
          'Designed and shipped **70+ REST endpoints** across a Fastify-based NestJS backend, fully documented via Swagger/OpenAPI, with global JWT authentication, Google OAuth2, and Super Admin/Admin role separation.',
          'Built **multi-tenant SaaS routing** for a single React SPA serving multiple client organizations off one codebase — **hostname-based tenant resolution** with dynamic API endpoint switching across tenant, B2B, and super-admin backends.',
          'Owned backend deployment on **AWS EC2** (PM2, Nginx reverse proxy) and frontend deployment via S3 + CloudFront + Route 53; set up a production-pattern **observability stack** (Prometheus, Loki, Tempo, Grafana) for metrics, logs, and distributed tracing.',
        ],
      },
      {
        title: 'Admin & Product Platforms',
        bullets: [
          'Built a **dynamic, multi-theme scholarship-application form builder** with configurable eligibility logic, and an end-to-end admin workflow (publish → review → rank → select winner) using React, Redux-Saga, and Ant Design.',
          'Identified and remediated an **XSS vulnerability** by implementing **DOMPurify sanitization** across 10+ components rendering user-submitted HTML — a shipped, code-reviewed security fix.',
        ],
      },
    ],
    tech: ['NestJS', 'React 18', 'Redux Toolkit', 'Redux-Saga', 'Fastify', 'Ant Design', 'AWS', 'Stripe', 'PayPal', 'CASL'],
    links: [
      { label: 'Lenny.ai', url: 'https://lenny.ai/' },
      { label: 'Berti.ai', url: 'https://berti.ai/' },
    ],
  },
  {
    company: 'Welkin Ring Digital Solutions',
    location: 'Faridabad',
    role: 'JavaScript Developer (MERN)',
    period: 'Apr 2022 — Apr 2023',
    highlights: [
      'Built secure and scalable backend systems using Node.js, Express, and MySQL, delivering **high-performance APIs**.',
      'Developed web applications with an integrated **HDFC payment gateway**, ensuring smooth transactions and accurate data handling.',
      'Migrated **legacy PHP systems to Node.js**, improving scalability and maintainability.',
      'Optimized database performance through **query optimization and indexing** in MySQL, **reducing load times by 30%**.',
    ],
    tech: ['Node.js', 'Express', 'MySQL', 'PHP Migration', 'HDFC Payment Gateway'],
  },
]

export type Project = {
  name: string
  tagline: string
  description: string[]
  tech: string[]
  liveUrl?: string
  githubUrl?: string
  /** Demo videos (walkthrough, architecture, etc.) shown as links on the card. */
  videos?: { label: string; url: string }[]
  accent: 'violet' | 'cyan'
}

export const projects: Project[] = [

  {
    name: 'NeoDrive',
    tagline: 'Cloud File Storage Platform',
    description: [
      'Architected a full-stack cloud storage platform (Google Drive–style) supporting hierarchical folders, **direct-to-S3 uploads/downloads** (presigned PUT + CloudFront-signed GET, bypassing the API server), quota-managed storage, public link sharing, and Razorpay subscription billing across **~36 REST endpoints**.',
      'Engineered a **two-phase upload pipeline** with atomic MongoDB compare-and-increment quota reservations, eliminating a **race condition** that allowed concurrent uploads to jointly exceed storage limits; implemented **defense-in-depth security** (double-submit CSRF, NoSQL-injection sanitization, Redis-backed rate limiting).',
      'Deployed a production observability stack (**Prometheus, Grafana, Jaeger**) tracking **12+ custom business metrics**, with OpenTelemetry distributed tracing correlated to structured Pino logs via AsyncLocalStorage-propagated request/trace IDs.',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'AWS S3/CloudFront', 'Redis', 'BullMQ', 'Docker', 'Prometheus', 'Grafana', 'Jaeger'],
    githubUrl: 'https://github.com/anupamsingh-engineer/NeoDrive',
    videos: [
      { label: 'Product Walkthrough', url: 'https://drive.google.com/file/d/1PwmXRT2v2z9mnZ46Cwt4PJQ9LLvCVpNm/view?usp=sharing' },
      { label: 'Architecture Walkthrough', url: 'https://drive.google.com/file/d/1YF8-X5a8wxpagEOA-dA0iYF4nyTSeI6H/view?usp=sharing' },
    ],
    accent: 'cyan',
  },
    {
    name: 'Blogify',
    tagline: 'Full-Stack Microservices Blog Platform',
    description: [
      'Architected and deployed a production microservices platform of **4 independently deployable services** (API gateway, user, blog, AI) with strict per-service data ownership across MongoDB and PostgreSQL, communicating via REST, a **RabbitMQ event backbone** (3 durable topic exchanges), and real-time WebSockets.',
      'Built a stateless JWT authentication system with **refresh-token rotation and reuse detection**, Redis-backed instant revocation, CSRF protection, and RBAC; implemented the **circuit breaker pattern (Opossum)** with a fail-open strategy across Redis, RabbitMQ, and inter-service calls.',
      'Containerized a **12-container stack** via Docker Compose on AWS EC2 with GitHub Actions CI/CD, and instrumented every service with **OpenTelemetry tracing (Tempo)**, Prometheus metrics, and Loki logging correlated via propagated request IDs.',
    ],
    tech: ['React 19', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'RabbitMQ', 'Redis', 'Docker', 'AWS', 'Prometheus', 'Grafana'],
    githubUrl: 'https://github.com/anupamsingh-engineer/blogify-microservices-app',
    videos: [
      { label: 'Product Walkthrough', url: 'https://drive.google.com/file/d/1NN2UMVwcI6mdU0oE1oAT_q8a_lekt8Lg/view?usp=sharing' },
    ],
    accent: 'violet',
  },
]

export type SkillGroup = {
  label: string
  items: string[]
}

export const skills: SkillGroup[] = [
  { label: 'Languages', items: ['JavaScript', 'TypeScript', 'C/C++', 'HTML/CSS', 'PHP'] },
  { label: 'Frontend', items: ['React.js', 'Next.js', 'Redux Toolkit', 'Redux-Saga', 'Tailwind CSS', 'Ant Design', 'Shadcn UI'] },
  { label: 'Backend', items: ['Node.js', 'Express.js', 'NestJS', 'Fastify', 'REST APIs', 'Swagger/OpenAPI', 'WebSockets'] },
  { label: 'Databases & ORM', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'DynamoDB', 'Mongoose', 'Sequelize'] },
  { label: 'Payments & Billing', items: ['PayPal', 'Stripe', 'CheckoutChamp', 'Paddle', 'Razorpay', 'Webhook Reconciliation'] },
  { label: 'Auth & Access Control', items: ['JWT', 'OAuth2', 'Google Auth', 'CASL (RBAC)', 'Clerk.js', 'Arcjet'] },
  {
    label: 'Cloud & DevOps',
    items: ['AWS (EC2/S3/CloudFront/Route 53)', 'DynamoDB', 'SES', 'Docker', 'Docker Compose', 'Nginx', 'PM2', 'GitHub Actions'],
  },
  { label: 'Observability', items: ['Prometheus', 'Grafana', 'Loki', 'Tempo', 'Jaeger', 'OpenTelemetry'] },
  { label: 'Messaging & Analytics', items: ['Redis', 'RabbitMQ', 'Bull/BullMQ', 'Socket.io', 'Mixpanel', 'PostHog', 'GA4', 'Hotjar'] },
]

// Flat list used for the marquee strip — order tuned for visual variety.
export const marqueeSkills = [
  'TypeScript', 'Node.js', 'NestJS', 'React', 'Next.js', 'MongoDB', 'PostgreSQL', 'AWS',
  'Docker', 'Redis', 'RabbitMQ', 'Stripe', 'OpenTelemetry', 'Prometheus', 'JWT / OAuth2',
]

export type EducationItem = {
  school: string
  degree: string
  period: string
}

export const education: EducationItem[] = [
  { school: 'Gurugram University', degree: 'Master of Computer Applications (MCA)', period: 'Sep 2023 — May 2025' },
  { school: 'Maharshi Dayanand University, Rohtak', degree: 'Bachelor of Computer Applications (BCA)', period: 'Aug 2019 — Jun 2022' },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
] as const
