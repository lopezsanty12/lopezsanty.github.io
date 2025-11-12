import React from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-slate-100">
    {children}
  </h2>
);

const TechIcon: React.FC<{ icon: string; name: string }> = ({ icon, name }) => (
  <div className="flex flex-col items-center justify-center p-3 bg-slate-200/50 dark:bg-slate-800/50 rounded-lg transition-transform transform hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/10 h-full">
    <div className="text-3xl text-indigo-600 dark:text-indigo-400 mb-2" dangerouslySetInnerHTML={{ __html: icon }} />
    <span className="text-xs text-center text-slate-600 dark:text-slate-300">{name}</span>
  </div>
);

const About: React.FC = () => {
  const skills = [
    { name: '.NET', icon: '<span>.NET</span>' },
    { name: 'PHP', icon: '<span>PHP</span>' },
    { name: 'React', icon: '<span>React</span>' },
    { name: 'Django', icon: '<span>DJ</span>' },
    { name: 'MySQL', icon: '<span>SQL</span>' },
    { name: 'SQL Server', icon: '<span>Svr</span>' },
    { name: 'PostgreSQL', icon: '<span>PgS</span>' },
    { name: 'Oracle', icon: '<span>Ora</span>' },
    { name: 'Prometheus', icon: '<span>Prm</span>' },
    { name: 'Grafana', icon: '<span>Grf</span>' },
    { name: 'Bash', icon: '<span>Bsh</span>' },
    { name: 'CRON', icon: '<span>Crn</span>' },
    { name: 'Selenium', icon: '<span>Se</span>' },
    { name: 'Cypress', icon: '<span>Cy</span>' },
    { name: 'Postman', icon: '<span>Pm</span>' },
    { name: 'Terraform', icon: '<span>Tf</span>' },
    { name: 'Ansible', icon: '<span>An</span>' },
    { name: 'Jenkins', icon: '<span>Jk</span>' },
    { name: 'Docker', icon: '<span>Dkr</span>' },
    { name: 'AWS', icon: '<span>AWS</span>' },
    { name: 'Azure', icon: '<span>Az</span>' },
    { name: 'DigitalOcean', icon: '<span>DO</span>' },
  ];

  return (
    <section id="about" className="py-24">
      <div className="text-center">
        <SectionTitle>Sobre Mí</SectionTitle>
      </div>
      <div className="grid md:grid-cols-5 gap-16 items-center">
        <div className="md:col-span-3 text-lg text-slate-600 dark:text-slate-300 space-y-4">
          <p>
            Soy Ingeniero en Sistemas con una profunda pasión por la cultura DevOps y la aplicación de tecnologías emergentes para optimizar tanto el rendimiento profesional como personal. Mi enfoque principal radica en la automatización de procesos en diversas áreas en las que he adquirido experiencia, incluyendo desarrollo de software, administración de bases de datos y aseguramiento de calidad (QA).
          </p>
          <p>
            Cuento con experiencia práctica en computación en la nube, trabajando con plataformas líderes como AWS, Azure y DigitalOcean. He implementado prácticas utilizando herramientas clave de estas plataformas y del ecosistema DevOps, incluyendo Terraform para infraestructura como código, IAM, Route53, S3 y EC2 en AWS, así como Azure Container Registry. Además, tengo experiencia en la creación de entornos de pruebas continuas con Jenkins y Ansible, integrándolos eficazmente con la infraestructura en la nube.
          </p>
        </div>
        <div className="md:col-span-2">
          <div className="grid grid-cols-4 gap-4">
            {skills.map((skill) => (
              <TechIcon key={skill.name} icon={skill.icon} name={skill.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
