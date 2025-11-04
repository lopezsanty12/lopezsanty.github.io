import React from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-slate-100">
    {children}
  </h2>
);

const ExperienceItem: React.FC<{ title: string; subtitle: string; date: string; children: React.ReactNode }> = ({ title, subtitle, date, children }) => (
    <div className="relative pl-8 sm:pl-12 py-6 group">
        <div className="flex items-center mb-1">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500 group-hover:bg-indigo-600 text-white flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.616V21a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.384m7.616 5.616a2.25 2.25 0 0 0 3.182-3.182l-1.06-1.06a2.25 2.25 0 0 0-3.182 0l-5.616 5.616m0 0L4.5 21.5" /></svg>
            </div>
            <div className="flex-1 ml-4">
                <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100">{title}</h4>
                <p className="text-sm text-indigo-600 dark:text-indigo-400">{subtitle}</p>
            </div>
            <div className="text-right text-sm text-slate-500 dark:text-slate-400 ml-4">{date}</div>
        </div>
        <div className="ml-10 text-slate-600 dark:text-slate-300">
            {children}
        </div>
        <div className="absolute top-0 left-3 h-full w-px bg-slate-200 dark:bg-slate-700 group-hover:bg-indigo-500 transition-colors"></div>
    </div>
);


const Experience: React.FC = () => {
  const workExperience = [
    {
      role: 'Administrador de Base de datos',
      company: 'MSPAS',
      date: 'Oct. 2023 – Actual',
      description: 'Gestión integral de bases de datos (MySQL, SQL Server, PostgreSQL, Oracle). Implementación de monitoreo con Prometheus y Grafana en Docker. Desarrollo de scripts Bash y CRON para automatización de tareas críticas como copias de seguridad.'
    },
    {
      role: 'Analista del Aseguramiento de Calidad',
      company: 'MSPAS',
      date: 'Jul. 2023 – Sep. 2023',
      description: 'Implementación de Selenium y Cypress para pruebas de regresión de UI. Uso de Postman para validación y monitoreo de APIs, mejorando la eficiencia y previniendo errores críticos.'
    },
    {
      role: 'Analista de Software .NET',
      company: 'Xelapan',
      date: 'Mayo 2022 – Jun. 2023',
      description: 'Desarrollo y mantenimiento de aplicaciones .NET y soluciones web con PHP y ReactJS. Administración de bases de datos SQL Server y MySQL. Configuración de servidores Linux en DigitalOcean, Azure y AWS.'
    }
  ];

  const education = [
    {
      degree: 'Maestría en Seguridad Informática',
      institution: 'Universidad Mariano Gálvez de Guatemala',
      date: '2022',
      distinction: 'Distinción CUM LAUDE'
    },
    {
      degree: 'Ingeniería en Sistemas y Ciencias de la Computación',
      institution: 'Universidad Mariano Gálvez de Guatemala',
      date: '2020',
      distinction: ''
    }
  ];

  return (
    <section id="experience" className="py-24">
      <div className="text-center">
        <SectionTitle>Experiencia y Educación</SectionTitle>
      </div>
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-slate-800 dark:text-slate-200">Experiencia Laboral</h3>
          <div>
            {workExperience.map((job, index) => (
              <ExperienceItem key={index} title={job.role} subtitle={job.company} date={job.date}>
                <p>{job.description}</p>
              </ExperienceItem>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-slate-800 dark:text-slate-200">Educación</h3>
          <div>
            {education.map((edu, index) => (
              <ExperienceItem key={index} title={edu.degree} subtitle={edu.institution} date={edu.date}>
                 {edu.distinction && <p className="italic">{edu.distinction}</p>}
              </ExperienceItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;