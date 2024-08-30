import { BookServiceInterface } from "./book.service.interface";
import { BookModel, BookStatus } from "@/models/book.model";
import { ApiServiceInterface } from "@/services/api/api.service.interface";
import { apiService } from "@/services/api/api.service";
import { storage } from "@/hooks/stores/useStorage.hook";
import { AuthModel } from "@/models/auth.model";

class BookService implements BookServiceInterface {
  constructor(private readonly apiService: ApiServiceInterface) {}

  async getAllMyBooks(): Promise<BookModel[]> {
    try {
      const auth = await storage.get<AuthModel>("auth");
      if (!auth) {
        return [];
      }
      const books = await this.apiService
        .useAuthentication(auth.accessToken)
        .get<BookModel[]>(`books/getAll`);

      console.log("BookService · getAllMyBooks", books);

      return books;
    } catch (error: any) {
      console.error("book.service: ", Object.keys(error), error.request);
      throw new Error("Oops!! Ocorreu uma falha ao buscar seus livros.");
    }
  }

  async getById(id: string): Promise<BookModel> {
    try {
      const auth = await storage.get<AuthModel>("auth");
      if (!auth) {
        throw new Error("Oops!! Ocorreu uma falha ao buscar suas credenciais.");
      }
      const book = await this.apiService
        .useAuthentication(auth.accessToken)
        .get<BookModel>(`books/getById?id=${id}`);

      console.log("BookService · getById", book);

      return book;
    } catch (error) {
      console.error("book.service: ", error);
      throw new Error("Oops!! Ocorreu uma falha ao buscar o livro.");
    }
  }

  async getByIsbn(isbn: string): Promise<BookModel> {
    try {
      const auth = await storage.get<AuthModel>("auth");
      if (!auth) {
        throw new Error("Oops!! Ocorreu uma falha ao buscar suas credenciais.");
      }
      const book = await this.apiService
        .useAuthentication(auth.accessToken)
        .get<BookModel>(`books/isbn?isbn=${isbn}`);

      console.log("BookService · getByIsbn", book);

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
      const auth = await storage.get<AuthModel>("auth");
      if (!auth) {
        throw new Error("Oops!! Ocorreu uma falha ao buscar suas credenciais.");
      }
      const book = await this.apiService
        .useAuthentication(auth.accessToken)
        .get<BookModel[]>(`books/search?search=${query}&status=${status}`);

      console.log("BookService · search", book);

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
