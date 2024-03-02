import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CourseCardComponent } from '../course-card/course-card.component';
import { ICourse, courses } from '../app.component.models';
import { timer } from 'rxjs';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})
export class CourseListComponent implements OnInit {

  title = 'Default Title';
  readonly courses: Array<ICourse> = courses;

  constructor(private router: Router) {}

  onCourseClicked(course: ICourse): void {
    this.router.navigateByUrl(`course-details/${course.id}`);
  }

  ngOnInit(): void {
    timer(3000).subscribe(() => this.title = 'First Change');
    timer(6000).subscribe(() => this.title = 'Second Change');
  }
}
