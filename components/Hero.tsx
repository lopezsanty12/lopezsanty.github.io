import React from 'react';

const Hero: React.FC = () => {

  const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
  );

  const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
  );
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center py-20">
      <div className="space-y-8">
        <div className="relative w-40 h-40 mx-auto">
          <img 
            className="rounded-full object-cover w-full h-full ring-4 ring-slate-200 dark:ring-slate-700 shadow-lg" 
            src="assets/profile.png" 
            alt="Santiago Lopez" 
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
          <span className="block">Hola, soy</span>
          <span className="block text-indigo-600 dark:text-indigo-400">Santiago López</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          Ingeniero de Sistemas | DevOps | Cloud | Bases de Datos.
          Apasionado por la automatización y la optimización de procesos.
        </p>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/lopezsanty12" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/lopezsanty12/" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            <LinkedinIcon />
          </a>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#portfolio" className="w-full sm:w-auto bg-indigo-600 text-white hover:bg-indigo-700 font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 shadow-lg shadow-indigo-500/20">
            Ver Proyectos
          </a>
          <a href="#contact" className="w-full sm:w-auto bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105">
            Contáctame
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;