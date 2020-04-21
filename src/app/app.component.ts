import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Space X';

  toolbarItems = [
    { key: 'history', name: 'History' },
    { key: 'rockets', name: 'Rockets' },
    { key: 'about', name: 'About' }
  ];

  // listener for footer component
  captureEmittedData(emittedData) {
    console.log(emittedData);
  }
}
