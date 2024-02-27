import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryType, ICourse } from './../app.component.models';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent implements OnChanges, OnInit {

  categoryType = CategoryType;

  @Input({required: true}) course: ICourse = {} as ICourse;
  @Input({required: true}) index!: number;
  @Input({required: true}) title!: string;
  @Output('viewCourseEvent') viewCourseEventEmitter = new EventEmitter<ICourse>();

  viewCourse(): void {
    this.viewCourseEventEmitter.emit(this.course);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', this.course.id, changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit', this.course.id);
  }
}
