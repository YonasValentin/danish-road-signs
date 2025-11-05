# @yonas-valentin/danish-road-signs

All 367 Danish road signs as React components. Works in React Native and web with proper tree-shaking.

## Why This Exists

Building a driving theory app for Denmark? You need road signs. Wikipedia has them, but they're SVGs that don't work out of the box in React Native. This package generates proper React components for both platforms from the same source.

## Install

```bash
npm install @yonas-valentin/danish-road-signs react-native-svg
```

The `react-native-svg` dependency is optional for web-only projects.

## Usage

### React Native

```tsx
import { B13, C55 } from '@yonas-valentin/danish-road-signs/native';

<B13 width={80} height={80} />
<C55 width={90} height={90} fill="#ff0000" />
```

### Web

```tsx
import { B13, C55 } from '@yonas-valentin/danish-road-signs/web';

<B13 width={80} height={80} />
<C55 width={90} height={90} fill="#ff0000" />
```

Import by category if you care about bundle size:

```tsx
import { B13 } from '@yonas-valentin/danish-road-signs/native/priority';
import { C55 } from '@yonas-valentin/danish-road-signs/native/prohibitory';
```

## Metadata

```tsx
import { getSignByCode, getSignsByCategory, searchSigns } from '@yonas-valentin/danish-road-signs';

const sign = getSignByCode('B13');
// { signCode: 'B13', category: 'priority', description: 'Stop', ... }

const warningSigns = getSignsByCategory('warning');
// Returns all A-series signs

const results = searchSigns('speed');
// Full-text search across descriptions
```

## Architecture

Signs are organized into 13 categories matching the official Danish system:

| Category | Code | Count |
|----------|------|-------|
| Warning | A | 42 |
| Priority | B | 7 |
| Prohibitory | C | 34 |
| Mandatory | D | 25 |
| Special Regulation | E | 64 |
| Direction | F | 15 |
| Guide | G | 5 |
| Distance & Locality | H | 10 |
| Motorway | I,J,K | 13 |
| Route Designation | L | 9 |
| Service | M | 81 |
| Subpanels | U* | 49 |
| Symbols | US | 13 |

Each sign is available as both a React Native component (using `react-native-svg`) and a standard React component. The build process parses Wikipedia's SVG files and generates properly typed components with consistent props.

## TypeScript

Everything's typed. Component props extend `SvgProps` (React Native) or `SVGProps` (web):

```tsx
import type { SignMetadata, SignCategory } from '@yonas-valentin/danish-road-signs/types';

const sign: SignMetadata = {
  filename: 'A11.svg',
  signCode: 'A11',
  category: 'warning',
  description: 'Dangerous junction',
  sourceUrl: 'https://...',
  downloadedAt: '2025-11-05T...'
};
```

## Real Example

```tsx
import { getSignsByCategory } from '@yonas-valentin/danish-road-signs';
import * as Signs from '@yonas-valentin/danish-road-signs/native/warning';

function SignPicker({ onSelect }) {
  const signs = getSignsByCategory('warning');

  return (
    <FlatList
      data={signs}
      renderItem={({ item }) => {
        const Component = Signs[item.signCode.replace(/[.-]/g, '_')];
        return (
          <TouchableOpacity onPress={() => onSelect(item)}>
            <Component width={60} height={60} />
            <Text>{item.signCode}</Text>
          </TouchableOpacity>
        );
      }}
    />
  );
}
```

## Development

```bash
npm run generate    # Parse SVGs and generate components
npm run build       # Compile TypeScript
```

The generation scripts live in `scripts/`:
- `organize-svgs.ts` - Categorizes raw SVG files by sign code
- `generate-native.ts` - Converts SVGs to React Native components
- `generate-web.ts` - Converts SVGs to web React components
- `generate-metadata.ts` - Builds the metadata JSON and helper functions

## License

MIT. Road sign images from Wikipedia.
