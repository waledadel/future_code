import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { timer } from 'rxjs';


import { ICourse, courses } from './app.component.models';
import { CourseCardComponent } from './course-card/course-card.component';
import { ContentProjectionModule } from './topics/content-projection/content-projection.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseCardComponent, CommonModule, ContentProjectionModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  data = {
    courseName: 'Angular for Beginner Course!',
    lessonName: '29- Angular - Component Lifecycle Hook - AfterViewChecked',
    title: 'Just A  Title!'
  };
  date = new Date();
  readonly courses: Array<ICourse> = courses;

  onCourseClicked(course: ICourse): void {
    console.log('on course clicked!', course.description);
  }

  ngOnInit(): void {
    console.log(`%c App Component: ngOnInit`, 'color: green');
      timer(3000).subscribe(() => this.data.title = 'First Change');
      timer(6000).subscribe(() => this.data.title = 'Second Change');

  }
}
