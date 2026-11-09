import { bootstrapApplication } from '@angular/platform-browser';
import { ArticleList } from './app/article-list/article-list';

bootstrapApplication(ArticleList)
  .catch((err) => console.error(err));
