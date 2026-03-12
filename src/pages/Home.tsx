import React from 'react';
import { Hero } from '../components/Hero';
import { StatsBar } from '../components/Stats';
import { SkillGrid } from '../components/SkillGrid';
import { motion } from 'motion/react';
import { ChevronRight, CheckCircle2, Star, Users, MapPin, Calendar, ArrowRight, Brain, Zap, Target, Trophy, Clock, Shield, Activity, Play, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const SectionHeader = ({ subtitle, title, centered = false }: { subtitle: string, title: string, centered?: boolean }) => (
  <div className={centered ? "text-center mb-20" : "mb-16"}>
    <motion.span 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-brand-accent font-black tracking-[0.4em] uppercase text-xs bg-brand-accent/10 py-2 px-4 rounded-full border border-brand-accent/20 inline-block"
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-5xl md:text-7xl font-black mt-6 leading-[0.9] tracking-tighter" 
      dangerouslySetInnerHTML={{ __html: title }}
    ></motion.h2>
  </div>
);

export const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <StatsBar />

      {/* Intro Section - The Vision */}
      <section className="section-padding bg-brand-black relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-black to-transparent z-10"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeader 
              subtitle="Nuestra Visión" 
              title="FORJAMOS EL <span className='text-gradient italic'>ADN</span> DEL FUTBOLISTA PROFESIONAL" 
            />
            <p className="text-white/70 text-xl mb-10 leading-relaxed font-medium">
              En JP Preparation entendemos que el talento es solo el punto de partida. La diferencia entre llegar y mantenerse está en los detalles técnicos, la inteligencia táctica y la fortaleza mental.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {[
                { icon: Brain, title: "Inteligencia Táctica", desc: "Lectura de juego avanzada." },
                { icon: Zap, title: "Explosividad", desc: "Potencia en el primer paso." },
                { icon: Target, title: "Precisión", desc: "Control total del balón." },
                { icon: Shield, title: "Resiliencia", desc: "Mentalidad de ganador." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-brand-accent transition-colors duration-300">
                    <item.icon className="text-brand-accent group-hover:text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-white/60 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/tecnificacion" className="btn-primary">
              Nuestra Metodología
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[2rem] overflow-hidden border-2 border-white/10 p-4 bg-white/5">
              <img 
                src="https://images.unsplash.com/photo-1526232759583-26f173b0bb3e?q=80&w=1000&auto=format&fit=crop" 
                alt="Training Session" 
                className="w-full h-full object-cover rounded-[1.5rem]"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-10 -right-10 glass-card p-8 max-w-[280px] hidden md:block border-brand-accent/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-brand-accent flex items-center justify-center">
                  <Trophy className="text-white" size={20} />
                </div>
                <span className="font-black text-lg tracking-tighter">ELITE LEVEL</span>
              </div>
              <p className="text-xs text-white/50 leading-relaxed">"No es solo entrenar más, es entrenar mejor. Aquí cada minuto cuenta para tu futuro."</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem - Why us? */}
      <section className="section-padding bg-brand-dark relative overflow-hidden slanted-bg">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="aspect-[3/4] rounded-2xl overflow-hidden mt-12 border border-white/10"
              >
                <img src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Focus" referrerPolicy="no-referrer" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: -20 }}
                viewport={{ once: true }}
                className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10"
              >
                <img src="https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Ball" referrerPolicy="no-referrer" />
              </motion.div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeader 
                subtitle="El Desafío" 
                title="EL ENTRENAMIENTO DE CLUB <br/><span className='text-brand-accent italic'>YA NO ES SUFICIENTE</span>" 
              />
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                En un equipo convencional, el entrenador tiene 25 jugadores. El tiempo para corregir tu control orientado, tu perfilación o tu toma de decisiones es casi nulo.
              </p>
              <div className="space-y-6 mb-12">
                {[
                  "Falta de corrección técnica individualizada.",
                  "Entrenamientos genéricos para el grupo.",
                  "Poco volumen de contacto con el balón.",
                  "Estancamiento en el desarrollo de habilidades clave."
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4 text-white/80 font-bold italic">
                    <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                    {text}
                  </div>
                ))}
              </div>
              <div className="p-8 bg-brand-accent/10 border-l-4 border-brand-accent rounded-r-2xl">
                <p className="text-white font-medium italic">"La élite no se alcanza en el entrenamiento grupal, se construye en las horas de trabajo específico."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="section-padding bg-brand-black">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            subtitle="Tu Evolución" 
            title="ROADMAP DE <span className='text-gradient italic'>ALTO RENDIMIENTO</span>" 
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 hidden md:block"></div>
            
            {[
              { step: "01", title: "Evaluación", desc: "Análisis técnico y físico inicial para detectar áreas de mejora." },
              { step: "02", title: "Fundamentos", desc: "Perfeccionamiento de la base técnica y mecánica de movimiento." },
              { step: "03", title: "Especialización", desc: "Entrenamiento específico según tu posición y rol en el campo." },
              { step: "04", title: "Dominio", desc: "Transferencia total al juego real bajo máxima presión." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 glass-card p-8 text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-brand-black border-2 border-brand-accent flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-accent transition-colors duration-500">
                  <span className="font-display font-black text-xl text-brand-accent group-hover:text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SkillGrid />

      {/* A Day in JP Preparation */}
      <section className="section-padding bg-brand-dark relative slanted-bg-reverse">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionHeader 
                subtitle="Experiencia" 
                title="UN DÍA EN <br/><span className='text-brand-accent italic'>JP PREPARATION</span>" 
              />
              <div className="space-y-12">
                {[
                  { time: "09:00", title: "Activación Cognitiva", desc: "Ejercicios de reacción y coordinación para despertar el sistema nervioso." },
                  { time: "10:00", title: "Bloque de Tecnificación", desc: "Trabajo analítico de alta repetición enfocado en el gesto técnico puro." },
                  { time: "11:30", title: "Situaciones de Juego", desc: "Duelos y transiciones donde aplicamos lo aprendido bajo oposición." },
                  { time: "13:00", title: "Análisis y Feedback", desc: "Revisión de clips de vídeo y corrección personalizada." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="font-display font-black text-3xl text-white/10 group-hover:text-brand-accent transition-colors duration-300 pt-1">
                      {item.time}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Training Day" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 flex items-center justify-center bg-brand-black/40 group cursor-pointer">
                  <div className="w-20 h-20 rounded-full bg-brand-accent flex items-center justify-center animate-pulse group-hover:scale-110 transition-transform">
                    <Play className="text-white fill-current" size={32} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Player Analysis */}
      <section className="section-padding bg-brand-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1000&auto=format&fit=crop" className="w-full rounded-3xl opacity-50" alt="Player Analysis" referrerPolicy="no-referrer" />
              {/* Overlay Graphics */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full relative">
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-1/4 left-1/3 w-12 h-12 border-2 border-brand-cyan rounded-full flex items-center justify-center"
                  >
                    <div className="w-2 h-2 bg-brand-cyan rounded-full"></div>
                  </motion.div>
                  <div className="absolute top-1/2 right-1/4 p-4 glass-card border-brand-cyan/50">
                    <div className="text-[10px] uppercase tracking-widest text-brand-cyan mb-1">Velocidad de Reacción</div>
                    <div className="text-2xl font-black">0.12s</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <div>
              <SectionHeader 
                subtitle="Tecnología" 
                title="ANÁLISIS DEL <br/><span className='text-gradient italic'>JUGADOR MODERNO</span>" 
              />
              <p className="text-white/70 text-lg mb-10 leading-relaxed">
                Utilizamos herramientas de última generación para medir cada parámetro de tu rendimiento. Lo que no se mide, no se puede mejorar.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: "Video Análisis", desc: "Grabación en 4K para corregir posturas y perfiles." },
                  { title: "GPS & Biometría", desc: "Control de cargas y distancias recorridas." },
                  { title: "Neuro-Entrenamiento", desc: "Mejora de la velocidad de procesamiento mental." },
                  { title: "Scouting Pro", desc: "Informes detallados para agencias y clubes." }
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Activity className="text-brand-cyan" size={18} />
                      <h4 className="font-bold text-white">{item.title}</h4>
                    </div>
                    <p className="text-white/60 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section-padding bg-brand-dark relative slanted-bg">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader 
            subtitle="Diferenciación" 
            title="¿POR QUÉ SOMOS <span className='text-brand-accent italic'>DIFERENTES?</span>" 
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass-card p-10 border-red-500/20">
              <h3 className="text-2xl font-bold mb-8 text-red-500 uppercase tracking-tighter italic">Entrenamiento Tradicional</h3>
              <ul className="space-y-6">
                {[
                  "25 jugadores por entrenador.",
                  "Foco exclusivo en el resultado del domingo.",
                  "Poca corrección técnica individual.",
                  "Ejercicios genéricos sin progresión personal.",
                  "Falta de análisis de vídeo."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white/40">
                    <X size={18} className="text-red-500 shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-10 border-brand-accent bg-brand-accent/5">
              <h3 className="text-2xl font-bold mb-8 text-brand-accent uppercase tracking-tighter italic">JP Preparation</h3>
              <ul className="space-y-6">
                {[
                  "Grupos máximos de 4 jugadores.",
                  "Foco 100% en tu desarrollo individual.",
                  "Corrección milimétrica de cada gesto.",
                  "Plan de entrenamiento personalizado.",
                  "Análisis de vídeo y feedback constante."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white/90">
                    <CheckCircle2 size={18} className="text-brand-accent shrink-0" />
                    <span className="text-sm font-bold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/20 to-brand-violet/20 opacity-30"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black mb-8 leading-[0.85] tracking-tighter">
              ¿ESTÁS LISTO PARA <br />
              <span className="text-gradient italic">LA ÉLITE?</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              Las plazas son limitadas para garantizar la máxima calidad en cada sesión. No pierdas la oportunidad de transformar tu juego.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contacto" className="btn-primary py-5 px-12 text-lg">
                Solicitar Prueba Gratuita
              </Link>
              <a href="https://wa.me/34600000000" className="btn-outline py-5 px-12 text-lg">
                Hablar con un Coach
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};
