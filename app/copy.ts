export type Lang = "es" | "en";

/** Spans are data, not copy — shared across languages. Decimal years. */
export const SPANS = [
  { start: 2020.0, end: 2022.0, current: false },
  { start: 2022.0, end: 2026.62, current: true },
  { start: 2026.08, end: 2026.62, current: true },
];

export const AXIS_YEARS = [2020, 2021, 2022, 2023, 2024, 2025, 2026];

const links = {
  mail: "sebasmollinedo@gmail.com",
  phone: "+502 5901-1927",
  linkedin: "linkedin.com/in/sebasmollinedo",
  github: "github.com/sebasmollinedo-dotcom",
};

export type Copy = {
  meta: { title: string; description: string };
  nav: { toggleLabel: string };
  hero: {
    name: string;
    place: string;
    available: string;
    cta: string;
    role: string;
    lede: string;
    photoAlt: string;
    photoCaption: string;
  };
  gauge: {
    label: string;
    before: string;
    after: string;
    figure: string;
    caption: string;
  };
  work: {
    eyebrow: string;
    title: string;
    items: { title: string; body: string; tags: string[] }[];
  };
  path: {
    eyebrow: string;
    title: string;
    chartLabel: string;
    current: string;
    closed: string;
    items: { year: string; role: string; org: string; short: string; body: string }[];
  };
  stack: {
    eyebrow: string;
    title: string;
    note: string;
    groups: { k: string; v: string }[];
  };
  credentials: {
    eyebrow: string;
    title: string;
    items: { title: string; org: string; meta: string }[];
  };
  personal: {
    eyebrow: string;
    title: string;
    body: string[];
    readout: { k: string; v: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    links: { label: string; value: string; href: string }[];
  };
  footer: string;
};

export const copy: Record<Lang, Copy> = {
  es: {
    meta: {
      title: "Sebastián Mollinedo — Gerente de Tecnología y Analítica",
      description:
        "Construyo sistemas que convierten operación en decisiones medibles: ERPs multi-sucursal, modelos predictivos y automatización con IA. Guatemala.",
    },
    nav: { toggleLabel: "Cambiar idioma" },
    hero: {
      name: "Sebastián Mollinedo",
      place: "Guatemala",
      available: "Disponible para nuevas oportunidades",
      cta: "Descargar CV en PDF",
      role: "Gerente de Tecnología y Analítica",
      lede: "Construyo sistemas que convierten operación en decisiones medibles. ERPs multi-sucursal, modelos predictivos aplicados a precio e inventario, y automatización con inteligencia artificial.",
      photoAlt: "Retrato de Sebastián Mollinedo",
      photoCaption: "22 años · Guatemala",
    },
    gauge: {
      label: "Tiempo de gestión operativa, por proceso",
      before: "Antes",
      after: "Después",
      figure: "más del 90%",
      caption:
        "Reducción lograda al reemplazar hojas de cálculo y papel por el ERP que diseñé y desarrollé.",
    },
    work: {
      eyebrow: "Qué construyo",
      title: "Cuatro frentes, un mismo oficio",
      items: [
        {
          title: "ERP multi-sucursal",
          body: "Diseñé y desarrollé desde cero un ERP de 23 módulos —inventario, ventas, compras y reportería— para una operación de retail con múltiples sucursales. Sustituyó un flujo que vivía en hojas de cálculo y papel. Hoy lidero su expansión a nivel corporativo.",
          tags: ["Django", "PostgreSQL", "Docker"],
        },
        {
          title: "Analítica predictiva",
          body: "Modelos de retorno esperado por nivel de precio que incorporan estacionalidad, precios internacionales de materia prima, tasas de recompra y retención de clientes. El resultado se mide en rotación de inventario y utilidad, no en métricas de modelo.",
          tags: ["XGBoost", "Random Forest", "Kedro"],
        },
        {
          title: "Automatización con IA",
          body: "Servidores MCP y flujos en n8n: pedidos que entran solos desde WhatsApp al ERP, procesos operativos en Slack, y un asistente que permite consultar la base de datos corporativa en lenguaje natural. En producción, con uso diario.",
          tags: ["MCP", "n8n", "APIs de LLM"],
        },
        {
          title: "Manufactura — Forma3D",
          body: "Fundé y dirijo una operación de manufactura por impresión 3D bajo pedido, con clientes corporativos multinacionales. Gestiono producción, estructura de costos, ventas y relación con clientes.",
          tags: ["Producción", "Costos", "B2B"],
        },
      ],
    },
    path: {
      eyebrow: "Trayectoria",
      title: "De escribir el sistema a dirigir el área",
      chartLabel: "Períodos por posición",
      current: "En curso",
      closed: "Concluido",
      items: [
        {
          year: "2020",
          role: "Desarrollador de plataformas digitales",
          org: "Grupo empresarial de retail · Guatemala",
          short: "Desarrollador",
          body: "Entré a construir el ERP. Responsable único del ciclo completo: requerimientos, arquitectura, desarrollo, despliegue y mantenimiento.",
        },
        {
          year: "2022",
          role: "Gerente de Tecnología y Analítica",
          org: "Holding del grupo",
          short: "Gerente de Tecnología y Analítica",
          body: "Dirección del departamento con un equipo de 15 personas. Estrategia, prioridades y presupuesto del área, además del CRM y la venta omnicanal.",
        },
        {
          year: "2026",
          role: "Fundador y director",
          org: "Forma3D",
          short: "Fundador · Forma3D",
          body: "Manufactura por impresión 3D bajo pedido. En expansión hacia la distribución de insumos en Guatemala, bajo esquema B2B y B2C.",
        },
      ],
    },
    stack: {
      eyebrow: "Herramientas",
      title: "Con qué trabajo",
      note: "La mayor parte de mi trabajo son sistemas propietarios en producción, así que los repositorios son privados. Con gusto comento arquitectura y decisiones técnicas en una conversación.",
      groups: [
        { k: "Lenguajes", v: "Python · TypeScript · JavaScript · SQL · R" },
        { k: "Backend y datos", v: "Django · Kedro · PostgreSQL · Supabase · MinIO" },
        { k: "Frontend", v: "Next.js · React" },
        { k: "Machine Learning", v: "scikit-learn · XGBoost · Random Forest · pandas" },
        { k: "Infraestructura", v: "Docker · Git · Render · Vercel" },
        { k: "Automatización e IA", v: "n8n · MCP · APIs de LLM" },
        { k: "Inteligencia de negocio", v: "Tableau" },
      ],
    },
    credentials: {
      eyebrow: "Formación",
      title: "Credenciales",
      items: [
        {
          title: "Ingeniería Empresarial",
          org: "Universidad Francisco Marroquín",
          meta: "Graduación 2027",
        },
        {
          title: "Diploma del Bachillerato Internacional",
          org: "IB World School",
          meta: "Completo",
        },
        {
          title: "PMI Project Management Ready®",
          org: "Project Management Institute",
          meta: "2026 · 860 / 1000",
        },
        {
          title: "Microsoft Office Specialist — Excel Expert",
          org: "Microsoft",
          meta: "2026",
        },
      ],
    },
    personal: {
      eyebrow: "Fuera del trabajo",
      title: "Once años de tatami",
      body: [
        "Practiqué karate Kempo durante once años, hasta cinta negra. En 2019 gané el Campeonato Panamericano en combate por puntos — categoría de adultos, más de 180 libras. Tenía quince años.",
        "Competir enseña algo que el código no: el resultado se mide el día del torneo, no en los entrenamientos que uno cree que salieron bien. Construyo sistemas con la misma vara.",
      ],
      readout: [
        { k: "Disciplina", v: "Karate Kempo" },
        { k: "Grado", v: "Cinta negra" },
        { k: "Años de práctica", v: "11" },
        { k: "Modalidad", v: "Combate por puntos" },
        { k: "Categoría", v: "18+ · +180 lb" },
        { k: "Edad al ganar", v: "15" },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Hablemos",
      body: "Abierto a conversar sobre tecnología, datos y negocio. Respondo por correo o LinkedIn.",
      links: [
        { label: "CV", value: "Descargar en PDF", href: "/CV-Sebastian-Mollinedo.pdf" },
        { label: "Correo", value: links.mail, href: `mailto:${links.mail}` },
        { label: "Teléfono", value: links.phone, href: "tel:+50259011927" },
        { label: "LinkedIn", value: links.linkedin, href: `https://${links.linkedin}` },
        { label: "GitHub", value: links.github, href: `https://${links.github}` },
      ],
    },
    footer: "Guatemala",
  },

  en: {
    meta: {
      title: "Sebastián Mollinedo — Technology & Analytics Manager",
      description:
        "I build systems that turn operations into measurable decisions: multi-branch ERPs, predictive models, and AI automation. Guatemala.",
    },
    nav: { toggleLabel: "Switch language" },
    hero: {
      name: "Sebastián Mollinedo",
      place: "Guatemala",
      available: "Open to new opportunities",
      cta: "Download résumé (PDF)",
      role: "Technology & Analytics Manager",
      lede: "I build systems that turn operations into measurable decisions. Multi-branch ERPs, predictive models applied to pricing and inventory, and automation powered by AI.",
      photoAlt: "Portrait of Sebastián Mollinedo",
      photoCaption: "22 · Guatemala",
    },
    gauge: {
      label: "Operational handling time, per process",
      before: "Before",
      after: "After",
      figure: "over 90%",
      caption:
        "Reduction achieved by replacing spreadsheets and paper with the ERP I designed and built.",
    },
    work: {
      eyebrow: "What I build",
      title: "Four fronts, one craft",
      items: [
        {
          title: "Multi-branch ERP",
          body: "Designed and built from scratch a 23-module ERP — inventory, sales, purchasing, and reporting — for a retail operation with multiple branches. It replaced a workflow that lived in spreadsheets and on paper. I now lead its rollout across the group.",
          tags: ["Django", "PostgreSQL", "Docker"],
        },
        {
          title: "Predictive analytics",
          body: "Expected-return models by price level, factoring in seasonality, international raw-material prices, repurchase rates, and customer retention. Success is measured in inventory turnover and margin, not in model metrics.",
          tags: ["XGBoost", "Random Forest", "Kedro"],
        },
        {
          title: "AI automation",
          body: "MCP servers and n8n workflows: orders that flow straight from WhatsApp into the ERP, operational processes in Slack, and an assistant that answers questions against the corporate database in plain language. In production, used daily.",
          tags: ["MCP", "n8n", "LLM APIs"],
        },
        {
          title: "Manufacturing — Forma3D",
          body: "Founded and run a made-to-order 3D printing manufacturing operation serving multinational corporate clients. I manage production, cost structure, sales, and client relationships.",
          tags: ["Production", "Costing", "B2B"],
        },
      ],
    },
    path: {
      eyebrow: "Track record",
      title: "From writing the system to running the department",
      chartLabel: "Tenure by position",
      current: "Ongoing",
      closed: "Closed",
      items: [
        {
          year: "2020",
          role: "Digital platforms developer",
          org: "Retail group · Guatemala",
          short: "Developer",
          body: "Joined to build the ERP. Sole owner of the full cycle: requirements, architecture, development, deployment, and maintenance.",
        },
        {
          year: "2022",
          role: "Technology & Analytics Manager",
          org: "Group holding company",
          short: "Technology & Analytics Manager",
          body: "Running the department with a team of 15. Strategy, priorities, and budget for the area, plus the CRM and omnichannel sales build-out.",
        },
        {
          year: "2026",
          role: "Founder and director",
          org: "Forma3D",
          short: "Founder · Forma3D",
          body: "Made-to-order 3D printing manufacturing. Expanding into supply distribution in Guatemala under a B2B and B2C model.",
        },
      ],
    },
    stack: {
      eyebrow: "Toolkit",
      title: "What I work with",
      note: "Most of my work is proprietary systems running in production, so the repositories are private. Happy to walk through architecture and technical decisions in a conversation.",
      groups: [
        { k: "Languages", v: "Python · TypeScript · JavaScript · SQL · R" },
        { k: "Backend & data", v: "Django · Kedro · PostgreSQL · Supabase · MinIO" },
        { k: "Frontend", v: "Next.js · React" },
        { k: "Machine learning", v: "scikit-learn · XGBoost · Random Forest · pandas" },
        { k: "Infrastructure", v: "Docker · Git · Render · Vercel" },
        { k: "Automation & AI", v: "n8n · MCP · LLM APIs" },
        { k: "Business intelligence", v: "Tableau" },
      ],
    },
    credentials: {
      eyebrow: "Education",
      title: "Credentials",
      items: [
        {
          title: "B.Sc. Business Engineering",
          org: "Universidad Francisco Marroquín",
          meta: "Graduating 2027",
        },
        {
          title: "International Baccalaureate Diploma",
          org: "IB World School",
          meta: "Full diploma",
        },
        {
          title: "PMI Project Management Ready®",
          org: "Project Management Institute",
          meta: "2026 · 860 / 1000",
        },
        {
          title: "Microsoft Office Specialist — Excel Expert",
          org: "Microsoft",
          meta: "2026",
        },
      ],
    },
    personal: {
      eyebrow: "Outside work",
      title: "Eleven years on the mat",
      body: [
        "I trained Kempo karate for eleven years, up to black belt. In 2019 I won the Pan American Championship in point sparring — adult division, over 180 lb. I was fifteen.",
        "Competing teaches something code doesn't: the result is measured on tournament day, not in the sessions you thought went well. I build systems by the same standard.",
      ],
      readout: [
        { k: "Discipline", v: "Kempo karate" },
        { k: "Rank", v: "Black belt" },
        { k: "Years training", v: "11" },
        { k: "Format", v: "Point sparring" },
        { k: "Division", v: "18+ · 180 lb+" },
        { k: "Age when won", v: "15" },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk",
      body: "Open to conversations about technology, data, and business. Email or LinkedIn both reach me.",
      links: [
        { label: "Résumé", value: "Download PDF", href: "/CV-Sebastian-Mollinedo.pdf" },
        { label: "Email", value: links.mail, href: `mailto:${links.mail}` },
        { label: "Phone", value: links.phone, href: "tel:+50259011927" },
        { label: "LinkedIn", value: links.linkedin, href: `https://${links.linkedin}` },
        { label: "GitHub", value: links.github, href: `https://${links.github}` },
      ],
    },
    footer: "Guatemala",
  },
};
