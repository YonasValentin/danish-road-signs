#!/usr/bin/env tsx
import * as fs from 'fs';
import * as path from 'path';

const SOURCE_DIR = path.join(__dirname, '../../../app/downloaded-signs');
const DEST_DIR = path.join(__dirname, '../src/svg');

// Category mapping based on sign code prefix
const CATEGORY_MAP: Record<string, string> = {
  'A': 'warning',
  'B': 'priority',
  'C': 'prohibitory',
  'D': 'mandatory',
  'E': 'special-regulation',
  'F': 'direction',
  'G': 'guide',
  'H': 'distance-locality',
  'I': 'motorway',
  'J': 'motorway',
  'K': 'motorway',
  'L': 'route',
  'M': 'service',
  'U': 'subpanels',      // Base U-prefix subpanels
  'UA': 'subpanels',
  'UB': 'subpanels',
  'UC': 'subpanels',
  'UD': 'subpanels',
  'UE': 'subpanels',
  'US': 'symbols',
};

function getCategory(filename: string): string | null {
  const baseName = path.basename(filename, '.svg');

  // Try two-letter prefixes first (UA, UB, UC, UD, UE, US)
  const twoLetter = baseName.substring(0, 2).toUpperCase();
  if (CATEGORY_MAP[twoLetter]) {
    return CATEGORY_MAP[twoLetter];
  }

  // Then try single-letter prefixes
  const oneLetter = baseName.charAt(0).toUpperCase();
  if (CATEGORY_MAP[oneLetter]) {
    return CATEGORY_MAP[oneLetter];
  }

  // Handle special cases (old signs, etc.)
  if (baseName.includes('_')) {
    return 'warning'; // Old signs go to warning for now
  }

  return null;
}

function organizeSVGs() {
  console.log('📂 Organizing SVGs by category...\n');

  if (!fs.existsSync(SOURCE_DIR)) {
    console.error(`❌ Source directory not found: ${SOURCE_DIR}`);
    process.exit(1);
  }

  const files = fs.readdirSync(SOURCE_DIR).filter(f => f.endsWith('.svg'));
  const stats: Record<string, number> = {};
  const uncategorized: string[] = [];

  for (const file of files) {
    const category = getCategory(file);

    if (!category) {
      uncategorized.push(file);
      continue;
    }

    const sourcePath = path.join(SOURCE_DIR, file);
    const destPath = path.join(DEST_DIR, category, file);

    // Copy file
    fs.copyFileSync(sourcePath, destPath);

    // Track stats
    stats[category] = (stats[category] || 0) + 1;
  }

  // Print results
  console.log('✅ Organization complete!\n');
  console.log('📊 Signs by category:');
  Object.entries(stats)
    .sort((a, b) => b[1] - a[1])
    .forEach(([category, count]) => {
      console.log(`   ${category.padEnd(20)} ${count} signs`);
    });

  const total = Object.values(stats).reduce((a, b) => a + b, 0);
  console.log(`\n📦 Total: ${total} signs organized`);

  if (uncategorized.length > 0) {
    console.log(`\n⚠️  Uncategorized files (${uncategorized.length}):`);
    uncategorized.forEach(f => console.log(`   - ${f}`));
  }
}

// Run the script
organizeSVGs();
