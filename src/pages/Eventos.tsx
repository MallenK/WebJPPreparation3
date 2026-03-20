import React from 'react';
import { motion } from 'motion/react';
import { 
  Shield, Camera, Zap, Users, Star, Trophy, Flame, Play, CheckCircle2 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SectionHeader = ({ subtitle, title, centered = false }) => (
  <div className={centered ? "text-center mb-16 md:mb-20" : "mb-12 md:mb-16"}>
    
    <span className="text-brand-accent font-black tracking-[0.4em] uppercase text-[10px] md:text-xs bg-brand-accent/10 py-2 px-4 rounded-full border border-brand-accent/20 inline-block">
      {subtitle}
    </span>

    <h2 
      className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black mt-4 md:mt-6 leading-[0.95] tracking-tighter"
      dangerouslySetInnerHTML={{ __html: title }}
    />

  </div>
);
export const Eventos = () => {
  return (
    <main className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative pt-28 md:pt-32 lg:pt-32 xl:pt-40 pb-16 md:pb-20 lg:pb-24 px-6 md:px-10 lg:px-12 bg-brand-black text-center">

        <div className="absolute inset-0 bg-gradient-to-b from-brand-accent/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">

          <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-xs mb-3 md:mb-4 block">
            Experiencias
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-[0.9] tracking-tighter mb-6 md:mb-8">
            EVENTOS DE <br />
            <span className="text-gradient italic">ALTO RENDIMIENTO</span>
          </h1>

          <p className="text-base sm:text-lg md:text-lg lg:text-lg xl:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            No entrenamos jugadores. Creamos experiencias donde compiten, 
            se exigen y evolucionan en contextos reales de máximo nivel.
          </p>

        </div>
      </section>

      {/* EVENTS GRID */}
      <section className="section-padding bg-brand-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 md:gap-8">

          {[
            {
              icon: Flame,
              title: "STAGE",
              desc: "5 días viviendo fútbol 24/7. Entrenamiento, vídeo, mentalidad y convivencia."
            },
            {
              icon: Trophy,
              title: "TORNEOS",
              desc: "Competición real durante todo el año en entornos exigentes."
            },
            {
              icon: Shield,
              title: "PORTEROS",
              desc: "Evento 1vs1 exclusivo con máxima intensidad y nivel."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-card p-6 md:p-8 lg:p-8 xl:p-10 group hover:bg-brand-accent/5 transition-all"
            >
              <item.icon className="text-brand-accent mb-4 md:mb-6" size={28} />
              <h3 className="text-xl md:text-2xl lg:text-2xl xl:text-3xl font-black mb-3 md:mb-4">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-white/70 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </section>


      {/* STAGE */}
      <section className="section-padding bg-brand-dark slanted-bg">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">

          <div>
            <SectionHeader
              subtitle="Stage"
              title="UNA EXPERIENCIA <br/><span class='text-brand-accent italic'>TOTAL</span>"
            />

            <div className="space-y-4 md:space-y-6 text-white/70 text-base md:text-lg lg:text-lg leading-relaxed">
              <p>Durante 5 días el jugador vive completamente enfocado en su evolución.</p>
              <p>Entrenamientos dobles, vídeo análisis y trabajo mental.</p>
              <p>Un entorno diseñado para mejorar rendimiento y mentalidad.</p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-12">
              {[
                { icon: Zap, text: "Doble sesión diaria" },
                { icon: Camera, text: "Vídeo análisis" },
                { icon: Users, text: "Convivencia equipo" },
                { icon: Star, text: "Experiencia élite" }
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-center">
                  <item.icon className="text-brand-accent" size={16} />
                  <span className="text-xs md:text-sm text-white/80">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="aspect-square rounded-[2rem] overflow-hidden border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>


      {/* TORNEOS */}
      <section className="section-padding bg-brand-black">
        <div className="max-w-7xl mx-auto">

          <SectionHeader
            subtitle="Competición"
            title="TORNEOS DE <span class='text-gradient italic'>VERDAD</span>"
            centered
          />

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">

            {[
              "Competición real bajo presión.",
              "Aplicación directa del entrenamiento.",
              "Entornos de máximo nivel."
            ].map((text, i) => (
              <div key={i} className="glass-card p-6 md:p-8 lg:p-8 xl:p-10 text-center">
                <CheckCircle2 className="text-brand-accent mx-auto mb-3 md:mb-4" size={18} />
                <p className="text-sm md:text-base text-white/80 leading-relaxed">
                  {text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* PORTEROS */}
      <section className="section-padding bg-brand-dark slanted-bg-reverse text-center">
        <div className="max-w-5xl mx-auto">

          <SectionHeader
            subtitle="Evento Especial"
            title="BATALLA DE <span class='text-brand-accent italic'>PORTEROS</span>"
            centered
          />

          <p className="text-base md:text-lg text-white/70 mb-8 md:mb-12 leading-relaxed">
            48 porteros. Formato 1vs1. Máxima exigencia. Ambiente profesional.
          </p>

          <div className="relative mb-10 md:mb-16">
            <div className="aspect-video rounded-3xl overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-brand-accent flex items-center justify-center animate-pulse">
                  <Play className="text-white" size={20} />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: "48", label: "Porteros" },
              { value: "1vs1", label: "Formato" },
              { value: "Pro", label: "Nivel" },
              { value: "Top", label: "Experiencia" }
            ].map((item, i) => (
              <div key={i}>
                <div className="text-2xl md:text-3xl lg:text-4xl font-black text-brand-accent">
                  {item.value}
                </div>
                <div className="text-[10px] md:text-xs text-white/50 uppercase tracking-widest">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA (alineado con home) */}
      <section className="section-padding bg-brand-black text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black mb-6 md:mb-8 leading-[0.95] tracking-tighter">
            ¿QUIERES VIVIR <br/>
            <span className="text-gradient italic">ESTO?</span>
          </h2>

          <p className="text-white/70 mb-10">
            Las plazas son limitadas. Accede a los próximos eventos y lleva tu nivel al siguiente punto.
          </p>

          <Link to="/contacto" className="btn-primary text-lg px-12 py-5">
            Solicitar información
          </Link>
        </div>
      </section>

    </main>
  );
};