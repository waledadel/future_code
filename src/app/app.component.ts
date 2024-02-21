import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgForOf } from '@angular/common';

import { ICourse, courses } from './app.component.models';
import { CourseCardComponent } from './course-card/course-card.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseCardComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  data = {
    courseName: 'Angular Core Course!',
    lessonName: '13- Angular *ngFor Core Directive (Syntax before Angular 17)'
  };

  readonly courses: Array<ICourse> = courses;

  onCourseClicked(course: ICourse): void {
    console.log('on course clicked!', course.description);
  }
}
