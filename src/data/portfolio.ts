export interface Project {
  title: string;
  description: string;
  tags: string[];
  metrics?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  image?: string;
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
    github: 'https://github.com/soymiguelfigueroa',
    linkedin: 'https://www.linkedin.com/in/soymiguelfigueroa/',
    availableForHire: true,
    availabilityStatus: 'Disponible para nuevos proyectos y contratación',
    cvUrl: `${import.meta.env.BASE_URL.replace(/\/$/, '')}/cv.pdf`,
  },
  projects: [
    {
      title: 'DekoArte – E-commerce de Arte y Decoración',
      description: 'Desarrollo y optimización de una plataforma de ventas para una marca de decoración premium. La tienda está diseñada para ofrecer una experiencia de navegación fluida e intuitiva, permitiendo a los usuarios explorar colecciones complejas filtrando por técnica, formato o estilo. El sistema integra carritos de compra optimizados, pasarelas de pago a plazos y módulos de reservas para consultorías de diseño.',
      tags: ['PrestaShop', 'Shopify', 'Liquid', 'n8n', 'JavaScript', 'CSS'],
      metrics: '+40% de reducción en tiempo de carga y 50% de aumento en el income',
      demoUrl: 'https://dekoarte.es/',
      featured: true,
      image: '/images/projects/dekoarte.webp',
      imageAlt: 'Captura de pantalla de la plataforma e-commerce Dekoarte',
    },
    {
      title: 'Alta Despedida – Servicios Turísticos a Medida',
      description: 'Desarrollo de sitio web transaccional para una agencia especializada en la organización de viajes para despedidas de solteros(as). El proyecto se centró en la creación de un embudo de conversión digital fluido (Lead Generation), implementando un sistema de cotización interactivo que recopila parámetros clave del cliente (presupuesto, destino, pasajeros). El entorno está preparado para integrarse de forma eficiente con flujos de automatización y sistemas CRM para la gestión ágil de prospectos.',
      tags: ['Wordpress', 'Elementor', 'JavaScript', 'CSS'],
      demoUrl: 'https://altadespedida.com/',
      featured: false,
      image: '/images/projects/altadespedida.webp',
      imageAlt: 'Captura de pantalla de la plataforma Alta Despedida',
    }
  ],
  skillCategories: [
    {
      category: 'Frontend',
      description: 'Interfaces interactivas, accesibles, responsivas y optimizadas para Core Web Vitals.',
      skills: [
        { name: 'TypeScript', highlight: true },
        { name: 'Astro', highlight: true },
        { name: 'Tailwind CSS', highlight: true },
        { name: 'HTML5' },
        { name: 'CSS3' },
        { name: 'Bootstrap' },
      ],
    },
    {
      category: 'Backend',
      description: 'Lógica de negocio sólida, arquitecturas limpias y APIs seguras.',
      skills: [
        { name: 'PHP', highlight: true },
        { name: 'Laravel', highlight: true },
        { name: 'CakePHP', highlight: true },
        { name: 'Arquitectura MVC & Clean Arch' },
      ],
    },
    {
      category: 'Bases de Datos',
      description: 'Modelado relacional y NoSQL con optimización de consultas e indexación.',
      skills: [
        { name: 'PostgreSQL', highlight: true },
        { name: 'MySQL / MariaDB', highlight: true },
        { name: 'Redis (Caching & Pub/Sub)', highlight: true },
        { name: 'Prisma ORM & Drizzle' },
      ],
    },
    {
      category: 'DevOps, Cloud & Herramientas',
      description: 'Contenerización, despliegues continuos y monitoreo en entornos de producción.',
      skills: [
        { name: 'Git & GitHub', highlight: true },
        { name: 'Docker & Docker Compose', highlight: true },
        { name: 'Cloudflare, Digital Ocean' },
        { name: 'AWS (S3, EC2, Lambda)' },
        { name: 'Linux / Bash scripting' },
      ],
    },
  ],
  experience: [
    {
      role: 'Full Stack Developer',
      company: 'Dekoarte',
      location: 'Remoto',
      period: 'Sep 2024 — Presente',
      description: 'Liderazgo en la transformación digital y evolución técnica del e-commerce mediante la migración integral de plataforma, automatizaciones de procesos y optimización continua de rendimiento.',
      achievements: [
        'Ejecución integral de la migración de plataforma desde PrestaShop hacia Shopify, adaptando y personalizando temas según la identidad de marca.',
        'Implementación de flujos de trabajo automatizados para notificaciones post-venta de pedidos vía WhatsApp.',
        'Desarrollo de la integración con la API de GLS para el rastreo y actualización de envíos en tiempo real.',
        'Diagnóstico y optimización técnica de Core Web Vitals para maximizar la velocidad de carga, retención y posicionamiento SEO.',
      ],
      technologies: ['Shopify', 'PrestaShop', 'Liquid', 'JavaScript', 'n8n', 'API REST (GLS)', 'Core Web Vitals'],
    },
    {
      role: 'Web Developer',
      company: 'Proyecto Online',
      location: 'Remoto',
      period: 'Sep 2021 — Jul 2026',
      description: 'Desarrollo y gestión integral de soluciones CMS y comercio electrónico, creación de plugins y módulos personalizados, e integraciones con sistemas externos.',
      achievements: [
        'Gestión y mantenimiento de plataformas CMS con WordPress y soluciones de e-commerce con PrestaShop y WooCommerce.',
        'Desarrollo de plugins y módulos a medida para extender la funcionalidad de sitios web.',
        'Implementación y personalización de temas a medida junto a maquetación con page builders.',
        'Integración de sistemas externos mediante APIs e importación masiva de datos (categorías, productos y clientes).',
        'Despliegue y mantenimiento de proyectos en servidores de hosting y contenedores Docker.',
      ],
      technologies: ['WordPress', 'WooCommerce', 'PrestaShop', 'PHP', 'JavaScript', 'Docker', 'APIs REST', 'MySQL'],
    },
    {
      role: 'Backend Developer',
      company: 'Alegra',
      location: 'Remoto',
      period: 'Oct 2023 — Ene 2024',
      description: 'Desarrollo backend en el área de Ingresos (Income) del producto contable/administrativo, diseño de servicios serverless en AWS y gestión de bases de datos.',
      achievements: [
        'Desarrollo de proyectos y lógica de negocio backend para el área de Ingresos utilizando PHP con Zend Framework.',
        'Mantenimiento y soporte de componentes de la interfaz de usuario en Sencha.',
        'Actualización y modelado de entidades y relaciones en la base de datos MySQL.',
        'Ejecución de pruebas automatizadas end-to-end con Cypress para asegurar la estabilidad del sistema.',
        'Gestión de funciones serverless AWS Lambda, repositorios en CodeCommit y despliegues con CloudFormation bajo metodología SCRUM.',
      ],
      technologies: ['PHP', 'Zend Framework', 'MySQL', 'AWS (Lambda, CloudFormation)', 'Cypress', 'Sencha', 'SCRUM'],
    },
  ],
  education: [
    {
      degree: 'Ingeniería en Informática (B.S. in Computer Science)',
      institution: 'Universidad Nacional Experimental de la Gran Caracas (UNEXCA)',
      period: '2019',
      description: 'Formación académica orientada al desarrollo e ingeniería de software, estructuras de datos, algoritmos, arquitectura de sistemas y bases de datos.',
      type: 'degree',
    },
    {
      degree: 'Curso Avanzado de Laravel',
      institution: 'Platzi',
      period: 'Certificado Oficial',
      description: 'Arquitectura MVC, Eloquent ORM avanzado, middlewares, colas de trabajo, eventos y pruebas automatizadas.',
      type: 'certification',
      credentialUrl: 'https://platzi.com/p/miguelf90/curso/1959-course/diploma/detalle/',
    },
    {
      degree: 'Curso Avanzado de PHP',
      institution: 'Platzi',
      period: 'Certificado Oficial',
      description: 'Programación orientada a objetos avanzada, patrones de diseño, manejo de excepciones y buenas prácticas.',
      type: 'certification',
      credentialUrl: 'https://platzi.com/p/miguelf90/curso/1462-course/diploma/detalle/',
    },
    {
      degree: 'API REST con PHP',
      institution: 'Platzi',
      period: 'Certificado Oficial',
      description: 'Diseño e implementación de servicios web RESTful, autenticación, serialización de datos y manejo de respuestas HTTP.',
      type: 'certification',
      credentialUrl: 'https://platzi.com/p/miguelf90/curso/1638-course/diploma/detalle/',
    },
    {
      degree: 'Backend con ExpressJS',
      institution: 'Platzi',
      period: 'Certificado Oficial',
      description: 'Creación de aplicaciones backend y microservicios asíncronos con Node.js, Express, routing y middlewares.',
      type: 'certification',
      credentialUrl: 'https://platzi.com/p/miguelf90/curso/11971-course/diploma/detalle/',
    },
    {
      degree: 'PostgreSQL',
      institution: 'Platzi',
      period: 'Certificado Oficial',
      description: 'Modelado relacional avanzado, índices especializados, funciones almacenadas y optimización de rendimiento.',
      type: 'certification',
      credentialUrl: 'https://platzi.com/p/miguelf90/curso/1480-course/diploma/detalle/',
    },
    {
      degree: 'MySQL y MariaDB',
      institution: 'Platzi',
      period: 'Certificado Oficial',
      description: 'Administración de bases de datos relacionales, optimización de consultas complejas, indexación y transacciones ACID.',
      type: 'certification',
      credentialUrl: 'https://platzi.com/p/miguelf90/curso/4203-course/diploma/detalle/',
    },
    {
      degree: 'Fundamentos de Bases de Datos',
      institution: 'Platzi',
      period: 'Certificado Oficial',
      description: 'Modelado entidad-relación, normalización, diseño relacional y fundamentos de consultas SQL.',
      type: 'certification',
      credentialUrl: 'https://platzi.com/p/miguelf90/curso/1566-course/diploma/detalle/',
    },
    {
      degree: 'Administración de Servidores Linux',
      institution: 'Platzi',
      period: 'Certificado Oficial',
      description: 'Gestión del sistema operativo, seguridad, permisos, automatización con scripts de Bash y configuración de servicios.',
      type: 'certification',
      credentialUrl: 'https://platzi.com/p/miguelf90/curso/1667-course/diploma/detalle/',
    },
    {
      degree: 'Digital Ocean',
      institution: 'Platzi',
      period: 'Certificado Oficial',
      description: 'Despliegue y configuración de Droplets, gestión de redes virtuales, balanceadores de carga y almacenamiento cloud.',
      type: 'certification',
      credentialUrl: 'https://platzi.com/p/miguelf90/curso/1653-course/diploma/detalle/',
    },
    {
      degree: 'Jenkins',
      institution: 'Platzi',
      period: 'Certificado Oficial',
      description: 'Integración continua y entrega continua (CI/CD), automatización de pipelines y testing de software.',
      type: 'certification',
      credentialUrl: 'https://platzi.com/p/miguelf90/curso/1436-course/diploma/detalle/',
    },
    {
      degree: 'Curso Profesional de Git y GitHub',
      institution: 'Platzi',
      period: 'Certificado Oficial',
      description: 'Control de versiones profesional, flujo colaborativo, branching strategies y gestión de repositorios.',
      type: 'certification',
      credentialUrl: 'https://platzi.com/p/miguelf90/curso/1557-course/diploma/detalle/',
    },
    {
      degree: 'Automatizaciones con n8n',
      institution: 'Platzi',
      period: 'Certificado Oficial',
      description: 'Construcción de flujos automatizados de trabajo, integración de APIs y orquestación de servicios.',
      type: 'certification',
      credentialUrl: 'https://platzi.com/p/miguelf90/curso/12245-course/diploma/detalle/',
    },
    {
      degree: 'Claude AI',
      institution: 'Platzi',
      period: 'Certificado Oficial',
      description: 'Prompt engineering, asistencia en codificación, automatización y aplicación de modelos LLM.',
      type: 'certification',
      credentialUrl: 'https://platzi.com/p/miguelf90/curso/12651-course/diploma/detalle/',
    },
    {
      degree: 'Introducción a la Inteligencia Artificial',
      institution: 'Platzi',
      period: 'Certificado Oficial',
      description: 'Fundamentos de IA, modelos de aprendizaje automático y aplicaciones en el desarrollo de software.',
      type: 'certification',
      credentialUrl: 'https://platzi.com/p/miguelf90/curso/11157-course/diploma/detalle/',
    },
    {
      degree: 'TailwindCSS',
      institution: 'Platzi',
      period: 'Certificado Oficial',
      description: 'Desarrollo de interfaces responsivas y sistemas de diseño modernos utility-first con Tailwind CSS.',
      type: 'certification',
      credentialUrl: 'https://platzi.com/p/miguelf90/curso/11886-course/diploma/detalle/',
    },
  ],
};
