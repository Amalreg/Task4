  import { Component, signal } from '@angular/core';
  import { RouterOutlet } from '@angular/router';
  import { Navbar } from './components/navbar/navbar';
  import { routes } from './app.routes';




  @Component({
    selector: 'app-root',
    imports: [Navbar,RouterOutlet],
    templateUrl: './app.html',
    styleUrl: './app.css'
  })
  export class App {
    protected readonly title = signal('e-commerce');
  }
