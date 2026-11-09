import { Component } from '@angular/core';

@Component({
  selector: 'article-list',
  imports: [],
  templateUrl: './article-list.html',
  styleUrl: './article-list.css',
})
export class ArticleList {
title:String = "News Portal"

articles:any[] = [
  {
  "articleId": 1,
  "articleTitle": "Lorem",
  "articleText": "Lorem ipsum dolor",
  "isBreaking": true
  },
    {
  "articleId": 2,
  "articleTitle": "Lorem",
  "articleText": "Lorem ipsum dolor",
  "isBreaking": false
  },
    {
  "articleId": 3,
  "articleTitle": "Lorem",
  "articleText": "Lorem ipsum dolor",
  "isBreaking": true
  },
]
}
