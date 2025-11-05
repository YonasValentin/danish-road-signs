// Main package entry point
import metadata from './metadata.json';
import type { SignMetadata, SignCategory, PackageMetadata } from './types';
import { SIGN_CATEGORIES, CATEGORY_LABELS, CATEGORY_DESCRIPTIONS } from './constants';

export { SIGN_CATEGORIES, CATEGORY_LABELS, CATEGORY_DESCRIPTIONS };
export type { SignMetadata, SignCategory, PackageMetadata };

/**
 * Get all signs metadata
 */
export function getAllSigns(): SignMetadata[] {
  return metadata.signs as SignMetadata[];
}

/**
 * Get signs by category
 */
export function getSignsByCategory(category: SignCategory): SignMetadata[] {
  return (metadata.signs as SignMetadata[]).filter(sign => sign.category === category);
}

/**
 * Get sign metadata by code
 */
export function getSignByCode(code: string): SignMetadata | undefined {
  return (metadata.signs as SignMetadata[]).find(
    sign => sign.signCode?.toLowerCase() === code.toLowerCase()
  );
}

/**
 * Search signs by description
 */
export function searchSigns(query: string): SignMetadata[] {
  const lowerQuery = query.toLowerCase();
  return (metadata.signs as SignMetadata[]).filter(
    sign =>
      sign.description.toLowerCase().includes(lowerQuery) ||
      sign.signCode?.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Get package metadata
 */
export function getPackageMetadata(): PackageMetadata {
  return metadata as PackageMetadata;
}

/**
 * Get count of signs per category
 */
export function getCategoryStats(): Record<SignCategory, number> {
  const stats: Record<string, number> = {};

  (metadata.signs as SignMetadata[]).forEach(sign => {
    stats[sign.category] = (stats[sign.category] || 0) + 1;
  });

  return stats as Record<SignCategory, number>;
}
