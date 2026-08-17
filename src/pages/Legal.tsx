import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { REOPEN_COOKIE_PREFERENCES_EVENT } from '../components/CookieConsent';

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="py-16 md:py-20 px-6 md:px-12 border-t border-white/5 first:border-t-0 first:pt-0">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-brand-accent">{title}</h2>
      <div className="space-y-4 text-white/70 leading-relaxed text-sm md:text-base">{children}</div>
    </div>
  </section>
);

export const Legal = () => {
  const reopenPreferences = () => {
    window.dispatchEvent(new Event(REOPEN_COOKIE_PREFERENCES_EVENT));
  };

  return (
    <main className="overflow-hidden">
      <section className="relative pt-40 pb-16 px-6 md:px-12 bg-brand-black text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-accent/5 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center mx-auto mb-6 border border-brand-accent/20">
            <ShieldCheck className="text-brand-accent" size={26} />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Información legal
          </h1>
          <p className="text-white/60">
            Aviso legal, política de privacidad y política de cookies de JP Preparation.
          </p>
        </div>
      </section>

      <div className="bg-brand-black px-6 md:px-12">
        <Section id="aviso-legal" title="Aviso Legal">
          <p>
            Este sitio web (jppreparation.com) es una web informativa de JP Preparation, academia de tecnificación
            y entrenamiento personalizado de fútbol ubicada en Carrer de la Pobla, 29, 08620 Sant Vicenç dels Horts,
            Barcelona.
          </p>
          <p>
            El acceso y uso de este sitio web atribuye la condición de usuario e implica la aceptación de las
            condiciones aquí descritas. Los contenidos, textos, imágenes y demás elementos de esta web son
            titularidad de JP Preparation, salvo que se indique lo contrario.
          </p>
          <p>
            Para cualquier consulta sobre estos términos puedes escribir por WhatsApp al{' '}
            <a href="https://wa.me/34601506857" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">
              +34 601 50 68 57
            </a>.
          </p>
        </Section>

        <Section id="privacidad" title="Política de Privacidad">
          <p>
            <strong className="text-white">Responsable:</strong> JP Preparation, con domicilio en Carrer de la
            Pobla, 29, 08620 Sant Vicenç dels Horts, Barcelona.
          </p>
          <p>
            <strong className="text-white">Datos que tratamos:</strong> los que facilitas voluntariamente a través
            del formulario de contacto (nombre, edad, email, teléfono, servicio de interés y mensaje), con la única
            finalidad de responder a tu solicitud de información sobre nuestros servicios.
          </p>
          <p>
            <strong className="text-white">Conservación:</strong> tus datos se conservan mientras dure la relación
            de atención comercial y, en todo caso, durante los plazos legalmente exigibles.
          </p>
          <p>
            <strong className="text-white">Derechos:</strong> puedes ejercer tus derechos de acceso, rectificación,
            supresión, oposición, limitación y portabilidad escribiéndonos por WhatsApp o Instagram indicando el
            derecho que quieres ejercer.
          </p>
          <p>
            <strong className="text-white">Terceros:</strong> usamos Google Analytics (a través de Google Tag
            Manager) para medir el uso de la web de forma agregada, solo si aceptas las cookies de analítica. Ver la{' '}
            <a href="#cookies" className="text-brand-accent hover:underline">política de cookies</a>.
          </p>
        </Section>

        <Section id="cookies" title="Política de Cookies">
          <p>Este sitio usa los siguientes tipos de cookies:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong className="text-white">Necesarias:</strong> imprescindibles para el funcionamiento de la web
              (por ejemplo, recordar tu decisión sobre cookies). No requieren consentimiento.
            </li>
            <li>
              <strong className="text-white">Analíticas (Google Analytics):</strong> nos ayudan a entender cómo se
              usa la web de forma agregada y anónima, para poder mejorarla. Solo se activan si las aceptas.
            </li>
          </ul>
          <p>
            Puedes cambiar tu decisión sobre las cookies analíticas en cualquier momento:
          </p>
          <button
            type="button"
            onClick={reopenPreferences}
            className="btn-outline mt-2"
          >
            Gestionar preferencias de cookies
          </button>
        </Section>
      </div>
    </main>
  );
};
