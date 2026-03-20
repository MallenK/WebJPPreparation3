import React from 'react';
import { motion } from 'motion/react';
import { 
  Trophy, TrendingUp, User, Users, Star, Quote, 
  ArrowRight, CheckCircle2, Award, Target, Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';


export const Resultados = () => {
  const successStories = [
    {
      name: "Marc R.",
      age: "14 años",
      before: "Dificultad en el uso de la pierna no dominante.",
      after: "Dominio total de ambas piernas, fichado por cantera de 1ª División.",
      image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Alex G.",
      age: "11 años",
      before: "Falta de confianza en el 1vs1.",
      after: "Jugador más desequilibrante de su liga, mejora del 40% en regate efectivo.",
      image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Paula M.",
      age: "16 años",
      before: "Bajo rendimiento físico en los últimos minutos.",
      after: "Optimización biomecánica y resistencia, actual capitana de su equipo.",
      image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=400&auto=format&fit=crop"
    }
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-28 md:pt-32 lg:pt-32 xl:pt-40 pb-16 md:pb-20 lg:pb-24 px-6 md:px-10 lg:px-12 bg-brand-black">
        
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-accent/5 -skew-x-12 translate-x-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-xs mb-3 md:mb-4 block">
              Impacto Real
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-[0.9] tracking-tighter mb-6 md:mb-8">
              RESULTADOS QUE <br />
              <span className="text-brand-accent italic">HABLAN</span>
            </h1>

            <p className="text-base sm:text-lg md:text-lg lg:text-lg xl:text-xl text-white/70 mt-6 md:mt-8 max-w-3xl mx-auto leading-relaxed">
              No prometemos magia, prometemos <span className="text-white font-semibold">trabajo y evolución</span>. 
              Aquí es donde el esfuerzo se convierte en éxito tangible.
            </p>

          </motion.div>

        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-brand-accent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Jugadores Formados", value: "+500", icon: Users },
              { label: "Mejora Técnica Media", value: "35%", icon: TrendingUp },
              { label: "Fichajes Canteras", value: "42", icon: Trophy },
              { label: "Sesiones Realizadas", value: "12k", icon: Target },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4 text-brand-black">
                <stat.icon size={32} strokeWidth={2.5} />
                <div>
                  <div className="text-3xl font-bold leading-none">{stat.value}</div>
                  <div className="text-xs font-bold uppercase tracking-wider opacity-70">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories - Cards 
      <section className="py-32 px-6 md:px-12 bg-brand-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-brand-black slanted-bg -translate-y-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold">Historias de <span className="text-brand-accent italic">Éxito</span></h2>
            <p className="text-white/60 mt-6 max-w-xl mx-auto">Casos reales de jugadores que confiaron en JP Preparation para transformar su juego.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="glass-card overflow-hidden group"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={story.image} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    alt={story.name}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold">{story.name}</h3>
                    <span className="text-brand-accent font-display text-sm">{story.age}</span>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="text-xs text-white/60 uppercase tracking-widest mb-2">Antes</div>
                      <p className="text-white/80 text-sm italic">"{story.before}"</p>
                    </div>
                    <div className="pt-4 border-t border-white/5">
                      <div className="text-xs text-brand-accent uppercase tracking-widest mb-2">Después</div>
                      <p className="text-white font-medium text-sm">{story.after}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Technical Evolution Roadmap */}
      <section className="py-32 px-6 md:px-12 bg-brand-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-brand-accent font-bold tracking-widest uppercase text-xs">Metodología de Progreso</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mt-4 mb-6 md:mb-8 leading-[0.95] tracking-tighter">
                Tu Hoja de Ruta <br />hacia la <span className="text-brand-accent italic">Élite</span>
              </h2>
              <div className="space-y-12 mt-12">
                {[
                  { title: "Evaluación Inicial", desc: "Test técnico y físico completo para detectar áreas de mejora inmediata.", icon: Microscope },
                  { title: "Plan Personalizado", desc: "Diseño de ejercicios específicos adaptados a tu perfil y posición.", icon: Target },
                  { title: "Seguimiento Continuo", desc: "Video-análisis y feedback tras cada sesión para asegurar la evolución.", icon: Zap },
                  { title: "Consolidación", desc: "Transferencia de las mejoras al contexto de competición real.", icon: Trophy },
                ].map((step, i) => (
                  <div key={i} className="flex gap-8 relative">
                    {i !== 3 && <div className="absolute top-12 left-6 w-[1px] h-12 bg-white/10" />}
                    <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center shrink-0 border border-brand-accent/20">
                      <step.icon className="text-brand-accent" size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl lg:text-xl xl:text-2xl font-bold mb-2">
                        {step.title}
                      </h4>
                      <p className="text-white/70 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="glass-card p-12 border-brand-accent/30 bg-brand-accent/5">
                <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center">Gráfica de Evolución Media</h3>
                <div className="space-y-8">
                  {[
                    { skill: "Control de Balón", progress: 85 },
                    { skill: "Toma de Decisiones", progress: 70 },
                    { skill: "Velocidad de Reacción", progress: 92 },
                    { skill: "Precisión de Pase", progress: 78 },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-bold">{item.skill}</span>
                        <span className="text-brand-accent">{item.progress}%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          className="h-full bg-brand-accent"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-12 p-6 bg-brand-black/50 rounded-xl border border-white/5 text-center">
                  <p className="text-xs text-white/60 uppercase tracking-widest mb-2">Dato Auditado</p>
                  <p className="text-sm font-medium text-white/80">Basado en el seguimiento de +200 alumnos durante la temporada 2024/25.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Placeholder */}
      <section className="py-32 px-6 md:px-12 bg-brand-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-[0.95] tracking-tighter">
              Lo que dicen <br />
              <span className="text-brand-accent italic">Padres y Jugadores</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                text: "La tecnificación de JP es un lugar excepcional para crecer tanto deportiva como personalmente. El ambiente es muy familiar, lo que hace que cada entrenamiento se disfrute al máximo. Los entrenadores son muy agradables, cercanos y a la vez muy exigentes, siempre buscando sacar lo mejor de cada jugador. Los entrenos son intensos, bien organizados y con un enfoque claro en la mejora técnica y táctica. Sin duda, un sitio ideal para quienes quieren mejorar, aprender y disfrutar del fútbol en un entorno positivo y profesional. ¡Totalmente recomendable!",
                author: "Joan Falcó Piñol",
                role: "Padre de alumno U12",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop"
              },
              { 
                text: "Sin duda la mejor escuela de tecnificación de fútbol , mi hijo está encantado con su progreso, cosa qué no había conseguido en otras escuelas. Las instalaciones y técnicas de 10. Tanto el director del centro, Joel, como el resto del equipo realizan un trabajo impecable y un trato muy familiar. Así que tanto niños como papås nos sentimos bien acogidos. Totalmente recomendable. No pudimos encontrar un lugar mejor.",
                author: "Rous",
                role: "Jugador Juvenil",
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
              },
            ].map((testimonial, i) => (
              <div key={i} className="glass-card p-12 relative">
                <Quote className="text-brand-accent/20 absolute top-8 right-8" size={48} />
                <p className="text-base md:text-lg lg:text-lg xl:text-xl text-white/80 italic mb-8 md:mb-10 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <User size={20} className="text-white/70" />
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.author}</div>
                    {/* <div className="text-brand-accent text-xs uppercase tracking-widest">{testimonial.role}</div>*/}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards/Logos Section 
      <section className="py-24 px-6 md:px-12 bg-brand-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-white/60 uppercase tracking-[0.3em] text-xs font-bold">Colaboramos con canteras de élite</h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all">
            <div className="text-3xl font-black tracking-tighter">FCB</div>
            <div className="text-3xl font-black tracking-tighter">RCD</div>
            <div className="text-3xl font-black tracking-tighter">GIR</div>
            <div className="text-3xl font-black tracking-tighter">VCF</div>
            <div className="text-3xl font-black tracking-tighter">ATM</div>
          </div>
        </div>
      </section>
      Awards/Logos Section */}

      {/* Final CTA */}
      <section className="py-32 px-6 md:px-12 bg-brand-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-brand-black mb-8 md:mb-10 leading-[0.95] tracking-tighter">
            TU ÉXITO EMPIEZA <br />
            <span className="italic">AQUÍ MISMO</span>
          </h2>
          <p className="text-brand-black/80 text-base md:text-lg xl:text-xl mb-10 md:mb-12 max-w-2xl mx-auto font-medium">
            No esperes a que los resultados lleguen solos. Ven a buscarlos con el mejor equipo de tecnificación.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contacto" className="bg-brand-black text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-dark transition-all flex items-center justify-center gap-3 group">
              EMPEZAR MI EVOLUCIÓN
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link to="/tecnificacion" className="border-2 border-brand-black text-brand-black px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-black hover:text-white transition-all">
              VER METODOLOGÍA
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

const Microscope = ({ className, size }: { className?: string, size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M6 18h8" />
    <path d="M3 22h18" />
    <path d="M14 22a7 7 0 1 0 0-14h-1" />
    <path d="M9 14h2" />
    <path d="M9 12a2 2 0 1 1-2-2V6h6v8" />
    <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
  </svg>
);
