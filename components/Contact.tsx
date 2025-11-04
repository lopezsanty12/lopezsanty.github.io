import React from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl font-bold text-center mb-4 text-slate-900 dark:text-slate-100">
    {children}
  </h2>
);

const Contact: React.FC = () => {
  
  return (
    <section id="contact" className="py-24 text-center">
      <SectionTitle>Contacto</SectionTitle>
      <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
        ¿Tienes una idea o un proyecto en mente? ¡Hablemos! Estoy disponible para colaboraciones y oportunidades de consultoría.
      </p>
      <div className="inline-block">
        <a href="mailto:santiagolopezr22@gmail.com" className="bg-indigo-600 text-white hover:bg-indigo-700 font-bold py-4 px-8 rounded-full text-xl transition-transform transform hover:scale-105 inline-block mb-12 shadow-lg shadow-indigo-500/20">
          Envíame un correo
        </a>
      </div>
    </section>
  );
};

export default Contact;