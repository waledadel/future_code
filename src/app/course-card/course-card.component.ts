import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryType, ICourse } from './../app.component.models';
import { ChildViewComponent } from '../child-view/child-view.component';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, ChildViewComponent],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent implements OnInit {

  categoryType = CategoryType;
  // backgroundColor: string = '#fa7901';

  get backgroundColor(): string {
    const defaultColor = '#fa7901';
    if (this.course) {
      switch(this.course.category) {
        case this.categoryType.intermediate:
          return '#00adee';
      case this.categoryType.advanced:
        return 'green';
      case this.categoryType.other:
        return '#b4bd00';
      default:
        return defaultColor;
      }
    } else {
      return defaultColor;
    }
  }

  @Input({required: true}) course: ICourse = {} as ICourse;
  @Input({required: true}) index!: number;
  @Output('viewCourseEvent') viewCourseEventEmitter = new EventEmitter<ICourse>();

  viewCourse(): void {
    this.viewCourseEventEmitter.emit(this.course);
  }

  ngOnInit(): void {
    // if (this.course) {
    //   switch(this.course.category) {
    //     case this.categoryType.intermediate:

    //   }
    // }
  }
}
