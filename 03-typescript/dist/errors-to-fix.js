const monitor = { id: 3, name: 'Monitor', price: 200, stock: 2 };
function label(product) { return product.name; }
function findProduct(items, id) {
    return items.find(product => product.id === id);
}
export {};
