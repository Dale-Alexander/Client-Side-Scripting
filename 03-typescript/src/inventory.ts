import type { Product } from './product.js';

export function getAvailableProducts(items): Product[] {
  // TODO 1: Return products whose stock is greater than zero.
  return [];
}

export function findProductById(items, id): Product | undefined {
  // TODO 2: Return the matching product, or undefined.
  return undefined;
}

export function inventoryValue(items): number {
  // TODO 3: Add price * stock for every product.
  return 0;
}

export function productNames(items: Product[]): string[] {
  // Optional: Return an array of product names using map.
  return [];
}
