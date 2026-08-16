import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Shield, Camera, Zap, Users, Star, Trophy, Flame, CheckCircle2, ChevronLeft, ChevronRight, Maximize2, X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import imgStage from '../assets/images/uploads/experiencia-total/_DSC7427.webp';

// Carga automática de todas las fotos que haya en esta carpeta.
// Para añadir más imágenes al carrusel del Stage 2026, basta con dejarlas
// dentro de src/assets/images/uploads/stage-2026/ — no hace falta tocar código.
const stage2026Modules = import.meta.glob('../assets/images/uploads/stage-2026/*.{webp,jpg,jpeg,png}', {
  eager: true,
  import: 'default'
}) as Record<string, string>;
const stage2026Images = Object.keys(stage2026Modules)
  .sort()
  .map((key) => stage2026Modules[key]);
import imgPorteros from '../assets/images/uploads/IMG_1820.webp';
import imgGal1 from '../assets/images/uploads/7bb1a281-5dcf-4e50-bf23-b22d279eaf23.webp';
import imgGal2 from '../assets/images/uploads/82aa7a80-b28a-451f-b7ae-a661cdc85fe2.webp';
import imgGal3 from '../assets/images/uploads/989dfbcd-4a63-4ff4-9d8a-d8441cc1d6f4.webp';
import imgGal4 from '../assets/images/uploads/FullSizeRender.webp';
import imgGal6 from '../assets/images/uploads/IMG_0859.webp';
import imgGal5 from '../assets/images/uploads/IMG_4460.webp';
import imgGal7 from '../assets/images/uploads/IMG_0862.webp';
import imgGal8 from '../assets/images/uploads/IMG_0880.webp';

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

// Flechas + contador + puntos, compartidos entre la vista en línea y el modal.
const CarouselControls = ({
  onPrev, onNext, index, total, dark = true
}: { onPrev: () => void; onNext: () => void; index: number; total: number; dark?: boolean }) => (
  <>
    <button
      type="button"
      aria-label="Foto anterior"
      onClick={onPrev}
      className={cn(
        "absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full border transition-colors",
        dark ? "bg-brand-black/50 border-white/10 text-white hover:bg-brand-accent hover:text-brand-black" : "bg-white/10 border-white/20 text-white hover:bg-brand-accent hover:text-brand-black"
      )}
    >
      <ChevronLeft size={20} />
    </button>
    <button
      type="button"
      aria-label="Foto siguiente"
      onClick={onNext}
      className={cn(
        "absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full border transition-colors",
        dark ? "bg-brand-black/50 border-white/10 text-white hover:bg-brand-accent hover:text-brand-black" : "bg-white/10 border-white/20 text-white hover:bg-brand-accent hover:text-brand-black"
      )}
    >
      <ChevronRight size={20} />
    </button>
    <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 z-10 bg-brand-black/60 text-white/90 text-xs font-bold px-3 py-1 rounded-full">
      {index + 1} / {total}
    </div>
  </>
);

