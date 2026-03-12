import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, Users, Target, Zap, Clock, Trophy, 
  BarChart3, ShieldCheck, Star, ArrowRight, Calendar, 
  Info, HelpCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

interface ProgramCardProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  price: string;
  img: string;
  popular?: boolean;
  key?: React.Key;
}

const ProgramCard = ({ title, subtitle, description, features, price, img, popular = false }: ProgramCardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={cn(
      "rounded-3xl overflow-hidden border transition-all duration-500 flex flex-col group",
      popular ? "border-brand-accent bg-brand-dark shadow-2xl lg:scale-105 z-10" : "border-white/10 bg-white/5 hover:border-white/20"
    )}
  >
    <div className="h-72 relative overflow-hidden">
      <img 
        src={img} 
        alt={title} 
        className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" 
        referrerPolicy="no-referrer" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent"></div>
      {popular && (
        <div className="absolute top-6 right-6 bg-brand-accent text-brand-black text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-xl">
          MÁS SOLICITADO
        </div>
      )}
      <div className="absolute bottom-8 left-8">
        <span className="text-brand-accent font-bold text-xs uppercase tracking-[0.3em] mb-2 block">{subtitle}</span>
        <h3 className="text-4xl font-bold text-white leading-none">{title}</h3>
      </div>
    </div>
    <div className="p-10 flex-grow flex flex-col">
      <p className="text-white/70 mb-8 text-sm leading-relaxed">{description}</p>
      <ul className="space-y-4 mb-10 flex-grow">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-white/80">
            <CheckCircle2 size={18} className="text-brand-accent shrink-0 mt-0.5" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className="pt-8 border-t border-white/10 flex items-center justify-between">
        <div>
          <span className="text-white/50 text-[10px] uppercase tracking-widest block mb-1">Inversión</span>
          <span className="text-3xl font-display font-bold text-white">{price}</span>
        </div>
        <Link to="/contacto" className={cn(
          "py-4 px-8 rounded-full font-bold uppercase text-xs tracking-widest transition-all", 
          popular ? "bg-brand-accent text-brand-black hover:bg-white" : "bg-white/10 text-white hover:bg-white/20"
        )}>
          RESERVAR
        </Link>
      </div>
    </div>
  </motion.div>
);

