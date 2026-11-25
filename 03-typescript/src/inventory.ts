import type { Product } from './product.js';

export function getAvailableProducts(items:Product[]): Product[] {
  return items.filter(i => i.stock > 0);
}

export function findProductById(items:Product[], id:number): Product | undefined {
  // TODO 2: Return the matching product, or undefined.
  return items.find(i => i.id === id);
}

export function inventoryValue(items : Product[]): number {
  // TODO 3: Add price * stock for every product.
  return items.reduce((sum, val) => sum + (val.stock * val.price), 0);
}

export function productNames(items: Product[]): string[] {
  // Optional: Return an array of product names using map.
  return items.map(i => i.name);
}
