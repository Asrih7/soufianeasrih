const fs = require('fs');
const path = require('path');

const browserDir = path.join(__dirname, 'dist', 'soufiane-portfolio', 'browser');
const outputDir = path.join(__dirname, 'dist', 'soufiane-portfolio');

if (fs.existsSync(browserDir)) {
  console.log('Moving files from browser/ to root...');
  const files = fs.readdirSync(browserDir);
  files.forEach(file => {
    const src = path.join(browserDir, file);
    const dest = path.join(outputDir, file);
    if (fs.lstatSync(src).isDirectory()) {
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
      }
      copyDir(src, dest);
    } else {
      fs.copyFileSync(src, dest);
    }
  });
  console.log('✓ Build files moved successfully');
} else {
  console.log('No browser/ directory found');
}

function copyDir(srcDir, destDir) {
  fs.readdirSync(srcDir).forEach(file => {
    const src = path.join(srcDir, file);
    const dest = path.join(destDir, file);
    if (fs.lstatSync(src).isDirectory()) {
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
      }
      copyDir(src, dest);
    } else {
      fs.copyFileSync(src, dest);
    }
  });
}
