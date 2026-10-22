import { Book } from "../../models/book";
import { OpenLibraryBook } from "./open-library.types";

export function toBook(doc: OpenLibraryBook): Book {
  return {
    id: doc.key.replace('/works/', ''),
    title: doc.title,
    authors: doc.author_name ?? [],
    firstPublishYear: doc.first_publish_year ?? null,
    coverUrl: doc.cover_i
      ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`
      : null,
    series: doc.series_name?.[0]
      ? `${doc.series_name[0]}${doc.series_position?.[0] ? ' #' + doc.series_position[0] : ''}`
      : null,
    pageCount: doc.number_of_pages_median ?? null,
  };
}