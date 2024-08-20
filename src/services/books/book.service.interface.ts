import { BookModel } from "@/models/book.model";

export interface BookServiceInterface {
  loadBooks(): Promise<BookModel[]>;
  getById(id: string): Promise<BookModel>;
}
