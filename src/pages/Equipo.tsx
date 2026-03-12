import React from 'react';
import { motion } from 'motion/react';
import { 
  Instagram, Linkedin, Mail, Award, ShieldCheck, 
  Star, Users, Target, Zap, ArrowRight, BookOpen, 
  CheckCircle2, Quote
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface CoachCardProps {
  name: string;
  role: string;
  bio: string;
  img: string;
  license: string;
  delay: number;
  key?: React.Key;
}

const CoachCard = ({ name, role, bio, img, license, delay }: CoachCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="glass-card overflow-hidden group"
  >
    <div className="h-[450px] relative overflow-hidden">
      <img 
        src={img} 
        alt={name} 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
        referrerPolicy="no-referrer" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent"></div>
      <div className="absolute bottom-8 left-8 right-8">
        <div className="bg-brand-accent text-brand-black text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest mb-4 inline-block shadow-xl">
          {license}
        </div>
        <h3 className="text-3xl font-bold text-white mb-1 leading-none">{name}</h3>
        <p className="text-brand-accent text-sm font-display uppercase tracking-[0.2em]">{role}</p>
        
        <div className="flex gap-3 mt-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent hover:text-brand-black transition-all">
            <Instagram size={16} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent hover:text-brand-black transition-all">
            <Linkedin size={16} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent hover:text-brand-black transition-all">
            <Mail size={16} />
          </a>
        </div>
      </div>
    </div>
    <div className="p-8 bg-brand-dark/50">
      <p className="text-white/70 text-sm leading-relaxed italic">"{bio}"</p>
    </div>
  </motion.div>
);

export const Equipo = () => {
  const coaches = [
    {
      name: "Javier Palacios",
      role: "Director Técnico",
      bio: "Ex-jugador profesional con más de 10 años de experiencia en canteras de Primera División. Especialista en táctica individual y gestión de talento.",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
      license: "UEFA PRO",
      delay: 0.1
    },
    {
      name: "Adrián Gómez",
      role: "Prep. Físico",
      bio: "Graduado en CAFYD con máster en alto rendimiento deportivo. Experto en prevención de lesiones, potencia explosiva y recuperación funcional.",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
      license: "NSCA-CSCS",
      delay: 0.2
    },
    {
      name: "Sergio Mallén",
      role: "Entrenador Tecnificación",
      bio: "Especialista en desarrollo técnico de base. Su metodología se centra en el control orientado, el perfilamiento y la toma de decisiones rápida.",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
      license: "UEFA A",
      delay: 0.3
    }
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 md:px-12 bg-brand-black">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-accent/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Profesionales Certificados</span>
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.85] tracking-tighter mb-8">
              NUESTRO <br />
              <span className="text-brand-accent italic">STAFF TÉCNICO</span>
            </h1>
            <p className="text-white/70 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Un equipo multidisciplinar de élite dedicado exclusivamente a potenciar tu talento. No somos solo entrenadores, somos <span className="text-white font-semibold">mentores de tu carrera</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coaches Grid */}
      <section className="py-24 px-6 md:px-12 bg-brand-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coaches.map((coach, i) => <CoachCard key={i} {...coach} />)}
        </div>
      </section>

      {/* Philosophy Section - Slanted */}
      <section className="relative py-32 px-6 md:px-12 bg-brand-dark overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-brand-black slanted-bg -translate-y-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1000&auto=format&fit=crop" 
                  className="w-full h-full object-cover" 
                  alt="Coaching Philosophy" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <div className="absolute -top-10 -right-10 glass-card p-8 max-w-[240px] hidden md:block border-brand-accent/30">
                <Quote className="text-brand-accent mb-4" size={32} />
                <p className="text-sm italic text-white/80">"El entrenador no solo enseña técnica, enseña a creer en uno mismo."</p>
              </div>
            </div>
            <div>
              <span className="text-brand-accent font-bold tracking-widest uppercase text-xs">Nuestra Visión</span>
              <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-10 leading-tight">Más que <br /><span className="text-brand-accent">Entrenadores</span></h2>
              <div className="space-y-8">
                {[
                  { title: "Atención Individualizada", desc: "Cada jugador es un proyecto único. Analizamos tus fortalezas y debilidades para crear un plan a medida.", icon: Target },
                  { title: "Formación Continua", desc: "Nuestro staff participa en congresos internacionales y formaciones de élite cada temporada.", icon: BookOpen },
                  { title: "Valores Deportivos", desc: "Disciplina, respeto y resiliencia. Formamos futbolistas, pero sobre todo personas íntegras.", icon: ShieldCheck },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center shrink-0">
                      <item.icon className="text-brand-accent" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-32 px-6 md:px-12 bg-brand-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold">Nuestros <span className="text-brand-accent italic">Valores</span></h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              { icon: Award, title: "Excelencia", desc: "Buscamos la perfección en cada detalle del entrenamiento, desde el control hasta el pase." },
              { icon: Users, title: "Compromiso", desc: "Nos involucramos al 100% en la evolución de cada jugador, dentro y fuera del campo." },
              { icon: Star, title: "Profesionalidad", desc: "Tratamos a cada joven talento con la misma seriedad y rigor que a un jugador de primera división." },
            ].map((v, i) => (
              <div key={i} className="glass-card p-12 text-center group hover:bg-brand-accent/5 transition-all">
                <div className="w-20 h-20 rounded-full bg-brand-accent/10 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                  <v.icon className="text-brand-accent" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-6">{v.title}</h3>
                <p className="text-white/70 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications / Partners */}
      <section className="py-24 px-6 md:px-12 bg-brand-dark relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-brand-black slanted-bg-reverse translate-y-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-white/50 uppercase tracking-[0.3em] text-xs font-bold">Formación y Certificaciones</h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-20 grayscale">
            <div className="text-3xl font-black tracking-tighter">UEFA PRO</div>
            <div className="text-3xl font-black tracking-tighter">NSCA</div>
            <div className="text-3xl font-black tracking-tighter">CAFYD</div>
            <div className="text-3xl font-black tracking-tighter">FIFA</div>
            <div className="text-3xl font-black tracking-tighter">AFE</div>
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-32 px-6 md:px-12 bg-brand-black">
        <div className="max-w-5xl mx-auto glass-card p-16 text-center border-brand-accent/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <h2 className="text-4xl md:text-5xl font-bold mb-8 relative z-10">¿Eres un apasionado de la <br /><span className="text-brand-accent italic">tecnificación?</span></h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto relative z-10">
            Siempre estamos buscando entrenadores con talento, ambición y ganas de cambiar el fútbol base. Si crees que encajas en nuestro método, queremos conocerte.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <a href="mailto:careers@jppreparation.com" className="btn-primary px-12 py-5 flex items-center justify-center gap-3 group">
              TRABAJA CON NOSOTROS
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 md:px-12 bg-brand-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-brand-black mb-10 leading-none">
            ENTRENA CON <br />
            <span className="italic">LOS MEJORES</span>
          </h2>
          <p className="text-brand-black/80 text-xl mb-12 max-w-2xl mx-auto font-medium">
            Nuestro staff está listo para llevarte al siguiente nivel. ¿Lo estás tú?
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contacto" className="bg-brand-black text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-dark transition-all flex items-center justify-center gap-3 group">
              RESERVAR PRUEBA DE NIVEL
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
