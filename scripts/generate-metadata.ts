#!/usr/bin/env tsx
import * as fs from 'fs';
import * as path from 'path';

const SOURCE_METADATA = path.join(__dirname, '../../../app/downloaded-signs/signs-metadata.json');
const OUTPUT_METADATA = path.join(__dirname, '../src/metadata.json');
const OUTPUT_TYPES = path.join(__dirname, '../src/types.ts');
const OUTPUT_CONSTANTS = path.join(__dirname, '../src/constants.ts');

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
  'U': 'subpanels',
  'UA': 'subpanels',
  'UB': 'subpanels',
  'UC': 'subpanels',
  'UD': 'subpanels',
  'UE': 'subpanels',
  'US': 'symbols',
};

function getCategory(signCode: string | null): string {
  if (!signCode) return 'unknown';

  // Try two-letter prefixes first
  const twoLetter = signCode.substring(0, 2).toUpperCase();
  if (CATEGORY_MAP[twoLetter]) {
    return CATEGORY_MAP[twoLetter];
  }

  // Then try single-letter prefixes
  const oneLetter = signCode.charAt(0).toUpperCase();
  if (CATEGORY_MAP[oneLetter]) {
    return CATEGORY_MAP[oneLetter];
  }

  return 'unknown';
}

function generateMetadata() {
  console.log('📝 Generating enhanced metadata...\n');

  if (!fs.existsSync(SOURCE_METADATA)) {
    console.error(`❌ Source metadata not found: ${SOURCE_METADATA}`);
    process.exit(1);
  }

  const sourceData = JSON.parse(fs.readFileSync(SOURCE_METADATA, 'utf-8'));

  // Enhance each sign with category information
  const enhancedSigns = sourceData.signs.map((sign: any) => ({
    ...sign,
    category: getCategory(sign.signCode),
  }));

  // Create enhanced metadata
  const enhancedMetadata = {
    ...sourceData,
    signs: enhancedSigns,
    categories: [
      'warning',
      'priority',
      'prohibitory',
      'mandatory',
      'special-regulation',
      'direction',
      'guide',
      'distance-locality',
      'motorway',
      'route',
      'service',
      'subpanels',
      'symbols',
    ],
  };

  // Write enhanced metadata
  fs.writeFileSync(OUTPUT_METADATA, JSON.stringify(enhancedMetadata, null, 2));

  // Generate TypeScript types
  const typesContent = `// Auto-generated TypeScript types

export type SignCategory =
  | 'warning'
  | 'priority'
  | 'prohibitory'
  | 'mandatory'
  | 'special-regulation'
  | 'direction'
  | 'guide'
  | 'distance-locality'
  | 'motorway'
  | 'route'
  | 'service'
  | 'subpanels'
  | 'symbols'
  | 'unknown';

export interface SignMetadata {
  filename: string;
  signCode: string | null;
  category: SignCategory;
  description: string;
  sourceUrl: string;
  downloadedAt: string;
}

export interface PackageMetadata {
  scrapedAt: string;
  source: string;
  totalSigns: number;
  uniqueSigns: number;
  duplicatesRemoved: number;
  successfulDownloads: number;
  failedDownloads: number;
  categoryCounts: Record<string, number>;
  categories: SignCategory[];
  signs: SignMetadata[];
}
`;

  fs.writeFileSync(OUTPUT_TYPES, typesContent);

  // Generate constants file
  const constantsContent = `// Auto-generated constants

import type { SignCategory } from './types';

export const SIGN_CATEGORIES: SignCategory[] = [
  'warning',
  'priority',
  'prohibitory',
  'mandatory',
  'special-regulation',
  'direction',
  'guide',
  'distance-locality',
  'motorway',
  'route',
  'service',
  'subpanels',
  'symbols',
];

export const CATEGORY_LABELS: Record<SignCategory, string> = {
  'warning': 'Warning Signs',
  'priority': 'Priority Signs',
  'prohibitory': 'Prohibitory Signs',
  'mandatory': 'Mandatory Signs',
  'special-regulation': 'Special Regulation Signs',
  'direction': 'Direction Signs',
  'guide': 'Guide Signs',
  'distance-locality': 'Distance & Locality Signs',
  'motorway': 'Motorway Signs',
  'route': 'Route Designation Signs',
  'service': 'Service Signs',
  'subpanels': 'Subpanels',
  'symbols': 'Symbols',
  'unknown': 'Unknown Category',
};

export const CATEGORY_DESCRIPTIONS: Record<SignCategory, string> = {
  'warning': 'Signs that warn drivers of potential hazards',
  'priority': 'Signs indicating right of way and priority rules',
  'prohibitory': 'Signs that prohibit or restrict certain actions',
  'mandatory': 'Signs indicating mandatory actions or directions',
  'special-regulation': 'Signs for special traffic regulations and zones',
  'direction': 'Signs providing directional information',
  'guide': 'Signs providing guidance and advance direction information',
  'distance-locality': 'Signs indicating distances and locality information',
  'motorway': 'Signs specific to motorway usage',
  'route': 'Route designation and numbering signs',
  'service': 'Signs indicating services and facilities',
  'subpanels': 'Additional information panels placed below main signs',
  'symbols': 'Symbolic representations used on various signs',
  'unknown': 'Category not determined',
};
`;

  fs.writeFileSync(OUTPUT_CONSTANTS, constantsContent);

  // Print summary
  const categoryCounts: Record<string, number> = {};
  enhancedSigns.forEach((sign: any) => {
    categoryCounts[sign.category] = (categoryCounts[sign.category] || 0) + 1;
  });

  console.log('✅ Metadata generation complete!\n');
  console.log('📊 Signs by category:');
  Object.entries(categoryCounts)
    .sort((a, b) => b[1] - a[1])
    .forEach(([category, count]) => {
      console.log(`   ${category.padEnd(20)} ${count} signs`);
    });

  console.log(`\n📦 Files generated:`);
  console.log(`   - metadata.json`);
  console.log(`   - types.ts`);
  console.log(`   - constants.ts`);
}

// Run the script
generateMetadata();
