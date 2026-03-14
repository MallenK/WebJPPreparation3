import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Instagram,
  MessageSquare,
  ChevronDown,
  ArrowRight,
  Globe,
  Youtube,
  Twitter,
} from 'lucide-react';

export const Contacto = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const contact = {
    whatsapp: '+34 662 968 341',
    whatsappUrl: 'https://wa.me/34662968341',
    instagram: 'https://www.instagram.com/jp.preparation',
    addressLine1: 'Carrer de la Pobla, 29',
    addressLine2: '08620 Sant Vicenç dels Horts, Barcelona',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Carrer+de+la+Pobla+29+Sant+Vicenc+dels+Horts+Barcelona',
    mapsEmbed:
      'https://www.google.com/maps?q=Carrer%20de%20la%20Pobla%2029%20Sant%20Vicenc%20dels%20Horts%20Barcelona&output=embed',
  };

  const faqs = [
    {
      q: '¿Cómo puedo contactar con JP Preparation?',
      a: 'Puedes escribir directamente por WhatsApp o contactar a través de su perfil oficial de Instagram.',
    },
    {
      q: '¿Qué edades trabajan?',
      a: 'JP Preparation trabaja con futbolistas desde los 8 años hasta edades adultas.',
    },
    {
      q: '¿Qué tipo de entrenamientos ofrecen?',
      a: 'En su comunicación pública muestran entrenamientos personalizados, tecnificación, trabajo físico y sesiones adaptadas al jugador.',
    },
    {
      q: '¿Dónde están ubicados?',
      a: 'JP Preparation está en Carrer de la Pobla, 29, 08620 Sant Vicenç dels Horts, Barcelona.',
    },
  ];

  const steps = [
    { title: 'Contacto', desc: 'Escríbenos por WhatsApp o Instagram para solicitar información.', icon: MessageSquare },
    { title: 'Consulta', desc: 'Te orientamos sobre el servicio que mejor encaja contigo.', icon: Target },
    { title: 'Valoración', desc: 'Se define la mejor opción según edad, nivel y objetivo.', icon: Zap },
    { title: 'Inicio', desc: 'Comienza tu proceso de entrenamiento con JP Preparation.', icon: Trophy },
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
            <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-xs mb-4 block">
              Contacto
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter mb-8">
              CONTACTA CON <br className="hidden sm:block" />
              <span className="text-brand-accent italic">JP PREPARATION</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl mt-8 max-w-3xl leading-relaxed">
              Si quieres más información sobre sus entrenamientos, ubicación o servicios,
              aquí tienes los canales públicos de contacto de JP Preparation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 bg-brand-dark overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-brand-black slanted-bg -translate-y-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12">
                Información de <br />
                <span className="text-brand-accent">Contacto</span>
              </h2>

              <div className="space-y-10">
                {[
                  {
                    title: 'WhatsApp',
                    info: contact.whatsapp,
                    sub: 'Canal directo de contacto',
                    icon: Phone,
                  },
                  {
                    title: 'Instagram',
                    info: '@jp.preparation',
                    sub: 'Perfil oficial',
                    icon: Instagram,
                  },
                  {
                    title: 'Ubicación',
                    info: contact.addressLine1,
                    sub: contact.addressLine2,
                    icon: MapPin,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center shrink-0 border border-brand-accent/20 group-hover:bg-brand-accent group-hover:text-brand-black transition-all">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-white/60 text-xs uppercase tracking-widest font-bold mb-1">
                        {item.title}
                      </h4>
                      <p className="text-lg md:text-xl font-bold text-white mb-1 break-words">
                        {item.info}
                      </p>
                      <p className="text-white/50 text-sm">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 p-8 glass-card border-brand-accent/20 bg-brand-accent/5">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <MessageSquare className="text-brand-accent" size={20} />
                  Contacto rápido
                </h4>
                <p className="text-white/70 text-sm mb-6">
                  Puedes escribir directamente por WhatsApp o visitar su perfil oficial de Instagram.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-white px-8 py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                  >
                    WHATSAPP
                  </a>
                  <a
                    href={contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline px-8 py-3"
                  >
                    INSTAGRAM
                  </a>
                </div>
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

              <h3 className="text-2xl font-bold mb-8 relative z-10">
                Solicitud de <span className="text-brand-accent">Información</span>
              </h3>

              <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.2em] text-white/60 font-bold">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-accent transition-colors text-white"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.2em] text-white/60 font-bold">
                      Edad
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-accent transition-colors text-white"
                      placeholder="Ej: 14 años"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.2em] text-white/60 font-bold">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-accent transition-colors text-white"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.2em] text-white/60 font-bold">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-accent transition-colors text-white"
                      placeholder="+34 ..."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.2em] text-white/60 font-bold">
                    Servicio de interés
                  </label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-accent transition-colors text-white appearance-none cursor-pointer">
                    <option className="bg-brand-dark">Tecnificación</option>
                    <option className="bg-brand-dark">Entrenamiento personalizado</option>
                    <option className="bg-brand-dark">Preparación física</option>
                    <option className="bg-brand-dark">Información general</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.2em] text-white/60 font-bold">
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-accent transition-colors text-white resize-none"
                    placeholder="Escribe aquí tu consulta..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-5 flex items-center justify-center gap-3 group"
                >
                  ENVIAR SOLICITUD
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>

                <p className="text-xs text-white/50 text-center">
                  Este formulario puede adaptarse con el contenido y flujo definitivo que indique JP Preparation.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-brand-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold">
              ¿Qué pasa <span className="text-brand-accent italic">después?</span>
            </h2>
            <p className="text-white/60 mt-6 max-w-xl mx-auto">
              El contacto con JP Preparation puede empezar de forma rápida y directa.
            </p>
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
      <section className="py-24 md:py-32 px-6 md:px-12 bg-brand-dark relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-brand-black slanted-bg-reverse translate-y-1/2" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold">
              Preguntas <span className="text-brand-accent italic">Frecuentes</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-6 md:p-8 text-left flex justify-between items-center gap-4 hover:bg-white/5 transition-colors"
                >
                  <span className="text-lg md:text-xl font-bold">{faq.q}</span>
                  <div
                    className={`w-8 h-8 shrink-0 rounded-full border border-white/10 flex items-center justify-center transition-transform duration-300 ${
                      activeFaq === i ? 'rotate-180 bg-brand-accent border-brand-accent text-brand-black' : ''
                    }`}
                  >
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
                      <div className="p-6 md:p-8 pt-0 text-white/70 leading-relaxed border-t border-white/5">
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
      <section className="py-24 md:py-32 px-6 md:px-12 bg-brand-black">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
              Síguenos en <br />
              <span className="text-brand-accent">Instagram</span>
            </h2>

            <a
              href="https://www.instagram.com/jp.preparation"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-accent hover:text-brand-black transition-all"
            >
              <Instagram size={20} />
            </a>
          </div>

          <div className="w-full rounded-2xl overflow-hidden border border-white/10">
            <iframe
              src="https://www.instagram.com/jp.preparation/embed"
              className="w-full h-[900px]"
              frameBorder="0"
              scrolling="no"
              loading="lazy"
            />
          </div>

        </div>
      </section>

      {/* Map Section */}
      <section className="relative bg-brand-dark overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">
          <div className="relative min-h-[320px] lg:min-h-full">
            <iframe
              src={contact.mapsEmbed}
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa JP Preparation"
            />
          </div>

          <div className="flex items-center justify-center p-6 md:p-10">
            <div className="glass-card p-8 md:p-10 max-w-md w-full border-brand-accent/30 shadow-2xl">
              <div className="w-16 h-16 rounded-full bg-brand-accent flex items-center justify-center mx-auto mb-6 text-brand-black">
                <MapPin size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">¿Dónde están?</h3>
              <p className="text-white/70 mb-3 text-center">{contact.addressLine1}</p>
              <p className="text-white/50 mb-8 text-center">{contact.addressLine2}</p>
              <a
                href={contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full flex items-center justify-center gap-3"
              >
                ABRIR EN GOOGLE MAPS
                <Globe size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const Target = ({ className, size }: { className?: string; size?: number }) => (
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
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const Zap = ({ className, size }: { className?: string; size?: number }) => (
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
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const Trophy = ({ className, size }: { className?: string; size?: number }) => (
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
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);