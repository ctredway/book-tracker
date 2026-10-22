import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'search', pathMatch: 'full' },
  {
    path: 'search',
    loadComponent: () =>
      import('./views/search/search').then(m => m.SearchPage),
  },
  {
    path: 'shelf',
    loadComponent: () =>
      import('./views/shelf/shelf-page/shelf-page').then(m => m.ShelfPage),
  },
  {
    path: 'book/:workId',
    loadComponent: () =>
      import('./views/book/book-detail/book-detail-page/book-detail-page').then(m => m.BookDetailPage),
  },
  {
    path: '**',  // anything unmatched; must be last
    loadComponent: () =>
      import('./views/page-not-found/page-not-found').then(m => m.PageNotFound),
  },
];
