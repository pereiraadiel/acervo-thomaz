import { BookModel } from "@/models/book.model";

export interface SearchApiServiceInterface {
	fetchBooks(term: string): Promise<BookModel[]>;
}