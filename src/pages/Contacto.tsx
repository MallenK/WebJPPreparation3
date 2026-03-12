import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, Phone, MapPin, Send, Instagram, Facebook, 
  MessageSquare, ChevronDown, Plus, CheckCircle2, 
  ArrowRight, Globe, Youtube, Twitter
} from 'lucide-react';

export const Contacto = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "¿Cómo reservo mi primera sesión de prueba?",
      a: "Es muy sencillo. Rellena el formulario de esta página o envíanos un WhatsApp. Nos pondremos en contacto contigo en menos de 24h para agendar una prueba de nivel gratuita."
    },
    {
      q: "¿A partir de qué edad pueden apuntarse?",
      a: "Nuestros programas empiezan desde los 6 años (Pre-benjamín) hasta categoría Senior. Adaptamos la metodología y la intensidad según la etapa madurativa del jugador."
    },
    {
      q: "¿Es compatible con los entrenamientos de mi club?",
      a: "¡Absolutamente! Somos una academia de tecnificación complementaria. Nuestros horarios están diseñados para que puedas venir 1 o 2 días a la semana sin interferir con tu club."
    },
    {
      q: "¿Ofrecéis entrenamientos individuales o en grupo?",
      a: "Ambos. Tenemos sesiones 1-on-1 para un trabajo de máximo detalle, y grupos reducidos (máximo 6 jugadores) para trabajar situaciones reales de juego y competitividad."
    }
  ];

  const steps = [
    { title: "Solicitud", desc: "Rellenas el formulario con tus datos y objetivos.", icon: MessageSquare },
    { title: "Evaluación", desc: "Realizamos una prueba de nivel gratuita en campo.", icon: Target },
    { title: "Planificación", desc: "Te asignamos el grupo y entrenador ideal para ti.", icon: Zap },
    { title: "¡A Entrenar!", desc: "Empiezas tu camino hacia la élite con nosotros.", icon: Trophy },
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 md:px-12 bg-brand-black">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-accent/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Contacto & Inscripciones</span>
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.85] tracking-tighter mb-8">
              ÚNETE A LA <br />
              <span className="text-brand-accent italic">ACADEMIA</span>
            </h1>
            <p className="text-white/70 text-xl md:text-2xl mt-8 max-w-3xl leading-relaxed">
              ¿Listo para transformar tu juego? Estamos aquí para resolver tus dudas y ayudarte a dar el <span className="text-white font-semibold">salto de calidad</span> que buscas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info - Slanted */}
      <section className="relative py-32 px-6 md:px-12 bg-brand-dark overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-brand-black slanted-bg -translate-y-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-12">Información de <br /><span className="text-brand-accent">Contacto</span></h2>
              
              <div className="space-y-10">
                {[
                  { title: "Llámanos", info: "+34 600 000 000", sub: "L-V: 09:00 - 20:00", icon: Phone },
                  { title: "Email Directo", info: "info@jppreparation.com", sub: "Respuesta en < 24h", icon: Mail },
                  { title: "Nuestra Sede", info: "Carrer de la Tecnología, 12", sub: "Barcelona, España", icon: MapPin },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center shrink-0 border border-brand-accent/20 group-hover:bg-brand-accent group-hover:text-brand-black transition-all">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-white/60 text-xs uppercase tracking-widest font-bold mb-1">{item.title}</h4>
                      <p className="text-xl font-bold text-white mb-1">{item.info}</p>
                      <p className="text-white/50 text-sm">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 p-8 glass-card border-brand-accent/20 bg-brand-accent/5">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <MessageSquare className="text-brand-accent" size={20} />
                  ¿Atención rápida?
                </h4>
                <p className="text-white/70 text-sm mb-6">Escríbenos por WhatsApp para una respuesta inmediata de nuestro equipo de admisiones.</p>
                <button className="bg-[#25D366] text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform">
                  WHATSAPP DIRECTO
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 md:p-12 relative"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Send size={120} />
              </div>
              <h3 className="text-2xl font-bold mb-8 relative z-10">Solicitud de <span className="text-brand-accent">Inscripción</span></h3>
              <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.2em] text-white/60 font-bold">Nombre del Jugador</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-accent transition-colors text-white" placeholder="Ej: Marc García" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.2em] text-white/60 font-bold">Edad / Categoría</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-accent transition-colors text-white" placeholder="Ej: 12 años / Infantil" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.2em] text-white/60 font-bold">Email</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-accent transition-colors text-white" placeholder="tu@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.2em] text-white/60 font-bold">Teléfono</label>
                    <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-accent transition-colors text-white" placeholder="+34 600 000 000" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.2em] text-white/60 font-bold">Programa de Interés</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-accent transition-colors text-white appearance-none cursor-pointer">
                    <option className="bg-brand-dark">Tecnificación Individual (1-on-1)</option>
                    <option className="bg-brand-dark">Grupos Reducidos (Max 6)</option>
                    <option className="bg-brand-dark">Campus de Verano / Navidad</option>
                    <option className="bg-brand-dark">Análisis de Video & Bio-mecánica</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.2em] text-white/60 font-bold">Mensaje / Objetivos</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-accent transition-colors text-white resize-none" placeholder="Cuéntanos un poco sobre tu nivel actual y qué buscas mejorar..."></textarea>
                </div>

                <button type="submit" className="btn-primary w-full py-5 flex items-center justify-center gap-3 group">
                  ENVIAR SOLICITUD
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <p className="text-xs text-white/50 text-center">Al enviar este formulario aceptas nuestra política de privacidad y tratamiento de datos.</p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-32 px-6 md:px-12 bg-brand-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold">¿Qué pasa <span className="text-brand-accent italic">después?</span></h2>
            <p className="text-white/60 mt-6 max-w-xl mx-auto">Tu camino hacia la mejora técnica es un proceso estructurado y profesional.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative text-center group">
                {i !== 3 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-[1px] bg-white/5 z-0" />
                )}
                <div className="w-24 h-24 rounded-full bg-brand-dark border border-white/5 flex items-center justify-center mx-auto mb-8 relative z-10 group-hover:border-brand-accent transition-colors">
                  <step.icon className="text-brand-accent" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 md:px-12 bg-brand-dark relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-brand-black slanted-bg-reverse translate-y-1/2" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold">Preguntas <span className="text-brand-accent italic">Frecuentes</span></h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-8 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                >
                  <span className="text-xl font-bold">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-transform duration-300 ${activeFaq === i ? 'rotate-180 bg-brand-accent border-brand-accent text-brand-black' : ''}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-8 pt-0 text-white/70 leading-relaxed border-t border-white/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Grid */}
      <section className="py-32 px-6 md:px-12 bg-brand-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">Síguenos en <br /><span className="text-brand-accent">Redes</span></h2>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-accent hover:text-brand-black transition-all"><Instagram size={20} /></button>
              <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-accent hover:text-brand-black transition-all"><Youtube size={20} /></button>
              <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-accent hover:text-brand-black transition-all"><Twitter size={20} /></button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=400&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=400&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=400&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=400&auto=format&fit=crop",
            ].map((img, i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden relative group cursor-pointer">
                <img src={img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" alt="Social" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-brand-accent/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="text-white" size={32} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 grayscale opacity-40">
          <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Map" referrerPolicy="no-referrer" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="glass-card p-10 text-center max-w-md w-full border-brand-accent/30 shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-brand-accent flex items-center justify-center mx-auto mb-6 text-brand-black">
              <MapPin size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">¿Vienes a vernos?</h3>
            <p className="text-white/70 mb-8">Estamos en el corazón de la ciudad deportiva. Fácil acceso y parking propio para padres.</p>
            <button className="btn-primary w-full flex items-center justify-center gap-3">
              ABRIR EN GOOGLE MAPS
              <Globe size={18} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

const Target = ({ className, size }: { className?: string, size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
);

const Zap = ({ className, size }: { className?: string, size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);

const Trophy = ({ className, size }: { className?: string, size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
);
