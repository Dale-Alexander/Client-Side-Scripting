import { DatePipe } from '@angular/common';
import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-calculator',
  imports: [DatePipe, UpperCasePipe, FormsModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class Calculator {
  birthday:Date = new Date(2026, 12, 13);
  isShortFormat:boolean = false;
  firstValue:number = 0;
  secondValue:number = 0;
  result:number = 0;
  calculate():void{
    this.result= this.firstValue * this.secondValue;
  }

  toggleFormat():void{
    this.isShortFormat = !this.isShortFormat ;
  }


}
