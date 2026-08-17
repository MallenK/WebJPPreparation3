import React, { lazy, Suspense, useEffect } from 'react';
import { Header, Footer } from './components/Navigation';
import { CookieConsent } from './components/CookieConsent';
import { Routes, Route, useLocation } from 'react-router-dom';
import { trackVirtualPageview } from './lib/analytics';

const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const Tecnificacion = lazy(() => import('./pages/Tecnificacion').then(m => ({ default: m.Tecnificacion })));
const Programas = lazy(() => import('./pages/Programas').then(m => ({ default: m.Programas })));
const Equipo = lazy(() => import('./pages/Equipo').then(m => ({ default: m.Equipo })));
const Instalaciones = lazy(() => import('./pages/Instalaciones').then(m => ({ default: m.Instalaciones })));
const Eventos = lazy(() => import('./pages/Eventos').then(m => ({ default: m.Eventos })));
const Resultados = lazy(() => import('./pages/Resultados').then(m => ({ default: m.Resultados })));
const Contacto = lazy(() => import('./pages/Contacto').then(m => ({ default: m.Contacto })));
const Legal = lazy(() => import('./pages/Legal').then(m => ({ default: m.Legal })));

// Gestiona el scroll y avisa a GTM/GA4 de cada cambio de ruta (la SPA no
// recarga la página, así que sin esto solo se registraría la primera visita).
const RouteChangeHandler = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // El contenido de la ruta puede tardar en montar (lazy loading), así que
      // reintentamos brevemente antes de rendirnos y hacer scroll arriba.
      let attempts = 0;
      const tryScroll = () => {
        const el = document.getElementById(hash.slice(1));
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else if (attempts < 10) {
          attempts += 1;
          setTimeout(tryScroll, 100);
        } else {
          window.scrollTo(0, 0);
        }
      };
      tryScroll();
    } else {
      window.scrollTo(0, 0);
    }

    trackVirtualPageview(pathname + hash, document.title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, hash]);

  return null;
};

export default function App() {
  return (
    <>
      <RouteChangeHandler />
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tecnificacion" element={<Tecnificacion />} />
              <Route path="/programas" element={<Programas />} />
              <Route path="/equipo" element={<Equipo />} />
              <Route path="/instalaciones" element={<Instalaciones />} />
              <Route path="/eventos" element={<Eventos />} />
              <Route path="/resultados" element={<Resultados />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/legal" element={<Legal />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
      <CookieConsent />
    </>
  );
}