// Carrusel: muestra siempre TODAS las fotos, sin ocultar ninguna por su
// orientación. El marco usa "object-contain" (nunca recorta ni deforma).
// Para verlas realmente a su tamaño y forma ideal sin límite de marco,
// un clic abre un lightbox a pantalla completa.
const StageCarousel = ({ images, altPrefix = "Stage JP Preparation 2026" }: { images: string[]; altPrefix?: string }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  React.useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
      if (e.key === 'ArrowRight') goTo(index + 1);
      if (e.key === 'ArrowLeft') goTo(index - 1);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, index]);

  if (images.length === 0) return null;

  const goTo = (nextIndex: number) => {
    setDirection(nextIndex > index ? 1 : -1);
    setIndex((nextIndex + images.length) % images.length);
  };

  return (
    <div>
      <div className="relative aspect-[3/4] md:aspect-[16/9] rounded-3xl overflow-hidden border border-white/10 bg-black/30 group">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`${altPrefix} - foto ${index + 1}`}
            initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
            onDragEnd={(_, info) => {
              if (info.offset.x < -80) goTo(index + 1);
              else if (info.offset.x > 80) goTo(index - 1);
            }}
            className="absolute inset-0 w-full h-full object-contain cursor-grab active:cursor-grabbing select-none"
          />
        </AnimatePresence>

        <button
          type="button"
          aria-label="Ver a pantalla completa"
          onClick={() => setIsOpen(true)}
          className="absolute top-3 right-3 md:top-4 md:right-4 z-10 bg-brand-black/50 hover:bg-brand-accent hover:text-brand-black text-white p-2 md:p-2.5 rounded-full border border-white/10 transition-colors"
        >
          <Maximize2 size={16} />
        </button>

        <CarouselControls onPrev={() => goTo(index - 1)} onNext={() => goTo(index + 1)} index={index} total={images.length} />
      </div>

      <div className="flex justify-center flex-wrap gap-2 mt-6">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Ir a la foto ${i + 1}`}
            onClick={() => goTo(i)}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === index ? "w-6 bg-brand-accent" : "w-1.5 bg-white/20 hover:bg-white/40"
            )}
          />
        ))}
      </div>

      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-4 md:p-10"
              onClick={() => setIsOpen(false)}
            >
              <button
                type="button"
                aria-label="Cerrar"
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-10 bg-white/10 hover:bg-brand-accent hover:text-brand-black text-white p-2.5 rounded-full border border-white/20 transition-colors"
              >
                <X size={22} />
              </button>

              <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                <AnimatePresence initial={false} mode="popLayout">
                  <motion.img
                    key={images[index]}
                    src={images[index]}
                    alt={`${altPrefix} - foto ${index + 1}`}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="max-w-full max-h-full object-contain select-none"
                  />
                </AnimatePresence>

                <CarouselControls onPrev={() => goTo(index - 1)} onNext={() => goTo(index + 1)} index={index} total={images.length} dark={false} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
};

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
            <span className="text-gradient italic">JP Preparation</span>
          </h1>

          <p className="text-base sm:text-lg md:text-lg lg:text-lg xl:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            No entrenamos jugadores. Creamos experiencias donde compiten, 
            se exigen y evolucionan en contextos reales de máximo nivel.
          </p>

        </div>
      </section>

      {/* EVENTS GRID */}
      <section className="py-16 md:py-32 px-4 sm:px-6 md:px-12 bg-brand-black overflow-hidden">
        <div className={cn(
          "max-w-7xl mx-auto grid gap-6 md:gap-8",
          "grid-cols-1",           // 1 columna en móvil
          "sm:grid-cols-2",       // 2 columnas en tablet (aquí cambia la disposición)
          "lg:grid-cols-3"        // 3 columnas en desktop
        )}>

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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5,
                delay: i * 0.1 
              }}
              className={cn(
                "glass-card relative group hover:bg-brand-accent/5 transition-all duration-500",
                "p-8 md:p-10", 
                "flex flex-col h-full border border-white/5 hover:border-brand-accent/20",
                // Si quieres que en móvil todo se centre y en tablet/pc se alinee a la izquierda:
                "items-center text-center sm:items-start sm:text-left" 
              )}
            >
              {/* Contenedor del Icono */}
              <div className="relative mb-6">
                <item.icon 
                  className="text-brand-accent relative z-10 transition-transform duration-500 group-hover:scale-110" 
                  size={32} 
                />
                <div className="absolute inset-0 bg-brand-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Título - Ajuste de tamaño responsivo */}
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-4 tracking-tighter uppercase italic">
                {item.title}
              </h3>

              {/* Descripción */}
              <p className="text-sm md:text-base text-white/70 leading-relaxed text-balance">
                {item.desc}
              </p>

              {/* Detalle visual superior */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-brand-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Detalle visual inferior (barra de progreso decorativa) */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-brand-accent transition-all duration-500 group-hover:w-full" />
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

          <div className="rounded-[2rem] overflow-hidden border border-white/10">
            <img
              src={imgStage}
              alt="Stage JP Preparation"
              loading="lazy"
              decoding="async"
              className="w-full h-auto"
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


      {/* STAGE 2026 */}
      <section className="section-padding bg-brand-black">
        <div className="max-w-5xl mx-auto">

          <SectionHeader
            subtitle="Edición 2026"
            title="STAGE JP PREPARATION <span class='text-brand-accent italic'>2026</span>"
            centered
          />

          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <p className="text-base md:text-lg text-white/70 leading-relaxed">
              Así vivimos la última edición del Stage: días completos de entrenamiento,
              vídeo análisis, trabajo mental y convivencia entre jugadores/as de
              distintas categorías. Estas son las fotos reales del campus.
            </p>
          </div>

          <StageCarousel images={stage2026Images} />

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
                src={imgPorteros}
                className="w-full h-full object-cover"
              />
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

      {/* GALERÍA */}
      <section className="section-padding bg-brand-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-xs">Momentos</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 leading-[0.95] tracking-tighter">
              Galería de <span className="text-brand-accent italic">Eventos</span>
            </h2>
          </div>
          <StageCarousel
            images={[imgGal1, imgGal2, imgGal3, imgGal4, imgGal5, imgGal6, imgGal7, imgGal8]}
            altPrefix="Galería de Eventos"
          />
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