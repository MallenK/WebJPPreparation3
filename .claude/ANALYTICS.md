# Plan de medición: Google Tag Manager + GA4

Implementado en el código el 17 de agosto de 2026 (rama `main`, en producción). Este documento es la referencia de qué hay instalado, qué falta configurar (fuera del código, en la interfaz web de Google) y cómo automatizarlo a futuro con MCP.

## IDs de la cuenta

- Contenedor de Google Tag Manager: `GTM-MQH5GSK3`
- Propiedad de Google Analytics 4: `G-7C70L94CN9`

## Qué ya está en producción (código)

| Pieza | Dónde vive | Qué hace |
|---|---|---|
| Snippet de GTM | `index.html` | Carga el contenedor `GTM-MQH5GSK3` (script en `<head>`, iframe `<noscript>` justo tras `<body>`), tal como lo exige Google |
| Consent Mode v2 | `index.html` | Antes de cargar GTM, fija `ad_storage`, `analytics_storage`, `ad_user_data` y `ad_personalization` en `denied` por defecto |
| Banner de cookies | `src/components/CookieConsent.tsx` | Pide consentimiento; en Aceptar/Rechazar llama a `gtag('consent', 'update', ...)` y lo guarda en `localStorage` (`jp_cookie_consent`) |
| Helper de tracking | `src/lib/analytics.ts` | `trackEvent()` y `trackVirtualPageview()` — hacen `dataLayer.push(...)` |
| Pageviews virtuales | `src/App.tsx` (`RouteChangeHandler`) | Empuja `virtualPageview` en cada cambio de ruta — imprescindible porque es una SPA y GTM por sí solo solo ve la carga inicial |
| Página legal | `src/pages/Legal.tsx`, ruta `/legal` | Aviso Legal, Privacidad y Cookies; botón para reabrir las preferencias de cookies |

**Importante:** se retiró el `gtag.js` directo que cargaba `G-7C70L94CN9` a pelo. Ahora GA4 se debe conectar **desde dentro de GTM** (ver más abajo) — si se vuelve a añadir un gtag.js suelto, las visitas se contarán dos veces.

## Cómo fluyen los datos

```
Visitante interactúa (clic, scroll, envío de formulario)
        │
        ▼
dataLayer.push(...)                    ← código de la web (analytics.ts)
        │
        ▼
Contenedor GTM (GTM-MQH5GSK3)           ← recibe SIEMPRE el evento
        │
        ├── ¿Consentimiento denegado?  → se retiene, no sale nada
        │
        └── ¿Consentimiento concedido? → dispara las etiquetas configuradas
                    │
                    ▼
            Google Analytics 4 (G-7C70L94CN9)
                    │
                    ▼
              Informes de GA4
```

## Pendiente de configurar en GTM (hazlo en este orden)

