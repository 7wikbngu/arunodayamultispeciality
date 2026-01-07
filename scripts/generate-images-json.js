const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');
const outputFile = path.join(__dirname, '..', 'images.json');

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'];

// Step 1: Read existing images.json if it exists
let existingImages = [];
if (fs.existsSync(outputFile)) {
  try {
    existingImages = JSON.parse(fs.readFileSync(outputFile, 'utf-8'));
  } catch (err) {
    console.warn('⚠️ Failed to parse existing images.json, starting fresh');
  }
}

// Step 2: Read all image files in /data
const files = fs.readdirSync(dataDir)
  .filter(file => IMAGE_EXTENSIONS.includes(path.extname(file).toLowerCase()));

// Step 3: Determine which files are new
const existingSrcs = new Set(existingImages.map(img => img.src));
const newFiles = files.filter(file => !existingSrcs.has(`data/${file}`));

// Step 4: Create new image objects
const newImages = newFiles.map(file => ({
  src: `data/${file}`,
  alt: path.parse(file).name.replace(/[-_]/g, ' ')
}));

// Step 5: Combine old + new images
const combinedImages = existingImages.concat(newImages);

// Step 6: Sort numerically by leading number (or alphabetically if no number)
combinedImages.sort((a, b) => {
  const getNum = str => parseInt(path.parse(str.src).name.match(/^\d+/)?.[0] || 0, 10);
  return getNum(a) - getNum(b);
});

// Step 7: Write back to images.json
fs.writeFileSync(outputFile, JSON.stringify(combinedImages, null, 2));

console.log(`✅ images.json updated! Total images: ${combinedImages.length}`);
if (newFiles.length) console.log(`Added: ${newFiles.join(', ')}`);
