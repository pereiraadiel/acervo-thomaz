import { BookModel } from "@/models/book.model";

export interface BookServiceInterface {
	loadBooks(): Promise<BookModel[]>
}