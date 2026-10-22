export interface Book {
  readonly id: string;            
  readonly title: string;
  readonly authors: readonly string[];  
  readonly firstPublishYear: number | null;
  readonly coverUrl: string | null;
  readonly series: string | null;       
  readonly pageCount: number | null;
}