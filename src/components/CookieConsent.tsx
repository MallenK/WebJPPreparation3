import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie } from 'lucide-react';
import { getStoredConsent, storeConsent } from '../lib/analytics';

export const REOPEN_COOKIE_PREFERENCES_EVENT = 'open-cookie-preferences';

export const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getStoredConsent()) setVisible(true);

    const reopen = () => setVisible(true);
    window.addEventListener(REOPEN_COOKIE_PREFERENCES_EVENT, reopen);
    return () => window.removeEventListener(REOPEN_COOKIE_PREFERENCES_EVENT, reopen);
  }, []);

  const acceptAll = () => {
    storeConsent({ analytics: 'granted', ads: 'granted' });
    setVisible(false);
  };

  const rejectAll = () => {
    storeConsent({ analytics: 'denied', ads: 'denied' });
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          role="dialog"
          aria-label="Preferencias de cookies"
          className="fixed bottom-0 inset-x-0 z-[200] p-4 md:p-6"
        >
          <div className="max-w-3xl mx-auto bg-brand-black border border-white/10 rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center shrink-0 border border-brand-accent/20">
              <Cookie className="text-brand-accent" size={22} />
            </div>

            <div className="flex-1">
              <h2 className="font-bold text-white mb-1.5">Usamos cookies</h2>
              <p className="text-sm text-white/60 leading-relaxed">
                Usamos cookies de analítica (Google Analytics) para entender cómo se usa la web y mejorarla. Solo se activan si las aceptas. Puedes cambiar tu decisión cuando quieras desde{' '}
                <a href="/legal#cookies" className="text-brand-accent hover:underline">
                  la política de cookies
                </a>
                .
              </p>
            </div>

            <div className="flex gap-3 shrink-0">
              <button
                type="button"
                onClick={rejectAll}
                className="flex-1 md:flex-none border-2 border-white/20 text-white font-bold py-3 px-6 rounded-full uppercase tracking-widest text-xs hover:border-white/40 transition-colors"
              >
                Rechazar
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="flex-1 md:flex-none bg-brand-accent text-white font-bold py-3 px-6 rounded-full uppercase tracking-widest text-xs hover:bg-blue-600 transition-colors"
              >
                Aceptar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
