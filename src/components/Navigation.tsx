import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Phone, Instagram, Facebook, Music2, Mail, MapPin, Youtube, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

import logo from '../assets/images/brand/logo-jp-preparation.png';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Nueva: Controla si el header sube/baja
  const [lastScrollY, setLastScrollY] = useState(0); // Nueva: Para comparar posición
  const location = useLocation();

  // Lógica de Scroll: Fondo y Visibilidad
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Cambiar fondo del header
      setIsScrolled(currentScrollY > 50);

      // Si el menú móvil está abierto, no escondas el navbar
      if (isMobileMenuOpen) return;

      // Lógica de esconder al bajar / mostrar al subir
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Bajando: Esconder
      } else {
        setIsVisible(true);  // Subiendo: Mostrar
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMobileMenuOpen]);

  // Bloquear el scroll del fondo cuando el menú esté abierto
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Tecnificación', path: '/tecnificacion' },
    { name: 'Programas', path: '/programas' },
    { name: 'Equipo', path: '/equipo' },
    { name: 'Instalaciones', path: '/instalaciones' },
    { name: 'Eventos', path: '/eventos' },
    { name: 'Resultados', path: '/resultados' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 px-4 md:px-8 xl:px-12",
        isScrolled ? "bg-brand-black/90 backdrop-blur-xl border-b border-white/10 py-3" : "bg-transparent",
        // ESTA ES LA LÍNEA CLAVE:
        !isVisible && !isMobileMenuOpen ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative h-10 xl:h-12 flex items-center">
            <img
              src={logo}
              alt="JP Preparation"
              className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl xl:text-2xl font-black tracking-tighter leading-none">
              JP PREPARATION
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-accent font-bold">
              Football Academy
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 min-w-0">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path}
              className={cn(
                "relative text-[11px] xl:text-xs uppercase tracking-[0.18em] whitespace-nowrap transition-all duration-300 hover:text-brand-accent",
                location.pathname === link.path ? "text-brand-accent" : "text-white/70"
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-accent"
                />
              )}
            </Link>
          ))}

          <Link to="/contacto" className="btn-primary py-3 px-6 xl:px-8 text-[11px] xl:text-xs shrink-0">
            Contacto
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white shrink-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-brand-black lg:hidden flex flex-col"
            style={{ height: '100dvh' }} // Forzamos altura total de pantalla móvil
          >
            {/* Cabecera del menú */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 shrink-0">
              <div className="flex items-center gap-3">
                <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
                <span className="font-display text-xl font-bold tracking-tighter uppercase text-white">JP PREPARATION</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 text-white"
              >
                <X size={28} />
              </button>
            </div>

            {/* Navegación central - Usamos flex-1 para que ocupe el resto del espacio */}
            <nav className="flex-1 flex flex-col justify-center px-8 space-y-6 overflow-y-auto">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link 
                    to={link.path}
                    className={cn(
                      "font-display text-4xl uppercase tracking-tighter transition-colors block",
                      location.pathname === link.path ? "text-brand-accent" : "text-white"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Botón de contacto inferior */}
            <div className="p-8 border-t border-white/10 shrink-0">
              <Link 
                to="/contacto" 
                className="btn-primary w-full py-5 text-center block text-lg font-bold uppercase tracking-widest"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-brand-black border-t border-white/10 pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-brand-accent to-transparent"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        <div className="space-y-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-12 flex items-center">
              <img
                src={logo}
                alt="JP Preparation"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl font-black tracking-tighter leading-none">
                JP PREPARATION
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-accent font-bold">
                Tecnificación de fútbol
              </span>
            </div>
          </Link>

          <p className="text-white/50 leading-relaxed text-sm">
            Academia de tecnificación y entrenamiento personalizado para futbolistas en Sant Vicenç dels Horts.
          </p>

          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/jp.preparation"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-accent hover:text-white transition-all duration-300 border border-white/5 hover:border-brand-accent/50"
            >
              <Instagram size={18} />
            </a>

            <a
              href="https://www.tiktok.com/@jp.preparation"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-accent hover:text-white transition-all duration-300 border border-white/5 hover:border-brand-accent/50"
            >
              <Music2 size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg mb-8 text-white tracking-widest uppercase">
            Explorar
          </h4>
          <ul className="space-y-4">
            {[
              { name: 'Tecnificación', path: '/tecnificacion' },
              { name: 'Programas', path: '/programas' },
              { name: 'Equipo', path: '/equipo' },
              { name: 'Instalaciones', path: '/instalaciones' },
              { name: 'Resultados', path: '/resultados' },
              { name: 'Contacto', path: '/contacto' },
            ].map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="text-white/40 hover:text-brand-accent transition-colors flex items-center group"
                >
                  <ChevronRight
                    size={14}
                    className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"
                  />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-8 text-white tracking-widest uppercase">
            Contacto
          </h4>
          <ul className="space-y-6">
            <li className="flex items-start gap-4 text-white/40 group">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-accent/20 transition-colors">
                <MapPin className="text-brand-accent" size={18} />
              </div>
              <span className="text-sm pt-2">
                Carrer de la Pobla, 29
                <br />
                08620 Sant Vicenç dels Horts, Barcelona
              </span>
            </li>

            <li className="flex items-center gap-4 text-white/40 group">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-accent/20 transition-colors">
                <Phone className="text-brand-accent" size={18} />
              </div>
              <a
                href="https://wa.me/34662968341"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-brand-accent transition-colors"
              >
                +34 662 968 341
              </a>
            </li>

            <li className="flex items-center gap-4 text-white/40 group">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-accent/20 transition-colors">
                <Instagram className="text-brand-accent" size={18} />
              </div>
              <a
                href="https://www.instagram.com/jp.preparation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-brand-accent transition-colors"
              >
                @jp.preparation
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-8 text-white tracking-widest uppercase">
            Ubicación
          </h4>
          <p className="text-white/40 mb-6 text-sm">
            Puedes encontrarnos en Sant Vicenç dels Horts, Barcelona.
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Carrer+de+la+Pobla+29+Sant+Vicenc+dels+Horts+Barcelona"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline w-full py-4 text-sm"
          >
            Ver en Google Maps
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/20 text-[10px] uppercase tracking-[0.2em] font-bold">
        <p>© 2026 JP Preparation. Todos los derechos reservados.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-brand-accent transition-colors">
            Aviso Legal
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Privacidad
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
};
