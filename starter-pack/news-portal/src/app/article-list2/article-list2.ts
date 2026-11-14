import { Component } from '@angular/core';

@Component({
  selector: 'article-list2',
  imports: [],
  templateUrl: './article-list2.html',
  styleUrl: './article-list2.css',
})
export class ArticleList2 {
  title: string = "News Portal";
  articles: any[] = [
    {
      "id": 1,
      "title": "Lorem",
      "text": "text",
      "isBreaking": true
    },
    {
      "id": 2,
      "title": "Lorem2",
      "text": "text2",
      "isBreaking": false
    },
    {
      "id": 3,
      "title": "Lorem3",
      "text": "text3",
      "isBreaking": true
    }
  ];
}
