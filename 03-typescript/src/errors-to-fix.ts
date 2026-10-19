// Deliberately broken. Copy the corrected version into src/error-fixes.ts.
// This file lives outside src so it does not break the starter project build.
import type { Product } from './src/product.js';
const monitor: Product = { id: 3, name: 'Monitor', price: 200, stock: 2 };
function label(product: Product): string { return product.name; }
function findProduct(items: Product[], id: number): Product | undefined{
  return items.find(product => product.id === id);
}
