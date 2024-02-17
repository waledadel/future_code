import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  data = {
    title: 'Angular Core Course!',
    count: 10,
    course: {
      name: 'Test'
    }
  };
}
