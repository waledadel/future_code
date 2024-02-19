import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoryType, ICourse } from './app.component.models';
import { CourseCardComponent } from './course-card/course-card.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  data = {
    title: 'Angular Core Course!'
  };

  readonly courses: Array<ICourse> = [
    {
      id: 1,
      description: 'Angular 17 for beginners',
      imageUrl: 'assets/images/angular_for_beginners.png',
      lessonsCount: 70,
      longDescription: 'Test a desc',
      category: CategoryType.beginners
    },
    {
      id: 2,
      description: 'RxJs',
      imageUrl: 'assets/images/rxjs.PNG',
      lessonsCount: 40,
      longDescription: 'We will then write our own Observable from first principles: we will implement our own HTTP observable that will allow us to handle backend HTTP requests while supporting error handling and cancellation.',
      category: CategoryType.advanced
    },
    {
      id: 3,
      description: 'NgRx',
      imageUrl: 'assets/images/ngrx.PNG',
      lessonsCount: 48,
      longDescription: 'In this course, we are going to take a small existing application that is built without any state management. We are going to understand what are the consequences of not doing state management by identifying some problems that the application has in its initial form.',
      category: CategoryType.advanced
    }
  ];

  beginnerCourse = this.courses[0];
  rxjsCourse = this.courses[1];
  ngrxCourse = this.courses[2];

  onCourseClicked(course: ICourse): void {
    console.log('on course clicked!', course.description);
  }
}
