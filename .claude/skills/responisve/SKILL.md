# Skill: Auditoría y Optimización UI/UX Mobile-First
*Invocación:* `/check-responsive`

## Objetivo
Asegurar que la interfaz de JP Preparation sea impecable, veloz y completamente funcional en entornos móviles reales (320px a 768px), aplicando estándares de diseño deportivo moderno.

## Protocolo de Ejecución Profesional

### 1. Estructura y Arquitectura CSS
- **Mobile-First Real:** Los estilos base de los componentes (fuentes, layouts, paddings) se declaran sin Media Queries. Las Media Queries se utilizan única y exclusivamente con `min-width` para expandir o reordenar elementos en pantallas de escritorio (ej. pasar la sección "¿Por qué somos diferentes?" de una sola columna vertical en móvil a una tabla comparativa horizontal en desktop).
- **Sizing Dinámico:** Queda prohibido el uso de anchos fijos en píxeles (`width: Xpx`) en layouts contenedores. Utilizar `width: 100%`, `max-width`, flex-basis o unidades relativas (`vw`, `rem`).

### 2. Ergonomía Táctil y Accesibilidad (A pie de campo)
- **Target Sizes:** Todos los botones interactivos clave ("Reservar sesión", "Solicitar Prueba Gratuita") deben respetar un área interactiva mínima de **48x48px** (estándar WCAG) para evitar pulsaciones erróneas con el pulgar en movimiento.
- **Contrastes de Texto:** Al ser un entorno de alto rendimiento visual (fondos oscuros o tipografías deportivas de alto impacto), se debe garantizar un ratio de contraste mínimo de 4.5:1 en textos legibles bajo luz solar directa.

### 3. Layouts Deportivos Complejos
- **Roadmaps y Listas:** Elementos secuenciales como el "Roadmap de Alto Rendimiento (01 al 04)" o las "Habilidades que Dominarás" deben colapsar elegantemente en una sola columna en móviles, o implementar scroll horizontal nativo asistido con `scroll-snap-type: x mandatory` para no penalizar el scroll vertical del usuario.