import React, { lazy, Suspense, useEffect } from 'react';
import { Header, Footer } from './components/Navigation';
import { Routes, Route, useLocation } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const Tecnificacion = lazy(() => import('./pages/Tecnificacion').then(m => ({ default: m.Tecnificacion })));
const Programas = lazy(() => import('./pages/Programas').then(m => ({ default: m.Programas })));
const Equipo = lazy(() => import('./pages/Equipo').then(m => ({ default: m.Equipo })));
const Instalaciones = lazy(() => import('./pages/Instalaciones').then(m => ({ default: m.Instalaciones })));
const Eventos = lazy(() => import('./pages/Eventos').then(m => ({ default: m.Eventos })));
const Resultados = lazy(() => import('./pages/Resultados').then(m => ({ default: m.Resultados })));
const Contacto = lazy(() => import('./pages/Contacto').then(m => ({ default: m.Contacto })));

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
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tecnificacion" element={<Tecnificacion />} />
              <Route path="/programas" element={<Programas />} />
              <Route path="/equipo" element={<Equipo />} />
              <Route path="/instalaciones" element={<Instalaciones />} />
              <Route path="/eventos" element={<Eventos />} />
              <Route path="/resultados" element={<Resultados />} />
              <Route path="/contacto" element={<Contacto />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </>
  );
}