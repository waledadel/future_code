import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { ICourse, courses } from './app.component.models';
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
    courseName: 'Angular Core Course!',
    lessonName: '15- Angular 17 @if else syntax'
  };

  readonly courses: Array<ICourse> = courses;

  onCourseClicked(course: ICourse): void {
    console.log('on course clicked!', course.description);
  }
}
