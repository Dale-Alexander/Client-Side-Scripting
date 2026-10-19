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
export interface Product{
    id:number;
    name:string;
    price:number;
    stock:number;
    description?:string
}
let products: Product[] = [];

products = [...products, {
    id:1,
    name:"Phone",
    stock:2,
    price:1000
}];
console.log(products[0]);

function getAvailableProducts(items:Product[]):Product[]{
    return items.filter(p => p.stock > 0);
}
function findProductById(items:Product[],id:number):Product | undefined{
    return items.find(p => p.id == id);
}

const selected = findProductById(products, 1); 
selected ? console.log(selected.name) : console.log("Product not found");


class ProductCatalogue{
    private items:Product[];
    constructor(items:Product[]){
        this.items=items;
    }
    count():number{
        return this.items.length;
    }
}

const pc = new ProductCatalogue(products);
console.log(pc.count());