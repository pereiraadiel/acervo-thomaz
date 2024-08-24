import { BookModel } from "@/models/book.model";

export interface IsbnApiServiceInterface {
  getBookInfoByIsbn(isbn: string): Promise<BookModel>;
}
