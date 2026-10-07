import { products } from './products.js';
import { getAvailableProducts, findProductById, inventoryValue, productNames } from './inventory.js';
const missing = findProductById(products, 99);
const output = [
  `Available: ${getAvailableProducts(products).map(p => p.name).join(', ')}`,
  `Product 3: ${findProductById(products, 3)?.name ?? 'Not found'}`,
  `Product 99: ${missing?.name ?? 'Not found'}`,
  `Inventory value: EUR ${inventoryValue(products).toFixed(2)}`,
  `Optional names: ${productNames(products).join(', ')}`
];
output.forEach(line => console.log(line));
if (typeof document !== 'undefined') document.querySelector('#output').textContent = output.join('\n');
