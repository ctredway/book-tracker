import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchPage } from './views/search/search';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SearchPage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('book-tracker');
}
