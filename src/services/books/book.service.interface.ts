import { BookModel } from "@/models/book.model";

export interface BookServiceInterface {
  getAllMyBooks(): Promise<BookModel[]>;
  getById(id: string): Promise<BookModel>;
  getByIsbn(isbn: string): Promise<BookModel>;
  search(query: string): Promise<BookModel[]>;
}
