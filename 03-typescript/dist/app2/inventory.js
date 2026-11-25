export function findAvailableProducts(items) {
    return items.filter(i => i.stock > 0);
}
export function ProductNames(items) {
    return items.map(i => i.name);
}
export function findProductById(items, id) {
    return items.find(i => i.id === id);
}
export function inventoryValue(items) {
    return items.reduce((acc, item) => acc + (item.stock * item.price), 0);
}
export const ProductDescription = (items) => {
    return items.map(i => i.description);
};
