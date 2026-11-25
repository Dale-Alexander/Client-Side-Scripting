import { Component } from '@angular/core';
// @Component({
//   selector: 'app-welcome-panel',
//   imports: [],
//   templateUrl: './welcome-panel.html',
//   styleUrl: './welcome-panel.css',
// })
@Component({ 
selector: 'app-note', 
imports: [], 
template: '<input [(ngModel)]="note"><p>{{ note }}</p>' 
}) 
export class Note { note = ''; } 
export class WelcomePanel {
  heading:string = "Museum Coding Pratice";
  welcome:string = "Welcome to our beautiful museum";
}
