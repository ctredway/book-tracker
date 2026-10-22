// models/book-search-result.ts
import { Book } from './book';

export interface BookSearchResult {
  readonly total: number;
  readonly books: readonly Book[];
}