import React from 'react';
import { motion } from 'motion/react';
import { Header, Footer } from './components/Navigation';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { Tecnificacion } from './pages/Tecnificacion';
import { Programas } from './pages/Programas';
import { Equipo } from './pages/Equipo';
import { Instalaciones } from './pages/Instalaciones';
import { Eventos } from './pages/Eventos';
import { Resultados } from './pages/Resultados';
import { Contacto } from './pages/Contacto';
import { useEffect } from 'react';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tecnificacion" element={<Tecnificacion />} />
            <Route path="/programas" element={<Programas />} />
            <Route path="/equipo" element={<Equipo />} />
            {/* <Route path="/instalaciones" element={<Instalaciones />} /> */}
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/resultados" element={<Resultados />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}