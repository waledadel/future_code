import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { CategoryType, ICourse } from './../app.component.models';
import { ChildViewComponent } from '../child-view/child-view.component';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss',
  standalone: true,
  imports: [CommonModule, ChildViewComponent]
})
export class CourseCardComponent {

  categoryType = CategoryType;

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

  @Input({required: true}) course!: ICourse;


  constructor(private router: Router) {

  }


  viewCourse(): void {
    // this.router.navigateByUrl(`course-details/${this.course.id}`);
    this.router.navigate([`course-details/${this.course.id}`]);
  }
}
