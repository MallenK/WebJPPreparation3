# Despliegue y flujo de trabajo

## Dónde vive la web de verdad

`jppreparation.com` está servido por **Hostinger** (hosting compartido "Business Web Hosting"), no por GitHub Pages — aunque el histórico del proyecto y el nombre de la rama (`gh-pages`) sugieran lo contrario. La prueba: el proyecto tiene `public/contact.php`, y GitHub Pages no puede ejecutar PHP.

GitHub sigue siendo el origen de la verdad del código y quien dispara el despliegue, pero **quien sirve la web en producción es Hostinger**.

## El pipeline completo

```
Editas código en main
        │
        ▼
git push origin main          (código fuente, historial legible)
        │
        ▼
npm run deploy                (build + push SOLO del resultado compilado)
        │  = npm run build && gh-pages -d dist --dotfiles
        ▼
rama gh-pages en GitHub       (HTML/CSS/JS/imágenes ya compilados, sin código fuente)
        │
        ▼
Hostinger (Git Auto Deploy, vía webhook — automático, sin tocar hPanel)
        │
        ▼
jppreparation.com actualizado
```

## Por qué dos ramas (`main` vs `gh-pages`)

Este proyecto es código fuente (React + Vite + TypeScript) — necesita compilarse antes de poder servirse. El Git Auto Deploy de Hostinger simplemente clona una rama y publica lo que encuentra: **no ejecuta `npm install` ni `npm run build`**. Si apuntara a `main` copiaría el código fuente tal cual (`.tsx`, `package.json`...) y la web se rompería.

Por eso Hostinger está configurado para tirar de `gh-pages`, no de `main`. Esa rama la genera automáticamente el paquete `gh-pages` (ver `scripts` en `package.json`) y solo contiene el contenido de `dist/` — el resultado ya compilado, listo para servir tal cual.

**Nunca edites la rama `gh-pages` a mano.** Se sobrescribe por completo cada vez que se ejecuta `npm run deploy`.

## Configuración en Hostinger (hPanel)

- hPanel → Websites → `jppreparation.com` → Git
- Repositorio: `https://github.com/MallenK/WebJPPreparation3.git`
- Rama: `gh-pages`
- Directorio de instalación: raíz de `public_html`
- El repo de GitHub es **público**, así que no hace falta configurar credenciales ni deploy keys.
- El pull se dispara solo (webhook) en cuanto se hace push a `gh-pages` — no hay que entrar a hPanel para desplegar.

## El `.htaccess` vive en `public/.htaccess`, gestionado por git

`public_html/.htaccess` es imprescindible para que las rutas de React Router (`BrowserRouter`, URLs limpias tipo `/instalaciones`) sobrevivan a una recarga — sin él, recargar cualquier página que no sea la raíz devuelve un 404 real del servidor.

**Causa raíz descubierta (15/08/2026):** durante un tiempo diagnosticamos esto como "Git Auto Deploy de Hostinger no respeta el `.htaccess`" y lo gestionamos subiéndolo a mano por el Administrador de Archivos de hPanel. Era un diagnóstico incorrecto. El problema real es que el paquete `gh-pages` **excluye los dotfiles por defecto** al publicar — verificado revisando el historial de la propia rama `gh-pages`: en ningún despliegue de la época en que `.htaccess` sí estaba en `public/` llegó a aparecer en esa rama. Es decir, el archivo nunca llegaba siquiera a GitHub; Hostinger no tenía nada que aplicar, no era un problema de permisos suyo.

Como consecuencia, un `.htaccess` subido a mano en el servidor funcionaba hasta el siguiente despliegue: cuando Hostinger volvía a sincronizar `public_html` contra el contenido de `gh-pages` (que nunca incluía `.htaccess`), lo perdía otra vez.

**Solución aplicada:** `public/.htaccess` vuelve a estar en el repo, y `package.json` usa `gh-pages -d dist --dotfiles` para que sí se incluya al publicar. Al estar trackeado en `gh-pages`, Hostinger lo restaura solo en cada sincronización — igual que ya hacía automáticamente con otros archivos de esa rama (p. ej. `.env.example`, que reaparecía solo tras borrarlo a mano precisamente porque sí estaba trackeado).

