import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h2>258 contributions in 2024</h2>
    <div class="mainDiv">
      <div class="innerDiv">
        dfgfd
      </div>
    </div>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
