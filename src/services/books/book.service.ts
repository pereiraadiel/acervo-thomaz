import { BookServiceInterface } from "./book.service.interface";
import { BookModel, BookStatus } from "@/models/book.model";
import { ApiServiceInterface } from "@/services/api/api.service.interface";
import { apiService } from "@/services/api/api.service";
import { CacheService, cacheService } from "@/services/cache/cache.service";

class BookService implements BookServiceInterface {
  constructor(
    private readonly apiService: ApiServiceInterface,
    private readonly cacheService: CacheService
  ) {}

  async getAllMyBooks(): Promise<BookModel[]> {
    try {
      const cachedBooks = await this.cacheService.get<BookModel[]>("books");
      if (cachedBooks) return cachedBooks;

      const books = await this.apiService
        .useAuthentication()
        .get<BookModel[]>(`books/getAll`);
      await this.cacheService.save("books", books);

      return books;
    } catch (error) {
      console.error("book.service: ", error);
      throw new Error("Oops!! Ocorreu uma falha ao buscar seus livros.");
    }
  }

  async getById(id: string): Promise<BookModel> {
    try {
      const cachedBook = await this.cacheService.get<BookModel>(`book-${id}`);
      if (cachedBook) return cachedBook;

      const book = await this.apiService
        .useAuthentication()
        .get<BookModel>(`books/getById?id=${id}`);

      await this.cacheService.save(`book-${id}`, book);
      return book;
    } catch (error) {
      console.error("book.service: ", error);
      throw new Error("Oops!! Ocorreu uma falha ao buscar o livro.");
    }
  }

  async getByIsbn(isbn: string): Promise<BookModel> {
    try {
      const cachedBook = await this.cacheService.get<BookModel>(`book-${isbn}`);
      if (cachedBook) return cachedBook;

      const book = await this.apiService
        .useAuthentication()
        .get<BookModel>(`books/isbn?isbn=${isbn}`);

      await this.cacheService.save(`book-${isbn}`, book);
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
      const cachedBooks = await this.cacheService.get<BookModel[]>(
        `books-${query}-${status}`
      );
      if (cachedBooks) return cachedBooks;

      const book = await this.apiService
        .useAuthentication()
        .get<BookModel[]>(`books/search?search=${query}&status=${status}`);

      await this.cacheService.save(`books-${query}-${status}`, book);
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
      this.instance = new BookService(apiService, cacheService);
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
