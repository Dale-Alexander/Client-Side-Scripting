import { bootstrapApplication }
  from '@angular/platform-browser';
import { ProductLists }
  from './app/product-lists/product-lists';

bootstrapApplication(ProductLists)
  .catch(error => console.error(error));
