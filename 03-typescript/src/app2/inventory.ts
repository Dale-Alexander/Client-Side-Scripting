import type { Product } from "./product.js";

export function findAvailableProducts(items: Product[]): Product[] {
    return items.filter(i => i.stock > 0);
}

export function ProductNames(items: Product[]): string[] {
    return items.map(i => i.name);
}
export function findProductById(items: Product[], id: number): Product | undefined {
    return items.find(i => i.id === id);
}
export function inventoryValue(items: Product[]): number {
    return items.reduce((acc, item) => acc + (item.stock * item.price), 0);
}

export const ProductDescription = (items: Product[]): (string | undefined)[] => {
    return items.map(i => i.description);
}