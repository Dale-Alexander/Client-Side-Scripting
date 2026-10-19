"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let stock = 5;
stock = 4;
console.log(stock);
const product_name = "Keyboard";
function printMessage(message) {
    console.log(message);
}
//printMessage(4);
printMessage("Hello");
function lineValue(product) {
    return product.price * product.stock;
}
let products = [];
products = [...products, {
        id: 1,
        name: "Phone",
        stock: 2,
        price: 1000
    }];
console.log(products[0]);
function getAvailableProducts(items) {
    return items.filter(p => p.stock > 0);
}
function findProductById(items, id) {
    return items.find(p => p.id == id);
}
const selected = findProductById(products, 1);
selected ? console.log(selected.name) : console.log("Product not found");
class ProductCatalogue {
    items;
    constructor(items) {
        this.items = items;
    }
    count() {
        return this.items.length;
    }
}
const pc = new ProductCatalogue(products);
console.log(pc.count());
