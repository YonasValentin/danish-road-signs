// Auto-generated TypeScript types

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
