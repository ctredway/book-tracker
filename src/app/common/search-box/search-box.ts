import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-search-box',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './search-box.html',
  styleUrl: './search-box.scss',
})
export class SearchBox {
// Inputs: data coming DOWN from the parent (these are signals)
  label = input('Search');
  placeholder = input('Search…');

  // Output: an event going UP to the parent
  do_search = output<string>();

  // Local state: what's typed right now
  protected text = signal('');

  protected onInput(event: Event) {
    this.text.set((event.target as HTMLInputElement).value);
  }

  protected onSubmit(event: Event) {
    event.preventDefault();            // stop the browser's page reload
    const term = this.text().trim();
    if (term) {
      this.do_search.emit(term);          // notify the parent
    }
  }
}
