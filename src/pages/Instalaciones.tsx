import React from 'react';
import { motion } from 'motion/react';
import {
  MapPin, Maximize, Zap, Camera, Shield,
  Coffee, Wifi, Car, ArrowRight, Star
} from 'lucide-react';
import { Link } from 'react-router-dom';
import imgInstalacionesHero from '../assets/images/uploads/IMG_1817.jpeg';
import imgGaleria1 from '../assets/images/uploads/IMG_0175.jpeg';
import imgGaleria2 from '../assets/images/uploads/IMG_0176.jpeg';
import imgGaleria3 from '../assets/images/uploads/IMG_0180.jpeg';
import imgGaleria4 from '../assets/images/uploads/IMG_0181.jpeg';
import imgGaleria5 from '../assets/images/uploads/IMG_0184.jpeg';
import imgGaleria6 from '../assets/images/uploads/IMG_0189.jpeg';
import imgMapaFondo from '../assets/images/uploads/IMG_0184.jpeg';

export const Instalaciones = () => {
  const gallery = [
    { url: imgGaleria1, title: "Campo Principal" },
    { url: imgGaleria2, title: "Zona de Tecnificación" },
    { url: imgGaleria3, title: "Entrenamiento Nocturno" },
    { url: imgGaleria4, title: "Material de Élite" },
    { url: imgGaleria5, title: "Vestuarios" },
    { url: imgGaleria6, title: "Gradas" },
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover scale-110"
            alt="Stadium"
          />
          <div className="absolute inset-0 bg-brand-black/60 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Nuestro Templo</span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-[0.9] tracking-tighter mb-6 md:mb-8">
              INSTALACIONES
            </h1>

            <p className="text-white/90 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
              Un entorno profesional diseñado para que el jugador se sienta en la élite desde el primer minuto.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="pb-32 px-6 md:px-12 bg-brand-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="glass-card p-12 h-full flex flex-col justify-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-accent/10 transition-colors" />
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Campo de <span className="text-brand-accent">Última Generación</span></h2>
                <p className="text-white/70 text-lg mb-10 leading-relaxed">
                  Contamos con césped artificial de fibra monofilamento con certificación FIFA Quality Pro, diseñado para minimizar el riesgo de lesiones y permitir un rodaje de balón idéntico al césped natural.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                  {[
                    { label: "Dimensiones", value: "Fútbol 11/7", icon: Maximize },
                    { label: "Iluminación", value: "LED TV-Ready", icon: Zap },
                    { label: "Drenaje", value: "Alta Eficiencia", icon: Shield },
                  ].map((item, i) => (
                    <div key={i}>
                      <item.icon className="text-brand-accent mb-3" size={24} />
                      <div className="text-xs text-white/60 uppercase tracking-widest mb-1">{item.label}</div>
                      <div className="font-bold text-white">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-brand-dark rounded-3xl p-12 flex flex-col justify-between border border-white/5">
              <div>
                <h3 className="text-2xl font-bold mb-6">Ubicación Estratégica</h3>
                <div className="flex items-start gap-4 mb-8">
                  <MapPin className="text-brand-accent shrink-0" size={24} />
                  <p className="text-white/70">
                    Carrer de la Tecnología, 12<br />
                    08001 Barcelona, España
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-white/70">
                    <Car size={18} className="text-brand-accent" />
                    Parking gratuito para padres
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/70">
                    <Wifi size={18} className="text-brand-accent" />
                    Wi-Fi de alta velocidad
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/70">
                    <Coffee size={18} className="text-brand-accent" />
                    Zona de cafetería y descanso
                  </div>
                </div>
              </div>
              <button className="btn-outline w-full mt-12 flex items-center justify-center gap-3">
                CÓMO LLEGAR
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Equipment - Slanted */}
      <section className="relative py-32 px-6 md:px-12 bg-brand-dark overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-brand-black slanted-bg -translate-y-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold">Equipamiento <span className="text-brand-accent italic">Tecnológico</span></h2>
            <p className="text-white/60 mt-6 max-w-xl mx-auto">No solo usamos balones. Usamos datos y tecnología para acelerar tu progresión.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Cámaras HD", desc: "Sistemas de grabación para video-análisis táctico en tiempo real.", icon: Camera },
              { title: "Sensores GPS", desc: "Monitorización de carga física, velocidad y distancias recorridas.", icon: Zap },
              { title: "Rebounders Pro", desc: "Paneles de rebote de alta densidad para mejora del control y pase.", icon: Star },
              { title: "Smart Goals", desc: "Porterías inteligentes con sensores de impacto y precisión.", icon: Shield },
            ].map((item, i) => (
              <div key={i} className="glass-card p-10 hover:bg-brand-accent/5 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <item.icon className="text-brand-accent" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-32 px-6 md:px-12 bg-brand-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">Explora el <br /><span className="text-brand-accent">Entorno</span></h2>
            <p className="text-white/60 max-w-sm text-right italic">
              "El lugar donde los sueños se trabajan cada día con disciplina y pasión."
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img 
                  src={item.url} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt={item.title}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <span className="text-white font-bold text-xl">{item.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="h-[500px] bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 grayscale opacity-50">
          <img
            src={imgMapaFondo}
            className="w-full h-full object-cover"
            alt="Map Background"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="glass-card p-12 text-center max-w-md mx-6">
            <MapPin className="text-brand-accent mx-auto mb-6" size={48} />
            <h3 className="text-2xl font-bold mb-4">¿Vienes a vernos?</h3>
            <p className="text-white/70 mb-8">Estamos en el corazón de la ciudad deportiva. Fácil acceso y parking propio.</p>
            <button className="btn-primary w-full">ABRIR EN GOOGLE MAPS</button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 md:px-12 bg-brand-dark text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Ven a conocer <span className="text-brand-accent italic">tu nueva casa</span></h2>
          <p className="text-white/70 text-lg mb-12">
            Las mejores instalaciones no sirven de nada sin el mejor método. Nosotros tenemos ambos.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contacto" className="btn-primary px-12">
              RESERVAR VISITA
            </Link>
            <Link to="/tecnificacion" className="btn-outline px-12">
              NUESTRO MÉTODO
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};