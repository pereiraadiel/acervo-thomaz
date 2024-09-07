import { BookModel } from "@/models/book.model";

export interface BookPageProps {
  bookId: string;
}

export interface BookPageViewProps {
  book: BookModel;
  fetching: boolean;
}
