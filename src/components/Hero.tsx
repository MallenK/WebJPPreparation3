import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Play, ArrowRight, Target, Zap, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-brand-black">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          className="w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000&auto=format&fit=crop" 
            alt="Football Training" 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent"></div>
        
        {/* Animated Accent Lines */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
          <motion.div 
            animate={{ x: [-1000, 1000], y: [-500, 500] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-0 w-[200%] h-px bg-brand-accent rotate-12"
          />
          <motion.div 
            animate={{ x: [1000, -1000], y: [500, -500] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-0 w-[200%] h-px bg-brand-cyan -rotate-12"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 py-2 px-4 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent rounded-full text-[10px] font-black tracking-[0.3em] uppercase mb-8"
          >
            <span className="w-2 h-2 bg-brand-cyan rounded-full animate-pulse"></span>
            The Future of Football is Here
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[0.85] mb-8 tracking-tighter">
            JP <br />
            <span className="text-gradient">Preparation</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-lg leading-relaxed font-medium">
            No entrenamos para el próximo partido. Entrenamos para tu <span className="text-white font-bold">carrera profesional</span>. Metodología de élite para el jugador moderno.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <Link to="/contacto" className="btn-primary group">
              Empezar Ahora
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link to="/tecnificacion" className="btn-outline group">
              Nuestra Metodología
              <Play className="ml-2 w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
            <div>
              <div className="text-2xl font-display font-bold text-white">100%</div>
              <div className="text-xs uppercase tracking-widest text-white/50">Personalizado</div>
            </div>
            <div>
              <div className="text-2xl font-display font-bold text-white">UEFA</div>
              <div className="text-xs uppercase tracking-widest text-white/50">Certificados</div>
            </div>
            <div>
              <div className="text-2xl font-display font-bold text-white">PRO</div>
              <div className="text-xs uppercase tracking-widest text-white/50">Metodología</div>
            </div>
          </div>
        </motion.div>

        {/* Floating Elements / Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden lg:block relative"
        >
          <div className="relative -z-10 aspect-[4/5] rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl shadow-brand-accent/20">
            <img 
              src="https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=1000&auto=format&fit=crop" 
              alt="Elite Player" 
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-black/30 to-transparent"></div>
          </div>
          
          {/* Floating Cards */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 glass-card p-6 z-20"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center">
                <Zap className="text-brand-accent" size={24} />
              </div>
              <div>
                <div className="text-xs text-white/50 uppercase tracking-widest">Velocidad</div>
                <div className="text-xl font-bold">+24%</div>
              </div>
            </div>
          </motion.div>

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
                <div className="text-xs text-white/50 uppercase tracking-widest">Precisión</div>
                <div className="text-xl font-bold">98.2%</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};
