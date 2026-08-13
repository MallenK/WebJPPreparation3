import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const INPUT_DIR = path.join(__dirname, 'image-input');
const OUTPUT_DIR = path.join(__dirname, 'image-output');
const MAX_WIDTH = 1600;   // ancho máximo en píxeles (nunca se agranda una imagen más pequeña)
const QUALITY = 82;       // calidad WebP (0-100). 82 es un buen punto de equilibrio.

const VALID_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png']);

function formatSize(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

async function main() {
  await fs.mkdir(INPUT_DIR, { recursive: true });
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  const entries = await fs.readdir(INPUT_DIR, { withFileTypes: true });
  const files = entries
    .filter((e) => e.isFile() && VALID_EXTENSIONS.has(path.extname(e.name).toLowerCase()))
    .map((e) => e.name);

  if (files.length === 0) {
    console.log('No hay imágenes en scripts/image-input/.');
    console.log('Copia ahí tus fotos (.jpg, .jpeg o .png) y vuelve a ejecutar: npm run optimize-images');
    return;
  }

  console.log(`Procesando ${files.length} imagen(es)...\n`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    const inputPath = path.join(INPUT_DIR, file);
    const outputName = `${path.parse(file).name}.webp`;
    const outputPath = path.join(OUTPUT_DIR, outputName);

    const beforeStats = await fs.stat(inputPath);

    await sharp(inputPath)
      .rotate() // respeta la orientación EXIF de fotos de móvil
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(outputPath);

    const afterStats = await fs.stat(outputPath);
    totalBefore += beforeStats.size;
    totalAfter += afterStats.size;

    const saved = 100 - (afterStats.size / beforeStats.size) * 100;
    console.log(
      `${file} -> ${outputName}  ${formatSize(beforeStats.size)} -> ${formatSize(afterStats.size)}  (-${saved.toFixed(0)}%)`
    );
  }

  console.log('\n--- Resumen ---');
  console.log(`Total antes:   ${formatSize(totalBefore)}`);
  console.log(`Total después: ${formatSize(totalAfter)}`);
  console.log(`Ahorro:        ${(100 - (totalAfter / totalBefore) * 100).toFixed(0)}%`);
  console.log(`\nResultado en: scripts/image-output/`);
  console.log('Las imágenes originales en scripts/image-input/ no se han modificado ni borrado.');
}

main().catch((err) => {
  console.error('Error al optimizar imágenes:', err);
  process.exit(1);
});
