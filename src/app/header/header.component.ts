import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [RouterModule]
})
export class HeaderComponent {

  data = {
    courseName: 'Angular for Beginner Course!',
    lessonName: 'Learn Angular in Arabic #32- Control navigation with UI elements'
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
