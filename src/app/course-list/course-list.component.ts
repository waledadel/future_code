import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseCardComponent } from '../course-card/course-card.component';
import { ICourse, courses } from '../app.component.models';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})
export class CourseListComponent {

  readonly courses: Array<ICourse> = courses;
}
