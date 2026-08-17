declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

function pushToDataLayer(payload: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

/** Evento genérico de negocio. Aparece en GTM como Custom Event con este `event` name. */
export function trackEvent(event: string, params: Record<string, unknown> = {}) {
  pushToDataLayer({ event, ...params });
}

/** Pageview virtual para la SPA: GTM/GA4 solo ven la carga inicial si no se avisa de cada cambio de ruta. */
export function trackVirtualPageview(path: string, title: string) {
  pushToDataLayer({
    event: 'virtualPageview',
    page_path: path,
    page_title: title,
    page_location: window.location.href,
  });
}

type ConsentState = 'granted' | 'denied';

export interface ConsentChoice {
  analytics: ConsentState;
  ads: ConsentState;
}

const CONSENT_STORAGE_KEY = 'jp_cookie_consent';

export function getStoredConsent(): ConsentChoice | null {
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ConsentChoice) : null;
  } catch {
    return null;
  }
}

export function storeConsent(choice: ConsentChoice) {
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(choice));
  } catch {
    // localStorage inaccesible (modo privado, etc.) - el consentimiento no persiste entre visitas
  }
  applyConsent(choice);
}

/** Actualiza el estado de Consent Mode v2 que ya está inicializado en denied por defecto en index.html. */
export function applyConsent(choice: ConsentChoice) {
  pushToDataLayer({
    event: 'consent_update',
    _consent: {
      analytics_storage: choice.analytics,
      ad_storage: choice.ads,
      ad_user_data: choice.ads,
      ad_personalization: choice.ads,
    },
  });
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag === 'function') {
    w.gtag('consent', 'update', {
      analytics_storage: choice.analytics,
      ad_storage: choice.ads,
      ad_user_data: choice.ads,
      ad_personalization: choice.ads,
    });
  }
}
