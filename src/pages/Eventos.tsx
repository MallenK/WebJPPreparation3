import React from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, Zap, Camera, Shield, Coffee, Wifi, Car, Play,
  ArrowRight, Star, Users, Trophy, Flame 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const EventCard = ({ title, subtitle, desc, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="glass-card p-10 group hover:bg-brand-accent/5 transition-all duration-500"
  >
    <div className="w-16 h-16 rounded-2xl bg-brand-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="text-brand-accent" size={28} />
    </div>

    <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-3">{subtitle}</p>
    <h3 className="text-3xl font-bold mb-4">{title}</h3>
    <p className="text-white/70 leading-relaxed">{desc}</p>
  </motion.div>
);

export const Eventos = () => {
  return (
    <main className="overflow-hidden">

      {/* HERO */}
      <section className="relative pt-40 pb-24 px-6 md:px-12 bg-brand-black">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-accent/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-xs mb-4 block">
              Experiencias JP
            </span>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-8">
              NUESTROS <br />
              <span className="text-brand-accent italic">EVENTOS</span>
            </h1>

            <p className="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed">
              Mucho más que entrenamientos. Creamos experiencias reales donde los jugadores compiten, 
              crecen y viven el fútbol al máximo nivel.
            </p>
          </motion.div>
        </div>
      </section>

      {/* EVENT TYPES */}
      <section className="py-32 px-6 md:px-12 bg-brand-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

          <EventCard
            title="STAGE"
            subtitle="Alto rendimiento"
            icon={Flame}
            delay={0.1}
            desc="Nuestro evento más completo. Un stage anual de 5 días fuera de Barcelona donde los jugadores viven una experiencia 24/7 centrada en el fútbol. Incluye sesiones de vídeo, entrenamientos dobles, trabajo psicológico, dinámicas de equipo y actividades lúdicas."
          />

          <EventCard
            title="TORNEOS"
            subtitle="Competición real"
            icon={Trophy}
            delay={0.2}
            desc="Participamos en torneos durante todo el año, tanto por invitación como por elección propia. Competimos en diferentes formatos: torneos de un día o con estancia. Buscamos siempre el mejor entorno competitivo para el desarrollo del jugador."
          />

          <EventCard
            title="BATALLA DE PORTEROS"
            subtitle="Evento especial"
            icon={Shield}
            delay={0.3}
            desc="Evento exclusivo para porteros. En 2026 reunimos a 48 porteros divididos por edades en formato 1vs1. Una experiencia competitiva única con premios, patrocinadores y ambiente profesional."
          />

        </div>
      </section>

      {/* STAGE DETAIL */}
      <section className="relative py-32 px-6 md:px-12 bg-brand-dark overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-brand-black slanted-bg -translate-y-1/2" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">
              Experiencia <br />
              <span className="text-brand-accent">STAGE</span>
            </h2>

            <div className="space-y-6 text-white/70">
              <p>Durante 5 días los jugadores viven completamente enfocados en el fútbol.</p>
              <p>Entrenamientos dobles diarios, análisis de vídeo y trabajo mental.</p>
              <p>Actividades de equipo y convivencia para potenciar valores y cohesión.</p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
              {[
                { icon: Zap, text: "Doble sesión diaria" },
                { icon: Camera, text: "Análisis de vídeo" },
                { icon: Users, text: "Trabajo en equipo" },
                { icon: Star, text: "Experiencia 24/7" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <item.icon className="text-brand-accent" size={18} />
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          <div className="aspect-video rounded-3xl overflow-hidden border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000&auto=format&fit=crop"
              className="w-full h-full object-cover"
              alt="Stage"
            />
          </div>

        </div>
      </section>

      {/* TORNEOS PRO */}
      <section className="py-32 px-6 md:px-12 bg-brand-black">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              TORNEOS <span className="text-brand-accent italic">JP</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Competimos durante todo el año en entornos reales para que el jugador aplique lo entrenado bajo presión.
            </p>
          </div>

          {/* GRID VISUAL */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              "photo-1508098682722-e99c43a406b2",
              "photo-1521417531039-4c6f6f6b8a9b",
              "photo-1508804185872-d7badad00f7d"
            ].map((id, i) => (
              <div key={i} className="relative group overflow-hidden rounded-2xl">
                <img
                  src={`https://images.unsplash.com/${id}?q=80&w=900`}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />
              </div>
            ))}
          </div>

          {/* INFO BLOQUES */}
          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Competición real",
                desc: "Participamos en torneos donde el jugador compite en contextos exigentes y reales."
              },
              {
                title: "Formatos variados",
                desc: "Torneos de un día o con estancia, adaptados a cada categoría y nivel."
              },
              {
                title: "Selección estratégica",
                desc: "Elegimos torneos que aporten valor al desarrollo del jugador, no solo competir por competir."
              }
            ].map((item, i) => (
              <div key={i} className="glass-card p-8 text-center hover:bg-brand-accent/5 transition">
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* BATALLA DE PORTEROS PRO */}
      <section className="py-32 px-6 md:px-12 bg-brand-dark relative overflow-hidden">

        <div className="max-w-6xl mx-auto text-center">

          {/* TITLE */}
          <h2 className="text-5xl md:text-6xl font-bold mb-10">
            BATALLA DE <span className="text-brand-accent italic">PORTEROS</span>
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto mb-16">
            Un evento único donde reunimos a porteros para competir en formato 1vs1 en un entorno profesional,
            con premios, patrocinadores y máxima intensidad.
          </p>

          {/* VIDEO HERO */}
          <div className="relative mb-16">
            <div className="aspect-video rounded-3xl overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <div className="w-20 h-20 rounded-full bg-brand-accent flex items-center justify-center animate-pulse">
                  <Play className="text-white" size={28} />
                </div>
              </div>
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { value: "48", label: "Porteros" },
              { value: "1vs1", label: "Formato" },
              { value: "2026", label: "Edición" },
              { value: "+Sponsors", label: "Patrocinadores" }
            ].map((item, i) => (
              <div key={i}>
                <div className="text-4xl font-bold text-brand-accent">{item.value}</div>
                <div className="text-xs uppercase text-white/50 tracking-widest">{item.label}</div>
              </div>
            ))}
          </div>

          {/* FEATURES */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Premios y regalos para participantes",
              "Ambiente competitivo de alto nivel",
              "Organización profesional del evento"
            ].map((text, i) => (
              <div key={i} className="glass-card p-8 text-white/80">
                {text}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 md:px-12 bg-brand-accent text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-brand-black mb-8">
          ¿QUIERES PARTICIPAR EN <br />NUESTROS EVENTOS?
        </h2>

        <p className="text-brand-black/80 mb-10 max-w-xl mx-auto">
          Contacta con nosotros y te informaremos de los próximos eventos disponibles.
        </p>

        <Link
          to="/contacto"
          className="bg-brand-black text-white px-10 py-5 rounded-full font-bold inline-flex items-center gap-3"
        >
          MÁS INFORMACIÓN
          <ArrowRight />
        </Link>
      </section>

    </main>
  );
};