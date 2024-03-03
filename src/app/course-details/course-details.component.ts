import { Component } from '@angular/core';
import { ICourse } from '../app.component.models';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss',
  standalone: true,
  imports: []
})
export class CourseDetailsComponent {

  course!: ICourse;

}
