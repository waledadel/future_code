import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: []
})
export class HeaderComponent {

  data = {
    courseName: 'Angular for Beginner Course!',
    lessonName: 'Learn Angular in Arabic #31- Angular Routing - Essential Concepts'
  };

  isNavbarFixed = false;

  @HostListener('window:scroll', ['$event']) onScroll() {
    if (window.scrollY > 50) {
      this.isNavbarFixed = true;
    } else {
      this.isNavbarFixed = false;
    }
  }

}