export const Programas = () => {
  const programs = [
    {
      title: "One-to-One",
      subtitle: "Individual",
      description: "Sesiones de 60 minutos enfocadas exclusivamente en tus necesidades técnicas. El entrenador corrige cada detalle en tiempo real para una mejora exponencial.",
      features: ["Análisis biomecánico HD", "Foco en debilidades específicas", "Máxima intensidad de repetición", "Seguimiento por vídeo incluido"],
      price: "45€",
      img: "https://images.unsplash.com/photo-1526232759583-26f173b0bb3e?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Squad Training",
      subtitle: "Grupos Reducidos",
      description: "Entrena con jugadores de tu mismo nivel (máx. 4). Ideal para trabajar situaciones de duelo, pase y toma de decisiones bajo presión real.",
      features: ["Duelos 1vs1 y 2vs2", "Competitividad real", "Transferencia directa al juego", "2 sesiones semanales"],
      price: "120€",
      img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop",
      popular: true
    },
    {
      title: "Elite Camp",
      subtitle: "Intensivo Pro",
      description: "Programa de inmersión total durante 1 semana. Entrenamiento profesional, nutrición, charlas tácticas y convivencia deportiva.",
      features: ["Doble sesión diaria", "Equipación oficial Nike", "Informe de rendimiento final", "Almuerzo deportivo incluido"],
      price: "350€",
      img: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=800&auto=format&fit=crop"
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
            <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Nuestros Planes</span>
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.85] tracking-tighter mb-8">
              PROGRAMAS DE <br />
              <span className="text-brand-accent italic">ALTO RENDIMIENTO</span>
            </h1>
            <p className="text-white/70 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Diseñados para cada etapa del desarrollo del futbolista. Elige el camino que mejor se adapte a tus objetivos y empieza a marcar la diferencia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Cards Grid */}
      <section className="py-24 px-6 md:px-12 bg-brand-black relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-stretch">
          {programs.map((p, i) => <ProgramCard key={i} {...p} />)}
        </div>
      </section>

      {/* Methodology Overview - Slanted */}
      <section className="relative py-32 px-6 md:px-12 bg-brand-dark overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-brand-black slanted-bg -translate-y-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">¿Cómo trabajamos <br /><span className="text-brand-accent">en cada sesión?</span></h2>
              <div className="space-y-8">
                {[
                  { title: "Grupos por Nivel", desc: "No mezclamos edades, mezclamos niveles técnicos para asegurar el progreso de todos.", icon: Users },
                  { title: "Entrenadores Certificados", desc: "Todos nuestros técnicos cuentan con titulación UEFA y especialización en tecnificación.", icon: ShieldCheck },
                  { title: "Material Pro", desc: "Balones de competición, GPS, cámaras y material de última generación.", icon: Star },
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
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden"><img src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Training" referrerPolicy="no-referrer" /></div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden"><img src="https://images.unsplash.com/photo-1526232759583-26f173b0bb3e?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Training" referrerPolicy="no-referrer" /></div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden"><img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Training" referrerPolicy="no-referrer" /></div>
                <div className="aspect-square rounded-2xl overflow-hidden"><img src="https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Training" referrerPolicy="no-referrer" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-32 px-6 md:px-12 bg-brand-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold">Expectativas de <span className="text-brand-accent italic">Progreso</span></h2>
            <p className="text-white/60 mt-6 max-w-xl mx-auto">Basado en nuestra experiencia con cientos de jugadores durante los últimos 5 años.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { time: "1 Mes", title: "Corrección de Vicios", desc: "Eliminamos malos hábitos posturales y técnicos. Mejora inmediata en el control orientado.", icon: Clock },
              { time: "3 Meses", title: "Consolidación Técnica", desc: "El jugador ejecuta los gestos de forma inconsciente. Aumento de la confianza en el 1vs1.", icon: BarChart3 },
              { time: "6 Meses", title: "Dominio Situacional", desc: "Transferencia total al juego real. El jugador destaca en su equipo por su toma de decisiones.", icon: Trophy },
            ].map((metric, i) => (
              <div key={i} className="glass-card p-12 relative group hover:bg-brand-accent/5 transition-all">
                <div className="text-brand-accent font-display text-lg mb-4">{metric.time}</div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-4">
                  {metric.title}
                  <metric.icon className="text-brand-accent/50 group-hover:text-brand-accent transition-colors" size={24} />
                </h3>
                <p className="text-white/70 leading-relaxed">{metric.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-32 px-6 md:px-12 bg-brand-dark relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-brand-black slanted-bg-reverse translate-y-1/2" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Compara nuestros <span className="text-brand-accent">Servicios</span></h2>
          </div>
          <div className="overflow-x-auto glass-card border-white/5">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-8 px-8 font-display uppercase tracking-widest text-xs text-white/60">Característica</th>
                  <th className="py-8 px-8 font-display uppercase tracking-widest text-xs text-brand-accent">Individual</th>
                  <th className="py-8 px-8 font-display uppercase tracking-widest text-xs text-white">Grupal</th>
                  <th className="py-8 px-8 font-display uppercase tracking-widest text-xs text-white">Camp</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  ["Atención personalizada", "100%", "25%", "Variable"],
                  ["Foco técnico", "Máximo", "Alto", "Medio"],
                  ["Toma de decisiones", "Bajo", "Máximo", "Alto"],
                  ["Análisis de vídeo", "Incluido", "Opcional", "Incluido"],
                  ["Preparación física", "Específica", "General", "Intensiva"],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-6 px-8 font-bold text-white/80">{row[0]}</td>
                    <td className="py-6 px-8 text-brand-accent font-medium">{row[1]}</td>
                    <td className="py-6 px-8 text-white/70">{row[2]}</td>
                    <td className="py-6 px-8 text-white/70">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section for Programs */}
      <section className="py-32 px-6 md:px-12 bg-brand-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Dudas <span className="text-brand-accent italic">Frecuentes</span></h2>
          </div>
          <div className="space-y-6">
            {[
              { q: "¿Puedo cambiar de programa a mitad de mes?", a: "Sí, siempre que haya disponibilidad en el nuevo programa. Ajustaremos la cuota proporcionalmente." },
              { q: "¿Qué pasa si falto a una sesión?", a: "Si avisas con 24h de antelación, la sesión se recupera en otro horario. Si no, se dará por realizada." },
              { q: "¿Necesito llevar material propio?", a: "Solo tus botas y ropa de entrenamiento. Nosotros ponemos los balones, petos y material técnico de última generación." },
            ].map((faq, i) => (
              <div key={i} className="p-8 border border-white/5 rounded-2xl hover:border-brand-accent/30 transition-colors">
                <h4 className="text-lg font-bold mb-4 flex items-center gap-3">
                  <HelpCircle className="text-brand-accent" size={20} />
                  {faq.q}
                </h4>
                <p className="text-white/70 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 md:px-12 bg-brand-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-brand-black mb-10 leading-none">
            EL MOMENTO ES <br />
            <span className="italic">AHORA</span>
          </h2>
          <p className="text-brand-black/80 text-xl mb-12 max-w-2xl mx-auto font-medium">
            No dejes para mañana el entrenamiento que te hará destacar el próximo fin de semana.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contacto" className="bg-brand-black text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-dark transition-all flex items-center justify-center gap-3 group">
              RESERVAR MI PLAZA
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link to="/tecnificacion" className="border-2 border-brand-black text-brand-black px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-black hover:text-white transition-all">
              SABER MÁS DEL MÉTODO
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
