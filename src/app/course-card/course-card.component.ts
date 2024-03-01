import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, 
  EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
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
export class CourseCardComponent implements OnChanges, OnInit, DoCheck, 
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  categoryType = CategoryType;

  @Input({required: true}) course: ICourse = {} as ICourse;
  @Input({required: true}) index!: number;
  @Input({required: true}) title!: string;
  @Output('viewCourseEvent') viewCourseEventEmitter = new EventEmitter<ICourse>();

  @ViewChild(ChildViewComponent) childViewComp!: ChildViewComponent;

  viewCourse(): void {
    this.viewCourseEventEmitter.emit(this.course);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`%c ngOnChanges ${this.course.id} - ${this.childViewComp}`, 'color: red');
  }

  ngOnInit(): void {
    console.log(`%c ngOnInit ${this.course.id}- ${this.childViewComp}`, 'color: yellow');
  }

  ngDoCheck(): void {
    console.log(`%c ngDoCheck ${this.course.id}- ${this.childViewComp}`, 'color: purple');
  }

  ngAfterContentInit(): void {
    console.log(`%c ngAfterContentInit ${this.course.id}- ${this.childViewComp}`, 'color: blue');
  }

  ngAfterContentChecked(): void {
    console.log(`%c ngAfterContentChecked ${this.course.id}- ${this.childViewComp}`, 'color: white');   
  }

  ngAfterViewInit(): void {
    console.log(`%c ngAfterViewInit ${this.course.id}- ${this.childViewComp.text}`, 'color: gold');   
  }

  ngAfterViewChecked(): void {
    console.log(`%c ngAfterViewChecked ${this.course.id}- ${this.childViewComp.text}`, 'color: brown');     
  }

  ngOnDestroy(): void {
    console.log(`%c ngOnDestroy ${this.course.id}- ${this.childViewComp.text}`, 'color: pink');     
  }
}
