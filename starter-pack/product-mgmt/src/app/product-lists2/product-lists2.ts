import { Component } from '@angular/core';

@Component({
  selector: 'product-lists2',
  imports: [],
  templateUrl: './product-lists2.html',
  styleUrl: './product-lists2.css',
})
export class ProductLists2 {
  title: string = 'Welcome to the products-list';
  subTitle: string = 'Lorem ipsum dolor'
  filterText: string = "";
  products: any[] = [
    {
      "id": 1,
      "name": "Leaf Rake",
      "stock": 2,
      "price": 20,
      "releaseDate": "2000-07-11",
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png",
      "rating": 3.2,
      "description": "Leaf rake with 48-inch wodden handle"
    },
    {
      "id": 2,
      "name": "The great gatsby",
      "stock": 2,
      "price": 15,
      "releaseDate": "1995-09-11",
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png",
      "rating": 4.3,
      "description": "Probably bad"
    },
    {
      "id": 3,
      "name": "Beast quest",
      "stock": 44,
      "price": 40,
      "releaseDate": "1977-03-05",
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png",
      "rating": 2.4,
      "description": "Nostalgia"
    }
  ];
}
