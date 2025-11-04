import React from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl font-bold text-center mb-4 text-slate-900 dark:text-slate-100">
    {children}
  </h2>
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const { title, description, imageUrl, tags } = project;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md dark:shadow-2xl hover:shadow-indigo-500/10 border border-slate-200 dark:border-slate-700 transition-all duration-300 transform hover:-translate-y-2 group flex flex-col">
      <div className="relative overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute inset-0 bg-black bg-opacity-20 dark:bg-opacity-40"></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">{title}</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

const Portfolio: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Mi Sitio Personal',
      description: 'Despliegue de landing page estática con GitHub Pages. Configuración de DNS en Hostinger y securización con Cloudflare (WAF, DDoS).',
      imageUrl: 'assets/portfolio1.png',
      tags: ['GitHub Pages', 'DNS', 'Cloudflare', 'WAF']
    },
    {
      title: 'Sistema de Monitoreo Avanzado',
      description: 'Implementación de un sistema de monitoreo para bases de datos con Prometheus y Grafana en un entorno Docker, con dashboards y alertas personalizadas.',
      imageUrl: 'https://dytvr9ot2sszz.cloudfront.net/wp-content/uploads/2020/04/image2-1-1024x482.png',
      tags: ['Prometheus', 'Grafana', 'Docker', 'Bash']
    },
    {
      title: 'QA Automatizado',
      description: 'Pruebas de automatización con Selenium y Cypress, y monitoreo de APIs con Postman de sistemas web para asegurar su funcionalidad y rendimiento.',
      imageUrl: 'https://www.leapwork.com/hubfs/images/thumbnails/blog-post/selenium-test-automation-blog-thumb.png',
      tags: ['Selenium', 'Cypress', 'Postman', 'APIs']
    },
  ];

  return (
    <section id="portfolio" className="py-24">
      <div className="text-center">
        <SectionTitle>Portafolio</SectionTitle>
        <p className="text-center max-w-2xl mx-auto text-slate-600 dark:text-slate-400 mb-12">
          Aquí hay una selección de algunos proyectos que reflejan mi experiencia. Cada uno representa un desafío único y una oportunidad para aprender y crecer.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;