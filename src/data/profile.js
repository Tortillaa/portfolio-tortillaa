export const profile = {
  name: "Aitor Pérez",
  headline:
    "Desarrollador de aplicaciones multiplataforma y data analyst en Barcelona. Uniendo software y análisis de datos para crear tecnología útil.",
  about: {
    intro:
      "Me llamo Aitor, soy programador y analista de datos, y vivo en Barcelona. Desde pequeño tenía claro a qué me quería dedicar: empecé con juegos en Scratch y fui escalando, por eso me gusta estar al día con las tecnologías.",
    trajectoryLabel: "Mi trayectoria",
    path: [
      {
        label: "Desarrollo",
        text: "Estudié Desarrollo de Aplicaciones Multiplataforma con React y Java. Eso me dio una base lógica sólida sobre cómo se construye software.",
      },
      {
        label: "Datos",
        text: "En las prácticas me pasé al análisis de datos. Ahora diseño procesos ETL que convierten datos en bruto en ideas claras para tomar decisiones.",
      },
    ],
  },
  experience: {
    role: "Data analyst intern",
    company: "Foxize",
    contract: "contrato de prácticas",
    meta: "Ene. 2026 – actualidad · Barcelona · híbrido",
    bullets: [
      "Diseño y ejecución de procesos ETL con Python y SQL",
      "Optimización de flujos poco eficientes hacia pipelines ETL reutilizables",
      "Bases técnicas para procesos de datos escalables y mantenibles",
    ],
  },
  education: [
    {
      title: "Grado superior: Desarrollo de Aplicaciones Multiplataforma",
      place: "Escola del Treball",
      extra: "en curso",
    },
    {
      title: "Grado medio: Sistemas Microinformáticos y Redes",
      place: "Torre de Malla",
    },
    {
      title: "Certificación Oracle + Alura (62 h)",
      place: "JavaScript, HTML & CSS, UI Design",
    },
  ],
  skillGroups: [
    {
      label: "Lenguajes",
      items: ["Java", "JavaScript", "Python", "HTML5", "CSS3", "XML", "SQL"],
    },
    {
      label: "Backend / tools",
      items: ["Node.js", "Docker", "Git", "GitHub", "GitLab"],
    },
    { label: "Frontend", items: ["React"] },
    {
      label: "Sistemas",
      items: ["Windows", "Linux", "Redes locales", "Hardware"],
    },
    { label: "Datos", items: ["ETL", "Python", "SQL"] },
    {
      label: "Herramientas IA",
      items: ["Cursor", "GrokBot", "Windsurf"],
    },
    {
      label: "Idiomas",
      items: ["Español (nativo)", "Catalán (nativo)", "Inglés (First Certificate)"],
    },
    { label: "Interés", items: ["IA", "Ciberseguridad"] },
  ],
  projects: [
    {
      title: "Portfolio web",
      description: "React + Vite + Three.js. Deploy en GitHub Pages.",
      href: "https://tortillaa.github.io/portfolio-tortillaa/",
    },
    {
      title: "Coming soon",
      description: "Nuevo proyecto en camino.",
    },
  ],
  contact: {
    cta: "¿Colaboramos?",
    email: "aitor.house@hotmail.com",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/aitor-perez-2b070b2b1",
      },
      { label: "GitHub", href: "https://github.com/Tortillaa" },
    ],
  },
};
