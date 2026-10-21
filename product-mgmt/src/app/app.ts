import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  pageTitle:string = "Product Management System";
  welcomeMessage:string = "Manage your products in one place";
}