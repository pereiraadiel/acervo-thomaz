import { BookServiceInterface } from "./book.service.interface";
import { BookModel, BookStatus } from "@/models/book.model";
import { ApiServiceInterface } from "@/services/api/api.service.interface";
import { apiService } from "@/services/api/api.service";

class BookService implements BookServiceInterface {
  private accessToken: string = "";

  constructor(private readonly apiService: ApiServiceInterface) {}

  async getAllMyBooks(): Promise<BookModel[]> {
    try {
      const books = await this.apiService
        .useAuthentication(this.accessToken)
        .get<BookModel[]>(`books/getAll`);

      return books;
    } catch (error) {
      console.error("book.service: ", error);
      throw new Error("Oops!! Ocorreu uma falha ao buscar seus livros.");
    }
  }

  async getById(id: string): Promise<BookModel> {
    try {
      const book = await this.apiService
        .useAuthentication(this.accessToken)
        .get<BookModel>(`books/getById?id=${id}`);

      return book;
    } catch (error) {
      console.error("book.service: ", error);
      throw new Error("Oops!! Ocorreu uma falha ao buscar o livro.");
    }
  }

  async getByIsbn(isbn: string): Promise<BookModel> {
    try {
      const book = await this.apiService
        .useAuthentication(this.accessToken)
        .get<BookModel>(`books/isbn?isbn=${isbn}`);

      return book;
    } catch (error) {
      console.error("book.service: ", error);
      throw new Error("Oops!! Ocorreu uma falha ao buscar o livro.");
    }
  }

  async search(
    query: string,
    status: BookStatus = "unknown"
  ): Promise<BookModel[]> {
    try {
      const book = await this.apiService
        .useAuthentication(this.accessToken)
        .get<BookModel[]>(`books/search?search=${query}&status=${status}`);

      return book;
    } catch (error) {
      console.error("book.service: ", error);
      throw new Error("Oops!! Ocorreu uma falha ao buscar o livro.");
    }
  }
}

class Singleton {
  private instance!: BookServiceInterface;

  constructor() {
    if (!this.instance) {
      this.instance = new BookService(apiService);
    }
  }

  getInstance() {
    return this.instance;
  }
}

const singleton = new Singleton();
const bookService = singleton.getInstance();
Object.freeze(bookService);

export { bookService };
