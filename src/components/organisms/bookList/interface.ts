import { BookModel } from "@/models/book.model";

export interface BookListOrganismProps {
  books: BookModel[];
}

export interface BookListOrganismViewProps {
	books: BookModel[],
	onBookPress: (bookId: string) => void
}
