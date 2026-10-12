let stock: number = 5;
stock = 4;
console.log(stock);
const product_name = "Keyboard";

function printMessage(message:string):void{
    console.log(message);
}

//printMessage(4);
printMessage("Hello");

function lineValue(product : Product) : number{
    return product.price * product.stock;
}
interface Product{
    id:number;
    name:string;
    price:number;
    stock:number;
    description?:string
}
let products: Product[] = [];
products = [{id:1,
    name:"Phone",
    price:1000,
    stock:2,
}]
console.log(products[0]);

function getAvailableProducts(items:Product[]):Product[]{
    return items.filter(p => p.stock > 0);
}
function findProductById(items:Product[],id:number):Product | undefined{
    return items.find(p => p.id == id);
}