**Nunca lo edites solo en el servidor** — cualquier cambio manual se perderá en el próximo `npm run deploy`. Edita `public/.htaccess` en el repo y despliega normalmente. Contenido actual:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]

  RewriteRule ^ index.html [L]
</IfModule>

ErrorDocument 404 /index.html
```

**Cuidado al navegar por el Administrador de Archivos:** `public_html/app/` es la raíz de un subdominio completamente distinto (`app.jppreparation.com`, una aplicación PHP de tickets/soporte ajena a esta web). Tiene su propio `.htaccess` — no lo toques. El nuestro está en `public_html/` directamente.

## Cómo publicar un cambio (flujo normal)

1. Edita el código.
2. `npx tsc --noEmit` y `npm run build` para verificar que compila sin errores antes de comprometer nada.
3. `git add` + `git commit` + `git push origin main` (el código fuente queda registrado).
4. `npm run deploy` (compila y publica en `gh-pages`).
5. Hostinger recoge el cambio solo, normalmente en pocos segundos.

## Cómo comprobar que un despliegue llegó de verdad

No hace falta entrar a hPanel. Compara el hash del bundle JS/CSS del build local con el que sirve la web:

```bash
# Hash que se acaba de generar (aparece en la salida de "npm run deploy")
# dist/assets/index-XXXXXXXX.js

# Hash que sirve la web ahora mismo:
curl -s "https://www.jppreparation.com/" | grep -oE '/assets/index-[A-Za-z0-9_-]+\.(js|css)'
```

Si coinciden, el despliegue está en producción.

**Además, comprueba que una ruta interna sobrevive a una recarga directa** (no solo la home), para confirmar que el `.htaccess` viajó bien en el deploy:

```bash
curl -s -o /dev/null -w "%{http_code}\n" https://www.jppreparation.com/programas
```

Si devuelve `404` (y el cuerpo es la plantilla de error genérica de Hostinger, no nuestro `index.html`), revisa que `public/.htaccess` exista en el repo y que `package.json` tenga `gh-pages -d dist --dotfiles` — ver la sección anterior.

## Imágenes: pipeline de optimización

- `scripts/optimize-images.mjs` (usa `sharp`, ya en `devDependencies`) redimensiona a un ancho máximo y convierte a `.webp`.
- Flujo: copiar fotos originales en `scripts/image-input/` → `npm run optimize-images` → revisar el resultado en `scripts/image-output/` → mover lo que convenza a `src/assets/images/uploads/` (o a una subcarpeta, ver siguiente punto).
- `scripts/image-input/` y `scripts/image-output/` están en `.gitignore` — son carpetas de trabajo temporal, no se suben al repo.
- Las fotos originales sin comprimir de la web (antes de esta conversación) siguen existiendo en `scripts/image-input/` en este equipo, por si hicieran falta en el futuro — no están en git.

## Galerías dinámicas por carpeta (Stage 2026 y similares)

`src/pages/Eventos.tsx` carga automáticamente todo lo que haya en `src/assets/images/uploads/stage-2026/` con `import.meta.glob(...)` — no hay una lista de nombres de archivo escrita a mano. Para añadir o quitar fotos de ese carrusel:

1. Pásalas por `npm run optimize-images` primero.
2. Copia/borra los `.webp` resultantes directamente en `src/assets/images/uploads/stage-2026/`.
3. No hace falta tocar ni una línea de código — el carrusel se actualiza solo la próxima vez que se compile y despliegue.

El mismo componente (`StageCarousel`) se reutiliza en la sección "Galería de Eventos", pero esa sigue usando una lista fija de imports (no una carpeta dinámica).

El carrusel muestra siempre todas las fotos (no las filtra ni oculta por orientación) y usa `object-contain` para no recortarlas ni deformarlas nunca. Cada foto tiene un botón para abrirla en un lightbox a pantalla completa (navegable con flechas, teclado y Escape), pensado para verla bien sea cual sea su relación de aspecto.
