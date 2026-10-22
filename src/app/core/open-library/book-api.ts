// core/open-library/book-api.ts
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BookSearchResult } from '../../models/book-search-results';
import { toBook } from './open-library.mapper';
import { OpenLibrarySearchResponse } from './open-library.types';

const SEARCH_URL = 'https://openlibrary.org/search.json';
const FIELDS = [
  'key', 'title', 'author_name', 'first_publish_year',
  'cover_i', 'series_name', 'series_position', 'number_of_pages_median',
].join(',');

@Injectable({ providedIn: 'root' })
export class BookApi {
  private http = inject(HttpClient);

  search(term: string, limit = 20): Observable<BookSearchResult> {
    const params = new HttpParams()
      .set('q', term)
      .set('limit', limit)
      .set('fields', FIELDS);

    return this.http.get<OpenLibrarySearchResponse>(SEARCH_URL, { params }).pipe(
      map(res => ({ total: res.numFound, books: res.docs.map(toBook) })),
    );
  }
}