Todo esto es en [tagmanager.google.com](https://tagmanager.google.com), dentro del contenedor `GTM-MQH5GSK3`. No es código, así que no está en este repo.

1. **Etiqueta de configuración de GA4**
   Tags → Nueva → tipo "Google Analytics: Configuración de GA4" → ID de medición `G-7C70L94CN9` → activador "Initialization - All Pages".

2. **Dos variables de la capa de datos**
   Variables → Nueva variable de capa de datos → `DL - page_path` (lee `page_path`) y `DL - page_title` (lee `page_title`).

3. **Activador de evento personalizado `virtualPageview`**
   Activadores → Nuevo → "Evento personalizado" → nombre exacto `virtualPageview`.

4. **Etiqueta "GA4 - Pageview virtual"**
   Tipo "Google Analytics: Evento de GA4" → etiqueta de configuración: la del paso 1 → nombre del evento `page_view` → parámetros `page_path` = `{{DL - page_path}}`, `page_title` = `{{DL - page_title}}` → activador: el del paso 3.

5. **Un activador + una etiqueta de evento de GA4 por cada evento de la tabla de abajo**
   Mismo patrón que los pasos 3-4: activador de evento personalizado con el nombre exacto de la columna "Evento", etiqueta "Evento de GA4" con ese mismo nombre y sus parámetros como variables de capa de datos.

6. **Vista previa antes de publicar**
   Botón "Preview" → abre la web → confirma en el panel de Tag Assistant que las etiquetas se disparan cuando toca.

7. **Publicar (Submit)**
   Hasta que no se publique, nada de esto llega a datos reales — no hay prisa en el paso 6.

## Eventos que ya envía la web

| Evento | Cuándo se dispara | Parámetros | Por qué importa |
|---|---|---|---|
| `virtualPageview` | En cada cambio de página dentro de la app (incluida la carga inicial) | `page_path`, `page_title` | Sin esto, GA4 solo ve la primera página de cada visita |
| `cta_click` | Clic en "Reservar sesión" (Hero) o "Reservar" / "Reservar mi plaza" (Programas) | `cta_name`, `plan_name` (si aplica), `link_location` | Primer paso real hacia una reserva; compara qué CTA convierte más |
| `contact_click` | Clic en WhatsApp, teléfono o Google Maps | `contact_method`, `link_location` | Mide intención de contacto real aunque la conversación siga en WhatsApp |
| `social_click` | Clic en Instagram o TikTok | `social_network`, `link_location` | Cuánta gente de la web pasa a seguir las redes |
| `generate_lead` | Envío correcto del formulario de `/contacto` | `form_name`, `servicio_interes` | La conversión principal de la web — márcalo como evento clave en GA4 |

## Consent Mode v2, en corto

La ley (RGPD/LSSI) exige pedir consentimiento antes de activar cookies de analítica, y desde 2024 Google además exige técnicamente tener Consent Mode instalado para poder seguir usando ciertas funciones de sus productos en Europa.

Antes de que el visitante decida, todo llega "denegado": GA4 no guarda cookies ni identifica al visitante, pero Google puede seguir haciendo una estimación agregada y anónima del tráfico (modelado). En cuanto acepta, se actualiza a "concedido" y el tracking funciona con normalidad. Si rechaza, se queda en modelado.

## Cómo leer los datos una vez lleguen

No hay datos históricos todavía — esto es una guía para cuando empiecen a entrar.

- **Primeros días (verificar que funciona):** GA4 → Informes → Tiempo real. Navega tú mismo con el banner aceptado y confirma que aparecen tus visitas y eventos en segundos.
- **Qué páginas funcionan mejor:** Informes → Interacción → Páginas y pantallas, ordenado por "vistas" o por "eventos clave".
- **El embudo real del negocio:** Explorar → Exploración de embudos: Home vista → `cta_click` → `/contacto` vista → `generate_lead`.
- **De dónde viene la gente que sí reserva:** Informes → Ciclo de vida → Adquisición, cruzado con `generate_lead` marcado como conversión.

## Automatizar la configuración de GTM con MCP

Para poder gestionar tags/activadores desde aquí sin entrar a la interfaz web cada vez, hace falta conectar un servidor MCP con acceso a la API de Tag Manager. Opción recomendada por no depender de ningún servidor de terceros: [google-tag-manager-mcp de VasthavM](https://github.com/VasthavM/google-tag-manager-mcp) (corre en local, habla directo con la API de Google).

**Pasos que requieren tu cuenta de Google (no delegables):**
1. [console.cloud.google.com](https://console.cloud.google.com) → crear/seleccionar un proyecto
2. APIs y servicios → Biblioteca → habilitar "Tag Manager API"
3. APIs y servicios → Credenciales → Crear credenciales → ID de cliente de OAuth → tipo **Aplicación de escritorio**
4. Descargar el JSON de credenciales

**Pasos que se hacen desde este entorno, una vez tengas el JSON:**
5. Instalar Go
6. Clonar y compilar `google-tag-manager-mcp`
7. Colocar el JSON de credenciales en la carpeta de configuración del servidor
8. Registrar el servidor con `claude mcp add`
9. Autorizar el acceso la primera vez que arranque (abre una URL en el navegador — un solo login, el token se renueva solo después)

Alternativa si prefieres no compilar nada localmente: [stape-io/google-tag-manager-mcp-server](https://github.com/stape-io/google-tag-manager-mcp-server), con versión alojada en `gtm-mcp.stape.ai` — más cómoda de instalar, pero las peticiones a tu GTM pasan por los servidores de Stape en vez de ir directas a Google.
