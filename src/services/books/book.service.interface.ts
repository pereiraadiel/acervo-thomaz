import { BookModel, BookStatus } from "@/models/book.model";

export interface BookServiceInterface {
  getAllMyBooks(status?: BookStatus): Promise<BookModel[]>;
  getById(id: string): Promise<BookModel>;
  getByIsbn(isbn: string): Promise<BookModel>;
  search(query: string, status?: BookStatus): Promise<BookModel[]>;
  changeStatus(id: string, status: BookStatus): Promise<void>;
  readingRegister(id: string, readedPageCount: number): Promise<void>;
  createNote(bookId: string, content: string): Promise<any>;
}
