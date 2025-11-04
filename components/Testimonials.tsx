import React from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl font-bold text-center mb-4 text-slate-900 dark:text-slate-100">
    {children}
  </h2>
);

const TestimonialCard: React.FC<{ quote: string; name: string; title: string; }> = ({ quote, name, title }) => (
    <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md dark:shadow-2xl border border-slate-200 dark:border-slate-700 relative">
        <svg className="absolute top-4 left-4 h-8 w-8 text-slate-200 dark:text-slate-700" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M9.333 7C5.866 7 4 9.123 4 12.333c0 2.592 1.067 5.926 3.333 8.334C9.533 22.833 11.667 24 13 24c.6 0 1.2-.4 1.2-1s-.4-1.2-1-1.2c-1.333 0-2.867-.867-4.467-2.667-1.4-1.6-2.133-3.866-2.133-5.533 0-1.8 1.067-3.133 2.8-3.133 1.2 0 2.267.8 2.267 2.2 0 1.333-.933 2.2-2.267 2.2-.4 0-.667.267-.667.667s.267.667.667.667c2.4 0 4.933-2.066 4.933-5.6C14.667 8.667 12.267 7 9.333 7zm12 0c-3.467 0-5.333 2.123-5.333 5.333 0 2.592 1.067 5.926 3.333 8.334C21.533 22.833 23.667 24 25 24c.6 0 1.2-.4 1.2-1s-.4-1.2-1-1.2c-1.333 0-2.867-.867-4.467-2.667-1.4-1.6-2.133-3.866-2.133-5.533 0-1.8 1.067-3.133 2.8-3.133 1.2 0 2.267.8 2.267 2.2 0 1.333-.933 2.2-2.267 2.2-.4 0-.667.267-.667.667s.267.667.667.667c2.4 0 4.933-2.066 4.933-5.6C26.667 8.667 24.267 7 21.333 7z" />
        </svg>
        <blockquote className="text-slate-600 dark:text-slate-300 italic text-lg mt-8">
            <p>"{quote}"</p>
        </blockquote>
        <figcaption className="mt-6">
            <div className="font-semibold text-slate-800 dark:text-slate-100">{name}</div>
            <div className="text-indigo-600 dark:text-indigo-400 text-sm">{title}</div>
        </figcaption>
    </div>
);


const Testimonials: React.FC = () => {
    const testimonials = [
        {
            quote: "Santy transformó por completo nuestra plataforma. Su experiencia técnica y su atención al detalle fueron excepcionales. ¡Altamente recomendado!",
            name: "Ana García",
            title: "CEO, Startup Innovadora"
        },
        {
            quote: "Trabajar con Santy fue un placer. Entendió rápidamente nuestras necesidades y entregó una solución robusta y escalable antes de la fecha límite.",
            name: "Carlos Mendoza",
            title: "Director de Tecnología, Tech Solutions"
        }
    ];

    return (
        <section id="testimonials" className="py-24">
            <div className="text-center">
                <SectionTitle>Lo que dicen mis clientes</SectionTitle>
                <p className="text-center max-w-2xl mx-auto text-slate-600 dark:text-slate-400 mb-12">
                    La confianza y satisfacción de mis clientes es mi mayor prioridad. Estos son algunos de sus comentarios.
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} {...testimonial} />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;