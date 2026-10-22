export interface OpenLibrarySearchResponse {
  numFound: number;
  start: number;
  docs: OpenLibraryBook[];
}

export interface OpenLibraryBook {
  key: string;
  title: string;
  author_name?: string[];
  first_publish_year?: number;
  cover_i?: number;
  series_name?: string[];
  series_position?: number[];
  number_of_pages_median?: number;
}