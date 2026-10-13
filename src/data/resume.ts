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
  site: 'https://anupamsinghdev.vercel.app',
  resumeUrl: '/anupam_singh_resume.pdf',
  summary:
    'Full-Stack Developer with 4+ years building and operating production systems on Node.js, NestJS, React, and AWS. Owns backend architecture end-to-end — multi-provider integrations, subscription billing, revenue attribution, and distributed systems — on a platform serving 145K+ registered students and 300K+ submitted applications. Drives design decisions, deployment, and observability across the full delivery lifecycle.',
  availableForWork: true,
} as const

export const stats = [
  { label: 'Years of experience', value: '4+' },
  { label: 'Registered students on platform', value: '145K+' },
  { label: 'LLM providers integrated', value: '8+' },
  { label: 'Payment providers integrated', value: '5' },
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
    subtitle: 'LENNY.AI scholarship-management platform & BERTI.AI (multi-model AI platform)',
    scale: '145K+ registered students · 300K+ scholarship applications submitted',
    period: 'Aug 2023 — Present',
    groups: [
      {
        title: 'LENNY.AI — Scholarship Platform',
        bullets: [
          'Engineered a **20+ step branching signup funnel** (SignupV2) for LENNY.AI’s scholarship platform — conditional scholarship-offer variants, pricing-bucket resolution, and end-to-end referrer/UTM attribution — owning the platform’s **highest-traffic conversion path**.',
          'Built LENNY.AI’s **scholarship-management platform end-to-end** — a CRUD + publishing pipeline for scholarships, an applicant review workflow, and a configurable **rank-criteria/scoring system** for winner selection — plus a dynamic, **multi-theme application form builder**; remediated an **XSS vulnerability** via DOMPurify sanitization across 10+ components.',
          'Designed a **partner/affiliate revenue-attribution system** from scratch — postback endpoints, encrypted partner API keys, click-to-conversion tracking — integrated with **Meta Conversions API** (server-side fbc/fbp capture) and GA4; instrumented **150+ frontend components** across Mixpanel, PostHog, Clarity, and Hotjar; synced lead lifecycle via a **Mautic** email-automation integration.',
          'Built **multi-tenant SaaS routing** for a single React SPA serving multiple client organizations off one codebase, **eliminating the need for per-tenant deployments**; centralized JWT auto-injection and error normalization across **100+ API call sites** via a shared Axios interceptor layer.',
        ],
      },
      {
        title: 'BERTI.AI — Multi-Model AI Platform',
        bullets: [
          'Architected a **multi-provider LLM orchestration layer** (NestJS) unifying **8+ AI providers** (OpenAI GPT, Anthropic Claude, Google Gemini, DeepSeek, xAI Grok, Perplexity, Stability AI/Leonardo AI) for BERTI.AI, plus the **side-by-side multi-model comparison UI** (React 18, Redux Toolkit) letting users query **up to 3 AI models simultaneously** — the product’s core differentiator.',
        ],
      },
      {
        title: 'Platform-Wide',
        bullets: [
          'Built and maintained **multi-gateway subscription billing** across **5 payment providers** (PayPal, Stripe, CheckoutChamp, Paddle, ArcaMax) with OAuth2 client-credentials flows and **webhook-driven reconciliation**; designed a coupon/voucher engine and a tier-based **usage-metering system**.',
          'Designed and shipped the **core REST API surface** for the platform on a Fastify-based NestJS backend, standardizing auth and access control via global JWT middleware, Google OAuth2, and **CASL-based RBAC** down to individual features — fully documented via Swagger/OpenAPI.',
          'Owned **AWS deployment** — EC2, PM2, Nginx on the backend and S3 + CloudFront + Route 53 on the frontend, with transactional email delivery via **AWS SES**.',
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
      'Engineered a **two-phase upload pipeline** with atomic MongoDB compare-and-increment quota reservations, eliminating a **race condition** that allowed concurrent uploads to jointly exceed storage limits; built independent, **path-filtered CI/CD pipelines** (GitHub Actions) deploying frontend and backend separately; implemented **defense-in-depth security** (double-submit CSRF, NoSQL-injection sanitization, Redis-backed rate limiting).',
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
      'Architected and deployed a production microservices platform of **4 independently deployable services** (API gateway, user, blog, AI) with strict per-service data ownership across MongoDB and PostgreSQL and **zero cross-service database joins**, communicating via REST, a **RabbitMQ event backbone** (3 durable topic exchanges), and real-time WebSockets.',
      'Built a stateless JWT authentication system with **refresh-token rotation and reuse detection**, Redis-backed instant revocation, CSRF protection, and RBAC; implemented the **circuit breaker pattern (Opossum)** with a fail-open strategy across Redis, RabbitMQ, and inter-service calls, so infrastructure outages **degrade gracefully** instead of cascading into full failures.',
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
  { label: 'Payments & Billing', items: ['PayPal', 'Stripe', 'CheckoutChamp', 'Paddle', 'ArcaMax', 'Razorpay', 'Webhook Reconciliation'] },
  { label: 'Auth & Access Control', items: ['JWT', 'OAuth2', 'Google Auth', 'CASL (RBAC)', 'Clerk.js', 'Arcjet'] },
  {
    label: 'Cloud & DevOps',
    items: ['AWS (EC2/S3/CloudFront/Route 53)', 'DynamoDB', 'SES', 'Docker', 'Docker Compose', 'Nginx', 'PM2', 'GitHub Actions'],
  },
  { label: 'Observability', items: ['Prometheus', 'Grafana', 'Loki', 'Tempo', 'Jaeger', 'OpenTelemetry'] },
  { label: 'Messaging & Analytics', items: ['Redis', 'RabbitMQ', 'Bull/BullMQ', 'Socket.io', 'Mixpanel', 'PostHog', 'GA4', 'Hotjar', 'Clarity', 'Mautic'] },
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
