import { products } from "./products.js";
import { findAvailableProducts, ProductNames, inventoryValue, findProductById, ProductDescription } from "./inventory.js";
console.log("Available: ", findAvailableProducts(products).map(p => p.name).join(', '));
console.log("Product Names are: ", ProductNames(products).join(', '));
console.log("Inventory value is: ", inventoryValue(products));
console.log("Product no 3: ", findProductById(products, 3)?.name ?? "Not Found");
console.log("Product no 99: ", findProductById(products, 99)?.name ?? "Not Found");
console.log("Products description: ", ProductDescription(products).join('\n'));