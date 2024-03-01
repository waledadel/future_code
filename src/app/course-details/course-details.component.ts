import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICourse, courses } from '../app.component.models';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss'
})
export class CourseDetailsComponent implements OnInit {

  course!: ICourse;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res: any) => {
      if (res.id) {
        const foundCourse = courses.find(c => c.id === +res.id);
        if (foundCourse) {
          this.course = foundCourse;
        }
      }
    });
  }
}
