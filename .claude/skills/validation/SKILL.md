# Skill: Ingeniería de Control de Errores y Robustez JS
*Invocación:* `/validate-js`

## Objetivo
Garantizar que toda la lógica interactiva, los triggers de reserva y la captura de datos en los formularios de la academia de fútbol operen sin fallos en el hilo principal del navegador, protegiendo la UX frente a excepciones de código.

## Protocolo de Ejecución Profesional

### 1. Robustez en Captura de Leads (Formularios y CTAs)
- **Defensa del Submit:** Interceptar de manera limpia el evento `submit` vía `e.preventDefault()`. Implementar estados visuales de "Cargando/Enviando" inhabilitando los botones de acción (`button.disabled = true`) para prevenir dobles registros por usuarios impacientes.
- **Validación Semántica y Regex:** Validar en frontend la coherencia de datos antes de disparar integraciones o webhooks externos (ej. verificar números de teléfono de 9 dígitos para España, estructuras de email corporativas o inputs obligatorios vacíos).

### 2. Manejo de Errores y Arquitectura del Código
- **Aislamiento de Excepciones:** Encapsular llamadas críticas, manipulaciones del DOM pesadas o accesos al `LocalStorage` (si se guarda alguna preferencia o estado del usuario) dentro de bloques `try...catch`. Los fallos asíncronos nunca deben congelar la navegación o romper el menú desplegable del sitio.
- **Gestión Estricta del Ámbito (Scope):** Garantizar código limpio y modularizado usando ámbitos de bloque (`const`, `let`). Evitar por completo la contaminación del objeto global `window` y asegurar que los event listeners se vinculen únicamente tras la carga segura del DOM (`DOMContentLoaded`).

### 3. Feedback de Errores Contextualizado
- No utilizar alertas nativas del sistema (`alert()`). Las Skills de JS deben programar inserciones dinámicas en el DOM para inyectar clases de error (ej. `.is-invalid`) y mensajes de texto accesibles al lado del campo afectado, limpiándose automáticamente en cuanto el usuario vuelva a teclear (`input` event).