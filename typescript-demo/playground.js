"use strict";
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
products = [{ id: 1,
        name: "Phone",
        price: 1000,
        stock: 2,
    }];
console.log(products[0]);
