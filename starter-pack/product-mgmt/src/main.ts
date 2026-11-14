import { bootstrapApplication }
  from '@angular/platform-browser';
import { ProductLists2 }
  from './app/product-lists2/product-lists2';

bootstrapApplication(ProductLists2)
  .catch(error => console.error(error));
