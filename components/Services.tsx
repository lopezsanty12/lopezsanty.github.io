import React from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl font-bold text-center mb-4 text-slate-900 dark:text-slate-100">
    {children}
  </h2>
);

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md dark:shadow-2xl hover:shadow-indigo-500/10 border border-slate-200 dark:border-slate-700 transition-all duration-300 transform hover:-translate-y-2">
    <div className="text-indigo-600 dark:text-indigo-400 mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">{title}</h3>
    <p className="text-slate-600 dark:text-slate-300">{description}</p>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>,
      title: 'Administración de Bases de Datos',
      description: 'Gestión integral de bases de datos (MySQL, SQL Server, PostgreSQL, Oracle) y monitoreo avanzado con Prometheus y Grafana.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.94c1.5 0 2.75 1.25 2.75 2.75S13.5 26.44 12 26.44s-2.75-1.25-2.75-2.75S10.5 20.94 12 20.94z"/><path d="M12 20.94V12.5h2.75"/><path d="M12 12.5H9.25"/><path d="M14.75 12.5v-1.81c0-1.05.5-2.1 1.5-2.1s1.5 1.05 1.5 2.1v1.81m-7.5-1.81c0-1.05.5-2.1 1.5-2.1s1.5 1.05 1.5 2.1v1.81m-1.5 1.81V7.94c0-1.5-1.25-2.75-2.75-2.75S6.5 6.44 6.5 7.94v4.56m11 0V7.94c0-1.5-1.25-2.75-2.75-2.75S12 6.44 12 7.94v4.56"/></svg>,
      title: 'DevOps y Automatización',
      description: 'Implementación de CI/CD con Jenkins, IaC con Terraform, orquestación con Ansible y automatización de tareas con Bash y CRON.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>,
      title: 'Aseguramiento de Calidad (QA)',
      description: 'Creación de pruebas de regresión automatizadas con Selenium y Cypress, y validación de APIs con Postman para garantizar la calidad del software.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 21H9a7 7 0 0 1-7-7 7 7 0 0 1 5.46-6.81 5 5 0 0 1 9.62 1.35 5.5 5.5 0 0 1 4.3 5.96A5.5 5.5 0 0 1 17.5 21z"></path></svg>,
      title: 'Soluciones en la Nube',
      description: 'Experiencia práctica en diseño, despliegue y gestión de infraestructura en plataformas líderes como AWS, Azure y DigitalOcean.'
    },
  ];

  return (
    <section id="services" className="py-24">
      <div className="text-center">
        <SectionTitle>Mis Servicios</SectionTitle>
        <p className="text-center max-w-2xl mx-auto text-slate-600 dark:text-slate-400 mb-12">
          Ofrezco soluciones a medida para impulsar tu negocio. Desde el concepto inicial hasta el despliegue final, estoy aquí para ayudarte a alcanzar tus objetivos tecnológicos.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
        ))}
      </div>
    </section>
  );
};

export default Services;