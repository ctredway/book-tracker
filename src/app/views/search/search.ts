// features/search/search-page/search-page.ts
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { SearchBox } from '../../common/search-box/search-box';
import { BookApi } from '../../core/open-library/book-api';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-page',
  imports: [SearchBox, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './search.html',
})
export class SearchPage {
  protected searchCount = signal(0);
  protected hasTerm = computed(() => this.searchTerm().length > 0);
  private bookApi = inject(BookApi);
  protected searchTerm = signal('');

  protected results = rxResource({          // ✓ field initializer
    params: () => this.searchTerm() || undefined,
    stream: ({ params: term }) => this.bookApi.search(term),
  });

  protected onSearch(term: string) {
    this.searchTerm.set(term);              // just update the signal
  }
}