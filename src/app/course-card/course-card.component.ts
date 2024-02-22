import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CategoryType, ICourse } from './../app.component.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {

  categoryType = CategoryType;

  @Input({required: true}) course: ICourse = {} as ICourse;
  @Input({required: true}) index!: number;
  @Output('viewCourseEvent') viewCourseEventEmitter = new EventEmitter<ICourse>();

  viewCourse(): void {
    this.viewCourseEventEmitter.emit(this.course);
  }

  getCssClass(): string {
    return 'beginner';
  }
}
