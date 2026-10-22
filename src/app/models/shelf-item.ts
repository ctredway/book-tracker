import { Book } from "./book";

// models/shelf-entry.ts
export type ShelfStatus = 'want-to-read' | 'reading' | 'read';

export interface ShelfEntry {
  readonly book: Book;
  readonly status: ShelfStatus;
  readonly rating: number | null;      // 1–5
  readonly startedOn: string | null;   // ISO date "2026-10-21"
  readonly finishedOn: string | null;
  readonly notes: string;
  readonly addedAt: string;            // ISO timestamp
}