import { products } from './products.js';
import { getAvailableProducts, findProductById, inventoryValue, productNames } from './inventory.js';
console.log('Available:', getAvailableProducts(products).map(p => p.name).join(', '));
console.log('Product 3:', findProductById(products, 3)?.name ?? 'Not found');
console.log('Product 99:', findProductById(products, 99)?.name ?? 'Not found');
console.log('Inventory value: EUR', inventoryValue(products).toFixed(2));
console.log('Optional names:', productNames(products).join(', '));