export interface Project {
  title: string;
  description: string;
  tags: string[];
  metrics?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  imageAlt?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: { name: string; highlight?: boolean }[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description?: string;
  type: 'degree' | 'certification';
  credentialUrl?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    tagline: string;
    bio: string;
    location: string;
    email: string;
    github: string;
    linkedin: string;
    availableForHire: boolean;
    availabilityStatus: string;
    cvUrl: string;
  };
  projects: Project[];
  skillCategories: SkillCategory[];
  experience: Experience[];
  education: EducationItem[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Miguel Angel Figueroa',
    role: 'Full Stack Developer',
    tagline: 'Desarrollo soluciones web modernas, escalables y de alto rendimiento de extremo a extremo.',
    bio: 'Ingeniero de software y desarrollador Full Stack apasionado por construir productos digitales con arquitectura limpia, interfaces intuitivas y APIs resilientes. Con experiencia diseñando desde la interfaz hasta la infraestructura en la nube.',
    location: 'Remoto / Disponible globalmente',
    email: 'contacto@miguelangelfigueroa.com',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    availableForHire: true,
    availabilityStatus: 'Disponible para nuevos proyectos y contratación',
    cvUrl: `${import.meta.env.BASE_URL.replace(/\/$/, '')}/cv.pdf`,
  },
  projects: [
    {
      title: 'Plataforma SaaS de Gestión y Analítica',
      description: 'Arquitectura completa de una aplicación SaaS multi-inquilino (multi-tenant) con autenticación basada en roles, procesamiento de pagos con Stripe y dashboard en tiempo real.',
      tags: ['TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
      metrics: '+40% de reducción en tiempo de onboarding y más de 10k eventos procesados/día.',
      demoUrl: 'https://demo-saas.example.com',
      githubUrl: 'https://github.com/example/saas-platform',
      featured: true,
    },
    {
      title: 'E-Commerce Headless de Alto Rendimiento',
      description: 'Tienda en línea desacoplada con catálogo optimizado, carrito persistente en el edge y checkout rápido. Integración con CMS headless para gestión ágil de contenidos.',
      tags: ['Astro', 'React', 'Node.js', 'Redis', 'Tailwind CSS', 'Stripe'],
      metrics: 'Lighthouse score de 99/100 y tasa de conversión incrementada en un 28%.',
      demoUrl: 'https://demo-ecommerce.example.com',
      githubUrl: 'https://github.com/example/headless-store',
      featured: true,
    },
    {
      title: 'API Microservicios & Motor de Búsqueda',
      description: 'Conjunto de microservicios contenerizados para indexación de datos y búsqueda semántica de alto volumen con caché distribuida y mensajería asíncrona.',
      tags: ['Node.js', 'Express', 'Docker', 'PostgreSQL', 'Redis', 'RabbitMQ'],
      metrics: 'Capacidad de respuesta sub-50ms bajo cargas de más de 1,500 solicitudes por segundo.',
      githubUrl: 'https://github.com/example/microservices-engine',
      featured: true,
    },
    {
      title: 'Dashboard de Finanzas Personales & Inversiones',
      description: 'Aplicación web progresiva (PWA) interactiva para seguimiento financiero, gráficos interactivos con sincronización bancaria segura y reportes automáticos.',
      tags: ['TypeScript', 'React', 'Tailwind CSS', 'FastAPI', 'Python', 'Chart.js'],
      metrics: 'Sincronización en segundo plano con soporte offline completo.',
      demoUrl: 'https://demo-finance.example.com',
      featured: false,
    },
  ],
  skillCategories: [
    {
      category: 'Frontend',
      description: 'Interfaces interactivas, accesibles, responsivas y optimizadas para Core Web Vitals.',
      skills: [
        { name: 'TypeScript', highlight: true },
        { name: 'React / Next.js', highlight: true },
        { name: 'Astro', highlight: true },
        { name: 'Tailwind CSS', highlight: true },
        { name: 'HTML5 & Semántica' },
        { name: 'CSS3 / Modern Layouts' },
        { name: 'State Management (Zustand/Redux)' },
        { name: 'Web Performance & SEO' },
      ],
    },
    {
      category: 'Backend & APIs',
      description: 'Lógica de negocio sólida, arquitecturas limpias y APIs seguras.',
      skills: [
        { name: 'Node.js', highlight: true },
        { name: 'Express / NestJS', highlight: true },
        { name: 'Python (FastAPI / Django)' },
        { name: 'RESTful APIs & GraphQL', highlight: true },
        { name: 'Autenticación (JWT, OAuth, NextAuth)' },
        { name: 'Arquitectura MVC & Clean Arch' },
        { name: 'WebSockets & Real-time' },
      ],
    },
    {
      category: 'Bases de Datos & Caché',
      description: 'Modelado relacional y NoSQL con optimización de consultas e indexación.',
      skills: [
        { name: 'PostgreSQL', highlight: true },
        { name: 'MongoDB', highlight: true },
        { name: 'Redis (Caching & Pub/Sub)', highlight: true },
        { name: 'Prisma ORM & Drizzle' },
        { name: 'Modelado relacional y migraciones' },
      ],
    },
    {
      category: 'DevOps, Cloud & Herramientas',
      description: 'Contenerización, despliegues continuos y monitoreo en entornos de producción.',
      skills: [
        { name: 'Git & GitHub Workflows', highlight: true },
        { name: 'Docker & Docker Compose', highlight: true },
        { name: 'CI/CD Pipelines (GitHub Actions)' },
        { name: 'Vercel, Netlify & Cloudflare' },
        { name: 'AWS (S3, EC2, Lambda básico)' },
        { name: 'Linux / Bash scripting' },
      ],
    },
  ],
  experience: [
    {
      role: 'Senior Full Stack Developer',
      company: 'Tech Solutions & Consulting',
      location: 'Remoto',
      period: '2023 — Presente',
      description: 'Liderazgo técnico en el diseño e implementación de aplicaciones web de misión crítica para clientes internacionales.',
      achievements: [
        'Diseñé y desplegué una arquitectura basada en microservicios que redujo la latencia en un 35%.',
        'Coordiné la migración de un frontend monolítico a Astro y Next.js, logrando un aumento del 40% en retención de usuarios.',
        'Implementé pipelines de CI/CD automatizados que recortaron los tiempos de despliegue a producción de 45 a 8 minutos.',
      ],
      technologies: ['TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    },
    {
      role: 'Full Stack Web Developer',
      company: 'Digital Innovation Studio',
      location: 'Híbrido',
      period: '2021 — 2023',
      description: 'Desarrollo de punta a punta de plataformas web, portales de comercio electrónico y paneles de administración a medida.',
      achievements: [
        'Construí más de 12 proyectos web integrando pasarelas de pago (Stripe, PayPal) y APIs de terceros.',
        'Mejoré el rendimiento de carga y SEO técnico en clientes clave, alcanzando puntuaciones Lighthouse superiores a 95.',
        'Mentoré a desarrolladores junior en buenas prácticas de código limpio, testing unitario y git flow.',
      ],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Redis'],
    },
    {
      role: 'Frontend & Junior Developer',
      company: 'Software Agency',
      location: 'Presencial',
      period: '2019 — 2021',
      description: 'Desarrollo de interfaces de usuario modernas, integración de APIs REST y optimización de maquetación responsiva.',
      achievements: [
        'Transformé diseños de Figma en componentes modulares, accesibles y totalmente responsivos.',
        'Optimicé el consumo de endpoints reduciendo llamadas innecesarias mediante estrategias de caché del lado del cliente.',
      ],
      technologies: ['JavaScript (ES6+)', 'React', 'HTML5/CSS3', 'Git', 'REST APIs'],
    },
  ],
  education: [
    {
      degree: 'Ingeniería en Sistemas / Computación',
      institution: 'Universidad Tecnológica',
      period: '2015 — 2020',
      description: 'Formación sólida en algoritmos, estructuras de datos, ingeniería de software, bases de datos y redes.',
      type: 'degree',
    },
    {
      degree: 'Certificación Profesional Full Stack Development',
      institution: 'Institución Tecnológica de Certificación',
      period: '2023',
      description: 'Especialización en desarrollo backend con Node.js, arquitecturas distribuidas y contenedores Docker.',
      type: 'certification',
      credentialUrl: 'https://example.com/credential/12345',
    },
    {
      degree: 'Certificación AWS Cloud Practitioner / Solutions',
      institution: 'Amazon Web Services',
      period: '2022',
      description: 'Fundamentos de infraestructura en la nube, seguridad, redes virtuales (VPC) y servicios serverless.',
      type: 'certification',
      credentialUrl: 'https://example.com/credential/aws-6789',
    },
  ],
};
