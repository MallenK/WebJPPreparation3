import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, Target, Zap, Brain, Trophy, ArrowRight, 
  Video, BarChart3, Users, ShieldCheck, Timer, Microscope
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils'; // O la ruta donde tengas tu carpeta lib

export const Tecnificacion = () => {
  return (
    <main className="overflow-hidden">
      {/* Hero Section - Tecnificación */}
      <section className="relative pt-28 md:pt-32 lg:pt-32 xl:pt-40 pb-16 md:pb-20 lg:pb-24 px-6 md:px-10 lg:px-12 bg-brand-black">
        
        <div className="absolute inset-0 bg-gradient-to-b from-brand-accent/10 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-xs mb-3 md:mb-4 block">
              Metodología de Élite
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-[0.9] tracking-tighter mb-6 md:mb-8">
              EL ARTE DE LA <br />
              <span className="text-brand-accent italic">PERFECCIÓN</span>
            </h1>

            <p className="text-base sm:text-lg md:text-lg lg:text-lg xl:text-xl text-white/70 mt-6 md:mt-8 max-w-3xl mx-auto leading-relaxed">
              En JP Preparation, la tecnificación no es solo repetición. Es un proceso científico de 
              <span className="text-white font-semibold"> análisis, corrección y transferencia</span> 
              diseñado para convertir el talento bruto en rendimiento de élite.
            </p>

          </motion.div>

        </div>
      </section>

      {/* The 4 Pillars - Slanted Design */}
      <section className="relative py-20 md:py-24 lg:py-24 xl:py-32 px-6 md:px-10 lg:px-12 bg-brand-dark overflow-hidden">
        
        <div className="absolute top-0 left-0 w-full h-24 md:h-28 lg:h-32 bg-brand-black slanted-bg -translate-y-1/2" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-20 items-center">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-8 md:mb-10 lg:mb-12 leading-[0.95] tracking-tighter">
                Nuestra Base: <br />
                <span className="text-brand-accent">Los 4 Pilares</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {[
                  { title: "Técnica Analítica", desc: "Aislamiento del gesto técnico para una ejecución perfecta.", icon: Target },
                  { title: "Técnica Situacional", desc: "Toma de decisiones real bajo presión competitiva.", icon: Brain },
                  { title: "Bio-Mecánica", desc: "Eficiencia de movimiento para máxima potencia y salud.", icon: Zap },
                  { title: "Mentalidad Pro", desc: "Resiliencia cognitiva y enfoque en momentos críticos.", icon: Trophy },
                ].map((pilar, i) => (
                  <div 
                    key={i} 
                    className="glass-card p-5 md:p-6 lg:p-6 xl:p-8 hover:border-brand-accent/50 transition-all group"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-brand-accent/10 flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                      <pilar.icon className="text-brand-accent" size={20} />
                    </div>

                    <h3 className="text-base md:text-lg lg:text-lg xl:text-xl font-bold mb-2">{pilar.title}</h3>
                    <p className="text-white/60 text-xs md:text-sm leading-relaxed">{pilar.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT */}
            <div className="relative">
              
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  alt="High Performance Training"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-8 glass-card p-5 md:p-6 max-w-[220px] lg:max-w-[240px] hidden md:block">
                <div className="text-brand-accent font-bold text-3xl md:text-4xl mb-1">100%</div>
                <p className="text-[10px] md:text-xs font-medium text-white/80 uppercase tracking-wider">
                  Enfoque en la mejora individual
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Learning Phases */}
      <section className="py-20 md:py-24 lg:py-24 xl:py-32 px-6 md:px-10 lg:px-12 bg-brand-black">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <span className="text-brand-accent font-bold tracking-widest uppercase text-xs">
              El Camino al Éxito
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mt-4 leading-[0.95] tracking-tighter">
              Fases de <span className="text-brand-accent italic">Aprendizaje</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
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
                desc: "Transferencia total al juego real y especialización por posición.",
                focus: ["Táctica Individual", "Finalización", "Liderazgo"]
              },
            ].map((phase, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative p-6 md:p-8 lg:p-8 xl:p-10 border-l border-white/10 hover:border-brand-accent transition-colors"
              >
                <div className="text-brand-accent/20 font-display text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold absolute -top-6 -left-3">
                  {phase.phase}
                </div>

                <div className="relative z-10">
                  <h3 className="text-lg md:text-xl lg:text-xl xl:text-2xl font-bold mb-4 md:mb-6">{phase.title}</h3>
                  
                  <p className="text-white/70 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                    {phase.desc}
                  </p>

                  <ul className="space-y-2 md:space-y-3">
                    {phase.focus.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-white/80">
                        <CheckCircle2 size={14} className="text-brand-accent" />
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



      {/* Age-Based Development */}
      <section className="relative py-20 md:py-24 lg:py-24 xl:py-32 px-6 md:px-10 lg:px-12 bg-brand-dark overflow-hidden">
        
        <div className="max-w-7xl mx-auto relative z-10">

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 lg:mb-16 gap-6 md:gap-8">
            
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-[0.95] tracking-tighter">
                Desarrollo Específico <br />
                <span className="text-brand-accent">por Edades</span>
              </h2>
            </div>

            <p className="text-white/50 max-w-sm text-left md:text-right italic text-sm md:text-base">
              "No se puede entrenar igual a un niño de 8 años que a un joven de 18."
            </p>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { age: "Sub 4 - Sub 12", title: "Fundamentos", desc: "Fase sensible para adquirir habilidades técnicas. Prioridad al balón.", icon: Users },
              { age: "Sub 13 - Sub 16", title: "Especialización", desc: "Conceptos tácticos y preparación física adaptada.", icon: ShieldCheck },
              { age: "Sub 17+", title: "Rendimiento", desc: "Optimización para el salto al fútbol profesional.", icon: Trophy },
            ].map((item, i) => (
              <div 
                key={i} 
                className="bg-brand-black/50 border border-white/5 p-8 md:p-10 lg:p-10 xl:p-12 rounded-2xl hover:bg-brand-accent/5 transition-all group"
              >
                <div className="text-brand-accent font-display text-lg md:text-xl mb-3 md:mb-4">
                  {item.age}
                </div>

                <h3 className="text-lg md:text-xl lg:text-xl xl:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-3 md:gap-4">
                  {item.title}
                  <item.icon className="text-brand-accent/50 group-hover:text-brand-accent transition-colors" size={22} />
                </h3>

                <p className="text-white/70 leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Video Analysis Section - Slanted Design 
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
      </section>*/}

      {/* Training Session Structure */}
      <section className="py-20 md:py-32 px-4 sm:px-6 md:px-12 bg-brand-dark relative overflow-hidden">
        {/* Decoración de fondo optimizada */}
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-brand-accent/[0.03] -skew-x-12 translate-x-1/4 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] md:leading-[0.95] tracking-tighter text-balance">
              Estructura de una <br className="hidden sm:block" />
              <span className="text-brand-accent italic">Sesión Tipo</span>
            </h2>
            <p className="text-white/60 mt-4 md:mt-6 text-sm md:text-base max-w-xl mx-auto text-balance">
              Sesiones de 60 minutos diseñadas para maximizar el rendimiento de cada jugador.
            </p>
          </div>

          {/* Grid Adaptable: 1 col (móvil), 2 cols (tablet), 4 cols (desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                time: "10 min",
                title: "Activación",
                desc: "Calentamiento con bici y trabajo de coordinación para preparar al jugador.",
                icon: Timer
              },
              {
                time: "20 min",
                title: "Bloque Analítico",
                desc: "Repetición consciente de gestos técnicos: control, pase y regate.",
                icon: Target
              },
              {
                time: "20 min",
                title: "Transferencia",
                desc: "Ejercicios para que el jugador tome decisiones en situaciones reales de partido adaptadas a su posición.",
                icon: Zap
              },
              {
                time: "10 min",
                title: "Finalización",
                desc: "Trabajo de acciones a balón parado.",
                icon: Trophy
              },
            ].map((step, i) => (
              <div 
                key={i} 
                className={cn(
                  "glass-card relative overflow-hidden group hover:bg-brand-accent/10 transition-all duration-500",
                  "p-8 md:p-10", // Padding responsivo
                  "flex flex-col h-full" // Altura uniforme
                )}
              >
                {/* Número de fondo escalado para no estorbar */}
                <div className="absolute -top-2 -right-2 p-4 text-brand-accent/5 font-display text-6xl md:text-7xl lg:text-8xl font-bold group-hover:text-brand-accent/10 transition-colors pointer-events-none">
                  0{i + 1}
                </div>

                <div className="flex items-center gap-3 text-brand-accent font-bold mb-6 relative z-10">
                  <step.icon size={20} className="shrink-0" />
                  <span className="text-sm md:text-base tracking-wider">{step.time}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-4 relative z-10 leading-tight">
                  {step.title}
                </h3>
                
                <p className="text-white/70 text-sm md:text-base leading-relaxed relative z-10">
                  {step.desc}
                </p>

                {/* Línea decorativa inferior que se expande en hover */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand-accent transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Methodology Quote */}
      <section className="py-32 px-6 md:px-12 bg-brand-black text-center relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-brand-accent/20 text-9xl font-serif absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">“</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold italic leading-tight relative z-10">
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-brand-black mb-8 md:mb-10 leading-[0.95] tracking-tighter">
            ¿ESTÁS LISTO PARA EL <br />
            <span className="italic">SIGUIENTE NIVEL?</span>
          </h2>
          <p className="text-brand-black/80 text-base md:text-lg xl:text-xl mb-10 md:mb-12 max-w-2xl mx-auto font-medium">
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
