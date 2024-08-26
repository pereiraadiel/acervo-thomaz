import { BookModel, BookStatus } from "@/models/book.model";

export interface BookServiceInterface {
  getAllMyBooks(status?: BookStatus): Promise<BookModel[]>;
  getById(id: string): Promise<BookModel>;
  getByIsbn(isbn: string): Promise<BookModel>;
  search(query: string, status?: BookStatus): Promise<BookModel[]>;
}
