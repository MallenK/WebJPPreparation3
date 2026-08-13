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
        │  = npm run build && gh-pages -d dist
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

El carrusel además detecta la orientación real de cada foto (ancho x alto, no el nombre del archivo) y solo muestra en cada dispositivo las que encajan de forma natural: horizontales en escritorio, verticales en móvil — sin recortar ni deformar ninguna.
