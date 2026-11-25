import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';
import { LowerCasePipe } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../dto/product_dto';
import { ConvertToSpacesPipe } from '../pipes/convert-to-spaces-pip';
@Component({
  selector: 'product-lists',
  imports: [FormsModule, UpperCasePipe, LowerCasePipe, CurrencyPipe, ConvertToSpacesPipe],
  templateUrl: './product-lists.html',
  styleUrl: './product-lists.css',
})
export class ProductLists implements OnInit{
  private title: string = 'Product Management system';
  private subTitle: string = 'Welcome to your Product Management System';
  color: string = 'green';
  imageWidth: number = 40;
  imageMargin: number = 2;
  areImagesVisible: boolean = true;
  getSubTitle(): string {
    return this.subTitle;
  }
  listFilter: string = '';
  get filteredProducts(): any[] {
    const search = this.listFilter.toLowerCase().trim();
    if (!search) {
      return this.products;
    }
    return this.products.filter(p =>{
      const searchableText = [
        p.name, 
        p.code, 
        p.releaseDate, 
        p.description,
        p.price,
        p.starRating].join(' ').toLowerCase();
        return searchableText.includes(search);
    });
  }
  getTitle(): string {
    return this.title;
  }

  products: Product[] = [];
initialiseProducts(){
       this.products.push(
          new Product(
            1,
            "Leaf Rake",
            "GDN-0011",
            "March 19, 2016",
            "Leaf rake with 48-inch wooden handle.",
            19.95,
            3.2,
            "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
          ),
          new Product(
            2,
            "Garden Cart",
            "GDN-0023",
            "March 18, 2016",
            "15 gallon capacity rolling garden cart",
            32.99,
            4.2,
            "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
          ),
          new Product(
            5,
            "Hammer",
            "TBX-0048",
            "May 21, 2016",
            "Curved claw steel hammer",
            8.9,
            4.8,
            "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
          ),
          new Product(
            8,
            "Saw",
            "TBX-0022",
            "May 15, 2016",
            "15-inch steel blade hand saw",
            11.55,
            3.7,
            "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
          ),
          new Product(
            10,
            "Video Game Controller",
            "GMG-0042",
            "October 15, 2015",
            "Standard two-button video game controller",
            35.95,
            4.6,
            "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
          ));


  }
  

  toggleImages(): void {
    this.areImagesVisible = !this.areImagesVisible;
  }

  ngOnInit():void{
    this.initialiseProducts();
  }
}
