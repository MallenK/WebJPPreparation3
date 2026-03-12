import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, Target, Zap, Brain, Trophy, ArrowRight, 
  Video, BarChart3, Users, ShieldCheck, Timer, Microscope
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const Tecnificacion = () => {
  return (
    <main className="overflow-hidden">
      {/* Hero Section - Tecnificación */}
      <section className="relative pt-40 pb-24 px-6 md:px-12 bg-brand-black">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-accent/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Metodología de Élite</span>
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.85] tracking-tighter mb-8">
              EL ARTE DE LA <br />
              <span className="text-brand-accent italic">PERFECCIÓN</span>
            </h1>
            <p className="text-white/70 text-xl md:text-2xl mt-8 max-w-3xl leading-relaxed">
              En JP Preparation, la tecnificación no es solo repetición. Es un proceso científico de <span className="text-white font-semibold">análisis, corrección y transferencia</span> diseñado para convertir el talento bruto en rendimiento de élite.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The 4 Pillars - Slanted Design */}
      <section className="relative py-32 px-6 md:px-12 bg-brand-dark overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-brand-black slanted-bg -translate-y-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-12 leading-tight">
                Nuestra Base: <br />
                <span className="text-brand-accent">Los 4 Pilares</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: "Técnica Analítica", desc: "Aislamiento del gesto técnico para una ejecución perfecta.", icon: Target },
                  { title: "Técnica Situacional", desc: "Toma de decisiones real bajo presión competitiva.", icon: Brain },
                  { title: "Bio-Mecánica", desc: "Eficiencia de movimiento para máxima potencia y salud.", icon: Zap },
                  { title: "Mentalidad Pro", desc: "Resiliencia cognitiva y enfoque en momentos críticos.", icon: Trophy },
                ].map((pilar, i) => (
                  <div key={i} className="glass-card p-6 hover:border-brand-accent/50 transition-all group">
                    <div className="w-12 h-12 rounded-lg bg-brand-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <pilar.icon className="text-brand-accent" size={24} />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{pilar.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{pilar.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000&auto=format&fit=crop" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                  alt="High Performance Training" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <div className="absolute -bottom-10 -left-10 glass-card p-8 max-w-[280px] hidden md:block">
                <div className="text-brand-accent font-bold text-5xl mb-2">100%</div>
                <p className="text-sm font-medium text-white/80 uppercase tracking-wider">Enfoque en la mejora individual del jugador</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Phases */}
      <section className="py-32 px-6 md:px-12 bg-brand-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-brand-accent font-bold tracking-widest uppercase text-xs">El Camino al Éxito</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-4">Fases de <span className="text-brand-accent italic">Aprendizaje</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                phase: "01", 
                title: "Descubrimiento", 
                desc: "Identificación de patrones motores y corrección de vicios técnicos iniciales.",
                focus: ["Coordinación", "Primer Toque", "Equilibrio"]
              },
              { 
                phase: "02", 
                title: "Consolidación", 
                desc: "Aumento de la intensidad y repetición bajo fatiga para fijar el conocimiento.",
                focus: ["Velocidad de Ejecución", "Precisión", "Visión"]
              },
              { 
                phase: "03", 
                title: "Maestría", 
                desc: "Transferencia total al juego real y especialización por posición en el campo.",
                focus: ["Táctica Individual", "Finalización", "Liderazgo"]
              },
            ].map((phase, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative p-10 border-l border-white/10 hover:border-brand-accent transition-colors"
              >
                <div className="text-brand-accent/20 font-display text-8xl font-bold absolute -top-8 -left-4">
                  {phase.phase}
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6">{phase.title}</h3>
                  <p className="text-white/70 mb-8 leading-relaxed">{phase.desc}</p>
                  <ul className="space-y-3">
                    {phase.focus.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-white/80">
                        <CheckCircle2 size={16} className="text-brand-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Age-Based Development - Slanted Reverse */}
      <section className="relative py-32 px-6 md:px-12 bg-brand-dark overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-brand-black slanted-bg-reverse translate-y-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">Desarrollo Específico <br /><span className="text-brand-accent">por Edades</span></h2>
            </div>
            <p className="text-white/50 max-w-sm text-right italic">
              "No se puede entrenar igual a un niño de 8 años que a un joven de 18. Adaptamos la carga y el contenido."
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { age: "U8 - U12", title: "Fundamentos", desc: "Fase sensible para la adquisición de habilidades técnicas. Prioridad absoluta al balón.", icon: Users },
              { age: "U13 - U16", title: "Especialización", desc: "Introducción de conceptos tácticos individuales y preparación física adaptada.", icon: ShieldCheck },
              { age: "U17+", title: "Rendimiento", desc: "Optimización máxima para el salto al fútbol profesional o semi-profesional.", icon: Trophy },
            ].map((item, i) => (
              <div key={i} className="bg-brand-black/50 border border-white/5 p-12 rounded-2xl hover:bg-brand-accent/5 transition-all group">
                <div className="text-brand-accent font-display text-xl mb-4">{item.age}</div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-4">
                  {item.title}
                  <item.icon className="text-brand-accent/50 group-hover:text-brand-accent transition-colors" size={24} />
                </h3>
                <p className="text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Analysis Section */}
      <section className="py-32 px-6 md:px-12 bg-brand-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" 
                  className="w-full aspect-video object-cover" 
                  alt="Video Analysis" 
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute inset-0 bg-brand-accent/20 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-brand-black hover:scale-110 transition-transform cursor-pointer">
                    <Video size={32} fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-brand-accent font-bold tracking-widest uppercase text-xs">Tecnología Aplicada</span>
              <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-8">Análisis de <br /><span className="text-brand-accent italic">Video HD</span></h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Utilizamos cámaras de alta resolución y software de análisis táctico para que el jugador pueda <span className="text-white font-semibold">verse a sí mismo</span>. La corrección visual es 10 veces más efectiva que la verbal.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Grabación de Sesiones", desc: "Analizamos cada gesto técnico desde múltiples ángulos." },
                  { title: "Feedback Inmediato", desc: "Correcciones en tablet a pie de campo durante el entrenamiento." },
                  { title: "Informes Individuales", desc: "Entrega de clips personalizados con puntos de mejora." },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1"><Microscope className="text-brand-accent" size={20} /></div>
                    <div>
                      <h4 className="font-bold text-white">{feature.title}</h4>
                      <p className="text-white/60 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Session Structure */}
      <section className="py-32 px-6 md:px-12 bg-brand-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/5 -skew-x-12 translate-x-1/4 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold">Estructura de una <br /><span className="text-brand-accent italic">Sesión Tipo</span></h2>
            <p className="text-white/60 mt-6 max-w-xl mx-auto">90 minutos de intensidad máxima diseñados para exprimir cada segundo de entrenamiento.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { time: "15 min", title: "Activación", desc: "Movilidad articular y técnica de carrera específica para fútbol.", icon: Timer },
              { time: "30 min", title: "Bloque Analítico", desc: "Repetición consciente de gestos técnicos: control, pase, regate.", icon: Target },
              { time: "30 min", title: "Transferencia", desc: "Duelos 1vs1 o 2vs2 con objetivos tácticos y toma de decisiones.", icon: Zap },
              { time: "15 min", title: "Finalización", desc: "Remates a portería bajo fatiga y vuelta a la calma con estiramientos.", icon: Trophy },
            ].map((step, i) => (
              <div key={i} className="glass-card p-10 relative overflow-hidden group hover:bg-brand-accent/10 transition-all">
                <div className="absolute top-0 right-0 p-6 text-brand-accent/10 font-display text-7xl font-bold group-hover:text-brand-accent/20 transition-colors">
                  0{i+1}
                </div>
                <div className="flex items-center gap-3 text-brand-accent font-bold mb-6">
                  <step.icon size={20} />
                  {step.time}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Quote */}
      <section className="py-32 px-6 md:px-12 bg-brand-black text-center relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-brand-accent/20 text-9xl font-serif absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">“</div>
          <h2 className="text-3xl md:text-5xl font-bold italic leading-tight relative z-10">
            "La diferencia entre un buen jugador y un jugador de élite está en el <span className="text-brand-accent">detalle invisible</span>. Nosotros hacemos visible ese detalle."
          </h2>
          <div className="mt-12 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-brand-accent">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" alt="Coach" referrerPolicy="no-referrer" />
            </div>
            <div className="font-bold text-white">Juan Pedro</div>
            <div className="text-brand-accent text-sm uppercase tracking-widest">Director Metodológico</div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 md:px-12 bg-brand-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-brand-black mb-10 leading-none">
            ¿ESTÁS LISTO PARA EL <br />
            <span className="italic">SIGUIENTE NIVEL?</span>
          </h2>
          <p className="text-brand-black/80 text-xl mb-12 max-w-2xl mx-auto font-medium">
            No dejes tu futuro al azar. Únete a la academia donde se forman los futbolistas del mañana.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contacto" className="bg-brand-black text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-dark transition-all flex items-center justify-center gap-3 group">
              RESERVAR SESIÓN DE PRUEBA
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link to="/programas" className="border-2 border-brand-black text-brand-black px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-black hover:text-white transition-all">
              VER PROGRAMAS
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
