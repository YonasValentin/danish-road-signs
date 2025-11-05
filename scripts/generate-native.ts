#!/usr/bin/env tsx
import * as fs from 'fs';
import * as path from 'path';

const SVG_DIR = path.join(__dirname, '../src/svg');
const OUTPUT_DIR = path.join(__dirname, '../src/native');

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

interface SignProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  [key: string]: any;
}

function extractViewBox(svgContent: string): string {
  const match = svgContent.match(/viewBox="([^"]+)"/);
  return match ? match[1] : '0 0 100 100';
}

function capitalizeSVGElements(content: string): string {
  // Mapping of SVG elements to their React Native equivalents
  // Some elements need special capitalization (e.g., tspan -> TSpan)
  const elementMap: { [key: string]: string } = {
    'path': 'Path',
    'g': 'G',
    'rect': 'Rect',
    'circle': 'Circle',
    'ellipse': 'Ellipse',
    'line': 'Line',
    'polyline': 'Polyline',
    'polygon': 'Polygon',
    'text': 'Text',
    'tspan': 'TSpan',  // Special case: tspan -> TSpan (not Tspan)
    'defs': 'Defs',
    'linearGradient': 'LinearGradient',
    'radialGradient': 'RadialGradient',
    'stop': 'Stop',
    'clipPath': 'ClipPath',
    'mask': 'Mask',
    'pattern': 'Pattern',
    'image': 'Image',
    'use': 'Use',
    'symbol': 'Symbol',
    'marker': 'Marker',
    'foreignObject': 'ForeignObject',
    'switch': 'Switch',
    'a': 'A',
    'view': 'View'
  };

  let result = content;

  for (const [element, capitalizedElement] of Object.entries(elementMap)) {
    // Replace opening tags: <element (with space, newline, tab, or >)
    result = result.replace(
      new RegExp(`<${element}([\\s>])`, 'gi'),
      `<${capitalizedElement}$1`
    );

    // Replace self-closing tags: <element/> -> <Element/>
    result = result.replace(
      new RegExp(`<${element}([^>]*/)>`, 'gi'),
      `<${capitalizedElement}$1>`
    );

    // Replace closing tags: </element> -> </Element>
    result = result.replace(
      new RegExp(`</${element}>`, 'gi'),
      `</${capitalizedElement}>`
    );
  }

  return result;
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

  // CRITICAL: Capitalize SVG elements for React Native
  content = capitalizeSVGElements(content);

  return content;
}

function detectUsedSVGElements(content: string): string[] {
  // Detect which SVG elements are used in the content
  const usedElements = new Set<string>();
  const svgElements = [
    'Path', 'G', 'Rect', 'Circle', 'Ellipse', 'Line', 'Polyline', 'Polygon',
    'Text', 'TSpan', 'Defs', 'LinearGradient', 'RadialGradient', 'Stop',
    'ClipPath', 'Mask', 'Pattern', 'Image', 'Use', 'Symbol', 'Marker',
    'ForeignObject', 'Switch', 'A', 'View'
  ];

  for (const element of svgElements) {
    // Check if element is used in the content (look for opening tag)
    const regex = new RegExp(`<${element}[\\s/>]`, 'gi');
    if (regex.test(content)) {
      usedElements.add(element);
    }
  }

  return Array.from(usedElements).sort();
}

function generateReactNativeComponent(filename: string, svgContent: string): string {
  const componentName = path.basename(filename, '.svg').replace(/[.-]/g, '_');
  const viewBox = extractViewBox(svgContent);
  const innerContent = extractSVGContent(svgContent);

  // Detect which SVG components are used
  const usedElements = detectUsedSVGElements(innerContent);
  const svgImports = usedElements.length > 0
    ? `, { ${usedElements.join(', ')}, SvgProps }`
    : ', { SvgProps }';

  return `import React from 'react';
import Svg${svgImports} from 'react-native-svg';

export interface ${componentName}Props extends Omit<SvgProps, 'viewBox'> {
  width?: number | string;
  height?: number | string;
}

export const ${componentName}: React.FC<${componentName}Props> = ({
  width = 100,
  height = 100,
  ...props
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="${viewBox}"
    {...props}
  >
    ${innerContent}
  </Svg>
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
  content += `export type { SvgProps } from 'react-native-svg';\n`;

  return content;
}

function convertToReactNative() {
  console.log('🔄 Converting SVGs to React Native components...\n');

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
      const componentCode = generateReactNativeComponent(file, svgContent);

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
  console.log('\n✅ React Native conversion complete!\n');
  console.log('📊 Components by category:');
  for (const [category, components] of categoryStats) {
    console.log(`   ${category.padEnd(20)} ${components.length} components`);
  }

  const total = Array.from(categoryStats.values()).reduce((sum, arr) => sum + arr.length, 0);
  console.log(`\n📦 Total: ${total} React Native components generated`);
}

// Run the script
convertToReactNative();
