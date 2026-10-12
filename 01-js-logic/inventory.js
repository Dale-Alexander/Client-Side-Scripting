export function getAvailableProducts(items) {
  // TODO 1: Return products whose stock is greater than zero.
  return items.filter(p => p.stock > 0);
}

export function findProductById(items, id) {
  // TODO 2: Return the matching product, or undefined.
  return items.find(p => p.id === id);
}

export function inventoryValue(items) {
  // TODO 3: Add price * stock for every product.
  return items.reduce((accumulator, value) => accumulator + (value.stock * value.price), 0);
}

export function productNames(items) {
  // Optional: Return an array of product names using map.
  return items.map(p => p.name);
}
