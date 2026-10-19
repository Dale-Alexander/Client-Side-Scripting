import { products } from './products.js';
class ProductCatalogue {
    items;
    constructor(items) {
        this.items = items;
    }
    findById(id) {
        return this.items.find(product => product.id === id);
    }
    printCount() {
        console.log(`Products: ${this.items.length}`);
    }
}
const catalogue = new ProductCatalogue(products);
catalogue.printCount();
console.log(catalogue.findById(1)?.name);
// catalogue.items is private in TypeScript. Access through the public methods.
// Ordinary TypeScript private is a compile-time restriction, not a security boundary.
