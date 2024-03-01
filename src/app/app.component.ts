import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { ContentProjectionModule } from './topics/content-projection/content-projection.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ContentProjectionModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  data = {
    courseName: 'Angular for Beginner Course!',
    lessonName: '30- Angular - Component Lifecycle Hook - OnDestroy'
  };
}
