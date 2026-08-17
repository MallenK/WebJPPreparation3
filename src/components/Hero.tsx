import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Play, ArrowRight, Target, Zap, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

import IMGHero from '../assets/images/uploads/IMG_1700-fit.webp';




export const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-brand-black">

      {/* ===== MOBILE / TABLET (below lg) ===== */}
      <div className="lg:hidden">
        <div className="relative h-[46vh] min-h-[320px] max-h-[440px] w-full overflow-hidden">
          <motion.img
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9 }}
            src={IMGHero}
            alt="Entrenamiento individual de fútbol"
            className="w-full h-full object-cover object-[50%_22%]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/0 from-40% via-brand-black/70 via-75% to-brand-black to-100%"></div>

          <div className="absolute left-4 bottom-4 inline-flex items-center gap-2 py-1.5 px-3 bg-black/55 backdrop-blur-sm border border-white/15 text-white rounded-full text-[9px] font-black tracking-[0.24em] uppercase">
            <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-pulse"></span>
            Entrenamiento personalizado
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative z-10 px-6 pt-5 pb-10 flex flex-col gap-4"
        >
          <h1 className="text-[2.4rem] leading-[0.92] font-black tracking-tighter">
            JP <span className="text-gradient">Preparation</span>
          </h1>

          <p className="text-sm text-white/70 leading-relaxed font-medium">
            Sesiones <span className="text-white font-bold">individualizadas</span>, trabajo técnico específico y decisiones bajo presión real.
          </p>

          <div className="flex gap-2">
            {[
              { value: "100%", label: "Personal." },
              { value: "Máx 2", label: "Por sesión" },
              { value: "+4", label: "Años" },
            ].map((stat, i) => (
              <div key={i} className="flex-1 text-center py-2 rounded-xl bg-white/5 border border-white/10">
                <div className="font-display font-bold text-base text-white">{stat.value}</div>
                <div className="text-[9px] uppercase tracking-wide text-white/45">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex gap-2 mt-1">
            <Link to="/contacto" className="flex-1 flex items-center justify-center gap-1.5 bg-brand-accent text-white font-bold py-3.5 rounded-full uppercase tracking-widest text-[11px]">
              Reservar
              <ArrowRight size={14} />
            </Link>
            <Link to="/programas" className="flex-1 flex items-center justify-center gap-1.5 border-2 border-white/20 text-white font-bold py-3.5 rounded-full uppercase tracking-widest text-[11px]">
              Programas
              <Play size={12} className="fill-current" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* ===== DESKTOP (lg and up) ===== */}
      <div className="hidden lg:flex min-h-screen w-full items-center justify-center relative">

        {/* Background */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full"
          >
            <img
              src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000&auto=format&fit=crop"
              alt="Entrenamiento de fútbol"
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-10 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 py-2 px-4 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent rounded-full text-[10px] font-black tracking-[0.3em] uppercase mb-4">
              <span className="w-2 h-2 bg-brand-cyan rounded-full animate-pulse"></span>
              Entrenamiento · Personalizado · Fútbol
            </div>

            <h1 className="text-6xl xl:text-7xl 2xl:text-8xl font-black leading-[0.9] mb-8 tracking-tighter">
              JP <br />
              <span className="text-gradient">Preparation</span>
            </h1>

            <p className="text-lg xl:text-xl text-white/70 mb-8 max-w-lg leading-relaxed font-medium">
                Sesiones <span className="text-white font-bold">individualizadas</span> adaptadas a cada jugador/a, con trabajo específico para mejorar la toma de decisiones y el rendimiento real en el campo.
            </p>
            <div className="flex flex-row gap-6">
              <Link to="/contacto" className="btn-primary group">
                Reservar sesión
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>

              <Link to="/programas" className="btn-outline group">
                Ver programas
                <Play className="ml-2 w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
              </Link>
            </div>

            {/* STATS
            <div className="mt-10 md:mt-14 grid grid-cols-3 gap-6 md:gap-8 border-t border-white/10 pt-6 md:pt-8">
              <div>
                <div className="text-2xl font-display font-bold text-white">100%</div>
                <div className="text-xs uppercase tracking-widest text-white/50">Personalizado</div>
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-white">Desde 4</div>
                <div className="text-xs uppercase tracking-widest text-white/50">Años</div>
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-white">MAX 2</div>
                <div className="text-xs uppercase tracking-widest text-white/50">Por sesión</div>
              </div>
            </div>*/}
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative max-w-md ml-auto"
          >
            <div className="relative -z-10 aspect-[1/1] rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl shadow-brand-accent/20">
              <img
                src={IMGHero}
                alt="Entrenamiento individual fútbol"
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-black/30 to-transparent"></div>
            </div>

            {/* Location Card */}
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 glass-card p-6 z-20"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-cyan/20 flex items-center justify-center">
                  <Target className="text-brand-cyan" size={24} />
                </div>
                <div>
                  <div className="text-xs text-white/50 uppercase tracking-widest">Ubicación</div>
                  <div className="text-xl font-bold">Sant Vicenç dels Horts</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};