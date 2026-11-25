import { Component } from '@angular/core';
import { GalleryBanner } from './gallery-banner/gallery-banner';
import { OnInit } from '@angular/core';
import { Exhibit } from './models/exhibit';
@Component({
  selector: 'app-root',
  imports: [GalleryBanner],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  exhibits:Exhibit[] = [];
  populateExhibits():void{
    this.exhibits.push(
      new Exhibit(
        1,
        'Ancient Coints',
        'History',
        10,
        true,
        false
      ),
            new Exhibit(
        2,
        'Ocean Life',
        'Nature',
        20,
        false,
        false
      ),      new Exhibit(
        3,
        'Space Exploration',
        'Science',
        15,
        true,
        false
      ),      new Exhibit(
        4,
        'Modern Sculpture',
        'Art',
        25,
        false,
        false
      ),
    )
  }
  ngOnInit(): void {
    this.populateExhibits();
  }
  toggleVisit(exhibit:Exhibit):void{
    exhibit.isVisited = !exhibit.isVisited;
  }
  visitedCount():number{
    return this.exhibits.filter(e => e.isVisited).length;
  }
  remainingExhibits():number{
    return this.exhibits.length - this.visitedCount();
  }
  featuredAndVisited():number{
    return this.visitedCount() + this.exhibits.filter(e => e.isFeatured && !e.isVisited).length;
  }
  totalViewedMinutes():number{
    return this.exhibits.filter(e => e.isVisited).reduce((acc, value) => acc + value.viewingMinutes, 0);
  }
  message():string{
    return this.visitedCount() ? 'Your visit is in progress' : 'Your visit has not started';
  }
}
