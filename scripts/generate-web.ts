#!/usr/bin/env tsx
import * as fs from 'fs';
import * as path from 'path';

const SVG_DIR = path.join(__dirname, '../src/svg');
const OUTPUT_DIR = path.join(__dirname, '../src/web');

const CATEGORIES = [
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

function extractViewBox(svgContent: string): string {
  // First try to find an explicit viewBox attribute
  const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/);
  if (viewBoxMatch) {
    return viewBoxMatch[1];
  }

  // If no viewBox, try to construct one from width and height
  const widthMatch = svgContent.match(/width="([^"]+)"/);
  const heightMatch = svgContent.match(/height="([^"]+)"/);

  if (widthMatch && heightMatch) {
    const width = parseFloat(widthMatch[1]);
    const height = parseFloat(heightMatch[1]);
    // Round up to nearest integer for cleaner viewBox
    return `0 0 ${Math.ceil(width)} ${Math.ceil(height)}`;
  }

  // Fallback to a reasonable default
  return '0 0 100 100';
}

function extractSVGContent(svgContent: string): string {
  // Remove the outer <svg> tags and extract the inner content
  let content = svgContent
    .replace(/<\?xml[^>]*>/g, '')
    .replace(/<!DOCTYPE[^>]*>/g, '')
    .replace(/<!--[\s\S]*?-->/g, '') // Remove HTML comments
    .replace(/<svg[^>]*>/, '')
    .replace(/<\/svg>/, '')
    .trim();

  // Remove metadata elements (rdf, dc, cc, etc.)
  content = content
    .replace(/<metadata[\s\S]*?<\/metadata>/gi, '')
    .replace(/<rdf:RDF[\s\S]*?<\/rdf:RDF>/gi, '')
    .replace(/<rdf:[^>]*>[\s\S]*?<\/rdf:[^>]*>/gi, '')
    .replace(/<dc:[^>]*>[\s\S]*?<\/dc:[^>]*>/gi, '')
    .replace(/<cc:[^>]*>[\s\S]*?<\/cc:[^>]*>/gi, '');

  // Remove inkscape/sodipodi namespaced elements and attributes
  content = content
    .replace(/<inkscape:[^>]*>[\s\S]*?<\/inkscape:[^>]*>/gi, '')
    .replace(/<inkscape:[^>]*\/>/gi, '')
    .replace(/<sodipodi:[^>]*>[\s\S]*?<\/sodipodi:[^>]*>/gi, '')
    .replace(/<sodipodi:[^>]*\/>/gi, '')
    .replace(/\s+inkscape:[^\s>="]+="[^"]*"/g, '')
    .replace(/\s+sodipodi:[^\s>="]+="[^"]*"/g, '')
    .replace(/\s+xmlns:inkscape="[^"]*"/g, '')
    .replace(/\s+xmlns:sodipodi="[^"]*"/g, '')
    .replace(/\s+xmlns:xlink="[^"]*"/g, '')
    .replace(/\s+xmlns:rdf="[^"]*"/g, '')
    .replace(/\s+xmlns:dc="[^"]*"/g, '')
    .replace(/\s+xmlns:cc="[^"]*"/g, '');

  // Remove style tags (they cause TypeScript issues)
  content = content.replace(/<style[\s\S]*?<\/style>/gi, '');

  // Remove inline style attributes (they cause TypeScript issues in JSX)
  // We'll let the SVG use its default attribute-based styling instead
  content = content.replace(/\s+style="[^"]*"/gi, '');

  // Convert HTML/XML attributes to camelCase for React
  content = content
    .replace(/fill-rule=/g, 'fillRule=')
    .replace(/clip-rule=/g, 'clipRule=')
    .replace(/stroke-width=/g, 'strokeWidth=')
    .replace(/stroke-linecap=/g, 'strokeLinecap=')
    .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
    .replace(/stroke-miterlimit=/g, 'strokeMiterlimit=')
    .replace(/stroke-dasharray=/g, 'strokeDasharray=')
    .replace(/fill-opacity=/g, 'fillOpacity=')
    .replace(/stroke-opacity=/g, 'strokeOpacity=')
    .replace(/stop-color=/g, 'stopColor=')
    .replace(/stop-opacity=/g, 'stopOpacity=')
    .replace(/font-family=/g, 'fontFamily=')
    .replace(/font-size=/g, 'fontSize=')
    .replace(/font-weight=/g, 'fontWeight=')
    .replace(/xml:space=/g, 'xmlSpace=');

  return content;
}

function generateWebComponent(filename: string, svgContent: string): string {
  const componentName = path.basename(filename, '.svg').replace(/[.-]/g, '_');
  const viewBox = extractViewBox(svgContent);
  const innerContent = extractSVGContent(svgContent);

  return `import React from 'react';

export interface ${componentName}Props extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
}

export const ${componentName}: React.FC<${componentName}Props> = ({
  width = 100,
  height = 100,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="${viewBox}"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    ${innerContent}
  </svg>
);

${componentName}.displayName = '${componentName}';
`;
}

function generateCategoryIndex(category: string, componentNames: string[]): string {
  const exports = componentNames
    .map(name => `export { ${name} } from './${name}';`)
    .join('\n');

  return `// Auto-generated exports for ${category} category
${exports}
`;
}

function generateRootIndex(categories: Map<string, string[]>): string {
  let content = '// Auto-generated root export file\n\n';

  // Export all category modules
  content += '// Category exports\n';
  for (const category of categories.keys()) {
    content += `export * from './${category}';\n`;
  }

  content += '\n// Re-export types\n';
  content += `export type { SVGProps } from 'react';\n`;

  return content;
}

function convertToWeb() {
  console.log('🌐 Converting SVGs to Web React components...\n');

  const categoryStats = new Map<string, string[]>();

  for (const category of CATEGORIES) {
    const categoryPath = path.join(SVG_DIR, category);
    const outputPath = path.join(OUTPUT_DIR, category);

    if (!fs.existsSync(categoryPath)) {
      console.log(`⏭️  Skipping ${category} (no SVGs found)`);
      continue;
    }

    const files = fs.readdirSync(categoryPath).filter(f => f.endsWith('.svg'));

    if (files.length === 0) {
      console.log(`⏭️  Skipping ${category} (no SVGs found)`);
      continue;
    }

    console.log(`📦 Processing ${category} (${files.length} files)...`);

    const componentNames: string[] = [];

    for (const file of files) {
      const inputPath = path.join(categoryPath, file);
      const svgContent = fs.readFileSync(inputPath, 'utf-8');

      const componentName = path.basename(file, '.svg').replace(/[.-]/g, '_');
      const componentCode = generateWebComponent(file, svgContent);

      const outputFile = path.join(outputPath, `${componentName}.tsx`);
      fs.writeFileSync(outputFile, componentCode);

      componentNames.push(componentName);
    }

    // Generate category index
    const indexContent = generateCategoryIndex(category, componentNames);
    fs.writeFileSync(path.join(outputPath, 'index.ts'), indexContent);

    categoryStats.set(category, componentNames);
    console.log(`   ✅ Generated ${componentNames.length} components`);
  }

  // Generate root index
  const rootIndex = generateRootIndex(categoryStats);
  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.ts'), rootIndex);

  // Print summary
  console.log('\n✅ Web React conversion complete!\n');
  console.log('📊 Components by category:');
  for (const [category, components] of categoryStats) {
    console.log(`   ${category.padEnd(20)} ${components.length} components`);
  }

  const total = Array.from(categoryStats.values()).reduce((sum, arr) => sum + arr.length, 0);
  console.log(`\n📦 Total: ${total} Web React components generated`);
}

// Run the script
convertToWeb();
