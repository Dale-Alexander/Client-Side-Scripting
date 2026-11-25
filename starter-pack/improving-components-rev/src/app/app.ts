import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Student } from './dto/Student';
import { OnInit } from '@angular/core';
import { MarkToGradePipe } from './pipes/MarkToGradePipe';

@Component({
  imports: [RouterOutlet, MarkToGradePipe],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  protected readonly title = signal('improving-components-rev');
  students:Student[] = [];
  pageTitle:string = 'Student List';
  initialiseStudents():void{
    this.students.push(
      new Student(
        '111111M',
        'https://dummyimage.com/200x200/000/ffffff&text=Joe+Borg',
        'Joe',
        'Borg',
        20
      ),
            new Student(
        '222222M',
        'https://dummyimage.com/200x200/000/ffffff&text=Peter+Attard',
        'Peter',
        'Attard',
        55
      ),
            new Student(
        '333333M',
        'https://dummyimage.com/200x200/000/ffffff&text=Jane+Portelli',
        'Jane',
        'Portelli',
         75
      ),
            new Student(
        '444444M',
        'https://dummyimage.com/200x200/000/ffffff&text=Jill+Zahra',
        'Jill',
        'Zahra',
        88
      ),

    )
  }
  ngOnInit():void{
    this.initialiseStudents();
  }
}
