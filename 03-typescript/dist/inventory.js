export function getAvailableProducts(items) {
    return items.filter(i => i.stock > 0);
}
export function findProductById(items, id) {
    // TODO 2: Return the matching product, or undefined.
    return items.find(i => i.id === id);
}
export function inventoryValue(items) {
    // TODO 3: Add price * stock for every product.
    return items.reduce((sum, val) => sum + (val.stock * val.price), 0);
}
export function productNames(items) {
    // Optional: Return an array of product names using map.
    return items.map(i => i.name);
}
