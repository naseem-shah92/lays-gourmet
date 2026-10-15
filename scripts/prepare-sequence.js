const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function processSequence() {
  const srcDir = path.join(__dirname, '..', 'Public');
  const targetDir = path.join(__dirname, '..', 'public', 'sequence');

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  if (!fs.existsSync(srcDir)) {
    console.error('Source directory Public does not exist!');
    process.exit(1);
  }

  const files = fs.readdirSync(srcDir).filter(f => f.startsWith('ezgif-frame-') && f.endsWith('.jpg')).sort();
  console.log(`Found ${files.length} source frame files in ${srcDir}.`);

  if (files.length === 0) {
    console.error('No source frame files found!');
    process.exit(1);
  }

  const TOTAL_TARGET_FRAMES = 120;
  console.log(`Sampling and converting ${TOTAL_TARGET_FRAMES} frames into WebP format in ${targetDir}...`);
  const startTime = Date.now();

  const tasks = [];
  for (let i = 0; i < TOTAL_TARGET_FRAMES; i++) {
    const srcIdx = Math.min(files.length - 1, Math.round((i * (files.length - 1)) / (TOTAL_TARGET_FRAMES - 1)));
    const srcFile = files[srcIdx];
    const srcPath = path.join(srcDir, srcFile);
    const targetFile = `frame_${i}.webp`;
    const targetPath = path.join(targetDir, targetFile);

    tasks.push({ i, srcFile, srcPath, targetPath });
  }

  // Process in concurrent batches of 8
  const CONCURRENCY = 8;
  for (let i = 0; i < tasks.length; i += CONCURRENCY) {
    const batch = tasks.slice(i, i + CONCURRENCY);
    await Promise.all(
      batch.map(async (task) => {
        const buf = await sharp(task.srcPath)
          .webp({ quality: 80, effort: 1 })
          .toBuffer();
        if (fs.existsSync(task.targetPath)) {
          try { fs.unlinkSync(task.targetPath); } catch (_) {}
        }
        fs.writeFileSync(task.targetPath, buf);
      })
    );
    const progress = Math.min(tasks.length, i + CONCURRENCY);
    process.stdout.write(`\rConverted ${progress}/${TOTAL_TARGET_FRAMES} frames (${Math.round((progress / TOTAL_TARGET_FRAMES) * 100)}%)`);
  }

  console.log(`\nAll ${TOTAL_TARGET_FRAMES} WebP frames generated in ${(Date.now() - startTime) / 1000}s!`);
}

processSequence().catch(err => {
  console.error('Error generating sequence:', err);
  process.exit(1);
});

